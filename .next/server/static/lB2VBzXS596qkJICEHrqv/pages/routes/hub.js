module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+oro":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/atoms/atFavIcon/index.js
var atFavIcon = __webpack_require__("kVuB");

// EXTERNAL MODULE: ./controller/util.js
var util = __webpack_require__("JkDD");

// EXTERNAL MODULE: ./components/moleculas/moAlerta.js
var moAlerta = __webpack_require__("i7SM");

// EXTERNAL MODULE: ./components/atoms/atCampoTexto/index.js
var atCampoTexto = __webpack_require__("o51N");

// CONCATENATED MODULE: ./components/templates/hub.js




 // import Arrow from '../atoms/atCampoTexto';
// import BtLink from '../atoms/atBtLink';
// ====== copiado de Documentoscopia - Projeto Piloto ======


 //import EnviaArquivo from '../../moleculas/moBtEnviaArquivo.js';
// import BtSubmit from '../../atoms/atBtSubmit/index.js';
// import AtCampoInvisivel from '../../atoms/atCampoInvisivel/index.js';
// import Captcha from '../../moleculas/moCaptcha.js';
// import ContentCamposDoc from './contentCamposDoc.js'
// import AtLabelCampo from './atLabelCampo.js';
// ==========================================================

var hub_templateHub = function templateHub(props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Hub de Contatos                   ║');
  console.log('╚════════════════════════════════════════╝');
  var regiao = util["i" /* validaProps */](props.regiao, "RJ");
  var modo = util["i" /* validaProps */](props.modo, "html");
  return external_react_default.a.createElement("div", {
    className: "jsx-1082482658 " + style_default.a.dynamic([["1345242024", [util["b" /* fontesCSS1 */](), util["c" /* fontesCSS2 */](), util["d" /* fontesCSS3 */](), util["e" /* fontesCSS4 */](), util["f" /* fontesCSS5 */]()]]]) + " " + "DivHubIndex"
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", {
    className: "jsx-1082482658 " + style_default.a.dynamic([["1345242024", [util["b" /* fontesCSS1 */](), util["c" /* fontesCSS2 */](), util["d" /* fontesCSS3 */](), util["e" /* fontesCSS4 */](), util["f" /* fontesCSS5 */]()]]])
  }, "Hub de Contato"), external_react_default.a.createElement(atFavIcon["a" /* default */], null), external_react_default.a.createElement("meta", {
    name: "description",
    content: "Hub de Contato",
    className: "jsx-1082482658 " + style_default.a.dynamic([["1345242024", [util["b" /* fontesCSS1 */](), util["c" /* fontesCSS2 */](), util["d" /* fontesCSS3 */](), util["e" /* fontesCSS4 */](), util["f" /* fontesCSS5 */]()]]])
  }), external_react_default.a.createElement("link", {
    rel: "canonical",
    href: "/hub/",
    className: "jsx-1082482658 " + style_default.a.dynamic([["1345242024", [util["b" /* fontesCSS1 */](), util["c" /* fontesCSS2 */](), util["d" /* fontesCSS3 */](), util["e" /* fontesCSS4 */](), util["f" /* fontesCSS5 */]()]]])
  })), external_react_default.a.createElement("h1", {
    className: "jsx-1082482658 " + style_default.a.dynamic([["1345242024", [util["b" /* fontesCSS1 */](), util["c" /* fontesCSS2 */](), util["d" /* fontesCSS3 */](), util["e" /* fontesCSS4 */](), util["f" /* fontesCSS5 */]()]]]) + " " + "DivHubTutulo"
  }, external_react_default.a.createElement("img", {
    src: "/static/assetsv5/img/robo.jpg",
    width: "50px",
    height: "50px",
    className: "jsx-1082482658 " + style_default.a.dynamic([["1345242024", [util["b" /* fontesCSS1 */](), util["c" /* fontesCSS2 */](), util["d" /* fontesCSS3 */](), util["e" /* fontesCSS4 */](), util["f" /* fontesCSS5 */]()]]])
  }), "Hub de Contato"), external_react_default.a.createElement("p", {
    className: "jsx-1082482658 " + style_default.a.dynamic([["1345242024", [util["b" /* fontesCSS1 */](), util["c" /* fontesCSS2 */](), util["d" /* fontesCSS3 */](), util["e" /* fontesCSS4 */](), util["f" /* fontesCSS5 */]()]]])
  }, "Est\xE1 \xE9 uma aplica\xE7\xE3o, para testar a API do Hub de Contatos."), external_react_default.a.createElement("iframe", {
    src: "http://localhost:8000/hubbusca/",
    width: "100%",
    height: "700px",
    className: "jsx-1082482658 " + style_default.a.dynamic([["1345242024", [util["b" /* fontesCSS1 */](), util["c" /* fontesCSS2 */](), util["d" /* fontesCSS3 */](), util["e" /* fontesCSS4 */](), util["f" /* fontesCSS5 */]()]]])
  }), external_react_default.a.createElement(style_default.a, {
    id: "1082482658"
  }, [".DivHubTutulo.jsx-1082482658{font-size:50px;margin:0px;margin:0px;}", ".DivHubIndex.jsx-1082482658{margin-top:0px;margin:0px;padding:0px;padding-left :10px;width:98%;}"]), external_react_default.a.createElement(style_default.a, {
    id: "1345242024",
    dynamic: [util["b" /* fontesCSS1 */](), util["c" /* fontesCSS2 */](), util["d" /* fontesCSS3 */](), util["e" /* fontesCSS4 */](), util["f" /* fontesCSS5 */]()]
  }, ["".concat(util["b" /* fontesCSS1 */](), " ").concat(util["c" /* fontesCSS2 */](), " ").concat(util["d" /* fontesCSS3 */](), " ").concat(util["e" /* fontesCSS4 */](), " ").concat(util["f" /* fontesCSS5 */](), " body{margin:0px;padding:0px;background-color:#ffffff;font-family:SimplonBP-Regular,sans-serif;}")]));
};

