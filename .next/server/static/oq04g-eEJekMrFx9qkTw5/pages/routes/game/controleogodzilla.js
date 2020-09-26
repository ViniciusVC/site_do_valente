module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("oUfN");


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
  var varSrc = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.src, "/static/assetsv5/img/oi-logo-verde.png"); //if(props.src!=undefined){varSrc=props.src};

  var varWidth = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.width, varWidth); //if(props.width!=undefined){varWidth=props.width};

  var varHeight = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.height, varWidth); //if( props.height!=undefined){varHeight=props.height};

  var varHeight = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.height, varWidth); //if( props.height!=undefined){varHeight=props.height};

  var varAlt = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.alt, "Imagem Site do Valente"); //if( props.alt!=undefined){varAlt=props.alt};

  var varTitle = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.title, varAlt); //if( props.title!=undefined){varTitle=props.title};

  var varClass = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.class, "img"); //if( props.class!=undefined){varClass=props.class};

  var varId = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.id, varClass); //if(props.id!=undefined){varId=props.id};

  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.modo, "html"); //if( props.modo!=undefined){modo=props.modo};
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

/***/ "D7Tn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./components/moleculas/moJanela/JanelaEscuro.js

 //import * as Util from '../../../controller/util.js';

var JanelaEscuro_JanelaEscuro = function JanelaEscuro(props) {
  // console.log('Rodando /moJanela/JanelaEscuro');
  //Layout escuro
  return external_react_default.a.createElement("div", {
    className: "jsx-3262719978" + " " + "DivSombra"
  }, props.children, external_react_default.a.createElement(style_default.a, {
    id: "3262719978"
  }, [".DivSombra.jsx-3262719978{width:100%;font-size:17px;font-family:sans-serif;background-color:#282c45;background-image:linear-gradient(45deg,#16192a,#282c45,#282c45 );border-radius:4px;display:block;padding:10px;box-sizing:border-box;-webkit-box-shadow:-9px 9px 20px rgba(1,1,1,0.57);-moz-box-shadow:-9px 9px 20px rgba(1,1,1,0.57);box-shadow:-9px 9px 20px rgba(1,1,1,0.57);}"]));
};

/* harmony default export */ var moJanela_JanelaEscuro = (JanelaEscuro_JanelaEscuro);
// EXTERNAL MODULE: ./components/atoms/atDiv/index.js
var atDiv = __webpack_require__("uhj+");

// CONCATENATED MODULE: ./components/moleculas/moJanela/JanelaLuz.js


 //import * as Util from '../../../controller/util.js';

var JanelaLuz_JanelaLuz = function JanelaLuz(props) {
  //console.log('Rodando /moJanela/JanelaLuz');
  return external_react_default.a.createElement("div", {
    className: "jsx-2957095173" + " " + "DivJanela"
  }, external_react_default.a.createElement(atDiv["a" /* default */], {
    display: "justificado"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2957095173" + " " + "DivJanelaHead1"
  }), external_react_default.a.createElement("div", {
    className: "jsx-2957095173" + " " + "DivJanelaHead2"
  }), external_react_default.a.createElement("div", {
    className: "jsx-2957095173" + " " + "DivJanelaHead3"
  })), external_react_default.a.createElement(atDiv["a" /* default */], {
    display: "justificado"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2957095173" + " " + "DivJanelaBody1"
  }), external_react_default.a.createElement("div", {
    className: "jsx-2957095173" + " " + "DivJanelaBody2"
  }, props.children), external_react_default.a.createElement("div", {
    className: "jsx-2957095173" + " " + "DivJanelaBody3"
  })), external_react_default.a.createElement(atDiv["a" /* default */], {
    display: "justificado"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2957095173" + " " + "DivJanelaFooter1"
  }), external_react_default.a.createElement("div", {
    className: "jsx-2957095173" + " " + "DivJanelaFooter2"
  }), external_react_default.a.createElement("div", {
    className: "jsx-2957095173" + " " + "DivJanelaFooter3"
  })), external_react_default.a.createElement(style_default.a, {
    id: "2957095173"
  }, [".DivJanelaHead1.jsx-2957095173{margin :0;padding :0;height:51px;width:51px;background-image:url(\"/static/assetsv5/img/layout_luz/janela_luz_01.png\");}", ".DivJanelaHead2.jsx-2957095173{margin :0;padding :0;height:51px;width:100%;background-image:url(\"/static/assetsv5/img/layout_luz/janela_luz_02.png\");}", ".DivJanelaHead3.jsx-2957095173{margin :0;padding :0;height:51px;width:65px;background-image:url(\"/static/assetsv5/img/layout_luz/janela_luz_03.png\");}", ".DivJanelaBody1.jsx-2957095173{margin :0;margin-left :-2px;padding :0;width:51px;background-image:url(\"/static/assetsv5/img/layout_luz/janela_luz_04.png\");-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:slidein1-jsx-2957095173;animation-name:slidein1-jsx-2957095173;}", ".DivJanelaBody2.jsx-2957095173{margin :0;padding :0;width:100%;font-size:17px;font-family:sans-serif;background-image:url(\"/static/assetsv5/img/layout_luz/janela_luz_05.png\");display:block;}", ".DivJanelaBody3.jsx-2957095173{margin :0;padding :0;width:65px;background-image:url(\"/static/assetsv5/img/layout_luz/janela_luz_06.png\");}", ".DivJanelaFooter1.jsx-2957095173{margin :0;margin-left :-2px;padding :0;height:47px;width:51px;background-image:url(\"/static/assetsv5/img/layout_luz/janela_luz_07.png\");}", ".DivJanelaFooter2.jsx-2957095173{margin :0;padding :0;height:47px;width:100%;background-image:url(\"/static/assetsv5/img/layout_luz/janela_luz_08.png\");}", ".DivJanelaFooter3.jsx-2957095173{margin :0;padding :0;height:47px;width:65px;background-image:url(\"/static/assetsv5/img/layout_luz/janela_luz_09.png\");}", ".DivJanela.jsx-2957095173{width:100%;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-name:animabrilho-jsx-2957095173;animation-name:animabrilho-jsx-2957095173;}", "@-webkit-keyframes animabrilho-jsx-2957095173{from{opacity:0.1;margin-left:5%;width:90%;}to{opacity:1.0;margin-left:0%;width:100%;}}", "@keyframes animabrilho-jsx-2957095173{from{opacity:0.1;margin-left:5%;width:90%;}to{opacity:1.0;margin-left:0%;width:100%;}}"]));
};

/* harmony default export */ var moJanela_JanelaLuz = (JanelaLuz_JanelaLuz);
// CONCATENATED MODULE: ./components/moleculas/moJanela/JanelaNeon.js

 //import * as Util from '../../../controller/util.js';

var JanelaNeon_JanelaNeon = function JanelaNeon(props) {
  // console.log('Rodando /moJanela/JanelaEscuro');
  //Layout escuro
  return external_react_default.a.createElement("div", {
    className: "jsx-1025821165" + " " + "winDetal"
  }, external_react_default.a.createElement("div", {
    className: "jsx-1025821165" + " " + "winDetal1 winDetalD1"
  }), external_react_default.a.createElement("div", {
    className: "jsx-1025821165" + " " + "winDetal2 winDetalD2"
  }), external_react_default.a.createElement("div", {
    className: "jsx-1025821165" + " " + "JanelaNeon"
  }, external_react_default.a.createElement("div", {
    className: "jsx-1025821165" + " " + "winDetal3"
  }), props.children), external_react_default.a.createElement("div", {
    className: "jsx-1025821165" + " " + "winDetal1 winDetalE"
  }), external_react_default.a.createElement("div", {
    className: "jsx-1025821165" + " " + "winDetal2 winDetalE2"
  }), external_react_default.a.createElement("div", {
    className: "jsx-1025821165" + " " + "winDetal4"
  }), external_react_default.a.createElement(style_default.a, {
    id: "1025821165"
  }, [".winDetal.jsx-1025821165{padding :10px;}", ".winDetal1.jsx-1025821165{background-color:#00ffea;border-top:solid 1px #00ffea;border-top-right-radius:6px;border-top-left-radius:6px;width:50px;height:5px;}", ".winDetal2.jsx-1025821165{float:right;border-top:solid 1px #00ffea;border-left:solid 2px #00ffea;border-top-left-radius:5px;width:90%;height:2px;}", ".winDetalD1.jsx-1025821165{float:right;margin-right:-26px;margin-top:-5px;}", ".winDetalD2.jsx-1025821165{float:right;margin-right:-22px;margin-top:-2px;}", ".winDetalE.jsx-1025821165{margin-top:-6px;}", ".winDetalE2.jsx-1025821165{float:right;margin-right:-20px;margin-top:-3px;}", ".winDetal3.jsx-1025821165{background-color:#00ffea;border-bottom-right-radius:6px;float:right;margin-right:-15px;margin-top:-11px;width:5px;height:25px;}", ".winDetal4.jsx-1025821165{background-color:#00ffea;border-top-right-radius:6px;margin-right:-15px;margin-top:-25px;width:5px;height:25px;}", ".JanelaNeon.jsx-1025821165{width:100%;font-size:17px;font-family:sans-serif;color:#ffffff;background-color:#00ffea;background:rgba(0,255,255,0.2);border-bottom-right-radius:8px;border-top-left-radius:8px;border:solid 1px #00ffea;padding:10px;}"]));
};

/* harmony default export */ var moJanela_JanelaNeon = (JanelaNeon_JanelaNeon);
// CONCATENATED MODULE: ./components/moleculas/moJanela/JanelaNaveg.js



