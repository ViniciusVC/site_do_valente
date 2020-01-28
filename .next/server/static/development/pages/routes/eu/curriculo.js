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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/atoms/atDiv/index.js":
/*!*****************************************!*\
  !*** ./components/atoms/atDiv/index.js ***!
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


 //import { useAmp } from 'next/amp'

var atDiv = function atDiv(props) {
  var display = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.display, "vertical"); // vertical/horizontal/justificado/responsivo
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
    }, ".atDivVertical.jsx-2986009328{display:block;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JvQixBQUcyQixjQUNILFdBQ2IiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9hdG9tcy9hdERpdi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSBcIi4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qc1wiO1xuLy9pbXBvcnQgeyB1c2VBbXAgfSBmcm9tICduZXh0L2FtcCdcblxuY29uc3QgYXREaXYgPSBwcm9wcyA9PiB7XG4gIHZhciBkaXNwbGF5ID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5kaXNwbGF5LCBcInZlcnRpY2FsXCIpOyAvLyB2ZXJ0aWNhbC9ob3Jpem9udGFsL2p1c3RpZmljYWRvL3Jlc3BvbnNpdm9cbiAgLy92YXIgdmFyV2lkdGggPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLndpZHRoLCBcIjEwMCVcIik7XG4gIC8vdmFyIHZhckhlaWdodCA9IFwiXCI7XG4gIC8vaWYoIHByb3BzLmhlaWdodCE9dW5kZWZpbmVkKXt2YXJIZWlnaHQ9XCJoZWlnaHQ6XCIrcHJvcHMuaGVpZ2h0K1wiO1wifTtcbiAgLy8ke3ZhckhlaWdodH1cbiAgLy93aWR0aDoke3ZhcldpZHRofVxuXG4gIGlmIChkaXNwbGF5ID09IFwidmVydGljYWxcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2VmVydGljYWxcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmF0RGl2VmVydGljYWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZGlzcGxheSA9PSBcImp1c3RpZmljYWRvXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdkp1c3RpZmljYWRvXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hdERpdkp1c3RpZmljYWRvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChkaXNwbGF5ID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXREaXZIb3Jpem9udGFsXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hdERpdkhvcml6b250YWwge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfWVsc2UgaWYoZGlzcGxheSA9PSBcIkRpdkxpbmhhUmVzcG9uc2l2b1wiKXtcbiAgICAgcmV0dXJuKFxuICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEaXZsaW5oYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGl2bGluaGF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE2OXB4KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5EaXZsaW5oYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDc2OHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo2MDBweCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuRGl2bGluaGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICApXG5cbiAgfWVsc2V7XG4gICAgLy9kaXNwbGF5PT1cInJlc3BvbnNpdm9cIlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2UmVzcG9uc2l2b1wiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgLmF0RGl2UmVzcG9uc2l2byB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgIC5hdERpdlJlc3BvbnNpdm8ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdERpdjtcbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atDiv/index.js */"));
  } else if (display == "justificado") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1020970130" + " " + "atDivJustificado"
    }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1020970130"
    }, ".atDivJustificado.jsx-1020970130{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJvQixBQUcwQiwwRUFDaUIsbUhBQ3BCLFVBQ1oiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9hdG9tcy9hdERpdi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSBcIi4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qc1wiO1xuLy9pbXBvcnQgeyB1c2VBbXAgfSBmcm9tICduZXh0L2FtcCdcblxuY29uc3QgYXREaXYgPSBwcm9wcyA9PiB7XG4gIHZhciBkaXNwbGF5ID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5kaXNwbGF5LCBcInZlcnRpY2FsXCIpOyAvLyB2ZXJ0aWNhbC9ob3Jpem9udGFsL2p1c3RpZmljYWRvL3Jlc3BvbnNpdm9cbiAgLy92YXIgdmFyV2lkdGggPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLndpZHRoLCBcIjEwMCVcIik7XG4gIC8vdmFyIHZhckhlaWdodCA9IFwiXCI7XG4gIC8vaWYoIHByb3BzLmhlaWdodCE9dW5kZWZpbmVkKXt2YXJIZWlnaHQ9XCJoZWlnaHQ6XCIrcHJvcHMuaGVpZ2h0K1wiO1wifTtcbiAgLy8ke3ZhckhlaWdodH1cbiAgLy93aWR0aDoke3ZhcldpZHRofVxuXG4gIGlmIChkaXNwbGF5ID09IFwidmVydGljYWxcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2VmVydGljYWxcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmF0RGl2VmVydGljYWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZGlzcGxheSA9PSBcImp1c3RpZmljYWRvXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdkp1c3RpZmljYWRvXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hdERpdkp1c3RpZmljYWRvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChkaXNwbGF5ID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXREaXZIb3Jpem9udGFsXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hdERpdkhvcml6b250YWwge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfWVsc2UgaWYoZGlzcGxheSA9PSBcIkRpdkxpbmhhUmVzcG9uc2l2b1wiKXtcbiAgICAgcmV0dXJuKFxuICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEaXZsaW5oYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGl2bGluaGF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE2OXB4KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5EaXZsaW5oYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDc2OHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo2MDBweCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuRGl2bGluaGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICApXG5cbiAgfWVsc2V7XG4gICAgLy9kaXNwbGF5PT1cInJlc3BvbnNpdm9cIlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2UmVzcG9uc2l2b1wiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgLmF0RGl2UmVzcG9uc2l2byB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgIC5hdERpdlJlc3BvbnNpdm8ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdERpdjtcbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atDiv/index.js */"));
  } else if (display == "horizontal") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2879585090" + " " + "atDivHorizontal"
    }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2879585090"
    }, ".atDivHorizontal.jsx-2879585090{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNvQixBQUdpQyxzR0FDTCx5REFDSixXQUNiIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gXCIuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanNcIjtcbi8vaW1wb3J0IHsgdXNlQW1wIH0gZnJvbSAnbmV4dC9hbXAnXG5cbmNvbnN0IGF0RGl2ID0gcHJvcHMgPT4ge1xuICB2YXIgZGlzcGxheSA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuZGlzcGxheSwgXCJ2ZXJ0aWNhbFwiKTsgLy8gdmVydGljYWwvaG9yaXpvbnRhbC9qdXN0aWZpY2Fkby9yZXNwb25zaXZvXG4gIC8vdmFyIHZhcldpZHRoID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy53aWR0aCwgXCIxMDAlXCIpO1xuICAvL3ZhciB2YXJIZWlnaHQgPSBcIlwiO1xuICAvL2lmKCBwcm9wcy5oZWlnaHQhPXVuZGVmaW5lZCl7dmFySGVpZ2h0PVwiaGVpZ2h0OlwiK3Byb3BzLmhlaWdodCtcIjtcIn07XG4gIC8vJHt2YXJIZWlnaHR9XG4gIC8vd2lkdGg6JHt2YXJXaWR0aH1cblxuICBpZiAoZGlzcGxheSA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdlZlcnRpY2FsXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hdERpdlZlcnRpY2FsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKGRpc3BsYXkgPT0gXCJqdXN0aWZpY2Fkb1wiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXREaXZKdXN0aWZpY2Fkb1wiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXREaXZKdXN0aWZpY2FkbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZGlzcGxheSA9PSBcImhvcml6b250YWxcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2SG9yaXpvbnRhbFwiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXREaXZIb3Jpem9udGFsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1lbHNlIGlmKGRpc3BsYXkgPT0gXCJEaXZMaW5oYVJlc3BvbnNpdm9cIil7XG4gICAgIHJldHVybihcbiAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGl2bGluaGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgICAgICAgICAgICAgLkRpdmxpbmhhe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNjlweCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuRGl2bGluaGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbiA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3NjhweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NjAwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkRpdmxpbmhhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgKVxuXG4gIH1lbHNle1xuICAgIC8vZGlzcGxheT09XCJyZXNwb25zaXZvXCJcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdlJlc3BvbnNpdm9cIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgIC5hdERpdlJlc3BvbnNpdm8ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgICAgICAuYXREaXZSZXNwb25zaXZvIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXREaXY7XG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atDiv/index.js */"));
  } else if (display == "DivLinhaResponsivo") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2728625984" + " " + "Divlinha"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2728625984"
    }, ".Divlinha.jsx-2728625984{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 20px;}@media (max-width:1169px){.Divlinha.jsx-2728625984{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;max-width:768px;}@media(max-width:600px){.Divlinha.jsx-2728625984{margin-right:20px;}}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RvQyxBQUl5QyxBQVFJLEFBWU0sa0JBQ3BCLHdEQXBCNEIsQUFRSiw4RUFDSCxtQkFDRCxrQkFUVCxBQVVTLGNBVDFCLElBVXlCLGlCQUNELGdCQUVsQiIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL2F0b21zL2F0RGl2L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tIFwiLi4vLi4vLi4vY29udHJvbGxlci91dGlsLmpzXCI7XG4vL2ltcG9ydCB7IHVzZUFtcCB9IGZyb20gJ25leHQvYW1wJ1xuXG5jb25zdCBhdERpdiA9IHByb3BzID0+IHtcbiAgdmFyIGRpc3BsYXkgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLmRpc3BsYXksIFwidmVydGljYWxcIik7IC8vIHZlcnRpY2FsL2hvcml6b250YWwvanVzdGlmaWNhZG8vcmVzcG9uc2l2b1xuICAvL3ZhciB2YXJXaWR0aCA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMud2lkdGgsIFwiMTAwJVwiKTtcbiAgLy92YXIgdmFySGVpZ2h0ID0gXCJcIjtcbiAgLy9pZiggcHJvcHMuaGVpZ2h0IT11bmRlZmluZWQpe3ZhckhlaWdodD1cImhlaWdodDpcIitwcm9wcy5oZWlnaHQrXCI7XCJ9O1xuICAvLyR7dmFySGVpZ2h0fVxuICAvL3dpZHRoOiR7dmFyV2lkdGh9XG5cbiAgaWYgKGRpc3BsYXkgPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXREaXZWZXJ0aWNhbFwiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXREaXZWZXJ0aWNhbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChkaXNwbGF5ID09IFwianVzdGlmaWNhZG9cIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2SnVzdGlmaWNhZG9cIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmF0RGl2SnVzdGlmaWNhZG8ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKGRpc3BsYXkgPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdkhvcml6b250YWxcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmF0RGl2SG9yaXpvbnRhbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9ZWxzZSBpZihkaXNwbGF5ID09IFwiRGl2TGluaGFSZXNwb25zaXZvXCIpe1xuICAgICByZXR1cm4oXG4gICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRpdmxpbmhhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5EaXZsaW5oYXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTY5cHgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkRpdmxpbmhhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW4gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzY4cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjYwMHB4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5EaXZsaW5oYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgIClcblxuICB9ZWxzZXtcbiAgICAvL2Rpc3BsYXk9PVwicmVzcG9uc2l2b1wiXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXREaXZSZXNwb25zaXZvXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgICAgICAuYXREaXZSZXNwb25zaXZvIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgLmF0RGl2UmVzcG9uc2l2byB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0RGl2O1xuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atDiv/index.js */"));
  } else {
    //display=="responsivo"
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1144856795" + " " + "atDivResponsivo"
    }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1144856795"
    }, "@media only screen and (min-width:1000px){.atDivResponsivo.jsx-1144856795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media only screen and (max-width:1000px){.atDivResponsivo.jsx-1144856795{display:block;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0ZvQixBQUk0QixBQU1DLGNBQ0gsV0FDYixpREFQZ0MsbUhBQ2hDIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gXCIuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanNcIjtcbi8vaW1wb3J0IHsgdXNlQW1wIH0gZnJvbSAnbmV4dC9hbXAnXG5cbmNvbnN0IGF0RGl2ID0gcHJvcHMgPT4ge1xuICB2YXIgZGlzcGxheSA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuZGlzcGxheSwgXCJ2ZXJ0aWNhbFwiKTsgLy8gdmVydGljYWwvaG9yaXpvbnRhbC9qdXN0aWZpY2Fkby9yZXNwb25zaXZvXG4gIC8vdmFyIHZhcldpZHRoID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy53aWR0aCwgXCIxMDAlXCIpO1xuICAvL3ZhciB2YXJIZWlnaHQgPSBcIlwiO1xuICAvL2lmKCBwcm9wcy5oZWlnaHQhPXVuZGVmaW5lZCl7dmFySGVpZ2h0PVwiaGVpZ2h0OlwiK3Byb3BzLmhlaWdodCtcIjtcIn07XG4gIC8vJHt2YXJIZWlnaHR9XG4gIC8vd2lkdGg6JHt2YXJXaWR0aH1cblxuICBpZiAoZGlzcGxheSA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdlZlcnRpY2FsXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hdERpdlZlcnRpY2FsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKGRpc3BsYXkgPT0gXCJqdXN0aWZpY2Fkb1wiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXREaXZKdXN0aWZpY2Fkb1wiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXREaXZKdXN0aWZpY2FkbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZGlzcGxheSA9PSBcImhvcml6b250YWxcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2SG9yaXpvbnRhbFwiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXREaXZIb3Jpem9udGFsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1lbHNlIGlmKGRpc3BsYXkgPT0gXCJEaXZMaW5oYVJlc3BvbnNpdm9cIil7XG4gICAgIHJldHVybihcbiAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGl2bGluaGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgICAgICAgICAgICAgLkRpdmxpbmhhe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNjlweCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuRGl2bGluaGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbiA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3NjhweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NjAwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkRpdmxpbmhhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgKVxuXG4gIH1lbHNle1xuICAgIC8vZGlzcGxheT09XCJyZXNwb25zaXZvXCJcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdlJlc3BvbnNpdm9cIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgIC5hdERpdlJlc3BvbnNpdm8ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgICAgICAuYXREaXZSZXNwb25zaXZvIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXREaXY7XG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atDiv/index.js */"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (atDiv);

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

/***/ "./components/moleculas/moHeaderSideDoValente/index.js":
/*!*************************************************************!*\
  !*** ./components/moleculas/moHeaderSideDoValente/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

 //console.log('moHeaderSideDoValente ');

var moHeaderSideDoValente = function moHeaderSideDoValente(props) {
  var cidade = props.cidade;
  var modo = props.modo;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1731064142" + " " + 'DivHeaderSideDoValente'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1731064142"
  }, "Site do Valente", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1731064142"
  }), "Cidade : ", cidade, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1731064142"
  }), "Modo : ", modo), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1731064142"
  }, ".DivHeaderSideDoValente.jsx-1731064142{background-color:#696969;width:100%;color:#333;font-size:17px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFha0IsQUFHa0MseUJBQ2QsV0FDQSxXQUNJLGVBQ2pCIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy9jb25zb2xlLmxvZygnbW9IZWFkZXJTaWRlRG9WYWxlbnRlICcpO1xuXG5jb25zdCBtb0hlYWRlclNpZGVEb1ZhbGVudGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgdmFyIGNpZGFkZSA9IHByb3BzLmNpZGFkZTtcbiAgdmFyIG1vZG8gPSBwcm9wcy5tb2RvO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J0RpdkhlYWRlclNpZGVEb1ZhbGVudGUnPlxuICAgICAgPHA+U2l0ZSBkbyBWYWxlbnRlPGJyLz5cbiAgICAgIENpZGFkZSA6IHtjaWRhZGV9PGJyLz5cbiAgICAgIE1vZG8gOiB7bW9kb308L3A+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuRGl2SGVhZGVyU2lkZURvVmFsZW50ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTY5Njk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb0hlYWRlclNpZGVEb1ZhbGVudGVcbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moHeaderSideDoValente/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (moHeaderSideDoValente);

/***/ }),

/***/ "./components/moleculas/moListadeRotas/index.js":
/*!******************************************************!*\
  !*** ./components/moleculas/moListadeRotas/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


 //console.log('Instanciando templates/index.js');

var ListadeRotas = function ListadeRotas() {
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
  }, "HTML5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/html5/"
  }, "HTML5 Introdu\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/amp/codigo/html5/"
  }, "HTML5 Introdu\xE7\xE3o (Pagina AMP)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Estrutura da P\xE1gina HTML5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/amp/codigo/"
  }, "Estrutura da P\xE1gina HTML5 (Pagina AMP)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Titulo, Par\xE1grafo e Quebra de Linha"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/amp/codigo/"
  }, "Titulo, Par\xE1grafo e Quebra de Linha (Pagina AMP)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Listas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "N\xE3o ordenada"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Ordenada (type=1)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Ordenada (type=A)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Ordenada (type=i)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Ordenada (type=I)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Com descri\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Imagem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Imagens"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "MAP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Figure e Figcaption"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Iframe"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Links"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Tabelas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Tabelas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Tabelas Style"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Div e Span"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Coment\xE1rios"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Midia"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Audio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "V\xEDdeo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Video (Criando legendas)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Object"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Formul\xE1rio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Formul\xE1rios"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "com legenda)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "atributos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "campos: radio e checkbox)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "campos: Number, Range e Color)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Autocomplete e Placeholder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Types: File, Hidden, Search, URL, Tel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Types Date, Time, Month, Week, Datetime local"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Textarea, Spellcheck"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Select, Optgroup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Formul\xE1rios Datalist)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Formul\xE1rios Form, Formaction, Formmethod, Formenctype, Formnovalidate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Mark e Contenteditable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Tabindex e Accesskey"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Formul\xE1rio Campo (Keygen)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Hgroup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Meter e Progresse"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Tag link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Time e Datetime"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Menu e Menuitem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "SVG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "rect"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "ellipse, text"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "line, polygon, polyline"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Carrosel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Carrosel 01"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Carrosel 02"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/"
  }, "Semantica"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3980931307"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "CSS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "Introdu\xE7\xE3o ao CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "Estilizando textos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "Imagens de fundo e atributo text")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "Links e Divs")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "Classe, ID e Span")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "Margin, padding e floatAula 07 - Posicionamento de elementos, bordas e z-index")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "- - - -")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "Efeitos com o atributo hover")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "Heran\xE7a")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "Criando um menu com listas")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "Menu drop-down")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "Valida\xE7\xE3o e Web Standards")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/css/"
  }, "Tabelas Style")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "JavaScript"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/javascript"
  }, "Script")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Knockout JS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/knockout/"
  }, "knockout JS exemplo 01")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/knockout/"
  }, "knockout JS exemplo 02")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/knockout/"
  }, "knockout JS exemplo 03")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/knockout/"
  }, "knockout JS exemplo 04")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/knockout/"
  }, "knockout JS exemplo 05")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/knockout/"
  }, "knockout JS exemplo 06")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Apache"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/apache/"
  }, "Apache")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/apache/instalubuntu"
  }, "Instalar Apache no Ubuntu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/apache/alias"
  }, "Alias em Apache")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/apache/redirect"
  }, "redirect 301 em Apache")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "PHP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/php/"
  }, "redirect 301 no PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/php/"
  }, "encontrar arquivio no PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/php/"
  }, "encontrar diretorio no PHP")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Ruby on Rails"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/rubyonrails/"
  }, "redirect 301 em Ruby on Rails")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "ColdFusion"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/coldfusion/"
  }, "redirect 301 em ColdFusion")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "ASP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/asp/"
  }, "ASP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/asp/redirect"
  }, "redirect 301 em ASP")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, ".NET"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/.net/"
  }, "redirect 301 em ASP.NET")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Java"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/java/"
  }, "redirect 301 em JSP")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "CGI PERL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/codigo/cgi/"
  }, "redirect 301 em CGI")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Hub de Contato"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/hub/"
  }, "Teste API Hub de Contato")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "Componentes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/componentes/"
  }, "Componentes")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-3980931307"
  }, "EU"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/eu/curriculo/"
  }, "Curriculo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/amp/eu/curriculo/"
  }, "Curriculo (Pagina AMP)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/eu/"
  }, "Quem Sou Eu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/amp/eu/"
  }, "Quem Sou Eu (Pagina AMP)"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3980931307"
  }, ".CssRotasProjeto.jsx-3980931307{width:100%;color:#333;font-size:17px;}.CssTitleRotasProjeto.jsx-3980931307{margin:0;width:100%;padding-top:10px;font-size:22px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vTGlzdGFkZVJvdGFzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStQa0IsQUFHb0IsQUFLRixTQUNFLEVBTEEsU0FNTSxFQUxGLGVBQ2pCLEFBS2lCLGVBQ2pCIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vTGlzdGFkZVJvdGFzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cbi8vY29uc29sZS5sb2coJ0luc3RhbmNpYW5kbyB0ZW1wbGF0ZXMvaW5kZXguanMnKTtcblxuY29uc3QgTGlzdGFkZVJvdGFzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDQgY2xhc3NOYW1lPSdDc3NUaXRsZVJvdGFzUHJvamV0byc+Um90YXMgZG8gU2l0ZSBkbyBWYWxlbnRlPC9oND5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdDc3NSb3Rhc1Byb2pldG8nPlxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT5IVE1MNTwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2RpZ28vaHRtbDUvXCI+SFRNTDUgSW50cm9kdcOnw6NvPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hbXAvY29kaWdvL2h0bWw1L1wiPkhUTUw1IEludHJvZHXDp8OjbyAoUGFnaW5hIEFNUCk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5Fc3RydXR1cmEgZGEgUMOhZ2luYSBIVE1MNTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYW1wL2NvZGlnby9cIj5Fc3RydXR1cmEgZGEgUMOhZ2luYSBIVE1MNSAoUGFnaW5hIEFNUCk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5UaXR1bG8sIFBhcsOhZ3JhZm8gZSBRdWVicmEgZGUgTGluaGE8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FtcC9jb2RpZ28vXCI+VGl0dWxvLCBQYXLDoWdyYWZvIGUgUXVlYnJhIGRlIExpbmhhIChQYWdpbmEgQU1QKTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgIDxzdW1tYXJ5Pkxpc3Rhczwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5Ow6NvIG9yZGVuYWRhPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPk9yZGVuYWRhICh0eXBlPTEpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPk9yZGVuYWRhICh0eXBlPUEpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPk9yZGVuYWRhICh0eXBlPWkpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPk9yZGVuYWRhICh0eXBlPUkpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPkNvbSBkZXNjcmnDp8OjbzwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgICAgPHN1bW1hcnk+SW1hZ2VtPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPkltYWdlbnM8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2RpZ28vXCI+TUFQPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPkZpZ3VyZSBlIEZpZ2NhcHRpb248L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPklmcmFtZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPkxpbmtzPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgICAgPHN1bW1hcnk+VGFiZWxhczwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5UYWJlbGFzPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPlRhYmVsYXMgU3R5bGU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPkRpdiBlIFNwYW48L0xpbms+PGJyIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5Db21lbnTDoXJpb3M8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgICA8c3VtbWFyeT5NaWRpYTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5BdWRpbzwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5Ww61kZW88L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2RpZ28vXCI+VmlkZW8gKENyaWFuZG8gbGVnZW5kYXMpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPk9iamVjdDwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgICAgPHN1bW1hcnk+Rm9ybXVsw6FyaW88L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2RpZ28vXCI+Rm9ybXVsw6FyaW9zPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPmNvbSBsZWdlbmRhKTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5hdHJpYnV0b3M8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2RpZ28vXCI+Y2FtcG9zOiByYWRpbyBlIGNoZWNrYm94KTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5jYW1wb3M6IE51bWJlciwgUmFuZ2UgZSBDb2xvcik8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2RpZ28vXCI+QXV0b2NvbXBsZXRlIGUgUGxhY2Vob2xkZXI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2RpZ28vXCI+VHlwZXM6IEZpbGUsIEhpZGRlbiwgU2VhcmNoLCBVUkwsIFRlbDwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5UeXBlcyBEYXRlLCBUaW1lLCBNb250aCwgV2VlaywgRGF0ZXRpbWUgbG9jYWw8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2RpZ28vXCI+VGV4dGFyZWEsIFNwZWxsY2hlY2s8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2RpZ28vXCI+QnV0dG9uPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPlNlbGVjdCwgT3B0Z3JvdXA8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2RpZ28vXCI+Rm9ybXVsw6FyaW9zIERhdGFsaXN0KTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5Gb3JtdWzDoXJpb3MgRm9ybSwgRm9ybWFjdGlvbiwgRm9ybW1ldGhvZCwgRm9ybWVuY3R5cGUsIEZvcm1ub3ZhbGlkYXRlPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPlxuICAgICAgICAgICAgICAgICAgTWFyayBlIENvbnRlbnRlZGl0YWJsZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5cbiAgICAgICAgICAgICAgICAgIFRhYmluZGV4IGUgQWNjZXNza2V5PC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPlxuICAgICAgICAgICAgICAgICAgRm9ybXVsw6FyaW8gQ2FtcG8gKEtleWdlbik8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPkRldGFpbHM8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5IZ3JvdXA8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPk1ldGVyIGUgUHJvZ3Jlc3NlPC9MaW5rPjxiciAvPlxuXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPlRhZyBsaW5rPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5UaW1lIGUgRGF0ZXRpbWU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPk1lbnUgZSBNZW51aXRlbTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgIDxzdW1tYXJ5PlNWRzwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5yZWN0PC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPmVsbGlwc2UsIHRleHQ8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2RpZ28vXCI+bGluZSwgcG9seWdvbiwgcG9seWxpbmU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgIDxzdW1tYXJ5PkNhcnJvc2VsPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPkNhcnJvc2VsIDAxPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29kaWdvL1wiPkNhcnJvc2VsIDAyPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvZGlnby9cIj5TZW1hbnRpY2E8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGV0YWlscz5cblxuXG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5PkNTUzwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9jc3MvXCI+SW50cm9kdcOnw6NvIGFvIENTUzwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvY29kaWdvL2Nzcy9cIj5Fc3RpbGl6YW5kbyB0ZXh0b3M8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9jc3MvXCI+SW1hZ2VucyBkZSBmdW5kbyBlIGF0cmlidXRvIHRleHQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9jc3MvXCI+TGlua3MgZSBEaXZzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28vY3NzL1wiPkNsYXNzZSwgSUQgZSBTcGFuPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28vY3NzL1wiPk1hcmdpbiwgcGFkZGluZyBlIGZsb2F0QXVsYSAwNyAtIFBvc2ljaW9uYW1lbnRvIGRlIGVsZW1lbnRvcywgYm9yZGFzIGUgei1pbmRleDwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvY29kaWdvL2Nzcy9cIj4tIC0gLSAtPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28vY3NzL1wiPkVmZWl0b3MgY29tIG8gYXRyaWJ1dG8gaG92ZXI8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9jc3MvXCI+SGVyYW7Dp2E8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9jc3MvXCI+Q3JpYW5kbyB1bSBtZW51IGNvbSBsaXN0YXM8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9jc3MvXCIgPk1lbnUgZHJvcC1kb3duPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28vY3NzL1wiID5WYWxpZGHDp8OjbyBlIFdlYiBTdGFuZGFyZHM8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9jc3MvXCIgPlRhYmVsYXMgU3R5bGU8L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5PkphdmFTY3JpcHQ8L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28vamF2YXNjcmlwdFwiPlNjcmlwdDwvTGluaz48L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+S25vY2tvdXQgSlM8L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28va25vY2tvdXQvXCI+a25vY2tvdXQgSlMgZXhlbXBsbyAwMTwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvY29kaWdvL2tub2Nrb3V0L1wiPmtub2Nrb3V0IEpTIGV4ZW1wbG8gMDI8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9rbm9ja291dC9cIj5rbm9ja291dCBKUyBleGVtcGxvIDAzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28va25vY2tvdXQvXCI+a25vY2tvdXQgSlMgZXhlbXBsbyAwNDwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvY29kaWdvL2tub2Nrb3V0L1wiPmtub2Nrb3V0IEpTIGV4ZW1wbG8gMDU8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9rbm9ja291dC9cIj5rbm9ja291dCBKUyBleGVtcGxvIDA2PC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5PkFwYWNoZTwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28vYXBhY2hlL1wiPkFwYWNoZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvY29kaWdvL2FwYWNoZS9pbnN0YWx1YnVudHVcIj5JbnN0YWxhciBBcGFjaGUgbm8gVWJ1bnR1PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28vYXBhY2hlL2FsaWFzXCI+QWxpYXMgZW0gQXBhY2hlPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28vYXBhY2hlL3JlZGlyZWN0XCI+cmVkaXJlY3QgMzAxIGVtIEFwYWNoZTwvTGluaz48L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT5QSFA8L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28vcGhwL1wiID5yZWRpcmVjdCAzMDEgbm8gUEhQPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28vcGhwL1wiPmVuY29udHJhciBhcnF1aXZpbyBubyBQSFA8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9waHAvXCI+ZW5jb250cmFyIGRpcmV0b3JpbyBubyBQSFA8L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+UnVieSBvbiBSYWlsczwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9ydWJ5b25yYWlscy9cIj5yZWRpcmVjdCAzMDEgZW0gUnVieSBvbiBSYWlsczwvTGluaz48L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT5Db2xkRnVzaW9uPC9zdW1tYXJ5PlxuICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvY29kaWdvL2NvbGRmdXNpb24vXCI+cmVkaXJlY3QgMzAxIGVtIENvbGRGdXNpb248L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+QVNQPC9zdW1tYXJ5PlxuICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvY29kaWdvL2FzcC9cIj5BU1A8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9hc3AvcmVkaXJlY3RcIj5yZWRpcmVjdCAzMDEgZW0gQVNQPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5Pi5ORVQ8L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb2RpZ28vLm5ldC9cIj5yZWRpcmVjdCAzMDEgZW0gQVNQLk5FVDwvTGluaz48L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT5KYXZhPC9zdW1tYXJ5PlxuICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvY29kaWdvL2phdmEvXCI+cmVkaXJlY3QgMzAxIGVtIEpTUDwvTGluaz48L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT5DR0kgUEVSTDwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvZGlnby9jZ2kvXCI+cmVkaXJlY3QgMzAxIGVtIENHSTwvTGluaz48L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+SHViIGRlIENvbnRhdG88L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9odWIvXCI+VGVzdGUgQVBJIEh1YiBkZSBDb250YXRvPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT5Db21wb25lbnRlczwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvbXBvbmVudGVzL1wiPkNvbXBvbmVudGVzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT5FVTwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2V1L2N1cnJpY3Vsby9cIj5DdXJyaWN1bG88L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2FtcC9ldS9jdXJyaWN1bG8vXCI+Q3VycmljdWxvIChQYWdpbmEgQU1QKTwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvZXUvXCI+UXVlbSBTb3UgRXU8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2FtcC9ldS9cIj5RdWVtIFNvdSBFdSAoUGFnaW5hIEFNUCk8L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5Dc3NSb3Rhc1Byb2pldG8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIH1cbiAgICAgIC5Dc3NUaXRsZVJvdGFzUHJvamV0byB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RhZGVSb3Rhc1xuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moListadeRotas/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ListadeRotas);

/***/ }),

/***/ "./components/templates/curriculo.js":
/*!*******************************************!*\
  !*** ./components/templates/curriculo.js ***!
  \*******************************************/
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
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/atDiv */ "./components/atoms/atDiv/index.js");
/* harmony import */ var _moleculas_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../moleculas/moListadeRotas/index.js */ "./components/moleculas/moListadeRotas/index.js");
/* harmony import */ var _moleculas_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moleculas/moHeaderSideDoValente/index.js */ "./components/moleculas/moHeaderSideDoValente/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../controller/util.js */ "./controller/util.js");









var templateHome = function templateHome(props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Curriculo                         ║');
  console.log('╚════════════════════════════════════════╝');
  var cidade = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["validaProps"](props.cidade, "Rio de Janeiro");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["validaProps"](props.modo, "html");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Vin\xEDcius Valente Coutinho"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "Curriculo Vin\xEDcius Valente Coutinho",
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: "/curriculo/",
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    cidade: cidade,
    modo: modo
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]]) + " " + "HomeListadeRotas"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]]) + " " + "HomeIndex"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "CURR\xCDCULO"), "Vinicius Valente Coutinho", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "CONTATO:"), "Residencia em RJ, bairro Anil-Jacarepagua na cidade do Rio de janeiro.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }), "Residencia em MG, bairro Parte Alta na cidade de Bicas.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }), "E-mail : vinivalent@gmail.com", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }), "Linkedin : https://www.linkedin.com/in/vin%C3%ADcius-valente-51989523/", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }), "Google Sites : https://sites.google.com/view/viniciusvalente/ GitHub : https://github.com/ViniciusVC/", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "OBJETIVOS:"), "Gerente de Desenvolvimento de Sistemas", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "HIST\xD3RICO PROFISSIONAL:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Oi - Atualmente des de 04/09/2017"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "11/11/2019 - Especialista - Equipe Insights:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Lider t\xE9cnico de projeto Big Data.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "12/06/2018 - Especialista - Equipes e-commerce e SEO:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Lider t\xE9cnico do projeto AMP, gerado em servidor NodeJS."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Configura\xE7\xE3o dos Apaches do site da Oi."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Configura\xE7\xE3o da CDN-AWS.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "04/09/2017 - Analista S\xEAnior de Relacionamento Digital."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Squad Portal Oi - Manuten\xE7\xE3o da Home do Portal da Oi."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Squad WebOps - Cria\xE7\xE3o de padr\xF5es e melhoria de c\xF3digo frontend.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Consultor. De 2015 a 2016"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Consorcior de solu\xE7\xE3o web para Consorcio Intermunicipal de Especialidades")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "DBA (alocado na TV Globo) - Consultor. De 16/11/2010 a 31/2/2014"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Analisar e compreender as exig\xEAncias e funcionalidades que o sistema e aplica\xE7\xE3o devera executar de acordo com os requisitos definidos pela equipe de Internet da CGP; "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Apontar falas corre\xE7\xF5es e melhorias de sistemas existentes;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Definir escopo do projeto e  padr\xF5es de arquitetura;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Acompanhamento do ciclo de vida dos sistemas e aplica\xE7\xF5es WEB, apontando melhorias da estrutura existente. Melhorar as t\xE9cnicas e conceitos existentes, considerando o volume de processamento e o or\xE7amento dispon\xEDvel;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Suporte aos usu\xE1rios na implanta\xE7\xE3o e na utiliza\xE7\xE3o de novos sistemas e suporte aos analistas em casos de problemas;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Cria\xE7\xE3o de prot\xF3tipos de Aplica\xE7\xF5es.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Stefanini (alocado no IRB Brasil Re) - Analista de Qualidade Pleno. De 10/2009 a 11/2010"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Levantamento de requisitos de qualidade dos servi\xE7os e Elabora\xE7\xE3o de plano de testes junto aos analistas de neg\xF3cio;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Assegurar que o sistema ou aplica\xE7\xE3o entregue, esteja consistente com a arquitetura concordada, garantindo a qualidade e exig\xEAncias definidas com o cliente;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Realiza\xE7\xE3o de testes de sistemas e passagem para produ\xE7\xE3o ou apontamento de erro; "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Desenvolvimento de ferramentas de aux\xEDlio, automatizando os testes de sistemas.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Canvas Webhouse - Analista de Sistemas S\xEAnior. De 5/2009 a 10/2009"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "L\xEDder de equipe de programa\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Defini\xE7\xE3o da arquitetura do sistema, coordena\xE7\xE3o de atividades, distribui\xE7\xE3o de tarefas."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Utiliza\xE7\xE3o de tecnologias de Web2.0, Gest\xE3o de Conte\xFAdo, Servidor de Portais;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Desenvolvimento, administra\xE7\xE3o, manuten\xE7\xE3o e suporte de Portais, com tecnologia .Net e J2EE, para clientes de grande porte como Petrobr\xE1s, Vale e Globo. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Modelagem utilizando UML, processo unificado;")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Intercraft Solutions Inform\xE1tica - Analista de Sistemas Pleno. De 4/2007 a 3/2009."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "F\xE1brica de software;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Atuou na lideran\xE7a t\xE9cnica e funcional de diversos projetos;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Gest\xE3o de projetos;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Desenho de Arquitetura de Aplica\xE7\xF5es .Net;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Integra\xE7\xE3o de sistemas;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Desenvolvimento de aplica\xE7\xF5es para com\xE9rcio eletr\xF4nico.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Analista Desenvolvedor - Pessoa Jur\xEDdica. De 2003 a 2007."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Consultoria para diversas empresas, tais como: Sign Deluxe; DMN; Nigraph..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Professor do curso de Inform\xE1tica EuroData.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Sign Deluxe - Programador. De 6/2002 a 7/2003."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Negocia\xE7\xE3o com clientes e confec\xE7\xE3o de propostas;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Levantamento de requisitos;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Modelagem de sistemas para clientes de pequeno e m\xE9dio porte;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Desenvolvimento de sites utilisando as tecnologias .net e ActionScript.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Zion NetWork (produtora de sites) - Programador e Webdesogn. De 7/2000 a 12/2000"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Desenvolvimento de Portais para empresas utilizando ASP, PHP e ActionScript;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Design gr\xE1fico;")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Propag Camp. - Est\xE1gio. De 9/1999 a 3/2000."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Desenvolvimento de websites para clientes de pequeno porte.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "FORMA\xC7\xC3O:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "2008 - P\xF3s-Graduado de An\xE1lise, Projeto e Ger\xEAncia de Sistemas - PUC-RJ."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "2004 - P\xF3s-Graduado em Ergonomia e Usabilidade - PUC-RJ."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "2002 - Gradua\xE7\xE3o em Design Gr\xE1fico - UNESA."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "1998 - T\xE9cnico em Processamento de Dados - Col\xE9gio Santa M\xF4nica.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "L\xCDNGUAS:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Ingl\xEAs Intermedi\xE1rio t\xE9cnico.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "HABILIDADES:"), "Planejamento e condu\xE7\xE3o de projeto, Lideran\xE7a; Reuni\xF5es t\xE9cnicas; N\xE3o tenho problema em trabalhar sob press\xE3o; Desenvolvimento e manuten\xE7\xE3o de sistemas, levantamento de requisitos, modelagem de dados e requisitos; UML, XP, Web Services, C#, VB.NET, ASP, PHP, ColdFusion, JAVA, JS, ActionScript, HTML, XML, DHTML, CSS, PL/SQL.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "CURSOS:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " ARCHTALKS - Treinamento BigData Hadoop Cloudera/Oi- 27/11/2019 e 04/12/2019 - 8h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Treinamento Centro de Treinamento da Cidade Nova - Circuito de Seguran\xE7a da Informa\xE7\xE3o - 21/02/2019 - 4h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "SEO - Workshop SEO Oi - 21/12/2018 - 2h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "WORAG - Workshop \xC1gil - Oi - 09/11/2018 - 4h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Security Day - Treinamento Seguran\xE7a da Informa\xE7\xE3o - Certificado Digital - Serasa Experian - 19/09/2018 - 2h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "SEGINFO - Treinamento principais conceitos e aspectos de seguran\xE7a da informa\xE7\xE3o. Oi - 18/01/2019 -2h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " Palestras Arquitetura de Software Mercado e Pr\xE1ticas no Instituto Infnet em 10/02/2011 - 2 horas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " Desenvolvimento Web com ASP.net: DBI  - 9/03/2009 17/04/2009 - 60 horas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " T\xE9cnicas B\xE1sicas de Desenvolvimento de Sistemas: PUC-RJ - de 10/09/2007 a 13/12/2007 - 114 horas."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " Desenvolvendo Aplicativos para Celulares com Java Micro Edition - J2ME : PUC-RJ.- 6/2007 a 7/2007 - 15 horas."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " Palestra Projetos de sites em Flash e ActionScript: Infnet - 29/08/2007 - 2 horas."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " Java B\xE1sico: EuroData - 2006 - 12 horas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " Programa\xE7\xE3o em c++: Universidade Gama Filho. -  de 15/07/97 a 25/07/97 - 16 horas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " 3D Studio: Universidade Gama Filho. - de 15/07/97 a 25/07/97 - 16 horas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " Delphi: Universidade Gama Filho.- 14/07/97 a 23/07/97"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " Autocad: Universidade Gama Filho. - de 14/07/97 a 23/07/97 - 16 horas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " Montagem e Manuten\xE7\xE3o de Micro Computadores: Info Grego's Inform\xE1tica. - de 4/1/95 a 4/2/95"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, " Lotus123, Dbase, Dbase Programado e Clipper: Info Grego's Inform\xE1tica. - de 10/94 a 11/94"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "IPD, Ms-Dos, Print Master, Formax, Wordstar: Info Grego's inform\xE1tica. - de 14/6/94 a 14/07/94")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "PRETEN\xC7\xC3O SALARIAL:"), "R$ 9.000,00", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-516736963 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2017673619", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "516736963"
  }, ".HomeListadeRotas.jsx-516736963{width:25%;}.HomeIndex.jsx-516736963{width:75%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2N1cnJpY3Vsby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTGtCLEFBR21CLEFBR0MsVUFGWCxBQUdBIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2N1cnJpY3Vsby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBGYXZJY29uIGZyb20gJy4uL2F0b21zL2F0RmF2SWNvbidcbmltcG9ydCBEaXYgZnJvbSAnLi4vYXRvbXMvYXREaXYnXG5pbXBvcnQgTGlzdGFkZVJvdGFzIGZyb20gJy4uL21vbGVjdWxhcy9tb0xpc3RhZGVSb3Rhcy9pbmRleC5qcydcbmltcG9ydCBIZWFkZXJTaWRlRG9WYWxlbnRlIGZyb20gJy4uL21vbGVjdWxhcy9tb0hlYWRlclNpZGVEb1ZhbGVudGUvaW5kZXguanMnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlSG9tZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zb2xlLmxvZygn4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG4gIGNvbnNvbGUubG9nKCfilZEgICAgICBDdXJyaWN1bG8gICAgICAgICAgICAgICAgICAgICAgICAg4pWRJyk7XG4gIGNvbnNvbGUubG9nKCfilZrilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZ0nKTtcbiAgdmFyIGNpZGFkZSA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuY2lkYWRlLCBcIlJpbyBkZSBKYW5laXJvXCIpO1xuICB2YXIgbW9kbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMubW9kbywgXCJodG1sXCIpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlZpbsOtY2l1cyBWYWxlbnRlIENvdXRpbmhvPC90aXRsZT5cbiAgICAgICAgPEZhdkljb24gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkN1cnJpY3VsbyBWaW7DrWNpdXMgVmFsZW50ZSBDb3V0aW5ob1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCIvY3VycmljdWxvL1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyU2lkZURvVmFsZW50ZSBjaWRhZGU9e2NpZGFkZX0gbW9kbz17bW9kb30gLz5cblxuICAgICAgPERpdiBkaXNwbGF5PVwianVzdGlmaWNhZG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIb21lTGlzdGFkZVJvdGFzXCI+XG4gICAgICAgICAgPExpc3RhZGVSb3RhcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSG9tZUluZGV4XCI+XG4gICAgICAgICAgPGgxPkNVUlImSWFjdXRlO0NVTE88L2gxPlxuICAgICAgICAgIFZpbmljaXVzIFZhbGVudGUgQ291dGluaG9cbiAgICAgICAgICA8aDI+Q09OVEFUTzo8L2gyPlxuICAgICAgICAgIFJlc2lkZW5jaWEgZW0gUkosIGJhaXJybyBBbmlsLUphY2FyZXBhZ3VhIG5hIGNpZGFkZSBkbyBSaW8gZGUgamFuZWlyby48YnIvPlxuICAgICAgICAgIFJlc2lkZW5jaWEgZW0gTUcsIGJhaXJybyBQYXJ0ZSBBbHRhIG5hIGNpZGFkZSBkZSBCaWNhcy48YnIvPlxuICAgICAgICAgIEUtbWFpbCA6IHZpbml2YWxlbnRAZ21haWwuY29tPGJyLz5cbiAgICAgICAgICBMaW5rZWRpbiA6IGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi92aW4lQzMlQURjaXVzLXZhbGVudGUtNTE5ODk1MjMvPGJyLz5cbiAgICAgICAgICBHb29nbGUgU2l0ZXMgOiBodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy92aW5pY2l1c3ZhbGVudGUvXG4gICAgICAgICAgR2l0SHViIDogaHR0cHM6Ly9naXRodWIuY29tL1ZpbmljaXVzVkMvXG4gICAgICAgICAgPGgyPk9CSkVUSVZPUzo8L2gyPlxuICAgICAgICAgIEdlcmVudGUgZGUgRGVzZW52b2x2aW1lbnRvIGRlIFNpc3RlbWFzPGJyLz5cblxuICAgICAgICAgIDxoMj5ISVNUJk9hY3V0ZTtSSUNPIFBST0ZJU1NJT05BTDo8L2gyPlxuICAgICAgICAgIFxuICAgICAgICAgIDxoMz5PaSAtIEF0dWFsbWVudGUgZGVzIGRlIDA0LzA5LzIwMTc8L2gzPiAgICAgICAgICBcblxuICAgICAgICAgIDxoMz4xMS8xMS8yMDE5IC0gRXNwZWNpYWxpc3RhIC0gRXF1aXBlIEluc2lnaHRzOjwvaDM+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5MaWRlciB0w6ljbmljbyBkZSBwcm9qZXRvIEJpZyBEYXRhLjwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxoMz4xMi8wNi8yMDE4IC0gRXNwZWNpYWxpc3RhIC0gRXF1aXBlcyBlLWNvbW1lcmNlIGUgU0VPOjwvaDM+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5MaWRlciB0w6ljbmljbyBkbyBwcm9qZXRvIEFNUCwgZ2VyYWRvIGVtIHNlcnZpZG9yIE5vZGVKUy48L2xpPlxuICAgICAgICAgIDxsaT5Db25maWd1cmHDp8OjbyBkb3MgQXBhY2hlcyBkbyBzaXRlIGRhIE9pLjwvbGk+XG4gICAgICAgICAgPGxpPkNvbmZpZ3VyYcOnw6NvIGRhIENETi1BV1MuPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGgzPjA0LzA5LzIwMTcgLSBBbmFsaXN0YSBTw6puaW9yIGRlIFJlbGFjaW9uYW1lbnRvIERpZ2l0YWwuPC9oMz4gIFxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+U3F1YWQgUG9ydGFsIE9pIC0gTWFudXRlbsOnw6NvIGRhIEhvbWUgZG8gUG9ydGFsIGRhIE9pLjwvbGk+XG4gICAgICAgICAgPGxpPlNxdWFkIFdlYk9wcyAtIENyaWHDp8OjbyBkZSBwYWRyw7VlcyBlIG1lbGhvcmlhIGRlIGPDs2RpZ28gZnJvbnRlbmQuPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGgzPkNvbnN1bHRvci4gRGUgMjAxNSBhIDIwMTY8L2gzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+Q29uc29yY2lvciBkZSBzb2x1w6fDo28gd2ViIHBhcmEgQ29uc29yY2lvIEludGVybXVuaWNpcGFsIGRlIEVzcGVjaWFsaWRhZGVzPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIFxuICAgICAgICAgIDxoMz5EQkEgKGFsb2NhZG8gbmEgVFYgR2xvYm8pIC0gQ29uc3VsdG9yLiBEZSAxNi8xMS8yMDEwIGEgMzEvMi8yMDE0PC9oMz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkFuYWxpc2FyIGUgY29tcHJlZW5kZXIgYXMgZXhpZyZlY2lyYztuY2lhcyBlIGZ1bmNpb25hbGlkYWRlcyBxdWUgbyBzaXN0ZW1hIGUgYXBsaWNhJmNjZWRpbDsmYXRpbGRlO28gZGV2ZXJhIGV4ZWN1dGFyIGRlIGFjb3JkbyBjb20gb3MgcmVxdWlzaXRvcyBkZWZpbmlkb3MgcGVsYSBlcXVpcGUgZGUgSW50ZXJuZXQgZGEgQ0dQOyA8L2xpPlxuICAgICAgICAgIDxsaT5BcG9udGFyIGZhbGFzIGNvcnJlJmNjZWRpbDsmb3RpbGRlO2VzIGUgbWVsaG9yaWFzIGRlIHNpc3RlbWFzIGV4aXN0ZW50ZXM7PC9saT5cbiAgICAgICAgICA8bGk+RGVmaW5pciBlc2NvcG8gZG8gcHJvamV0byBlICBwYWRyJm90aWxkZTtlcyBkZSBhcnF1aXRldHVyYTs8L2xpPlxuICAgICAgICAgIDxsaT5BY29tcGFuaGFtZW50byBkbyBjaWNsbyBkZSB2aWRhIGRvcyBzaXN0ZW1hcyBlIGFwbGljYSZjY2VkaWw7Jm90aWxkZTtlcyBXRUIsIGFwb250YW5kbyBtZWxob3JpYXMgZGEgZXN0cnV0dXJhIGV4aXN0ZW50ZS4gTWVsaG9yYXIgYXMgdCZlYWN1dGU7Y25pY2FzIGUgY29uY2VpdG9zIGV4aXN0ZW50ZXMsIGNvbnNpZGVyYW5kbyBvIHZvbHVtZSBkZSBwcm9jZXNzYW1lbnRvIGUgbyBvciZjY2VkaWw7YW1lbnRvIGRpc3BvbiZpYWN1dGU7dmVsOzwvbGk+XG4gICAgICAgICAgPGxpPlN1cG9ydGUgYW9zIHVzdSZhYWN1dGU7cmlvcyBuYSBpbXBsYW50YSZjY2VkaWw7JmF0aWxkZTtvIGUgbmEgdXRpbGl6YSZjY2VkaWw7JmF0aWxkZTtvIGRlIG5vdm9zIHNpc3RlbWFzIGUgc3Vwb3J0ZSBhb3MgYW5hbGlzdGFzIGVtIGNhc29zIGRlIHByb2JsZW1hczs8L2xpPlxuICAgICAgICAgIDxsaT5DcmlhJmNjZWRpbDsmYXRpbGRlO28gZGUgcHJvdCZvYWN1dGU7dGlwb3MgZGUgQXBsaWNhJmNjZWRpbDsmb3RpbGRlO2VzLjwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxoMz5TdGVmYW5pbmkgKGFsb2NhZG8gbm8gSVJCIEJyYXNpbCBSZSkgLSBBbmFsaXN0YSBkZSBRdWFsaWRhZGUgUGxlbm8uIERlIDEwLzIwMDkgYSAxMS8yMDEwPC9oMz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkxldmFudGFtZW50byBkZSByZXF1aXNpdG9zIGRlIHF1YWxpZGFkZSBkb3Mgc2VydmkmY2NlZGlsO29zIGUgRWxhYm9yYSZjY2VkaWw7JmF0aWxkZTtvIGRlIHBsYW5vIGRlIHRlc3RlcyBqdW50byBhb3MgYW5hbGlzdGFzIGRlIG5lZyZvYWN1dGU7Y2lvOzwvbGk+XG4gICAgICAgICAgPGxpPkFzc2VndXJhciBxdWUgbyBzaXN0ZW1hIG91IGFwbGljYSZjY2VkaWw7JmF0aWxkZTtvIGVudHJlZ3VlLCBlc3RlamEgY29uc2lzdGVudGUgY29tIGEgYXJxdWl0ZXR1cmEgY29uY29yZGFkYSwgZ2FyYW50aW5kbyBhIHF1YWxpZGFkZSBlIGV4aWcmZWNpcmM7bmNpYXMgZGVmaW5pZGFzIGNvbSBvIGNsaWVudGU7PC9saT5cbiAgICAgICAgICA8bGk+UmVhbGl6YSZjY2VkaWw7JmF0aWxkZTtvIGRlIHRlc3RlcyBkZSBzaXN0ZW1hcyBlIHBhc3NhZ2VtIHBhcmEgcHJvZHUmY2NlZGlsO8OjbyBvdSBhcG9udGFtZW50byBkZSBlcnJvOyA8L2xpPlxuICAgICAgICAgIDxsaT5EZXNlbnZvbHZpbWVudG8gZGUgZmVycmFtZW50YXMgZGUgYXV4JmlhY3V0ZTtsaW8sIGF1dG9tYXRpemFuZG8gb3MgdGVzdGVzIGRlIHNpc3RlbWFzLjwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxoMz5DYW52YXMgV2ViaG91c2UgLSBBbmFsaXN0YSBkZSBTaXN0ZW1hcyBTJmVjaXJjO25pb3IuIERlIDUvMjAwOSBhIDEwLzIwMDk8L2gzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+TCZpYWN1dGU7ZGVyIGRlIGVxdWlwZSBkZSBwcm9ncmFtYSZjY2VkaWw7JmF0aWxkZTtvPC9saT5cbiAgICAgICAgICA8bGk+RGVmaW5pJmNjZWRpbDsmYXRpbGRlO28gZGEgYXJxdWl0ZXR1cmEgZG8gc2lzdGVtYSwgY29vcmRlbmEmY2NlZGlsOyZhdGlsZGU7byBkZSBhdGl2aWRhZGVzLCBkaXN0cmlidWkmY2NlZGlsOyZhdGlsZGU7byBkZSB0YXJlZmFzLjwvbGk+XG4gICAgICAgICAgPGxpPlV0aWxpemEmY2NlZGlsOyZhdGlsZGU7byBkZSB0ZWNub2xvZ2lhcyBkZSBXZWIyLjAsIEdlc3QmYXRpbGRlO28gZGUgQ29udGUmdWFjdXRlO2RvLCBTZXJ2aWRvciBkZSBQb3J0YWlzOzwvbGk+XG4gICAgICAgICAgPGxpPkRlc2Vudm9sdmltZW50bywgYWRtaW5pc3RyYSZjY2VkaWw7JmF0aWxkZTtvLCBtYW51dGVuJmNjZWRpbDsmYXRpbGRlO28gZSBzdXBvcnRlIGRlIFBvcnRhaXMsIGNvbSB0ZWNub2xvZ2lhIC5OZXQgZSBKMkVFLCBwYXJhIGNsaWVudGVzIGRlIGdyYW5kZSBwb3J0ZSBjb21vIFBldHJvYnImYWFjdXRlO3MsIFZhbGUgZSBHbG9iby4gPC9saT5cbiAgICAgICAgICA8bGk+TW9kZWxhZ2VtIHV0aWxpemFuZG8gVU1MLCBwcm9jZXNzbyB1bmlmaWNhZG87PC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGgzPkludGVyY3JhZnQgU29sdXRpb25zIEluZm9ybSZhYWN1dGU7dGljYSAtIEFuYWxpc3RhIGRlIFNpc3RlbWFzIFBsZW5vLiBEZSA0LzIwMDcgYSAzLzIwMDkuPC9oMz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkYmYWFjdXRlO2JyaWNhIGRlIHNvZnR3YXJlOzwvbGk+XG4gICAgICAgICAgPGxpPkF0dW91IG5hIGxpZGVyYW4mY2NlZGlsO2EgdCZlYWN1dGU7Y25pY2EgZSBmdW5jaW9uYWwgZGUgZGl2ZXJzb3MgcHJvamV0b3M7PC9saT5cbiAgICAgICAgICA8bGk+R2VzdCZhdGlsZGU7byBkZSBwcm9qZXRvczs8L2xpPlxuICAgICAgICAgIDxsaT5EZXNlbmhvIGRlIEFycXVpdGV0dXJhIGRlIEFwbGljYSZjY2VkaWw7Jm90aWxkZTtlcyAuTmV0OzwvbGk+XG4gICAgICAgICAgPGxpPkludGVncmEmY2NlZGlsOyZhdGlsZGU7byBkZSBzaXN0ZW1hczs8L2xpPlxuICAgICAgICAgIDxsaT5EZXNlbnZvbHZpbWVudG8gZGUgYXBsaWNhJmNjZWRpbDsmb3RpbGRlO2VzIHBhcmEgY29tJmVhY3V0ZTtyY2lvIGVsZXRyJm9jaXJjO25pY28uPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGgzPkFuYWxpc3RhIERlc2Vudm9sdmVkb3IgLSBQZXNzb2EgSnVyJmlhY3V0ZTtkaWNhLiBEZSAyMDAzIGEgMjAwNy48L2gzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+Q29uc3VsdG9yaWEgcGFyYSBkaXZlcnNhcyBlbXByZXNhcywgdGFpcyBjb21vOiBTaWduIERlbHV4ZTsgRE1OOyBOaWdyYXBoLi4uPC9saT5cbiAgICAgICAgICA8bGk+UHJvZmVzc29yIGRvIGN1cnNvIGRlIEluZm9ybSZhYWN1dGU7dGljYSBFdXJvRGF0YS48L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8aDM+U2lnbiBEZWx1eGUgLSBQcm9ncmFtYWRvci4gRGUgNi8yMDAyIGEgNy8yMDAzLjwvaDM+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5OZWdvY2lhJmNjZWRpbDsmYXRpbGRlO28gY29tIGNsaWVudGVzIGUgY29uZmVjJmNjZWRpbDsmYXRpbGRlO28gZGUgcHJvcG9zdGFzOzwvbGk+XG4gICAgICAgICAgPGxpPkxldmFudGFtZW50byBkZSByZXF1aXNpdG9zOzwvbGk+XG4gICAgICAgICAgPGxpPk1vZGVsYWdlbSBkZSBzaXN0ZW1hcyBwYXJhIGNsaWVudGVzIGRlIHBlcXVlbm8gZSBtJmVhY3V0ZTtkaW8gcG9ydGU7PC9saT5cbiAgICAgICAgICA8bGk+RGVzZW52b2x2aW1lbnRvIGRlIHNpdGVzIHV0aWxpc2FuZG8gYXMgdGVjbm9sb2dpYXMgLm5ldCBlIEFjdGlvblNjcmlwdC48L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8aDM+WmlvbiBOZXRXb3JrIChwcm9kdXRvcmEgZGUgc2l0ZXMpIC0gUHJvZ3JhbWFkb3IgZSBXZWJkZXNvZ24uIERlIDcvMjAwMCBhIDEyLzIwMDA8L2gzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+RGVzZW52b2x2aW1lbnRvIGRlIFBvcnRhaXMgcGFyYSBlbXByZXNhcyB1dGlsaXphbmRvIEFTUCwgUEhQIGUgQWN0aW9uU2NyaXB0OzwvbGk+XG4gICAgICAgICAgPGxpPkRlc2lnbiBnciZhYWN1dGU7Zmljbzs8L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8aDM+UHJvcGFnIENhbXAuIC0gRXN0JmFhY3V0ZTtnaW8uIERlIDkvMTk5OSBhIDMvMjAwMC48L2gzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+RGVzZW52b2x2aW1lbnRvIGRlIHdlYnNpdGVzIHBhcmEgY2xpZW50ZXMgZGUgcGVxdWVubyBwb3J0ZS48L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8aDI+Rk9STUEmQ2NlZGlsOyZBdGlsZGU7Tzo8L2gyPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+MjAwOCAtIFAmb2FjdXRlO3MtR3JhZHVhZG8gZGUgQW4mYWFjdXRlO2xpc2UsIFByb2pldG8gZSBHZXImZWNpcmM7bmNpYSBkZSBTaXN0ZW1hcyAtIFBVQy1SSi48L2xpPlxuICAgICAgICAgIDxsaT4yMDA0IC0gUCZvYWN1dGU7cy1HcmFkdWFkbyBlbSBFcmdvbm9taWEgZSBVc2FiaWxpZGFkZSAtIFBVQy1SSi48L2xpPlxuICAgICAgICAgIDxsaT4yMDAyIC0gR3JhZHVhJmNjZWRpbDsmYXRpbGRlO28gZW0gRGVzaWduIEdyJmFhY3V0ZTtmaWNvIC0gVU5FU0EuPC9saT5cbiAgICAgICAgICA8bGk+MTk5OCAtIFQmZWFjdXRlO2NuaWNvIGVtIFByb2Nlc3NhbWVudG8gZGUgRGFkb3MgLSBDb2wmZWFjdXRlO2dpbyBTYW50YSBNJm9jaXJjO25pY2EuPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGgyPkwmSWFjdXRlO05HVUFTOjwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkluZ2wmZWNpcmM7cyBJbnRlcm1lZGkmYWFjdXRlO3JpbyB0JmVhY3V0ZTtjbmljby48L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8aDI+SEFCSUxJREFERVM6PC9oMj5cbiAgICAgICAgICBQbGFuZWphbWVudG8gZSBjb25kdSZjY2VkaWw7JmF0aWxkZTtvIGRlIHByb2pldG8sIExpZGVyYW4mY2NlZGlsO2E7IFJldW5pJm90aWxkZTtlcyB0JmVhY3V0ZTtjbmljYXM7IE4mYXRpbGRlO28gdGVuaG8gcHJvYmxlbWEgZW0gdHJhYmFsaGFyIHNvYiBwcmVzcyZhdGlsZGU7bzsgRGVzZW52b2x2aW1lbnRvIGUgbWFudXRlbiZjY2VkaWw7JmF0aWxkZTtvIGRlIHNpc3RlbWFzLCBsZXZhbnRhbWVudG8gZGUgcmVxdWlzaXRvcywgbW9kZWxhZ2VtIGRlIGRhZG9zIGUgcmVxdWlzaXRvczsgVU1MLCBYUCwgV2ViIFNlcnZpY2VzLCBDIywgVkIuTkVULCBBU1AsIFBIUCwgQ29sZEZ1c2lvbiwgSkFWQSwgSlMsIEFjdGlvblNjcmlwdCwgSFRNTCwgWE1MLCBESFRNTCwgQ1NTLCBQTC9TUUwuXG5cbiAgICAgICAgICA8aDI+Q1VSU09TOjwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT4gQVJDSFRBTEtTIC0gVHJlaW5hbWVudG8gQmlnRGF0YSBIYWRvb3AgQ2xvdWRlcmEvT2ktIDI3LzExLzIwMTkgZSAwNC8xMi8yMDE5IC0gOGg8L2xpPiAgXG4gICAgICAgICAgPGxpPlRyZWluYW1lbnRvIENlbnRybyBkZSBUcmVpbmFtZW50byBkYSBDaWRhZGUgTm92YSAtIENpcmN1aXRvIGRlIFNlZ3VyYW7Dp2EgZGEgSW5mb3JtYcOnw6NvIC0gMjEvMDIvMjAxOSAtIDRoPC9saT4gIFxuICAgICAgICAgIDxsaT5TRU8gLSBXb3Jrc2hvcCBTRU8gT2kgLSAyMS8xMi8yMDE4IC0gMmg8L2xpPiAgXG4gICAgICAgICAgPGxpPldPUkFHIC0gV29ya3Nob3Agw4FnaWwgLSBPaSAtIDA5LzExLzIwMTggLSA0aDwvbGk+ICBcbiAgICAgICAgICA8bGk+U2VjdXJpdHkgRGF5IC0gVHJlaW5hbWVudG8gU2VndXJhbsOnYSBkYSBJbmZvcm1hw6fDo28gLSBDZXJ0aWZpY2FkbyBEaWdpdGFsIC0gU2VyYXNhIEV4cGVyaWFuIC0gMTkvMDkvMjAxOCAtIDJoPC9saT4gIFxuICAgICAgICAgIDxsaT5TRUdJTkZPIC0gVHJlaW5hbWVudG8gcHJpbmNpcGFpcyBjb25jZWl0b3MgZSBhc3BlY3RvcyBkZSBzZWd1cmFuw6dhIGRhIGluZm9ybWHDp8Ojby4gT2kgLSAxOC8wMS8yMDE5IC0yaDwvbGk+ICBcbiAgICAgICAgICA8bGk+IFBhbGVzdHJhcyBBcnF1aXRldHVyYSBkZSBTb2Z0d2FyZSBNZXJjYWRvIGUgUHImYWFjdXRlO3RpY2FzIG5vIEluc3RpdHV0byBJbmZuZXQgZW0gMTAvMDIvMjAxMSAtIDIgaG9yYXM8L2xpPlxuICAgICAgICAgIDxsaT4gRGVzZW52b2x2aW1lbnRvIFdlYiBjb20gQVNQLm5ldDogREJJICAtIDkvMDMvMjAwOSAxNy8wNC8yMDA5IC0gNjAgaG9yYXM8L2xpPlxuICAgICAgICAgIDxsaT4gVCZlYWN1dGU7Y25pY2FzIEImYWFjdXRlO3NpY2FzIGRlIERlc2Vudm9sdmltZW50byBkZSBTaXN0ZW1hczogUFVDLVJKIC0gZGUgMTAvMDkvMjAwNyBhIDEzLzEyLzIwMDcgLSAxMTQgaG9yYXMuPC9saT5cbiAgICAgICAgICA8bGk+IERlc2Vudm9sdmVuZG8gQXBsaWNhdGl2b3MgcGFyYSBDZWx1bGFyZXMgY29tIEphdmEgTWljcm8gRWRpdGlvbiAtIEoyTUUgOiBQVUMtUkouLSA2LzIwMDcgYSA3LzIwMDcgLSAxNSBob3Jhcy48L2xpPlxuICAgICAgICAgIDxsaT4gUGFsZXN0cmEgUHJvamV0b3MgZGUgc2l0ZXMgZW0gRmxhc2ggZSBBY3Rpb25TY3JpcHQ6IEluZm5ldCAtIDI5LzA4LzIwMDcgLSAyIGhvcmFzLjwvbGk+XG4gICAgICAgICAgPGxpPiBKYXZhIEImYWFjdXRlO3NpY286IEV1cm9EYXRhIC0gMjAwNiAtIDEyIGhvcmFzPC9saT5cbiAgICAgICAgICA8bGk+IFByb2dyYW1hJmNjZWRpbDsmYXRpbGRlO28gZW0gYysrOiBVbml2ZXJzaWRhZGUgR2FtYSBGaWxoby4gLSAgZGUgMTUvMDcvOTcgYSAyNS8wNy85NyAtIDE2IGhvcmFzPC9saT5cbiAgICAgICAgICA8bGk+IDNEIFN0dWRpbzogVW5pdmVyc2lkYWRlIEdhbWEgRmlsaG8uIC0gZGUgMTUvMDcvOTcgYSAyNS8wNy85NyAtIDE2IGhvcmFzPC9saT5cbiAgICAgICAgICA8bGk+IERlbHBoaTogVW5pdmVyc2lkYWRlIEdhbWEgRmlsaG8uLSAxNC8wNy85NyBhIDIzLzA3Lzk3PC9saT5cbiAgICAgICAgICA8bGk+IEF1dG9jYWQ6IFVuaXZlcnNpZGFkZSBHYW1hIEZpbGhvLiAtIGRlIDE0LzA3Lzk3IGEgMjMvMDcvOTcgLSAxNiBob3JhczwvbGk+XG4gICAgICAgICAgPGxpPiBNb250YWdlbSBlIE1hbnV0ZW4mY2NlZGlsOyZhdGlsZGU7byBkZSBNaWNybyBDb21wdXRhZG9yZXM6IEluZm8gR3JlZ28ncyBJbmZvcm0mYWFjdXRlO3RpY2EuIC0gZGUgNC8xLzk1IGEgNC8yLzk1PC9saT5cbiAgICAgICAgICA8bGk+IExvdHVzMTIzLCBEYmFzZSwgRGJhc2UgUHJvZ3JhbWFkbyBlIENsaXBwZXI6IEluZm8gR3JlZ28ncyBJbmZvcm0mYWFjdXRlO3RpY2EuIC0gZGUgMTAvOTQgYSAxMS85NDwvbGk+XG4gICAgICAgICAgPGxpPklQRCwgTXMtRG9zLCBQcmludCBNYXN0ZXIsIEZvcm1heCwgV29yZHN0YXI6IEluZm8gR3JlZ28ncyBpbmZvcm0mYWFjdXRlO3RpY2EuIC0gZGUgMTQvNi85NCBhIDE0LzA3Lzk0PC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGgyPlBSRVRFTiZDY2VkaWw7JkF0aWxkZTtPIFNBTEFSSUFMOjwvaDI+XG4gICAgICAgICAgUiQgOS4wMDAsMDBcbiAgICAgICAgICA8YnIvPjxici8+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLkhvbWVMaXN0YWRlUm90YXN7XG4gICAgICAgICB3aWR0aDoyNSU7XG4gICAgICAgIH1cbiAgICAgICAgLkhvbWVJbmRleHtcbiAgICAgICAgICB3aWR0aDo3NSU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICR7VXRpbC5mb250ZXNDU1MxKCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1MyKCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1MzKCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1M0KCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1M1KCl9XG4gICAgICAgIGJvZHl7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFNpbXBsb25CUC1SZWd1bGFyLCBzYW5zLXNlcmlmOyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZUhvbWVcbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/curriculo.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2017673619",
    dynamic: [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]
  }, "".concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"](), " body{margin:0px;padding:0px;background-color:#ffffff;font-family:SimplonBP-Regular,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2N1cnJpY3Vsby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3THlCLEFBUXNCLFdBQ0MsWUFDYSx5QkFDaUIseUNBQzVDIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2N1cnJpY3Vsby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBGYXZJY29uIGZyb20gJy4uL2F0b21zL2F0RmF2SWNvbidcbmltcG9ydCBEaXYgZnJvbSAnLi4vYXRvbXMvYXREaXYnXG5pbXBvcnQgTGlzdGFkZVJvdGFzIGZyb20gJy4uL21vbGVjdWxhcy9tb0xpc3RhZGVSb3Rhcy9pbmRleC5qcydcbmltcG9ydCBIZWFkZXJTaWRlRG9WYWxlbnRlIGZyb20gJy4uL21vbGVjdWxhcy9tb0hlYWRlclNpZGVEb1ZhbGVudGUvaW5kZXguanMnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlSG9tZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zb2xlLmxvZygn4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG4gIGNvbnNvbGUubG9nKCfilZEgICAgICBDdXJyaWN1bG8gICAgICAgICAgICAgICAgICAgICAgICAg4pWRJyk7XG4gIGNvbnNvbGUubG9nKCfilZrilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZ0nKTtcbiAgdmFyIGNpZGFkZSA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuY2lkYWRlLCBcIlJpbyBkZSBKYW5laXJvXCIpO1xuICB2YXIgbW9kbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMubW9kbywgXCJodG1sXCIpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlZpbsOtY2l1cyBWYWxlbnRlIENvdXRpbmhvPC90aXRsZT5cbiAgICAgICAgPEZhdkljb24gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkN1cnJpY3VsbyBWaW7DrWNpdXMgVmFsZW50ZSBDb3V0aW5ob1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCIvY3VycmljdWxvL1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyU2lkZURvVmFsZW50ZSBjaWRhZGU9e2NpZGFkZX0gbW9kbz17bW9kb30gLz5cblxuICAgICAgPERpdiBkaXNwbGF5PVwianVzdGlmaWNhZG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIb21lTGlzdGFkZVJvdGFzXCI+XG4gICAgICAgICAgPExpc3RhZGVSb3RhcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSG9tZUluZGV4XCI+XG4gICAgICAgICAgPGgxPkNVUlImSWFjdXRlO0NVTE88L2gxPlxuICAgICAgICAgIFZpbmljaXVzIFZhbGVudGUgQ291dGluaG9cbiAgICAgICAgICA8aDI+Q09OVEFUTzo8L2gyPlxuICAgICAgICAgIFJlc2lkZW5jaWEgZW0gUkosIGJhaXJybyBBbmlsLUphY2FyZXBhZ3VhIG5hIGNpZGFkZSBkbyBSaW8gZGUgamFuZWlyby48YnIvPlxuICAgICAgICAgIFJlc2lkZW5jaWEgZW0gTUcsIGJhaXJybyBQYXJ0ZSBBbHRhIG5hIGNpZGFkZSBkZSBCaWNhcy48YnIvPlxuICAgICAgICAgIEUtbWFpbCA6IHZpbml2YWxlbnRAZ21haWwuY29tPGJyLz5cbiAgICAgICAgICBMaW5rZWRpbiA6IGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi92aW4lQzMlQURjaXVzLXZhbGVudGUtNTE5ODk1MjMvPGJyLz5cbiAgICAgICAgICBHb29nbGUgU2l0ZXMgOiBodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy92aW5pY2l1c3ZhbGVudGUvXG4gICAgICAgICAgR2l0SHViIDogaHR0cHM6Ly9naXRodWIuY29tL1ZpbmljaXVzVkMvXG4gICAgICAgICAgPGgyPk9CSkVUSVZPUzo8L2gyPlxuICAgICAgICAgIEdlcmVudGUgZGUgRGVzZW52b2x2aW1lbnRvIGRlIFNpc3RlbWFzPGJyLz5cblxuICAgICAgICAgIDxoMj5ISVNUJk9hY3V0ZTtSSUNPIFBST0ZJU1NJT05BTDo8L2gyPlxuICAgICAgICAgIFxuICAgICAgICAgIDxoMz5PaSAtIEF0dWFsbWVudGUgZGVzIGRlIDA0LzA5LzIwMTc8L2gzPiAgICAgICAgICBcblxuICAgICAgICAgIDxoMz4xMS8xMS8yMDE5IC0gRXNwZWNpYWxpc3RhIC0gRXF1aXBlIEluc2lnaHRzOjwvaDM+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5MaWRlciB0w6ljbmljbyBkZSBwcm9qZXRvIEJpZyBEYXRhLjwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxoMz4xMi8wNi8yMDE4IC0gRXNwZWNpYWxpc3RhIC0gRXF1aXBlcyBlLWNvbW1lcmNlIGUgU0VPOjwvaDM+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5MaWRlciB0w6ljbmljbyBkbyBwcm9qZXRvIEFNUCwgZ2VyYWRvIGVtIHNlcnZpZG9yIE5vZGVKUy48L2xpPlxuICAgICAgICAgIDxsaT5Db25maWd1cmHDp8OjbyBkb3MgQXBhY2hlcyBkbyBzaXRlIGRhIE9pLjwvbGk+XG4gICAgICAgICAgPGxpPkNvbmZpZ3VyYcOnw6NvIGRhIENETi1BV1MuPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGgzPjA0LzA5LzIwMTcgLSBBbmFsaXN0YSBTw6puaW9yIGRlIFJlbGFjaW9uYW1lbnRvIERpZ2l0YWwuPC9oMz4gIFxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+U3F1YWQgUG9ydGFsIE9pIC0gTWFudXRlbsOnw6NvIGRhIEhvbWUgZG8gUG9ydGFsIGRhIE9pLjwvbGk+XG4gICAgICAgICAgPGxpPlNxdWFkIFdlYk9wcyAtIENyaWHDp8OjbyBkZSBwYWRyw7VlcyBlIG1lbGhvcmlhIGRlIGPDs2RpZ28gZnJvbnRlbmQuPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGgzPkNvbnN1bHRvci4gRGUgMjAxNSBhIDIwMTY8L2gzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+Q29uc29yY2lvciBkZSBzb2x1w6fDo28gd2ViIHBhcmEgQ29uc29yY2lvIEludGVybXVuaWNpcGFsIGRlIEVzcGVjaWFsaWRhZGVzPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIFxuICAgICAgICAgIDxoMz5EQkEgKGFsb2NhZG8gbmEgVFYgR2xvYm8pIC0gQ29uc3VsdG9yLiBEZSAxNi8xMS8yMDEwIGEgMzEvMi8yMDE0PC9oMz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkFuYWxpc2FyIGUgY29tcHJlZW5kZXIgYXMgZXhpZyZlY2lyYztuY2lhcyBlIGZ1bmNpb25hbGlkYWRlcyBxdWUgbyBzaXN0ZW1hIGUgYXBsaWNhJmNjZWRpbDsmYXRpbGRlO28gZGV2ZXJhIGV4ZWN1dGFyIGRlIGFjb3JkbyBjb20gb3MgcmVxdWlzaXRvcyBkZWZpbmlkb3MgcGVsYSBlcXVpcGUgZGUgSW50ZXJuZXQgZGEgQ0dQOyA8L2xpPlxuICAgICAgICAgIDxsaT5BcG9udGFyIGZhbGFzIGNvcnJlJmNjZWRpbDsmb3RpbGRlO2VzIGUgbWVsaG9yaWFzIGRlIHNpc3RlbWFzIGV4aXN0ZW50ZXM7PC9saT5cbiAgICAgICAgICA8bGk+RGVmaW5pciBlc2NvcG8gZG8gcHJvamV0byBlICBwYWRyJm90aWxkZTtlcyBkZSBhcnF1aXRldHVyYTs8L2xpPlxuICAgICAgICAgIDxsaT5BY29tcGFuaGFtZW50byBkbyBjaWNsbyBkZSB2aWRhIGRvcyBzaXN0ZW1hcyBlIGFwbGljYSZjY2VkaWw7Jm90aWxkZTtlcyBXRUIsIGFwb250YW5kbyBtZWxob3JpYXMgZGEgZXN0cnV0dXJhIGV4aXN0ZW50ZS4gTWVsaG9yYXIgYXMgdCZlYWN1dGU7Y25pY2FzIGUgY29uY2VpdG9zIGV4aXN0ZW50ZXMsIGNvbnNpZGVyYW5kbyBvIHZvbHVtZSBkZSBwcm9jZXNzYW1lbnRvIGUgbyBvciZjY2VkaWw7YW1lbnRvIGRpc3BvbiZpYWN1dGU7dmVsOzwvbGk+XG4gICAgICAgICAgPGxpPlN1cG9ydGUgYW9zIHVzdSZhYWN1dGU7cmlvcyBuYSBpbXBsYW50YSZjY2VkaWw7JmF0aWxkZTtvIGUgbmEgdXRpbGl6YSZjY2VkaWw7JmF0aWxkZTtvIGRlIG5vdm9zIHNpc3RlbWFzIGUgc3Vwb3J0ZSBhb3MgYW5hbGlzdGFzIGVtIGNhc29zIGRlIHByb2JsZW1hczs8L2xpPlxuICAgICAgICAgIDxsaT5DcmlhJmNjZWRpbDsmYXRpbGRlO28gZGUgcHJvdCZvYWN1dGU7dGlwb3MgZGUgQXBsaWNhJmNjZWRpbDsmb3RpbGRlO2VzLjwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxoMz5TdGVmYW5pbmkgKGFsb2NhZG8gbm8gSVJCIEJyYXNpbCBSZSkgLSBBbmFsaXN0YSBkZSBRdWFsaWRhZGUgUGxlbm8uIERlIDEwLzIwMDkgYSAxMS8yMDEwPC9oMz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkxldmFudGFtZW50byBkZSByZXF1aXNpdG9zIGRlIHF1YWxpZGFkZSBkb3Mgc2VydmkmY2NlZGlsO29zIGUgRWxhYm9yYSZjY2VkaWw7JmF0aWxkZTtvIGRlIHBsYW5vIGRlIHRlc3RlcyBqdW50byBhb3MgYW5hbGlzdGFzIGRlIG5lZyZvYWN1dGU7Y2lvOzwvbGk+XG4gICAgICAgICAgPGxpPkFzc2VndXJhciBxdWUgbyBzaXN0ZW1hIG91IGFwbGljYSZjY2VkaWw7JmF0aWxkZTtvIGVudHJlZ3VlLCBlc3RlamEgY29uc2lzdGVudGUgY29tIGEgYXJxdWl0ZXR1cmEgY29uY29yZGFkYSwgZ2FyYW50aW5kbyBhIHF1YWxpZGFkZSBlIGV4aWcmZWNpcmM7bmNpYXMgZGVmaW5pZGFzIGNvbSBvIGNsaWVudGU7PC9saT5cbiAgICAgICAgICA8bGk+UmVhbGl6YSZjY2VkaWw7JmF0aWxkZTtvIGRlIHRlc3RlcyBkZSBzaXN0ZW1hcyBlIHBhc3NhZ2VtIHBhcmEgcHJvZHUmY2NlZGlsO8OjbyBvdSBhcG9udGFtZW50byBkZSBlcnJvOyA8L2xpPlxuICAgICAgICAgIDxsaT5EZXNlbnZvbHZpbWVudG8gZGUgZmVycmFtZW50YXMgZGUgYXV4JmlhY3V0ZTtsaW8sIGF1dG9tYXRpemFuZG8gb3MgdGVzdGVzIGRlIHNpc3RlbWFzLjwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxoMz5DYW52YXMgV2ViaG91c2UgLSBBbmFsaXN0YSBkZSBTaXN0ZW1hcyBTJmVjaXJjO25pb3IuIERlIDUvMjAwOSBhIDEwLzIwMDk8L2gzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+TCZpYWN1dGU7ZGVyIGRlIGVxdWlwZSBkZSBwcm9ncmFtYSZjY2VkaWw7JmF0aWxkZTtvPC9saT5cbiAgICAgICAgICA8bGk+RGVmaW5pJmNjZWRpbDsmYXRpbGRlO28gZGEgYXJxdWl0ZXR1cmEgZG8gc2lzdGVtYSwgY29vcmRlbmEmY2NlZGlsOyZhdGlsZGU7byBkZSBhdGl2aWRhZGVzLCBkaXN0cmlidWkmY2NlZGlsOyZhdGlsZGU7byBkZSB0YXJlZmFzLjwvbGk+XG4gICAgICAgICAgPGxpPlV0aWxpemEmY2NlZGlsOyZhdGlsZGU7byBkZSB0ZWNub2xvZ2lhcyBkZSBXZWIyLjAsIEdlc3QmYXRpbGRlO28gZGUgQ29udGUmdWFjdXRlO2RvLCBTZXJ2aWRvciBkZSBQb3J0YWlzOzwvbGk+XG4gICAgICAgICAgPGxpPkRlc2Vudm9sdmltZW50bywgYWRtaW5pc3RyYSZjY2VkaWw7JmF0aWxkZTtvLCBtYW51dGVuJmNjZWRpbDsmYXRpbGRlO28gZSBzdXBvcnRlIGRlIFBvcnRhaXMsIGNvbSB0ZWNub2xvZ2lhIC5OZXQgZSBKMkVFLCBwYXJhIGNsaWVudGVzIGRlIGdyYW5kZSBwb3J0ZSBjb21vIFBldHJvYnImYWFjdXRlO3MsIFZhbGUgZSBHbG9iby4gPC9saT5cbiAgICAgICAgICA8bGk+TW9kZWxhZ2VtIHV0aWxpemFuZG8gVU1MLCBwcm9jZXNzbyB1bmlmaWNhZG87PC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGgzPkludGVyY3JhZnQgU29sdXRpb25zIEluZm9ybSZhYWN1dGU7dGljYSAtIEFuYWxpc3RhIGRlIFNpc3RlbWFzIFBsZW5vLiBEZSA0LzIwMDcgYSAzLzIwMDkuPC9oMz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkYmYWFjdXRlO2JyaWNhIGRlIHNvZnR3YXJlOzwvbGk+XG4gICAgICAgICAgPGxpPkF0dW91IG5hIGxpZGVyYW4mY2NlZGlsO2EgdCZlYWN1dGU7Y25pY2EgZSBmdW5jaW9uYWwgZGUgZGl2ZXJzb3MgcHJvamV0b3M7PC9saT5cbiAgICAgICAgICA8bGk+R2VzdCZhdGlsZGU7byBkZSBwcm9qZXRvczs8L2xpPlxuICAgICAgICAgIDxsaT5EZXNlbmhvIGRlIEFycXVpdGV0dXJhIGRlIEFwbGljYSZjY2VkaWw7Jm90aWxkZTtlcyAuTmV0OzwvbGk+XG4gICAgICAgICAgPGxpPkludGVncmEmY2NlZGlsOyZhdGlsZGU7byBkZSBzaXN0ZW1hczs8L2xpPlxuICAgICAgICAgIDxsaT5EZXNlbnZvbHZpbWVudG8gZGUgYXBsaWNhJmNjZWRpbDsmb3RpbGRlO2VzIHBhcmEgY29tJmVhY3V0ZTtyY2lvIGVsZXRyJm9jaXJjO25pY28uPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGgzPkFuYWxpc3RhIERlc2Vudm9sdmVkb3IgLSBQZXNzb2EgSnVyJmlhY3V0ZTtkaWNhLiBEZSAyMDAzIGEgMjAwNy48L2gzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+Q29uc3VsdG9yaWEgcGFyYSBkaXZlcnNhcyBlbXByZXNhcywgdGFpcyBjb21vOiBTaWduIERlbHV4ZTsgRE1OOyBOaWdyYXBoLi4uPC9saT5cbiAgICAgICAgICA8bGk+UHJvZmVzc29yIGRvIGN1cnNvIGRlIEluZm9ybSZhYWN1dGU7dGljYSBFdXJvRGF0YS48L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8aDM+U2lnbiBEZWx1eGUgLSBQcm9ncmFtYWRvci4gRGUgNi8yMDAyIGEgNy8yMDAzLjwvaDM+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5OZWdvY2lhJmNjZWRpbDsmYXRpbGRlO28gY29tIGNsaWVudGVzIGUgY29uZmVjJmNjZWRpbDsmYXRpbGRlO28gZGUgcHJvcG9zdGFzOzwvbGk+XG4gICAgICAgICAgPGxpPkxldmFudGFtZW50byBkZSByZXF1aXNpdG9zOzwvbGk+XG4gICAgICAgICAgPGxpPk1vZGVsYWdlbSBkZSBzaXN0ZW1hcyBwYXJhIGNsaWVudGVzIGRlIHBlcXVlbm8gZSBtJmVhY3V0ZTtkaW8gcG9ydGU7PC9saT5cbiAgICAgICAgICA8bGk+RGVzZW52b2x2aW1lbnRvIGRlIHNpdGVzIHV0aWxpc2FuZG8gYXMgdGVjbm9sb2dpYXMgLm5ldCBlIEFjdGlvblNjcmlwdC48L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8aDM+WmlvbiBOZXRXb3JrIChwcm9kdXRvcmEgZGUgc2l0ZXMpIC0gUHJvZ3JhbWFkb3IgZSBXZWJkZXNvZ24uIERlIDcvMjAwMCBhIDEyLzIwMDA8L2gzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+RGVzZW52b2x2aW1lbnRvIGRlIFBvcnRhaXMgcGFyYSBlbXByZXNhcyB1dGlsaXphbmRvIEFTUCwgUEhQIGUgQWN0aW9uU2NyaXB0OzwvbGk+XG4gICAgICAgICAgPGxpPkRlc2lnbiBnciZhYWN1dGU7Zmljbzs8L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8aDM+UHJvcGFnIENhbXAuIC0gRXN0JmFhY3V0ZTtnaW8uIERlIDkvMTk5OSBhIDMvMjAwMC48L2gzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+RGVzZW52b2x2aW1lbnRvIGRlIHdlYnNpdGVzIHBhcmEgY2xpZW50ZXMgZGUgcGVxdWVubyBwb3J0ZS48L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8aDI+Rk9STUEmQ2NlZGlsOyZBdGlsZGU7Tzo8L2gyPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+MjAwOCAtIFAmb2FjdXRlO3MtR3JhZHVhZG8gZGUgQW4mYWFjdXRlO2xpc2UsIFByb2pldG8gZSBHZXImZWNpcmM7bmNpYSBkZSBTaXN0ZW1hcyAtIFBVQy1SSi48L2xpPlxuICAgICAgICAgIDxsaT4yMDA0IC0gUCZvYWN1dGU7cy1HcmFkdWFkbyBlbSBFcmdvbm9taWEgZSBVc2FiaWxpZGFkZSAtIFBVQy1SSi48L2xpPlxuICAgICAgICAgIDxsaT4yMDAyIC0gR3JhZHVhJmNjZWRpbDsmYXRpbGRlO28gZW0gRGVzaWduIEdyJmFhY3V0ZTtmaWNvIC0gVU5FU0EuPC9saT5cbiAgICAgICAgICA8bGk+MTk5OCAtIFQmZWFjdXRlO2NuaWNvIGVtIFByb2Nlc3NhbWVudG8gZGUgRGFkb3MgLSBDb2wmZWFjdXRlO2dpbyBTYW50YSBNJm9jaXJjO25pY2EuPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGgyPkwmSWFjdXRlO05HVUFTOjwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkluZ2wmZWNpcmM7cyBJbnRlcm1lZGkmYWFjdXRlO3JpbyB0JmVhY3V0ZTtjbmljby48L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8aDI+SEFCSUxJREFERVM6PC9oMj5cbiAgICAgICAgICBQbGFuZWphbWVudG8gZSBjb25kdSZjY2VkaWw7JmF0aWxkZTtvIGRlIHByb2pldG8sIExpZGVyYW4mY2NlZGlsO2E7IFJldW5pJm90aWxkZTtlcyB0JmVhY3V0ZTtjbmljYXM7IE4mYXRpbGRlO28gdGVuaG8gcHJvYmxlbWEgZW0gdHJhYmFsaGFyIHNvYiBwcmVzcyZhdGlsZGU7bzsgRGVzZW52b2x2aW1lbnRvIGUgbWFudXRlbiZjY2VkaWw7JmF0aWxkZTtvIGRlIHNpc3RlbWFzLCBsZXZhbnRhbWVudG8gZGUgcmVxdWlzaXRvcywgbW9kZWxhZ2VtIGRlIGRhZG9zIGUgcmVxdWlzaXRvczsgVU1MLCBYUCwgV2ViIFNlcnZpY2VzLCBDIywgVkIuTkVULCBBU1AsIFBIUCwgQ29sZEZ1c2lvbiwgSkFWQSwgSlMsIEFjdGlvblNjcmlwdCwgSFRNTCwgWE1MLCBESFRNTCwgQ1NTLCBQTC9TUUwuXG5cbiAgICAgICAgICA8aDI+Q1VSU09TOjwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT4gQVJDSFRBTEtTIC0gVHJlaW5hbWVudG8gQmlnRGF0YSBIYWRvb3AgQ2xvdWRlcmEvT2ktIDI3LzExLzIwMTkgZSAwNC8xMi8yMDE5IC0gOGg8L2xpPiAgXG4gICAgICAgICAgPGxpPlRyZWluYW1lbnRvIENlbnRybyBkZSBUcmVpbmFtZW50byBkYSBDaWRhZGUgTm92YSAtIENpcmN1aXRvIGRlIFNlZ3VyYW7Dp2EgZGEgSW5mb3JtYcOnw6NvIC0gMjEvMDIvMjAxOSAtIDRoPC9saT4gIFxuICAgICAgICAgIDxsaT5TRU8gLSBXb3Jrc2hvcCBTRU8gT2kgLSAyMS8xMi8yMDE4IC0gMmg8L2xpPiAgXG4gICAgICAgICAgPGxpPldPUkFHIC0gV29ya3Nob3Agw4FnaWwgLSBPaSAtIDA5LzExLzIwMTggLSA0aDwvbGk+ICBcbiAgICAgICAgICA8bGk+U2VjdXJpdHkgRGF5IC0gVHJlaW5hbWVudG8gU2VndXJhbsOnYSBkYSBJbmZvcm1hw6fDo28gLSBDZXJ0aWZpY2FkbyBEaWdpdGFsIC0gU2VyYXNhIEV4cGVyaWFuIC0gMTkvMDkvMjAxOCAtIDJoPC9saT4gIFxuICAgICAgICAgIDxsaT5TRUdJTkZPIC0gVHJlaW5hbWVudG8gcHJpbmNpcGFpcyBjb25jZWl0b3MgZSBhc3BlY3RvcyBkZSBzZWd1cmFuw6dhIGRhIGluZm9ybWHDp8Ojby4gT2kgLSAxOC8wMS8yMDE5IC0yaDwvbGk+ICBcbiAgICAgICAgICA8bGk+IFBhbGVzdHJhcyBBcnF1aXRldHVyYSBkZSBTb2Z0d2FyZSBNZXJjYWRvIGUgUHImYWFjdXRlO3RpY2FzIG5vIEluc3RpdHV0byBJbmZuZXQgZW0gMTAvMDIvMjAxMSAtIDIgaG9yYXM8L2xpPlxuICAgICAgICAgIDxsaT4gRGVzZW52b2x2aW1lbnRvIFdlYiBjb20gQVNQLm5ldDogREJJICAtIDkvMDMvMjAwOSAxNy8wNC8yMDA5IC0gNjAgaG9yYXM8L2xpPlxuICAgICAgICAgIDxsaT4gVCZlYWN1dGU7Y25pY2FzIEImYWFjdXRlO3NpY2FzIGRlIERlc2Vudm9sdmltZW50byBkZSBTaXN0ZW1hczogUFVDLVJKIC0gZGUgMTAvMDkvMjAwNyBhIDEzLzEyLzIwMDcgLSAxMTQgaG9yYXMuPC9saT5cbiAgICAgICAgICA8bGk+IERlc2Vudm9sdmVuZG8gQXBsaWNhdGl2b3MgcGFyYSBDZWx1bGFyZXMgY29tIEphdmEgTWljcm8gRWRpdGlvbiAtIEoyTUUgOiBQVUMtUkouLSA2LzIwMDcgYSA3LzIwMDcgLSAxNSBob3Jhcy48L2xpPlxuICAgICAgICAgIDxsaT4gUGFsZXN0cmEgUHJvamV0b3MgZGUgc2l0ZXMgZW0gRmxhc2ggZSBBY3Rpb25TY3JpcHQ6IEluZm5ldCAtIDI5LzA4LzIwMDcgLSAyIGhvcmFzLjwvbGk+XG4gICAgICAgICAgPGxpPiBKYXZhIEImYWFjdXRlO3NpY286IEV1cm9EYXRhIC0gMjAwNiAtIDEyIGhvcmFzPC9saT5cbiAgICAgICAgICA8bGk+IFByb2dyYW1hJmNjZWRpbDsmYXRpbGRlO28gZW0gYysrOiBVbml2ZXJzaWRhZGUgR2FtYSBGaWxoby4gLSAgZGUgMTUvMDcvOTcgYSAyNS8wNy85NyAtIDE2IGhvcmFzPC9saT5cbiAgICAgICAgICA8bGk+IDNEIFN0dWRpbzogVW5pdmVyc2lkYWRlIEdhbWEgRmlsaG8uIC0gZGUgMTUvMDcvOTcgYSAyNS8wNy85NyAtIDE2IGhvcmFzPC9saT5cbiAgICAgICAgICA8bGk+IERlbHBoaTogVW5pdmVyc2lkYWRlIEdhbWEgRmlsaG8uLSAxNC8wNy85NyBhIDIzLzA3Lzk3PC9saT5cbiAgICAgICAgICA8bGk+IEF1dG9jYWQ6IFVuaXZlcnNpZGFkZSBHYW1hIEZpbGhvLiAtIGRlIDE0LzA3Lzk3IGEgMjMvMDcvOTcgLSAxNiBob3JhczwvbGk+XG4gICAgICAgICAgPGxpPiBNb250YWdlbSBlIE1hbnV0ZW4mY2NlZGlsOyZhdGlsZGU7byBkZSBNaWNybyBDb21wdXRhZG9yZXM6IEluZm8gR3JlZ28ncyBJbmZvcm0mYWFjdXRlO3RpY2EuIC0gZGUgNC8xLzk1IGEgNC8yLzk1PC9saT5cbiAgICAgICAgICA8bGk+IExvdHVzMTIzLCBEYmFzZSwgRGJhc2UgUHJvZ3JhbWFkbyBlIENsaXBwZXI6IEluZm8gR3JlZ28ncyBJbmZvcm0mYWFjdXRlO3RpY2EuIC0gZGUgMTAvOTQgYSAxMS85NDwvbGk+XG4gICAgICAgICAgPGxpPklQRCwgTXMtRG9zLCBQcmludCBNYXN0ZXIsIEZvcm1heCwgV29yZHN0YXI6IEluZm8gR3JlZ28ncyBpbmZvcm0mYWFjdXRlO3RpY2EuIC0gZGUgMTQvNi85NCBhIDE0LzA3Lzk0PC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGgyPlBSRVRFTiZDY2VkaWw7JkF0aWxkZTtPIFNBTEFSSUFMOjwvaDI+XG4gICAgICAgICAgUiQgOS4wMDAsMDBcbiAgICAgICAgICA8YnIvPjxici8+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLkhvbWVMaXN0YWRlUm90YXN7XG4gICAgICAgICB3aWR0aDoyNSU7XG4gICAgICAgIH1cbiAgICAgICAgLkhvbWVJbmRleHtcbiAgICAgICAgICB3aWR0aDo3NSU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICR7VXRpbC5mb250ZXNDU1MxKCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1MyKCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1MzKCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1M0KCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1M1KCl9XG4gICAgICAgIGJvZHl7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFNpbXBsb25CUC1SZWd1bGFyLCBzYW5zLXNlcmlmOyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZUhvbWVcbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/curriculo.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (templateHome);

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

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

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

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

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "./pages/routes/eu/curriculo.js":
/*!**************************************!*\
  !*** ./pages/routes/eu/curriculo.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_curriculo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/templates/curriculo.js */ "./components/templates/curriculo.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");


 //import { withAmp } from 'next/amp';

var RotaCurriculoHtml = function RotaCurriculoHtml(props) {
  var cidade = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.url.query.cidade, "Rio de Janeiro");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_templates_curriculo_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modo: "html",
    cidade: cidade
  });
}; //query={props.url.query}
//export default withAmp(RotaCurriculoHtml); // Usado para páginas AMP
//export default withAmp(RotaCurriculoHtml, { hybrid: true }); // Usado para páginas hibridas


/* harmony default export */ __webpack_exports__["default"] = (RotaCurriculoHtml); // Usado para páginas HTML

/***/ }),

/***/ 3:
/*!********************************************!*\
  !*** multi ./pages/routes/eu/curriculo.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oi402825/Documentos/Projetos/site_do_valente/pages/routes/eu/curriculo.js */"./pages/routes/eu/curriculo.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=curriculo.js.map