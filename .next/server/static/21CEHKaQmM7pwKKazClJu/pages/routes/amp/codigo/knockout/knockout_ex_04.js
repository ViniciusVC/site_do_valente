module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QDfY");


/***/ }),

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "8hY/":
/***/ (function(module, exports) {

module.exports = require("next/amp");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9kyW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "D4zN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JkDD");




var Img = function Img(props) {
  var varSrc = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.src, "/static/assetsv5/img/oi-logo-cinza.jpg"); //if(props.src!=undefined){varSrc=props.src};

  var varWidth = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.width, varWidth); //if(props.width!=undefined){varWidth=props.width};

  var varHeight = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.height, varWidth); //if( props.height!=undefined){varHeight=props.height};

  var varHeight = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.height, varWidth); //if( props.height!=undefined){varHeight=props.height};

  var varAlt = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.alt, "Imagem Portal Oi"); //if( props.alt!=undefined){varAlt=props.alt};

  var varTitle = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.title, varAlt); //if( props.title!=undefined){varTitle=props.title};

  var varClass = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.class, "img"); //if( props.class!=undefined){varClass=props.class};

  var varId = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.id, varClass); //if(props.id!=undefined){varId=props.id};

  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.modo, "html"); //if( props.modo!=undefined){modo=props.modo};
  //if(useAmp()){ 

  if (modo == "amp" || modo == "AMP") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3832791168", [varClass, varSrc, varWidth, varHeight, varAlt, varTitle]]])
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("amp-img", {
      src: varSrc,
      id: varId,
      width: varWidth,
      height: varHeight,
      alt: varAlt,
      title: varTitle,
      class: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3832791168", [varClass, varSrc, varWidth, varHeight, varAlt, varTitle]]]) + " " + (varClass || "")
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3832791168",
      dynamic: [varClass, varSrc, varWidth, varHeight, varAlt, varTitle]
    }, [".".concat(varClass, ".__jsx-style-dynamic-selector{src:").concat(varSrc, " width:").concat(varWidth, " height=").concat(varHeight, " alt=").concat(varAlt, " title=").concat(varTitle, ";}"), "@media only screen and (min-width:521px){.hideOnDesktop.__jsx-style-dynamic-selector{display:none;}}", "@media only screen and (max-width:520px){.hideOnMobile.__jsx-style-dynamic-selector{display:none;}}"]));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["407893358", [varClass, varSrc, varWidth, varHeight, varAlt, varTitle]]])
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: varSrc,
      id: varId,
      width: varWidth,
      height: varHeight,
      alt: varAlt,
      title: varTitle,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["407893358", [varClass, varSrc, varWidth, varHeight, varAlt, varTitle]]]) + " " + (varClass || "")
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "407893358",
      dynamic: [varClass, varSrc, varWidth, varHeight, varAlt, varTitle]
    }, [".".concat(varClass, ".__jsx-style-dynamic-selector{src:").concat(varSrc, " width:").concat(varWidth, " height=").concat(varHeight, " alt=").concat(varAlt, " title=").concat(varTitle, ";}"), "@media only screen and (min-width:521px){.hideOnDesktop.__jsx-style-dynamic-selector{display:none;}}", "@media only screen and (max-width:520px){.hideOnMobile.__jsx-style-dynamic-selector{display:none;}}"]));
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Img);

/***/ }),

