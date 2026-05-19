import fs from 'fs';
import antlr4 from 'antlr4';

import AnalizadorLexer from './generated/AnalizadorLexer.js';
import AnalizadorParser from './generated/AnalizadorParser.js';

import AnalizadorVisitorImpl from './AnalizadorVisitorImpl.js';
import AnalizadorTranslatorImpl from './AnalizadorTranslatorImpl.js';


// =====================
// Leer archivo entrada
// =====================

const input = fs.readFileSync('input.txt','utf8');

const chars = new antlr4.InputStream(input);



// =====================
// Lexer y parser
// =====================

const lexer = new AnalizadorLexer(chars);

const tokens = new antlr4.CommonTokenStream(lexer);

const parser = new AnalizadorParser(tokens);

parser.buildParseTrees=true;

// =====================
// Tabla Lexema-Token
// =====================

tokens.fill();

console.log("\n=================================");
console.log("TABLA LEXEMA-TOKEN");
console.log("=================================");

tokens.tokens.forEach(token=>{

if(token.type!==-1){

console.log(
`${token.text}
-> ${AnalizadorLexer.symbolicNames[token.type]}`
);

}

});

// =====================
// Manejo errores
// =====================

const erroresLexicos=[];
const erroresSintacticos=[];


// errores lexer

lexer.removeErrorListeners();

lexer.addErrorListener({

    syntaxError:(recognizer,
        offendingSymbol,
        line,
        column,
        msg)=>{

        erroresLexicos.push({

            linea:line,
            columna:column,
            mensaje:msg

        });

    }

});


// errores parser

parser.removeErrorListeners();

parser.addErrorListener({

syntaxError:
(recognizer,
offendingSymbol,
line,
column,
msg)=>{

erroresSintacticos.push({

linea:line,
columna:column,
mensaje:msg

});

},

reportAmbiguity(){},
reportAttemptingFullContext(){},
reportContextSensitivity(){}

});



// construye árbol

const tree=parser.programa();


// =====================
// Resultado análisis
// =====================

console.log("=================================");
console.log("ANÁLISIS");
console.log("=================================");


const totalErrores=
erroresLexicos.length+
erroresSintacticos.length;


if(totalErrores>0){

console.log(
`Errores encontrados: ${totalErrores}`
);


if(erroresLexicos.length>0){

console.log("\nERRORES LÉXICOS:");

erroresLexicos.forEach(e=>{

console.log(
`Línea ${e.linea}
Col ${e.columna}
${e.mensaje}`
);

});

}


if(erroresSintacticos.length>0){

console.log("\nERRORES SINTÁCTICOS:");

erroresSintacticos.forEach(e=>{

console.log(
`Línea ${e.linea}
Col ${e.columna}
${e.mensaje}`
);

});

}


process.exit(1);

}



console.log("Entrada válida");


// =====================
// Árbol sintáctico
// =====================


console.log("\nÁRBOL:\n");

console.log(

tree.toStringTree(
parser.ruleNames,
parser
)

);


// =====================
// Traducción JS
// =====================

console.log("\nTRADUCCIÓN JS:\n");


const traductor=
new AnalizadorTranslatorImpl();

const codigoJS=
traductor.visit(tree);

console.log(codigoJS);


// =====================
// Ejecutar visitor
// =====================

console.log("\nEJECUCIÓN\n");


const visitor=
new AnalizadorVisitorImpl();


try{

visitor.visit(tree);


console.log(
"\nFin programa"
);

console.log(
visitor.memoria
);


}catch(e){

console.log(
"Error ejecución"
);

console.log(
e.message
);

}