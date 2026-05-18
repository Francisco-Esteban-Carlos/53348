import analizadorVisitor from "./generated/analizadorVisitor.js";


class AnalizadorTranslatorImpl
extends analizadorVisitor{


visitPrograma(ctx){

return ctx
.instruccion()
.map(
i=>this.visit(i)
)
.join("\n");

}



visitDecision(ctx){

let condicion=
this.visit(
ctx.condicion()
);


let sentencias=
ctx.sentencia()
.map(
s=>this.visit(s)
)
.join("\n");


let codigo=


`if(${condicion}){

${sentencias}

}`;


if(ctx.SINO()){

codigo+=

`

else{

${sentencias}

}`;

}

return codigo;

}



visitCondicion(ctx){

return
ctx.VERDADERO()
?
"true"
:
"false";

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


return
`console.log("${texto}");`;

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


export default
AnalizadorTranslatorImpl;