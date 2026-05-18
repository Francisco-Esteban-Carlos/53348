grammar analizador;
//gramática
programa: instruccion+; 
instruccion
    : decision
    ;
decision
    : SI condicion ENTONCES CORCHETE_IZQ (sentencia)* CORCHETE_DER  ( SINO CORCHETE_IZQ (sentencia)* CORCHETE_DER )?
    ;
condicion
    : VERDADERO
    | FALSO
    ;
sentencia 
    : salida+
    | terminar
    ;
salida
    : IMPRIMIR PARENTESIS_IZQ cadena PARENTESIS_DER PUNTO_COMA
    ;
terminar
    : SALIR PUNTO_COMA
    ;
cadena 
    : COMILLAS (caracter)* COMILLAS
    ;
caracter 
    : LETRA
    | DIGITO
    | simbolo
    ;
simbolo
    : PUNTO
    | COMA
    | EXCLAMACION
    | INTERROGACION
    | DOS_PUNTOS
    | PUNTO_COMA
    ;
//lexemas
SI: 'si';
ENTONCES: 'entonces';
SINO: 'sino';
VERDADERO: 'verdadero';
FALSO: 'falso'; 
IMPRIMIR: 'imprimir';
SALIR: 'salir';
LETRA:  [a-zA-Z]+;
DIGITO: [0-9]+;
PUNTO: '.';
COMA: ',';
EXCLAMACION: '!';
INTERROGACION: '?';
DOS_PUNTOS: ':';
PUNTO_COMA: ';';    
CORCHETE_IZQ: '{';
CORCHETE_DER: '}';
PARENTESIS_IZQ: '(';
PARENTESIS_DER: ')';
COMILLAS: '"';
WS: [ \t\r\n]+ -> skip ;