var JanelaNaveg_JanelaNaveg = function JanelaNaveg(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-2899450786" + " " + "atDivNavegContorno"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2899450786" + " " + "atDivNavegTop"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2899450786" + " " + "atDivNavegBola corvermelho"
  }), external_react_default.a.createElement("div", {
    className: "jsx-2899450786" + " " + "atDivNavegBola coramarelo"
  }), external_react_default.a.createElement("div", {
    className: "jsx-2899450786" + " " + "atDivNavegBola corverde"
  })), external_react_default.a.createElement("div", {
    className: "jsx-2899450786" + " " + "atDivCodigo"
  }, props.children), external_react_default.a.createElement(style_default.a, {
    id: "2899450786"
  }, [".atDivNavegBola.jsx-2899450786{width :10px;height :10px;background-color:#ff5247;margin:0px;margin-top:4px;margin-left:8px;border-radius :10px;}", ".corvermelho.jsx-2899450786{background-color:#ff5247;}", ".coramarelo.jsx-2899450786{background-color:#f7cf00;}", ".corverde.jsx-2899450786{background-color:#00e047;}", ".atDivNavegTop.jsx-2899450786{width:100%;height :20px;font-size:17px;font-family:sans-serif;background-color:#282c45;background-image:linear-gradient(45deg,#9d9d9d,#e2e2e2 );border-top-left-radius :10px;border-top-right-radius :10px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0px;box-sizing:border-box;}", ".atDivCodigo.jsx-2899450786{color:#000000;padding :10px;}", ".atDivNavegContorno.jsx-2899450786{margin-bottom:10px;width:100%;font-size:17px;font-family:sans-serif;background-color:#282c45;background-image:linear-gradient(45deg,#cfc0db,#ffffff,#cfc0db );border-radius :10px;display:block;box-sizing:border-box;-webkit-box-shadow:-9px 9px 20px rgba(1,1,1,0.57);-moz-box-shadow:-9px 9px 20px rgba(1,1,1,0.57);box-shadow:-9px 9px 20px rgba(1,1,1,0.57);}"]));
};

/* harmony default export */ var moJanela_JanelaNaveg = (JanelaNaveg_JanelaNaveg);
// CONCATENATED MODULE: ./components/moleculas/moJanela/JanelaTerminal.js

 //import * as Util from '../../../controller/util.js';

var JanelaTerminal_JanelaTerminal = function JanelaTerminal(props) {
  // console.log('Rodando /moJanela/JanelaEscuro');
  //Layout escuro
  return external_react_default.a.createElement("div", {
    className: "jsx-3030383622" + " " + "DivTerm1"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3030383622" + " " + "DivTerm2"
  }, props.children), external_react_default.a.createElement(style_default.a, {
    id: "3030383622"
  }, [".DivTerm1.jsx-3030383622{padding :10px;}", ".DivTerm2.jsx-3030383622{width:100%;font-size:17px;font-family:sans-serif;color:#00ffea;background-color:#000000;background:rgba(0,0,0,0.7);border:solid 1px s#00ffea;border-radius:4px;padding:10px;}"]));
};

/* harmony default export */ var moJanela_JanelaTerminal = (JanelaTerminal_JanelaTerminal);
// EXTERNAL MODULE: ./controller/util.js
var util = __webpack_require__("JkDD");

// CONCATENATED MODULE: ./components/moleculas/moJanela/index.js








var moJanela_moJanela = function moJanela(props) {
  //console.log('Rodando /moJanela');
  var varEstilo = util["h" /* validaProps */](props.estilo, "");

  if (varEstilo == "luz") {
    //Layout Luz verde
    return external_react_default.a.createElement(moJanela_JanelaLuz, null, props.children);
  } else if (varEstilo == "neon") {
    //Layout escuro
    return external_react_default.a.createElement(moJanela_JanelaNeon, null, props.children);
  } else if (varEstilo == "escuro") {
    //Layout escuro
    return external_react_default.a.createElement(moJanela_JanelaEscuro, null, props.children);
  } else if (varEstilo == "naveg") {
    //Navegador
    return external_react_default.a.createElement(moJanela_JanelaNaveg, null, props.children);
  } else if (varEstilo == "terminal") {
    //Navegador
    return external_react_default.a.createElement(moJanela_JanelaTerminal, null, props.children);
  } else {
    //Layout escuro
    return external_react_default.a.createElement("div", null, props.children);
  }
};

/* harmony default export */ var moleculas_moJanela = __webpack_exports__["a"] = (moJanela_moJanela);

/***/ }),

/***/ "JkDD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return validaProps; });
/* unused harmony export apenasNumeros */
/* unused harmony export fontesCSS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fontesCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fontesCSS2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fontesCSS3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fontesCSS4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fontesCSS5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return listaRegioes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return regiao; });
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

/***/ "NK3G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhj+");
/* harmony import */ var _moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wwkz");
/* harmony import */ var _moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("D7Tn");
/* harmony import */ var _mofooterSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("X6eQ");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("JkDD");
/* harmony import */ var _atoms_atGTM__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ORJM");









var layoutCristalBot = function layoutCristalBot(props) {
  console.log('Rodando /layout/cristalbot.js GAME');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* validaProps */ "h"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* validaProps */ "h"](props.modo, "html");
  var titulo = _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* validaProps */ "h"](props.titulo, "Home");
  var categoria = _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* validaProps */ "h"](props.categoria, "Outros"); //Layout Luz verde

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-134656585 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["536722714", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS1 */ "a"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS2 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS3 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS4 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS5 */ "e"]()]]]) + " " + "CSSLayout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atGTM__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    position: "body",
    modo: modo,
    codGTM: "UA-143307429-1"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-134656585 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["536722714", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS1 */ "a"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS2 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS3 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS4 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS5 */ "e"]()]]]) + " " + "layoutManu esconder"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    estilo: "terminal"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    regiao: regiao,
    modo: modo,
    titulo: titulo,
    categoria: categoria
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-134656585 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["536722714", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS1 */ "a"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS2 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS3 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS4 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS5 */ "e"]()]]]) + " " + "layoutBody"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    display: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-134656585 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["536722714", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS1 */ "a"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS2 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS3 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS4 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS5 */ "e"]()]]])
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    estilo: "terminal"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mofooterSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    regiao: regiao,
    modo: modo
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "134656585"
  }, [".CSSLayout.jsx-134656585{color:#ffffff;width:100%;margin :0px;padding :0px;padding-top :10px;}", ".layoutManu.jsx-134656585{width:25%;padding-left:2%;}", ".layoutBody.jsx-134656585{width:70%;padding-right:2%;}", "@media(max-width:1169px){.layoutManu.jsx-134656585{display :None;}.layoutBody.jsx-134656585{width:100%;padding-right:0px;}}", "@media(max-width:1169px){}"]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "536722714",
    dynamic: [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS1 */ "a"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS2 */ "b"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS3 */ "c"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS4 */ "d"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS5 */ "e"]()]
  }, ["".concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS1 */ "a"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS2 */ "b"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS3 */ "c"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS4 */ "d"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__[/* fontesCSS5 */ "e"](), " body{margin:0px;padding:0px;background-color:#8d5119;background-image:url(\"/static/assetsv5/img/cristalbot/fundopaginacristalbot.jpg\");background-repeat:repeat-x;color:#10ecf5;font-family:SimplonBP-Regular,sans-serif;}")]));
};

/* harmony default export */ __webpack_exports__["a"] = (layoutCristalBot); //Não esqueça de do GTM do body.

/***/ }),

/***/ "ORJM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./controller/util.js
var util = __webpack_require__("JkDD");

// CONCATENATED MODULE: ./components/atoms/atGTM/bodyGTM.js
//Component atomo Price.js



var bodyGTM_bodyGTM = function bodyGTM(props) {
  //console.log('Rodando /componentes/atoms/atGTM/bodyGTM.js');
  var codGTM = util["h" /* validaProps */](props.codGTM, 'UA-177955684-1');
  var varSRC = "https://www.googletagmanager.com/ns.html?id=" + codGTM;
  var modo = util["h" /* validaProps */](props.modo, 'html'); //var varAmpGtm = "{vars:{account:"+codGTM+"},triggers:{trackPageview:{on:visible,request:pageview}}}";
  // var varAmpGtm = { 
  //                 "vars": { "account": "UA-177955684-1" },
  //                 "triggers": { 
  //                    "trackPageview": { "on": "visible", "request": "pageview" } 
  //                 } 
  //             }

  if (modo == "html" || modo == "HTML") {
    return external_react_default.a.createElement("noscript", null, external_react_default.a.createElement("iframe", {
      src: varSRC,
      height: "0",
      width: "0"
    }));
  } else {
    return external_react_default.a.createElement("amp-analytics", {
      type: "googleanalytics"
    }, external_react_default.a.createElement("script", {
      type: "application/json",
      dangerouslySetInnerHTML: {
        __html: "\n                { \"vars\": { \"account\": \"".concat(codGTM, "\" },\n                 \"triggers\": { \n                    \"trackPageview\": { \"on\": \"visible\", \"request\": \"pageview\" } \n                  } \n                }\n              ")
      }
    }));
  }
};

/* harmony default export */ var atGTM_bodyGTM = (bodyGTM_bodyGTM); // Codigo GTM Body com script para html retornar.
//<script>
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'UA-177955684-1');
//</script>
// Codigo GTM Body para AMP retornar.
//<amp-analytics type="googleanalytics" id="analytics1">
//<script type="application/json">
//{
//  "vars": {
//    "account": "UA-177955684-1"
//  },
//  "triggers": {
//    "trackPageview": {
//      "on": "visible",
//      "request": "pageview"
//    }
//  }
//}
//</script>
//</amp-analytics>
// Codigo GTM do BODY para html com Iframe.
// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=UA-177955684-1"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->
// CONCATENATED MODULE: ./components/atoms/atGTM/headGTM.js



var headGTM_headerGTM = function headerGTM(props) {
  var codGTM = util["h" /* validaProps */](props.codGTM, 'UA-177955684-1');
  var modo = util["h" /* validaProps */](props.modo, 'html');

  if (modo == "html" || modo == "HTML") {
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("script", {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=" + codGTM
    }), external_react_default.a.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: "\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', '".concat(codGTM, "');\n              ")
      }
    }));
  } else {
    return external_react_default.a.createElement("script", {
      async: true,
      "custom-element": "amp-form",
      src: "https://cdn.ampproject.org/v0/amp-form-0.1.js"
    });
  }
};

/* harmony default export */ var headGTM = (headGTM_headerGTM); //Codigo GTM para HTML Incluir no Head 
//<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//})(window,document,'script','dataLayer','UA-177955684-1');</script>
//Codigo GTM para HTML Incluir no Head 
//<script async src="https://www.googletagmanager.com/gtag/js?id=UA-177955684-1"></script>
//Codigo GTM para AMP Incluir no Head 
//<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
// CONCATENATED MODULE: ./components/atoms/atGTM/index.js





var atGTM_GTM = function GTM(props) {
  var codGTM = util["h" /* validaProps */](props.codGTM, 'UA-177955684-1');
  var modo = util["h" /* validaProps */](props.modo, 'html');
  var position = util["h" /* validaProps */](props.position, "head");

  if (position == "head") {
    return external_react_default.a.createElement(headGTM, {
      modo: modo,
      codGTM: codGTM
    });
  } else if (position == "body") {
    return external_react_default.a.createElement(atGTM_bodyGTM, {
      modo: modo,
      codGTM: codGTM
    });
  } else {
    return external_react_default.a.createElement("div", null, "Erro na criacao do GTM.modo=" + modo + ". position=" + position + ". codGTM=" + codGTM);
  }
};

/* harmony default export */ var atGTM = __webpack_exports__["a"] = (atGTM_GTM); // function returnScript(codGTM){
//   //var stringFunction = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','"
//   var stringFunction = '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","';
//   return stringFunction + codGTM + '");'
// }
//   return(
//     <HeadGTM modo={modo} codGTM={codGTM1}/>
//     <script>{`
//     (function(w,d,s,l,i){
//       w[l]=w[l]||[];
//       w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
//       var f=d.getElementsByTagName(s)[0],
//       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
//       j.async=true;
//       j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
//       f.parentNode.insertBefore(j,f);
//       })(window,document,'script','dataLayer','${codGTM}');
//     `}</script>
//   )
// }else if(modo=="html"){
//   //<!-- Google Tag Manager body (noscript) -->
//   //<BodyGTM codGTM={codGTM1}/>
//   //<amp-iframe>
//   return(
//     <noscript>
//       <div className="iframegtm">
//         <iframe
//           src={codGTM}
//           height="0" 
//           width="0">
//         </iframe>
//       </div>
//       <style jsx>{`
//         .iframegtm {
//           display:none;
//           visibility:hidden
//         }
//       `}</style>
//     </noscript>
//   )
// }else{
//   return(
//     <noscript></noscript>
//   )
// }
// HEAD
// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-K89BB78');</script>
// <!-- End Google Tag Manager -->
// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-KR9G4JB');</script>
// <!-- End Google Tag Manager -->
// BODY
// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K89BB78"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->
// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KR9G4JB"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->

/***/ }),

/***/ "OVgM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/atoms/atBtLink/index.js + 17 modules
var atBtLink = __webpack_require__("QEe7");

// CONCATENATED MODULE: ./components/moleculas/moListadeRotas/itemMenu.js

 //console.log('Instanciando templates/index.js');

var itemMenu_ListadeRotas = function ListadeRotas(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  var href = props.href;
  var StringModo = "";

  if (modo == "AMP" || modo == "amp") {
    StringModo = "/amp";
  } //Layout luz verde


  return external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + href + "?regiao=" + regiao,
    value: props.children,
    estilo: "neonItem"
  }); //  //Layout escuro
  //  return (
  //       <li>
  //         <a href={StringModo+href+"?regiao="+regiao}>
  //           {props.children}
  //         </a>
  //       <style jsx>{`
  //       a {
  //         text-decoration: none;
  //         font-style: normal;
  //         color: #ffffff;
  //         }
  //         /*
  //       .CssRotasProjeto {
  //         width: 100%;
  //         font-size: 17px;
  //       }
  //       summary {
  //             border-radius: 8px;
  //             color: #ffffff;
  //             display: block;
  //             font-size: 16px;
  //             height: 25px;
  //             width: 90%;
  //             margin: 0;
  //             padding: 0px;
  //             padding-top: 5px;
  //             padding-left: 5px;
  //             -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
  //             -moz-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
  //             box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
  //           }
  //       summary:hover {
  //         padding-left: 9px;
  //         background-color: #1d2033;
  //           } */
  //       ol {
  //             width: 100%;
  //           }
  //       li {
  //             border-radius: 8px;
  //             color: #ffffff;
  //             display: block;
  //             font-size: 16px;
  //             height: 25px;
  //             width: 85%;
  //             margin-top: 4px;
  //             margin-left: -9px;
  //             padding: 0px;
  //             padding-top: 5px;
  //             padding-left: 5px;
  //             -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
  //             -moz-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
  //             box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
  //           }
  //       li:hover {
  //         border: solid 2px blue;
  //         padding-left: 9px;
  //         background-color: #1d2033;
  //           }
  //     `}</style>
  //     </li>
  //   )
};

/* harmony default export */ var itemMenu = (itemMenu_ListadeRotas);
// CONCATENATED MODULE: ./components/moleculas/moListadeRotas/listaHTML.js

 //console.log('Instanciando templates/index.js');

var listaHTML_ListadeRotasHTML = function ListadeRotasHTML(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/",
    regiao: regiao
  }, "HTML5 Introdu\xE7\xE3o"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/semantica/",
    regiao: regiao
  }, "Estrutura da P\xE1gina"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/h1_p_br/",
    regiao: regiao
  }, "Titulo, Par\xE1grafo"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/lista01/",
    regiao: regiao
  }, "Listas N\xE3o ordenada"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/lista02/",
    regiao: regiao
  }, "Listas Ordenada 1"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/lista03/",
    regiao: regiao
  }, "Listas Ordenada A"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/lista04/",
    regiao: regiao
  }, "Listas Ordenada i"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/lista05/",
    regiao: regiao
  }, "Listas Ordenada I"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/lista06/",
    regiao: regiao
  }, "Listas Com descri\xE7\xE3o"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/img/",
    regiao: regiao
  }, "Imagem"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/img_figcaption/",
    regiao: regiao
  }, "Figure e Figcaption"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/iframe/",
    regiao: regiao
  }, "Iframe"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/links/",
    regiao: regiao
  }, "Links - tag A"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/tabela/",
    regiao: regiao
  }, "Tabelas"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/css/css13/",
    regiao: regiao
  }, "Tabelas Style"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/div_span/",
    regiao: regiao
  }, "Div e Span"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/comentario/",
    regiao: regiao
  }, "Coment\xE1rios"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/meta/",
    regiao: regiao
  }, "Meta Tag"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/form01/",
    regiao: regiao
  }, "Formul\xE1rios"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/form02/",
    regiao: regiao
  }, "Form: Legenda"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/form03/",
    regiao: regiao
  }, "Form: Atributos"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/form04/",
    regiao: regiao
  }, "Form: Radio Checkbox"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/form05/",
    regiao: regiao
  }, "Form: Range Color"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/form06/",
    regiao: regiao
  }, "Form: Date Time"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/form07/",
    regiao: regiao
  }, "Form: Button"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/form08/",
    regiao: regiao
  }, "Form: Select Optgroup"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/form09/",
    regiao: regiao
  }, "Form: Datalist"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/form10/",
    regiao: regiao
  }, "Form: Keygen"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/form11/",
    regiao: regiao
  }, "Form: Submit externo"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/mark/",
    regiao: regiao
  }, "Mark e Contenteditable"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/tabindexaccesskey/",
    regiao: regiao
  }, "Tabindex e Accesskey"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/details/",
    regiao: regiao
  }, "Details"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/hgroup/",
    regiao: regiao
  }, "Hgroup"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/meterprogress/",
    regiao: regiao
  }, "Meter e Progresse"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/links/",
    regiao: regiao
  }, "Tag a"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/map/",
    regiao: regiao
  }, "Imagem MAP"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/timedatetime/",
    regiao: regiao
  }, "Time e Datetime"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/semantica/",
    regiao: regiao
  }, "Semantica"), external_react_default.a.createElement(itemMenu, {
    modo: modo,
    href: "/tutorial/html/canvas/",
    regiao: regiao
  }, "Canvas"));
};

/* harmony default export */ var listaHTML = __webpack_exports__["a"] = (listaHTML_ListadeRotasHTML);

/***/ }),

/***/ "QEe7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./components/atoms/atBtLink/btLink.js



var btLink_btLink = function btLink(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (//Sem padrão
    external_react_default.a.createElement("a", {
      href: varHref,
      className: "jsx-3585491591"
    }, external_react_default.a.createElement("div", {
      className: "jsx-3585491591" + " " + "btLink"
    }, varValue), external_react_default.a.createElement(style_default.a, {
      id: "3585491591"
    }, [".btLink.jsx-3585491591{width:100%;padding-top:20px;padding-bottom:20px;color:#000000;cursor:pointer;border-radius:6px;text-align:center;border:solid 1px #dbdbdb;background-color:#ffffff;}"]))
  );
};

/* harmony default export */ var atBtLink_btLink = (btLink_btLink);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkAmarelo1.js



var btLinkAmarelo1_btLinkAmarelo1 = function btLinkAmarelo1(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (// Botão de eu quero no minha Oi.
    external_react_default.a.createElement("div", {
      className: "jsx-1843871680"
    }, external_react_default.a.createElement("a", {
      id: "euquero",
      href: varHref,
      className: "jsx-1843871680" + " " + "btLinkAmarelo1"
    }, varValue), external_react_default.a.createElement(style_default.a, {
      id: "1843871680"
    }, [".btLinkAmarelo1.jsx-1843871680{-webkit-transition-duration:1s;transition-duration:1s;font-family:oiTextRegular,sans-serif;font-size:1rem;background-color:#ffd700;border-radius:0.28571429rem;color:#222;display:block;height:2.2rem;text-align:center;width:196px;-webkit-text-decoration:none;text-decoration:none;border-bottom:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;padding:0.6rem 2.5rem;box-sizing:border-box;border:solid 2px #ffd700;}", ".btLinkAmarelo1.jsx-1843871680:hover{-webkit-transition-duration:1s;transition-duration:1s;color:#222;border:solid 2px #ffd700;background-color:#ffffff;background-image:none;}"]))
  );
};

/* harmony default export */ var atBtLink_btLinkAmarelo1 = (btLinkAmarelo1_btLinkAmarelo1);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkAmarelo2.js



var btLinkAmarelo2_btLinkAmarelo2 = function btLinkAmarelo2(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (// Botão de eu quero no minha Oi.
    external_react_default.a.createElement("div", {
      className: "jsx-3556413409"
    }, external_react_default.a.createElement("a", {
      id: "euquero",
      href: varHref,
      className: "jsx-3556413409" + " " + "btLinkAmarelo2"
    }, varValue), external_react_default.a.createElement(style_default.a, {
      id: "3556413409"
    }, [".btLinkAmarelo2.jsx-3556413409{-webkit-transition-duration:1s;transition-duration:1s;font-family:oiTextRegular,sans-serif;font-size:1rem;padding-top:18px;background-color:#ffd700;border-radius:3px;color:#222;display:block;height:3.8rem;text-align:center;width:100%;-webkit-text-decoration:none;text-decoration:none;border-bottom:solid 1px #dbdbdb;cursor:pointer;box-sizing:border-box;border:solid 2px #ffd700;}", ".btLinkAmarelo2.jsx-3556413409:hover{-webkit-transition-duration:1s;transition-duration:1s;color:#222;border:solid 2px #ffd700;background-color:#ffffff;background-image:none;}"]))
  );
};

/* harmony default export */ var atBtLink_btLinkAmarelo2 = (btLinkAmarelo2_btLinkAmarelo2);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkAmarelo3.js



var btLinkAmarelo3_btLinkAmarelo3 = function btLinkAmarelo3(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (// Botão de "eu quero" OCC.
    external_react_default.a.createElement("div", {
      className: "jsx-3609564126"
    }, external_react_default.a.createElement("a", {
      id: "euquero",
      href: varHref,
      className: "jsx-3609564126" + " " + "btLinkAmarelo3"
    }, varValue), external_react_default.a.createElement(style_default.a, {
      id: "3609564126"
    }, [".btLinkAmarelo3.jsx-3609564126{-webkit-transition-duration:1s;transition-duration:1s;background-color:#ffd700;border-radius:0.28571429rem;color:#222;display:block;font-size:1.14285714rem;font-weight:37.5rem;height:3.42857143rem;text-align:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-text-decoration:none;text-decoration:none;border-bottom:solid 1px #dbdbdb;cursor:pointer;font-family:\"SimplonBP-Regular\",Arial;outline:0;margin:0;padding:0.85714286rem 20px;box-sizing:border-box;font-style:normal;border:solid 2px #ffd700;}", ".btLinkAmarelo3.jsx-3609564126:hover{-webkit-transition-duration:1s;transition-duration:1s;color:#222;border:solid 2px #ffd700;background-color:#ffffff;background-image:none;}"]))
  );
};

/* harmony default export */ var atBtLink_btLinkAmarelo3 = (btLinkAmarelo3_btLinkAmarelo3);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkLaranja.js



var btLinkLaranja_BtLinkLaranja = function BtLinkLaranja(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (// Botão do formulário Meus Documentos.
    external_react_default.a.createElement("div", {
      className: "jsx-1202028937"
    }, external_react_default.a.createElement("a", {
      href: varHref,
      className: "jsx-1202028937" + " " + "btLinklaranja"
    }, varValue), external_react_default.a.createElement(style_default.a, {
      id: "1202028937"
    }, [".btLinklaranja.jsx-1202028937{font-family:oiTextRegular,sans-serif;background-color:#f8562c;background-image:linear-gradient(260deg,#fb851c,#f8562c);border-radius:6px;color:#ffffff;display:block;font-size:1rem;height:3.42857143rem;text-align:center;width:280px;-webkit-text-decoration:none;text-decoration:none;border-bottom:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition-duration:1s;transition-duration:1s;}", ".btLinklaranja.jsx-1202028937:hover{-webkit-transition-duration:1s;transition-duration:1s;color:#f8562c;border:solid 1px #fb851c;background-color:#ffffff;background-image:none;}"]))
  ); //transition: background-image: 2s, transform 2s;
  //-webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
  //transition-delay: 0.5s //espera pra
  //transition: all 0.8s;
  //-webkit-transition: all 0.8s;
  //-moz-transition: all 0.8s;
  //-o-transition: all 0.8s; 
};

/* harmony default export */ var btLinkLaranja = (btLinkLaranja_BtLinkLaranja);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkItemLuzVerde.js



var btLinkItemLuzVerde_btLinkItemLuzVerde = function btLinkItemLuzVerde(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (// Botão luz.
    external_react_default.a.createElement("a", {
      href: varHref,
      className: "jsx-2906016708" + " " + "btLuzA"
    }, external_react_default.a.createElement("div", {
      className: "jsx-2906016708" + " " + "btLuz"
    }, external_react_default.a.createElement("div", {
      className: "jsx-2906016708" + " " + "btLuz1"
    }), external_react_default.a.createElement("div", {
      className: "jsx-2906016708" + " " + "btLuz2"
    }, varValue), external_react_default.a.createElement("div", {
      className: "jsx-2906016708" + " " + "btLuz3"
    })), external_react_default.a.createElement(style_default.a, {
      id: "2906016708"
    }, [".btLuz.jsx-2906016708{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;padding :0;margin:0;color:#10ecf5;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-name:animaItembutLuz-jsx-2906016708;animation-name:animaItembutLuz-jsx-2906016708;}", ".btLuzA.jsx-2906016708{-webkit-text-decoration:none;text-decoration:none;}", ".btLuzA.jsx-2906016708:hover{-webkit-transition-duration:1s;transition-duration:1s;color:#ffffff;padding-left:5px;}", ".btLuzA.jsx-2906016708:hover .btLuz1.jsx-2906016708{background-image:url(\"/static/assetsv5/img/layout_luz/item_luz_01_hover.png\");}", ".btLuzA.jsx-2906016708:hover .btLuz2.jsx-2906016708{background-image:url(\"/static/assetsv5/img/layout_luz/item_luz_02_hover.png\");}", ".btLuzA.jsx-2906016708:hover .btLuz3.jsx-2906016708{background-image:url(\"/static/assetsv5/img/layout_luz/item_luz_03_hover.png\");}", ".btLuz1.jsx-2906016708{width:18px;background-image:url(\"/static/assetsv5/img/layout_luz/item_luz_01.png\");padding:0px;margin:0;}", ".btLuz2.jsx-2906016708{min-width:140px;padding:10px;background-image:url(\"/static/assetsv5/img/layout_luz/item_luz_02.png\");text-align:center;font-family:sans-serif;display:block;font-size:1rem;cursor:pointer;outline:0;font-style:normal;margin:0;}", ".btLuz3.jsx-2906016708{width:15px;background-image:url(\"/static/assetsv5/img/layout_luz/item_luz_03.png\");padding:0px;margin:0;}", "@-webkit-keyframes animaItembutLuz-jsx-2906016708{from{opacity:0.0;margin-left:10%;width:80%;}to{opacity:1.0;margin-left:0%;width:100%;}}", "@keyframes animaItembutLuz-jsx-2906016708{from{opacity:0.0;margin-left:10%;width:80%;}to{opacity:1.0;margin-left:0%;width:100%;}}"]))
  );
};

/* harmony default export */ var atBtLink_btLinkItemLuzVerde = (btLinkItemLuzVerde_btLinkItemLuzVerde);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkLuz.js



var btLinkLuz_BtLinkLuz = function BtLinkLuz(props) {
  var varValue = props.value;
  var varHref = props.href;

  if (varHref != "") {
    return (// Botão luz.
      external_react_default.a.createElement("a", {
        href: varHref,
        className: "jsx-2805668918" + " " + "btLuzA"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2805668918" + " " + "btLuz"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2805668918" + " " + "btLuz1"
      }), external_react_default.a.createElement("div", {
        className: "jsx-2805668918" + " " + "btLuz2"
      }, varValue), external_react_default.a.createElement("div", {
        className: "jsx-2805668918" + " " + "btLuz3"
      })), external_react_default.a.createElement(style_default.a, {
        id: "2805668918"
      }, [".btLuz.jsx-2805668918{color:#10ecf5;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;padding :0;margin:0;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:animabutLuz-jsx-2805668918;animation-name:animabutLuz-jsx-2805668918;}", ".btLuzA.jsx-2805668918{-webkit-text-decoration:none;text-decoration:none;}", ".btLuzA.jsx-2805668918:hover{color:#ffffff;}", ".btLuzA.jsx-2805668918:hover .btLuz1.jsx-2805668918{background-image:url(\"/static/assetsv5/img/layout_luz/but_luz_01_hover.png\");}", ".btLuzA.jsx-2805668918:hover .btLuz2.jsx-2805668918{background-image:url(\"/static/assetsv5/img/layout_luz/but_luz_02_hover.png\");}", ".btLuzA.jsx-2805668918:hover .btLuz3.jsx-2805668918{background-image:url(\"/static/assetsv5/img/layout_luz/but_luz_03_hover.png\");}", ".btLuz1.jsx-2805668918{width:17px;background-image:url(\"/static/assetsv5/img/layout_luz/but_luz_01.png\");padding:0px;margin:0;}", ".btLuz2.jsx-2805668918{min-width:150px;padding:10px;background-image:url(\"/static/assetsv5/img/layout_luz/but_luz_02.png\");text-align:center;font-family:sans-serif;display:block;font-size:1rem;cursor:pointer;outline:0;font-style:normal;margin:0;}", ".btLuz3.jsx-2805668918{width:15px;background-image:url(\"/static/assetsv5/img/layout_luz/but_luz_03.png\");padding:0px;margin:0;}", "@-webkit-keyframes animabutLuz-jsx-2805668918{0%{opacity:0.0;}100%{opacity:1.0;}}", "@keyframes animabutLuz-jsx-2805668918{0%{opacity:0.0;}100%{opacity:1.0;}}"]))
    );
  } else {
    return (// Botão luz.
      external_react_default.a.createElement("div", {
        className: "jsx-4089728617" + " " + "btLuz"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4089728617" + " " + "btLuz1"
      }), external_react_default.a.createElement("div", {
        className: "jsx-4089728617" + " " + "btLuz2"
      }, varValue), external_react_default.a.createElement("div", {
        className: "jsx-4089728617" + " " + "btLuz3"
      }), external_react_default.a.createElement(style_default.a, {
        id: "4089728617"
      }, [".btLuz.jsx-4089728617{color:#10ecf5;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;padding :0;margin:0;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:animabutLuz-jsx-4089728617;animation-name:animabutLuz-jsx-4089728617;}", ".btLuz.jsx-4089728617:hover{color:#ffffff;}", ".btLuz.jsx-4089728617:hover .btLuz1.jsx-4089728617{background-image:url(\"/static/assetsv5/img/layout_luz/but_luz_01_hover.png\");}", ".btLuz.jsx-4089728617:hover .btLuz2.jsx-4089728617{background-image:url(\"/static/assetsv5/img/layout_luz/but_luz_02_hover.png\");}", ".btLuz.jsx-4089728617:hover .btLuz3.jsx-4089728617{background-image:url(\"/static/assetsv5/img/layout_luz/but_luz_03_hover.png\");}", ".btLuz1.jsx-4089728617{width:17px;background-image:url(\"/static/assetsv5/img/layout_luz/but_luz_01.png\");padding:0px;margin:0;}", ".btLuz2.jsx-4089728617{min-width:150px;padding:10px;background-image:url(\"/static/assetsv5/img/layout_luz/but_luz_02.png\");text-align:center;font-family:sans-serif;display:block;font-size:1rem;cursor:pointer;outline:0;font-style:normal;margin:0;}", ".btLuz3.jsx-4089728617{width:15px;background-image:url(\"/static/assetsv5/img/layout_luz/but_luz_03.png\");padding:0px;margin:0;}", "@-webkit-keyframes animabutLuz-jsx-4089728617{0%{opacity:0.0;}100%{opacity:1.0;}}", "@keyframes animabutLuz-jsx-4089728617{0%{opacity:0.0;}100%{opacity:1.0;}}"]))
    );
  }
};

/* harmony default export */ var btLinkLuz = (btLinkLuz_BtLinkLuz);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkCinza.js



var btLinkCinza_btLinkCinza = function btLinkCinza(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (// Botão cinza site valente.
    external_react_default.a.createElement("div", {
      className: "jsx-2154427074"
    }, external_react_default.a.createElement("a", {
      href: varHref,
      className: "jsx-2154427074" + " " + "btCinza"
    }, varValue, " "), external_react_default.a.createElement(style_default.a, {
      id: "2154427074"
    }, [".btCinza.jsx-2154427074{padding:10px;-webkit-transition:all 0.8s;transition:all 0.8s;font-family:oiTextRegular,sans-serif;background-color:#26293c;border-radius:15px;color:#ffffff;display:block;font-size:1rem;text-align:center;-webkit-text-decoration:none;text-decoration:none;border:solid 2px #4a516b;cursor:pointer;outline:0;margin:0;box-sizing:border-box;font-style:normal;width:100%;max-width:500px;}", ".btCinza.jsx-2154427074:hover{-webkit-transition:all 0.8s;transition:all 0.8s;-webkit-transition:all 0.8s;-moz-transition:all 0.8s;-o-transition:all 0.8s;background-color:#4a516b;}"]))
  );
};

/* harmony default export */ var atBtLink_btLinkCinza = (btLinkCinza_btLinkCinza);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkRosa.js



var btLinkRosa_btLinkRosa = function btLinkRosa(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (// Botão de ENTRAR no minha Oi.
    external_react_default.a.createElement("div", {
      className: "jsx-634642632"
    }, external_react_default.a.createElement("a", {
      href: varHref,
      className: "jsx-634642632" + " " + "btLinkRosa"
    }, varValue, " "), external_react_default.a.createElement(style_default.a, {
      id: "634642632"
    }, [".btLinkRosa.jsx-634642632{padding:10px;-webkit-transition:all 0.8s;transition:all 0.8s;font-family:oiTextRegular,sans-serif;background-color:#d82482;border-radius:3px;color:#ffffff;display:block;font-size:1rem;text-align:center;-webkit-text-decoration:none;text-decoration:none;border:solid 2px #d82482;cursor:pointer;outline:0;margin:0;box-sizing:border-box;font-style:normal;width:100%;max-width:500px;}", ".btLinkRosa.jsx-634642632:hover{-webkit-transition:all 0.8s;transition:all 0.8s;-webkit-transition:all 0.8s;-moz-transition:all 0.8s;-o-transition:all 0.8s;color:#d82482;background-color:#ffffff;border:solid 1px #d82482;}"]))
  );
};

/* harmony default export */ var atBtLink_btLinkRosa = (btLinkRosa_btLinkRosa);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkRosaInvertido.js



var btLinkRosaInvertido_btLinkRosaInvertido = function btLinkRosaInvertido(props) {
  var varValue = props.value;
  var varHref = props.href;
  var varWidth = props.width;
  return (// Botão usado no minha Oi.
    external_react_default.a.createElement("div", {
      className: style_default.a.dynamic([["22613920", [varWidth]]])
    }, external_react_default.a.createElement("a", {
      href: varHref,
      className: style_default.a.dynamic([["22613920", [varWidth]]]) + " " + "btLinkRosaInvertido"
    }, varValue, " "), external_react_default.a.createElement(style_default.a, {
      id: "22613920",
      dynamic: [varWidth]
    }, [".btLinkRosaInvertido.__jsx-style-dynamic-selector{padding:10px;-webkit-transition:all 0.8s;transition:all 0.8s;font-family:oiTextRegular,sans-serif;background-color:#d82482;border-radius:3px;display:block;font-size:1rem;text-align:center;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;outline:0;margin:0;font-style:normal;width:".concat(varWidth, ";max-width:500px;color:#d82482;background-color:#ffffff;border:solid 1px #d82482;}"), ".btLinkRosaInvetido.__jsx-style-dynamic-selector:hover{-webkit-transition:all 0.8s;transition:all 0.8s;-webkit-transition:all 0.8s;-moz-transition:all 0.8s;-o-transition:all 0.8s;color:#ffffff;border:solid 1px #d82482;background-color:#d82482;}"]))
  );
};

/* harmony default export */ var atBtLink_btLinkRosaInvertido = (btLinkRosaInvertido_btLinkRosaInvertido);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkRosaInvertidoCurto.js



var btLinkRosaInvertidoCurto_btLinkRosaInvetidoCurto = function btLinkRosaInvetidoCurto(props) {
  var varValue = props.value;
  var varHref = props.href;
  var varWidth = props.width;
  var varWidthMobile = props.mobilewidth;
  return (// Botão usado no minha Oi.
    external_react_default.a.createElement("div", {
      className: style_default.a.dynamic([["1875886023", [varWidth, varWidthMobile]]])
    }, external_react_default.a.createElement("a", {
      href: varHref,
      className: style_default.a.dynamic([["1875886023", [varWidth, varWidthMobile]]]) + " " + "btLinkRosaInvetidoCurto"
    }, varValue, " "), external_react_default.a.createElement(style_default.a, {
      id: "1875886023",
      dynamic: [varWidth, varWidthMobile]
    }, [".btLinkRosaInvetidoCurto.__jsx-style-dynamic-selector{box-sizing:border-box;display:inline-block;position:relative;width:".concat(varWidth, ";font-weight:400;font-style:normal;font-size:1rem;line-height:normal;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:center;background-color:transparent;color:rgb(216,36,130);padding:20px;margin-top:25px;margin-bottom:60px;border-width:1px;border-style:solid;border-image:initial;border-radius:4px;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.3s ease 0s;transition:all 0.3s ease 0s;outline:none;border-color:rgb(216,36,130);}"), ".btLinkRosaInvetidoCurto.__jsx-style-dynamic-selector:hover{-webkit-transition:all 0.8s;transition:all 0.8s;-webkit-transition:all 0.8s;-moz-transition:all 0.8s;-o-transition:all 0.8s;color:#ffffff;border:solid 1px #d82482;background-color:#d82482;}", "@media (max-width:520px){.btLinkRosaInvetidoCurto.__jsx-style-dynamic-selector{width:".concat(varWidthMobile, ";}}")]))
  );
};

/* harmony default export */ var btLinkRosaInvertidoCurto = (btLinkRosaInvertidoCurto_btLinkRosaInvetidoCurto);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkLaranjaDegrade.js



var btLinkLaranjaDegrade_btLinkLaranjaDegrade = function btLinkLaranjaDegrade(props) {
  var varValue = props.value;
  var varHref = props.href;
  return external_react_default.a.createElement("div", {
    className: "jsx-3783963777"
  }, external_react_default.a.createElement("a", {
    href: varHref,
    className: "jsx-3783963777" + " " + "btLinkLaranjaDegrade"
  }, varValue, " "), external_react_default.a.createElement(style_default.a, {
    id: "3783963777"
  }, [".btLinkLaranjaDegrade.jsx-3783963777{display:inline-block;position:relative;width:100%;max-width:16.875rem;border-radius:4px;background-color:rgb(255,215,0);font-family:\"SimplonBP-Regular\";font-weight:400;font-style:normal;line-height:normal;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:center;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.3s ease 0s;transition:all 0.3s ease 0s;outline:currentcolor none medium;background-image:linear-gradient( 281deg, rgb(254,107,3) -100%, rgb(227,52,101) );color:rgb(255,255,255);font-size:1.125rem;box-shadow:rgba(0,0,0,0.2) 10px 13px 20px -3px;border:medium none;padding:16.5px;}"]));
};

/* harmony default export */ var atBtLink_btLinkLaranjaDegrade = (btLinkLaranjaDegrade_btLinkLaranjaDegrade);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkNeon.js



var btLinkNeon_btLinkNeon = function btLinkNeon(props) {
  var varValue = props.value;
  var varHref = props.href;

  if (varHref != "") {
    return (// Botão Neon VVC Estudio.
      external_react_default.a.createElement("div", {
        className: "jsx-1357024904"
      }, external_react_default.a.createElement("a", {
        href: varHref,
        className: "jsx-1357024904" + " " + "btLinkNeon"
      }, varValue), external_react_default.a.createElement(style_default.a, {
        id: "1357024904"
      }, [".btLinkNeon.jsx-1357024904{border:solid 2px #00ffea;border-radius:5px;padding:5px;-webkit-transition:all 0.8s;transition:all 0.8s;font-family:oiTextRegular,sans-serif;background-color:#00ffea;background:rgba(0,255,255,0.2);color:#00ffea;display:block;font-size:1rem;text-align:center;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;outline:0;margin-right:5px;margin-bottom:5px;box-sizing:border-box;font-style:normal;width:100%;max-width:500px;}", ".btLinkNeon.jsx-1357024904:hover{-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-o-transition:all 0.5s;color:#ffffff;border:solid 2px #ffffff;}"]))
    );
  } else {
    return external_react_default.a.createElement("div", {
      className: "jsx-1357024904"
    }, external_react_default.a.createElement("div", {
      className: "jsx-1357024904" + " " + "btLinkNeon"
    }, varValue), external_react_default.a.createElement(style_default.a, {
      id: "1357024904"
    }, [".btLinkNeon.jsx-1357024904{border:solid 2px #00ffea;border-radius:5px;padding:5px;-webkit-transition:all 0.8s;transition:all 0.8s;font-family:oiTextRegular,sans-serif;background-color:#00ffea;background:rgba(0,255,255,0.2);color:#00ffea;display:block;font-size:1rem;text-align:center;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;outline:0;margin-right:5px;margin-bottom:5px;box-sizing:border-box;font-style:normal;width:100%;max-width:500px;}", ".btLinkNeon.jsx-1357024904:hover{-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-o-transition:all 0.5s;color:#ffffff;border:solid 2px #ffffff;}"]));
  }
};

/* harmony default export */ var atBtLink_btLinkNeon = (btLinkNeon_btLinkNeon);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkNeonItem.js



var btLinkNeonItem_btLinkNeonItem = function btLinkNeonItem(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (// Botão Neon VVC Estudio.
    external_react_default.a.createElement("div", {
      className: "jsx-60076234"
    }, external_react_default.a.createElement("a", {
      href: varHref,
      className: "jsx-60076234" + " " + "btLinkNeonItem"
    }, varValue), external_react_default.a.createElement(style_default.a, {
      id: "60076234"
    }, [".btLinkNeonItem.jsx-60076234{border:solid 0px #00ffea;border-top:solid 0px #00ffea;border-bottom-right-radius:20px;padding-top:5px;-webkit-transition:all 0.8s;transition:all 0.8s;font-family:oiTextRegular,sans-serif;background-color:#00ffea;background:rgba(0,255,255,0.2);color:#00ffea;display:block;font-size:1rem;text-align:center;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;outline:0;margin-right:5px;margin-bottom:5px;box-sizing:border-box;font-style:normal;width:100%;max-width:500px;}", ".btLinkNeonItem.jsx-60076234:hover{-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-o-transition:all 0.5s;color:#ffffff;border:solid 2px #ffffff;}"]))
  );
};

/* harmony default export */ var atBtLink_btLinkNeonItem = (btLinkNeonItem_btLinkNeonItem);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkPurple1.js



var btLinkPurple1_btLinkPurple1 = function btLinkPurple1(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (// Botão do Minha Oi na home do site SEO.
    external_react_default.a.createElement("div", {
      className: "jsx-4084733995"
    }, external_react_default.a.createElement("a", {
      id: "euquero",
      href: varHref,
      className: "jsx-4084733995" + " " + "btLinkPurple1"
    }, varValue), external_react_default.a.createElement(style_default.a, {
      id: "4084733995"
    }, [".btLinkPurple1.jsx-4084733995{font-family:oiTextRegular,sans-serif;font-size:1rem;background-color:#8f25e5;border-radius:3px;color:#ffffff;display:block;height:3.8rem;text-align:center;width:143px;-webkit-text-decoration:none;text-decoration:none;border-bottom:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition-duration:1s;transition-duration:1s;}", ".btLinkPurple1.jsx-4084733995:hover{-webkit-transition-duration:1s;transition-duration:1s;color:#8f25e5;border:solid 1px #8f25e5;background-color:#ffffff;background-image:none;}"]))
  );
};

/* harmony default export */ var atBtLink_btLinkPurple1 = (btLinkPurple1_btLinkPurple1);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkPurple2.js



var btLinkPurple2_btLinkPurple2 = function btLinkPurple2(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (// Botão do Minha Oi na home do site SEO.
    external_react_default.a.createElement("div", {
      className: "jsx-3721330218"
    }, external_react_default.a.createElement("a", {
      id: "euquero",
      href: varHref,
      className: "jsx-3721330218" + " " + "btLinkPurple2"
    }, varValue), external_react_default.a.createElement(style_default.a, {
      id: "3721330218"
    }, [".btLinkPurple2.jsx-3721330218{font-family:oiTextRegular,sans-serif;background-color:#8f25e5;border-radius:3px;color:#ffffff;display:block;font-size:1rem;height:3.2rem;text-align:center;width:169px;-webkit-text-decoration:none;text-decoration:none;border-bottom:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition-duration:1s;transition-duration:1s;}", ".btLinkPurple2.jsx-3721330218:hover{-webkit-transition-duration:1s;transition-duration:1s;color:#8f25e5;border:solid 1px #8f25e5;background-color:#ffffff;background-image:none;}"]))
  );
};

/* harmony default export */ var atBtLink_btLinkPurple2 = (btLinkPurple2_btLinkPurple2);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkBranco.js



var btLinkBranco_btLinkBranco = function btLinkBranco(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (// Botão do formulário Meus Documentos.
    external_react_default.a.createElement("div", {
      className: "jsx-2015391054"
    }, external_react_default.a.createElement("a", {
      href: varHref,
      className: "jsx-2015391054" + " " + "btLinkBranco"
    }, varValue), external_react_default.a.createElement(style_default.a, {
      id: "2015391054"
    }, [".btLinkBranco.jsx-2015391054{font-family:oiTextRegular,sans-serif;background-color:#ffffff;border-radius:8px;color:#222222;display:block;font-size:1rem;height:3.42857143rem;text-align:center;width:300px;-webkit-text-decoration:none;text-decoration:none;border:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition:0.5s;transition:0.5s;-webkit-box-shadow:2px 2px 20px rgba(1,1,1,0.17);-moz-box-shadow:2px 2px 20px rgba(1,1,1,0.17);box-shadow:2px 2px 20px rgba(1,1,1,0.17);}", ".btLinkBranco.jsx-2015391054:hover{-webkit-box-shadow:1px 1px 10px rgba(1,1,1,0.47);-moz-box-shadow:1px 1px 10px rgba(1,1,1,0.47);box-shadow:1px 1px 10px rgba(1,1,1,0.47);}"]))
  );
};

/* harmony default export */ var atBtLink_btLinkBranco = (btLinkBranco_btLinkBranco);
// EXTERNAL MODULE: ./controller/util.js
var util = __webpack_require__("JkDD");

// CONCATENATED MODULE: ./components/atoms/atBtLink/index.js




















