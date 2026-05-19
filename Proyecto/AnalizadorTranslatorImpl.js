import analizadorVisitor from "./generated/analizadorVisitor.js";

class AnalizadorTranslatorImpl
extends analizadorVisitor{


visitPrograma(ctx){

return ctx
.instruccion()
.map(i=>this.visit(i))
.join("\n");

}


visitDecision(ctx){

let condicion=
this.visit(
ctx.condicion()
);


// si NO hay sino
if(!ctx.SINO()){

let sentencias=
ctx.sentencia()
.map(
s=>this.visit(s)
)
.join("\n");


return `

if(${condicion}){

${sentencias}

}

`;

}


// si HAY sino

let mitad=
Math.floor(
ctx.sentencia().length/2
);


let sentenciasIf=
ctx.sentencia()
.slice(0,mitad)
.map(
s=>this.visit(s)
)
.join("\n");


let sentenciasElse=
ctx.sentencia()
.slice(mitad)
.map(
s=>this.visit(s)
)
.join("\n");


return `

if(${condicion}){

${sentenciasIf}

}

else{

${sentenciasElse}

}

`;

}



visitCondicion(ctx){

if(ctx.VERDADERO()){

return "true";

}

if(ctx.FALSO()){

return "false";

}

}



visitSentencia(ctx){

if(ctx.terminar()){

return this.visit(
ctx.terminar()
);

}

return ctx
.salida()
.map(
s=>this.visit(s)
)
.join("\n");

}



visitSalida(ctx){

let texto=
this.visit(
ctx.cadena()
);

return `console.log("${texto}");`;

}



visitCadena(ctx){

return ctx
.caracter()
.map(
c=>this.visit(c)
)
.join("");

}


visitCaracter(ctx){

return ctx.getText();

}


visitTerminar(ctx){

return "return;";

}

}

export default AnalizadorTranslatorImpl;