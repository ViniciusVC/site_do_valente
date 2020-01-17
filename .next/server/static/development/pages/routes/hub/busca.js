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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/atoms/atCampoTexto/index.js":
/*!************************************************!*\
  !*** ./components/atoms/atCampoTexto/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");

// layout de Documentoscopia(/meusdocumentos/) - Projeto Piloto



var AtCampoTexto = function AtCampoTexto(props) {
  var varId = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.id, "id");
  var varName = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.name, "nome");
  var varPlaceholder = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.placeholder, "--");
  var varType = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.type, "text");
  var varAutocomplete = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.autocomplete, "on");
  var varSize = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.size, "15");

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
  }, ".campotexto.jsx-1860538152{width:280px;height:48px;border-radius:4px;border:solid 1px #dbdbdb;text-indent:10px;margin:10px;font-family:SimplonBP-Regular background-color:#ffffff;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXRDYW1wb1RleHRvL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHdUIsWUFDQSxZQUNNLGtCQUNPLHlCQUNSLGlCQUNMLFlBRWEsdURBQ1YsZUFDakIiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9hdG9tcy9hdENhbXBvVGV4dG8vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsYXlvdXQgZGUgRG9jdW1lbnRvc2NvcGlhKC9tZXVzZG9jdW1lbnRvcy8pIC0gUHJvamV0byBQaWxvdG9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IEF0Q2FtcG9UZXh0byA9IHByb3BzID0+IHtcbiAgdmFyIHZhcklkPVV0aWwudmFsaWRhUHJvcHMocHJvcHMuaWQsXCJpZFwiKTtcbiAgdmFyIHZhck5hbWU9VXRpbC52YWxpZGFQcm9wcyhwcm9wcy5uYW1lLFwibm9tZVwiKTtcbiAgdmFyIHZhclBsYWNlaG9sZGVyPVV0aWwudmFsaWRhUHJvcHMocHJvcHMucGxhY2Vob2xkZXIsXCItLVwiKTtcbiAgdmFyIHZhclR5cGU9VXRpbC52YWxpZGFQcm9wcyhwcm9wcy50eXBlLFwidGV4dFwiKTtcbiAgdmFyIHZhckF1dG9jb21wbGV0ZT1VdGlsLnZhbGlkYVByb3BzKHByb3BzLmF1dG9jb21wbGV0ZSxcIm9uXCIpO1xuICB2YXIgdmFyU2l6ZT1VdGlsLnZhbGlkYVByb3BzKHByb3BzLnNpemUsXCIxNVwiKTtcbiAgaWYoIHByb3BzLm1heGxlbmd0aCE9dW5kZWZpbmVkKXt2YXJTaXplPXByb3BzLm1heGxlbmd0aH07XG4gIFxuICByZXR1cm4oXG4gICAgPHNwYW4+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT17dmFyVHlwZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiY2FtcG90ZXh0b1wiXG4gICAgICAgIGlkPXt2YXJJZH1cbiAgICAgICAgbmFtZT17dmFyTmFtZX1cbiAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPXt2YXJQbGFjZWhvbGRlcn1cbiAgICAgICAgYXV0b2NvbXBsZXRlPXt2YXJBdXRvY29tcGxldGV9XG4gICAgICAgIHNpemU9e3ZhclNpemV9XG4gICAgICAgIG1heGxlbmd0aD17dmFyU2l6ZX1cbiAgICAgICAgcmVxdWlyZWQvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2FtcG90ZXh0b3tcbiAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZGJkYmRiO1xuICAgICAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogU2ltcGxvbkJQLVJlZ3VsYXJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvc3Bhbj5cbiAgKVxufVxuXG4vL2ZvbnQtZmFtaWx5OiAnU2ltcGxvbi1IZWFkbGluZSc7XG5leHBvcnQgZGVmYXVsdCBBdENhbXBvVGV4dG9cbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atCampoTexto/index.js */"));
}; //font-family: 'Simplon-Headline';


/* harmony default export */ __webpack_exports__["default"] = (AtCampoTexto);

/***/ }),

/***/ "./components/atoms/atFavIcon/index.js":
/*!*********************************************!*\
  !*** ./components/atoms/atFavIcon/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");
//Component atomo atFavIcon.js



var atFavIcon = function atFavIcon(props) {
  var href = _controller_util_js__WEBPACK_IMPORTED_MODULE_1__["validaProps"](props.href, "/static/assetsv5/img/favicon_laranja.ico");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: href
  });
};

/* harmony default export */ __webpack_exports__["default"] = (atFavIcon);

/***/ }),

/***/ "./components/atoms/atImg/index.js":
/*!*****************************************!*\
  !*** ./components/atoms/atImg/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");




var Img = function Img(props) {
  var varSrc = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.src, "/static/assetsv5/img/oi-logo-cinza.jpg"); //if(props.src!=undefined){varSrc=props.src};

  var varWidth = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.width, varWidth); //if(props.width!=undefined){varWidth=props.width};

  var varHeight = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.height, varWidth); //if( props.height!=undefined){varHeight=props.height};

  var varHeight = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.height, varWidth); //if( props.height!=undefined){varHeight=props.height};

  var varAlt = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.alt, "Imagem Portal Oi"); //if( props.alt!=undefined){varAlt=props.alt};

  var varTitle = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.title, varAlt); //if( props.title!=undefined){varTitle=props.title};

  var varClass = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.class, "img"); //if( props.class!=undefined){varClass=props.class};

  var varId = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.id, varClass); //if(props.id!=undefined){varId=props.id};

  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.modo, "html"); //if( props.modo!=undefined){modo=props.modo};
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
    }, ".".concat(varClass, ".__jsx-style-dynamic-selector{src:").concat(varSrc, " width:").concat(varWidth, " height=").concat(varHeight, " alt=").concat(varAlt, " title=").concat(varTitle, ";}@media only screen and (min-width:521px){.hideOnDesktop.__jsx-style-dynamic-selector{display:none;}}@media only screen and (max-width:520px){.hideOnMobile.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXRJbWcvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNnQixBQVFLLEFBSWdCLEFBTUEsYUFMZCxBQU1BLCtKQVhEIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXRJbWcvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IEltZyA9IHByb3BzID0+IHtcblx0dmFyIHZhclNyYyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuc3JjLFwiL3N0YXRpYy9hc3NldHN2NS9pbWcvb2ktbG9nby1jaW56YS5qcGdcIik7XG5cdC8vaWYocHJvcHMuc3JjIT11bmRlZmluZWQpe3ZhclNyYz1wcm9wcy5zcmN9O1xuXG4gIHZhciB2YXJXaWR0aCA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMud2lkdGgsdmFyV2lkdGgpO1xuICAvL2lmKHByb3BzLndpZHRoIT11bmRlZmluZWQpe3ZhcldpZHRoPXByb3BzLndpZHRofTtcbiAgdmFyIHZhckhlaWdodCA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuaGVpZ2h0LCB2YXJXaWR0aCk7XG4gIC8vaWYoIHByb3BzLmhlaWdodCE9dW5kZWZpbmVkKXt2YXJIZWlnaHQ9cHJvcHMuaGVpZ2h0fTtcblxuXHR2YXIgdmFySGVpZ2h0ID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5oZWlnaHQsIHZhcldpZHRoKTtcblx0Ly9pZiggcHJvcHMuaGVpZ2h0IT11bmRlZmluZWQpe3ZhckhlaWdodD1wcm9wcy5oZWlnaHR9O1xuXG5cdHZhciB2YXJBbHQgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLmFsdCxcIkltYWdlbSBQb3J0YWwgT2lcIik7XG5cdC8vaWYoIHByb3BzLmFsdCE9dW5kZWZpbmVkKXt2YXJBbHQ9cHJvcHMuYWx0fTtcblx0dmFyIHZhclRpdGxlID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy50aXRsZSx2YXJBbHQpO1xuXHQvL2lmKCBwcm9wcy50aXRsZSE9dW5kZWZpbmVkKXt2YXJUaXRsZT1wcm9wcy50aXRsZX07XG5cblx0dmFyIHZhckNsYXNzID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5jbGFzcyxcImltZ1wiKTtcblx0Ly9pZiggcHJvcHMuY2xhc3MhPXVuZGVmaW5lZCl7dmFyQ2xhc3M9cHJvcHMuY2xhc3N9O1xuXG5cdHZhciB2YXJJZCA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuaWQsdmFyQ2xhc3MpO1xuXHQvL2lmKHByb3BzLmlkIT11bmRlZmluZWQpe3ZhcklkPXByb3BzLmlkfTtcblxuXHR2YXIgbW9kbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMubW9kbyxcImh0bWxcIik7XG5cdC8vaWYoIHByb3BzLm1vZG8hPXVuZGVmaW5lZCl7bW9kbz1wcm9wcy5tb2RvfTtcblxuXHQvL2lmKHVzZUFtcCgpKXsgXG5cdGlmIChtb2RvPT1cImFtcFwiIHx8IG1vZG89PVwiQU1QXCIpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGFtcC1pbWcgc3JjPXt2YXJTcmN9XG5cdFx0XHRcdFx0IGlkPXt2YXJJZH1cblx0XHRcdFx0XHQgd2lkdGg9e3ZhcldpZHRofVxuXHRcdFx0XHRcdCBoZWlnaHQ9e3ZhckhlaWdodH1cblx0XHRcdFx0XHQgYWx0PXt2YXJBbHR9XG5cdFx0XHRcdFx0IHRpdGxlPXt2YXJUaXRsZX1cblx0XHRcdFx0XHQgY2xhc3NOYW1lPXt2YXJDbGFzc30+XG5cdFx0XHRcdDwvYW1wLWltZz5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC4keyB2YXJDbGFzc30ge1xuXHRcdFx0XHRcdFx0c3JjOiR7IHZhclNyY31cblx0XHRcdFx0XHRcdHdpZHRoOiR7IHZhcldpZHRofVxuXHRcdFx0XHRcdFx0aGVpZ2h0PSR7IHZhckhlaWdodH1cblx0XHRcdFx0XHRcdGFsdD0keyB2YXJBbHR9XG5cdFx0XHRcdFx0XHR0aXRsZT0keyB2YXJUaXRsZX1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUyMXB4KSB7XG5cdFx0XHRcdFx0XHQuaGlkZU9uRGVza3RvcCB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xuXHRcdFx0XHRcdFx0LmhpZGVPbk1vYmlsZSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxpbWcgc3JjPXt2YXJTcmN9XG5cdFx0XHRcdCAgICAgaWQ9e3ZhcklkfVxuXHRcdFx0XHQgICAgIHdpZHRoPXt2YXJXaWR0aH1cblx0XHRcdFx0ICAgICBoZWlnaHQ9e3ZhckhlaWdodH1cblx0XHRcdFx0ICAgICBhbHQ9e3ZhckFsdH1cblx0XHRcdFx0ICAgICB0aXRsZT17dmFyVGl0bGV9XG5cdFx0XHRcdCAgICAgY2xhc3NOYW1lPXt2YXJDbGFzc30+XG5cdFx0XHRcdDwvaW1nPlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LiR7IHZhckNsYXNzfXtcblx0XHRcdFx0XHRcdHNyYzokeyB2YXJTcmN9XG5cdFx0XHRcdFx0XHR3aWR0aDokeyB2YXJXaWR0aH1cblx0XHRcdFx0XHRcdGhlaWdodD0keyB2YXJIZWlnaHR9XG5cdFx0XHRcdFx0XHRhbHQ9JHsgdmFyQWx0fVxuXHRcdFx0XHRcdFx0dGl0bGU9JHsgdmFyVGl0bGV9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MjFweCkge1xuXHRcdFx0XHRcdFx0LmhpZGVPbkRlc2t0b3Age1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcblx0XHRcdFx0XHRcdC5oaWRlT25Nb2JpbGUge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWdcbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atImg/index.js */")));
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
    }, ".".concat(varClass, ".__jsx-style-dynamic-selector{src:").concat(varSrc, " width:").concat(varWidth, " height=").concat(varHeight, " alt=").concat(varAlt, " title=").concat(varTitle, ";}@media only screen and (min-width:521px){.hideOnDesktop.__jsx-style-dynamic-selector{display:none;}}@media only screen and (max-width:520px){.hideOnMobile.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXRJbWcvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVnQixBQVFLLEFBSWdCLEFBTUEsYUFMZCxBQU1BLCtKQVhEIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXRJbWcvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IEltZyA9IHByb3BzID0+IHtcblx0dmFyIHZhclNyYyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuc3JjLFwiL3N0YXRpYy9hc3NldHN2NS9pbWcvb2ktbG9nby1jaW56YS5qcGdcIik7XG5cdC8vaWYocHJvcHMuc3JjIT11bmRlZmluZWQpe3ZhclNyYz1wcm9wcy5zcmN9O1xuXG4gIHZhciB2YXJXaWR0aCA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMud2lkdGgsdmFyV2lkdGgpO1xuICAvL2lmKHByb3BzLndpZHRoIT11bmRlZmluZWQpe3ZhcldpZHRoPXByb3BzLndpZHRofTtcbiAgdmFyIHZhckhlaWdodCA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuaGVpZ2h0LCB2YXJXaWR0aCk7XG4gIC8vaWYoIHByb3BzLmhlaWdodCE9dW5kZWZpbmVkKXt2YXJIZWlnaHQ9cHJvcHMuaGVpZ2h0fTtcblxuXHR2YXIgdmFySGVpZ2h0ID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5oZWlnaHQsIHZhcldpZHRoKTtcblx0Ly9pZiggcHJvcHMuaGVpZ2h0IT11bmRlZmluZWQpe3ZhckhlaWdodD1wcm9wcy5oZWlnaHR9O1xuXG5cdHZhciB2YXJBbHQgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLmFsdCxcIkltYWdlbSBQb3J0YWwgT2lcIik7XG5cdC8vaWYoIHByb3BzLmFsdCE9dW5kZWZpbmVkKXt2YXJBbHQ9cHJvcHMuYWx0fTtcblx0dmFyIHZhclRpdGxlID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy50aXRsZSx2YXJBbHQpO1xuXHQvL2lmKCBwcm9wcy50aXRsZSE9dW5kZWZpbmVkKXt2YXJUaXRsZT1wcm9wcy50aXRsZX07XG5cblx0dmFyIHZhckNsYXNzID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5jbGFzcyxcImltZ1wiKTtcblx0Ly9pZiggcHJvcHMuY2xhc3MhPXVuZGVmaW5lZCl7dmFyQ2xhc3M9cHJvcHMuY2xhc3N9O1xuXG5cdHZhciB2YXJJZCA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuaWQsdmFyQ2xhc3MpO1xuXHQvL2lmKHByb3BzLmlkIT11bmRlZmluZWQpe3ZhcklkPXByb3BzLmlkfTtcblxuXHR2YXIgbW9kbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMubW9kbyxcImh0bWxcIik7XG5cdC8vaWYoIHByb3BzLm1vZG8hPXVuZGVmaW5lZCl7bW9kbz1wcm9wcy5tb2RvfTtcblxuXHQvL2lmKHVzZUFtcCgpKXsgXG5cdGlmIChtb2RvPT1cImFtcFwiIHx8IG1vZG89PVwiQU1QXCIpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGFtcC1pbWcgc3JjPXt2YXJTcmN9XG5cdFx0XHRcdFx0IGlkPXt2YXJJZH1cblx0XHRcdFx0XHQgd2lkdGg9e3ZhcldpZHRofVxuXHRcdFx0XHRcdCBoZWlnaHQ9e3ZhckhlaWdodH1cblx0XHRcdFx0XHQgYWx0PXt2YXJBbHR9XG5cdFx0XHRcdFx0IHRpdGxlPXt2YXJUaXRsZX1cblx0XHRcdFx0XHQgY2xhc3NOYW1lPXt2YXJDbGFzc30+XG5cdFx0XHRcdDwvYW1wLWltZz5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC4keyB2YXJDbGFzc30ge1xuXHRcdFx0XHRcdFx0c3JjOiR7IHZhclNyY31cblx0XHRcdFx0XHRcdHdpZHRoOiR7IHZhcldpZHRofVxuXHRcdFx0XHRcdFx0aGVpZ2h0PSR7IHZhckhlaWdodH1cblx0XHRcdFx0XHRcdGFsdD0keyB2YXJBbHR9XG5cdFx0XHRcdFx0XHR0aXRsZT0keyB2YXJUaXRsZX1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUyMXB4KSB7XG5cdFx0XHRcdFx0XHQuaGlkZU9uRGVza3RvcCB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xuXHRcdFx0XHRcdFx0LmhpZGVPbk1vYmlsZSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxpbWcgc3JjPXt2YXJTcmN9XG5cdFx0XHRcdCAgICAgaWQ9e3ZhcklkfVxuXHRcdFx0XHQgICAgIHdpZHRoPXt2YXJXaWR0aH1cblx0XHRcdFx0ICAgICBoZWlnaHQ9e3ZhckhlaWdodH1cblx0XHRcdFx0ICAgICBhbHQ9e3ZhckFsdH1cblx0XHRcdFx0ICAgICB0aXRsZT17dmFyVGl0bGV9XG5cdFx0XHRcdCAgICAgY2xhc3NOYW1lPXt2YXJDbGFzc30+XG5cdFx0XHRcdDwvaW1nPlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LiR7IHZhckNsYXNzfXtcblx0XHRcdFx0XHRcdHNyYzokeyB2YXJTcmN9XG5cdFx0XHRcdFx0XHR3aWR0aDokeyB2YXJXaWR0aH1cblx0XHRcdFx0XHRcdGhlaWdodD0keyB2YXJIZWlnaHR9XG5cdFx0XHRcdFx0XHRhbHQ9JHsgdmFyQWx0fVxuXHRcdFx0XHRcdFx0dGl0bGU9JHsgdmFyVGl0bGV9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MjFweCkge1xuXHRcdFx0XHRcdFx0LmhpZGVPbkRlc2t0b3Age1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcblx0XHRcdFx0XHRcdC5oaWRlT25Nb2JpbGUge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWdcbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atImg/index.js */")));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Img);

/***/ }),

/***/ "./components/moleculas/moAlerta.js":
/*!******************************************!*\
  !*** ./components/moleculas/moAlerta.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/atImg/index.js */ "./components/atoms/atImg/index.js");

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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, ".textAlertaErro.jsx-3360716845{font-family:\"SimplonBP-Regular\",Arial;font-size:1.25rem;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#303030;}.divAlertaErro.jsx-3360716845{padding:1.2rem;padding-top:5rem;margin:1.2rem;background-color:#ffffff;position :absolute;top:180px;-webkit-box-shadow:2px 2px 20px rgba(1,1,1,0.60);-moz-box-shadow:2px 2px 20px rgba(1,1,1,0.60);box-shadow:2px 2px 20px rgba(1,1,1,0.60);display :none;-webkit-animation:abreJanela-jsx-3360716845 1s ease 0s 1 normal none running;animation:abreJanela-jsx-3360716845 1s ease 0s 1 normal none running;}@-webkit-keyframes abreJanela-jsx-3360716845{0%{top:100px;opacity:0;}100%{top:180px;opacity:1;}}@keyframes abreJanela-jsx-3360716845{0%{top:100px;opacity:0;}100%{top:180px;opacity:1;}}.btLinklaranja.jsx-3360716845{font-family:oiTextRegular,sans-serif;background-color:#f8562c;background-image:linear-gradient(260deg,#fb851c,#f8562c);border-radius:6px;color:#ffffff;display:block;font-size:1rem;height:3.42857143rem;text-align:center;width:199px;-webkit-text-decoration:none;text-decoration:none;border-bottom:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;margin-top:100px;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition-duration:1s;transition-duration:1s;}.btLinklaranja.jsx-3360716845:hover{-webkit-transition-duration:1s;transition-duration:1s;color:#f8562c;border:solid 1px #fb851c;background-color:#ffffff;background-image:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vQWxlcnRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHaUQsQUFVdkIsQUFjSCxBQUlBLEFBSzBCLEFBc0JmLFVBOUJYLEFBSUEsS0FsQkssS0FlakIsQUFJQSxZQWxCYyxLQXNCVyxDQWpDUCxRQVlPLFFBMkNYLEVBdERLLE1BaUN3QyxNQXNCbEMsR0EzQ04sSUFYRCxlQVlSLEdBWFUsQUFzREssT0ExQzJCLGFBWHRDLEtBc0RRLENBdkJMLFFBOUJLLFVBK0JSLEdBdUJoQixTQTNDc0QsRUFxQnRDLGNBQ0MsZUFDTSxlQXRCK0IsTUF1QmxDLGtCQUNOLFlBQ1MsQ0FwQ1AsSUFZQSxVQVhoQixJQVl3RCwrQkF3QnRCLGdDQUNqQixlQUNMLFVBQ0QsU0FDUSxpQkFDRCxlQUNNLGlCQTdCeEIsS0E4Qm9CLGtCQUNLLHNEQUN6QiIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL21vbGVjdWxhcy9tb0FsZXJ0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxheW91dCBkZSBEb2N1bWVudG9zY29waWEgLSBQcm9qZXRvIFBpbG90b1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWcgZnJvbSAnLi4vYXRvbXMvYXRJbWcvaW5kZXguanMnO1xuXG5jb25zdCBtb0FsZXJ0YSA9IHByb3BzID0+IHtcbiAgdmFyIG1vZG8gPSBcImh0bWxcIjtcbiAgaWYoIHByb3BzLm1vZG8hPXVuZGVmaW5lZCl7bW9kbz1wcm9wcy5tb2RvfTtcblxuICBmdW5jdGlvbiBmZWNoYUFsZXJ0YUVycm8oKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFsZXJ0YUVycm9JbmZcIikuaW5uZXJIVE1MID0gXCJcIjsgIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2QWxlcnRhRXJyb1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHtmZWNoYUFsZXJ0YUVycm8oKX19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkFsZXJ0YUVycm9cIiBpZD1cImRpdkFsZXJ0YUVycm9cIj5cbiAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICA8SW1nXG4gICAgICAgICAgICBjbGFzcz1cIkFsZXJ0YUVycm9cIlxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9hc3NldHN2NS9pbWcvZG9jdW1lbnRvc2NvcGlhL2Vycm9faWNvLnBuZ1wiXG4gICAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dEFsZXJ0YUVycm9cIj5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwiQWxlcnRhRXJyb0luZlwiPk9wcyEgQWxnbyBlcnJhZG8uPGJyLz5JbWFnZW5zIG11aXRvIGdyYW5kZXMgb3UgZmFsdGFuZG8gYWxndW0gY2FtcG8uPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHtmZWNoYUFsZXJ0YUVycm8oKX19IGNsYXNzTmFtZT1cImJ0TGlua2xhcmFuamFcIiA+Vm9sdGFyPC9hPlxuICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50ZXh0QWxlcnRhRXJyb3tcbiAgICAgICAgICBmb250LWZhbWlseTogXCJTaW1wbG9uQlAtUmVndWxhclwiLEFyaWFsO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgLyoyMHB4Ki9cbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIGNvbG9yOiAjMzAzMDMwO1xuICAgICAgICB9XG4gICAgICAgIC5kaXZBbGVydGFFcnJve1xuICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgICAgICAgICBtYXJnaW46IDEuMnJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxODBweDtcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMjBweCByZ2JhKDEsIDEsIDEsIDAuNjApO1xuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogICAgMnB4IDJweCAyMHB4IHJnYmEoMSwgMSwgMSwgMC42MCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogICAgICAgICAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjYwKTtcbiAgICAgICAgICBkaXNwbGF5IDogbm9uZTtcbiAgICAgICAgICBhbmltYXRpb246IGFicmVKYW5lbGEgMXMgZWFzZSAwcyAxIG5vcm1hbCBub25lIHJ1bm5pbmc7XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBhYnJlSmFuZWxhe1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRvcDogMTgwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYnRMaW5rbGFyYW5qYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG9pVGV4dFJlZ3VsYXIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4NTYyYztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjYwZGVnLCAjZmI4NTFjLCAjZjg1NjJjKTsgXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czo2cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtOyAvKjE2cHgqL1xuICAgICAgICAgIGhlaWdodDogMy40Mjg1NzE0M3JlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDE5OXB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RiZGJkYjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMS4ycmVtIDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgfVxuICAgICAgICAuYnRMaW5rbGFyYW5qYTpob3ZlcntcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICBjb2xvcjogI2Y4NTYyYztcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZmI4NTFjO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIClcbn07XG4vL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5leHBvcnQgZGVmYXVsdCBtb0FsZXJ0YVxuXG5cbi8vIC5kaXZBbGVydGFFcnJve1xuLy8gICBwYWRkaW5nOiAxLjJyZW07XG4vLyAgIHBhZGRpbmctdG9wOiA1cmVtO1xuLy8gICBtYXJnaW46IDEuMnJlbTtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbi8vICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbi8vICAgdG9wOiAxODBweDtcbi8vICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjYwKTtcbi8vICAgLW1vei1ib3gtc2hhZG93OiAgICAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjYwKTtcbi8vICAgYm94LXNoYWRvdzogICAgICAgICAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjYwKTtcbi8vICAgZGlzcGxheSA6IG5vbmU7XG4vLyAgIGFuaW1hdGlvbjogYWJyZUphbmVsYSAxcyBlYXNlIDBzIDEgbm9ybWFsIG5vbmUgcnVubmluZztcbi8vIH1cbi8vIC5kaXZBbGVydGFFcnJvOmFjdGl2ZXtcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4vLyAgIHRvcDogMTAwcHg7XG4vLyAgIG9wYWNpdHk6IDA7XG4vLyAgIGRpc3BsYXkgOiBub25lO1xuLy8gfVxuLy8gQGtleWZyYW1lcyBhYnJlSmFuZWxhe1xuLy8gICAwJSB7XG4vLyAgICAgdG9wOiAxMDBweDtcbi8vICAgICBvcGFjaXR5OiAwO1xuLy8gICB9XG4vLyAgIDEwMCUge1xuLy8gICAgIHRvcDogMTgwcHg7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vICAgfVxuLy8gfVxuLy8gQGtleWZyYW1lcyBmZWNoYUphbmVsYXtcbi8vICAgMCUge1xuLy8gICAgIHRvcDogMTgwcHg7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vICAgfVxuLy8gICAxMDAlIHtcbi8vICAgICB0b3A6IDEwMHB4O1xuLy8gICAgIG9wYWNpdHk6IDA7XG4vLyAgIH1cbi8vIH0iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moAlerta.js */"));
}; //background-color: white;


/* harmony default export */ __webpack_exports__["default"] = (moAlerta); // .divAlertaErro{
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

/***/ "./components/templates/hubBusca.js":
/*!******************************************!*\
  !*** ./components/templates/hubBusca.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/atFavIcon */ "./components/atoms/atFavIcon/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controller/util.js */ "./controller/util.js");
/* harmony import */ var _moleculas_moAlerta_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../moleculas/moAlerta.js */ "./components/moleculas/moAlerta.js");
/* harmony import */ var _atoms_atCampoTexto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms/atCampoTexto */ "./components/atoms/atCampoTexto/index.js");




 // import Div from '../atoms/atDiv'
// import ListadeRotas from '../moleculas/moListadeRotas/index.js'
// import HeaderSideDoValente from '../moleculas/moHeaderSideDoValente/index.js'
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

var templateHub = function templateHub(props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Hub de Contatos Busca             ║');
  console.log('╚════════════════════════════════════════╝');
  var cidade = _controller_util_js__WEBPACK_IMPORTED_MODULE_4__["validaProps"](props.cidade, "Rio de Janeiro");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_4__["validaProps"](props.modo, "html");

  function enviar() {
    //const compress = new Compress()
    document.getElementById("divAlertaErro").style.display = "block";
    document.getElementById("AlertaErroInf").innerHTML = "Preparando para enviar...";
    var mensagemFinal = "";

    if (document.getElementById("contato").value == "") {
      mensagemFinal = "O campo não foi preenchido.";
    }

    if (mensagemFinal == "") {
      document.getElementById('formHubContato').submit();
    } else {
      document.getElementById("AlertaErroInf").innerHTML = mensagemFinal;
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2933740428"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2933740428"
  }, "Hub de Contato"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "Hub de Contato",
    className: "jsx-2933740428"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: "/hub/",
    className: "jsx-2933740428"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    action: "/api1/hubResposta",
    method: "get",
    id: "formHubContato",
    name: "formHubContato",
    encType: "multipart/form-data",
    className: "jsx-2933740428"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2933740428" + " " + "grupodecampos"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2933740428"
  }, "Entre com um CPF ou Conta Fatura no campo a baixo."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atCampoTexto__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    id: "contato",
    name: "contato",
    autocomplete: "contato",
    placeholder: "CPF ou Conta Fatura"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "erro",
    className: "jsx-2933740428"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: function onClick() {
      enviar();
    },
    className: "jsx-2933740428" + " " + "btLinklaranja"
  }, "Buscar contatos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "radio",
    name: "tipobusca",
    value: "cpf",
    checked: true,
    className: "jsx-2933740428"
  }), "Buscar por cpf", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2933740428"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "radio",
    name: "tipobusca",
    value: "fatura",
    className: "jsx-2933740428"
  }), "Buscar por conta fatura", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2933740428"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_moAlerta_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    modo: modo
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2933740428"
  }, ".btLinklaranja.jsx-2933740428{font-family:oiTextRegular,sans-serif;background-color:#f8562c;background-image:linear-gradient(260deg,#fb851c,#f8562c);border-radius:6px;color:#ffffff;display:block;font-size:16px;height:3.2rem;text-align:center;width:280px;-webkit-text-decoration:none;text-decoration:none;border-bottom:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;margin:10px;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition-duration:1s;transition-duration:1s;}.btLinklaranja.jsx-2933740428:hover{-webkit-transition-duration:1s;transition-duration:1s;color:#f8562c;border:solid 1px #fb851c;background-color:#ffffff;background-image:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2h1YkJ1c2NhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFa0IsQUFHbUQsQUFzQmYscUNBckJFLGlCQXNCWCxRQXJCNkMsTUFzQmxDLHlCQUNBLHlCQUNILENBdkJMLGtCQUNILEdBdUJoQixXQXRCZ0IsY0FDQyxlQUNELGNBQ0ksa0JBQ04sWUFDUyxrREFDVyxnQ0FDakIsZUFDTCxVQUNELFNBQ0csWUFDSSxlQUNNLHNCQUNKLGtCQUNLLHNEQUN6QiIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL3RlbXBsYXRlcy9odWJCdXNjYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBGYXZJY29uIGZyb20gJy4uL2F0b21zL2F0RmF2SWNvbidcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi4vLi4vY29udHJvbGxlci91dGlsLmpzJztcbi8vIGltcG9ydCBEaXYgZnJvbSAnLi4vYXRvbXMvYXREaXYnXG4vLyBpbXBvcnQgTGlzdGFkZVJvdGFzIGZyb20gJy4uL21vbGVjdWxhcy9tb0xpc3RhZGVSb3Rhcy9pbmRleC5qcydcbi8vIGltcG9ydCBIZWFkZXJTaWRlRG9WYWxlbnRlIGZyb20gJy4uL21vbGVjdWxhcy9tb0hlYWRlclNpZGVEb1ZhbGVudGUvaW5kZXguanMnXG4vLyBpbXBvcnQgQXJyb3cgZnJvbSAnLi4vYXRvbXMvYXRDYW1wb1RleHRvJztcbi8vIGltcG9ydCBCdExpbmsgZnJvbSAnLi4vYXRvbXMvYXRCdExpbmsnO1xuXG4vLyA9PT09PT0gY29waWFkbyBkZSBEb2N1bWVudG9zY29waWEgLSBQcm9qZXRvIFBpbG90byA9PT09PT1cbmltcG9ydCBBbGVydGEgZnJvbSAnLi4vbW9sZWN1bGFzL21vQWxlcnRhLmpzJ1xuaW1wb3J0IEF0Q2FtcG90ZXh0byBmcm9tICcuLi9hdG9tcy9hdENhbXBvVGV4dG8nO1xuLy9pbXBvcnQgRW52aWFBcnF1aXZvIGZyb20gJy4uLy4uL21vbGVjdWxhcy9tb0J0RW52aWFBcnF1aXZvLmpzJztcbi8vIGltcG9ydCBCdFN1Ym1pdCBmcm9tICcuLi8uLi9hdG9tcy9hdEJ0U3VibWl0L2luZGV4LmpzJztcbi8vIGltcG9ydCBBdENhbXBvSW52aXNpdmVsIGZyb20gJy4uLy4uL2F0b21zL2F0Q2FtcG9JbnZpc2l2ZWwvaW5kZXguanMnO1xuLy8gaW1wb3J0IENhcHRjaGEgZnJvbSAnLi4vLi4vbW9sZWN1bGFzL21vQ2FwdGNoYS5qcyc7XG4vLyBpbXBvcnQgQ29udGVudENhbXBvc0RvYyBmcm9tICcuL2NvbnRlbnRDYW1wb3NEb2MuanMnXG4vLyBpbXBvcnQgQXRMYWJlbENhbXBvIGZyb20gJy4vYXRMYWJlbENhbXBvLmpzJztcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cbmNvbnN0IHRlbXBsYXRlSHViID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKCfilZTilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZcnKTtcbiAgY29uc29sZS5sb2coJ+KVkSAgICAgIEh1YiBkZSBDb250YXRvcyBCdXNjYSAgICAgICAgICAgICDilZEnKTtcbiAgY29uc29sZS5sb2coJ+KVmuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVnScpO1xuICB2YXIgY2lkYWRlID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5jaWRhZGUsIFwiUmlvIGRlIEphbmVpcm9cIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLCBcImh0bWxcIik7XG5cbiAgZnVuY3Rpb24gZW52aWFyKCl7XG4gICAgLy9jb25zdCBjb21wcmVzcyA9IG5ldyBDb21wcmVzcygpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXZBbGVydGFFcnJvXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBbGVydGFFcnJvSW5mXCIpLmlubmVySFRNTCA9IFwiUHJlcGFyYW5kbyBwYXJhIGVudmlhci4uLlwiO1xuXG4gICAgdmFyIG1lbnNhZ2VtRmluYWwgPSBcIlwiO1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGF0b1wiKS52YWx1ZT09XCJcIil7XG4gICAgICBtZW5zYWdlbUZpbmFsID0gXCJPIGNhbXBvIG7Do28gZm9pIHByZWVuY2hpZG8uXCI7XG4gICAgfVxuICAgIFxuICAgIGlmIChtZW5zYWdlbUZpbmFsPT1cIlwiKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtSHViQ29udGF0bycpLnN1Ym1pdCgpXG4gICAgfWVsc2V7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFsZXJ0YUVycm9JbmZcIikuaW5uZXJIVE1MID0gbWVuc2FnZW1GaW5hbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkh1YiBkZSBDb250YXRvPC90aXRsZT5cbiAgICAgICAgPEZhdkljb24gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkh1YiBkZSBDb250YXRvXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cIi9odWIvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaTEvaHViUmVzcG9zdGFcIiBtZXRob2Q9XCJnZXRcIiBpZD1cImZvcm1IdWJDb250YXRvXCIgbmFtZT1cImZvcm1IdWJDb250YXRvXCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3J1cG9kZWNhbXBvc1wiPlxuICAgICAgICAgICAgICA8cD5FbnRyZSBjb20gdW0gQ1BGIG91IENvbnRhIEZhdHVyYSBubyBjYW1wbyBhIGJhaXhvLjwvcD5cbiAgICAgICAgICAgICAgPEF0Q2FtcG90ZXh0byB0eXBlPVwidGV4dFwiIGlkPVwiY29udGF0b1wiIG5hbWU9XCJjb250YXRvXCIgYXV0b2NvbXBsZXRlPVwiY29udGF0b1wiIHBsYWNlaG9sZGVyPVwiQ1BGIG91IENvbnRhIEZhdHVyYVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJlcnJvXCI+PC9zcGFuPlxuICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge2VudmlhcigpfX0gY2xhc3NOYW1lPVwiYnRMaW5rbGFyYW5qYVwiPkJ1c2NhciBjb250YXRvczwvYT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGlwb2J1c2NhXCIgdmFsdWU9XCJjcGZcIiBjaGVja2VkLz5CdXNjYXIgcG9yIGNwZjxici8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRpcG9idXNjYVwiIHZhbHVlPVwiZmF0dXJhXCIvPkJ1c2NhciBwb3IgY29udGEgZmF0dXJhPGJyLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICA8QWxlcnRhIG1vZG89e21vZG99Lz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYnRMaW5rbGFyYW5qYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogb2lUZXh0UmVndWxhciwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmODU2MmM7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjYwZGVnLCAjZmI4NTFjLCAjZjg1NjJjKTsgXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMuMnJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGJkYmRiO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbSA7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idExpbmtsYXJhbmphOmhvdmVye1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgICBjb2xvcjogI2Y4NTYyYztcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmYjg1MWM7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGVIdWJcblxuXG4gIFxuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/hubBusca.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (templateHub);