var atBtLink_btSubmit = function btSubmit(props) {
  var varValue = util["h" /* validaProps */](props.value, "");
  var varHref = util["h" /* validaProps */](props.href, "www.oi.com.br");
  var varEstilo = util["h" /* validaProps */](props.estilo, "");
  var varWidth = util["h" /* validaProps */](props.width, "");
  var varWidthMobile = util["h" /* validaProps */](props.mobilewidth, "");

  if (varEstilo == "laranja") {
    return external_react_default.a.createElement(btLinkLaranja, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "amarelo1") {
    return external_react_default.a.createElement(atBtLink_btLinkAmarelo1, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "amarelo2") {
    return external_react_default.a.createElement(atBtLink_btLinkAmarelo2, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "amarelo3") {
    return external_react_default.a.createElement(atBtLink_btLinkAmarelo3, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "branco") {
    return external_react_default.a.createElement(atBtLink_btLinkBranco, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "cinza") {
    return external_react_default.a.createElement(atBtLink_btLinkCinza, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "itemLuzVerde") {
    return external_react_default.a.createElement(atBtLink_btLinkItemLuzVerde, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "luz") {
    return external_react_default.a.createElement(btLinkLuz, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "neon") {
    return external_react_default.a.createElement(atBtLink_btLinkNeon, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "neonItem") {
    return external_react_default.a.createElement(atBtLink_btLinkNeonItem, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "Purple1") {
    return external_react_default.a.createElement(atBtLink_btLinkPurple1, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "Purple2") {
    return external_react_default.a.createElement(atBtLink_btLinkPurple2, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "rosa") {
    return external_react_default.a.createElement(atBtLink_btLinkRosa, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "rosa-invetido") {
    return external_react_default.a.createElement(atBtLink_btLinkRosaInvertido, {
      value: varValue,
      href: varHref,
      width: varWidth
    });
  } else if (varEstilo == "rosa-invetido-curto") {
    return external_react_default.a.createElement(btLinkRosaInvertidoCurto, {
      value: varValue,
      href: varHref,
      width: varWidth,
      mobilewidth: varWidthMobile
    });
  } else if (varEstilo == "laraja-degrade") {
    return external_react_default.a.createElement(atBtLink_btLinkLaranjaDegrade, {
      value: varValue,
      href: varHref
    });
  } else {
    return external_react_default.a.createElement(atBtLink_btLink, {
      value: varValue,
      href: varHref
    });
  }
};

/* harmony default export */ var atBtLink = __webpack_exports__["a"] = (atBtLink_btSubmit);

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
  var listaRegioes = util["f" /* listaRegioes */]();
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
  var JsonRegiao = util["g" /* regiao */](regiao); // var stringModo = "";
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
  var JsonRegiao = util["g" /* regiao */](regiao); // var StringModo = "";
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

/***/ "X6eQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("D4zN");
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhj+");
/* harmony import */ var _moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VIBa");
/* harmony import */ var _atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("QEe7");





 //import MenuMobile01 from '../moMenuMobile01/index.js'
//import * as Util from '../../../controller/util.js';
//console.log('moHeaderSideDoValente ');

var moFooterSideDoValente = function moFooterSideDoValente(props) {
  var regiao = props.regiao;
  var modo = props.modo; //const JsonRegiao = Util.regiao(regiao);

  var StringModo = "";

  if (modo == "AMP" || modo == "amp") {
    StringModo = "/amp";
  }

  console.log('* Header do Valente | modo=' + modo + ' | regiao=' + regiao);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    display: "responsivo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092" + " " + "logo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: StringModo + "/?regiao=" + regiao,
    className: "jsx-1605927092"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    src: "/static/assetsv5/img/logo_vvc.png",
    width: "100px",
    height: "100px",
    alt: "Logo Site Valente",
    title: "Logo Site Valente",
    class: "LogoSiteValente",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    display: "responsivo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092" + " " + "footerColuna"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: StringModo + "/?regiao=" + regiao,
    value: "Home",
    estilo: "neon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: StringModo + "/tutorial/?regiao=" + regiao,
    value: "Tutoriais",
    estilo: "neon"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092" + " " + "footerColuna"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: StringModo + "/utilitarios/?regiao=" + regiao,
    value: "Utilitarios",
    estilo: "neon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: StringModo + "/game/?regiao=" + regiao,
    value: "Jogos",
    estilo: "neon"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092" + " " + "footerColuna"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: "https://sites.google.com/view/vvc-estudio/home",
    value: "Design",
    estilo: "neon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: StringModo + "/eu/?regiao=" + regiao,
    value: "Autor",
    estilo: "neon"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    display: "horizontal"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092"
  }, "Visite outros canais :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://web.facebook.com/designervvc",
    className: "jsx-1605927092"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    src: "/static/assetsv5/img/facebook.jpg",
    width: "24px",
    height: "24px",
    alt: "facebook",
    title: "Facebook Designer VVC",
    class: "LogoFacebook",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://sites.google.com/view/vvc-estudio/",
    className: "jsx-1605927092"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    src: "/static/assetsv5/img/sitesgoogle.jpg",
    width: "24px",
    height: "24px",
    alt: "sites google",
    title: "Site Google VVC estudio",
    class: "LogoSitesgoogle",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.youtube.com/user/vvcestudio",
    className: "jsx-1605927092"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    src: "/static/assetsv5/img/youtube.jpg",
    width: "24px",
    height: "24px",
    alt: "Youtube",
    title: "Youtube VVC Estudio",
    class: "LogoYoutube",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://br.pinterest.com/viniciusvalente/modelagem-3d-do-valente/",
    className: "jsx-1605927092"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    src: "/static/assetsv5/img/pinterest.jpg",
    width: "24px",
    height: "24px",
    alt: "Pinterest",
    title: "Pinterest Modelagem 3d",
    class: "LogoPinterest",
    modo: modo
  })))), "\xA9 2020 VVC Studio. Todos os direitos reservados."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092" + " " + "FooterdoSite"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1605927092"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    modo: modo,
    regiao: regiao
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1605927092"
  }, [".logo.jsx-1605927092{margin:0px;padding-top:10px;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:slideinSombra-jsx-1605927092;animation-name:slideinSombra-jsx-1605927092;}", ".footerColuna.jsx-1605927092{min-width:155px;}", ".FooterdoSite.jsx-1605927092{right:0px;float:right;padding-top:15px;text-align:right;}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (moFooterSideDoValente); //© 2020 VVC Estudio. All Rights Reserved. 
//© 2020 VVC Studio. Todos os direitos reservados.

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

/***/ "h6+w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kVuB");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JkDD");
/* harmony import */ var _atoms_atGTM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ORJM");






var moHead = function moHead(props) {
  console.log('Rodando /layout.js');
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_3__[/* validaProps */ "h"](props.modo, "html");
  var title = _controller_util_js__WEBPACK_IMPORTED_MODULE_3__[/* validaProps */ "h"](props.title, "Pagina sem titulo");
  var description = _controller_util_js__WEBPACK_IMPORTED_MODULE_3__[/* validaProps */ "h"](props.description, title);
  var canonical = _controller_util_js__WEBPACK_IMPORTED_MODULE_3__[/* validaProps */ "h"](props.canonical, "/");
  var amphtml = "/amp" + canonical;

  if (modo == "html" || modo == "HTML") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      href: props.href
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: description
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "canonical",
      href: canonical
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "amphtml",
      href: amphtml
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_atGTM__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      position: "head",
      modo: modo,
      codGTM: "UA-177955684-1"
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      href: props.icohref
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: description
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "canonical",
      href: canonical
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "amphtml",
      href: amphtml
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      async: true,
      "custom-element": "amp-form",
      src: "https://cdn.ampproject.org/v0/amp-form-0.1.js"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      async: true,
      "custom-element": "amp-lightbox",
      src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      async: true,
      "custom-element": "amp-iframe",
      src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      async: true,
      "custom-element": "amp-analytics",
      src: "https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_atGTM__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      position: "head",
      modo: modo,
      codGTM: "UA-177955684-1"
    }));
  }
}; //<GTM position="headbody" modo={modo} codGTM="UA-177955684-1" />


/* harmony default export */ __webpack_exports__["a"] = (moHead); //<GTM position="body" modo={modo} codGTM="UA-177955684-1" />
//<GTM position="head" modo={modo} codGTM="UA-177955684-1" />
// GTM AMP Incluir no Head <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>

/* 
// GTM para HTML incluir
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-177955684-1"></script>
<script>
  {"window.dataLayer = window.dataLayer || [];"}
  {"function gtag(){dataLayer.push(arguments);}"}
  {"gtag('js', new Date());"}
  {"gtag('config', 'UA-177955684-1');"}
</script>
*/

/* 
// GTM para AMP incluir
<amp-analytics type="googleanalytics" id="analytics1">
<script type="application/json">
{
  "vars": {
    "account": "UA-177955684-1"
  },
  "triggers": {
    "trackPageview": {
      "on": "visible",
      "request": "pageview"
    }
  }
} 
</script>
</amp-analytics>
*/

/***/ }),

/***/ "kVuB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JkDD");
//Component atomo atFavIcon.js



var atFavIcon = function atFavIcon(props) {
  var href = _controller_util_js__WEBPACK_IMPORTED_MODULE_1__[/* validaProps */ "h"](props.href, "/static/assetsv5/img/faviconvvc.ico");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: href
  });
};

/* harmony default export */ __webpack_exports__["a"] = (atFavIcon);

/***/ }),

/***/ "oUfN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_game_controleogodzilla_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zRgs");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JkDD");


 //import { withAmp } from 'next/amp';

var RotaControleOGodzilla = function RotaControleOGodzilla(props) {
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.url.query.regiao, "RJ");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_templates_game_controleogodzilla_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: "html",
    regiao: regiao
  });
}; //query={props.url.query}
//export default withAmp(RotaControleOGodzilla); // Usado para páginas AMP
//export default withAmp(RotaControleOGodzilla, { hybrid: true }); // Usado para páginas hibridas


/* harmony default export */ __webpack_exports__["default"] = (RotaControleOGodzilla); // Usado para páginas HTML

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
  var display = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.display, "vertical"); // vertical/horizontal/justificado/responsivo
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

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "wwkz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./controller/util.js
var util = __webpack_require__("JkDD");

// CONCATENATED MODULE: ./components/atoms/atDetails/index.js

 //import { useAmp } from 'next/amp'

var atDetails_atdetails = function atdetails(props) {
  var open = util["h" /* validaProps */](props.open, false); //console.log('open =' + open);

  if (open) {
    return external_react_default.a.createElement("details", {
      open: true
    }, props.children);
  } else {
    return external_react_default.a.createElement("details", null, props.children);
  }
};

/* harmony default export */ var atDetails = (atDetails_atdetails);
// EXTERNAL MODULE: ./components/atoms/atBtLink/index.js + 17 modules
var atBtLink = __webpack_require__("QEe7");

// EXTERNAL MODULE: ./components/moleculas/moListadeRotas/listaHTML.js + 1 modules
var listaHTML = __webpack_require__("OVgM");

// CONCATENATED MODULE: ./components/moleculas/moListadeRotas/index.js

 //import a from 'next/a'




 //import Li from './itemMenu.js';
//consdive.log('Instanciando templates/index.js');

var moListadeRotas_ListadeRotas = function ListadeRotas(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  var titulo = util["h" /* validaProps */](props.titulo, "nenhum");
  var categoria = util["h" /* validaProps */](props.categoria, "categoria");
  var StringModo = "";

  if (modo == "AMP" || modo == "amp") {
    StringModo = "/amp";
  } //Layout Luz Verde


  return external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + 'CssRotasProjeto'
  }, external_react_default.a.createElement("nav", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atDetails, {
    open: titulo == "Home"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Home",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/?regiao=" + regiao,
    value: "Pagina em HTML",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/amp/?regiao=" + regiao,
    value: "Pagina em AMP",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: titulo == "Utilitarios"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Utilitarios",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/utilitarios/?regiao=" + regiao,
    value: "Utilitarios",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/utilitarios/conversordetexto/?regiao=" + regiao,
    value: "Converta Textos",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/utilitarios/conversordeunidade/?regiao=" + regiao,
    value: "Converta Unidades",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/utilitarios/servicosgratuitos/?regiao=" + regiao,
    value: "Servicos Gratuitos",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: titulo == "Games"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Games",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/game?regiao=" + regiao,
    value: "Games do valente",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/game/cristalbot/?regiao=" + regiao,
    value: "Cristal Bot",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/game/controleogodzilla/?regiao=" + regiao,
    value: "Controle o Godzilla",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/game/tanque/?regiao=" + regiao,
    value: "Tanque de Guerra",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/game/ecossistema/?regiao=" + regiao,
    value: "Ecossistema",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/game/cobrinha/?regiao=" + regiao,
    value: "Cobrinha",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: titulo == "Tutoriais"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Tutoriais",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/?regiao=" + regiao,
    value: "C\xF3digo intro",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atDetails, {
    open: categoria == "html"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "HTML",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(listaHTML["a" /* default */], {
    modo: modo,
    regiao: regiao
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "SVG"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "SVG",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/html/svg01/?regiao=" + regiao,
    value: "SVG rect",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/html/svg02/?regiao=" + regiao,
    value: "SVG ellipse, text",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/html/svg03/?regiao=" + regiao,
    value: "Line Polygon",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "CSS"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "CSS",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/?regiao=" + regiao,
    value: "Introdu\xE7\xE3o ao CSS",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/css02/?regiao=" + regiao,
    value: "Estilizando textos",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/css03/?regiao=" + regiao,
    value: "Imagens de fundo",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/css04/?regiao=" + regiao,
    value: "Link e Divs",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/css05/?regiao=" + regiao,
    value: "Classe, ID e Span",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/css06/?regiao=" + regiao,
    value: "Margin, padding e floatAula",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/css07/?regiao=" + regiao,
    value: "Posi\xE7\xE3o e z-index",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/css08/?regiao=" + regiao,
    value: "Efeito hover",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/css09/?regiao=" + regiao,
    value: "Heran\xE7a",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/css10/?regiao=" + regiao,
    value: "Menu com listas",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/css11/?regiao=" + regiao,
    value: "Menu drop-down",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/css12/?regiao=" + regiao,
    value: "Valida\xE7\xE3o",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/css13/?regiao=" + regiao,
    value: "Tabelas Style",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/css/anima_but/?regiao=" + regiao,
    value: "Exemplos Anima But",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "Python"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Python",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/python/?regiao=" + regiao,
    value: "Python intro.",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/python/Pandas?regiao=" + regiao,
    value: "Pandas",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/python/NumPy?regiao=" + regiao,
    value: "Numpy",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "Apache"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Apache",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/apache/?regiao=" + regiao,
    value: "Apache intro.",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/apache/instalubuntu?regiao=" + regiao,
    value: "Instalar no Ubuntu",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/apache/alias?regiao=" + regiao,
    value: "Alias em Apache",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/apache/redirect?regiao=" + regiao,
    value: "redirect 301",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "ASP"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "ASP",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/asp/?regiao=" + regiao,
    value: "ASP introdu\xE7\xE3o",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/asp/redirect?regiao=" + regiao,
    value: "redirect 301",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "CGI"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "CGI PERL",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/cgi/?regiao=" + regiao,
    value: "CGI introdu\xE7\xE3o",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/cgi/redirect?regiao=" + regiao,
    value: "redirect 301",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "Coldfusion"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "coldfusion >",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/coldfusion/?regiao=" + regiao,
    value: "coldfusion intro.",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/coldfusion/?regiao=" + regiao,
    value: "redirect coldfusion",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "JavaScript"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "JavaScript >",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/javascript?regiao=" + regiao,
    value: "JS JavaScript",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/javascript/nodejs?regiao=" + regiao,
    value: "Node.JS",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/javascript/reactjs?regiao=" + regiao,
    value: "React.JS",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/javascript/nextjs?regiao=" + regiao,
    value: "Next.JS",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "Java"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Java >",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/java/?regiao=" + regiao,
    value: "Java",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/java/?regiao=" + regiao,
    value: "redirect 301 em JSP",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "knockout"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "knockout JS >",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/knockout/?regiao=" + regiao,
    value: ">knockout",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/knockout/?regiao=" + regiao,
    value: "knockout JS exemplo 01",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/knockout/?regiao=" + regiao,
    value: "knockout JS exemplo 02",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/knockout/?regiao=" + regiao,
    value: "knockout JS exemplo 03",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/knockout/?regiao=" + regiao,
    value: "knockout JS exemplo 04",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/knockout/?regiao=" + regiao,
    value: "knockout JS exemplo 05",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/knockout/?regiao=" + regiao,
    value: "knockout JS exemplo 06",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == ".Net"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: ".NET >",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/dotnet/?regiao=" + regiao,
    value: ".NET",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/dotnet/?regiao=" + regiao,
    value: "redirect 301 em ASP.NET",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "PHP"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "PHP >",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/php/?regiao=" + regiao,
    value: "PHP intro",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/php/redirect/?regiao=" + regiao,
    value: "redirect 301 no PHP",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/php/procuraarquivo/?regiao=" + regiao,
    value: "encontrar arquivio no PHP",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/php/procuradiretorio/?regiao=" + regiao,
    value: "encontrar diretorio no PHP",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "Ruby on Rails"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Ruby on Rails >",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/rubyonrails/?regiao=" + regiao,
    value: "RubyonRails intro",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/tutorial/rubyonrails/redirect/?regiao=" + regiao,
    value: "redirect RubyonRails",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "Componentes"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Componentes >",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/componentes/?regiao=" + regiao,
    value: "Deste projeto",
    estilo: "neonItem"
  }))))), external_react_default.a.createElement(atDetails, {
    open: titulo == "Design"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Design >",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "https://sites.google.com/view/vvc-estudio/home",
    value: "Design",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "https://sites.google.com/view/vvc-estudio/maquete-3d",
    value: "Maquete 3d",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "https://sites.google.com/view/vvc-estudio/modelagem-3d",
    value: "Modelagem 3d",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "https://sites.google.com/view/vvc-estudio/logos",
    value: "logos",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "https://sites.google.com/view/vvc-estudio/ilustra%C3%A7%C3%B5es",
    value: "Ilustra\xE7\xF5es",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "https://sites.google.com/view/vvc-estudio/layout-web",
    value: "layout Web",
    estilo: "neonItem"
  }))), external_react_default.a.createElement(atDetails, {
    open: titulo == "Eu"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-3253426313"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Autor",
    estilo: "neon"
  })), external_react_default.a.createElement("div", {
    className: "jsx-3253426313" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/eu/?regiao=" + regiao,
    value: "Apresenta\xE7\xE3o",
    estilo: "neonItem"
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: StringModo + "/eu/curriculo/?regiao=" + regiao,
    value: "Curriculo",
    estilo: "neonItem"
  })))), external_react_default.a.createElement(style_default.a, {
    id: "3253426313"
  }, [".subitens.jsx-3253426313{margin-left :10px;border-left:solid 2px #10ecf5;}", ".subitens.jsx-3253426313:hover{-webkit-transition-duration:1s;transition-duration:1s;border-left:solid 2px #FFFFFF;}", ".CssRotasProjeto.jsx-3253426313{font-size:17px;}", "summary.jsx-3253426313::-webkit-details-marker{display:none;}", "summary.jsx-3253426313{margin:0;padding:0;}"]));
};

/* harmony default export */ var moListadeRotas = __webpack_exports__["a"] = (moListadeRotas_ListadeRotas);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zRgs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/moleculas/layout/cristalbot.js
var cristalbot = __webpack_require__("NK3G");

// EXTERNAL MODULE: ./components/moleculas/moHead/index.js
var moHead = __webpack_require__("h6+w");

// CONCATENATED MODULE: ./components/organisms/orgControleogodzilla/index.js



var orgControleogodzilla_orgEcossistema = function orgEcossistema(props) {
  console.log(' component - orgControleogodzilla ');

  function mouse(e) {
    var xcurs = 0;
    var ycurs = 0;

    if (navigator.appName == 'Netscape') {
      xcurs = e.pageX;
      ycurs = e.pageY;
    } else {
      xcurs = event.clientX;
      ycurs = event.clientY;
    }

    xcurs = xcurs - 190;
    ycurs = ycurs - 200;

    if (xcurs > 100) {
      document.getElementById('Godzilla').style.left = xcurs + 'px';
    }

    if (ycurs > 200) {
      document.getElementById('Godzilla').style.top = ycurs + 'px';
      document.getElementById('mostro').width = 200 + ycurs;
      document.getElementById('mostro').height = 100 + ycurs;
    }
  }

  function AlteraPersonagem() {
    document.onmousemove = mouse;

    if (document.getElementById('mostro').alert == "godzilla2") {
      document.getElementById('mostro').src = '/static/assetsv5/img/game/godzilla1.gif';
      document.getElementById('mostro').alert = "godzilla1"; //document.getElementById('mostro').class="Godzilla"
    } else {
      document.getElementById('mostro').src = '/static/assetsv5/img/game/trex.png';
      document.getElementById('mostro').alert = "godzilla2"; //document.getElementById('mostro').class = "esquerda";
    }
  }

  return external_react_default.a.createElement("div", {
    className: "jsx-4111315567"
  }, external_react_default.a.createElement("div", {
    id: "Godzilla",
    className: "jsx-4111315567" + " " + "Godzilla"
  }, external_react_default.a.createElement("a", {
    onClick: function onClick() {
      AlteraPersonagem();
    },
    className: "jsx-4111315567"
  }, external_react_default.a.createElement("img", {
    id: "mostro",
    alert: "godzilla1",
    src: "/static/assetsv5/img/game/godzilla1.gif",
    width: "500",
    height: "379",
    className: "jsx-4111315567"
  }))), external_react_default.a.createElement("img", {
    onload: "mouse();",
    alt: "Fundo",
    src: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&w=799&m=6&q=60&u=t&o=f&l=f&x=871&y=654",
    width: "100%",
    title: "Cen\xE1rio de cidades",
    className: "jsx-4111315567"
  }), external_react_default.a.createElement(style_default.a, {
    id: "4111315567"
  }, [".Godzilla.jsx-4111315567{position:absolute;}", ".esquerda.jsx-4111315567{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}"]));
}; // <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">
//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>


/* harmony default export */ var orgControleogodzilla = (orgControleogodzilla_orgEcossistema); // <img 
// onload="mouse();"
// alt="Fundo" 
// src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" 
// width="100%" 
// title="Cenário de cidades"/>
// EXTERNAL MODULE: ./controller/util.js
var util = __webpack_require__("JkDD");

// EXTERNAL MODULE: ./components/atoms/atBtLink/index.js + 17 modules
var atBtLink = __webpack_require__("QEe7");

// CONCATENATED MODULE: ./components/templates/game/controleogodzilla.js


 // Esta pagina tem um layout diferente.






var controleogodzilla_controleogodzilla = function controleogodzilla(props) {
  console.log('╔══════════════════════════════════════╗');
  console.log('║  Taplate - GAME - controleogodzilla  ║');
  console.log('╚══════════════════════════════════════╝');
  var regiao = util["h" /* validaProps */](props.regiao, "RJ");
  var modo = util["h" /* validaProps */](props.modo, "html");

  function retornaogame(modo, regiao) {
    if (modo == "html") {
      return external_react_default.a.createElement(orgControleogodzilla, null);
    } else {
      return external_react_default.a.createElement("p", null, "O jogo n\xE3o pode ser visto no modo AMP.", external_react_default.a.createElement("br", null), external_react_default.a.createElement(atBtLink["a" /* default */], {
        href: "/game/controleogodzilla/?regiao=" + regiao,
        value: "Clique aqui para sair do modo AMP.",
        estilo: "neon"
      }), external_react_default.a.createElement("br", null));
    }
  }

  return external_react_default.a.createElement("div", {
    className: "jsx-691788713"
  }, external_react_default.a.createElement(moHead["a" /* default */], {
    modo: modo,
    title: "Controle o Godzilla",
    canonical: "/game/controleogodzilla/"
  }), external_react_default.a.createElement(cristalbot["a" /* default */], {
    regiao: regiao,
    modo: modo,
    titulo: "Games",
    categoria: "gGameame"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-691788713"
  }, "GAME Controle o Godzilla"), external_react_default.a.createElement("p", {
    className: "jsx-691788713"
  }, "Brincadeira que fiz pro meu filho em um fim de dia."), retornaogame(modo, regiao)), external_react_default.a.createElement(style_default.a, {
    id: "691788713"
  }, [".Godzilla.jsx-691788713{position:absolute;}"]));
}; // <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">
//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>


/* harmony default export */ var game_controleogodzilla = __webpack_exports__["a"] = (controleogodzilla_controleogodzilla);

/***/ })

/******/ });