module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 111);
/******/ })
/************************************************************************/
/******/ ({

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTuo");


/***/ }),

/***/ "1vwV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var atDivNaveg = function atDivNaveg(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2899450786" + " " + "atDivNavegContorno"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2899450786" + " " + "atDivNavegTop"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2899450786" + " " + "atDivNavegBola corvermelho"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2899450786" + " " + "atDivNavegBola coramarelo"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2899450786" + " " + "atDivNavegBola corverde"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2899450786" + " " + "atDivCodigo"
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2899450786"
  }, [".atDivNavegBola.jsx-2899450786{width :10px;height :10px;background-color:#ff5247;margin:0px;margin-top:4px;margin-left:8px;border-radius :10px;}", ".corvermelho.jsx-2899450786{background-color:#ff5247;}", ".coramarelo.jsx-2899450786{background-color:#f7cf00;}", ".corverde.jsx-2899450786{background-color:#00e047;}", ".atDivNavegTop.jsx-2899450786{width:100%;height :20px;font-size:17px;font-family:sans-serif;background-color:#282c45;background-image:linear-gradient(45deg,#9d9d9d,#e2e2e2 );border-top-left-radius :10px;border-top-right-radius :10px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0px;box-sizing:border-box;}", ".atDivCodigo.jsx-2899450786{color:#000000;padding :10px;}", ".atDivNavegContorno.jsx-2899450786{margin-bottom:10px;width:100%;font-size:17px;font-family:sans-serif;background-color:#282c45;background-image:linear-gradient(45deg,#cfc0db,#ffffff,#cfc0db );border-radius :10px;display:block;box-sizing:border-box;-webkit-box-shadow:-9px 9px 20px rgba(1,1,1,0.57);-moz-box-shadow:-9px 9px 20px rgba(1,1,1,0.57);box-shadow:-9px 9px 20px rgba(1,1,1,0.57);}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (atDivNaveg);

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
// CONCATENATED MODULE: ./components/moleculas/moJanela/JanelaClaro.js

 //import * as Util from '../../../controller/util.js';

var JanelaClaro_JanelaClaro = function JanelaClaro(props) {
  // console.log('Rodando /moJanela/JanelaEscuro');
  //Layout escuro
  return external_react_default.a.createElement("div", {
    className: "jsx-2567542503" + " " + "DivJanClaro"
  }, props.children, external_react_default.a.createElement(style_default.a, {
    id: "2567542503"
  }, [".DivJanClaro.jsx-2567542503{width:100%;font-size:17px;font-family:sans-serif;background-color:#ffffff;color:#000000;border-radius:2px;display:block;border:solid 1px #f0f0f0;padding:10px;box-sizing:border-box;-webkit-box-shadow:-1px 2px 10px rgba(1,1,1,0.37);-moz-box-shadow:-1px 2px 10px rgba(1,1,1,0.37);box-shadow:-1px 2px 10px rgba(1,1,1,0.37);}"]));
};

/* harmony default export */ var moJanela_JanelaClaro = (JanelaClaro_JanelaClaro);
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
  } else if (varEstilo == "claro") {
    //Layout escuro
    return external_react_default.a.createElement(moJanela_JanelaClaro, null, props.children);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _itemMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fQ8c");

 //console.log('Instanciando templates/index.js');

var ListadeRotasHTML = function ListadeRotasHTML(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  var btestiloitem = props.btestiloitem;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/",
    regiao: regiao,
    estilo: btestiloitem
  }, "HTML5 Introdu\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/estrutura/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Estrutura da P\xE1gina"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/h1_p_br/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Titulo, Par\xE1grafo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/lista01/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Listas N\xE3o ordenada"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/lista02/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Listas Ordenada 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/lista03/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Listas Ordenada A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/lista04/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Listas Ordenada i"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/lista05/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Listas Ordenada I"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/lista06/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Listas Com descri\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/img/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Imagem"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/img_figcaption/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Figure e Figcaption"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/iframe/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Iframe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/links/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Links - tag A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/tabela/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Tabelas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/css/css13/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Tabelas Style"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/div_span/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Div e Span"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/comentario/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Coment\xE1rios"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/meta/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Meta Tag"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/form01/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Formul\xE1rios"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/form02/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Form: Legenda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/form03/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Form: Atributos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/form04/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Form: Radio Checkbox"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/form05/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Form: Range Color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/form06/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Form: Date Time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/form07/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Form: Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/form08/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Form: Select Optgroup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/form09/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Form: Datalist"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/form10/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Form: Keygen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/form11/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Form: Submit externo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/mark/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Mark e Contenteditable"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/tabindexaccesskey/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Tabindex e Accesskey"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/details/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/hgroup/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Hgroup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/meterprogress/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Meter e Progresse"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/links/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Tag a"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/map/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Imagem MAP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/timedatetime/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Time e Datetime"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/semantica/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Semantica"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_itemMenu_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: modo,
    href: "/tutorial/html/canvas/",
    regiao: regiao,
    estilo: btestiloitem
  }, "Canvas"));
};

/* harmony default export */ __webpack_exports__["a"] = (ListadeRotasHTML);

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
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkAzul.js



var btLinkAzul_btLinkbutAzul = function btLinkbutAzul(props) {
  var varValue = props.value;
  var varHref = props.href;

  if (varHref != "") {
    return (// Botão do Minha Oi na home do site SEO.
      external_react_default.a.createElement("div", {
        className: "jsx-2519067950"
      }, external_react_default.a.createElement("a", {
        href: varHref,
        className: "jsx-2519067950" + " " + "btLinkbutazul"
      }, varValue), external_react_default.a.createElement(style_default.a, {
        id: "2519067950"
      }, [".btLinkbutazul.jsx-2519067950{font-family:oiTextRegular,sans-serif;background-color:#0073b1;border-radius:3px;color:#ffffff;display:block;font-size:1rem;height:30px;text-align:center;width:100%;max-width:500px;-webkit-text-decoration:none;text-decoration:none;border-bottom:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;padding:5px;box-sizing:border-box;font-style:normal;-webkit-transition-duration:1s;transition-duration:1s;}", ".btLinkbutazul.jsx-2519067950:hover{-webkit-transition-duration:1s;transition-duration:1s;color:#0073b1;border:solid 1px #0073b1;background-color:#ffffff;background-image:none;}"]))
    );
  } else {
    return external_react_default.a.createElement("div", {
      className: "jsx-2519067950"
    }, external_react_default.a.createElement("div", {
      className: "jsx-2519067950" + " " + "btLinkbutazul"
    }, varValue), external_react_default.a.createElement(style_default.a, {
      id: "2519067950"
    }, [".btLinkbutazul.jsx-2519067950{font-family:oiTextRegular,sans-serif;background-color:#0073b1;border-radius:3px;color:#ffffff;display:block;font-size:1rem;height:30px;text-align:center;width:100%;max-width:500px;-webkit-text-decoration:none;text-decoration:none;border-bottom:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;padding:5px;box-sizing:border-box;font-style:normal;-webkit-transition-duration:1s;transition-duration:1s;}", ".btLinkbutazul.jsx-2519067950:hover{-webkit-transition-duration:1s;transition-duration:1s;color:#0073b1;border:solid 1px #0073b1;background-color:#ffffff;background-image:none;}"]));
  }
};

/* harmony default export */ var btLinkAzul = (btLinkAzul_btLinkbutAzul);
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkAzulLink.js



var btLinkAzulLink_btLinkbutAzul = function btLinkbutAzul(props) {
  var varValue = props.value;
  var varHref = props.href;
  return external_react_default.a.createElement("a", {
    href: varHref,
    className: "jsx-2444697765" + " " + "btLinkbutazulLink"
  }, external_react_default.a.createElement("strong", {
    className: "jsx-2444697765"
  }, varValue), external_react_default.a.createElement(style_default.a, {
    id: "2444697765"
  }, [".btLinkbutazulLink.jsx-2444697765{color:#000000;-webkit-text-decoration:none;text-decoration:none;outline:0;box-sizing:border-box;font-style:normal;}", ".btLinkbutazulLink.jsx-2444697765:hover{color:#0073b1;}"]));
};

/* harmony default export */ var btLinkAzulLink = (btLinkAzulLink_btLinkbutAzul);
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
// CONCATENATED MODULE: ./components/atoms/atBtLink/btLinkNeonLink.js



var btLinkNeonLink_btLinkNeonLink = function btLinkNeonLink(props) {
  var varValue = props.value;
  var varHref = props.href;
  return (// Botão Neon VVC Estudio.
    external_react_default.a.createElement("a", {
      href: varHref,
      className: "jsx-3390734655" + " " + "btLinkNeonLink"
    }, external_react_default.a.createElement("strong", {
      className: "jsx-3390734655"
    }, varValue), external_react_default.a.createElement(style_default.a, {
      id: "3390734655"
    }, [".btLinkNeonLink.jsx-3390734655{color:#00ffea;-webkit-text-decoration:none;text-decoration:none;outline:0;box-sizing:border-box;font-style:normal;}", ".btLinkNeonLink.jsx-3390734655:hover{color:#ffffff;}"]))
  );
};

/* harmony default export */ var atBtLink_btLinkNeonLink = (btLinkNeonLink_btLinkNeonLink);
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
  } else if (varEstilo == "azul") {
    return external_react_default.a.createElement(btLinkAzul, {
      value: varValue,
      href: varHref
    });
  } else if (varEstilo == "azulLink") {
    return external_react_default.a.createElement(btLinkAzulLink, {
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
  } else if (varEstilo == "neonLink") {
    return external_react_default.a.createElement(atBtLink_btLinkNeonLink, {
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

/***/ "QTuo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_codigo_css_css04_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QY9k");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JkDD");


 //import { withAmp } from 'next/amp';

var RotaCSS = function RotaCSS(props) {
  //var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_templates_codigo_css_css04_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    modo: "html",
    regiao: _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.url.query.regiao, "RJ")
  });
}; //export default withAmp(RotaHome, { hybrid: true });
//export default withAmp(RotaHome);


/* harmony default export */ __webpack_exports__["default"] = (RotaCSS);

/***/ }),

/***/ "QY9k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _moleculas_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("T9MM");
/* harmony import */ var _atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ob7O");
/* harmony import */ var _atoms_atDivNaveg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1vwV");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JkDD");
/* harmony import */ var _moleculas_moHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("h6+w");








var atendimentoOi = function atendimentoOi(props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║        Tutorial - css 4                ║');
  console.log('╚════════════════════════════════════════╝');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* validaProps */ "h"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__[/* validaProps */ "h"](props.modo, "html");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4160778380"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_moHead__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    modo: modo,
    title: "CSS - Links e Divs",
    description: "Tutorial 4 - CSS - Links e Divs",
    canonical: "/tutorial/css/css04/"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    regiao: regiao,
    modo: modo,
    titulo: "Tutoriais",
    categoria: "CSS"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4160778380"
  }, "CSS - Links e Divs"), "A seguir exemplos de div e link HTML com estiliza\xE7\xE3o:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivNaveg__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4160778380" + " " + "top_div"
  }, "Exemplo Div."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "css_04.html",
    className: "jsx-4160778380"
  }, "Exemplo de Link."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    titulo: "Codigo HTML"
  }, '<div className="top_div">', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), "Exemplo Div.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), '</div>', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), '<a href="css_04.html">', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), "Exemplo de Link.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), '</a><br />', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    titulo: "CSS"
  }, ' *{ ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), "\u2002 ", 'margin: 0; ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), "\u2002 ", 'padding: 0; ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), '   } ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), '.top_div { ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), "\u2002 ", 'position: relative; ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), "\u2002 ", 'width: 100%; ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), "\u2002 ", 'height: 80px; ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), "\u2002 ", 'background-color: #FF0000; ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), ' } ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), ' a { ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), "\u2002 ", 'font-family: Arial, Helvetica, sans-serif; ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), "\u2002 ", 'color: #FF0000; ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), "\u2002 ", '/*Para retirar o sublinhado*/ ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), "\u2002 ", 'text-decoration: none; ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }), ' } ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-4160778380"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4160778380"
  }, ["*.jsx-4160778380{margin:0;padding:0;}", ".top_div.jsx-4160778380{position:relative;width:100%;height:80px;background-color:#FF0000;border-right:black;}", "a.jsx-4160778380{font-family:Arial,Helvetica,sans-serif;color:#FF0000;-webkit-text-decoration:none;text-decoration:none;}", "a.jsx-4160778380:hover{color:#0000FF;font-weight:bold;}", "a.jsx-4160778380:active{color:#000000;font-weight:inherit;}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (atendimentoOi);

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

/***/ "T9MM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhj+");
/* harmony import */ var _moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wwkz");
/* harmony import */ var _moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("D7Tn");
/* harmony import */ var _moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cMST");
/* harmony import */ var _mofooterSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("X6eQ");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("JkDD");
/* harmony import */ var _atoms_atGTM__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ORJM");










var layout = function layout(props) {
  console.log('Rodando /layout/index.js (Tutorial)');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__[/* validaProps */ "h"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__[/* validaProps */ "h"](props.modo, "html");
  var titulo = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__[/* validaProps */ "h"](props.titulo, "Home");
  var categoria = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__[/* validaProps */ "h"](props.categoria, "Outros"); //Layout Luz verde

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2119224616 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["784957472", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__[/* fontesCSS1 */ "a"]()]]]) + " " + "CSSLayout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atGTM__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    position: "body",
    modo: modo,
    codGTM: "UA-143307429-1"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2119224616 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["784957472", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__[/* fontesCSS1 */ "a"]()]]]) + " " + "layoutManu"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    estilo: "neon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    regiao: regiao,
    modo: modo,
    titulo: titulo,
    categoria: categoria,
    btestilo: "neon",
    btestiloitem: "neonItem"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2119224616 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["784957472", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__[/* fontesCSS1 */ "a"]()]]]) + " " + "layoutBody"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    display: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    estilo: "neon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    regiao: regiao,
    modo: modo,
    titulo: titulo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    estilo: "neon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2119224616 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["784957472", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__[/* fontesCSS1 */ "a"]()]]]) + " " + "conteudo"
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    estilo: "neon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mofooterSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    regiao: regiao,
    modo: modo,
    btestilo: "neon"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2119224616"
  }, [".CSSLayout.jsx-2119224616{color:#ffffff;width:100%;margin :0px;padding :0px;padding-top :10px;}", ".layoutManu.jsx-2119224616{width:25%;}", ".layoutBody.jsx-2119224616{width:71%;padding-right:2%;}", "@media(max-width:1169px){.layoutManu.jsx-2119224616{display :None;}.layoutBody.jsx-2119224616{width:96%;}}", "@media(max-width:1169px){}"]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "784957472",
    dynamic: [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__[/* fontesCSS1 */ "a"]()]
  }, ["".concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__[/* fontesCSS1 */ "a"](), " body{margin:0px;padding:0px;background-color:#002128;background-image:url(\"/static/assetsv5/img/layout_luz/fundo04.jpg\");color:#10ecf5;font-family:SimplonBP-Regular,sans-serif;}")]));
};

/* harmony default export */ __webpack_exports__["a"] = (layout); // ${Util.fontesCSS2()}
// ${Util.fontesCSS3()}
// ${Util.fontesCSS4()}
// ${Util.fontesCSS5()}
//Não esqueça de do GTM do body.

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
  var modo = props.modo;
  var btestilo = props.btestilo;
  var ParamentroURL = "?regiao=" + regiao;

  if (modo == "AMP" || modo == "amp") {
    ParamentroURL = "?amp=1";
  }

  console.log('* Header do Valente | modo=' + modo + ' | regiao=' + regiao);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    display: "responsivo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092" + " " + "logo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/" + ParamentroURL,
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
    href: "/" + ParamentroURL,
    value: "Home",
    estilo: btestilo
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: "/tutorial/" + ParamentroURL,
    value: "Tutoriais",
    estilo: btestilo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092" + " " + "footerColuna"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: "/utilitarios/" + ParamentroURL,
    value: "Utilitarios",
    estilo: btestilo
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: "/game/" + ParamentroURL,
    value: "Jogos",
    estilo: btestilo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1605927092" + " " + "footerColuna"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: "https://sites.google.com/view/vvc-estudio/home",
    value: "Design",
    estilo: btestilo
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    href: "/eu/" + ParamentroURL,
    value: "Autor",
    estilo: btestilo
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
/* harmony import */ var _moMenuMobile01_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("gtPt");





 //import * as Util from '../../../controller/util.js';
//console.log('moHeaderSideDoValente ');

var moHeaderSideDoValente = function moHeaderSideDoValente(props) {
  var titulo = props.titulo;
  var regiao = props.regiao;
  var modo = props.modo;
  var btestilo = "neon";
  var btestiloitem = "neonItem"; //const JsonRegiao = Util.regiao(regiao);

  var StringModo = "";

  if (modo == "AMP" || modo == "amp") {
    StringModo = "/amp";
  }

  console.log('* Header do Valente | modo=' + modo + ' | regiao=' + regiao);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    display: "responsivo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1831010245" + " " + "logo headerpc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: StringModo + "/?regiao=" + regiao,
    className: "jsx-1831010245"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    src: "/static/assetsv5/img/logo_vvc.png",
    width: "100px",
    height: "100px",
    alt: "Logo Site Valente",
    title: "Logo Site Valente",
    class: "LogoSiteValente",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1831010245" + " " + "TitulodoSite headerpc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1831010245"
  }, titulo)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1831010245" + " " + "heaermob"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moMenuMobile01_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    modo: modo,
    regiao: regiao,
    titulo: titulo,
    btestilo: btestilo,
    btestiloitem: btestiloitem,
    janelaestilo: "neon"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1831010245"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1831010245"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    modo: modo,
    regiao: regiao
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1831010245"
  }, [".logo.jsx-1831010245{margin:0px;padding-top:10px;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:slideinSombra-jsx-1831010245;animation-name:slideinSombra-jsx-1831010245;}", "h2.jsx-1831010245{color:#10ecf5;padding-top:0px;font-size:30px;font-family:sans-serif;text-align:center;}", "@-webkit-keyframes slideinSombra-jsx-1831010245{0%{opacity:0.0;}50%{opacity:0.5;}100%{opacity:1.0;}}", "@keyframes slideinSombra-jsx-1831010245{0%{opacity:0.0;}50%{opacity:0.5;}100%{opacity:1.0;}}", "@media(min-width:1169px){.heaermob.jsx-1831010245{display :None;}}", "@media(max-width:1169px){.headerpc.jsx-1831010245{display :None;}}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (moHeaderSideDoValente);

/***/ }),

/***/ "ckrn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./controller/util.js
var util = __webpack_require__("JkDD");

// CONCATENATED MODULE: ./components/atoms/atIcon/gradiente.js



var gradiente_gradiente = function gradiente(props) {
  //const gradiente = (id, Color1, Color2) => {
  var varid = util["h" /* validaProps */](props.id, "");
  var varColor1 = util["h" /* validaProps */](props.Color1, "#f8562c");
  var varColor2 = util["h" /* validaProps */](props.Color2, "#e92555");

  if (varid != "") {
    return external_react_default.a.createElement("linearGradient", {
      xmlns: "http://www.w3.org/2000/svg",
      id: varid
    }, external_react_default.a.createElement("stop", {
      offset: "0",
      "stop-color": varColor1
    }), external_react_default.a.createElement("stop", {
      offset: "1",
      "stop-color": varColor2
    }));
  } else {
    external_react_default.a.createElement("g", null);
  }
};

/* harmony default export */ var atIcon_gradiente = (gradiente_gradiente);

// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/circulo.js


var circulo_circulo = function circulo(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 489.6 489.6",
    fill: fillColor
  }, external_react_default.a.createElement("g", null, external_react_default.a.createElement("ellipse", {
    fill: fillColor,
    cx: "245",
    cy: "245",
    rx: "245",
    ry: "245"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_circulo = (circulo_circulo);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/alert.js


var alert_alert = function alert(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M15,0 C6.72,0 0,6.72 0,15 C0,23.28 6.72,30 15,30 C23.28,30 30,23.28 30,15 C30,6.72 23.28,0 15,0 Z M16.5,22.5 L13.5,22.5 L13.5,19.5 L16.5,19.5 L16.5,22.5 Z M16.5,16.5 L13.5,16.5 L13.5,7.5 L16.5,7.5 L16.5,16.5 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_alert = (alert_alert);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/inputAlert.js
 //import PropTypes from 'prop-types';


var inputAlert_inputAlert = function inputAlert(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M12,0 C18.6167324,0 24,5.38336219 24,12 C24,18.6168081 18.6167324,24 12,24 C5.38326761,24 0,18.6168081 0,12 C0,5.38336219 5.38326761,0 12,0 Z M2.38888889,12 C2.38888889,17.2996048 6.70046384,21.6111111 12,21.6111111 C17.2995362,21.6111111 21.6111111,17.2996048 21.6111111,12 C21.6111111,6.7005491 17.2995362,2.38888889 12,2.38888889 C6.70046384,2.38888889 2.38888889,6.7005491 2.38888889,12 Z M11.2658808,13.9985896 L11.2658808,4.46682795 L13.1120347,4.46682795 L13.1120347,13.9985896 L11.2658808,13.9985896 Z M11.2658808,18.9985896 L11.2658808,16.466828 L13.1120347,16.466828 L13.1120347,18.9985896 L11.2658808,18.9985896 Z",
    id: "path-alert"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
}; // inputAlert.propTypes = {
//   fillColor: PropTypes.string.isRequired
// };

/* harmony default export */ var iconfiles_inputAlert = (inputAlert_inputAlert);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/inputSuccess.js
 //import PropTypes from 'prop-types';


var inputSuccess_inputSuccess = function inputSuccess(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M12,0 C18.6167324,0 24,5.38336219 24,12 C24,18.6168081 18.6167324,24 12,24 C5.38326761,24 0,18.6168081 0,12 C0,5.38336219 5.38326761,0 12,0 Z M12,21.6111111 C17.2995362,21.6111111 21.6111111,17.2996048 21.6111111,12 C21.6111111,6.7005491 17.2995362,2.38888889 12,2.38888889 C6.70046384,2.38888889 2.38888889,6.7005491 2.38888889,12 C2.38888889,17.2996048 6.70046384,21.6111111 12,21.6111111 Z M7.11425241,11.2258437 L10.1761759,14.2877672 L17.7320416,6.73190143 L19.0374696,8.03732934 L10.1761759,16.898623 L5.80882451,12.5312716 L7.11425241,11.2258437 Z",
    id: "path-success"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
}; // inputSuccess.propTypes = {
//   fillColor: PropTypes.string.isRequired
// };

/* harmony default export */ var iconfiles_inputSuccess = (inputSuccess_inputSuccess);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/aprender.js


var aprender_aprender = function aprender(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 64 34",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M32,0 C31.0935773,0 30.1871547,0.106026413 29.3863347,0.372288231 L1.440036,9.88516932 C1.06722668,10.0446075 0.74721868,10.2040457 0.480012,10.4168958 C0.21360534,10.6297458 0,10.9486222 0,11.373525 C0,11.7984279 0.21360534,12.1181015 0.480012,12.3301543 C0.74721868,12.5430044 1.06722668,12.7024426 1.440036,12.8618808 L14.40036,17.272739 L14.40036,30.0277962 C14.40036,30.665549 15.1475787,30.9836283 15.5739893,30.5595226 C17.3876347,28.9651405 19.680492,28.0611258 22.2933573,28.0611258 C26.240656,28.0611258 29.6543414,30.2932608 31.360784,33.6406661 C31.6263907,34.119778 32.3744094,34.119778 32.640816,33.6406661 C34.3472587,30.2932608 37.760144,28.0611258 41.7074427,28.0611258 C44.321108,28.0611258 46.6139653,29.0177551 48.4268107,30.5595226 C48.9076227,30.9836283 49.60124,30.665549 49.60124,30.0277962 L49.60124,17.272739 L57.4942374,14.5622893 L57.4942374,19.876365 C56.80062,20.1434241 56.2678067,20.8329943 56.2134053,21.578368 C56.2134053,21.6309826 56.2134053,21.6843944 56.2134053,21.737009 L56.2134053,21.737009 L56.2134053,24.9257733 C56.160604,25.8824026 57.6534413,25.8824026 57.60064,24.9257733 L57.60064,23.6502676 C57.8142454,23.7028822 57.9734493,23.7570912 58.1870547,23.7570912 C58.39986,23.7570912 58.6126653,23.7036794 58.7734693,23.6502676 L58.7734693,24.9257733 C58.7734693,25.8824026 60.2127053,25.8824026 60.2127053,24.9257733 L60.2127053,21.737009 L60.2127053,21.737009 C60.2127053,21.6843944 60.2127053,21.6309826 60.2127053,21.578368 C60.159904,20.8329943 59.6270907,20.1434241 58.9326733,19.876365 L58.9326733,14.0839747 L62.559164,12.8618808 C62.9327733,12.7024426 63.2527813,12.5430044 63.519188,12.3301543 C63.7855946,12.1181015 64,11.7984279 64,11.373525 C64,10.947825 63.7855946,10.6289486 63.519188,10.4168958 C63.2527813,10.2048429 62.9327733,10.0446075 62.559164,9.88516932 L34.6136653,0.372288231 C33.8144454,0.106823604 32.9072227,0 32,0 L32,0 Z M32,1.43574112 C32.80002,1.43574112 33.60084,1.54176754 34.1336533,1.70120575 L62.081552,11.2140868 C62.240756,11.2667014 62.2951574,11.3201132 62.3479587,11.373525 C62.2951574,11.4261397 62.240756,11.4795515 62.081552,11.5329633 L48.8548214,16.0506451 C48.7476187,16.0506451 48.5884147,16.0506451 48.5348134,16.1574687 L34.1344534,21.0466415 C33.0672267,21.4181326 30.9343734,21.4181326 29.8679467,21.0466415 L15.4683867,16.1040569 C15.361184,16.1040569 15.3083827,16.0514423 15.2539813,16.0514423 L1.920048,11.5329633 C1.760044,11.4795515 1.70644266,11.4261397 1.65364134,11.373525 C1.70644266,11.3201132 1.760044,11.2667014 1.920048,11.2140868 L29.8671467,1.70040856 C30.40076,1.54097035 31.20078,1.43574112 32,1.43574112 L32,1.43574112 Z M48.2140054,17.7502564 L48.2140054,28.6454669 C46.3475587,27.3699611 44.1083027,26.6253847 41.7074427,26.6253847 C37.60094,26.6253847 34.080852,28.8041079 32,32.0470812 C29.919948,28.8049051 26.40066,26.6253847 22.2933573,26.6253847 C19.8932973,26.6253847 17.6540414,27.3707583 15.840396,28.6454669 L15.840396,17.7502564 L29.3871347,22.3739647 C30.9343734,22.9064883 33.0672267,22.9064883 34.6136653,22.3739647 L48.2140054,17.7502564 L48.2140054,17.7502564 Z M58.1878547,21.1518708 C58.560664,21.1518708 58.7742694,21.4173354 58.7742694,21.7362118 L58.7742694,21.7362118 C58.7742694,22.1085 58.559864,22.3739647 58.1878547,22.3739647 C57.8678467,22.3739647 57.60144,22.1085 57.60144,21.7362118 L57.60144,21.7362118 C57.60144,21.4173354 57.8678467,21.1518708 58.1878547,21.1518708 L58.1878547,21.1518708 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_aprender = (aprender_aprender);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/arrowdown.js


var arrowdown_arrowdown = function arrowdown(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 16 11",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("polygon", {
    id: "path-arrowdown",
    points: "1.88 0 8 6.59289249 14.12 0 16 2.02968961 8 10.6666667 0 2.02968961"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_arrowdown = (arrowdown_arrowdown);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/arrowup.js


var arrowup_arrowup = function arrowup(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 16 11",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    transform: "translate(8.000000, 5.333333) scale(1, -1) translate(-8.000000, -5.333333) ",
    fillRule: "evenodd"
  }, external_react_default.a.createElement("polygon", {
    id: "path-arrowup",
    points: "1.88 0 8 6.59289249 14.12 0 16 2.02968961 8 10.6666667 0 2.02968961"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_arrowup = (arrowup_arrowup);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/backarrow.js


var backarrow_backarrow = function backarrow(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("polygon", {
    id: "path-backarrow",
    points: "16 7 3.83 7 9.42 1.41 8 0 0 8 8 16 9.41 14.59 3.83 9 16 9"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_backarrow = (backarrow_backarrow);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/bloqueio.js


var bloqueio_bloqueio = function bloqueio(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 25"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M12 0C5.376 0 0 5.6 0 12.5S5.376 25 12 25s12-5.6 12-12.5S18.624 0 12 0zM2.4 12.578C2.4 7.01 6.73 2.5 12.074 2.5c2.238 0 4.293.794 5.926 2.129L4.444 18.75A10.22 10.22 0 0 1 2.4 12.578zm9.526 9.922A9.317 9.317 0 0 1 6 20.371L19.556 6.25a10.22 10.22 0 0 1 2.044 6.172c0 5.568-4.33 10.078-9.674 10.078z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_bloqueio = (bloqueio_bloqueio);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/broadband.js


var broadband_broadband = function broadband(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 25 25",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M12.5,0.5 C5.9,0.5 0.5,5.9 0.5,12.5 C0.5,19.1 5.9,24.5 12.5,24.5 C19.1,24.5 24.5,19.1 24.5,12.5 C24.5,5.9 19.1,0.5 12.5,0.5 Z M21.98,11.3 L17.54,11.3 C17.42,8.42 16.94,5.66 15.98,3.62 C19.22,4.82 21.62,7.82 21.98,11.3 Z M12.5,22.1 C11.78,22.1 10.1,19.22 9.86,13.7 L15.14,13.7 C14.9,19.22 13.22,22.1 12.5,22.1 Z M9.86,11.3 C10.1,5.78 11.78,2.9 12.5,2.9 C13.22,2.9 14.9,5.78 15.14,11.3 L9.86,11.3 Z M9.02,3.62 C8.06,5.66 7.58,8.42 7.46,11.3 L3.02,11.3 C3.38,7.82 5.78,4.82 9.02,3.62 Z M3.02,13.7 L7.46,13.7 C7.58,16.58 8.06,19.46 9.02,21.38 C5.78,20.18 3.38,17.18 3.02,13.7 Z M15.98,21.38 C16.94,19.34 17.42,16.58 17.54,13.7 L21.98,13.7 C21.62,17.18 19.22,20.18 15.98,21.38 Z",
    id: "path-broadband"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_broadband = (broadband_broadband);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/broadbandB.js


var broadbandB_broadbandB = function broadbandB(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 40 40",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fillColor
  }, external_react_default.a.createElement("g", {
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "a",
    fill: fillColor,
    d: "m20 0c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20c-.015-11.04-8.96-19.985-20-20zm-4.944 2.022a16.944 16.944 0 0 0 -4.377 6.751 29.23 29.23 0 0 1 -4.36-1.43 18.643 18.643 0 0 1 8.737-5.32zm-9.654 6.382a30.052 30.052 0 0 0 4.836 1.708 32.25 32.25 0 0 0 -1.483 9.214v-.027h-7.37a18.544 18.544 0 0 1 4.016-10.895zm0 23.12a18.544 18.544 0 0 1 -4.018-10.895l7.371.018a32.252 32.252 0 0 0 1.483 9.24 30.058 30.058 0 0 0 -4.836 1.637zm.917 1.114v-.054a29.204 29.204 0 0 1 4.36-1.429 16.945 16.945 0 0 0 4.377 6.823 18.643 18.643 0 0 1 -8.737-5.34zm13.007 5.95c-3.02-.386-5.663-3.316-7.344-7.667a39.952 39.952 0 0 1 7.344-.782v8.45zm0-9.85a41.21 41.21 0 0 0 -7.793.844 31.397 31.397 0 0 1 -1.42-8.908v-.027h9.213v8.09zm0-9.44h-9.214c.035-3.048.513-6.077 1.42-8.988 2.564.547 5.173.848 7.794.899v8.09zm0-9.437a39.977 39.977 0 0 1 -7.344-.773c1.68-4.369 4.324-7.29 7.344-7.677zm15.272-1.403a18.544 18.544 0 0 1 4.018 10.895h-7.371a32.252 32.252 0 0 0 -1.483-9.259 30.058 30.058 0 0 0 4.836-1.636zm-.926-1.096a29.23 29.23 0 0 1 -4.36 1.429 16.944 16.944 0 0 0 -4.368-6.769c3.35.931 6.373 2.78 8.728 5.34zm-12.998-5.95c3.02.386 5.663 3.316 7.344 7.667a39.971 39.971 0 0 1 -7.344.782v-8.451zm0 9.797a41.19 41.19 0 0 0 7.793-.845 31.398 31.398 0 0 1 1.42 8.989h-9.213zm0 9.492h9.214a31.398 31.398 0 0 1 -1.42 8.989 41.203 41.203 0 0 0 -7.794-.899zm0 17.888v-8.45c2.467.03 4.925.29 7.344.773-1.68 4.369-4.324 7.29-7.344 7.677zm4.27-.611a16.943 16.943 0 0 0 4.377-6.76c1.489.361 2.946.84 4.36 1.43a18.642 18.642 0 0 1 -8.737 5.33zm9.654-6.382a30.037 30.037 0 0 0 -4.836-1.708 32.25 32.25 0 0 0 1.483-9.214v.027h7.37a18.544 18.544 0 0 1 -4.017 10.895z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_broadbandB = (broadbandB_broadbandB);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/bell.js


var bell_bell = function bell(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    id: "a",
    d: "M12 22c1.1 0 2-.923 2-2.051h-4c0 1.128.89 2.051 2 2.051zm6-6.154v-5.128c0-3.149-1.64-5.785-4.5-6.482v-.698C13.5 2.688 12.83 2 12 2s-1.5.687-1.5 1.538v.698C7.63 4.933 6 7.559 6 10.718v5.128l-2 2.051v1.026h16v-1.026l-2-2.05z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_bell = (bell_bell);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/c2c.js


var c2c_c2c = function c2c(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 17 17",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M10.993 10.92c.39-.348.72-.627.962-.807.563-.42 1.16-.34 1.662.02.145.103.252.208.29.256l.4.4.882.892c.64.65 1.06 1.088 1.23 1.283.067.078.125.16.174.245.214.374.236.764.148 1.12-.018.075-.038.134-.097.253l-.068.107c-1.01 1.572-1.893 2.156-4.24 2.21-2.618.002-5.443-1.704-8.2-4.53C1.67 9.69.204 7.11.206 4.724.26 2.388.843 1.504 2.41.498 2.47.46 2.47.46 2.6.385c.04-.017.1-.037.175-.056.355-.09.745-.067 1.118.146.086.05.17.11.247.177.195.17.63.59 1.25 1.198.318.313.62.614.923.915.182.18.322.32.37.37.08.068.185.175.29.32.36.5.44 1.098.02 1.66-.14.186-.335.422-.578.702l-.094.106c-.204.234-.392.44-.584.65l.17.322C6.646 8.11 7.452 9.14 8.5 10c.397.327.965.727 1.504 1.064.19.12.364.224.5.3.154-.142.32-.292.49-.443zm-.423 1.533c-.072-.004-.13-.02-.194-.042-.07-.024-.15-.062-.246-.113-.172-.09-.402-.225-.658-.386-.572-.357-1.174-.78-1.607-1.137-1.15-.946-2.02-2.056-2.828-3.384l-.517-.977.242-.26c.277-.298.526-.57.81-.89.044-.052.044-.052.09-.103.227-.262.41-.482.528-.642.12-.16.1-.298-.03-.48-.05-.068-.097-.117-.152-.165l-.4-.4c-.3-.3-.603-.598-.887-.877l-.032-.032c-.6-.59-1.032-1.007-1.205-1.157-.03-.025-.057-.046-.087-.062-.12-.07-.254-.076-.38-.045-.023.005-.033.01.048-.034l-.11.07c-1.31.843-1.704 1.438-1.75 3.4 0 2.056 1.356 4.446 3.66 6.946 2.575 2.64 5.19 4.22 7.46 4.218 1.974-.045 2.57-.44 3.408-1.745.038-.06.038-.06.032-.037.04-.155.032-.29-.037-.41-.017-.03-.037-.058-.062-.086-.15-.173-.567-.606-1.157-1.206l-.032-.032-.878-.888c-.18-.18-.32-.32-.43-.434-.018-.02-.067-.07-.135-.118-.182-.13-.32-.15-.48-.03-.21.158-.524.423-.895.754-.222.197-.436.393-.624.567-.103.157-.29.227-.464.218z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_c2c = (c2c_c2c);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/calendar.js


var calendar_calendar = function calendar(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 21",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("defs", null, external_react_default.a.createElement("path", {
    d: "M22.9090909,2 C23.5636364,2 24,2.59375 24,3.1875 L24,19.8125 C24,20.525 23.5636364,21 22.9090909,21 L1.09090909,21 C0.436363636,21 0,20.525 0,19.8125 L0,3.1875 C0,2.59375 0.436363636,2 1.09090909,2 L22.9090909,2 Z M22,19 L22,7 L2,7 L2,19 L22,19 Z M4,0 L6,0 L6,5 L4,5 L4,0 Z M7,0 L9,0 L9,5 L7,5 L7,0 Z M18,0 L20,0 L20,5 L18,5 L18,0 Z M15,0 L17,0 L17,5 L15,5 L15,0 Z M4.5,9 L8.5,9 L8.5,13 L4.5,13 L4.5,9 Z",
    id: "path-calendar"
  })), external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, external_react_default.a.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, external_react_default.a.createElement("use", {
    xlinkHref: "#path-calendar"
  })), external_react_default.a.createElement("use", {
    id: "Mask",
    fill: fillColor,
    fillRule: "nonzero",
    xlinkHref: "#path-calendar"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_calendar = (calendar_calendar);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/caret.js


var caret_caret = function caret(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 7 15",
    height: "15px",
    width: "7px",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M.198 12.566c-.33.443-.238 1.07.204 1.4.443.33 1.07.238 1.4-.204L6.73 7.15 1.808.41C1.482-.036.856-.133.41.192c-.446.326-.543.952-.218 1.398l4.053 5.548-4.047 5.428z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_caret = (caret_caret);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/caret2.js


var caret2_caret2 = function caret2(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 320 512",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_caret2 = (caret2_caret2);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/cart.js


var cart_cart = function cart(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.6 7C21.9 7 22.2 7.1 22.3 7.4C22.5 7.6 22.6 8 22.6 8.3L20.6 15.3C20.4 15.7 20 16 19.6 16H8.6C8.1 16 7.7 15.7 7.6 15.3L4.3 5H2V3H5C5.5 3 5.9 3.3 6 3.7L9.3 14H18.8L20.2 9H10V7H21.6ZM11 21.5C12.1046 21.5 13 20.6046 13 19.5C13 18.3954 12.1046 17.5 11 17.5C9.89543 17.5 9 18.3954 9 19.5C9 20.6046 9.89543 21.5 11 21.5ZM17 21.5C18.1046 21.5 19 20.6046 19 19.5C19 18.3954 18.1046 17.5 17 17.5C15.8954 17.5 15 18.3954 15 19.5C15 20.6046 15.8954 21.5 17 21.5Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_cart = (cart_cart);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/celular.js


var celular_celular = function celular(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 21 21",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M20,15.5 C18.75,15.5 17.55,15.3 16.43,14.93 C16.08,14.82 15.69,14.9 15.41,15.17 L13.21,17.37 C10.38,15.93 8.06,13.62 6.62,10.78 L8.82,8.57 C9.1,8.31 9.18,7.92 9.07,7.57 C8.7,6.45 8.5,5.25 8.5,4 C8.5,3.45 8.05,3 7.5,3 L4,3 C3.45,3 3,3.45 3,4 C3,13.39 10.61,21 20,21 C20.55,21 21,20.55 21,20 L21,16.5 C21,15.95 20.55,15.5 20,15.5 Z M19,12 L21,12 C21,7.03 16.97,3 12,3 L12,5 C15.87,5 19,8.13 19,12 Z M15,12 L17,12 C17,9.24 14.76,7 12,7 L12,9 C13.66,9 15,10.34 15,12 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_celular = (celular_celular);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/callDetails.js


var callDetails_callDetails = function callDetails(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("defs", null, external_react_default.a.createElement("path", {
    d: "M21.5797092,0 L9.76511979,0 C8.31843538,0 7.23342207,1.07462687 7.23342207,2.3880597 L7.23342207,3.10447761 C6.992308,3.10447761 6.75119393,2.98507463 6.51007986,2.98507463 C6.26896579,2.98507463 6.14840876,2.98507463 5.90729469,3.10447761 L5.66618062,3.10447761 C2.29058366,3.94029851 0,6.92537313 0,10.3880597 C0,10.8656716 0,11.3432836 0.120557034,11.8208955 C0.241114069,12.2985075 0.361671103,12.7761194 0.602785172,13.2537313 L0.723342207,13.6119403 C0.723342207,13.6119403 0.723342207,13.7313433 0.723342207,13.7313433 C1.68779848,15.761194 3.01392586,17.6716418 4.58116731,19.3432836 C6.14840876,21.0149254 8.07732131,22.2089552 10.1267909,23.1641791 C10.2473479,23.1641791 10.2473479,23.2835821 10.367905,23.2835821 L10.609019,23.4029851 C11.0912472,23.641791 11.5734753,23.761194 12.0557034,23.880597 C12.5379316,24 13.0201597,24 13.5023879,24 C16.9985419,24 19.8919107,21.6119403 20.7358099,18.2686567 L20.7358099,18.0298507 C20.7358099,17.7910448 20.856367,17.5522388 20.7358099,17.4328358 L21.4591521,17.4328358 C22.9058366,17.4328358 23.9908499,16.358209 23.9908499,15.0447761 L23.9908499,2.3880597 C24.1114069,1.07462687 23.0263936,0 21.5797092,0 Z M18.4452263,17.6716418 C17.9629981,19.9402985 15.9135286,21.4925373 13.6229449,21.4925373 C13.2612738,21.4925373 12.8996027,21.4925373 12.6584886,21.3731343 C12.2968175,21.2537313 11.9351464,21.2537313 11.6940323,21.0149254 L11.4529183,20.8955224 L11.4529183,20.8955224 C9.64456276,20.0597015 7.95676428,18.8656716 6.51007986,17.4328358 C5.06339545,16 3.8578251,14.3283582 3.1344829,12.4179104 L3.1344829,12.4179104 L3.01392586,12.1791045 C2.89336883,11.8208955 2.77281179,11.5820896 2.65225476,11.2238806 C2.41114069,10.9850746 2.41114069,10.6268657 2.41114069,10.2686567 C2.41114069,7.88059701 4.09893917,5.97014925 6.26896579,5.37313433 L6.51007986,5.37313433 L6.6306369,5.6119403 C6.992308,6.56716418 7.23342207,7.40298507 7.47453614,8.35820896 L7.47453614,8.47761194 C7.59509317,9.19402985 7.71565021,9.79104478 7.83620724,10.5074627 L7.83620724,10.7462687 L5.78673766,11.8208955 C7.11286504,14.6865672 9.40344869,16.9552239 12.2968175,18.2686567 L13.2612738,16.119403 L13.5023879,16.119403 C14.2257301,16.119403 14.9490723,16.238806 15.5518575,16.4776119 L15.6724145,16.4776119 C16.6368708,16.7164179 17.601327,16.9552239 18.4452263,17.4328358 L18.6863403,17.5522388 L18.4452263,17.6716418 Z M21.7002662,14.9253731 C21.7002662,14.9253731 21.7002662,14.9253731 21.7002662,14.9253731 L18.6863403,14.9253731 C17.8424411,14.5671642 16.8779848,14.3283582 16.0340856,14.0895522 L15.9135286,14.0895522 C15.1901863,13.9701493 14.3462871,13.8507463 13.5023879,13.7313433 L13.2612738,13.7313433 C13.1407168,13.7313433 13.1407168,13.7313433 13.0201597,13.7313433 C12.1762605,13.7313433 11.4529183,14.0895522 10.9706901,14.8059701 C10.2473479,14.2089552 9.52400573,13.4925373 8.92122055,12.7761194 C9.64456276,12.2985075 10.0062339,11.4626866 10.0062339,10.6268657 L10.0062339,10.3880597 C9.88567683,9.55223881 9.76511979,8.8358209 9.64456276,8 L9.64456276,8 C9.52400573,7.76119403 9.52400573,7.40298507 9.40344869,7.1641791 L9.40344869,2.3880597 C9.40344869,2.3880597 9.40344869,2.3880597 9.52400573,2.3880597 L21.3385951,2.3880597 C21.7002662,2.3880597 21.7002662,2.3880597 21.7002662,2.3880597 L21.7002662,14.9253731 Z M15.6724145,8.35820896 L19.2891255,8.35820896 L19.2891255,10.7462687 L15.6724145,10.7462687 L15.6724145,8.35820896 Z M15.6724145,4.7761194 L19.2891255,4.7761194 L19.2891255,7.1641791 L15.6724145,7.1641791 L15.6724145,4.7761194 Z M12.0557034,8.35820896 L14.4668441,8.35820896 L14.4668441,10.7462687 L12.0557034,10.7462687 L12.0557034,8.35820896 Z M12.0557034,4.7761194 L14.4668441,4.7761194 L14.4668441,7.1641791 L12.0557034,7.1641791 L12.0557034,4.7761194 Z",
    id: "path-callDetails"
  })), external_react_default.a.createElement("g", {
    id: "CallDetails",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, external_react_default.a.createElement("mask", {
    id: "mask-callDetails",
    fill: "white"
  }, external_react_default.a.createElement("use", {
    xlinkHref: "#path-callDetails"
  })), external_react_default.a.createElement("use", {
    id: "MaskCallDetails",
    fill: fillColor,
    fillRule: "nonzero",
    xlinkHref: "#path-callDetails"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_callDetails = (callDetails_callDetails);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/charts.js


var charts_charts = function charts(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3.55556 0H28.4444C30.4 0 32 1.6 32 3.55556V28.4444C32 30.4 30.4 32 28.4444 32H3.55556C1.6 32 0 30.4 0 28.4444V3.55556C0 1.6 1.6 0 3.55556 0ZM7.11111 24.8889H10.6667V12.4444H7.11111V24.8889ZM17.7778 24.8889H14.2222V7.11111H17.7778V24.8889ZM21.3333 24.8889H24.8889V17.7778H21.3333V24.8889Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_charts = (charts_charts);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/chat.js


var chat_chat = function chat(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 28 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M17 1H1v12h2.88l1.656 1.657L7.192 13H17V1zM7.607 14l-2.07 2.07L3.463 14H0V0h18v14H7.607zm11.48-5.963l7.92.014v9.9h-3.413l-2.06 2.06-2.055-2.056h-6.433v-2.898h.99v1.913h5.866l1.64 1.64 1.634-1.635h2.85V8.97h-6.94v-.933z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_chat = (chat_chat);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/goIcon.js


var goIcon_goIcon = function goIcon(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 489.6 489.6",
    fill: fillColor
  }, external_react_default.a.createElement("g", null, external_react_default.a.createElement("ellipse", {
    fill: fillColor,
    cx: "245",
    cy: "245",
    rx: "245",
    ry: "245"
  }), external_react_default.a.createElement("path", {
    fill: "white",
    d: "M210,326.1c1.9,1.9,4.5,2.9,7,2.9s5.1-1,7-2.9l74.3-74.3c1.9-1.9,2.9-4.4,2.9-7s-1-5.1-2.9-7 L224,163.5c-3.9-3.9-10.1-3.9-14,0s-3.9,10.1,0,14l67.3,67.3L210,312.1C206.2,316,206.2,322.3,210,326.1z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_goIcon = (goIcon_goIcon);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/check.js


var check_check = function check(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M15,0 C23.28,0 30,6.72 30,15 C30,23.28 23.28,30 15,30 C6.72,30 0,23.28 0,15 C0,6.72 6.72,0 15,0 Z M12,22.5 L25.5,9 L23.385,6.87 L12,18.255 L6.615,12.885 L4.5,15 L12,22.5 Z",
    id: "Sucesso"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_check = (check_check);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/check2.js


var check2_check2 = function check2(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 26 19",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 9.95673L3.4 7.63462L9.57143 13.6058L22.6 1L25 3.32212L9.57143 18.25L1 9.95673Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_check2 = (check2_check2);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/cleancheck.js


var cleancheck_clean_check = function clean_check(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 26 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 9.95673L3.4 7.63462L9.57143 13.6058L22.6 1L25 3.32212L9.57143 18.25L1 9.95673Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var cleancheck = (cleancheck_clean_check);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/close.js


var close_close = function close(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("defs", null, external_react_default.a.createElement("path", {
    d: "M9.99105747,8.22720779 L16.2272078,14.4633581 L14.4633581,16.2272078 L8.22720779,9.99105747 L1.99105747,16.2272078 L0.227207794,14.4633581 L6.46335812,8.22720779 L0.227207794,1.99105747 L1.99105747,0.227207794 L8.22720779,6.46335812 L14.4633581,0.227207794 L16.2272078,1.99105747 L9.99105747,8.22720779 Z",
    id: "path-close"
  })), external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, external_react_default.a.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, external_react_default.a.createElement("use", {
    xlinkHref: "#path-close"
  })), external_react_default.a.createElement("use", {
    id: "Mask",
    fill: fillColor,
    fillRule: "nonzero",
    xlinkHref: "#path-close"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_close = (close_close);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/combo.js


var combo_combo = function combo(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M-2.35367281e-14,0 L4.8056872,0 L4.8056872,2.67298578 L2.7014218,2.67298578 L2.7014218,21.3270142 L4.8056872,21.3270142 L4.8056872,24 L-2.35367281e-14,24 L-2.35367281e-14,0 Z M23.8056872,0 L23.8056872,24 L19,24 L19,21.3270142 L21.1042654,21.3270142 L21.1042654,2.67298578 L19,2.67298578 L19,0 L23.8056872,0 Z",
    id: "path-combo"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_combo = (combo_combo);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/comboB.js


var comboB_comboB = function comboB(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "-255 347 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("polygon", {
    points: "-255,443 -222,443 -222,441 -253,441 -253,355 -222,355 -222,353 -255,353"
  }), external_react_default.a.createElement("polygon", {
    points: "-156,353 -189,353 -189,355 -158,355 -158,441 -189,441 -189,443 -156,443"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_comboB = (comboB_comboB);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/comboC.js


var comboC_comboC = function comboC(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 42 41",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fillColor
  }, external_react_default.a.createElement("g", {
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "b",
    fill: fillColor,
    d: "m.007 0-.007 39h5v-1.694h-3.3l.033-35.612 3.267-.05v-1.644zm34.993 0v1.697h3.334l.043 35.609h-3.377v1.694h4.991l.009-39z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_comboC = (comboC_comboC);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/comprar.js


var comprar_comprar = function comprar(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 22 19",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M16.21 6.9873L11.8301 0.42041C11.7593 0.315918 11.6704 0.230957 11.5701 0.165527C11.4014 0.0551758 11.2007 0 11 0C10.6799 0 10.3601 0.140137 10.1699 0.43042L5.79004 6.9873H1C0.449951 6.9873 0 7.43774 0 7.98853C0 8.07861 0.0100098 8.1687 0.0400391 8.25879L2.58008 17.5386C2.81006 18.3794 3.58008 19 4.5 19H17.5C18.4199 19 19.1899 18.3794 19.4299 17.5386L21.97 8.25879L22 7.98853C22 7.43774 21.55 6.9873 21 6.9873H16.21ZM8 7L11 3L14 7H8ZM9 13C9 14.1001 9.8999 15 11 15C12.1001 15 13 14.1001 13 13C13 11.8999 12.1001 11 11 11C9.8999 11 9 11.8999 9 13Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_comprar = (comprar_comprar);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/consumptionProfile.js


var consumptionProfile_consumptionProfile = function consumptionProfile(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    width: "16",
    height: "14",
    viewBox: "0 0 16 14"
  }, external_react_default.a.createElement("defs", null, external_react_default.a.createElement("path", {
    id: "a",
    d: "M10.667 9.333v-4h2v4h-2zm-3.334 0V2.667h2v6.666h-2zm-4 0v-6h2v6h-2zM15.266 0H.734C.294 0 0 .296 0 .74v11.853c0 .444.294.74.734.74h14.532c.44 0 .734-.296.734-.74V.74C16 .296 15.706 0 15.266 0zm-.933 11.667H1.667v-10h12.666v10z"
  })), external_react_default.a.createElement("g", {
    fill: fillColor,
    "fill-rule": "evenodd",
    transform: "translate(0 .333)"
  }, external_react_default.a.createElement("mask", {
    id: "b",
    fill: "#fff"
  }), external_react_default.a.createElement("use", {
    fill: fillColor,
    "fill-rule": "nonzero",
    href: "#a"
  }), external_react_default.a.createElement("g", {
    fill: fillColor,
    mask: "url(#b)"
  }, external_react_default.a.createElement("path", {
    d: "M-.727-2.182h17v17h-17z"
  }))), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_consumptionProfile = (consumptionProfile_consumptionProfile);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/conexao.js


var conexao_conexao = function conexao(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 43 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M42.5260882,25.0869565 C41.8267897,23.826087 40.6467235,23.173913 38.9858897,23.1304348 C38.1117666,23.1304348 37.2376435,23.3043478 36.3198143,23.6956522 L30.7254265,26.0434783 C30.2009526,25.0869565 29.1520049,24.3913043 27.9719388,24.3913043 C27.9719388,24.3913043 27.9719388,24.3913043 27.9719388,24.3913043 L23.5576172,24.3913043 C22.7709064,24.3913043 20.5855987,23.7826087 17.7884048,22.826087 C16.127571,22.2608696 14.4667371,22 12.8496094,22.0869565 C12.0191924,22.1304348 11.2324817,22.2608696 10.5768893,22.4782609 C9.39682318,22.8695652 7.5611647,23.8695652 6.07515545,24.7391304 C5.98774314,24.2173913 5.5506816,23.826087 4.98250159,23.826087 L1.09265386,23.826087 C0.480767698,23.826087 1.77635684e-15,24.3043478 1.77635684e-15,24.9130435 L1.77635684e-15,38.7826087 C1.77635684e-15,39.3913043 0.480767698,39.8695652 1.09265386,39.8695652 L4.98250159,39.8695652 C5.59438776,39.8695652 6.07515545,39.3913043 6.07515545,38.7826087 L6.07515545,37.7391304 L7.69228316,36.4782609 C8.91605548,35.5652174 10.4457709,35.1304348 11.9754863,35.2608696 C13.8111448,35.3913043 15.1223294,35.5217391 15.8216279,35.6956522 L20.1485371,36.6086957 C22.2464326,37.0434783 24.3880341,37 26.3111049,36.4782609 C27.0104034,36.3043478 27.5785834,36.0869565 28.0593511,35.826087 L41.5208466,28.3913043 C42.0890266,28.0869565 42.5260882,27.5652174 42.7009128,26.9565217 C42.9194436,26.3043478 42.8320313,25.6521739 42.5260882,25.0869565 Z M2.18530772,37.6956522 L2.18530772,26.0434783 L3.88984774,26.0434783 L3.88984774,26.5652174 C3.88984774,26.5652174 3.88984774,26.6086957 3.88984774,26.6086957 L3.88984774,29.9565217 L3.88984774,37.6956522 L2.18530772,37.6956522 Z M40.6467235,26.3043478 C40.6467235,26.3478261 40.6030174,26.3913043 40.5156051,26.4347826 L27.0541095,33.9130435 C26.7481665,34.0869565 26.3111049,34.2608696 25.7866311,34.3913043 C24.1695033,34.826087 22.377551,34.8695652 20.6293048,34.4782609 L16.3023956,33.5652174 C15.4719786,33.3913043 14.0733817,33.2608696 12.1503109,33.0869565 C10.0961217,32.9565217 8.08563855,33.5217391 6.42480469,34.7391304 L6.11886161,34.9565217 L6.11886161,29.9130435 L6.11886161,27.2173913 C6.29368622,27.1304348 6.512217,27 6.68704161,26.8695652 C8.0419324,26.0869565 10.1398278,24.8695652 11.2324817,24.5217391 C11.7132494,24.3913043 12.2814294,24.2608696 12.9807278,24.2173913 C14.2919125,24.1304348 15.6905094,24.3478261 17.0891063,24.826087 C20.3233618,25.9130435 22.5086695,26.4782609 23.5576172,26.4782609 L27.9719388,26.4782609 L27.9719388,26.4782609 C28.4964126,26.4782609 28.9334742,26.9130435 28.9334742,27.3913043 C28.9334742,27.3913043 28.9334742,27.4347826 28.9334742,27.4347826 C28.9334742,27.9565217 28.4964126,28.3478261 27.9719388,28.3478261 L19.4929448,28.3478261 C18.8810587,28.3478261 18.400291,28.826087 18.400291,29.4347826 C18.400291,30.0434783 18.8810587,30.5217391 19.4929448,30.5217391 L19.4929448,30.5217391 L27.9719388,30.5217391 C29.457948,30.5217391 30.6817203,29.5217391 31.0313696,28.173913 L37.1502312,25.6521739 C37.7621173,25.3913043 38.3740035,25.2608696 38.8984774,25.2608696 C39.9911312,25.2608696 40.3407805,25.6956522 40.5593112,26.0869565 C40.6467235,26.173913 40.6467235,26.2608696 40.6467235,26.3043478 Z"
  }), external_react_default.a.createElement("path", {
    d: "M13.4614955,13.6521739 L22.6834941,20.826087 C22.8583187,20.9565217 23.1205556,21.0434783 23.3390864,21.0434783 C23.3390864,21.0434783 23.3390864,21.0434783 23.3827926,21.0434783 C23.6450295,21.0434783 23.8635603,20.9565217 24.082091,20.826087 L33.3040896,13.6521739 C36.2324019,11.3913043 37.0191127,7.39130435 35.2271604,4.17391304 C33.3915019,0.956521739 29.5016542,-0.608695652 25.9614557,0.434782609 C25.0436264,0.695652174 24.1695033,1.17391304 23.4264987,1.7826087 C22.6834941,1.17391304 21.809371,0.739130435 20.8915418,0.434782609 C17.3513433,-0.652173913 13.4177894,0.913043478 11.6258371,4.17391304 C9.70276626,7.39130435 10.5331832,11.3913043 13.4614955,13.6521739 Z M23.3390864,18.6086957 L17.001694,13.6521739 L18.9247648,13.6521739 C19.3181202,13.6521739 19.7114756,13.4347826 19.8863002,13.0434783 L20.9789541,10.826087 L21.8530772,12.9565217 C22.0279018,13.3478261 22.4212572,13.6521739 22.8583187,13.6521739 L26.7481665,13.6521739 C27.0541095,13.6521739 27.3163465,13.5217391 27.5348772,13.3043478 L28.1030572,12.6956522 L28.6275311,13.2608696 C28.8460619,13.4782609 29.1082988,13.6086957 29.457948,13.6086957 L29.7201849,13.6086957 L23.3390864,18.6086957 Z M13.4614955,5.2173913 C14.5104432,3.39130435 16.4772202,2.26086957 18.5314094,2.26086957 C19.0995894,2.26086957 19.6240633,2.34782609 20.1922433,2.52173913 C21.1100725,2.7826087 21.9404895,3.30434783 22.5523756,4 C22.7709064,4.2173913 23.0331433,4.34782609 23.3390864,4.34782609 C23.6450295,4.34782609 23.9509726,4.2173913 24.1257972,4 C24.7813895,3.30434783 25.5681003,2.7826087 26.4859295,2.52173913 C29.0645926,1.73913043 31.9054927,2.86956522 33.2166773,5.2173913 C33.2166773,5.2173913 33.2166773,5.2173913 33.2166773,5.2173913 C34.3967435,7.30434783 34.0033881,9.86956522 32.2988481,11.5217391 C32.2114357,11.4782609 32.0803173,11.4782609 31.992905,11.4782609 L29.9387157,11.4782609 L28.9334742,10.3913043 C28.7149434,10.173913 28.4527065,10.0434783 28.1467634,10.0434783 C27.8408203,10.0434783 27.5348772,10.173913 27.3600526,10.3913043 L26.3111049,11.4782609 L23.6450295,11.4782609 L22.1153141,7.82608696 C21.9404895,7.43478261 21.5908402,7.17391304 21.1537787,7.17391304 C20.7167172,7.17391304 20.3233618,7.39130435 20.1485371,7.7826087 L18.2691725,11.5217391 L14.5541494,11.5217391 C14.4667371,11.5217391 14.3793248,11.5217391 14.2919125,11.5652174 C12.6310786,9.86956522 12.2814294,7.30434783 13.4614955,5.2173913 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_conexao = (conexao_conexao);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/configuracao.js


var configuracao_configuracao = function configuracao(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M27.455 17.568c.064-.512.112-1.024.112-1.568s-.048-1.056-.112-1.568l3.376-2.64a.807.807 0 0 0 .192-1.024l-3.2-5.536c-.192-.352-.624-.48-.976-.352l-3.984 1.6a11.69 11.69 0 0 0-2.704-1.568L19.55.672A.78.78 0 0 0 18.767 0h-6.4a.78.78 0 0 0-.784.672l-.608 4.24c-.976.4-1.872.944-2.704 1.568l-3.984-1.6a.78.78 0 0 0-.976.352l-3.2 5.536a.789.789 0 0 0 .192 1.024l3.376 2.64c-.064.512-.112 1.04-.112 1.568s.048 1.056.112 1.568l-3.376 2.64a.807.807 0 0 0-.192 1.024l3.2 5.536c.192.352.624.48.976.352l3.984-1.6a11.69 11.69 0 0 0 2.704 1.568l.608 4.24a.78.78 0 0 0 .784.672h6.4a.78.78 0 0 0 .784-.672l.608-4.24c.976-.4 1.872-.944 2.704-1.568l3.984 1.6a.78.78 0 0 0 .976-.352l3.2-5.536a.807.807 0 0 0-.192-1.024l-3.376-2.64zM15.567 21.6a5.606 5.606 0 0 1-5.6-5.6c0-3.088 2.512-5.6 5.6-5.6 3.088 0 5.6 2.512 5.6 5.6 0 3.088-2.512 5.6-5.6 5.6z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_configuracao = (configuracao_configuracao);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/contract.js


var contract_contract = function contract(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21 1H3C2.4 1 2 1.4 2 2V22C2 22.6 2.4 23 3 23H14.9C15.2 23 15.4 22.9 15.6 22.7L21.7 16C21.9 15.8 22 15.6 22 15.3V2C22 1.5 21.5 1 21 1ZM17.8 5H6V7H17.8V5ZM6 9H17.8V11H6V9ZM17.8 13H6V15H17.8V13ZM10 18.05C9.975 18 9.95 17.95 9.9 17.9C9.4 18 7.8 18.7 6.3 19.5L5.3 17.8C6.3 17.2 8.8 15.9 9.9 15.9C10.9636 15.9 11.4662 16.7414 11.7695 17.2491L11.8 17.3C11.85 17.35 11.9 17.425 11.95 17.5C12 17.575 12.05 17.65 12.1 17.7C12.4 17.8 12.8 17.8 13.1 17.8L13.2 19.8H12.9C12.5686 19.8 12.2373 19.7314 11.8491 19.651L11.8491 19.651L11.849 19.651L11.8487 19.6509L11.848 19.6508C11.7679 19.6342 11.6854 19.6171 11.6 19.6C10.8031 19.4229 10.4766 18.8538 10.204 18.3787C10.1687 18.3172 10.1344 18.2573 10.1 18.2C10.05 18.15 10.025 18.1 10 18.05ZM14.5 21L20 14.9V3H4V21H14.5Z",
    fill: fillColor
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_contract = (contract_contract);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/desconto.js


var desconto_desconto = function desconto(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 36 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M35.2380952,7.9580786 L33.4279296,7.9580786 L26.4730021,7.9580786 C26.4898551,7.93401262 26.5113043,7.90917031 26.5281573,7.88510432 C28.0793996,5.60038816 27.5079296,2.46327026 25.2542236,0.888888889 C24.4222981,0.308199903 23.4501863,0 22.4428364,0 C20.8073292,0 19.2775362,0.81436196 18.3506211,2.17913634 C18.0687164,2.59291606 17.8220497,3.09053857 17.6190476,3.63318777 C17.4168116,3.09053857 17.1701449,2.59291606 16.8882402,2.17913634 C15.9613251,0.81436196 14.4315321,0 12.7952588,0 C11.7886749,0 10.8165631,0.307423581 9.98463768,0.888888889 C7.73016563,2.46249393 7.15869565,5.59961184 8.71070393,7.88510432 C8.72679089,7.90917031 8.7505383,7.93401262 8.7673913,7.9580786 L1.81093168,7.9580786 L0,7.9580786 L0,16.5690442 L1.81093168,16.5690442 L1.81093168,40 L33.4271636,40 L33.4271636,16.5690442 L35.2380952,16.5690442 L35.2380952,7.9580786 Z M19.6130642,3.06103833 C20.2534783,2.11780689 21.3121532,1.55419699 22.4428364,1.55419699 C23.1384058,1.55419699 23.8094617,1.76613295 24.3847619,2.16826783 C25.9436646,3.25667152 26.3389441,5.42649199 25.2657143,7.00475497 C25.0496894,7.32304706 24.7493996,7.64754973 24.3993168,7.95885492 L18.6723602,7.95885492 C18.5857971,7.55672004 18.5436646,7.09946628 18.5651139,6.58786997 C18.6195031,5.30150412 19.0301035,3.91732169 19.6130642,3.06103833 Z M9.973147,7.00475497 C8.90068323,5.42649199 9.29519669,3.25667152 10.8540994,2.16826783 C11.4286335,1.76613295 12.1004555,1.55419699 12.7952588,1.55419699 C13.9274741,1.55419699 14.984617,2.11858321 15.6257971,3.06103833 C16.2079917,3.91809801 16.6185921,5.30228045 16.6722153,6.58786997 C16.6928986,7.10179525 16.6515321,7.55827268 16.5619048,7.95885492 L10.8418427,7.95885492 C10.4917598,7.64754973 10.1891718,7.32304706 9.973147,7.00475497 Z M3.34302277,16.5690442 L16.8530021,16.5690442 L16.8530021,38.4473557 L3.34302277,38.4473557 L3.34302277,16.5690442 Z M31.8958385,38.4473557 L18.3850932,38.4473557 L18.3850932,16.5690442 L31.8958385,16.5690442 L31.8958385,38.4473557 Z M33.7060041,15.0163998 L1.5320911,15.0163998 L1.5320911,9.51072295 L4.46681159,9.51072295 L29.8612215,9.51072295 L33.7060041,9.51072295 L33.7060041,15.0163998 Z"
  }), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_desconto = (desconto_desconto);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/enviar.js


var enviar_enviar = function enviar(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 32 26",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("defs", null, external_react_default.a.createElement("path", {
    d: "M28.8,3 L3.2,3 C1.44,3 0.016,4.44 0.016,6.2 L0,25.4 C0,27.16 1.44,28.6 3.2,28.6 L28.8,28.6 C30.56,28.6 32,27.16 32,25.4 L32,6.2 C32,4.44 30.56,3 28.8,3 Z M28.8,25.4 L3.2,25.4 L3.2,9.4 L16,17.4 L28.8,9.4 L28.8,25.4 Z M16,14.2 L3.2,6.2 L28.8,6.2 L16,14.2 Z",
    id: "path-enviar"
  })), external_react_default.a.createElement("g", {
    id: "icone/produtos/email",
    transform: "translate(0.000000, -3.000000)"
  }, external_react_default.a.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, external_react_default.a.createElement("use", {
    xlinkHref: "#path-enviar"
  })), external_react_default.a.createElement("use", {
    id: "Mask",
    fill: fillColor,
    fillRule: "nonzero",
    xlinkHref: "#path-enviar"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_enviar = (enviar_enviar);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/facebook.js


var facebook_facebook = function facebook(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 500 500",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M331.6,120.6h-28.9c-22.6,0-26.9,10.9-26.9,26.5v34.8h53.9l-7.2,54.5h-46.8v139.7h-56.3V236.4h-46.9v-54.5h46.9v-40.1 c0-46.6,28.5-72,70.1-72c19.9,0,37,1.5,42,2.2V120.6z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_facebook = (facebook_facebook);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/feat-antivirus.js


var feat_antivirus_feat_antivirus = function feat_antivirus(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 73 73",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    transform: "translate(-588 -348)"
  }, external_react_default.a.createElement("path", {
    d: "M645.716 368.675v-13.307h-20.262l-8.53-7.368-8.533 7.368h-20.26v49.268l28.793 16.196 7.206-3.993c3.166 1.363 6.69 2.142 10.34 2.142 14.51 0 26.306-11.847 26.306-26.42 0-10.548-6.173-19.636-15.06-23.887zm-28.793 48.067l-25.27-14.216v-43.588h18.03l7.24-6.232 7.24 6.232h18.03v8.34c-2.423-.746-5.008-1.167-7.69-1.167-14.51 0-26.306 11.847-26.306 26.42 0 9.347 4.88 17.59 12.216 22.297l-3.49 1.915zm17.547-1.363c-12.538 0-22.75-10.257-22.75-22.85 0-12.593 10.212-22.85 22.75-22.85 12.54 0 22.75 10.257 22.75 22.85 0 12.625-10.21 22.85-22.75 22.85zm6.043-37.877l1.228 1.233-3.553 3.57-3.103-3.116-2.068 2.078 1.97 1.98-14.218 14.28 3.36 3.376-4.588 4.608 2.07 2.077 4.587-4.61 3.36 3.376 14.22-14.28 1.972 1.98 2.067-2.078-3.102-3.116 3.554-3.57 1.227 1.233 2.07-2.077-8.985-9.023-2.07 2.078zm-10.955 24.73l-4.685-4.705 12.183-12.236 4.685 4.706-12.182 12.236zm13.088-15.415l-2.423-2.435 3.554-3.57 2.424 2.434-3.554 3.57z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_feat_antivirus = (feat_antivirus_feat_antivirus);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/feat-certificate.js


var feat_certificate_feat_certificate = function feat_certificate(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 74 74",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    transform: "translate(-694 -348)"
  }, external_react_default.a.createElement("path", {
    d: "M767.903 348H694.61v55.597h41.85V422l10.438-6.718L757.303 422v-18.403h10.632V348h-.032zm-21.038 56.02c-5.623 0-10.21-4.61-10.21-10.257 0-5.647 4.587-10.256 10.21-10.256 5.623 0 10.212 4.61 10.212 10.256 0 5.648-4.59 10.256-10.212 10.256zm0 7.01l-6.883 4.446v-9.704c2.036 1.168 4.363 1.85 6.883 1.85 2.49 0 4.815-.682 6.82-1.818v9.672l-6.82-4.446zm17.483-11.003h-5.203c.938-1.882 1.487-3.992 1.487-6.23 0-7.63-6.172-13.828-13.767-13.828-7.594 0-13.766 6.198-13.766 13.826 0 2.24.548 4.38 1.485 6.23h-36.452V351.57h66.183v48.457h.032zm-17.483-12.43c-3.393 0-6.14 2.758-6.14 6.166 0 3.408 2.747 6.167 6.14 6.167 3.394 0 6.14-2.76 6.14-6.167 0-3.375-2.746-6.167-6.14-6.167zm0 9.444c-1.777 0-3.23-1.46-3.23-3.244 0-1.785 1.453-3.246 3.23-3.246 1.778 0 3.232 1.46 3.232 3.246 0 1.785-1.454 3.245-3.232 3.245zm-41.85-27.197h52.482v3.895h-52.48v-3.895zm0-10.678h52.482v3.895h-52.48v-3.895zm0 21.356h26.565v3.896h-26.564v-3.895z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_feat_certificate = (feat_certificate_feat_certificate);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/feat-cloud.js


var feat_cloud_feat_cloud = function feat_cloud(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 95 65",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    transform: "translate(-276 -356)"
  }, external_react_default.a.createElement("path", {
    d: "M357.07 421H297.12c-11.64 0-21.122-9.536-21.122-21.245 0-8.887 5.58-16.834 13.737-19.915-.096-.876-.16-1.72-.16-2.595 0-11.71 9.48-21.245 21.12-21.245 8.643 0 16.318 5.287 19.543 13.17 3.45-2.272 7.48-3.504 11.64-3.504 11.642 0 21.123 9.536 21.123 21.245 0 2.4-.387 4.736-1.16 6.942 5.416 1.978 9.157 7.2 9.157 13.136 0 7.752-6.256 14.012-13.93 14.012zm-46.372-61.075c-9.513 0-17.252 7.784-17.252 17.352 0 1.2.13 2.368.354 3.536l.355 1.784-1.74.486c-7.418 2.076-12.578 8.952-12.578 16.704 0 9.57 7.74 17.353 17.253 17.353h59.947c5.547 0 10.06-4.54 10.06-10.12 0-4.897-3.45-9.05-8.254-9.925l-2.483-.454 1.064-2.302c1.096-2.335 1.645-4.833 1.645-7.395 0-9.568-7.74-17.353-17.254-17.353-4.16 0-8.19 1.525-11.35 4.282l-2.355 2.076-.773-3.05c-1.902-7.654-8.77-12.973-16.64-12.973z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_feat_cloud = (feat_cloud_feat_cloud);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/feat-modem.js


var feat_modem_feat_modem = function feat_modem(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 94 59",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    transform: "translate(-86 -361)"
  }, external_react_default.a.createElement("path", {
    d: "M164.095 382.01h-60.4v-20.944H99.79v21.076c-7.74.95-13.757 7.604-13.757 15.635V420h93.707v-22.223c0-8.72-7.026-15.766-15.645-15.766zm11.742 34.024h-85.9v-18.29c0-6.523 5.268-11.833 11.74-11.833h62.45c6.473 0 11.742 5.31 11.742 11.834v18.29h-.033zm-27.03-10.292c-1.975 0-3.577-1.615-3.577-3.606 0-1.99 1.602-3.605 3.578-3.605 1.976 0 3.577 1.615 3.577 3.606 0 1.99-1.6 3.606-3.577 3.606zm-14.05 0c-1.977 0-3.578-1.615-3.578-3.606 0-1.99 1.6-3.605 3.576-3.605s3.578 1.615 3.578 3.606c0 1.99-1.602 3.606-3.578 3.606zm28.07 0c-1.977 0-3.58-1.615-3.58-3.606 0-1.99 1.603-3.605 3.58-3.605 1.975 0 3.577 1.615 3.577 3.606 0 1.99-1.602 3.606-3.578 3.606z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_feat_modem = (feat_modem_feat_modem);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/feat-wifi.js


var feat_wifi_feat_wifi = function feat_wifi(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 84 60",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    transform: "translate(-437 -354)"
  }, external_react_default.a.createElement("path", {
    d: "M517.98 375c-10.32-10.812-24.18-16.76-38.98-16.76-14.8 0-28.66 5.948-38.98 16.76l-3.02-2.958C448.133 360.408 463.03 354 479 354c15.97 0 30.9 6.408 42 18.042L517.98 375zM480 414c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm25.046-29c-6.893-7.044-16.136-10.943-26.046-10.943s-19.153 3.9-26.046 10.943L450 382.17c7.687-7.862 17.978-12.17 29-12.17 11.022 0 21.313 4.34 29 12.17l-2.954 2.83zm-12.082 14c-3.706-4.177-8.69-6.475-13.996-6.475-5.304 0-10.29 2.298-13.996 6.475L462 395.867c4.506-5.082 10.545-7.867 17-7.867s12.494 2.785 17 7.867L492.964 399z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_feat_wifi = (feat_wifi_feat_wifi);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/game01.js


var game01_game01 = function game01(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M15,0 C6.72,0 0,6.72 0,15 C0,23.28 6.72,30 15,30 C23.28,30 30,23.28 30,15 C30,6.72 23.28,0 15,0 Z M16.5,22.5 L13.5,22.5 L13.5,19.5 L16.5,19.5 L16.5,22.5 Z M16.5,16.5 L13.5,16.5 L13.5,7.5 L16.5,7.5 L16.5,16.5 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_game01 = (game01_game01);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/game02.js


var game02_game02 = function game02(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M15,0 C6.72,0 0,6.72 0,15 C0,23.28 6.72,30 15,30 C23.28,30 30,23.28 30,15 C30,6.72 23.28,0 15,0 Z M16.5,22.5 L13.5,22.5 L13.5,19.5 L16.5,19.5 L16.5,22.5 Z M16.5,16.5 L13.5,16.5 L13.5,7.5 L16.5,7.5 L16.5,16.5 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_game02 = (game02_game02);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/game03.js


var game03_game03 = function game03(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M15,0 C6.72,0 0,6.72 0,15 C0,23.28 6.72,30 15,30 C23.28,30 30,23.28 30,15 C30,6.72 23.28,0 15,0 Z M16.5,22.5 L13.5,22.5 L13.5,19.5 L16.5,19.5 L16.5,22.5 Z M16.5,16.5 L13.5,16.5 L13.5,7.5 L16.5,7.5 L16.5,16.5 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_game03 = (game03_game03);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/game04.js


var game04_game04 = function game04(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M15,0 C6.72,0 0,6.72 0,15 C0,23.28 6.72,30 15,30 C23.28,30 30,23.28 30,15 C30,6.72 23.28,0 15,0 Z M16.5,22.5 L13.5,22.5 L13.5,19.5 L16.5,19.5 L16.5,22.5 Z M16.5,16.5 L13.5,16.5 L13.5,7.5 L16.5,7.5 L16.5,16.5 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_game04 = (game04_game04);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/game05.js


var game05_game05 = function game05(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M3005 6219 c-482 -14 -755 -85 -977 -256 -370 -284 -554 -758 -586 -1508 -13 -295 -7 -1763 7 -1910 63 -639 232 -1039 543 -1290 181 -145 392 -218 743 -256 154 -17 6956 -26 7225 -9 396 23 629 84 826 215 249 166 430 437 533 795 52 183 80 353 101 605 16 182 16 1858 1 2030 -41 468 -140 804 -314 1065 -73 110 -243 274 -349 336 -164 96 -385 153 -683 173 -169 12 -6669 20 -7070 10z m-560 -754 c156 -41 287 -175 331 -338 28 -107 11 -239 -44 -341 -54 -100 -177 -195 -290 -226 -62 -16 -187 -13 -252 6 -301 88 -429 446 -254 711 108 161 315 238 509 188z m8208 0 c88 -23 156 -62 217 -124 289 -297 82 -791 -331 -792 -92 0 -144 12 -222 53 -286 152 -331 542 -88 760 55 49 133 92 198 107 60 14 164 12 226 -4z m-1413 -1870 l0 -1635 -2802 2 -2803 3 -3 1633 -2 1632 2805 0 2805 0 0 -1635z m1018 778 c15 -11 38 -35 50 -54 20 -28 23 -44 20 -92 -3 -36 -12 -67 -24 -85 -24 -32 -98 -72 -134 -72 -40 0 -113 42 -137 79 -27 40 -31 117 -9 159 18 34 53 68 86 81 37 16 117 7 148 -16z m-7396 -220 l3 -168 168 -3 167 -2 0 -120 0 -120 -170 0 -170 0 0 -170 0 -170 -120 0 -120 0 0 170 0 170 -170 0 -170 0 0 120 0 120 168 2 167 3 3 168 2 167 120 0 120 0 2 -167z m6996 -190 c88 -66 88 -201 -1 -267 -22 -16 -43 -21 -95 -21 -77 0 -107 17 -141 76 -43 76 -19 164 59 217 29 20 44 23 93 20 37 -3 67 -11 85 -25z m802 5 c57 -39 75 -72 75 -138 0 -66 -18 -99 -75 -137 -39 -27 -116 -31 -160 -8 -43 22 -79 76 -86 126 -7 56 26 124 75 156 47 32 125 32 171 1z m-406 -406 c44 -26 68 -65 74 -121 6 -62 -9 -101 -54 -141 -64 -56 -151 -52 -217 9 -37 35 -41 43 -45 98 -6 88 26 140 105 169 43 16 94 10 137 -14z m-454 -627 c36 -19 60 -62 60 -110 0 -98 -100 -156 -189 -111 -73 38 -86 140 -26 201 30 30 42 35 81 35 25 0 58 -7 74 -15z m-10 -510 c47 -24 70 -62 70 -116 0 -111 -123 -165 -210 -93 -111 94 10 276 140 209z"
  }), external_react_default.a.createElement("path", {
    d: "M2241 5409 c-139 -27 -259 -139 -303 -283 -57 -189 35 -392 220 -479 61 -29 75 -32 162 -31 126 0 188 25 274 105 72 67 111 141 127 240 33 205 -117 409 -330 449 -61 11 -88 11 -150 -1z m224 -73 c108 -49 182 -144 205 -264 30 -151 -51 -307 -198 -379 -50 -24 -69 -28 -147 -28 -76 0 -99 4 -146 26 -161 76 -244 254 -195 422 59 202 291 310 481 223z"
  }), external_react_default.a.createElement("path", {
    d: "M10460 5409 c-119 -23 -237 -116 -286 -224 -144 -313 150 -657 475 -556 124 39 200 104 255 220 28 60 31 75 31 166 0 94 -2 105 -33 168 -59 120 -160 199 -290 226 -60 12 -88 13 -152 0z m181 -59 c162 -51 258 -192 247 -365 -8 -127 -85 -237 -207 -294 -47 -22 -70 -26 -146 -26 -78 0 -98 4 -145 27 -75 37 -137 100 -173 177 -92 194 21 430 232 487 67 18 121 17 192 -6z"
  }), external_react_default.a.createElement("path", {
    d: "M3720 3600 l0 -1540 2720 0 2720 0 0 1540 0 1540 -2720 0 -2720 0 0 -1540z m5370 -5 l0 -1485 -2652 2 -2653 3 -3 1483 -2 1482 2655 0 2655 0 0 -1485z"
  }), external_react_default.a.createElement("path", {
    d: "M2700 4125 l0 -66 43 3 42 3 0 60 0 60 -42 3 -43 3 0 -66z"
  }), external_react_default.a.createElement("path", {
    d: "M2420 3865 l0 -45 60 0 60 0 0 45 0 45 -60 0 -60 0 0 -45z"
  }), external_react_default.a.createElement("path", {
    d: "M2940 3865 l0 -45 65 0 65 0 0 45 0 45 -65 0 -65 0 0 -45z"
  }), external_react_default.a.createElement("path", {
    d: "M2700 3600 l0 -60 45 0 45 0 0 60 0 60 -45 0 -45 0 0 -60z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_game05 = (game05_game05);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/game06.js


var game06_game06 = function game06(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M15,0 C6.72,0 0,6.72 0,15 C0,23.28 6.72,30 15,30 C23.28,30 30,23.28 30,15 C30,6.72 23.28,0 15,0 Z M16.5,22.5 L13.5,22.5 L13.5,19.5 L16.5,19.5 L16.5,22.5 Z M16.5,16.5 L13.5,16.5 L13.5,7.5 L16.5,7.5 L16.5,16.5 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_game06 = (game06_game06);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/google-plus.js


var google_plus_google_plus = function google_plus(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 500 500",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M168.7,365.1c-74.6,0-135-60.4-135-135c0-74.6,60.4-135,135-135c36.5,0,66.8,13.3,90.4,35.4l-36.6,35.2 c-9.9-9.6-27.4-20.8-53.8-20.8c-46,0-83.6,38.1-83.6,85.2c0,47.1,37.6,85.2,83.6,85.2c53.4,0,73.5-38.5,76.6-58.2h-76.6v-46.4 h127.4c1.3,6.8,2.2,13.6,2.2,22.5C298.3,310.4,246.6,365.1,168.7,365.1z M457.9,249.4h-38.5v38.5h-38.7v-38.5h-38.5v-38.7h38.5 v-38.5h38.7v38.5h38.5V249.4z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_google_plus = (google_plus_google_plus);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/help.js


var help_help = function help(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 0C7.168 0 0 7.168 0 16C0 24.832 7.168 32 16 32C24.832 32 32 24.832 32 16C32 7.168 24.832 0 16 0ZM14.4 27.2V24H17.6V27.2H14.4ZM19.472 16.272L20.912 14.8C21.824 13.888 22.4 12.608 22.4 11.2C22.4 7.664 19.536 4.8 16 4.8C12.464 4.8 9.6 7.664 9.6 11.2H12.8C12.8 9.44 14.24 8 16 8C17.76 8 19.2 9.44 19.2 11.2C19.2 12.08 18.848 12.88 18.256 13.456L16.272 15.472C15.12 16.64 14.4 18.24 14.4 20V20.8H17.6C17.6 18.4 18.32 17.44 19.472 16.272Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_help = (help_help);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/html.js


var html_html = function html(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 1280.000000 791.000000",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M6881 7884 c-83 -22 -150 -62 -222 -134 -105 -104 -113 -127 -218 -635 -49 -242 -155 -757 -235 -1145 -80 -388 -210 -1022 -290 -1410 -80 -388 -179 -869 -220 -1070 -69 -336 -190 -924 -476 -2315 -60 -291 -114 -560 -120 -597 -25 -160 46 -347 172 -450 227 -186 554 -150 729 82 77 101 57 23 279 1103 60 295 160 778 220 1072 61 294 160 776 220 1070 61 294 160 776 220 1070 61 294 160 776 220 1070 148 717 327 1593 345 1682 39 189 -6 345 -134 474 -71 72 -138 111 -228 134 -71 19 -191 18 -262 -1z"
  }), external_react_default.a.createElement("path", {
    d: "M3050 7100 c-64 -11 -139 -42 -191 -77 -24 -17 -657 -642 -1405 -1389 -1482 -1479 -1403 -1394 -1439 -1545 -19 -82 -19 -159 0 -234 38 -146 -41 -61 1429 -1534 894 -896 1381 -1377 1421 -1402 92 -61 176 -83 298 -76 118 6 184 29 276 95 161 118 240 345 185 533 -42 142 6 90 -1241 1339 l-1163 1165 1155 1155 c636 635 1169 1175 1185 1199 67 100 97 260 71 380 -56 261 -317 436 -581 391z"
  }), external_react_default.a.createElement("path", {
    d: "M9554 7096 c-189 -43 -345 -200 -385 -387 -26 -120 4 -280 71 -380 16 -24 549 -564 1185 -1199 l1155 -1155 -1163 -1165 c-1247 -1249 -1199 -1197 -1241 -1339 -55 -188 24 -415 185 -533 92 -66 158 -89 276 -95 122 -7 206 15 298 76 40 25 527 506 1421 1402 1470 1473 1391 1388 1429 1534 19 75 19 152 0 234 -36 151 43 66 -1439 1545 -748 747 -1383 1374 -1411 1392 -104 69 -259 98 -381 70z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_html = (html_html);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/home.js


var home_home = function home(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.2941 10.3529L24 12.9412L22.4706 14.5882L21.4118 13.6471V20.8235C21.4118 21.5294 20.9412 22 20.2353 22H14.3529C13.6471 22 13.1765 21.5294 13.1765 20.8235V16.1176H10.8235V20.8235C10.8235 21.5294 10.3529 22 9.64706 22H3.76471C3.52941 22 3.17647 21.8824 2.94118 21.6471C2.70588 21.4118 2.58824 21.1765 2.58824 20.8235V13.6471L1.64706 14.7059L0 12.9412L2.82353 10.3529C2.82353 10.2353 2.94118 10.1176 3.05882 10L10.5882 2.94118L11.1765 2.35294C11.4118 2.11765 11.7647 2 12 2C12.2353 2 12.5882 2.11765 12.8235 2.35294L21.0588 10C21.1176 10.0588 21.1471 10.1176 21.1765 10.1765C21.2059 10.2353 21.2353 10.2941 21.2941 10.3529ZM15.5294 19.6471H19.0588V11.5294L12 4.82353L4.94118 11.4118V19.6471H8.47059V14.9412C8.47059 14.2353 8.94118 13.7647 9.64706 13.7647H14.3529C15.0588 13.7647 15.5294 14.2353 15.5294 14.9412V19.6471Z",
    fill: fillColor
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_home = (home_home);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/historico.js



var historico_historico = function historico(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.28571 9C3.28571 5.13444 6.35619 2 10.1429 2C13.9295 2 17 5.13444 17 9C17 12.8656 13.9295 16 10.1429 16C8.24571 16 6.53905 15.2144 5.29714 13.9467L6.37905 12.8422C7.33905 13.83 8.67238 14.4444 10.1429 14.4444C13.0914 14.4444 15.4762 12.01 15.4762 9C15.4762 5.99 13.0914 3.55556 10.1429 3.55556C7.19429 3.55556 4.80952 5.99 4.80952 9H7.09524L4.01714 12.1344L3.96381 12.0256L1 9H3.28571ZM9.57143 9.95159V6.08333H10.7714V9.37135L13.5714 10.9805L12.9954 11.9167L9.57143 9.95159Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};


/* harmony default export */ var iconfiles_historico = (historico_historico);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/info.js


var info_info = function info(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.2 2C6.6 2 2 6.6 2 12.1C2 17.7 6.6 22.2 12.2 22.2C17.8 22.2 22.4 17.7 22.4 12.1C22.4 6.6 17.8 2 12.2 2ZM13.5 6.5H11.3V8.4H13.5V6.5ZM13.5 9.5H11.3V17.9H13.5V9.5ZM4 12.1C4 16.6 7.7 20.2 12.2 20.2C16.7 20.2 20.4 16.6 20.4 12.1C20.4 7.6 16.7 4 12.2 4C7.7 4 4 7.6 4 12.1Z",
    fill: fillColor
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_info = (info_info);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/invoice.js


var invoice_invoice = function invoice(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 19 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("defs", null, external_react_default.a.createElement("path", {
    d: "M12.2181818,10.8 C11.5636364,10.8 11.1272727,10.4181818 11.0181818,9.81818182 L9.65454545,9.81818182 C9.70909091,11.0181818 10.4727273,11.8363636 11.6181818,12.0545455 L11.6181818,12.9272727 L12.7090909,12.9272727 L12.7090909,12.1090909 C13.8545455,11.9454545 14.5090909,11.2363636 14.5090909,10.1454545 C14.5090909,9 13.9636364,8.34545455 12.8727273,8.07272727 L11.7272727,7.74545455 C11.3454545,7.63636364 11.0181818,7.47272727 11.0181818,7.09090909 C11.0181818,6.6 11.4,6.38181818 11.9454545,6.38181818 C12.3818182,6.38181818 12.8727273,6.6 12.9818182,7.03636364 L14.3454545,7.03636364 C14.2363636,6.05454545 13.6363636,5.34545455 12.6545455,5.12727273 L12.6545455,4.2 L11.5636364,4.2 L11.5636364,5.07272727 C10.5272727,5.18181818 9.70909091,5.83636364 9.70909091,7.03636364 C9.70909091,8.07272727 10.2545455,8.78181818 11.2909091,9.05454545 L12.4363636,9.38181818 C12.9272727,9.49090909 13.1454545,9.70909091 13.1454545,10.0909091 C13.2,10.5818182 12.7636364,10.8 12.2181818,10.8 Z M5.23636364,9.16363636 L6.05454545,9.16363636 L7.69090909,12 L9.21818182,12 L7.52727273,9.10909091 C8.50909091,8.89090909 9,8.18181818 9,7.14545455 C9,5.89090909 8.23636364,5.12727273 6.81818182,5.12727273 L3.92727273,5.12727273 L3.92727273,12 L5.23636364,12 L5.23636364,9.16363636 L5.23636364,9.16363636 Z M5.23636364,6.43636364 L6.87272727,6.43636364 C7.36363636,6.43636364 7.69090909,6.70909091 7.69090909,7.2 C7.69090909,7.69090909 7.36363636,7.90909091 6.87272727,7.90909091 L5.23636364,7.90909091 L5.23636364,6.43636364 Z M17.4545455,0 L1.09090909,0 C0.490909091,0 0,0.490909091 0,1.09090909 L0,22.9090909 C0,23.5090909 0.490909091,24 1.09090909,24 L9.43636364,24 C10.2545455,24 10.9090909,23.5636364 11.2909091,22.9090909 L17.1272727,17.4545455 C17.9454545,17.1272727 18.4909091,16.3636364 18.4909091,15.4363636 L18.4909091,1.09090909 C18.5454545,0.490909091 18.0545455,0 17.4545455,0 Z M11.6181818,19.6363636 L11.6181818,17.6181818 L13.8,17.6181818 L11.6181818,19.6363636 Z M16.3636364,15.2181818 L16.1454545,15.4363636 L10.5272727,15.4363636 C9.92727273,15.4363636 9.43636364,15.9272727 9.43636364,16.5272727 L9.43636364,21.8181818 L2.18181818,21.8181818 L2.18181818,2.18181818 L16.3636364,2.18181818 L16.3636364,15.2181818 Z",
    id: "path-invoice"
  })), external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, external_react_default.a.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, external_react_default.a.createElement("use", {
    xlinkHref: "#path-invoice"
  })), external_react_default.a.createElement("use", {
    id: "Mask",
    fill: fillColor,
    fillRule: "nonzero",
    xlinkHref: "#path-invoice"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_invoice = (invoice_invoice);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/invoiceOld.js

 //import PropTypes from 'prop-types';

var invoiceOld_invoiceOld = function invoiceOld(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    width: "18px",
    height: "24px",
    viewBox: "0 0 18 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    id: "C\xF3digo-de-Barras",
    stroke: "none",
    strokeWidth: "1",
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("g", {
    id: "02---Autentica\xE7\xE3o-Codigo-de-Barras-",
    transform: "translate(-903.000000, -390.000000)",
    fill: fillColor
  }, external_react_default.a.createElement("g", {
    id: "Icone-produtos/2-via",
    transform: "translate(900.000000, 390.000000)"
  }, external_react_default.a.createElement("g", {
    transform: "translate(3.000000, 0.000000)"
  }, external_react_default.a.createElement("path", {
    d: "M16.1868415,17 C15.9021062,17.3187114 15.6225256,17.6191631 15.3480998,17.9013551 C15.3164941,17.9338552 15.2842309,17.9667369 15.25131,18 L11,18 L11,21.6438273 C10.7538018,21.8369335 10.4993192,22.0348459 10.2365521,22.2375646 C10.1568435,22.2925558 10.0779928,22.3465719 10,22.3996129 L10,17 L16.1868415,17 Z",
    id: "Combined-Shape"
  }), external_react_default.a.createElement("path", {
    d: "M18,0.035495133 L18,15.431502 C17.8905877,16.4575769 17.3761311,17.2951821 16.4566302,17.9443177 C15.5371294,18.5934533 13.4729773,20.2729647 10.2641739,22.9828519 C9.45595967,23.6495634 8.71190121,23.9829191 8.0319985,23.9829191 C7.3520958,23.9829191 4.67476297,23.9829191 0,23.9829191 L0,0.0223564433 L18,0.035495133 Z M17,1.36517765 L1,1.35349881 L1,22.6517767 C5.15534486,22.6517767 7.53519627,22.6517767 8.13955423,22.6517767 C8.74391218,22.6517767 9.40529748,22.3554605 10.1237101,21.7628281 C12.9759798,19.3540395 14.8107817,17.8611404 15.6281158,17.284131 C16.4454499,16.7071216 16.9027446,15.9625836 17,15.0505171 L17,1.36517765 Z",
    id: "Combined-Shape"
  }), external_react_default.a.createElement("rect", {
    id: "Rectangle-2",
    x: "11.6437483",
    y: "3.86856951",
    width: "1",
    height: "10.2857143"
  }), external_react_default.a.createElement("path", {
    d: "M6.50446875,8.04228571 C6.6754696,8.04228571 6.83221804,8.01876214 6.97471875,7.97171429 C7.11721946,7.92466643 7.23656202,7.85771472 7.33275,7.77085714 C7.42893798,7.68399957 7.50374973,7.57723873 7.5571875,7.45057143 C7.61062527,7.32390413 7.63734375,7.17733417 7.63734375,7.01085714 C7.63734375,6.84438012 7.61062527,6.69781016 7.5571875,6.57114286 C7.50374973,6.44447556 7.42893798,6.33771472 7.33275,6.25085714 C7.23656202,6.16399957 7.11721946,6.09704785 6.97471875,6.05 C6.83221804,6.00295215 6.6754696,5.97942857 6.50446875,5.97942857 L4.70896875,5.97942857 L4.70896875,8.04228571 L6.50446875,8.04228571 Z M5.87390625,9.16057143 L4.70896875,9.16057143 L4.70896875,12.4285714 L3.56540625,12.4285714 L3.56540625,4.82857143 L6.50446875,4.82857143 C6.86784557,4.82857143 7.19381106,4.87923759 7.482375,4.98057143 C7.77093894,5.08190527 8.01318652,5.22847523 8.209125,5.42028571 C8.40506348,5.6120962 8.55290575,5.84190342 8.65265625,6.10971429 C8.75240675,6.37752515 8.80228125,6.67428409 8.80228125,7 C8.80228125,7.28228713 8.76665661,7.54104644 8.69540625,7.77628571 C8.62415589,8.01152499 8.51728196,8.21961814 8.37478125,8.40057143 C8.23228054,8.58152471 8.05593855,8.73171369 7.84575,8.85114286 C7.63556145,8.97057203 7.3950951,9.05561879 7.12434375,9.10628571 L9.04809375,12.4285714 L7.76559375,12.4285714 L5.87390625,9.16057143 Z M12.3719062,12.5371429 C12.7566582,12.5371429 13.100436,12.4864767 13.40325,12.3851429 C13.706064,12.283809 13.9625614,12.1390486 14.17275,11.9508571 C14.3829386,11.7626657 14.5432494,11.5400965 14.6536875,11.2831429 C14.7641256,11.0261892 14.8193437,10.7457158 14.8193437,10.4417143 C14.8193437,10.1377128 14.7819379,9.8626679 14.707125,9.61657143 C14.6323121,9.37047496 14.5200945,9.15514378 14.3704687,8.97057143 C14.220843,8.78599908 14.0338136,8.62857208 13.809375,8.49828571 C13.5849364,8.36799935 13.3230952,8.26666703 13.0238437,8.19428571 L11.7413437,7.87942857 C11.6130931,7.85047605 11.497313,7.80885741 11.394,7.75457143 C11.290687,7.70028544 11.2016254,7.63152423 11.1268125,7.54828571 C11.0519996,7.4650472 10.9950002,7.36733389 10.9558125,7.25514286 C10.9166248,7.14295182 10.8970312,7.01447691 10.8970312,6.86971429 C10.8970312,6.72495166 10.9219685,6.59104823 10.9718437,6.468 C11.021719,6.34495177 11.098312,6.23819093 11.201625,6.14771429 C11.304938,6.05723764 11.4367492,5.98847643 11.5970625,5.94142857 C11.7573758,5.89438072 11.9444052,5.87085714 12.1581562,5.87085714 C12.3362821,5.87085714 12.5019367,5.89257121 12.655125,5.936 C12.8083133,5.97942879 12.9436869,6.04457099 13.06125,6.13142857 C13.1788131,6.21828615 13.2785621,6.32323748 13.3605,6.44628571 C13.4424379,6.56933395 13.5012186,6.70685638 13.5368437,6.85885714 L14.7017812,6.85885714 C14.659031,6.54037936 14.5717507,6.24904894 14.4399375,5.98485714 C14.3081243,5.72066535 14.1335636,5.49447713 13.91625,5.30628571 C13.6989364,5.1180943 13.442439,4.97333384 13.14675,4.872 C12.851061,4.77066616 12.5179706,4.72 12.1474687,4.72 C11.8125921,4.72 11.4990952,4.76342814 11.2069687,4.85028571 C10.9148423,4.93714329 10.6583449,5.07104671 10.4374687,5.252 C10.2165926,5.43295329 10.0438131,5.6591415 9.919125,5.93057143 C9.79443688,6.20200136 9.73209375,6.51504585 9.73209375,6.86971429 C9.73209375,7.13752515 9.76593716,7.38904644 9.833625,7.62428571 C9.90131284,7.85952499 10.0010618,8.06942765 10.132875,8.254 C10.2646882,8.43857235 10.4267803,8.59418984 10.6191562,8.72085714 C10.8115322,8.84752444 11.0288425,8.93980923 11.2710937,8.99771429 L12.5963437,9.32342857 C12.7815947,9.36685736 12.9419056,9.42295204 13.0772812,9.49171429 C13.2126569,9.56047653 13.3230933,9.64009479 13.4085937,9.73057143 C13.4940942,9.82104807 13.5564373,9.92238039 13.595625,10.0345714 C13.6348127,10.1467625 13.6544062,10.2752374 13.6544062,10.42 C13.6544062,10.5647626 13.6259065,10.6968565 13.5689062,10.8162857 C13.511906,10.9357149 13.4264068,11.0388567 13.3124062,11.1257143 C13.1984057,11.2125719 13.0648133,11.2777141 12.911625,11.3211429 C12.7584367,11.3645716 12.5856572,11.3862857 12.3932812,11.3862857 C12.1724051,11.3862857 11.9729071,11.3573336 11.7947812,11.2994286 C11.6166554,11.2415235 11.4581257,11.1564768 11.3191875,11.0442857 C11.1802493,10.9320947 11.0662504,10.7945722 10.9771875,10.6317143 C10.8881246,10.4688563 10.822219,10.2824772 10.7794687,10.0725714 L9.61453125,10.0725714 C9.64303139,10.4272399 9.72318684,10.7547604 9.855,11.0551429 C9.98681316,11.3555253 10.1684988,11.6160941 10.4000625,11.8368571 C10.6316262,12.0576202 10.9130608,12.2295232 11.244375,12.3525714 C11.5756892,12.4756197 11.9515291,12.5371429 12.3719062,12.5371429 Z",
    id: "rs"
  }))))), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
}; // invoiceOld.propTypes = {
//   fillColor: PropTypes.string.isRequired
// };

/* harmony default export */ var iconfiles_invoiceOld = (invoiceOld_invoiceOld);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/internet.js


var internet_internet = function internet(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 51 54",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd",
    transform: "translate(-7.000000, -3.000000)"
  }, external_react_default.a.createElement("path", {
    d: "M45.4203155,33.3465952 L38.7879855,33.3465952 C38.6864611,29.8786147 38.1464949,26.6410747 37.2399627,24.1277765 C36.9671345,23.372111 36.6790327,22.7271768 36.382246,22.1777108 C41.2784784,23.7144798 44.9312612,28.0787843 45.4203155,33.3465952 Z M36.3705662,46.9333097 C36.6715457,46.378756 36.9635407,45.7260407 37.2402621,44.9596014 C38.1464949,42.4457046 38.6864611,39.2081646 38.7879855,35.7407827 L45.4218129,35.7407827 C44.9396467,41.0214623 41.2787779,45.398037 36.3705662,46.9333097 Z M19.5789059,35.7407827 L26.2127333,35.7407827 C26.3142577,39.2078653 26.8545234,42.4454053 27.7616546,44.9599007 C28.038376,45.7263399 28.3306705,46.3793546 28.6319495,46.9342075 C23.7228393,45.3989348 20.061072,41.0220609 19.5789059,35.7407827 Z M28.6199702,22.1771122 C28.322884,22.7268775 28.0344827,23.3715125 27.7616546,24.1274772 C26.8545234,26.641374 26.3142577,29.878914 26.2127333,33.3465952 L19.5804033,33.3465952 C20.0694575,28.0781857 23.7231388,23.713582 28.6199702,22.1771122 Z M28.6091888,33.3465952 C28.8278107,26.1281201 30.9885739,21.5845508 32.5012578,21.5845508 C34.0133428,21.5845508 36.172908,26.1281201 36.3915299,33.3465952 L28.6091888,33.3465952 Z M32.5012578,47.5049219 C30.9885739,47.5049219 28.8278107,42.9601556 28.6091888,35.7407827 L36.3915299,35.7407827 C36.172908,42.9601556 34.0133428,47.5049219 32.5012578,47.5049219 Z M37.6421072,5.12903119 L58,25.4562811 L58,57 L7,57 L7,25.4562811 L27.3581923,5.12903119 C28.7325155,3.75596469 30.5584577,3 32.5002995,3 C34.4421412,3 36.2680834,3.75596469 37.6421072,5.12903119 Z M55.6041434,54.6058126 L55.6041434,26.4483726 L35.9488355,6.82261953 L36.626264,6.14506448 L35.9485361,6.82232026 C35.0270297,5.90145591 33.802148,5.39418744 32.5002995,5.39418744 C31.1981514,5.39418744 29.9735692,5.90145591 29.0517634,6.82232026 L28.4162625,6.18756131 L29.0514639,6.82261953 L9.39585658,26.4483726 L9.39585658,54.6058126 L55.6041434,54.6058126 Z M32.5234195,19.1906627 C32.5635501,19.1909619 32.6039802,19.1918598 32.6450092,19.1939547 C41.0556637,19.272065 47.8742716,26.1308135 47.8742716,34.553565 C47.8742716,43.025098 40.9774989,49.9167665 32.5000599,49.9167665 C24.0229204,49.9167665 17.1261477,43.025098 17.1261477,34.553565 C17.1261477,26.1293172 23.9468519,19.2699701 32.3593033,19.1936554 C32.3958401,19.192159 32.4320775,19.1912612 32.4680153,19.1909619 C32.4787967,19.1909619 32.4892785,19.1900641 32.5000599,19.1900641 C32.5078464,19.1900641 32.515633,19.1906627 32.5234195,19.1906627 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/landline.js



var landline_landline = function landline(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 22 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("defs", null, external_react_default.a.createElement("path", {
    d: "M8.4,14.4 L9.6,14.4 L9.6,15.6 L8.4,15.6 L8.4,14.4 Z M8.4,12 L9.6,12 L9.6,13.2 L8.4,13.2 L8.4,12 Z M15.6,16.8 L16.8,16.8 L16.8,18 L15.6,18 L15.6,16.8 Z M15.6,12.12 L14.4,12.12 L14.4,3.48 C14.4,2.76 13.92,2.28 13.2,2.28 L6,2.28 L6,0 L3.6,0 L3.6,3.48 L3.6,4.32 L3.6,12.48 C1.44,13.44 0,15.6 0,18 C0,21.24 2.64,24 6,24 L15.6,24 C18.96,24 21.6,21.36 21.6,18 C21.6,14.64 18.84,12.12 15.6,12.12 Z M6,10.8 L12,10.8 L12,16.92 L6,16.92 L6,10.8 Z M12,8.4 L6,8.4 L6,4.68 L12,4.68 L12,8.4 Z M15.6,21.6 L6,21.6 C3.96,21.6 2.4,20.04 2.4,18 C2.4,16.92 2.88,15.96 3.6,15.36 L3.6,18.12 C3.6,18.84 4.08,19.32 4.8,19.32 L13.2,19.32 C13.92,19.32 14.4,18.84 14.4,18.12 L14.4,14.52 L15.6,14.52 C17.64,14.52 19.2,16.08 19.2,18.12 C19.2,20.16 17.52,21.6 15.6,21.6 Z",
    id: "path-landline"
  })), external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, external_react_default.a.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, external_react_default.a.createElement("use", {
    xlinkHref: "#path-landline"
  })), external_react_default.a.createElement("use", {
    id: "Mask",
    fill: fillColor,
    fillRule: "nonzero",
    xlinkHref: "#path-landline"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};


/* harmony default export */ var iconfiles_landline = (landline_landline);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/landlineInstallation.js


var landlineInstallation_landlineInstallation = function landlineInstallation(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.2 3C18.5 3 19.7 3.5 20.6 4.4C21.5 5.3 22 6.6 22 7.8C22 9 21.5 10.2 20.6 11.1L19.2 9.7C19.7 9.2 20 8.6 20 7.8C20 7 19.7 6.3 19.1 5.8C18 4.7 16.3 4.7 15.2 5.8L13.8 4.4C14.7 3.5 15.9 3 17.2 3ZM17.9 7.2L16.3 11.4L15.7 9.4L13.7 8.8L17.9 7.2ZM18.3 14.6C17.4 14.1 14.7 13.2 12.9 13.3C12.2 13.3 11.6 13.6 11.2 14.2C10.6 13.7 10 13.1 9.5 12.5C10.1 12.1 10.4 11.7 10.5 10.8C10.5 10.8 11 3.4 6.8 4.5C3.9 5.3 2 7.7 2 10.5C2 10.8314 2.06863 11.0941 2.14903 11.4019C2.16569 11.4657 2.18284 11.5314 2.2 11.6C2.7 13.6 6.9 20.5 12.2 21.7C12.6 21.8 13 21.8 13.4 21.8C16.3 21.8 18.7 19.8 19.4 17V16.8C19.6 15.9 19.2 15.1 18.3 14.6ZM7.5 16.4C8.7 17.6 11.1 19.8 13.4 19.9C16.9 20.1 17.4 16.4 17.4 16.4C15.1 15 13.1 15.3 13.1 15.3L12.3 17.1C9.9 16 8 14.1 6.9 11.7L8.7 10.8C8.8 10 8.2 6.1 7.4 6.3C5.7 6.7 4.2 8.4 4.2 10.4C4.2 12.6 6.3 15.2 7.5 16.4Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_landlineInstallation = (landlineInstallation_landlineInstallation);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/like.js


var like_like = function like(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 19"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M0 19h1.976c.544 0 .989-.475.989-1.056v-9.5c0-.58-.445-1.055-.989-1.055H0V19zm19.596-7.516c.109-.263.168-.548.168-.844V9.5c0-1.161-.89-2.111-1.976-2.111h-5.435l.909-4.908c.05-.233.02-.486-.08-.697a5.072 5.072 0 0 0-.869-1.288L11.86 0 5.524 6.766c-.375.401-.583.94-.583 1.499v8.276C4.941 17.89 5.98 19 7.253 19h8.015c.692 0 1.344-.39 1.7-1.024l2.628-6.492z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_like = (like_like);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/loading.js


var loading_loading = function loading(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 28 28",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    stroke: fillColor,
    strokeWidth: "3px",
    fillRule: "evenodd",
    strokeLinejoin: "round"
  }, external_react_default.a.createElement("path", {
    fill: "none",
    d: "M14,26 C20.627417,26 26,20.627417 26,14 C26,7.45771278 20.7645532,2.13822969 14.2547595,2.00265064 C14.1700525,2.00088646 14.0851298,2 14,2 C7.372583,2 2,7.372583 2,14"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_loading = (loading_loading);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/localization_pin.js


var localization_pin_localization_pin = function localization_pin(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 11.2C5 5.008 10.008 0 16.2 0C22.392 0 27.4 5.008 27.4 11.2C27.4 19.6 16.2 32 16.2 32C16.2 32 5 19.6 5 11.2ZM12.2 11.2C12.2 13.408 13.992 15.2 16.2 15.2C18.408 15.2 20.2 13.408 20.2 11.2C20.2 8.992 18.408 7.2 16.2 7.2C13.992 7.2 12.2 8.992 12.2 11.2Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_localization_pin = (localization_pin_localization_pin);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/lupa.js


var lupa_lupa = function lupa(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 20 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("defs", null, external_react_default.a.createElement("path", {
    d: "M9.5,5 C8.12,5 7,6.12 7,7.5 C7,8.88 8.12,10 9.5,10 C10.88,10 12,8.88 12,7.5 C12,6.12 10.88,5 9.5,5 Z M18,0 L2,0 C0.9,0 0,0.9 0,2 L0,14 C0,15.1 0.9,16 2,16 L18,16 C19.1,16 20,15.1 20,14 L20,2 C20,0.9 19.1,0 18,0 Z M14.79,14.21 L11.88,11.3 C11.19,11.74 10.37,12 9.49,12 C7.01,12 5,9.99 5,7.5 C5,5.01 7.01,3 9.5,3 C11.99,3 14,5.01 14,7.5 C14,8.38 13.74,9.19 13.3,9.89 L16.21,12.79 L14.79,14.21 Z",
    id: "path-lupa"
  })), external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, external_react_default.a.createElement("g", {
    id: "Interface/Lupa",
    transform: "translate(-2.000000, -4.000000)"
  }, external_react_default.a.createElement("g", {
    id: "\u21B3-Cor",
    transform: "translate(2.000000, 4.000000)"
  }, external_react_default.a.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, external_react_default.a.createElement("use", {
    xlinkHref: "#path-lupa"
  })), external_react_default.a.createElement("use", {
    id: "Mask",
    fill: fillColor,
    fillRule: "nonzero",
    xlinkHref: "#path-lupa"
  })))), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_lupa = (lupa_lupa);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/lupa-thin.js


var lupa_thin_lupa_thin = function lupa_thin(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "-10 692 10 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M-9.8,701.8c0.3,0.3,0.8,0.3,1.1,0l1.6-1.6c0.1-0.1,0.1-0.1,0.2-0.2c0.7,0.5,1.6,0.8,2.5,0.8 c2.4,0,4.4-2,4.4-4.4c0-2.4-2-4.4-4.4-4.4s-4.4,2-4.4,4.4c0,0.9,0.3,1.8,0.8,2.5c-0.1,0-0.2,0.1-0.2,0.2l-1.6,1.6 C-10.1,701-10.1,701.5-9.8,701.8z M-8.1,696.4c0-2,1.6-3.7,3.7-3.7s3.7,1.6,3.7,3.7s-1.6,3.7-3.7,3.7S-8.1,698.4-8.1,696.4z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_lupa_thin = (lupa_thin_lupa_thin);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/menu.js


var menu_menu = function menu(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), external_react_default.a.createElement("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
    fill: fillColor
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_menu = (menu_menu);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/mobile.js


var mobile_mobile = function mobile(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 16 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("defs", null, external_react_default.a.createElement("path", {
    d: "M7.33668342,19.1758794 L8.54271357,19.1758794 L8.54271357,20.3819095 L7.33668342,20.3819095 L7.33668342,19.1758794 Z M12.040201,0 L3.83919598,0 C1.78894472,0 0.221105528,1.5678392 0.221105528,3.61809045 L0.221105528,20.3819095 C0.221105528,22.4321608 1.78894472,24 3.83919598,24 L12.160804,24 C14.2110553,24 15.7788945,22.4321608 15.7788945,20.3819095 L15.7788945,3.61809045 C15.6582915,1.5678392 14.0904523,0 12.040201,0 Z M3.83919598,2.4120603 L12.160804,2.4120603 C12.7638191,2.4120603 13.2462312,2.89447236 13.3668342,3.37688442 C13.3668342,4.30711112 13.3668342,4.77222446 13.3668342,4.77222446 C13.3668342,4.77222446 2.63316583,4.77222446 2.63316583,4.77222446 C2.63316583,4.77222446 2.63316583,4.30711112 2.63316583,3.37688442 C2.75376884,2.77386935 3.2361809,2.4120603 3.83919598,2.4120603 Z M13.2462312,6.99497487 L13.2462312,15.678392 L2.63316583,15.678392 L2.63316583,6.99497487 L13.2462312,6.99497487 Z M12.040201,21.4673367 L3.83919598,21.4673367 C3.11557789,21.4673367 2.63316583,20.9849246 2.63316583,20.2613065 L2.63316583,17.9698492 L13.3668342,17.9698492 L13.3668342,20.2613065 C13.2462312,20.9849246 12.7638191,21.4673367 12.040201,21.4673367 Z",
    id: "path-mobile"
  })), external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, external_react_default.a.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, external_react_default.a.createElement("use", {
    xlinkHref: "#path-mobile"
  })), external_react_default.a.createElement("use", {
    id: "Mask",
    fill: fillColor,
    fillRule: "nonzero",
    xlinkHref: "#path-mobile"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_mobile = (mobile_mobile);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/mobileB.js


var mobileB_mobileB = function mobileB(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 30 51",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    class: "icon-smartphone",
    fill: fillColor,
    "fill-rule": "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M1.535 40.467h26.93V10.196H1.535v30.271zm26.93 4.61c0 .163-.217 4.108-4.39 4.423H6.157c-.689 0-4.13-.21-4.62-4.275v-3.258h26.929v3.11zM1.535 5.864c.016-.163.309-3.974 4.084-4.365h18.747c.138 0 3.514.151 4.099 4.322v2.875H1.535V5.865zM24.381 0H5.53C1.397.435.107 3.975 0 5.822v39.493C.677 50.837 5.604 51 6.156 51h17.98c4.452-.33 5.786-3.974 5.864-5.895V5.717C29.232.137 24.44 0 24.381 0z"
  }), external_react_default.a.createElement("path", {
    d: "M14.348 45.401c0-.685.586-1.242 1.305-1.242.72 0 1.304.557 1.304 1.242 0 .693-.584 1.245-1.304 1.245-.719 0-1.305-.552-1.305-1.245zM13.043 4.976h3.914V3.732h-3.914z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_mobileB = (mobileB_mobileB);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/mobileC.js


var mobileC_mobileC = function mobileC(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 40 40",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fillColor
  }, external_react_default.a.createElement("g", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "m28.397 0h-16.794a2.94 2.94 0 0 0 -2.936 2.937v34.126a2.94 2.94 0 0 0 2.936 2.937h16.793a2.94 2.94 0 0 0 2.937-2.937v-34.126a2.94 2.94 0 0 0 -2.936-2.937zm-18.397 5.333h20v25.334h-20zm1.603-4h16.793c.885 0 1.604.72 1.604 1.604v1.063h-20v-1.063c0-.884.72-1.604 1.603-1.604zm16.794 37.334h-16.794c-.884 0-1.603-.72-1.603-1.604v-5.063h20v5.063c0 .884-.72 1.604-1.603 1.604z"
  }), external_react_default.a.createElement("path", {
    d: "m20 32.667a2.67 2.67 0 0 0 -2.667 2.666 2.67 2.67 0 0 0 2.667 2.667 2.67 2.67 0 0 0 2.667-2.667 2.67 2.67 0 0 0 -2.667-2.666zm0 4a1.335 1.335 0 0 1 -1.333-1.334c0-.735.598-1.333 1.333-1.333s1.333.598 1.333 1.333c0 .736-.598 1.334-1.333 1.334z"
  }), external_react_default.a.createElement("path", {
    d: "m17.333 3.333h2.667a.666.666 0 1 0 0-1.333h-2.667a.666.666 0 1 0 0 1.333z"
  }), external_react_default.a.createElement("path", {
    d: "m22 3.333h.667a.666.666 0 1 0 0-1.333h-.667a.666.666 0 1 0 0 1.333z"
  }), external_react_default.a.createElement("path", {
    d: "m37.741 3.046a.666.666 0 1 0 -.942.943 6.396 6.396 0 0 1 0 9.034.666.666 0 1 0 .942.943c3.011-3.01 3.011-7.91 0-10.92z"
  }), external_react_default.a.createElement("path", {
    d: "m34.934 4.563a.666.666 0 1 0 -.943.943 4.344 4.344 0 0 1 1.279 3.093c0 1.169-.454 2.267-1.279 3.092a.666.666 0 1 0 .943.942 5.666 5.666 0 0 0 1.67-4.034c0-1.526-.593-2.96-1.67-4.036z"
  }), external_react_default.a.createElement("path", {
    d: "m3.201 3.989a.666.666 0 1 0 -.942-.943c-3.011 3.01-3.011 7.91 0 10.92a.665.665 0 0 0 .942 0 .666.666 0 0 0 0-.943 6.395 6.395 0 0 1 0-9.034z"
  }), external_react_default.a.createElement("path", {
    d: "m6.009 4.38a.666.666 0 0 0 -.943 0 5.666 5.666 0 0 0 -1.67 4.034c0 1.525.593 2.959 1.67 4.035a.665.665 0 0 0 .943 0 .666.666 0 0 0 0-.942 4.344 4.344 0 0 1 -1.279-3.093 4.34 4.34 0 0 1 1.279-3.092.667.667 0 0 0 0-.943z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_mobileC = (mobileC_mobileC);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/money.js


var money_money = function money(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M13.8 10.3L11.1 9.6C10.2 9.4 9.4 8.9 9.4 8C9.4 6.8 10.4 6.3 11.7 6.3C12.8 6.3 13.9 6.8 14.2 7.9H17.5C17.2 5.6 15.7 3.8 13.4 3.3V1H10.7V3.1C8.3 3.4 6.2 5 6.2 7.9C6.2 10.4 7.5 12.2 10 12.8L12.9 13.6C14.1 13.9 14.6 14.4 14.6 15.4C14.6 16.5 13.6 17.1 12.2 17.1C10.6 17.1 9.5 16.2 9.3 14.8H6C6.1 17.6 7.9 19.6 10.8 20.1V22.2H13.5V20.1C16.3 19.7 17.9 18 17.9 15.3C17.8 12.6 16.4 11 13.8 10.3Z",
    fill: fillColor
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_money = (money_money);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/play.js


var play_play = function play(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    fill: fillColor,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.4095 2.5H20.4995C21.6452 2.5 22.5045 3.35928 22.6 4.4095V14.8163C22.6 15.8665 21.6452 16.7258 20.595 16.7258H15.8213L16.3941 18.8262H19.6403V20.7357H4.36425V18.8262H7.70588L8.27873 16.8213H3.50498C2.35928 16.8213 1.5 15.962 1.5 14.9118V4.4095C1.5 3.35928 2.35928 2.5 3.4095 2.5ZM9.71086 18.6353H14.2937L13.8163 16.7258H10.1882L9.71086 18.6353ZM20.4995 14.8163H15.2484H8.75611L3.4095 14.9118V4.4095H20.595L20.4995 14.8163ZM15.8213 10.0425L10.0928 13.0977V6.98733L15.8213 10.0425Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_play = (play_play);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/paper.js


var paper_paper = function paper(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 16 20",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M10,0 L16,6 L16,18 C16,19.1 15.1,20 14,20 L1.99,20 C0.89,20 0,19.1 0,18 L0.01,2 C0.01,0.9 0.9,0 2,0 L10,0 Z M12,16 L12,14 L4,14 L4,16 L12,16 Z M12,12 L12,10 L4,10 L4,12 L12,12 Z M9,7 L14.5,7 L9,1.5 L9,7 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_paper = (paper_paper);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/people.js


var people_people = function people(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.984 9.8C15.984 12.456 13.856 14.6 11.2 14.6C8.544 14.6 6.4 12.456 6.4 9.8C6.4 7.144 8.544 5 11.2 5C13.856 5 15.984 7.144 15.984 9.8ZM27.184 12.2C27.184 14.408 25.408 16.2 23.2 16.2C20.992 16.2 19.2 14.408 19.2 12.2C19.2 9.992 20.992 8.2 23.2 8.2C25.408 8.2 27.184 9.992 27.184 12.2ZM23.2 19.4C20.272 19.4 14.4 20.872 14.4 23.8V27.4H32V23.8C32 20.872 26.128 19.4 23.2 19.4ZM0 23.4C0 19.672 7.472 17.8 11.2 17.8C12.256 17.8 13.6 17.96 14.992 18.248C11.728 20.056 11.2 22.44 11.2 23.8V27.4H0V23.4Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_people = (people_people);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/plus.js


var plus_plus = function plus(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("polygon", {
    id: "path-1",
    points: "13.2 0 10.5333333 0 10.5333333 10.5333333 0 10.5333333 0 13.2 10.5333333 13.2 10.5333333 23.7333333 13.2 23.7333333 13.2 13.2 23.7333333 13.2 23.7333333 10.5333333 13.2 10.5333333"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_plus = (plus_plus);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/power.js


var power_power = function power(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M18,1.63586599 C21.5770743,3.73387832 24,7.62756703 24,12 C24,18.6534653 18.5882353,24 12,24 C5.41176471,24 0,18.6534653 0,12 C0,7.23131892 2.88197586,3.03208551 7,1.11069655 L7,3.92244273 C4.30635402,5.59265899 2.5,8.57392554 2.5,12 C2.5,17.2777778 6.78658537,21.5 12,21.5 C17.2134146,21.5 21.5,17.2777778 21.5,12 C21.5,9.01767441 20.131265,6.37239468 18,4.63552659 L18,1.63586599 Z M11,0 L14,0 L14,13 L11,13 L11,0 Z",
    id: "path-1"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_power = (power_power);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/product-bandalarga.js


var product_bandalarga_product_bandalarga = function product_bandalarga(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 34 35",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M20.48 1.435c-1.943-1.913-5.313-1.913-7.387 0L0 14.322v20.67h33.704V14.32L20.48 1.435zM31.11 32.44H2.594V15.47L15.037 3.222c1.037-1.02 2.722-1.02 3.63 0L31.11 15.47v16.97zm-14.258-22.2c-5.574 0-10.24 4.464-10.24 10.078 0 5.486 4.536 10.08 10.24 10.08 5.704 0 10.24-4.466 10.24-10.08 0-5.486-4.666-10.08-10.24-10.08zm2.074 8.93h-4.148c.26-4.338 1.555-6.635 2.074-6.635.518 0 1.944 2.297 2.074 6.635zm-2.074 8.93c-.52 0-1.945-2.296-2.074-6.634h4.148c-.13 4.338-1.556 6.635-2.074 6.635zm-3.24-14.927c-.65 1.66-1.038 3.828-1.168 5.997h-3.5c.52-2.68 2.204-4.848 4.667-5.997zm-4.668 8.293h3.5c.13 2.17.52 4.338 1.167 5.997-2.462-1.02-4.277-3.317-4.666-5.997zm11.15 5.997c.647-1.66 1.036-3.828 1.165-5.997h3.5c-.39 2.68-2.204 4.976-4.667 5.997zm4.665-8.293h-3.5c-.13-2.17-.52-4.338-1.167-5.997 2.463 1.15 4.148 3.318 4.666 5.997z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_product_bandalarga = (product_bandalarga_product_bandalarga);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/product-fixo.js


var product_fixo_product_fixo = function product_fixo(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 34 39",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M24.63 20.645h-2.593V3.87H9.074V0H6.48v21.032C2.723 22.194 0 25.548 0 29.677c0 5.033 4.02 9.033 9.074 9.033H24.63c5.055 0 9.074-4 9.074-9.033 0-4.903-4.02-9.032-9.074-9.032zm-5.186-7.742H9.074v-6.45h10.37v6.45zm5.186 15.484h2.592v2.58H24.63v-2.58zM9.074 15.484h10.37v12.903H9.074V15.485zM24.63 36.13H9.074c-3.63 0-6.48-2.84-6.48-6.453 0-2.58 1.554-4.903 3.887-5.935v7.226h15.557v-7.742h2.593c3.63 0 6.48 2.84 6.48 6.45 0 3.614-2.85 6.453-6.48 6.453zM12.963 23.225h2.593v2.58h-2.593v-2.58zm0-5.16h2.593v2.58h-2.593v-2.58z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_product_fixo = (product_fixo_product_fixo);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/product-fixoB.js


var product_fixoB_product_fixoB = function product_fixoB(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 40 40",
    xmlns: "http://www.w3.org/2000/svg",
    fill: fillColor
  }, external_react_default.a.createElement("g", {
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "a",
    fill: fillColor,
    d: "m23.633 21.624h1.78c5.016 0 9.097 4.122 9.097 9.188s-4.081 9.188-9.097 9.188h-16.316c-5.017 0-9.097-4.122-9.097-9.188 0-4.508 3.232-8.266 7.478-9.04v-21.772h1.878v3.085h14.277zm-14.536 16.479h16.316c3.98 0 7.218-3.27 7.218-7.291 0-4.02-3.238-7.291-7.218-7.291h-1.78v8.24h-16.155v-8.053c-3.203.745-5.6 3.646-5.6 7.104 0 4.02 3.239 7.29 7.219 7.29zm16.995-7.291c0-.759.61-1.373 1.36-1.373.751 0 1.36.614 1.36 1.373 0 .758-.609 1.373-1.36 1.373-.75 0-1.36-.615-1.36-1.373zm-16.736-17.428h12.398v-8.402h-12.398zm0 16.48h12.398v-14.584h-12.398v14.582zm7.219-5.232c0-.758.609-1.373 1.36-1.373.75 0 1.36.615 1.36 1.373 0 .759-.61 1.374-1.36 1.374-.751 0-1.36-.615-1.36-1.374zm-4.759 0c0-.758.609-1.373 1.36-1.373.75 0 1.36.615 1.36 1.373 0 .759-.61 1.374-1.36 1.374-.751 0-1.36-.615-1.36-1.374zm4.759-4.806c0-.759.609-1.374 1.36-1.374.75 0 1.36.615 1.36 1.374 0 .758-.61 1.373-1.36 1.373-.751 0-1.36-.615-1.36-1.373zm-4.759 0c0-.759.609-1.374 1.36-1.374.75 0 1.36.615 1.36 1.374 0 .758-.61 1.373-1.36 1.373-.751 0-1.36-.615-1.36-1.373z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_product_fixoB = (product_fixoB_product_fixoB);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/product-pos.js


var product_pos_product_pos = function product_pos(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 25 34",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M19.924 0c2.792 0 4.95 2.242 5.076 4.982v24.036C25 31.758 22.716 34 19.924 34H5.076C2.284 34 0 31.758 0 29.018V4.982C0 2.242 2.284 0 5.076 0h14.848zm2.41 29.018V4.982c0-1.37-1.14-2.49-2.537-2.49H4.95c-1.397 0-2.54 1.12-2.54 2.49v24.036c0 1.37 1.143 2.49 2.54 2.49h14.847c1.396 0 2.538-1.12 2.538-2.49zM11 26h3v3h-3v-3z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_product_pos = (product_pos_product_pos);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/product-tv-HD.js


var product_tv_HD_product_tvhd = function product_tvhd(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M76.8,12.5H54l8.4-8.4l-2.5-2.5l-9.5,9.5l-9.5-9.5l-2.5,2.5l8.6,8.6H23.2C10.5,12.6,0,22.9,0,35.9v39.3   c0,12.6,10.1,23.1,23.1,23.2h53.7c12.8,0,23.2-10.3,23.2-23.2V35.7C100,22.8,89.7,12.5,76.8,12.5z M21.5,94.4   c-8.1-0.8-15-6.6-17.2-14.2h17.2V94.4z M37.6,94.4H25.1V80h12.5V94.4z M76.9,94.4H41V80h54.9C93.6,88.5,86,94.4,76.9,94.4z    M96.7,74.7c0,0.8,0,1.7-0.2,2.5v-0.6H3.9c0-0.6-0.2-1.2-0.2-1.9V35.4c0-11.1,8.9-19.7,19.7-19.7h53.7c11.1,0,19.7,8.9,19.7,19.7   V74.7z"
  }), external_react_default.a.createElement("circle", {
    cx: "75.2",
    cy: "87.4",
    r: "2.7"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var product_tv_HD = (product_tv_HD_product_tvhd);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/product-tv.js


var product_tv_product_tv = function product_tv(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M28.6 4.81h-7.28l2.99-2.99L22.49 0l-3.64 3.64L15.21 0l-1.82 1.82 2.99 2.99H9.1c-5.07 0-9.1 4.03-9.1 9.1v14.3c0 4.94 4.03 8.97 8.97 9.1H28.6c5.07 0 9.1-4.03 9.1-9.1v-14.3c0-5.07-4.03-9.1-9.1-9.1zm0 29.9H9.23c-3.12 0-5.85-2.21-6.5-5.2h32.24c-.65 2.86-3.25 5.2-6.37 5.2zm6.5-7.8H2.6v-13c0-3.64 2.86-6.5 6.5-6.5h19.5c3.64 0 6.5 2.86 6.5 6.5v13zm-9.1 3.9h2.6v2.6H26v-2.6z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_product_tv = (product_tv_product_tv);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/protecao.js


var protecao_protecao = function protecao(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 36 45",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("polygon", {
    points: "21.2732727 4.30390909 33.8787879 4.30390909 33.8787879 33.0800303 16.9771818 42.4188485 0 33.0800303 0 4.30390909 12.6615455 4.30390909 16.9667576 0"
  }), external_react_default.a.createElement("path", {
    fill: "#fff",
    d: "M25.8924848,29.4324848 C25.8924848,24.9552727 22.2635455,22 17.7837273,22 L17.1087576,22 C12.6315455,22 9,24.9552727 9,29.4324848 L25.8924848,29.4324848 Z"
  }), external_react_default.a.createElement("path", {
    fill: "#fff",
    d: "M22.8112424,16.4049697 C22.8112424,19.3902121 20.3915152,21.8099394 17.4062727,21.8099394 C14.4210303,21.8099394 12,19.3902121 12,16.4049697 C12,13.4197273 14.4210303,11 17.4062727,11 C20.3915152,11 22.8112424,13.4197273 22.8112424,16.4049697 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_protecao = (protecao_protecao);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/protocol.js


var protocol_protocol = function protocol(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 7.1H19V4C19 2.9 18.1 2 17 2H4C2.9 2 2 2.9 2 4V21C2 22.1 2.9 23 4 23H17C18.1 23 19 22.1 19 21V18H20C21.1 18 22 17.1 22 16V9.1C22 8 21.1 7.1 20 7.1ZM15.5 9.7H16.5L16.1 11.1H16.6V12.1H15.8L15.6 12.9H16.4V13.9H15.4L15 15.3H14L14.4 13.9H13.4L13 15.3H12L12.4 13.9H11.9V12.9H12.7L12.9 12.1H12.1V11.1H13.1L13.5 9.7H14.5L14.1 11.1H15.1L15.5 9.7ZM4 4V21H17V18H8C6.9 18 6 17.1 6 16V9.1C6 8 6.9 7.1 8 7.1H17V4H4ZM19 16H17H8V9.1H17H19H20V16H19Z",
    fill: fillColor
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_protocol = (protocol_protocol);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/quebracabeca.js


var quebracabeca_quebracabeca = function quebracabeca(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 10.16 12.80",
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "10.16pt",
    height: "12.80pt"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M4850 12793 c-356 -25 -689 -110 -958 -243 -165 -82 -288 -168 -396 -276 -74 -73 -84 -88 -118 -175 -53 -136 -70 -213 -70 -306 1 -103 26 -165 92 -227 60 -56 132 -92 334 -168 232 -87 316 -135 395 -224 115 -130 162 -380 107 -559 -54 -175 -215 -315 -440 -384 -170 -52 -117 -51 -2025 -51 l-1774 0 6 -1787 c6 -1700 8 -1792 26 -1878 62 -297 227 -498 449 -544 124 -26 293 -6 406 47 148 70 227 183 336 477 67 183 104 256 158 316 65 73 108 92 219 97 77 4 106 0 183 -22 130 -37 227 -81 274 -123 326 -295 541 -856 563 -1468 7 -203 -5 -346 -52 -620 -70 -414 -167 -685 -331 -933 -76 -113 -223 -266 -283 -293 -146 -67 -305 -105 -401 -96 -166 15 -245 107 -356 413 -25 71 -69 174 -97 228 -109 214 -265 306 -522 308 -265 3 -453 -155 -549 -460 l-26 -83 0 -1875 0 -1874 3143 -2 c2631 -3 7007 1 7014 6 7 5 -19 3513 -27 3598 -24 248 -125 459 -274 572 -93 70 -178 96 -322 96 -69 0 -126 -6 -180 -20 -203 -52 -309 -178 -434 -515 -68 -186 -101 -252 -151 -309 -105 -119 -255 -135 -489 -53 -133 46 -171 70 -253 157 -210 223 -369 558 -447 942 -50 242 -69 520 -51 735 13 163 71 508 110 663 86 338 241 629 439 826 56 56 86 77 146 102 127 54 240 82 325 82 196 0 279 -85 396 -405 88 -238 139 -330 229 -413 89 -82 235 -131 387 -132 106 0 172 14 254 54 148 73 259 230 317 448 l23 83 2 1828 3 1827 -1854 0 -1855 0 -83 26 c-354 111 -510 355 -444 696 18 91 42 148 92 214 80 106 179 165 434 261 254 96 322 138 375 234 28 51 30 60 29 164 0 118 -21 203 -84 342 -62 137 -307 327 -570 443 -199 88 -375 136 -695 189 -262 44 -468 58 -655 44z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_quebracabeca = (quebracabeca_quebracabeca);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/recompensa.js


var recompensa_recompensa = function recompensa(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 31 44",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M19.8042056,8.208 L24.4514019,2.808 C24.8803738,2.304 24.9518692,1.584 24.6658879,1.008 C24.3799065,0.432 23.8079439,0 23.164486,0 L7.43551402,0 C6.79205607,0 6.22009346,0.36 5.93411215,1.008 C5.64813084,1.584 5.71962617,2.304 6.14859813,2.808 L10.7957944,8.208 C6.50607477,12.096 0,19.512 0,27.792 C5.08004853e-15,36.288 6.8635514,43.2 15.3,43.2 C23.7364486,43.2 30.6,36.288 30.6,27.792 C30.6,19.44 24.0224299,12.096 19.8042056,8.208 Z M7.29252336,1.8 C7.22102804,1.728 7.22102804,1.584 7.29252336,1.512 C7.29252336,1.44 7.36401869,1.368 7.50700935,1.368 L23.164486,1.368 C23.3074766,1.368 23.378972,1.44 23.378972,1.512 C23.378972,1.584 23.4504673,1.656 23.378972,1.8 L18.5172897,7.488 L12.2257009,7.488 L7.29252336,1.8 Z M15.3,41.76 C7.65,41.76 1.42990654,35.496 1.42990654,27.792 C1.42990654,19.8 8.00747664,12.672 12.0827103,9 L18.5172897,9 C22.5925234,12.672 29.1700935,19.8 29.1700935,27.792 C29.1700935,35.496 22.95,41.76 15.3,41.76 Z"
  }), external_react_default.a.createElement("path", {
    d: "M15.2773312,33.66 L15.2773312,31.6944 C12.9445312,31.5 11.2813312,29.7504 11.0869312,27.0288 L12.7069312,27.0288 C12.9445312,28.7784 13.8517312,29.9232 15.2773312,30.1392 L15.2773312,24.588 L14.3485312,24.2424 C12.4477312,23.5296 11.3461312,22.2336 11.3461312,20.16 C11.3461312,18.216 12.5989312,16.38 15.2773312,16.1856 L15.2773312,14.22 L16.2061312,14.22 L16.2061312,16.1856 C18.1717312,16.38 19.7701312,17.8272 19.8781312,20.2032 L18.2797312,20.2032 C18.1069312,18.7992 17.3077312,17.9352 16.2061312,17.7624 L16.2061312,23.1624 L17.1349312,23.508 C19.0789312,24.2208 20.0725312,25.8192 20.0725312,27.7632 C20.0725312,29.8368 18.9061312,31.5216 16.2061312,31.6944 L16.2061312,33.66 L15.2773312,33.66 Z M12.9661312,20.1384 C12.9661312,21.6288 13.8085312,22.2768 14.7373312,22.6224 L15.2773312,22.8168 L15.2773312,17.7408 C13.6141312,17.9136 12.9661312,18.9288 12.9661312,20.1384 Z M16.6597312,25.1064 L16.2061312,24.9336 L16.2061312,30.1392 C17.6317312,30.0096 18.4525312,29.2104 18.4525312,27.7632 C18.4525312,26.7048 17.9557312,25.5816 16.6597312,25.1064 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_recompensa = (recompensa_recompensa);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/redefinir.js


var redefinir_redefinir = function redefinir(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 32 32",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M0,24.8888889 L0,28.4444444 L10.6666667,28.4444444 L10.6666667,24.8888889 L0,24.8888889 Z M0,3.55555556 L0,7.11111111 L17.7777778,7.11111111 L17.7777778,3.55555556 L0,3.55555556 Z M17.7777778,32 L17.7777778,28.4444444 L32,28.4444444 L32,24.8888889 L17.7777778,24.8888889 L17.7777778,21.3333333 L14.2222222,21.3333333 L14.2222222,32 L17.7777778,32 Z M7.11111111,10.6666667 L7.11111111,14.2222222 L0,14.2222222 L0,17.7777778 L7.11111111,17.7777778 L7.11111111,21.3333333 L10.6666667,21.3333333 L10.6666667,10.6666667 L7.11111111,10.6666667 Z M32,17.7777778 L32,14.2222222 L14.2222222,14.2222222 L14.2222222,17.7777778 L32,17.7777778 Z M21.3333333,10.6666667 L24.8888889,10.6666667 L24.8888889,7.11111111 L32,7.11111111 L32,3.55555556 L24.8888889,3.55555556 L24.8888889,0 L21.3333333,0 L21.3333333,10.6666667 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_redefinir = (redefinir_redefinir);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/rechargeOld.js


var rechargeOld_rechargeOld = function rechargeOld(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    fill: fillColor,
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"
  }), external_react_default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_rechargeOld = (rechargeOld_rechargeOld);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/seguranca.js


var seguranca_seguranca = function seguranca(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 31 39",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("polygon", {
    points: "0.62 38.390625 30.38372 38.390625 30.38372 9.126 0.62 9.126"
  }), external_react_default.a.createElement("path", {
    fill: "#fff",
    d: "M19.57712,21.6768094 C19.57712,23.8864031 17.75184,25.6804031 15.50248,25.6804031 C13.25188,25.6804031 11.4266,23.8864031 11.4266,21.6768094 C11.4266,19.4672156 13.25188,17.6719969 15.50248,17.6719969 C17.75184,17.6719969 19.57712,19.4672156 19.57712,21.6768094 Z"
  }), external_react_default.a.createElement("path", {
    d: "M6.834508,9.12636563 C6.834508,4.42442812 10.716948,0.609740625 15.503348,0.609740625 C20.289748,0.609740625 24.169708,4.42442812 24.169708,9.12636563"
  }), external_react_default.a.createElement("path", {
    fill: "#fff",
    d: "M15.502356,25.6806469 L15.502356,31.0650844"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_seguranca = (seguranca_seguranca);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/services.js


var services_services = function services(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.3816 12.5723L19.3816 12.5723C19.3585 12.7216 19.337 12.8608 19.337 13L21.637 14.7C21.837 14.8 21.837 15.1 21.737 15.3L19.737 18.8C19.637 18.9 19.537 19 19.337 19H19.137L16.637 18C16.137 18.4 15.537 18.8 14.937 19L14.537 21.6C14.537 21.8 14.237 22 14.037 22H10.037C9.73698 22 9.53698 21.8 9.53698 21.6L9.13698 19C8.53698 18.7 7.93698 18.4 7.43698 18L4.93698 19H4.73698C4.53698 19 4.33698 18.9 4.33698 18.7L2.33698 15.2C2.23698 15 2.23698 14.7 2.43698 14.6L4.53698 13C4.43698 12.7 4.43698 12.3 4.43698 12C4.43698 11.7856 4.4657 11.6 4.49236 11.4277C4.51545 11.2785 4.53698 11.1392 4.53698 11L2.43698 9.4C2.23698 9.2 2.13698 8.9 2.23698 8.8L4.23698 5.3C4.33698 5.1 4.53698 5 4.73698 5C4.73698 5 4.83698 5 4.83698 5.1L7.33698 6.1C7.45948 6.01833 7.57782 5.93667 7.69368 5.8567C8.14532 5.545 8.55948 5.25917 9.03698 5.1L9.43698 2.4C9.43698 2.2 9.73698 2 9.93698 2H13.937C14.137 2 14.437 2.2 14.337 2.3L14.737 5C15.337 5.3 15.937 5.6 16.437 6L18.937 5H19.137C19.337 5 19.537 5.1 19.537 5.3L21.537 8.8C21.637 9 21.637 9.3 21.437 9.4L19.337 11C19.437 11.3 19.437 11.7 19.437 12C19.437 12.2144 19.4083 12.4 19.3816 12.5723ZM17.437 12V11.3L17.237 10.2L18.137 9.5L19.237 8.6L18.537 7.4L17.237 7.9L16.137 8.3L15.237 7.6C14.837 7.3 14.437 7.1 14.037 6.9L12.937 6.5L12.837 5.3L12.637 4H11.237L11.037 5.4L10.837 6.5L9.73698 6.9C9.33698 7 8.93698 7.3 8.53698 7.6L7.63698 8.3L6.63698 7.9L5.33698 7.4L4.63698 8.6L5.73698 9.4L6.63698 10.3L6.53698 11.4C6.43698 11.7 6.43698 11.9 6.43698 12.1C6.43698 12.1899 6.45719 12.2798 6.47943 12.3788C6.50668 12.5 6.53698 12.6348 6.53698 12.8L6.63698 13.9L5.73698 14.6L4.63698 15.4L5.33698 16.6L6.63698 16.1L7.73698 15.7L8.63698 16.4C9.03698 16.7 9.43698 16.9 9.83698 17.1L10.937 17.5L11.037 18.6L11.237 20H12.637L12.937 18.5L13.137 17.4L14.237 17C14.637 16.9 15.037 16.6 15.437 16.3L16.337 15.6L17.337 16L18.637 16.5L19.337 15.3L18.237 14.5L17.337 13.8L17.437 12.7V12ZM11.937 8C9.73698 8 7.93698 9.8 7.93698 12C7.93698 14.2 9.73698 16 11.937 16C14.137 16 15.937 14.2 15.937 12C15.937 9.8 14.137 8 11.937 8ZM9.93698 12C9.93698 13.1 10.837 14 11.937 14C13.037 14 13.937 13.1 13.937 12C13.937 10.9 13.037 10 11.937 10C10.837 10 9.93698 10.9 9.93698 12Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_services = (services_services);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/suporte.js


var suporte_suporte = function suporte(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 37 37",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M26.9973757,0.0323709528 C24.0839898,-0.161854764 21.1220475,0.841644801 18.904637,3.05905508 C16.1207351,5.85914231 15.2952756,9.84076986 16.3311463,13.4015745 L1.47287841,28.2598422 C-0.485564293,30.2182846 -0.485564293,33.4068236 1.47287841,35.3652665 C3.43132112,37.3237089 6.60367458,37.3237089 8.56211747,35.3652665 L23.4203852,20.5069988 C26.9811902,21.5428695 30.9628173,20.7335954 33.7629052,17.9335081 C36.708662,14.9715658 37.5179356,10.6824143 36.2069119,6.97594026 C36.0126865,6.40944879 35.1548561,6.215223 34.7178482,6.63604547 L30.2182855,11.1517931 C28.9558181,12.4142606 26.9488194,12.4142606 25.686352,11.1517931 C24.423885,9.8893262 24.423885,7.88232698 25.686352,6.61986002 L30.1859146,2.10411193 C30.6067371,1.66710407 30.4125113,0.825459311 29.8460194,0.615048122 C28.9234472,0.275153104 27.9523187,0.0809273821 26.9973757,0.0323709528 Z M26.8840771,1.84514432 C27.1592306,1.86132977 27.4343836,1.95844266 27.7257221,2.00699909 L24.3915137,5.32502173 C22.4330712,7.28346462 22.4330712,10.4720031 24.3915137,12.430446 C26.3499565,14.3888889 29.5384955,14.3888889 31.4969384,12.430446 L34.8149609,9.11242349 C35.2519688,11.7830269 34.5236224,14.5669288 32.4680669,16.6224843 C30.0240597,19.0826769 26.495626,19.7462815 23.4365706,18.6618544 C23.1128613,18.5323709 22.7244097,18.6294817 22.4816276,18.8722657 L7.28346462,34.0704282 C6.02099767,35.3328951 4.01399831,35.3328951 2.75153108,34.0704282 C1.4890639,32.8079612 1.4890639,30.8171474 2.75153108,29.5384946 L17.949694,14.3403321 C18.1924761,14.09755 18.2734033,13.7252843 18.1762907,13.4015745 C17.0756781,10.3425196 17.7392827,6.79790037 20.1994753,4.35389319 C22.0284342,2.50874887 24.4724413,1.68328956 26.8840771,1.84514432 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_suporte = (suporte_suporte);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/transferir.js


var transferir_transferir = function transferir(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 32 32",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M11.216,19.4 L0,19.4 L0,22.6 L11.216,22.6 L11.216,27.4 L17.6,21 L11.216,14.6 L11.216,19.4 Z M20.784,17.8 L20.784,13 L32,13 L32,9.8 L20.784,9.8 L20.784,5 L14.4,11.4 L20.784,17.8 Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_transferir = (transferir_transferir);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/tv.js


var tv_tv = function tv(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.2 6.1H14.7L17.4 3.4L16 2L12.1 5.8L8.3 2L6.9 3.4L9.6 6.1H4C2.9 6.1 2 6.9 2 8V16.4C2 17.4 2.9 18.3 4 18.3H8.1L7.6 20.1H5.7V22.1H7.1H17.2H18.6V20.1H16.7L16.1 18.2H20.2C21.3 18.2 22.2 17.4 22.2 16.3V8C22.1 6.9 21.2 6.1 20.2 6.1ZM9.7 20.1L10.2 18.3H14L14.5 20.1H9.7ZM4.1 8.2V16.2H20.1V8.2H4.1Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_tv = (tv_tv);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/tvhd.js


var tvhd_tvhd = function tvhd(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 55 52",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    transform: "translate(-5,-8)"
  }, external_react_default.a.createElement("path", {
    d: "M47.2146609,11.8468508 C54.2645123,11.8468508 60,17.5033377 60,24.4560842 L60,45.3907667 C60,52.3435132 54.2645123,58 47.2146609,58 L17.6598743,57.9976205 C10.656469,57.8667452 5,52.2617161 5,45.3907667 L5,24.4560842 C5,17.5033377 10.7354877,11.8468508 17.7853391,11.8468508 L30.0603744,11.8468508 L25.8479563,7.69245465 L27.5540957,6.00981564 L32.4948728,10.8831332 L37.4462059,6 L39.1523453,7.68263901 L34.9299744,11.8468508 L47.2146609,11.8468508 Z M47.2146609,55.6204504 C51.6617223,55.6204504 55.4630625,52.8455981 56.9345587,48.9594962 L28.1578947,48.9594962 L28.1578947,55.6204504 L47.2146609,55.6204504 Z M46.2497889,50.1489735 C47.3156359,50.1489735 48.179714,51.002637 48.179714,52.0523158 C48.179714,53.1037793 47.3156359,53.9553606 46.2497889,53.9553606 C45.1836402,53.9553606 44.3198638,53.1037793 44.3198638,52.0523158 C44.3198638,51.002637 45.1836402,50.1489735 46.2497889,50.1489735 Z M8.07328281,48.9594962 C9.4678716,52.5984224 12.9308189,55.2599486 17.0612024,55.5841623 L17.0612024,48.9594962 L8.07328281,48.9594962 Z M19.4739858,55.6204504 L25.7451114,55.6204504 L25.7451114,48.9594962 L19.4739858,48.9594962 L19.4739858,55.6204504 Z M7.41278336,24.4560842 L7.41278336,45.3907667 C7.41278336,45.793208 7.43932398,46.1897004 7.48607166,46.5799466 L57.5148331,46.5799466 C57.560676,46.1897004 57.5872166,45.793208 57.5872166,45.3907667 L57.5872166,24.4560842 C57.5872166,18.8153618 52.9341639,14.2264004 47.2146609,14.2264004 L17.7853391,14.2264004 C12.0658361,14.2264004 7.41278336,18.8153618 7.41278336,24.4560842 Z",
    id: "path-tvhd"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_tvhd = (tvhd_tvhd);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/twitter.js


var twitter_twitter = function twitter(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 500 500"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M374.2,175.7c0.2,2.6,0.2,5.2,0.2,7.7c0,78.6-59.8,169.2-169.2,169.2c-33.7,0-65-9.8-91.3-26.7c4.8,0.6,9.4,0.7,14.4,0.7 c27.8,0,53.4-9.4,73.8-25.4c-26.1-0.6-48.1-17.7-55.6-41.2c3.7,0.6,7.4,0.9,11.2,0.9c5.3,0,10.7-0.7,15.6-2 c-27.2-5.5-47.7-29.5-47.7-58.4c0-0.2,0-0.6,0-0.7c7.9,4.4,17.1,7.2,26.9,7.5c-16-10.7-26.5-28.9-26.5-49.5c0-11,2.9-21.2,8.1-30 c29.3,36.1,73.3,59.7,122.6,62.2c-0.9-4.4-1.5-9-1.5-13.6c0-32.8,26.5-59.5,59.5-59.5c17.1,0,32.6,7.2,43.5,18.8 c13.4-2.6,26.3-7.5,37.7-14.4c-4.4,13.8-13.8,25.4-26.1,32.8c12-1.3,23.6-4.6,34.2-9.2C395.9,156.7,385.8,167.2,374.2,175.7z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_twitter = (twitter_twitter);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/user.js


var user_user = function user(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M13.1 11.3C14.9 10.8 16.2 9.2 16.2 7.2C16.2 4.9 14.3 3 12 3C9.7 3 7.8 4.9 7.8 7.2C7.8 9.2 9.1 10.8 10.9 11.3C6.6 11.9 3 15.8 3 20.2V21.2H21V20.2C21 15.8 17.4 11.9 13.1 11.3Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_user = (user_user);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/youtube.js


var youtube_youtube = function youtube(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 500 500",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    d: "M363.5,117.4c6.4,0.7,20.6,0.7,33.1,14c0,0,10.1,9.9,13.1,32.8c3.5,26.7,3.3,53.4,3.3,53.4v25c0,0,0.2,26.7-3.3,53.4 c-2.9,22.6-13.1,32.8-13.1,32.8c-12.5,13.1-26.7,13.1-33.1,13.8c0,0-46,3.5-115.4,3.5c-85.8-0.7-112.1-3.3-112.1-3.3 c-7.4-1.3-23.9-0.9-36.5-14c0,0-10.1-10.1-13.1-32.8c-3.5-26.7-3.3-53.4-3.3-53.4v-25c0,0-0.2-26.7,3.3-53.4 c2.9-22.8,13.1-32.8,13.1-32.8c12.5-13.3,26.7-13.3,33.1-14c0,0,46-3.3,115.4-3.3S363.5,117.4,363.5,117.4z M303.1,226.8L214,180.2 v92.6L303.1,226.8z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_youtube = (youtube_youtube);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/notes.js


var notes_notes = function notes(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "a",
    d: "M10.91 4.364h6.326v2.181H10.91V4.364zm-5.546 0h2.363a1 1 0 0 1 1 1v2.363a1 1 0 0 1-1 1H5.364a1 1 0 0 1-1-1V5.364a1 1 0 0 1 1-1zm5.545 6.545h6.327v2.182H10.91v-2.182zm-5.545 0h2.363a1 1 0 0 1 1 1v2.364a1 1 0 0 1-1 1H5.364a1 1 0 0 1-1-1v-2.364a1 1 0 0 1 1-1zM20.727 0H1.091C.436 0 0 .436 0 1.09v21.82C0 23.563.436 24 1.09 24h12.983c.327 0 .545-.11.763-.327l6.655-7.31c.218-.218.327-.436.327-.763V1.09c0-.545-.545-1.09-1.09-1.09zm-1.09 15.164l-6 6.654H2.181V2.182h17.454v12.982z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_notes = (notes_notes);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/book.js


var book_book = function book(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, external_react_default.a.createElement("g", {
    fill: fillColor,
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    id: "a",
    d: "M14.286 8.724h6.325v2.181h-6.325v-2.18zm0 3.272h3.053v2.18h-3.053v-2.18zm0-6.543h6.325v2.18h-6.325v-2.18zm-9.924 0h4.144v7.524H4.362V5.453zM21.811.109h-7.634c-.327 0-.545.11-.763.327l-1.418 1.309L10.578.327C10.36.11 10.142 0 9.815 0H2.18C.981 0 0 .981 0 2.181v14.177c0 1.2.981 2.181 2.181 2.181H9.27l1.962 1.854c.219.218.437.327.764.327.218 0 .545-.109.763-.327l1.963-1.854h7.089c1.2 0 2.18-.981 2.18-2.181V2.181c.11-1.2-.872-2.072-2.18-2.072zM9.706 16.358H2.18V2.181H9.38l1.526 1.527v13.304l-.436-.327c-.218-.218-.436-.327-.763-.327zm12.105 0h-7.634c-.327 0-.545.109-.763.327l-.328.327V3.708l1.527-1.527h7.307l-.11 14.177c.11 0 .11 0 0 0z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_book = (book_book);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/tvSignal.js


var tvSignal_tvSignal = function tvSignal(id, fillColor, ColorGradient1, ColorGradient2) {
  return external_react_default.a.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, external_react_default.a.createElement("g", {
    fill: fillColor
  }, external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.3 4V2C18.3 2 22.3 6 22.3 11H20.3C20.3 7.1 17.1 4 13.3 4ZM4.7 6.5C2.9 8.3 2 10.6 2 13.1C2 15.6 3 17.9 4.7 19.7C6.4 21.5 8.8 22.4 11.3 22.4C13.8 22.4 16.1 21.4 17.9 19.7L18.6 19L5.4 5.8L4.7 6.5ZM15.6 18.9C14.3 19.9 12.8 20.4 11.2 20.4C9.3 20.4 7.4 19.6 6.1 18.3C4.7 16.9 4 15.1 4 13.2C4 11.6 4.5 10.1 5.5 8.8L15.6 18.9ZM18.3 10.7C18.3 8.2 16.3 6.2 13.8 6.2V8.2C15.2 8.2 16.3 9.3 16.3 10.7H18.3ZM12.5838 9.0199L10.816 10.7876L13.5302 13.5018L15.298 11.7341L12.5838 9.0199Z"
  })), external_react_default.a.createElement(atIcon_gradiente, {
    id: id,
    Color1: ColorGradient1,
    Color2: ColorGradient2
  }));
};
/* harmony default export */ var iconfiles_tvSignal = (tvSignal_tvSignal);
// CONCATENATED MODULE: ./components/atoms/atIcon/iconfiles/index.js
/* concated harmony reexport circulo */__webpack_require__.d(__webpack_exports__, "circulo", function() { return circulo_circulo; });
/* concated harmony reexport alert */__webpack_require__.d(__webpack_exports__, "alert", function() { return alert_alert; });
/* concated harmony reexport inputAlert */__webpack_require__.d(__webpack_exports__, "inputAlert", function() { return inputAlert_inputAlert; });
/* concated harmony reexport inputSuccess */__webpack_require__.d(__webpack_exports__, "inputSuccess", function() { return inputSuccess_inputSuccess; });
/* concated harmony reexport aprender */__webpack_require__.d(__webpack_exports__, "aprender", function() { return aprender_aprender; });
/* concated harmony reexport arrowdown */__webpack_require__.d(__webpack_exports__, "arrowdown", function() { return arrowdown_arrowdown; });
/* concated harmony reexport arrowup */__webpack_require__.d(__webpack_exports__, "arrowup", function() { return arrowup_arrowup; });
/* concated harmony reexport backarrow */__webpack_require__.d(__webpack_exports__, "backarrow", function() { return backarrow_backarrow; });
/* concated harmony reexport bloqueio */__webpack_require__.d(__webpack_exports__, "bloqueio", function() { return bloqueio_bloqueio; });
/* concated harmony reexport broadband */__webpack_require__.d(__webpack_exports__, "broadband", function() { return broadband_broadband; });
/* concated harmony reexport broadbandB */__webpack_require__.d(__webpack_exports__, "broadbandB", function() { return broadbandB_broadbandB; });
/* concated harmony reexport bell */__webpack_require__.d(__webpack_exports__, "bell", function() { return bell_bell; });
/* concated harmony reexport c2c */__webpack_require__.d(__webpack_exports__, "c2c", function() { return c2c_c2c; });
/* concated harmony reexport calendar */__webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar_calendar; });
/* concated harmony reexport caret */__webpack_require__.d(__webpack_exports__, "caret", function() { return caret_caret; });
/* concated harmony reexport caret2 */__webpack_require__.d(__webpack_exports__, "caret2", function() { return caret2_caret2; });
/* concated harmony reexport cart */__webpack_require__.d(__webpack_exports__, "cart", function() { return cart_cart; });
/* concated harmony reexport celular */__webpack_require__.d(__webpack_exports__, "celular", function() { return celular_celular; });
/* concated harmony reexport callDetails */__webpack_require__.d(__webpack_exports__, "callDetails", function() { return callDetails_callDetails; });
/* concated harmony reexport charts */__webpack_require__.d(__webpack_exports__, "charts", function() { return charts_charts; });
/* concated harmony reexport chat */__webpack_require__.d(__webpack_exports__, "chat", function() { return chat_chat; });
/* concated harmony reexport goIcon */__webpack_require__.d(__webpack_exports__, "goIcon", function() { return goIcon_goIcon; });
/* concated harmony reexport check */__webpack_require__.d(__webpack_exports__, "check", function() { return check_check; });
/* concated harmony reexport check2 */__webpack_require__.d(__webpack_exports__, "check2", function() { return check2_check2; });
/* concated harmony reexport clean_check */__webpack_require__.d(__webpack_exports__, "clean_check", function() { return cleancheck_clean_check; });
/* concated harmony reexport close */__webpack_require__.d(__webpack_exports__, "close", function() { return close_close; });
/* concated harmony reexport combo */__webpack_require__.d(__webpack_exports__, "combo", function() { return combo_combo; });
/* concated harmony reexport comboB */__webpack_require__.d(__webpack_exports__, "comboB", function() { return comboB_comboB; });
/* concated harmony reexport comboC */__webpack_require__.d(__webpack_exports__, "comboC", function() { return comboC_comboC; });
/* concated harmony reexport comprar */__webpack_require__.d(__webpack_exports__, "comprar", function() { return comprar_comprar; });
/* concated harmony reexport consumptionProfile */__webpack_require__.d(__webpack_exports__, "consumptionProfile", function() { return consumptionProfile_consumptionProfile; });
/* concated harmony reexport conexao */__webpack_require__.d(__webpack_exports__, "conexao", function() { return conexao_conexao; });
/* concated harmony reexport configuracao */__webpack_require__.d(__webpack_exports__, "configuracao", function() { return configuracao_configuracao; });
/* concated harmony reexport contract */__webpack_require__.d(__webpack_exports__, "contract", function() { return contract_contract; });
/* concated harmony reexport desconto */__webpack_require__.d(__webpack_exports__, "desconto", function() { return desconto_desconto; });
/* concated harmony reexport enviar */__webpack_require__.d(__webpack_exports__, "enviar", function() { return enviar_enviar; });
/* concated harmony reexport facebook */__webpack_require__.d(__webpack_exports__, "facebook", function() { return facebook_facebook; });
/* concated harmony reexport feat_antivirus */__webpack_require__.d(__webpack_exports__, "feat_antivirus", function() { return feat_antivirus_feat_antivirus; });
/* concated harmony reexport feat_certificate */__webpack_require__.d(__webpack_exports__, "feat_certificate", function() { return feat_certificate_feat_certificate; });
/* concated harmony reexport feat_cloud */__webpack_require__.d(__webpack_exports__, "feat_cloud", function() { return feat_cloud_feat_cloud; });
/* concated harmony reexport feat_modem */__webpack_require__.d(__webpack_exports__, "feat_modem", function() { return feat_modem_feat_modem; });
/* concated harmony reexport feat_wifi */__webpack_require__.d(__webpack_exports__, "feat_wifi", function() { return feat_wifi_feat_wifi; });
/* concated harmony reexport game01 */__webpack_require__.d(__webpack_exports__, "game01", function() { return game01_game01; });
/* concated harmony reexport game02 */__webpack_require__.d(__webpack_exports__, "game02", function() { return game02_game02; });
/* concated harmony reexport game03 */__webpack_require__.d(__webpack_exports__, "game03", function() { return game03_game03; });
/* concated harmony reexport game04 */__webpack_require__.d(__webpack_exports__, "game04", function() { return game04_game04; });
/* concated harmony reexport game05 */__webpack_require__.d(__webpack_exports__, "game05", function() { return game05_game05; });
/* concated harmony reexport game06 */__webpack_require__.d(__webpack_exports__, "game06", function() { return game06_game06; });
/* concated harmony reexport google_plus */__webpack_require__.d(__webpack_exports__, "google_plus", function() { return google_plus_google_plus; });
/* concated harmony reexport help */__webpack_require__.d(__webpack_exports__, "help", function() { return help_help; });
/* concated harmony reexport html */__webpack_require__.d(__webpack_exports__, "html", function() { return html_html; });
/* concated harmony reexport home */__webpack_require__.d(__webpack_exports__, "home", function() { return home_home; });
/* concated harmony reexport historico */__webpack_require__.d(__webpack_exports__, "historico", function() { return historico_historico; });
/* concated harmony reexport history */__webpack_require__.d(__webpack_exports__, "history", function() { return historico_historico; });
/* concated harmony reexport info */__webpack_require__.d(__webpack_exports__, "info", function() { return info_info; });
/* concated harmony reexport invoice */__webpack_require__.d(__webpack_exports__, "invoice", function() { return invoice_invoice; });
/* concated harmony reexport invoiceOld */__webpack_require__.d(__webpack_exports__, "invoiceOld", function() { return invoiceOld_invoiceOld; });
/* concated harmony reexport internet */__webpack_require__.d(__webpack_exports__, "internet", function() { return internet_internet; });
/* concated harmony reexport landline */__webpack_require__.d(__webpack_exports__, "landline", function() { return landline_landline; });
/* concated harmony reexport landlineInstallation */__webpack_require__.d(__webpack_exports__, "landlineInstallation", function() { return landlineInstallation_landlineInstallation; });
/* concated harmony reexport like */__webpack_require__.d(__webpack_exports__, "like", function() { return like_like; });
/* concated harmony reexport loading */__webpack_require__.d(__webpack_exports__, "loading", function() { return loading_loading; });
/* concated harmony reexport localization_pin */__webpack_require__.d(__webpack_exports__, "localization_pin", function() { return localization_pin_localization_pin; });
/* concated harmony reexport lupa */__webpack_require__.d(__webpack_exports__, "lupa", function() { return lupa_lupa; });
/* concated harmony reexport lupa_thin */__webpack_require__.d(__webpack_exports__, "lupa_thin", function() { return lupa_thin_lupa_thin; });
/* concated harmony reexport menu */__webpack_require__.d(__webpack_exports__, "menu", function() { return menu_menu; });
/* concated harmony reexport mobile */__webpack_require__.d(__webpack_exports__, "mobile", function() { return mobile_mobile; });
/* concated harmony reexport mobileB */__webpack_require__.d(__webpack_exports__, "mobileB", function() { return mobileB_mobileB; });
/* concated harmony reexport mobileC */__webpack_require__.d(__webpack_exports__, "mobileC", function() { return mobileC_mobileC; });
/* concated harmony reexport money */__webpack_require__.d(__webpack_exports__, "money", function() { return money_money; });
/* concated harmony reexport play */__webpack_require__.d(__webpack_exports__, "play", function() { return play_play; });
/* concated harmony reexport paper */__webpack_require__.d(__webpack_exports__, "paper", function() { return paper_paper; });
/* concated harmony reexport people */__webpack_require__.d(__webpack_exports__, "people", function() { return people_people; });
/* concated harmony reexport plus */__webpack_require__.d(__webpack_exports__, "plus", function() { return plus_plus; });
/* concated harmony reexport power */__webpack_require__.d(__webpack_exports__, "power", function() { return power_power; });
/* concated harmony reexport product_bandalarga */__webpack_require__.d(__webpack_exports__, "product_bandalarga", function() { return product_bandalarga_product_bandalarga; });
/* concated harmony reexport product_fixo */__webpack_require__.d(__webpack_exports__, "product_fixo", function() { return product_fixo_product_fixo; });
/* concated harmony reexport product_fixoB */__webpack_require__.d(__webpack_exports__, "product_fixoB", function() { return product_fixoB_product_fixoB; });
/* concated harmony reexport product_pos */__webpack_require__.d(__webpack_exports__, "product_pos", function() { return product_pos_product_pos; });
/* concated harmony reexport product_tvhd */__webpack_require__.d(__webpack_exports__, "product_tvhd", function() { return product_tv_HD_product_tvhd; });
/* concated harmony reexport product_tv */__webpack_require__.d(__webpack_exports__, "product_tv", function() { return product_tv_product_tv; });
/* concated harmony reexport protecao */__webpack_require__.d(__webpack_exports__, "protecao", function() { return protecao_protecao; });
/* concated harmony reexport protocol */__webpack_require__.d(__webpack_exports__, "protocol", function() { return protocol_protocol; });
/* concated harmony reexport quebracabeca */__webpack_require__.d(__webpack_exports__, "quebracabeca", function() { return quebracabeca_quebracabeca; });
/* concated harmony reexport recompensa */__webpack_require__.d(__webpack_exports__, "recompensa", function() { return recompensa_recompensa; });
/* concated harmony reexport redefinir */__webpack_require__.d(__webpack_exports__, "redefinir", function() { return redefinir_redefinir; });
/* concated harmony reexport rechargeOld */__webpack_require__.d(__webpack_exports__, "rechargeOld", function() { return rechargeOld_rechargeOld; });
/* concated harmony reexport seguranca */__webpack_require__.d(__webpack_exports__, "seguranca", function() { return seguranca_seguranca; });
/* concated harmony reexport services */__webpack_require__.d(__webpack_exports__, "services", function() { return services_services; });
/* concated harmony reexport suporte */__webpack_require__.d(__webpack_exports__, "suporte", function() { return suporte_suporte; });
/* concated harmony reexport transferir */__webpack_require__.d(__webpack_exports__, "transferir", function() { return transferir_transferir; });
/* concated harmony reexport tv */__webpack_require__.d(__webpack_exports__, "tv", function() { return tv_tv; });
/* concated harmony reexport tvhd */__webpack_require__.d(__webpack_exports__, "tvhd", function() { return tvhd_tvhd; });
/* concated harmony reexport twitter */__webpack_require__.d(__webpack_exports__, "twitter", function() { return twitter_twitter; });
/* concated harmony reexport user */__webpack_require__.d(__webpack_exports__, "user", function() { return user_user; });
/* concated harmony reexport youtube */__webpack_require__.d(__webpack_exports__, "youtube", function() { return youtube_youtube; });
/* concated harmony reexport notes */__webpack_require__.d(__webpack_exports__, "notes", function() { return notes_notes; });
/* concated harmony reexport book */__webpack_require__.d(__webpack_exports__, "book", function() { return book_book; });
/* concated harmony reexport tvSignal */__webpack_require__.d(__webpack_exports__, "tvSignal", function() { return tvSignal_tvSignal; });
























 // eslint-disable-line













 // eslint-disable-line

 // eslint-disable-line

 // eslint-disable-line

 // eslint-disable-line

 // eslint-disable-line

 // ! ! !

 // ! ! !

 // ! ! !

 // ! ! !

 // ! ! !

 // ! ! !

 // eslint-disable-line













 // eslint-disable-line


 // eslint-disable-line











 // eslint-disable-line

 // eslint-disable-line

 // eslint-disable-line

 // eslint-disable-line

 // eslint-disable-line

 // eslint-disable-line



 // ! ! !

















/***/ }),

/***/ "fQ8c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_atBtLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QEe7");

 //console.log('Instanciando templates/index.js');

var ListadeRotas = function ListadeRotas(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  var href = props.href;
  var btestiloitem = props.estilo;
  var ParamentroURL = "?regiao=" + regiao;

  if (modo == "AMP" || modo == "amp") {
    ParamentroURL = "?amp=1";
  } //Layout luz verde


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    href: href + ParamentroURL,
    value: props.children,
    estilo: btestiloitem
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ListadeRotas);

/***/ }),

/***/ "gtPt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JkDD");
/* harmony import */ var _atoms_atIcon_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hx11");
/* harmony import */ var _moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wwkz");
/* harmony import */ var _moJanela_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("D7Tn");

// layout de Documentoscopia - Projeto Piloto






var MenuMobile01 = function MenuMobile01(props) {
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.modo, "html");
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.modo, "RJ");
  var janelaEstilo = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.janelaestilo, "neon");
  var cordoicone = "#ffffff";

  if (janelaEstilo == "claro") {
    cordoicone = "#000000";
  }

  var titulo = props.titulo;
  var categoria = props.categoria;
  var btestilo = props.btestilo; //"neon"

  var btestiloitem = props.btestiloitem; //"neonItem"

  if (modo == "html" || modo == "HTML") {
    var fechalightboxMenu = function fechalightboxMenu() {
      document.getElementById("contMenuMobiles").style.display = "none";
    };

    var abrirlightboxMenu = function abrirlightboxMenu() {
      document.getElementById("contMenuMobiles").style.display = "block";
    };

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-201483719"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "contMenuMobiles",
      className: "jsx-201483719" + " " + "contMenuMobile"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "lightboxMenu",
      className: "jsx-201483719" + " " + "lightboxMenu"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      role: "button",
      tabindex: "0",
      className: "jsx-201483719" + " " + "close"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: function onClick() {
        fechalightboxMenu();
      },
      className: "jsx-201483719"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atIcon_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      type: "close",
      color: cordoicone
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      estilo: janelaEstilo
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      regiao: regiao,
      modo: modo,
      titulo: titulo,
      categoria: categoria,
      btestilo: btestilo,
      btestiloitem: btestiloitem
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-201483719"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: function onClick() {
        abrirlightboxMenu();
      },
      className: "jsx-201483719"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atIcon_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      type: "menu",
      color: "#ffffff",
      width: "25px"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "201483719"
    }, [".contMenuMobile.jsx-201483719{position:fixed;z-index:1000;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,0.6) none repeat scroll 0% 0%;display:none;-webkit-animation:abremenu-jsx-201483719 1s ease 0s 1 normal none running;animation:abremenu-jsx-201483719 1s ease 0s 1 normal none running;}", "@-webkit-keyframes abremenu-jsx-201483719{0%{left:-100px;opacity:0;}100%{left:0px;opacity:1;}}", "@keyframes abremenu-jsx-201483719{0%{left:-100px;opacity:0;}100%{left:0px;opacity:1;}}", ".lightboxMenu.jsx-201483719{margin :10px;height:100vh;width:86vw;-webkit-transition:all 0.3s ease 0s;transition:all 0.3s ease 0s;overflow-y:scroll;padding:10px;}", ".closeMenu.jsx-201483719{margin-bottom :20px;border-left:100px;top:5px;font-family:arial;position:relative;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0px;}"]));
  } else {
    //if(modo=="amp"||modo=="AMP")
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3163524660"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("amp-lightbox", {
      id: "PopupMenu",
      layout: "nodisplay",
      class: "jsx-3163524660"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3163524660" + " " + "lightboxMenu"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      estilo: janelaEstilo
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      on: "tap:PopupMenu.close",
      role: "button",
      tabindex: "0",
      className: "jsx-3163524660" + " " + "closeMenu"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atIcon_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      type: "close",
      color: cordoicone
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      regiao: regiao,
      modo: modo,
      titulo: titulo,
      categoria: categoria,
      btestilo: btestilo,
      btestiloitem: btestiloitem
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      on: "tap:PopupMenu",
      role: "button",
      tabindex: "0",
      className: "jsx-3163524660" + " " + "ampstart-btn caps m2"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3163524660"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atIcon_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      type: "menu",
      color: "#ffffff",
      width: "25px"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3163524660"
    }, ["#PopupMenu.jsx-3163524660{background:rgba(0,0,0,0.6) none repeat scroll 0% 0%;}", ".lightboxMenu.jsx-3163524660{margin :10px;height:100vh;width:86vw;-webkit-transition:all 0.3s ease 0s;transition:all 0.3s ease 0s;overflow-y:scroll;}", ".closeMenu.jsx-3163524660{margin-bottom :20px;left:5px;top:5px;font-family:arial;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:relative;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0px;}"]));
  }
};

/* harmony default export */ __webpack_exports__["a"] = (MenuMobile01);

/***/ }),

/***/ "h6+w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./controller/util.js
var util = __webpack_require__("JkDD");

// CONCATENATED MODULE: ./components/atoms/atFavIcon/index.js
//Component atomo atFavIcon.js



var atFavIcon_atFavIcon = function atFavIcon(props) {
  var icohref = util["h" /* validaProps */](props.icohref, "/static/assetsv5/img/faviconvvc.ico");
  return external_react_default.a.createElement("link", {
    rel: "icon",
    href: icohref
  });
};

/* harmony default export */ var atoms_atFavIcon = (atFavIcon_atFavIcon);
// EXTERNAL MODULE: ./components/atoms/atGTM/index.js + 2 modules
var atGTM = __webpack_require__("ORJM");

// CONCATENATED MODULE: ./components/moleculas/moHead/index.js






var moHead_moHead = function moHead(props) {
  var modo = util["h" /* validaProps */](props.modo, "html");
  var title = util["h" /* validaProps */](props.title, "Pagina sem titulo");
  var description = util["h" /* validaProps */](props.description, title);
  var canonical = util["h" /* validaProps */](props.canonical, "/");
  var keywords = util["h" /* validaProps */](props.keywords, "vvc," + title + "," + modo + "," + description); //const amphtml = "/amp" + canonical;

  var amphtml = canonical + "?amp=1";

  if (modo == "html" || modo == "HTML") {
    return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, title), external_react_default.a.createElement(atoms_atFavIcon, {
      icohref: props.icohref
    }), external_react_default.a.createElement("meta", {
      name: "description",
      content: description
    }), external_react_default.a.createElement("meta", {
      name: "keywords",
      content: keywords
    }), external_react_default.a.createElement("link", {
      rel: "canonical",
      href: "http://vvcestudio.com.br" + canonical
    }), external_react_default.a.createElement("link", {
      rel: "amphtml",
      href: "http://vvcestudio.com.br" + amphtml
    }), external_react_default.a.createElement("link", {
      rel: "alternate",
      href: canonical,
      hreflang: "pt-br"
    }), " ", external_react_default.a.createElement("link", {
      rel: "alternate",
      href: canonical,
      hreflang: "x-default"
    }), " ", external_react_default.a.createElement(atGTM["a" /* default */], {
      position: "head",
      modo: modo,
      codGTM: "UA-177955684-1"
    }));
  } else {
    return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, title), external_react_default.a.createElement(atoms_atFavIcon, {
      icohref: props.icohref
    }), external_react_default.a.createElement("meta", {
      name: "description",
      content: description
    }), external_react_default.a.createElement("meta", {
      name: "keywords",
      content: keywords
    }), external_react_default.a.createElement("link", {
      rel: "alternate",
      href: canonical,
      hreflang: "pt-br"
    }), " ", external_react_default.a.createElement("link", {
      rel: "alternate",
      href: canonical,
      hreflang: "x-default"
    }), " ", external_react_default.a.createElement("script", {
      async: true,
      "custom-element": "amp-lightbox",
      src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"
    }), external_react_default.a.createElement("script", {
      async: true,
      "custom-element": "amp-iframe",
      src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
    }), external_react_default.a.createElement("script", {
      async: true,
      "custom-element": "amp-analytics",
      src: "https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
    }), external_react_default.a.createElement(atGTM["a" /* default */], {
      position: "head",
      modo: modo,
      codGTM: "UA-177955684-1"
    }));
  }
}; //<GTM position="headbody" modo={modo} codGTM="UA-177955684-1" />


/* harmony default export */ var moleculas_moHead = __webpack_exports__["a"] = (moHead_moHead); //<GTM position="body" modo={modo} codGTM="UA-177955684-1" />
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

/***/ "hx11":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Icons */
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconfiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ckrn");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JkDD");





var getIcon = function getIcon(type, fillColor, ColorGradient1, ColorGradient2) {
  var id = " ";

  if (ColorGradient2 != "") {
    id = "gradient" + type;
    fillColor = "url(#" + id + ")";
  }

  return _iconfiles__WEBPACK_IMPORTED_MODULE_2__[type](id, fillColor, ColorGradient1, ColorGradient2);
};

var Icons = function Icons(props) {
  //type, color
  // var varBg = "background-color: white;";
  // if (props.bg != undefined) {
  //   varBg = props.bg + ";";
  // }
  var varType = _controller_util_js__WEBPACK_IMPORTED_MODULE_3__[/* validaProps */ "h"](props.type, "alert");
  var varWidth = _controller_util_js__WEBPACK_IMPORTED_MODULE_3__[/* validaProps */ "h"](props.width, "20px");
  var varHeight = _controller_util_js__WEBPACK_IMPORTED_MODULE_3__[/* validaProps */ "h"](props.height, varWidth); //var varBorder = Util.validaProps(props.border, "none");

  var fillColor = _controller_util_js__WEBPACK_IMPORTED_MODULE_3__[/* validaProps */ "h"](props.color, "#000");
  var ColorGradient2 = _controller_util_js__WEBPACK_IMPORTED_MODULE_3__[/* validaProps */ "h"](props.colorGradient2, "");
  var ColorGradient1 = _controller_util_js__WEBPACK_IMPORTED_MODULE_3__[/* validaProps */ "h"](props.colorGradient1, ColorGradient2); //var varMarginRight = Util.validaProps(props.marginRight, "");

  if (props.height != undefined) {
    varHeight = "height:" + props.height + ";";
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4226797484", [varWidth, varHeight]]]) + " " + "divIcon"
  }, getIcon(varType, fillColor, ColorGradient1, ColorGradient2), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4226797484",
    dynamic: [varWidth, varHeight]
  }, [".divIcon.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:".concat(varWidth, ";height:").concat(varHeight, ";}")]));
}; // .divIcon {
//   ${varBg}
//   width: ${varWidth};
//   height:${varHeight}
//   border-style:${varBorder}
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 3px;
//   margin-right: ${varMarginRight};
// }


/* harmony default export */ __webpack_exports__["a"] = (Icons);


/***/ }),

/***/ "ob7O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JkDD");


 //import { useAmp } from 'next/amp'

var atDivCodigo = function atDivCodigo(props) {
  var titulo = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__[/* validaProps */ "h"](props.titulo, "Codigo");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1693817526" + " " + "atDivCodContorno"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1693817526" + " " + "atDivCodigoTop"
  }, titulo), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1693817526" + " " + "atDivCodigo"
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1693817526"
  }, [".atDivCodigoTop.jsx-1693817526{width:100%;font-size:17px;font-family:sans-serif;background-color:#282c45;background-image:linear-gradient(45deg,#282c45,#4f4e64 );border-top-left-radius :12px;border-top-right-radius :12px;display:block;padding:10px;box-sizing:border-box;}", ".atDivCodigo.jsx-1693817526{color:#00ff00;padding :10px;}", ".atDivCodContorno.jsx-1693817526{margin-bottom:10px;width:100%;font-size:17px;font-family:sans-serif;background-color:#282c45;background-image:linear-gradient(90deg,#100e16,#363046 );border-radius :12px;display:block;box-sizing:border-box;-webkit-box-shadow:-9px 9px 20px rgba(1,1,1,0.57);-moz-box-shadow:-9px 9px 20px rgba(1,1,1,0.57);box-shadow:-9px 9px 20px rgba(1,1,1,0.57);}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (atDivCodigo);

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
// EXTERNAL MODULE: ./components/atoms/atBtLink/index.js + 20 modules
var atBtLink = __webpack_require__("QEe7");

// EXTERNAL MODULE: ./components/moleculas/moListadeRotas/listaHTML.js
var listaHTML = __webpack_require__("OVgM");

// EXTERNAL MODULE: ./components/moleculas/moListadeRotas/itemMenu.js
var itemMenu = __webpack_require__("fQ8c");

// CONCATENATED MODULE: ./components/moleculas/moListadeRotas/index.js

 //import a from 'next/a'





 //import Li from './itemMenu.js';
//consdive.log('Instanciando templates/index.js');

var moListadeRotas_ListadeRotas = function ListadeRotas(props) {
  var regiao = util["h" /* validaProps */](props.regiao, "RJ");
  var modo = props.modo;
  var titulo = util["h" /* validaProps */](props.titulo, "nenhum");
  var categoria = util["h" /* validaProps */](props.categoria, "nenhum");
  var btestilo = props.btestilo;
  var btestiloitem = props.btestiloitem;
  var ParamentroURL = "?regiao=" + regiao;

  if (modo == "AMP" || modo == "amp") {
    ParamentroURL = "?amp=1";
  } //Layout Luz Verde


  return external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + 'CssRotasProjeto'
  }, external_react_default.a.createElement("nav", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atDetails, {
    open: titulo == "Home"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Home",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(itemMenu["a" /* default */], {
    modo: "html",
    href: "/",
    regiao: regiao,
    estilo: btestiloitem
  }, "\"Pagina em HTML\""), external_react_default.a.createElement(itemMenu["a" /* default */], {
    modo: "amp",
    href: "/",
    regiao: regiao,
    estilo: btestiloitem
  }, "\"Pagina em AMP\""))), external_react_default.a.createElement(atDetails, {
    open: titulo == "Utilitarios"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Utilitarios",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/utilitarios/" + ParamentroURL,
    value: "Utilitarios",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/utilitarios/conversordetexto/" + ParamentroURL,
    value: "Converta Textos",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/utilitarios/conversordeunidade/" + ParamentroURL,
    value: "Converta Unidades",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/utilitarios/servicosgratuitos/" + ParamentroURL,
    value: "Servicos Gratuitos",
    estilo: btestiloitem
  }))), external_react_default.a.createElement(atDetails, {
    open: titulo == "Games"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Games",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/game/" + ParamentroURL,
    value: "Games do valente",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/game/cristalbot/" + ParamentroURL,
    value: "Cristal Bot",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/game/controleogodzilla/" + ParamentroURL,
    value: "Controle o Godzilla",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/game/tanque/" + ParamentroURL,
    value: "Tanque de Guerra",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/game/ecossistema/" + ParamentroURL,
    value: "Ecossistema",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/game/cobrinha/" + ParamentroURL,
    value: "Cobrinha",
    estilo: btestiloitem
  }))), external_react_default.a.createElement(atDetails, {
    open: titulo == "Tutoriais"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Tutoriais",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/" + ParamentroURL,
    value: "C\xF3digo intro",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atDetails, {
    open: categoria == "html"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "HTML",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(listaHTML["a" /* default */], {
    modo: modo,
    regiao: regiao,
    btestiloitem: btestiloitem
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "SVG"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "SVG",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/html/svg01/" + ParamentroURL,
    value: "SVG rect",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/html/svg02/" + ParamentroURL,
    value: "SVG ellipse, text",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/html/svg03/" + ParamentroURL,
    value: "Line Polygon",
    estilo: btestiloitem
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "CSS"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "CSS",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/" + ParamentroURL,
    value: "Introdu\xE7\xE3o ao CSS",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/css02/" + ParamentroURL,
    value: "Estilizando textos",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/css03/" + ParamentroURL,
    value: "Imagens de fundo",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/css04/" + ParamentroURL,
    value: "Link e Divs",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/css05/" + ParamentroURL,
    value: "Classe, ID e Span",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/css06/" + ParamentroURL,
    value: "Margin, padding e floatAula",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/css07/" + ParamentroURL,
    value: "Posi\xE7\xE3o e z-index",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/css08/" + ParamentroURL,
    value: "Efeito hover",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/css09/" + ParamentroURL,
    value: "Heran\xE7a",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/css10/" + ParamentroURL,
    value: "Menu com listas",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/css11/" + ParamentroURL,
    value: "Menu drop-down",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/css12/" + ParamentroURL,
    value: "Valida\xE7\xE3o",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/css13/" + ParamentroURL,
    value: "Tabelas Style",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/css/anima_but/" + ParamentroURL,
    value: "Exemplos Anima But",
    estilo: btestiloitem
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "Python"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Python",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/python/" + ParamentroURL,
    value: "Python intro.",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/python/Pandas/" + ParamentroURL,
    value: "Pandas",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/python/NumPy/" + ParamentroURL,
    value: "Numpy",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/python/matplotlib/" + ParamentroURL,
    value: "matplotlib",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/python/seaborn/" + ParamentroURL,
    value: "seaborn",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/python/jupyter/" + ParamentroURL,
    value: "Jupyter",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/python/anaconda/" + ParamentroURL,
    value: "Anaconda",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/python/sklearn/" + ParamentroURL,
    value: "Scikit-learn",
    estilo: btestiloitem
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "JavaScript"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "JavaScript",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/javascript" + ParamentroURL,
    value: "JS JavaScript",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/javascript/nodejs" + ParamentroURL,
    value: "Node.JS",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/javascript/reactjs" + ParamentroURL,
    value: "React.JS",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/componentes/" + ParamentroURL,
    value: "Componentes React",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/javascript/nextjs" + ParamentroURL,
    value: "Next.JS",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/javascript/knockout/" + ParamentroURL,
    value: ">knockout",
    estilo: btestiloitem
  }))), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/java/" + ParamentroURL,
    value: "Java",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atDetails, {
    open: categoria == "ASP"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "ASP",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/asp/" + ParamentroURL,
    value: "ASP introdu\xE7\xE3o",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/asp/redirect" + ParamentroURL,
    value: "redirect 301",
    estilo: btestiloitem
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "PHP"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "PHP",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/php/" + ParamentroURL,
    value: "PHP intro",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/php/redirect/" + ParamentroURL,
    value: "redirect 301 no PHP",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/php/procuraarquivo/" + ParamentroURL,
    value: "encontrar arquivio no PHP",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/php/procuradiretorio/" + ParamentroURL,
    value: "encontrar diretorio no PHP",
    estilo: btestiloitem
  }))), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/rubyonrails/" + ParamentroURL,
    value: "Ruby on Rails",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/coldfusion/" + ParamentroURL,
    value: "coldfusion intro.",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atDetails, {
    open: categoria == "Apache"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Apache",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/apache/" + ParamentroURL,
    value: "Apache intro.",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/apache/instalubuntu" + ParamentroURL,
    value: "Instalar no Ubuntu",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/apache/alias" + ParamentroURL,
    value: "Alias em Apache",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/apache/redirect" + ParamentroURL,
    value: "redirect 301",
    estilo: btestiloitem
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "CGI"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "CGI PERL",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/cgi/" + ParamentroURL,
    value: "CGI introdu\xE7\xE3o",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/cgi/redirect" + ParamentroURL,
    value: "redirect 301",
    estilo: btestiloitem
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "Banco de Dados"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Dados",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/bancodedados/" + ParamentroURL,
    value: "Banco de Dados",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/bancodedados/sql/" + ParamentroURL,
    value: "SQL",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/bancodedados/mysql/" + ParamentroURL,
    value: "MySQL",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/bancodedados/datascience/" + ParamentroURL,
    value: "Cientista de Dados",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/bancodedados/hadoop/" + ParamentroURL,
    value: "Hadoop",
    estilo: btestiloitem
  }))), external_react_default.a.createElement(atDetails, {
    open: categoria == "SEO"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "SEO",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/seo/" + ParamentroURL,
    value: "SEO",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/tutorial/seo/amp/" + ParamentroURL,
    value: "AMP",
    estilo: btestiloitem
  }))))), external_react_default.a.createElement(atDetails, {
    open: titulo == "Design"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Design",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "https://sites.google.com/view/vvc-estudio/home",
    value: "Design",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "https://sites.google.com/view/vvc-estudio/maquete-3d",
    value: "Maquete 3d",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "https://sites.google.com/view/vvc-estudio/modelagem-3d",
    value: "Modelagem 3d",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "https://sites.google.com/view/vvc-estudio/logos",
    value: "logos",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "https://sites.google.com/view/vvc-estudio/ilustra%C3%A7%C3%B5es",
    value: "Ilustra\xE7\xF5es",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "https://sites.google.com/view/vvc-estudio/layout-web",
    value: "layout Web",
    estilo: btestiloitem
  }))), external_react_default.a.createElement(atDetails, {
    open: titulo == "Eu"
  }, external_react_default.a.createElement("summary", {
    className: "jsx-2610293549"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "",
    value: "Autor",
    estilo: btestilo
  })), external_react_default.a.createElement("div", {
    className: "jsx-2610293549" + " " + "subitens"
  }, external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/eu/" + ParamentroURL,
    value: "Apresenta\xE7\xE3o",
    estilo: btestiloitem
  }), external_react_default.a.createElement(atBtLink["a" /* default */], {
    href: "/eu/curriculo/" + ParamentroURL,
    value: "Curriculo",
    estilo: btestiloitem
  })))), external_react_default.a.createElement(style_default.a, {
    id: "2610293549"
  }, [".subitens.jsx-2610293549{margin-left :10px;border-left:solid 2px #10ecf5;}", ".subitens.jsx-2610293549:hover{-webkit-transition-duration:1s;transition-duration:1s;border-left:solid 2px #FFFFFF;}", ".CssRotasProjeto.jsx-2610293549{font-size:17px;}", "summary.jsx-2610293549::-webkit-details-marker{display:none;}", "summary.jsx-2610293549{margin:0;padding:0;}"]));
};

/* harmony default export */ var moListadeRotas = __webpack_exports__["a"] = (moListadeRotas_ListadeRotas);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });