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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./components/templates/codigo/apache/index.js":
/*!*****************************************************!*\
  !*** ./components/templates/codigo/apache/index.js ***!
  \*****************************************************/
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
/* harmony import */ var _atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../atoms/atFavIcon */ "./components/atoms/atFavIcon/index.js");
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../atoms/atDiv */ "./components/atoms/atDiv/index.js");
/* harmony import */ var _moleculas_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../moleculas/moListadeRotas/index.js */ "./components/moleculas/moListadeRotas/index.js");
/* harmony import */ var _moleculas_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../moleculas/moHeaderSideDoValente/index.js */ "./components/moleculas/moHeaderSideDoValente/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../controller/util.js */ "./controller/util.js");









var atendimentoOi = function atendimentoOi(props) {
  console.log('╔════════════════════════════════╗');
  console.log('║        codigo   Apache       ║');
  console.log('╚════════════════════════════════╝');
  var cidade = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["validaProps"](props.cidade, "Rio de Janeiro");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["validaProps"](props.modo, "html");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2907404390 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["867796929", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2907404390 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["867796929", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Apache"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "Apache",
    className: "jsx-2907404390 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["867796929", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: "/codigo/apache",
    className: "jsx-2907404390 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["867796929", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "amphtml",
    href: "/amp/codigo/apache",
    className: "jsx-2907404390 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["867796929", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    "custom-element": "amp-lightbox",
    src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js",
    className: "jsx-2907404390 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["867796929", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    "custom-element": "amp-iframe",
    src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js",
    className: "jsx-2907404390 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["867796929", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    cidade: cidade,
    modo: modo
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2907404390 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["867796929", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]]) + " " + "codigoApacheListadeRotas"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2907404390 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["867796929", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]]) + " " + "codigoApache"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2907404390 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["867796929", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Apache"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2907404390 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["867796929", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]])
  }, "Aqui entrara a descri\xE7\xE3o..."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2907404390"
  }, ".codigoApacheListadeRotas.jsx-2907404390{width:25%;}.codigoApache.jsx-2907404390{width:75%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2NvZGlnby9hcGFjaGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNrQixBQUdrQixBQUdBLFVBRlgsQUFTQSIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL3RlbXBsYXRlcy9jb2RpZ28vYXBhY2hlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEZhdmlJY29uIGZyb20gJy4uLy4uLy4uL2F0b21zL2F0RmF2SWNvbidcbmltcG9ydCBEaXYgZnJvbSAnLi4vLi4vLi4vYXRvbXMvYXREaXYnXG5pbXBvcnQgTGlzdGFkZVJvdGFzIGZyb20gJy4uLy4uLy4uL21vbGVjdWxhcy9tb0xpc3RhZGVSb3Rhcy9pbmRleC5qcydcbmltcG9ydCBIZWFkZXJTaWRlRG9WYWxlbnRlIGZyb20gJy4uLy4uLy4uL21vbGVjdWxhcy9tb0hlYWRlclNpZGVEb1ZhbGVudGUvaW5kZXguanMnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IGF0ZW5kaW1lbnRvT2kgPSBmdW5jdGlvbiAocHJvcHMpIHtcblxuICBjb25zb2xlLmxvZygn4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG4gIGNvbnNvbGUubG9nKCfilZEgICAgICAgIGNvZGlnbyAgIEFwYWNoZSAgICAgICDilZEnKTtcbiAgY29uc29sZS5sb2coJ+KVmuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVnScpO1xuXG4gIHZhciBjaWRhZGUgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLmNpZGFkZSwgXCJSaW8gZGUgSmFuZWlyb1wiKTtcbiAgdmFyIG1vZG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLm1vZG8sIFwiaHRtbFwiKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QXBhY2hlPC90aXRsZT5cbiAgICAgICAgPEZhdmlJY29uIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBcGFjaGVcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiL2NvZGlnby9hcGFjaGVcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhbXBodG1sXCIgaHJlZj1cIi9hbXAvY29kaWdvL2FwYWNoZVwiIC8+XG4gICAgICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtbGlnaHRib3hcIiBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtbGlnaHRib3gtMC4xLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtaWZyYW1lXCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWlmcmFtZS0wLjEuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXJTaWRlRG9WYWxlbnRlIGNpZGFkZT17Y2lkYWRlfSBtb2RvPXttb2RvfS8+XG4gICAgICA8RGl2IGRpc3BsYXk9XCJqdXN0aWZpY2Fkb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGlnb0FwYWNoZUxpc3RhZGVSb3Rhc1wiPlxuICAgICAgICAgIDxMaXN0YWRlUm90YXMvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RpZ29BcGFjaGVcIj5cbiAgICAgICAgICA8aDE+QXBhY2hlPC9oMT5cbiAgICAgICAgICA8cD5BcXVpIGVudHJhcmEgYSBkZXNjcmnDp8Ojby4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb2RpZ29BcGFjaGVMaXN0YWRlUm90YXN7XG4gICAgICAgIHdpZHRoOjI1JTtcbiAgICAgIH1cbiAgICAgIC5jb2RpZ29BcGFjaGV7XG4gICAgICAgIHdpZHRoOjc1JTtcbiAgICAgICAgLyogXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7ICovXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzEoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzIoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzMoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzQoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzUoKX1cbiAgICAgICAgYm9keXtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBmb250LWZhbWlseTogU2ltcGxvbkJQLVJlZ3VsYXIsIHNhbnMtc2VyaWY7ICAgICAgICBcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdGVuZGltZW50b09pXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/codigo/apache/index.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "867796929",
    dynamic: [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]
  }, "".concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"](), " body{margin:0px;padding:0px;background-color:#ffffff;font-family:SimplonBP-Regular,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2NvZGlnby9hcGFjaGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUR5QixBQVFzQixXQUNDLFlBQ2EseUJBQ2lCLHlDQUM1QyIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL3RlbXBsYXRlcy9jb2RpZ28vYXBhY2hlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEZhdmlJY29uIGZyb20gJy4uLy4uLy4uL2F0b21zL2F0RmF2SWNvbidcbmltcG9ydCBEaXYgZnJvbSAnLi4vLi4vLi4vYXRvbXMvYXREaXYnXG5pbXBvcnQgTGlzdGFkZVJvdGFzIGZyb20gJy4uLy4uLy4uL21vbGVjdWxhcy9tb0xpc3RhZGVSb3Rhcy9pbmRleC5qcydcbmltcG9ydCBIZWFkZXJTaWRlRG9WYWxlbnRlIGZyb20gJy4uLy4uLy4uL21vbGVjdWxhcy9tb0hlYWRlclNpZGVEb1ZhbGVudGUvaW5kZXguanMnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IGF0ZW5kaW1lbnRvT2kgPSBmdW5jdGlvbiAocHJvcHMpIHtcblxuICBjb25zb2xlLmxvZygn4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG4gIGNvbnNvbGUubG9nKCfilZEgICAgICAgIGNvZGlnbyAgIEFwYWNoZSAgICAgICDilZEnKTtcbiAgY29uc29sZS5sb2coJ+KVmuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVnScpO1xuXG4gIHZhciBjaWRhZGUgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLmNpZGFkZSwgXCJSaW8gZGUgSmFuZWlyb1wiKTtcbiAgdmFyIG1vZG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLm1vZG8sIFwiaHRtbFwiKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QXBhY2hlPC90aXRsZT5cbiAgICAgICAgPEZhdmlJY29uIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBcGFjaGVcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiL2NvZGlnby9hcGFjaGVcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhbXBodG1sXCIgaHJlZj1cIi9hbXAvY29kaWdvL2FwYWNoZVwiIC8+XG4gICAgICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtbGlnaHRib3hcIiBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtbGlnaHRib3gtMC4xLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtaWZyYW1lXCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWlmcmFtZS0wLjEuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXJTaWRlRG9WYWxlbnRlIGNpZGFkZT17Y2lkYWRlfSBtb2RvPXttb2RvfS8+XG4gICAgICA8RGl2IGRpc3BsYXk9XCJqdXN0aWZpY2Fkb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGlnb0FwYWNoZUxpc3RhZGVSb3Rhc1wiPlxuICAgICAgICAgIDxMaXN0YWRlUm90YXMvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RpZ29BcGFjaGVcIj5cbiAgICAgICAgICA8aDE+QXBhY2hlPC9oMT5cbiAgICAgICAgICA8cD5BcXVpIGVudHJhcmEgYSBkZXNjcmnDp8Ojby4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb2RpZ29BcGFjaGVMaXN0YWRlUm90YXN7XG4gICAgICAgIHdpZHRoOjI1JTtcbiAgICAgIH1cbiAgICAgIC5jb2RpZ29BcGFjaGV7XG4gICAgICAgIHdpZHRoOjc1JTtcbiAgICAgICAgLyogXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7ICovXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzEoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzIoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzMoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzQoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzUoKX1cbiAgICAgICAgYm9keXtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBmb250LWZhbWlseTogU2ltcGxvbkJQLVJlZ3VsYXIsIHNhbnMtc2VyaWY7ICAgICAgICBcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdGVuZGltZW50b09pXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/codigo/apache/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (atendimentoOi);

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

/***/ "./pages/routes/codigo/apache/index.js":
/*!*********************************************!*\
  !*** ./pages/routes/codigo/apache/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_codigo_apache_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/templates/codigo/apache/index.js */ "./components/templates/codigo/apache/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../controller/util.js */ "./controller/util.js");


 //import { withAmp } from 'next/amp';

var RotaApache = function RotaApache(props) {
  // var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_templates_codigo_apache_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modo: "html",
    cidade: _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.url.query.cidade, "Rio de Janeiro")
  });
}; //export default withAmp(RotaApache, { hybrid: true });
//export default withAmp(RotaApache);


/* harmony default export */ __webpack_exports__["default"] = (RotaApache);

/***/ }),

/***/ 5:
/*!***************************************************!*\
  !*** multi ./pages/routes/codigo/apache/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oi402825/Documentos/Projetos/site_do_valente/pages/routes/codigo/apache/index.js */"./pages/routes/codigo/apache/index.js");


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
//# sourceMappingURL=apache.js.map