/***/ "JkDD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return validaProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apenasNumeros; });
/* unused harmony export fontesCSS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fontesCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fontesCSS2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fontesCSS3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fontesCSS4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fontesCSS5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return listaRegioes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return regiao; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

var validaProps = function validaProps(X, Y) {
  if (X != undefined) {
    return X;
  } else {
    return Y;
  }

  ;
};
var apenasNumeros = function apenasNumeros(varBodySend) {
  var numsStr = varBodySend.replace(/[^0-9]/g, '');
  return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(numsStr);
};
var fontesCSS = function fontesCSS() {
  return ' ' + fontesCSS1() + fontesCSS2() + fontesCSS3() + fontesCSS4() + fontesCSS5();
};
var fontesCSS1 = function fontesCSS1() {
  return ' @font-face { font-family:"SimplonBP-Regular"; src:url("/simplonbp-regular-webfont.woff"); } ';
};
var fontesCSS2 = function fontesCSS2() {
  return ' @font-face { font-family:"Simplon-Headline"; src:url("/simplonoi-headline-webfont.woff"); } ';
};
var fontesCSS3 = function fontesCSS3() {
  return ' @font-face { font-family:"Simplon-bold"; src:url("/simplonbp-bold-webfont.woff"); } ';
};
var fontesCSS4 = function fontesCSS4() {
  return ' @font-face { font-family: "Simplon-medium"; src: url("/simplonbp-medium-webfont.woff"); } ';
};
var fontesCSS5 = function fontesCSS5() {
  return ' @font-face { font-family: "Simplon-light"; src: url("/simplonbp-light-webfont.woff"); } ';
};
var listaRegioes = function listaRegioes() {
  return [{
    sigla: "AC",
    estado: "Acre",
    capital: "Rio Branco",
    timea: "Atlético-AC",
    timeb: "Rio Branco"
  }, {
    sigla: "AL",
    estado: "Alagoas",
    capital: "Maceió",
    timea: "CRB",
    timeb: "CSA"
  }, {
    sigla: "AP",
    estado: "Amapá",
    capital: "Macapá",
    timea: "Santos-AP",
    timeb: "Trem-AP"
  }, {
    sigla: "AM",
    estado: "Amazonas",
    capital: "Manaus",
    timea: "Nacional-AM",
    timeb: "Princesa do Solimões-AM"
  }, {
    sigla: "BA",
    estado: "Bahia",
    capital: "Salvador",
    timea: "Bahia",
    timeb: "Vitória"
  }, {
    sigla: "CE",
    estado: "Ceará",
    capital: "Fortaleza",
    timea: "Ceará",
    timeb: "Fortaleza"
  }, {
    sigla: "DF",
    estado: "Distrito Federal",
    capital: "Brasília",
    timea: "Ceilândia",
    timeb: "Luziânia"
  }, {
    sigla: "ES",
    estado: "Espírito Santo",
    capital: "Vitória",
    timea: "Espírito Santo",
    timeb: "Desportiva-ES"
  }, {
    sigla: "GO",
    estado: "Goiás",
    capital: "Goiânia",
    timea: "Goiás",
    timeb: "Atlético-GO"
  }, {
    sigla: "MA",
    estado: "Maranhão",
    capital: "São Luís",
    timea: "Sampaio Corrêa",
    timeb: "Moto Club"
  }, {
    sigla: "MT",
    estado: "Mato Grosso",
    capital: "Campo Grande",
    timea: "Luverdense",
    timeb: "Cuiabá"
  }, {
    sigla: "MS",
    estado: "Mato Grosso do Sul",
    capital: "Cuiabá",
    timea: "Comercial",
    timeb: "Sete de Setembro"
  }, {
    sigla: "MG",
    estado: "Minas Gerais",
    capital: "Belo Horizonte",
    timea: "Cruzeiro",
    timeb: "Atlético-MG"
  }, {
    sigla: "PA",
    estado: "Pará",
    capital: "Belém",
    timea: "Paysandu",
    timeb: "Remo"
  }, {
    sigla: "PB",
    estado: "Paraíba ",
    capital: "João Pessoa",
    timea: "Botafogo-PB",
    timeb: "Campinense"
  }, {
    sigla: "PR",
    estado: "Paraná",
    capital: "Curitiba",
    timea: "Atlético-PR",
    timeb: "Coritiba"
  }, {
    sigla: "PE",
    estado: "Pernambuco",
    capital: "Recife",
    timea: "Sport",
    timeb: "Santa Cruz"
  }, {
    sigla: "PI",
    estado: "Piauí",
    capital: "Teresina",
    timea: " River-PI",
    timeb: "Altos-PI"
  }, {
    sigla: "RJ",
    estado: "Rio de Janeiro",
    capital: "Rio de Janeiro",
    timea: " Flamengo",
    timeb: "Botafogo"
  }, {
    sigla: "RN",
    estado: "Rio Grande do Norte",
    capital: "Natal",
    timea: " ABC",
    timeb: "América-RN"
  }, {
    sigla: "RS",
    estado: "Rio Grande do Sul ",
    capital: "Porto Alegre",
    timea: " Grêmio",
    timeb: "Internacional"
  }, {
    sigla: "RO",
    estado: "Rondônia",
    capital: "Porto Velho",
    timea: " Gênus-RO",
    timeb: "Real Desportivo-RO"
  }, {
    sigla: "RR",
    estado: "Roraima",
    capital: "Boa Vista",
    timea: " São Raimundo-RR",
    timeb: "Baré-RR"
  }, {
    sigla: "SC",
    estado: "Santa Catarina ",
    capital: "Florianópolis",
    timea: " Chapecoense",
    timeb: "Avaí"
  }, {
    sigla: "SP",
    estado: "São Paulo ",
    capital: "São Paulo",
    timea: " Palmeiras",
    timeb: "Santos"
  }, {
    sigla: "SE",
    estado: "Sergipe",
    capital: "Aracaju",
    timea: " Confiança",
    timeb: "Itabaiana"
  }, {
    sigla: "TO",
    estado: "Tocantins",
    capital: "Palmas",
    timea: " Interporto-TO",
    timeb: "Gurupi-TO"
  }];
};
var regiao = function regiao(valorPesquisado) {
  valorPesquisado = valorPesquisado.toUpperCase();
  var varRegiao = listaRegioes();
  var VarIndice = 18; //for (var j in varRegiao) {

  for (var j = 0; j < varRegiao.length; ++j) {
    if (varRegiao[j].sigla == valorPesquisado || varRegiao[j].sigla == valorPesquisado) {
      VarIndice = j;
    }
  }

  return varRegiao[VarIndice];
};

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "QDfY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8hY/");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_templates_codigo_knockout_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oV2p");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JkDD");

 // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)




var Rotaknockout = function Rotaknockout(props) {
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_templates_codigo_knockout_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    modo: "amp",
    regiao: _controller_util_js__WEBPACK_IMPORTED_MODULE_3__[/* validaProps */ "i"](props.url.query.regiao, "RJ")
  });
}; //export default withAmp(Rotaknockout, { hybrid: true });


/* harmony default export */ __webpack_exports__["default"] = (Object(next_amp__WEBPACK_IMPORTED_MODULE_1__["withAmp"])(Rotaknockout)); //export default Rotaknockout

/***/ }),

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "T9MM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhj+");
/* harmony import */ var _moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wwkz");
/* harmony import */ var _moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cMST");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JkDD");







var layout = function layout(props) {
  console.log('Rodando /layout.js');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* validaProps */ "i"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* validaProps */ "i"](props.modo, "html");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"]()]]]) + " " + "Body"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"]()]]]) + " " + "borda"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    display: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"]()]]]) + " " + "borda"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"]()]]]) + " " + "DivSombra"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    regiao: regiao,
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"]()]]]) + " " + "borda"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"]()]]]) + " " + "codigoIndexListadeRotas DivSombra"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    regiao: regiao,
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"]()]]]) + " " + "borda"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"]()]]]) + " " + "divCss DivSombra"
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"]()]]]) + " " + "borda"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"]()]]]) + " " + "DivSombra"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    regiao: regiao,
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"]()]]]) + " " + "borda"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3149695757"
  }, [".Body.jsx-3149695757{width:100%;margin :0px;padding :0px;}", ".borda.jsx-3149695757{width:10px;height:10px;}", ".DivSombra.jsx-3149695757{background-color:#696969;width:100%;color:#333;font-size:17px;font-family:sans-serif;background-color:#ffffff;background-image:linear-gradient(180deg,#ffffff,#ffffff,#bdb8a7 );border-radius:8px;color:#222222;display:block;border:solid 1px #dbdbdb;padding:10px;box-sizing:border-box;-webkit-box-shadow:2px 2px 10px rgba(1,1,1,0.57);-moz-box-shadow:2px 2px 10px rgba(1,1,1,0.57);box-shadow:2px 2px 10px rgba(1,1,1,0.57);}", ".codigoIndexListadeRotas.jsx-3149695757{width:25%;}", ".divCss.jsx-3149695757{width:75%;}"]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1051470625",
    dynamic: [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"]()]
  }, ["".concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS1 */ "b"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS2 */ "c"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS3 */ "d"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS4 */ "e"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* fontesCSS5 */ "f"](), " body{margin:0px;padding:0px;background-color:#D3D3D3;background-image:linear-gradient(45deg,#05005d,#bdb8a7,#aaf1ff );font-family:SimplonBP-Regular,sans-serif;}")]));
};

/* harmony default export */ __webpack_exports__["a"] = (layout);

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "VIBa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./controller/util.js
var util = __webpack_require__("JkDD");

// CONCATENATED MODULE: ./components/moleculas/moRegiao/optRegiao.js



var optRegiao_moOptRegiao = function moOptRegiao(props) {
  var modo = props.modo;
  var JsonRegiao = props.JsonRegiao;
  var listaRegioes = util["g" /* listaRegioes */]();
  return listaRegioes.map(function (item, i) {
    if (item.sigla != JsonRegiao.sigla) {
      return external_react_default.a.createElement("option", {
        value: item.sigla
      }, item.sigla + '-' + item.estado);
    }
  });
};

/* harmony default export */ var optRegiao = (optRegiao_moOptRegiao);
// CONCATENATED MODULE: ./components/moleculas/moRegiao/selectRegiao.js




var selectRegiao_moSelectRegiao = function moSelectRegiao(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  var JsonRegiao = util["h" /* regiao */](regiao); // var stringModo = "";
  // if(modo=="AMP" || modo=="amp"){
  //   stringModo = "/amp";
  // }

  console.log(JsonRegiao);
  console.log('╔══════════╗ regiao=' + regiao);
  console.log('║  Select  ║ modo=' + modo);
  console.log('║          ║ estado=' + JsonRegiao.estado);
  console.log('╚══════════╝ capital=' + JsonRegiao.capital);

  if (modo == "AMP" || modo == "amp") {
    return external_react_default.a.createElement("span", null, 'Região(Estado) :' + JsonRegiao.sigla + '-' + JsonRegiao.estado, external_react_default.a.createElement("br", null));
  } else {
    console.log('Região(Estado) : ' + JsonRegiao.sigla + '-' + JsonRegiao.estado + ')');
    return external_react_default.a.createElement("form", {
      id: "formregiao",
      name: "formregiao",
      method: "GET"
    }, "Regi\xE3o(Estado) : ", external_react_default.a.createElement("br", null), external_react_default.a.createElement("select", {
      id: "regiao",
      name: "regiao",
      onChange: function onChange() {
        document.getElementById("formregiao").submit();
      }
    }, external_react_default.a.createElement("option", {
      value: JsonRegiao.sigla,
      select: true
    }, JsonRegiao.sigla + '-' + JsonRegiao.estado), external_react_default.a.createElement(optRegiao, {
      modo: modo,
      regiao: regiao,
      JsonRegiao: JsonRegiao
    })));
  }
};

/* harmony default export */ var selectRegiao = (selectRegiao_moSelectRegiao);
// CONCATENATED MODULE: ./components/moleculas/moRegiao/index.js


 //console.log('moHeaderSideDoValente ');

var moRegiao_moHeaderSideDoValente = function moHeaderSideDoValente(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  var JsonRegiao = util["h" /* regiao */](regiao); // var StringModo = "";
  // if(modo=="AMP" || modo=="amp"){
  //   StringModo = "/amp";
  // }
  // console.log(JsonRegiao);
  // console.log('╔════════════╗ regiao='+regiao);
  // console.log('║  MoRegiao  ║ modo='+modo);
  // console.log('║            ║ estado='+JsonRegiao.estado);
  // console.log('╚════════════╝ capital='+JsonRegiao.capital);

  return external_react_default.a.createElement("span", null, "Modo : ", modo, external_react_default.a.createElement("br", null), external_react_default.a.createElement(selectRegiao, {
    modo: modo,
    regiao: regiao
  }), "Cidade : ", JsonRegiao.capital);
};

/* harmony default export */ var moRegiao = __webpack_exports__["a"] = (moRegiao_moHeaderSideDoValente);

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "bVZc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "production" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cMST":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("D4zN");
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhj+");
/* harmony import */ var _moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VIBa");




 //import * as Util from '../../../controller/util.js';
//console.log('moHeaderSideDoValente ');

var moHeaderSideDoValente = function moHeaderSideDoValente(props) {
  var regiao = props.regiao;
  var modo = props.modo; //const JsonRegiao = Util.regiao(regiao);

  var StringModo = "";

  if (modo == "AMP" || modo == "amp") {
    StringModo = "/amp";
  } //console.log(JsonRegiao);


  console.log('╔══════════╗ regiao=' + regiao);
  console.log('║  Header  ║ modo=' + modo); //console.log('║          ║ estado='+JsonRegiao.estado);
  //console.log('╚══════════╝ capital='+JsonRegiao.capital);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2652638531" + " " + "DivHeaderSideDoValente logo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: StringModo + "/?regiao=" + regiao,
    className: "jsx-2652638531"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    src: "/static/assetsv5/img/log_laranja1.png",
    width: "50px",
    height: "50px",
    alt: "Logo Site Valente",
    title: "Logo Site Valente",
    class: "LogoSiteValente",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2652638531" + " " + 'DivHeaderSideDoValente pHeaderSideDoValente'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2652638531"
  }, "Site do Valente")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2652638531"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    modo: modo,
    regiao: regiao
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2652638531"
  }, [".logo.jsx-2652638531{padding-top:10px;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:slideinSombra-jsx-2652638531;animation-name:slideinSombra-jsx-2652638531;}", "@-webkit-keyframes slideinSombra-jsx-2652638531{from{padding-top:0px;}to{padding-top:10px;}}", "@keyframes slideinSombra-jsx-2652638531{from{padding-top:0px;}to{padding-top:10px;}}", ".DivHeaderSideDoValente.jsx-2652638531{margin:0px;}", ".pHeaderSideDoValente.jsx-2652638531{padding-top:15px;font-size:40px;font-family:sans-serif;text-align:center;}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (moHeaderSideDoValente);

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "kVuB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JkDD");
//Component atomo atFavIcon.js



var atFavIcon = function atFavIcon(props) {
  var href = _controller_util_js__WEBPACK_IMPORTED_MODULE_1__[/* validaProps */ "i"](props.href, "/static/assetsv5/img/favicon_laranja.ico");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: href
  });
};

/* harmony default export */ __webpack_exports__["a"] = (atFavIcon);

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oV2p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kVuB");
/* harmony import */ var _moleculas_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("T9MM");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JkDD");







var Knockout = function Knockout(props) {
  console.log('╔════════════════════════════════╗');
  console.log('║        codigo   Knockout       ║');
  console.log('╚════════════════════════════════╝');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* validaProps */ "i"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* validaProps */ "i"](props.modo, "html");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1367375073"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1367375073"
  }, "Knockout JS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "Knockout JS",
    className: "jsx-1367375073"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: "/codigo/knockout",
    className: "jsx-1367375073"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "amphtml",
    href: "/amp/codigo/knockout",
    className: "jsx-1367375073"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    "custom-element": "amp-lightbox",
    src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js",
    className: "jsx-1367375073"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    "custom-element": "amp-iframe",
    src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js",
    className: "jsx-1367375073"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    regiao: regiao,
    modo: modo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1367375073"
  }, "Knockout JS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1367375073"
  }, "Aqui entrara a descri\xE7\xE3o...")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1367375073"
  }, [".h1.jsx-1367375073{color :#000000;}", ".p.jsx-1367375073{color :#000000;}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (Knockout);

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "uhj+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JkDD");


 //import { useAmp } from 'next/amp'