/* harmony default export */ var hub = (hub_templateHub);
// CONCATENATED MODULE: ./pages/routes/hub/index.js


 //import { withAmp } from 'next/amp';

var hub_RotaHub = function RotaHub(props) {
  var regiao = util["i" /* validaProps */](props.url.query.regiao, "RJ");
  return external_react_default.a.createElement(hub, {
    modo: "html",
    regiao: regiao
  });
}; //query={props.url.query}
//export default withAmp(RotaHub); // Usado para páginas AMP
//export default withAmp(RotaHub, { hybrid: true }); // Usado para páginas hibridas


/* harmony default export */ var routes_hub = __webpack_exports__["default"] = (hub_RotaHub); // Usado para páginas HTML

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

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+oro");


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

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "i7SM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("D4zN");

// layout de Documentoscopia - Projeto Piloto



var moAlerta = function moAlerta(props) {
  var modo = "html";

  if (props.modo != undefined) {
    modo = props.modo;
  }

  ;

  function fechaAlertaErro() {
    document.getElementById("AlertaErroInf").innerHTML = "";
    document.getElementById("divAlertaErro").style.display = "none";
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3360716845"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: function onClick() {
      fechaAlertaErro();
    },
    className: "jsx-3360716845"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "divAlertaErro",
    className: "jsx-3360716845" + " " + "divAlertaErro"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", {
    className: "jsx-3360716845"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    class: "AlertaErro",
    src: "/static/assetsv5/img/documentoscopia/erro_ico.png",
    width: "50px",
    height: "50px",
    modo: modo
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3360716845" + " " + "textAlertaErro"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "AlertaErroInf",
    className: "jsx-3360716845"
  }, "Ops! Algo errado.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3360716845"
  }), "Imagens muito grandes ou faltando algum campo.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: function onClick() {
      fechaAlertaErro();
    },
    className: "jsx-3360716845" + " " + "btLinklaranja"
  }, "Voltar")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3360716845"
  }, [".textAlertaErro.jsx-3360716845{font-family:\"SimplonBP-Regular\",Arial;font-size:1.25rem;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#303030;}", ".divAlertaErro.jsx-3360716845{padding:1.2rem;padding-top:5rem;margin:1.2rem;background-color:#ffffff;position :absolute;top:180px;-webkit-box-shadow:2px 2px 20px rgba(1,1,1,0.60);-moz-box-shadow:2px 2px 20px rgba(1,1,1,0.60);box-shadow:2px 2px 20px rgba(1,1,1,0.60);display :none;-webkit-animation:abreJanela-jsx-3360716845 1s ease 0s 1 normal none running;animation:abreJanela-jsx-3360716845 1s ease 0s 1 normal none running;}", "@-webkit-keyframes abreJanela-jsx-3360716845{0%{top:100px;opacity:0;}100%{top:180px;opacity:1;}}", "@keyframes abreJanela-jsx-3360716845{0%{top:100px;opacity:0;}100%{top:180px;opacity:1;}}", ".btLinklaranja.jsx-3360716845{font-family:oiTextRegular,sans-serif;background-color:#f8562c;background-image:linear-gradient(260deg,#fb851c,#f8562c);border-radius:6px;color:#ffffff;display:block;font-size:1rem;height:3.42857143rem;text-align:center;width:199px;-webkit-text-decoration:none;text-decoration:none;border-bottom:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;margin-top:100px;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition-duration:1s;transition-duration:1s;}", ".btLinklaranja.jsx-3360716845:hover{-webkit-transition-duration:1s;transition-duration:1s;color:#f8562c;border:solid 1px #fb851c;background-color:#ffffff;background-image:none;}"]));
}; //background-color: white;


/* harmony default export */ __webpack_exports__["a"] = (moAlerta); // .divAlertaErro{
//   padding: 1.2rem;
//   padding-top: 5rem;
//   margin: 1.2rem;
//   background-color: #ffffff;
//   position : absolute;
//   top: 180px;
//   -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.60);
//   -moz-box-shadow:    2px 2px 20px rgba(1, 1, 1, 0.60);
//   box-shadow:         2px 2px 20px rgba(1, 1, 1, 0.60);
//   display : none;
//   animation: abreJanela 1s ease 0s 1 normal none running;
// }
// .divAlertaErro:active{
//   transition-duration: 1s;
//   top: 100px;
//   opacity: 0;
//   display : none;
// }
// @keyframes abreJanela{
//   0% {
//     top: 100px;
//     opacity: 0;
//   }
//   100% {
//     top: 180px;
//     opacity: 1;
//   }
// }
// @keyframes fechaJanela{
//   0% {
//     top: 180px;
//     opacity: 1;
//   }
//   100% {
//     top: 100px;
//     opacity: 0;
//   }
// }

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

/***/ "o51N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JkDD");

// layout de Documentoscopia(/meusdocumentos/) - Projeto Piloto



var AtCampoTexto = function AtCampoTexto(props) {
  var varId = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.id, "id");
  var varName = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.name, "nome");
  var varPlaceholder = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.placeholder, "--");
  var varType = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.type, "text");
  var varAutocomplete = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.autocomplete, "on");
  var varSize = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "i"](props.size, "15");

  if (props.maxlength != undefined) {
    varSize = props.maxlength;
  }

  ;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1860538152"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: varType,
    id: varId,
    name: varName,
    accept: "image/*",
    placeholder: varPlaceholder,
    autocomplete: varAutocomplete,
    size: varSize,
    maxlength: varSize,
    required: true,
    className: "jsx-1860538152" + " " + "campotexto"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1860538152"
  }, [".campotexto.jsx-1860538152{width:280px;height:48px;border-radius:4px;border:solid 1px #dbdbdb;text-indent:10px;margin:10px;font-family:SimplonBP-Regular background-color:#ffffff;font-size:16px;}"]));
}; //font-family: 'Simplon-Headline';


/* harmony default export */ __webpack_exports__["a"] = (AtCampoTexto);

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });