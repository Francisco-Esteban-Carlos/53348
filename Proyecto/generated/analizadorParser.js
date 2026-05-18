// Generated from c:/Users/rafac/OneDrive/Documentos/Facu/Sintaxis/53348/Proyecto/analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,21,85,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,22,8,0,11,0,12,0,23,1,1,
1,1,1,2,1,2,1,2,1,2,1,2,5,2,33,8,2,10,2,12,2,36,9,2,1,2,1,2,1,2,1,2,5,2,
42,8,2,10,2,12,2,45,9,2,1,2,3,2,48,8,2,1,3,1,3,1,4,4,4,53,8,4,11,4,12,4,
54,1,4,3,4,58,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,5,7,71,8,7,
10,7,12,7,74,9,7,1,7,1,7,1,8,1,8,1,8,3,8,81,8,8,1,9,1,9,1,9,0,0,10,0,2,4,
6,8,10,12,14,16,18,0,2,1,0,4,5,1,0,10,15,83,0,21,1,0,0,0,2,25,1,0,0,0,4,
27,1,0,0,0,6,49,1,0,0,0,8,57,1,0,0,0,10,59,1,0,0,0,12,65,1,0,0,0,14,68,1,
0,0,0,16,80,1,0,0,0,18,82,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,23,1,0,
0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,26,3,4,2,0,26,3,1,0,0,0,
27,28,5,1,0,0,28,29,3,6,3,0,29,30,5,2,0,0,30,34,5,16,0,0,31,33,3,8,4,0,32,
31,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,37,1,0,0,0,36,34,
1,0,0,0,37,47,5,17,0,0,38,39,5,3,0,0,39,43,5,16,0,0,40,42,3,8,4,0,41,40,
1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,43,1,
0,0,0,46,48,5,17,0,0,47,38,1,0,0,0,47,48,1,0,0,0,48,5,1,0,0,0,49,50,7,0,
0,0,50,7,1,0,0,0,51,53,3,10,5,0,52,51,1,0,0,0,53,54,1,0,0,0,54,52,1,0,0,
0,54,55,1,0,0,0,55,58,1,0,0,0,56,58,3,12,6,0,57,52,1,0,0,0,57,56,1,0,0,0,
58,9,1,0,0,0,59,60,5,6,0,0,60,61,5,18,0,0,61,62,3,14,7,0,62,63,5,19,0,0,
63,64,5,15,0,0,64,11,1,0,0,0,65,66,5,7,0,0,66,67,5,15,0,0,67,13,1,0,0,0,
68,72,5,20,0,0,69,71,3,16,8,0,70,69,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,
72,73,1,0,0,0,73,75,1,0,0,0,74,72,1,0,0,0,75,76,5,20,0,0,76,15,1,0,0,0,77,
81,5,8,0,0,78,81,5,9,0,0,79,81,3,18,9,0,80,77,1,0,0,0,80,78,1,0,0,0,80,79,
1,0,0,0,81,17,1,0,0,0,82,83,7,1,0,0,83,19,1,0,0,0,8,23,34,43,47,54,57,72,
80];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class analizadorParser extends antlr4.Parser {

    static grammarFileName = "analizador.g4";
    static literalNames = [ null, "'si'", "'entonces'", "'sino'", "'verdadero'", 
                            "'falso'", "'imprimir'", "'salir'", null, null, 
                            "'.'", "','", "'!'", "'?'", "':'", "';'", "'{'", 
                            "'}'", "'('", "')'", "'\"'" ];
    static symbolicNames = [ null, "SI", "ENTONCES", "SINO", "VERDADERO", 
                             "FALSO", "IMPRIMIR", "SALIR", "LETRA", "DIGITO", 
                             "PUNTO", "COMA", "EXCLAMACION", "INTERROGACION", 
                             "DOS_PUNTOS", "PUNTO_COMA", "CORCHETE_IZQ", 
                             "CORCHETE_DER", "PARENTESIS_IZQ", "PARENTESIS_DER", 
                             "COMILLAS", "WS" ];
    static ruleNames = [ "programa", "instruccion", "decision", "condicion", 
                         "sentencia", "salida", "terminar", "cadena", "caracter", 
                         "simbolo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = analizadorParser.ruleNames;
        this.literalNames = analizadorParser.literalNames;
        this.symbolicNames = analizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, analizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.instruccion();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, analizadorParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.decision();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decision() {
	    let localctx = new DecisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, analizadorParser.RULE_decision);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(analizadorParser.SI);
	        this.state = 28;
	        this.condicion();
	        this.state = 29;
	        this.match(analizadorParser.ENTONCES);
	        this.state = 30;
	        this.match(analizadorParser.CORCHETE_IZQ);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 31;
	            this.sentencia();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 37;
	        this.match(analizadorParser.CORCHETE_DER);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 38;
	            this.match(analizadorParser.SINO);
	            this.state = 39;
	            this.match(analizadorParser.CORCHETE_IZQ);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6 || _la===7) {
	                this.state = 40;
	                this.sentencia();
	                this.state = 45;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 46;
	            this.match(analizadorParser.CORCHETE_DER);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, analizadorParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===5)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, analizadorParser.RULE_sentencia);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 51;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 54; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, analizadorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(analizadorParser.IMPRIMIR);
	        this.state = 60;
	        this.match(analizadorParser.PARENTESIS_IZQ);
	        this.state = 61;
	        this.cadena();
	        this.state = 62;
	        this.match(analizadorParser.PARENTESIS_DER);
	        this.state = 63;
	        this.match(analizadorParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, analizadorParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(analizadorParser.SALIR);
	        this.state = 66;
	        this.match(analizadorParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, analizadorParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(analizadorParser.COMILLAS);
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65280) !== 0)) {
	            this.state = 69;
	            this.caracter();
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 75;
	        this.match(analizadorParser.COMILLAS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, analizadorParser.RULE_caracter);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.match(analizadorParser.LETRA);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            this.match(analizadorParser.DIGITO);
	            break;
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 79;
	            this.simbolo();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simbolo() {
	    let localctx = new SimboloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, analizadorParser.RULE_simbolo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 64512) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

analizadorParser.EOF = antlr4.Token.EOF;
analizadorParser.SI = 1;
analizadorParser.ENTONCES = 2;
analizadorParser.SINO = 3;
analizadorParser.VERDADERO = 4;
analizadorParser.FALSO = 5;
analizadorParser.IMPRIMIR = 6;
analizadorParser.SALIR = 7;
analizadorParser.LETRA = 8;
analizadorParser.DIGITO = 9;
analizadorParser.PUNTO = 10;
analizadorParser.COMA = 11;
analizadorParser.EXCLAMACION = 12;
analizadorParser.INTERROGACION = 13;
analizadorParser.DOS_PUNTOS = 14;
analizadorParser.PUNTO_COMA = 15;
analizadorParser.CORCHETE_IZQ = 16;
analizadorParser.CORCHETE_DER = 17;
analizadorParser.PARENTESIS_IZQ = 18;
analizadorParser.PARENTESIS_DER = 19;
analizadorParser.COMILLAS = 20;
analizadorParser.WS = 21;

analizadorParser.RULE_programa = 0;
analizadorParser.RULE_instruccion = 1;
analizadorParser.RULE_decision = 2;
analizadorParser.RULE_condicion = 3;
analizadorParser.RULE_sentencia = 4;
analizadorParser.RULE_salida = 5;
analizadorParser.RULE_terminar = 6;
analizadorParser.RULE_cadena = 7;
analizadorParser.RULE_caracter = 8;
analizadorParser.RULE_simbolo = 9;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_instruccion;
    }

	decision() {
	    return this.getTypedRuleContext(DecisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DecisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_decision;
    }

	SI() {
	    return this.getToken(analizadorParser.SI, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ENTONCES() {
	    return this.getToken(analizadorParser.ENTONCES, 0);
	};

	CORCHETE_IZQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.CORCHETE_IZQ);
	    } else {
	        return this.getToken(analizadorParser.CORCHETE_IZQ, i);
	    }
	};


	CORCHETE_DER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.CORCHETE_DER);
	    } else {
	        return this.getToken(analizadorParser.CORCHETE_DER, i);
	    }
	};


	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	SINO() {
	    return this.getToken(analizadorParser.SINO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterDecision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitDecision(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitDecision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(analizadorParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(analizadorParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(analizadorParser.IMPRIMIR, 0);
	};

	PARENTESIS_IZQ() {
	    return this.getToken(analizadorParser.PARENTESIS_IZQ, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	PARENTESIS_DER() {
	    return this.getToken(analizadorParser.PARENTESIS_DER, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(analizadorParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(analizadorParser.SALIR, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(analizadorParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_cadena;
    }

	COMILLAS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.COMILLAS);
	    } else {
	        return this.getToken(analizadorParser.COMILLAS, i);
	    }
	};


	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(analizadorParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(analizadorParser.DIGITO, 0);
	};

	simbolo() {
	    return this.getTypedRuleContext(SimboloContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimboloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_simbolo;
    }

	PUNTO() {
	    return this.getToken(analizadorParser.PUNTO, 0);
	};

	COMA() {
	    return this.getToken(analizadorParser.COMA, 0);
	};

	EXCLAMACION() {
	    return this.getToken(analizadorParser.EXCLAMACION, 0);
	};

	INTERROGACION() {
	    return this.getToken(analizadorParser.INTERROGACION, 0);
	};

	DOS_PUNTOS() {
	    return this.getToken(analizadorParser.DOS_PUNTOS, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(analizadorParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterSimbolo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitSimbolo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitSimbolo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




analizadorParser.ProgramaContext = ProgramaContext; 
analizadorParser.InstruccionContext = InstruccionContext; 
analizadorParser.DecisionContext = DecisionContext; 
analizadorParser.CondicionContext = CondicionContext; 
analizadorParser.SentenciaContext = SentenciaContext; 
analizadorParser.SalidaContext = SalidaContext; 
analizadorParser.TerminarContext = TerminarContext; 
analizadorParser.CadenaContext = CadenaContext; 
analizadorParser.CaracterContext = CaracterContext; 
analizadorParser.SimboloContext = SimboloContext; 