var atDiv = function atDiv(props) {
  var display = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.display, "vertical"); // vertical/horizontal/justificado/responsivo
  //var varWidth = Util.validaProps(props.width, "100%");
  //var varHeight = "";
  //if( props.height!=undefined){varHeight="height:"+props.height+";"};
  //${varHeight}
  //width:${varWidth}

  if (display == "vertical") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2986009328" + " " + "atDivVertical"
    }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2986009328"
    }, [".atDivVertical.jsx-2986009328{display:block;width:100%;}"]));
  } else if (display == "justificado") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3405291145" + " " + "atDivJustificado"
    }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3405291145"
    }, [".atDivJustificado.jsx-3405291145{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;}"]));
  } else if (display == "horizontal") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2879585090" + " " + "atDivHorizontal"
    }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2879585090"
    }, [".atDivHorizontal.jsx-2879585090{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;}"]));
  } else if (display == "DivLinhaResponsivo") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-935902151" + " " + "Divlinha"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "935902151"
    }, [".Divlinha.jsx-935902151{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 20px;}", "@media (max-width:1169px){.Divlinha.jsx-935902151{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;max-width:768px;}@media(max-width:600px){.Divlinha.jsx-935902151{margin-right:20px;}}}"]));
  } else {
    //display=="responsivo"
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1144856795" + " " + "atDivResponsivo"
    }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1144856795"
    }, ["@media only screen and (min-width:1000px){.atDivResponsivo.jsx-1144856795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}", "@media only screen and (max-width:1000px){.atDivResponsivo.jsx-1144856795{display:block;width:100%;}}"]));
  }
};

/* harmony default export */ __webpack_exports__["a"] = (atDiv);

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "wwkz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


 //console.log('Instanciando templates/index.js');

var ListadeRotas = function ListadeRotas(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  var StringModo = "";

  if (modo == "AMP" || modo == "amp") {
    StringModo = "/amp";
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-3980931307" + " " + 'CssTitleRotasProjeto'
  }, "Rotas do Site do Valente"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3980931307" + " " + 'CssRotasProjeto'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/?regiao=" + regiao
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/?regiao=" + regiao
  }, "Home (Pagina em HTML)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/amp/?regiao=" + regiao
  }, "Home (Pagina em AMP)")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/apache/?regiao=" + regiao
  }, "Apache")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/apache/instalubuntu?regiao=" + regiao
  }, "Instalar Apache no Ubuntu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/apache/alias?regiao=" + regiao
  }, "Alias em Apache")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/apache/redirect?regiao=" + regiao
  }, "redirect 301 em Apache")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/asp/?regiao=" + regiao
  }, "ASP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/asp/?regiao=" + regiao
  }, "ASP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/asp/redirect?regiao=" + regiao
  }, "redirect 301 em ASP")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/cgi/?regiao=" + regiao
  }, "CGI PERL")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/cgi/?regiao=" + regiao
  }, "redirect 301 em CGI")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/coldfusion/?regiao=" + regiao
  }, "ColdFusion")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/coldfusion/?regiao=" + regiao
  }, "redirect 301 em ColdFusion")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/?regiao=" + regiao
  }, "CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/?regiao=" + regiao
  }, "Introdu\xE7\xE3o ao CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css02/?regiao=" + regiao
  }, "Estilizando textos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css03/?regiao=" + regiao
  }, "Imagens de fundo e atributo text")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css04/?regiao=" + regiao
  }, "Links e Divs")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css05/?regiao=" + regiao
  }, "Classe, ID e Span")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css06/?regiao=" + regiao
  }, "Margin, padding e floatAula")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css07/?regiao=" + regiao
  }, "Posicionamento de elementos, bordas e z-index")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css08/?regiao=" + regiao
  }, "Efeitos com o atributo hover")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css09/?regiao=" + regiao
  }, "Heran\xE7a")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css10/?regiao=" + regiao
  }, "Criando um menu com listas")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css11/?regiao=" + regiao
  }, "Menu drop-down")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css12/?regiao=" + regiao
  }, "Valida\xE7\xE3o e Web Standards")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css13/?regiao=" + regiao
  }, "Tabelas Style")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/anima_but/?regiao=" + regiao
  }, "Exemplos Anima But")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/html5/?regiao=" + regiao
  }, "HTML")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/html5/?regiao=" + regiao
  }, "HTML5 Introdu\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/amp/codigo/html5/?regiao=" + regiao
  }, "HTML5 Introdu\xE7\xE3o (Pagina AMP)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Estrutura da P\xE1gina HTML5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/amp/codigo/?regiao=" + regiao
  }, "Estrutura da P\xE1gina HTML5 (Pagina AMP)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Titulo, Par\xE1grafo e Quebra de Linha"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/amp/codigo/?regiao=" + regiao
  }, "Titulo, Par\xE1grafo e Quebra de Linha (Pagina AMP)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Listas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "N\xE3o ordenada"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Ordenada (type=1)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Ordenada (type=A)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Ordenada (type=i)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Ordenada (type=I)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Com descri\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Imagem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Imagens"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "MAP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Figure e Figcaption"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Iframe"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Links"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Tabelas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Tabelas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Tabelas Style"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Div e Span"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Coment\xE1rios"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Midia"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Audio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "V\xEDdeo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Video (Criando legendas)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Object"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Formul\xE1rio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Formul\xE1rios"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "com legenda)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "atributos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "campos: radio e checkbox)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "campos: Number, Range e Color)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Autocomplete e Placeholder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Types: File, Hidden, Search, URL, Tel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Types Date, Time, Month, Week, Datetime local"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Textarea, Spellcheck"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Select, Optgroup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Formul\xE1rios Datalist)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Formul\xE1rios Form, Formaction, Formmethod, Formenctype, Formnovalidate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Mark e Contenteditable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Tabindex e Accesskey"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Formul\xE1rio Campo (Keygen)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Hgroup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Meter e Progresse"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Tag link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Time e Datetime"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Menu e Menuitem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "SVG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "rect"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "ellipse, text"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "line, polygon, polyline"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Carrosel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Carrosel 01"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Carrosel 02"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Semantica"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/java/?regiao=" + regiao
  }, "Java")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/java/?regiao=" + regiao
  }, "Java")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/java/?regiao=" + regiao
  }, "redirect 301 em JSP")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/javascript?regiao=" + regiao
  }, "JS JavaScript")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/javascript?regiao=" + regiao
  }, "JS JavaScript")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/javascript?regiao=" + regiao
  }, "JS JavaScript")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/javascript?regiao=" + regiao
  }, "JS JavaScript")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 01")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 02")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 03")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 04")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 05")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 06")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/dotnet/?regiao=" + regiao
  }, ".NET")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/dotnet/?regiao=" + regiao
  }, ".NET")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/dotnet/?regiao=" + regiao
  }, "redirect 301 em ASP.NET")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/?regiao=" + regiao
  }, "PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/?regiao=" + regiao
  }, "PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/redirect/?regiao=" + regiao
  }, "redirect 301 no PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/procuraarquivo/?regiao=" + regiao
  }, "encontrar arquivio no PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/procuradiretorio/?regiao=" + regiao
  }, "encontrar diretorio no PHP")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/rubyonrails/?regiao=" + regiao
  }, "Ruby on Rails")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/rubyonrails/?regiao=" + regiao
  }, "redirect 301 em Ruby on Rails")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/game/?regiao=" + regiao
  }, "GAME")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/game/controleogodzilla?regiao=" + regiao
  }, "GAME - Controle O Godzilla")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/hub/?regiao=" + regiao
  }, "Hub de Contato"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/componentes/"
  }, "Componentes")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/componentes/?regiao=" + regiao
  }, "Componentes")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/eu/?regiao=" + regiao
  }, "Quem Sou Eu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/eu/curriculo/?regiao=" + regiao
  }, "Curriculo"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3980931307"
  }, [".CssRotasProjeto.jsx-3980931307{width:100%;color:#333;font-size:17px;}", ".CssTitleRotasProjeto.jsx-3980931307{margin:0;width:100%;padding-top:10px;font-size:22px;}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (ListadeRotas);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });