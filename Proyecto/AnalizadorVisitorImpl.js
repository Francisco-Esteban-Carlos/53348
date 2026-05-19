import analizadorVisitor from "./generated/analizadorVisitor.js";

class AnalizadorVisitorImpl extends analizadorVisitor{

    constructor(){

        super();

        this.memoria={};
        this.salir=false;

    }


    visitPrograma(ctx){

        for(let inst of ctx.instruccion()){

            if(this.salir)return;

            this.visit(inst);

        }

    }



    visitDecision(ctx){

const condicion=
this.visit(
ctx.condicion()
);


// sin sino
if(!ctx.SINO()){

if(condicion){

ctx.sentencia()
.forEach(
s=>this.visit(s)
);

}

return;

}


// con sino

let mitad=
Math.floor(
ctx.sentencia().length/2
);


if(condicion){

ctx.sentencia()
.slice(0,mitad)
.forEach(
s=>this.visit(s)
);

}
else{

ctx.sentencia()
.slice(mitad)
.forEach(
s=>this.visit(s)
);

}

}



visitCondicion(ctx){

return ctx.VERDADERO()
? true
: false;

}



    visitCondicion(ctx){

        return ctx.VERDADERO()!=null;

    }



    visitSentencia(ctx){

        if(ctx.terminar())
            this.visit(
                ctx.terminar()
            );

        for(let s of ctx.salida()){

            this.visit(s);

        }

    }



    visitSalida(ctx){

        let texto=
            this.visit(
                ctx.cadena()
            );

        console.log(texto);

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

        console.log(
            "Programa terminado"
        );

        this.salir=true;

    }

}

export default AnalizadorVisitorImpl;