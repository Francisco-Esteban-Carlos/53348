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


        if(condicion){

            let bloque=
                ctx.sentencia();


            for(let s of bloque){

                if(this.salir)return;

                this.visit(s);

            }

        }

        else if(ctx.SINO()){

            let bloque=
                ctx.sentencia();


            if(bloque.length>1){

                for(let s of bloque){

                    if(this.salir)return;

                    this.visit(s);

                }

            }

        }

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