/***/ }),

/***/ "./controller/util.js":
/*!****************************!*\
  !*** ./controller/util.js ***!
  \****************************/
/*! exports provided: validaProps, apenasNumeros, fontesCSS, fontesCSS1, fontesCSS2, fontesCSS3, fontesCSS4, fontesCSS5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validaProps", function() { return validaProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apenasNumeros", function() { return apenasNumeros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontesCSS", function() { return fontesCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontesCSS1", function() { return fontesCSS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontesCSS2", function() { return fontesCSS2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontesCSS3", function() { return fontesCSS3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontesCSS4", function() { return fontesCSS4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontesCSS5", function() { return fontesCSS5; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
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

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
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
var isProd = process.env && "development" === 'production';

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

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

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

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

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

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/routes/hub/busca.js":
/*!***********************************!*\
  !*** ./pages/routes/hub/busca.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_hubBusca_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/templates/hubBusca.js */ "./components/templates/hubBusca.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");


 //import { withAmp } from 'next/amp';

var RotaHub = function RotaHub(props) {
  var cidade = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.url.query.cidade, "Rio de Janeiro");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_templates_hubBusca_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modo: "html",
    cidade: cidade
  });
}; //query={props.url.query}
//export default withAmp(RotaHub); // Usado para páginas AMP
//export default withAmp(RotaHub, { hybrid: true }); // Usado para páginas hibridas


/* harmony default export */ __webpack_exports__["default"] = (RotaHub); // Usado para páginas HTML

/***/ }),

/***/ 4:
/*!*****************************************!*\
  !*** multi ./pages/routes/hub/busca.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oi402825/Documentos/Projetos/site_do_valente/pages/routes/hub/busca.js */"./pages/routes/hub/busca.js");


/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=busca.js.map