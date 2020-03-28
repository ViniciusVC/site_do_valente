module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
    }, ".atDivVertical.jsx-2986009328{display:block;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JvQixBQUcyQixjQUNILFdBQ2IiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9hdG9tcy9hdERpdi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSBcIi4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qc1wiO1xuLy9pbXBvcnQgeyB1c2VBbXAgfSBmcm9tICduZXh0L2FtcCdcblxuY29uc3QgYXREaXYgPSBwcm9wcyA9PiB7XG4gIHZhciBkaXNwbGF5ID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5kaXNwbGF5LCBcInZlcnRpY2FsXCIpOyAvLyB2ZXJ0aWNhbC9ob3Jpem9udGFsL2p1c3RpZmljYWRvL3Jlc3BvbnNpdm9cbiAgLy92YXIgdmFyV2lkdGggPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLndpZHRoLCBcIjEwMCVcIik7XG4gIC8vdmFyIHZhckhlaWdodCA9IFwiXCI7XG4gIC8vaWYoIHByb3BzLmhlaWdodCE9dW5kZWZpbmVkKXt2YXJIZWlnaHQ9XCJoZWlnaHQ6XCIrcHJvcHMuaGVpZ2h0K1wiO1wifTtcbiAgLy8ke3ZhckhlaWdodH1cbiAgLy93aWR0aDoke3ZhcldpZHRofVxuXG4gIGlmIChkaXNwbGF5ID09IFwidmVydGljYWxcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2VmVydGljYWxcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmF0RGl2VmVydGljYWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZGlzcGxheSA9PSBcImp1c3RpZmljYWRvXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdkp1c3RpZmljYWRvXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hdERpdkp1c3RpZmljYWRvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZGlzcGxheSA9PSBcImhvcml6b250YWxcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2SG9yaXpvbnRhbFwiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXREaXZIb3Jpem9udGFsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1lbHNlIGlmKGRpc3BsYXkgPT0gXCJEaXZMaW5oYVJlc3BvbnNpdm9cIil7XG4gICAgIHJldHVybihcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRpdmxpbmhhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGl2bGluaGF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNjlweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkRpdmxpbmhhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW4gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjYwMHB4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5EaXZsaW5oYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgKVxuICB9ZWxzZXtcbiAgICAvL2Rpc3BsYXk9PVwicmVzcG9uc2l2b1wiXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXREaXZSZXNwb25zaXZvXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgICAgICAuYXREaXZSZXNwb25zaXZvIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgLmF0RGl2UmVzcG9uc2l2byB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0RGl2O1xuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atDiv/index.js */"));
  } else if (display == "justificado") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3405291145" + " " + "atDivJustificado"
    }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3405291145"
    }, ".atDivJustificado.jsx-3405291145{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJvQixBQUcwQiwwRUFDaUIsbUhBQ25CLFdBQ2IiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9hdG9tcy9hdERpdi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSBcIi4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qc1wiO1xuLy9pbXBvcnQgeyB1c2VBbXAgfSBmcm9tICduZXh0L2FtcCdcblxuY29uc3QgYXREaXYgPSBwcm9wcyA9PiB7XG4gIHZhciBkaXNwbGF5ID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5kaXNwbGF5LCBcInZlcnRpY2FsXCIpOyAvLyB2ZXJ0aWNhbC9ob3Jpem9udGFsL2p1c3RpZmljYWRvL3Jlc3BvbnNpdm9cbiAgLy92YXIgdmFyV2lkdGggPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLndpZHRoLCBcIjEwMCVcIik7XG4gIC8vdmFyIHZhckhlaWdodCA9IFwiXCI7XG4gIC8vaWYoIHByb3BzLmhlaWdodCE9dW5kZWZpbmVkKXt2YXJIZWlnaHQ9XCJoZWlnaHQ6XCIrcHJvcHMuaGVpZ2h0K1wiO1wifTtcbiAgLy8ke3ZhckhlaWdodH1cbiAgLy93aWR0aDoke3ZhcldpZHRofVxuXG4gIGlmIChkaXNwbGF5ID09IFwidmVydGljYWxcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2VmVydGljYWxcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmF0RGl2VmVydGljYWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZGlzcGxheSA9PSBcImp1c3RpZmljYWRvXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdkp1c3RpZmljYWRvXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hdERpdkp1c3RpZmljYWRvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZGlzcGxheSA9PSBcImhvcml6b250YWxcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2SG9yaXpvbnRhbFwiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXREaXZIb3Jpem9udGFsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1lbHNlIGlmKGRpc3BsYXkgPT0gXCJEaXZMaW5oYVJlc3BvbnNpdm9cIil7XG4gICAgIHJldHVybihcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRpdmxpbmhhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuRGl2bGluaGF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNjlweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkRpdmxpbmhhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW4gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjYwMHB4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5EaXZsaW5oYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgKVxuICB9ZWxzZXtcbiAgICAvL2Rpc3BsYXk9PVwicmVzcG9uc2l2b1wiXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXREaXZSZXNwb25zaXZvXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgICAgICAuYXREaXZSZXNwb25zaXZvIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgLmF0RGl2UmVzcG9uc2l2byB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0RGl2O1xuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atDiv/index.js */"));
  } else if (display == "horizontal") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2879585090" + " " + "atDivHorizontal"
    }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2879585090"
    }, ".atDivHorizontal.jsx-2879585090{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNvQixBQUdpQyxzR0FDTCx5REFDSixXQUNiIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gXCIuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanNcIjtcbi8vaW1wb3J0IHsgdXNlQW1wIH0gZnJvbSAnbmV4dC9hbXAnXG5cbmNvbnN0IGF0RGl2ID0gcHJvcHMgPT4ge1xuICB2YXIgZGlzcGxheSA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuZGlzcGxheSwgXCJ2ZXJ0aWNhbFwiKTsgLy8gdmVydGljYWwvaG9yaXpvbnRhbC9qdXN0aWZpY2Fkby9yZXNwb25zaXZvXG4gIC8vdmFyIHZhcldpZHRoID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy53aWR0aCwgXCIxMDAlXCIpO1xuICAvL3ZhciB2YXJIZWlnaHQgPSBcIlwiO1xuICAvL2lmKCBwcm9wcy5oZWlnaHQhPXVuZGVmaW5lZCl7dmFySGVpZ2h0PVwiaGVpZ2h0OlwiK3Byb3BzLmhlaWdodCtcIjtcIn07XG4gIC8vJHt2YXJIZWlnaHR9XG4gIC8vd2lkdGg6JHt2YXJXaWR0aH1cblxuICBpZiAoZGlzcGxheSA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdlZlcnRpY2FsXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hdERpdlZlcnRpY2FsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKGRpc3BsYXkgPT0gXCJqdXN0aWZpY2Fkb1wiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXREaXZKdXN0aWZpY2Fkb1wiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXREaXZKdXN0aWZpY2FkbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKGRpc3BsYXkgPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdkhvcml6b250YWxcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmF0RGl2SG9yaXpvbnRhbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9ZWxzZSBpZihkaXNwbGF5ID09IFwiRGl2TGluaGFSZXNwb25zaXZvXCIpe1xuICAgICByZXR1cm4oXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEaXZsaW5oYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLkRpdmxpbmhhe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTY5cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5EaXZsaW5oYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo2MDBweCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuRGl2bGluaGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgIClcbiAgfWVsc2V7XG4gICAgLy9kaXNwbGF5PT1cInJlc3BvbnNpdm9cIlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2UmVzcG9uc2l2b1wiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgLmF0RGl2UmVzcG9uc2l2byB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgIC5hdERpdlJlc3BvbnNpdm8ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdERpdjtcbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atDiv/index.js */"));
  } else if (display == "DivLinhaResponsivo") {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-935902151" + " " + "Divlinha"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "935902151"
    }, ".Divlinha.jsx-935902151{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 20px;}@media (max-width:1169px){.Divlinha.jsx-935902151{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;max-width:768px;}@media(max-width:600px){.Divlinha.jsx-935902151{margin-right:20px;}}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURvQyxBQUd5QyxBQU1JLEFBVU0sa0JBQ3BCLHdEQWhCNEIsQUFNSiw4RUFDSCxtQkFDRCxrQkFQVCxBQVFTLGNBUDFCLElBUXlCLGlCQUNELGdCQUNsQiIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL2F0b21zL2F0RGl2L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tIFwiLi4vLi4vLi4vY29udHJvbGxlci91dGlsLmpzXCI7XG4vL2ltcG9ydCB7IHVzZUFtcCB9IGZyb20gJ25leHQvYW1wJ1xuXG5jb25zdCBhdERpdiA9IHByb3BzID0+IHtcbiAgdmFyIGRpc3BsYXkgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLmRpc3BsYXksIFwidmVydGljYWxcIik7IC8vIHZlcnRpY2FsL2hvcml6b250YWwvanVzdGlmaWNhZG8vcmVzcG9uc2l2b1xuICAvL3ZhciB2YXJXaWR0aCA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMud2lkdGgsIFwiMTAwJVwiKTtcbiAgLy92YXIgdmFySGVpZ2h0ID0gXCJcIjtcbiAgLy9pZiggcHJvcHMuaGVpZ2h0IT11bmRlZmluZWQpe3ZhckhlaWdodD1cImhlaWdodDpcIitwcm9wcy5oZWlnaHQrXCI7XCJ9O1xuICAvLyR7dmFySGVpZ2h0fVxuICAvL3dpZHRoOiR7dmFyV2lkdGh9XG5cbiAgaWYgKGRpc3BsYXkgPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXREaXZWZXJ0aWNhbFwiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXREaXZWZXJ0aWNhbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChkaXNwbGF5ID09IFwianVzdGlmaWNhZG9cIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2SnVzdGlmaWNhZG9cIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmF0RGl2SnVzdGlmaWNhZG8ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChkaXNwbGF5ID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXREaXZIb3Jpem9udGFsXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hdERpdkhvcml6b250YWwge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfWVsc2UgaWYoZGlzcGxheSA9PSBcIkRpdkxpbmhhUmVzcG9uc2l2b1wiKXtcbiAgICAgcmV0dXJuKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGl2bGluaGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5EaXZsaW5oYXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE2OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuRGl2bGluaGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbiA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NjAwcHgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkRpdmxpbmhhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICApXG4gIH1lbHNle1xuICAgIC8vZGlzcGxheT09XCJyZXNwb25zaXZvXCJcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdlJlc3BvbnNpdm9cIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgIC5hdERpdlJlc3BvbnNpdm8ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgICAgICAuYXREaXZSZXNwb25zaXZvIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXREaXY7XG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atDiv/index.js */"));
  } else {
    //display=="responsivo"
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1144856795" + " " + "atDivResponsivo"
    }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1144856795"
    }, "@media only screen and (min-width:1000px){.atDivResponsivo.jsx-1144856795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media only screen and (max-width:1000px){.atDivResponsivo.jsx-1144856795{display:block;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZvQixBQUk0QixBQU1DLGNBQ0gsV0FDYixpREFQZ0MsbUhBQ2hDIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gXCIuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanNcIjtcbi8vaW1wb3J0IHsgdXNlQW1wIH0gZnJvbSAnbmV4dC9hbXAnXG5cbmNvbnN0IGF0RGl2ID0gcHJvcHMgPT4ge1xuICB2YXIgZGlzcGxheSA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuZGlzcGxheSwgXCJ2ZXJ0aWNhbFwiKTsgLy8gdmVydGljYWwvaG9yaXpvbnRhbC9qdXN0aWZpY2Fkby9yZXNwb25zaXZvXG4gIC8vdmFyIHZhcldpZHRoID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy53aWR0aCwgXCIxMDAlXCIpO1xuICAvL3ZhciB2YXJIZWlnaHQgPSBcIlwiO1xuICAvL2lmKCBwcm9wcy5oZWlnaHQhPXVuZGVmaW5lZCl7dmFySGVpZ2h0PVwiaGVpZ2h0OlwiK3Byb3BzLmhlaWdodCtcIjtcIn07XG4gIC8vJHt2YXJIZWlnaHR9XG4gIC8vd2lkdGg6JHt2YXJXaWR0aH1cblxuICBpZiAoZGlzcGxheSA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdlZlcnRpY2FsXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hdERpdlZlcnRpY2FsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKGRpc3BsYXkgPT0gXCJqdXN0aWZpY2Fkb1wiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXREaXZKdXN0aWZpY2Fkb1wiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXREaXZKdXN0aWZpY2FkbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgaWYgKGRpc3BsYXkgPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdERpdkhvcml6b250YWxcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmF0RGl2SG9yaXpvbnRhbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9ZWxzZSBpZihkaXNwbGF5ID09IFwiRGl2TGluaGFSZXNwb25zaXZvXCIpe1xuICAgICByZXR1cm4oXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEaXZsaW5oYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLkRpdmxpbmhhe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTY5cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5EaXZsaW5oYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo2MDBweCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuRGl2bGluaGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgIClcbiAgfWVsc2V7XG4gICAgLy9kaXNwbGF5PT1cInJlc3BvbnNpdm9cIlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0RGl2UmVzcG9uc2l2b1wiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgLmF0RGl2UmVzcG9uc2l2byB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgIC5hdERpdlJlc3BvbnNpdm8ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdERpdjtcbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atDiv/index.js */"));
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

/***/ "./components/moleculas/layout/index.js":
/*!**********************************************!*\
  !*** ./components/moleculas/layout/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/atDiv */ "./components/atoms/atDiv/index.js");
/* harmony import */ var _moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moListadeRotas/index.js */ "./components/moleculas/moListadeRotas/index.js");
/* harmony import */ var _moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../moHeaderSideDoValente/index.js */ "./components/moleculas/moHeaderSideDoValente/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");







var layout = function layout(props) {
  console.log('Rodando /layout.js');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["validaProps"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["validaProps"](props.modo, "html");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"]()]]]) + " " + "Body"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"]()]]]) + " " + "borda"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"]()]]]) + " " + "borda"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"]()]]]) + " " + "DivSombra"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    regiao: regiao,
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"]()]]]) + " " + "borda"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"]()]]]) + " " + "codigoIndexListadeRotas DivSombra"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    regiao: regiao,
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"]()]]]) + " " + "borda"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"]()]]]) + " " + "divCss DivSombra"
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"]()]]]) + " " + "borda"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"]()]]]) + " " + "DivSombra"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    regiao: regiao,
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3149695757 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1051470625", [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"]()]]]) + " " + "borda"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3149695757"
  }, ".Body.jsx-3149695757{width:100%;margin :0px;padding :0px;}.borda.jsx-3149695757{width:10px;height:10px;}.DivSombra.jsx-3149695757{background-color:#696969;width:100%;color:#333;font-size:17px;font-family:sans-serif;background-color:#ffffff;background-image:linear-gradient(180deg,#ffffff,#ffffff,#bdb8a7 );border-radius:8px;color:#222222;display:block;border:solid 1px #dbdbdb;padding:10px;box-sizing:border-box;-webkit-box-shadow:2px 2px 10px rgba(1,1,1,0.57);-moz-box-shadow:2px 2px 10px rgba(1,1,1,0.57);box-shadow:2px 2px 10px rgba(1,1,1,0.57);}.codigoIndexListadeRotas.jsx-3149695757{width:25%;}.divCss.jsx-3149695757{width:75%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2tCLEFBR21CLEFBS0EsQUFJZSxBQW9CaEIsQUFHQSxVQUZYLEFBR0EsQ0FoQ2MsQUFLQSxZQUpDLEFBS2YsRUFHYSxXQVBiLEFBUWEsV0FDSSxlQUNRLHVCQUNFLHlCQUM0QyxrRUFDbkQsa0JBQ0osY0FDQSxjQUVXLHlCQUNaLGFBQ1Msc0JBQzhCLGlEQUNILDhDQUNMLHlDQUM5QyIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL21vbGVjdWxhcy9sYXlvdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGl2IGZyb20gJy4uLy4uL2F0b21zL2F0RGl2J1xuXG5pbXBvcnQgTGlzdGFkZVJvdGFzIGZyb20gJy4uL21vTGlzdGFkZVJvdGFzL2luZGV4LmpzJ1xuaW1wb3J0IEhlYWRlclNpZGVEb1ZhbGVudGUgZnJvbSAnLi4vbW9IZWFkZXJTaWRlRG9WYWxlbnRlL2luZGV4LmpzJ1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuXG5jb25zdCBsYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnNvbGUubG9nKCdSb2RhbmRvIC9sYXlvdXQuanMnKTtcbiAgdmFyIHJlZ2lhbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMucmVnaWFvICwgXCJSSlwiKTtcbiAgdmFyIG1vZG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLm1vZG8sIFwiaHRtbFwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkJvZHlcIj5cbiAgICAgIDxEaXYgZGlzcGxheT1cImp1c3RpZmljYWRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGFcIj48L2Rpdj5cbiAgICAgICAgPERpdiBkaXNwbGF5PVwidmVydGljYWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEaXZTb21icmFcIj5cbiAgICAgICAgICAgIDxIZWFkZXJTaWRlRG9WYWxlbnRlIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkYVwiPjwvZGl2PlxuICAgICAgICAgIDxEaXYgZGlzcGxheT1cImp1c3RpZmljYWRvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGlnb0luZGV4TGlzdGFkZVJvdGFzIERpdlNvbWJyYVwiPlxuICAgICAgICAgICAgICA8TGlzdGFkZVJvdGFzIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkNzcyBEaXZTb21icmFcIj5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEaXZTb21icmFcIj5cbiAgICAgICAgICAgIDxIZWFkZXJTaWRlRG9WYWxlbnRlIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGl2PiAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGFcIj48L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L0Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5Cb2R5e1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBtYXJnaW4gOiAwcHg7XG4gICAgICAgIHBhZGRpbmcgOiAwcHg7XG4gICAgICB9XG4gICAgICAuYm9yZGF7XG4gICAgICAgIHdpZHRoOjEwcHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5EaXZTb21icmF7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTY5Njk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiwgI2ZmZmZmZiwgI2JkYjhhNyApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLypoZWlnaHQ6IDMuNDI4NTcxNDNyZW07Ki9cbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2RiZGJkYjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgxLCAxLCAxLCAwLjU3KTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgxLCAxLCAxLCAwLjU3KTtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMSwgMSwgMSwgMC41Nyk7ICAgICAgICBcbiAgICAgIH1cblxuICAgICAgLmNvZGlnb0luZGV4TGlzdGFkZVJvdGFze1xuICAgICAgICB3aWR0aDoyNSU7XG4gICAgICB9XG4gICAgICAuZGl2Q3Nze1xuICAgICAgICB3aWR0aDo3NSU7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTMSgpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTMigpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTMygpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTNCgpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTNSgpfVxuICAgICAgICBib2R5e1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA1MDA1ZCwgI2JkYjhhNywgI2FhZjFmZiApO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBTaW1wbG9uQlAtUmVndWxhciwgc2Fucy1zZXJpZjsgICAgICAgIFxuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dFxuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/layout/index.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1051470625",
    dynamic: [_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"]()]
  }, "".concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS1"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS2"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS3"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS4"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_5__["fontesCSS5"](), " body{margin:0px;padding:0px;background-color:#D3D3D3;background-image:linear-gradient(45deg,#05005d,#bdb8a7,#aaf1ff );font-family:SimplonBP-Regular,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RXlCLEFBUXNCLFdBQ0MsWUFDYSx5QkFDMkMsaUVBQzFCLHlDQUM1QyIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL21vbGVjdWxhcy9sYXlvdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGl2IGZyb20gJy4uLy4uL2F0b21zL2F0RGl2J1xuXG5pbXBvcnQgTGlzdGFkZVJvdGFzIGZyb20gJy4uL21vTGlzdGFkZVJvdGFzL2luZGV4LmpzJ1xuaW1wb3J0IEhlYWRlclNpZGVEb1ZhbGVudGUgZnJvbSAnLi4vbW9IZWFkZXJTaWRlRG9WYWxlbnRlL2luZGV4LmpzJ1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuXG5jb25zdCBsYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnNvbGUubG9nKCdSb2RhbmRvIC9sYXlvdXQuanMnKTtcbiAgdmFyIHJlZ2lhbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMucmVnaWFvICwgXCJSSlwiKTtcbiAgdmFyIG1vZG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLm1vZG8sIFwiaHRtbFwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkJvZHlcIj5cbiAgICAgIDxEaXYgZGlzcGxheT1cImp1c3RpZmljYWRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGFcIj48L2Rpdj5cbiAgICAgICAgPERpdiBkaXNwbGF5PVwidmVydGljYWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEaXZTb21icmFcIj5cbiAgICAgICAgICAgIDxIZWFkZXJTaWRlRG9WYWxlbnRlIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkYVwiPjwvZGl2PlxuICAgICAgICAgIDxEaXYgZGlzcGxheT1cImp1c3RpZmljYWRvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGlnb0luZGV4TGlzdGFkZVJvdGFzIERpdlNvbWJyYVwiPlxuICAgICAgICAgICAgICA8TGlzdGFkZVJvdGFzIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkNzcyBEaXZTb21icmFcIj5cbiAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEaXZTb21icmFcIj5cbiAgICAgICAgICAgIDxIZWFkZXJTaWRlRG9WYWxlbnRlIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGl2PiAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGFcIj48L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L0Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5Cb2R5e1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBtYXJnaW4gOiAwcHg7XG4gICAgICAgIHBhZGRpbmcgOiAwcHg7XG4gICAgICB9XG4gICAgICAuYm9yZGF7XG4gICAgICAgIHdpZHRoOjEwcHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5EaXZTb21icmF7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTY5Njk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiwgI2ZmZmZmZiwgI2JkYjhhNyApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLypoZWlnaHQ6IDMuNDI4NTcxNDNyZW07Ki9cbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2RiZGJkYjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgxLCAxLCAxLCAwLjU3KTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgxLCAxLCAxLCAwLjU3KTtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMSwgMSwgMSwgMC41Nyk7ICAgICAgICBcbiAgICAgIH1cblxuICAgICAgLmNvZGlnb0luZGV4TGlzdGFkZVJvdGFze1xuICAgICAgICB3aWR0aDoyNSU7XG4gICAgICB9XG4gICAgICAuZGl2Q3Nze1xuICAgICAgICB3aWR0aDo3NSU7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTMSgpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTMigpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTMygpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTNCgpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTNSgpfVxuICAgICAgICBib2R5e1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA1MDA1ZCwgI2JkYjhhNywgI2FhZjFmZiApO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBTaW1wbG9uQlAtUmVndWxhciwgc2Fucy1zZXJpZjsgICAgICAgIFxuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dFxuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/layout/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (layout);

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
/* harmony import */ var _atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/atImg/index.js */ "./components/atoms/atImg/index.js");
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/atDiv */ "./components/atoms/atDiv/index.js");
/* harmony import */ var _selectOption_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectOption.js */ "./components/moleculas/moHeaderSideDoValente/selectOption.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");





 //console.log('moHeaderSideDoValente ');

var moHeaderSideDoValente = function moHeaderSideDoValente(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  var JsonRegiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["regiao"](regiao);
  var StringModo = "";

  if (modo == "AMP" || modo == "amp") {
    StringModo = "/amp";
  }

  console.log("regiao=" + regiao);
  console.log("modo=" + modo);
  console.log(JsonRegiao);
  console.log('╔════════════════════════════════╗');
  console.log(JsonRegiao.estado);
  console.log(JsonRegiao.capital);
  console.log('╚════════════════════════════════╝');
  var listaRegioes = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["listaRegioes"](); // function submit(){
  //   document.getElementById("regiao").submit()
  // }

  function selectRegiao() {
    if (modo == "AMP" || modo == "amp") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, 'Região(Estado) :' + JsonRegiao.sigla + '-' + JsonRegiao.estado, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        id: "formregiao",
        name: "formregiao",
        method: "GET"
      }, "Regi\xE3o(Estado) : ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        id: "regiao",
        name: "regiao",
        onChange: function onChange() {
          document.getElementById("formregiao").submit();
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: JsonRegiao.sigla,
        select: true
      }, JsonRegiao.sigla + '-' + JsonRegiao.estado), retornaRegioesa()));
    }
  }

  function retornaRegioesa() {
    listaRegioes.map(function (item, i) {
      if (item.sigla != JsonRegiao.sigla) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: item.sigla
        }, item.sigla + '-' + item.estado);
      }
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2652638531" + " " + "DivHeaderSideDoValente logo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: StringModo + "/?regiao=" + regiao,
    className: "jsx-2652638531"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2652638531"
  }, "Modo : ", modo, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2652638531"
  }), selectRegiao(), "Cidade : ", JsonRegiao.capital)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2652638531"
  }, ".logo.jsx-2652638531{padding-top:10px;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:slideinSombra-jsx-2652638531;animation-name:slideinSombra-jsx-2652638531;}@-webkit-keyframes slideinSombra-jsx-2652638531{from{padding-top:0px;}to{padding-top:10px;}}@keyframes slideinSombra-jsx-2652638531{from{padding-top:0px;}to{padding-top:10px;}}.DivHeaderSideDoValente.jsx-2652638531{margin:0px;}.pHeaderSideDoValente.jsx-2652638531{padding-top:15px;font-size:40px;font-family:sans-serif;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RWtCLEFBRzBCLEFBTUMsQUFHQyxBQUtULEFBR08sV0FGbkIsS0FSRSxDQU5zQixBQVN0QixBQVFlLGVBQ1EsdUJBQ0wsY0FsQlcsSUFtQi9CLDRGQWxCQSIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL21vbGVjdWxhcy9tb0hlYWRlclNpZGVEb1ZhbGVudGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1nIGZyb20gJy4uLy4uL2F0b21zL2F0SW1nL2luZGV4LmpzJztcbmltcG9ydCBEaXYgZnJvbSAnLi4vLi4vYXRvbXMvYXREaXYnXG5pbXBvcnQgU2VsZWN0T3B0aW9uIGZyb20gJy4vc2VsZWN0T3B0aW9uLmpzJ1xuXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG4vL2NvbnNvbGUubG9nKCdtb0hlYWRlclNpZGVEb1ZhbGVudGUgJyk7XG5cbmNvbnN0IG1vSGVhZGVyU2lkZURvVmFsZW50ZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCByZWdpYW8gPSBwcm9wcy5yZWdpYW87XG4gIGNvbnN0IG1vZG8gPSBwcm9wcy5tb2RvO1xuICBjb25zdCBKc29uUmVnaWFvID0gVXRpbC5yZWdpYW8ocmVnaWFvKTtcbiAgdmFyIFN0cmluZ01vZG8gPSBcIlwiO1xuICBpZihtb2RvPT1cIkFNUFwiIHx8IG1vZG89PVwiYW1wXCIpe1xuICAgIFN0cmluZ01vZG8gPSBcIi9hbXBcIjtcbiAgfVxuICBjb25zb2xlLmxvZyhcInJlZ2lhbz1cIityZWdpYW8pO1xuICBjb25zb2xlLmxvZyhcIm1vZG89XCIrbW9kbyk7XG4gIGNvbnNvbGUubG9nKEpzb25SZWdpYW8pO1xuICBjb25zb2xlLmxvZygn4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG4gIGNvbnNvbGUubG9nKEpzb25SZWdpYW8uZXN0YWRvKTtcbiAgY29uc29sZS5sb2coSnNvblJlZ2lhby5jYXBpdGFsKTtcbiAgY29uc29sZS5sb2coJ+KVmuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVnScpO1xuICBcbiAgY29uc3QgbGlzdGFSZWdpb2VzID0gVXRpbC5saXN0YVJlZ2lvZXMoKTtcblxuICAvLyBmdW5jdGlvbiBzdWJtaXQoKXtcbiAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lhb1wiKS5zdWJtaXQoKVxuICAvLyB9XG4gIFxuICBmdW5jdGlvbiBzZWxlY3RSZWdpYW8oKXtcbiAgICBpZihtb2RvPT1cIkFNUFwiIHx8IG1vZG89PVwiYW1wXCIpe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4+eydSZWdpw6NvKEVzdGFkbykgOicrSnNvblJlZ2lhby5zaWdsYSsnLScrSnNvblJlZ2lhby5lc3RhZG99PGJyLz48L3NwYW4+XG4gICAgICApXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxmb3JtIGlkPVwiZm9ybXJlZ2lhb1wiIG5hbWU9XCJmb3JtcmVnaWFvXCIgbWV0aG9kPVwiR0VUXCI+XG4gICAgICAgIFJlZ2nDo28oRXN0YWRvKSA6IDxici8+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJyZWdpYW9cIiBuYW1lPVwicmVnaWFvXCIgb25DaGFuZ2U9eygpID0+IHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1yZWdpYW9cIikuc3VibWl0KCl9fT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtKc29uUmVnaWFvLnNpZ2xhfSBzZWxlY3Q+e0pzb25SZWdpYW8uc2lnbGErJy0nK0pzb25SZWdpYW8uZXN0YWRvfTwvb3B0aW9uPlxuICAgICAgICAgIHtyZXRvcm5hUmVnaW9lc2EoKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Zvcm0+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmV0b3JuYVJlZ2lvZXNhKCl7XG4gICAgbGlzdGFSZWdpb2VzLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgaWYoaXRlbS5zaWdsYSE9SnNvblJlZ2lhby5zaWdsYSl7XG4gICAgICAgIHJldHVybiAoPG9wdGlvbiB2YWx1ZT17aXRlbS5zaWdsYX0+e2l0ZW0uc2lnbGErJy0nK2l0ZW0uZXN0YWRvfTwvb3B0aW9uPilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGl2IGRpc3BsYXk9XCJqdXN0aWZpY2Fkb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRpdkhlYWRlclNpZGVEb1ZhbGVudGUgbG9nb1wiPlxuICAgICAgICAgIDxhIGhyZWY9e1N0cmluZ01vZG8rXCIvP3JlZ2lhbz1cIityZWdpYW99ID5cbiAgICAgICAgICAgIDxJbWcgc3JjPVwiL3N0YXRpYy9hc3NldHN2NS9pbWcvbG9nX2xhcmFuamExLnBuZ1wiIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjUwcHhcIiBhbHQ9XCJMb2dvIFNpdGUgVmFsZW50ZVwiIHRpdGxlPVwiTG9nbyBTaXRlIFZhbGVudGVcIiBjbGFzcz1cIkxvZ29TaXRlVmFsZW50ZVwiIG1vZG89e21vZG99IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0RpdkhlYWRlclNpZGVEb1ZhbGVudGUgcEhlYWRlclNpZGVEb1ZhbGVudGUnPlxuICAgICAgICAgIDxzcGFuPlNpdGUgZG8gVmFsZW50ZTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBNb2RvIDoge21vZG99PGJyLz5cbiAgICAgICAgICAgIHtzZWxlY3RSZWdpYW8oKX1cbiAgICAgICAgICAgIENpZGFkZSA6IHtKc29uUmVnaWFvLmNhcGl0YWx9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5sb2dve1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW5Tb21icmE7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHNsaWRlaW5Tb21icmEge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuRGl2SGVhZGVyU2lkZURvVmFsZW50ZXtcbiAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgIH1cbiAgICAgIC5wSGVhZGVyU2lkZURvVmFsZW50ZXtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9EaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9IZWFkZXJTaWRlRG9WYWxlbnRlXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moHeaderSideDoValente/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (moHeaderSideDoValente);

/***/ }),

/***/ "./components/moleculas/moHeaderSideDoValente/selectOption.js":
/*!********************************************************************!*\
  !*** ./components/moleculas/moHeaderSideDoValente/selectOption.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");

 //console.log('moHeaderSideDoValente ');

var moSelectOption = function moSelectOption(props) {
  var regiao = props.regiao;
  var listaRegioes = _controller_util_js__WEBPACK_IMPORTED_MODULE_1__["listaRegioes"]();
  var h = 0; //for (var h=0; h<listaRegioes.length; ++h) {
  //  varRegiao[h].sigla +" - " varRegiao[h].estado
  //}
  // this.listaRegioes.map(function(item, i){
  //   console.log('test');
  //   return <option value={i}>Test</option>
  // })

  listaRegioes.map(function (item, i) {
    console.log("listaRegioes=" + i + "/" + item.sigla);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: item.sigla
    }, item.estado);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (moSelectOption);

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
    href: StringModo + "/componentes/?regiao=" + regiao
  }, "Componentes"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
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
  }, "Curriculo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3980931307"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/amp/eu/curriculo/?regiao=" + regiao
  }, "Curriculo (Pagina em AMP)"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3980931307"
  }, ".CssRotasProjeto.jsx-3980931307{width:100%;color:#333;font-size:17px;}.CssTitleRotasProjeto.jsx-3980931307{margin:0;width:100%;padding-top:10px;font-size:22px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vTGlzdGFkZVJvdGFzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlSa0IsQUFHb0IsQUFLRixTQUNFLEVBTEEsU0FNTSxFQUxGLGVBQ2pCLEFBS2lCLGVBQ2pCIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vTGlzdGFkZVJvdGFzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cbi8vY29uc29sZS5sb2coJ0luc3RhbmNpYW5kbyB0ZW1wbGF0ZXMvaW5kZXguanMnKTtcbmNvbnN0IExpc3RhZGVSb3RhcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCByZWdpYW8gPSBwcm9wcy5yZWdpYW87XG4gIGNvbnN0IG1vZG8gPSBwcm9wcy5tb2RvO1xuICB2YXIgU3RyaW5nTW9kbyA9IFwiXCI7XG4gIGlmKG1vZG89PVwiQU1QXCIgfHwgbW9kbz09XCJhbXBcIil7XG4gICAgU3RyaW5nTW9kbyA9IFwiL2FtcFwiO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoNCBjbGFzc05hbWU9J0Nzc1RpdGxlUm90YXNQcm9qZXRvJz5Sb3RhcyBkbyBTaXRlIGRvIFZhbGVudGU8L2g0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J0Nzc1JvdGFzUHJvamV0byc+XG4gICAgICAgIFxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiLz9yZWdpYW89XCIrcmVnaWFvfT5Ib21lPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvP3JlZ2lhbz1cIityZWdpYW99PkhvbWUgKFBhZ2luYSBlbSBIVE1MKTwvTGluaz48L2xpPlxuICAgICAgICAgIDxsaT48TGluayBocmVmPXtcIi9hbXAvP3JlZ2lhbz1cIityZWdpYW99PkhvbWUgKFBhZ2luYSBlbSBBTVApPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5PjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2FwYWNoZS8/cmVnaWFvPVwiK3JlZ2lhb30+QXBhY2hlPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9hcGFjaGUvaW5zdGFsdWJ1bnR1P3JlZ2lhbz1cIityZWdpYW99Pkluc3RhbGFyIEFwYWNoZSBubyBVYnVudHU8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9hcGFjaGUvYWxpYXM/cmVnaWFvPVwiK3JlZ2lhb30+QWxpYXMgZW0gQXBhY2hlPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vYXBhY2hlL3JlZGlyZWN0P3JlZ2lhbz1cIityZWdpYW99PnJlZGlyZWN0IDMwMSBlbSBBcGFjaGU8L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vYXNwLz9yZWdpYW89XCIrcmVnaWFvfT5BU1A8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2FzcC8/cmVnaWFvPVwiK3JlZ2lhb30+QVNQPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vYXNwL3JlZGlyZWN0P3JlZ2lhbz1cIityZWdpYW99PnJlZGlyZWN0IDMwMSBlbSBBU1A8L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY2dpLz9yZWdpYW89XCIrcmVnaWFvfT5DR0kgUEVSTDwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY2dpLz9yZWdpYW89XCIrcmVnaWFvfT5yZWRpcmVjdCAzMDEgZW0gQ0dJPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jb2xkZnVzaW9uLz9yZWdpYW89XCIrcmVnaWFvfT5Db2xkRnVzaW9uPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jb2xkZnVzaW9uLz9yZWdpYW89XCIrcmVnaWFvfT5yZWRpcmVjdCAzMDEgZW0gQ29sZEZ1c2lvbjwvTGluaz48L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgXG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5PjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy8/cmVnaWFvPVwiK3JlZ2lhb30+Q1NTPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvP3JlZ2lhbz1cIityZWdpYW99PkludHJvZHXDp8OjbyBhbyBDU1M8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMDIvP3JlZ2lhbz1cIityZWdpYW99PkVzdGlsaXphbmRvIHRleHRvczwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy9jc3MwMy8/cmVnaWFvPVwiK3JlZ2lhb30+SW1hZ2VucyBkZSBmdW5kbyBlIGF0cmlidXRvIHRleHQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMDQvP3JlZ2lhbz1cIityZWdpYW99PkxpbmtzIGUgRGl2czwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy9jc3MwNS8/cmVnaWFvPVwiK3JlZ2lhb30+Q2xhc3NlLCBJRCBlIFNwYW48L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMDYvP3JlZ2lhbz1cIityZWdpYW99Pk1hcmdpbiwgcGFkZGluZyBlIGZsb2F0QXVsYTwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy9jc3MwNy8/cmVnaWFvPVwiK3JlZ2lhb30+UG9zaWNpb25hbWVudG8gZGUgZWxlbWVudG9zLCBib3JkYXMgZSB6LWluZGV4PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzL2NzczA4Lz9yZWdpYW89XCIrcmVnaWFvfT5FZmVpdG9zIGNvbSBvIGF0cmlidXRvIGhvdmVyPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzL2NzczA5Lz9yZWdpYW89XCIrcmVnaWFvfT5IZXJhbsOnYTwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy9jc3MxMC8/cmVnaWFvPVwiK3JlZ2lhb30+Q3JpYW5kbyB1bSBtZW51IGNvbSBsaXN0YXM8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMTEvP3JlZ2lhbz1cIityZWdpYW99Pk1lbnUgZHJvcC1kb3duPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzL2NzczEyLz9yZWdpYW89XCIrcmVnaWFvfT5WYWxpZGHDp8OjbyBlIFdlYiBTdGFuZGFyZHM8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMTMvP3JlZ2lhbz1cIityZWdpYW99PlRhYmVsYXMgU3R5bGU8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvYW5pbWFfYnV0Lz9yZWdpYW89XCIrcmVnaWFvfT5FeGVtcGxvcyBBbmltYSBCdXQ8L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vaHRtbDUvP3JlZ2lhbz1cIityZWdpYW99PkhUTUw8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9odG1sNS8/cmVnaWFvPVwiK3JlZ2lhb30+SFRNTDUgSW50cm9kdcOnw6NvPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9hbXAvY29kaWdvL2h0bWw1Lz9yZWdpYW89XCIrcmVnaWFvfT5IVE1MNSBJbnRyb2R1w6fDo28gKFBhZ2luYSBBTVApPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkVzdHJ1dHVyYSBkYSBQw6FnaW5hIEhUTUw1PC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9hbXAvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5Fc3RydXR1cmEgZGEgUMOhZ2luYSBIVE1MNSAoUGFnaW5hIEFNUCk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+VGl0dWxvLCBQYXLDoWdyYWZvIGUgUXVlYnJhIGRlIExpbmhhPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9hbXAvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5UaXR1bG8sIFBhcsOhZ3JhZm8gZSBRdWVicmEgZGUgTGluaGEgKFBhZ2luYSBBTVApPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgICAgPHN1bW1hcnk+TGlzdGFzPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5Ow6NvIG9yZGVuYWRhPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5PcmRlbmFkYSAodHlwZT0xKTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+T3JkZW5hZGEgKHR5cGU9QSk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99Pk9yZGVuYWRhICh0eXBlPWkpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5PcmRlbmFkYSAodHlwZT1JKTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+Q29tIGRlc2NyacOnw6NvPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgICA8c3VtbWFyeT5JbWFnZW08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkltYWdlbnM8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99Pk1BUDwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+RmlndXJlIGUgRmlnY2FwdGlvbjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PklmcmFtZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5MaW5rczwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgIDxzdW1tYXJ5PlRhYmVsYXM8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlRhYmVsYXM8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlRhYmVsYXMgU3R5bGU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5EaXYgZSBTcGFuPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkNvbWVudMOhcmlvczwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgIDxzdW1tYXJ5Pk1pZGlhPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5BdWRpbzwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+VsOtZGVvPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5WaWRlbyAoQ3JpYW5kbyBsZWdlbmRhcyk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99Pk9iamVjdDwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgICAgPHN1bW1hcnk+Rm9ybXVsw6FyaW88L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkZvcm11bMOhcmlvczwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+Y29tIGxlZ2VuZGEpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5hdHJpYnV0b3M8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PmNhbXBvczogcmFkaW8gZSBjaGVja2JveCk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PmNhbXBvczogTnVtYmVyLCBSYW5nZSBlIENvbG9yKTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+QXV0b2NvbXBsZXRlIGUgUGxhY2Vob2xkZXI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlR5cGVzOiBGaWxlLCBIaWRkZW4sIFNlYXJjaCwgVVJMLCBUZWw8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlR5cGVzIERhdGUsIFRpbWUsIE1vbnRoLCBXZWVrLCBEYXRldGltZSBsb2NhbDwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+VGV4dGFyZWEsIFNwZWxsY2hlY2s8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkJ1dHRvbjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+U2VsZWN0LCBPcHRncm91cDwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+Rm9ybXVsw6FyaW9zIERhdGFsaXN0KTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+Rm9ybXVsw6FyaW9zIEZvcm0sIEZvcm1hY3Rpb24sIEZvcm1tZXRob2QsIEZvcm1lbmN0eXBlLCBGb3Jtbm92YWxpZGF0ZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+TWFyayBlIENvbnRlbnRlZGl0YWJsZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+VGFiaW5kZXggZSBBY2Nlc3NrZXk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkZvcm11bMOhcmlvIENhbXBvIChLZXlnZW4pPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+RGV0YWlsczwvTGluaz48YnIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5IZ3JvdXA8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5NZXRlciBlIFByb2dyZXNzZTwvTGluaz48YnIgLz5cblxuICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+VGFnIGxpbms8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5UaW1lIGUgRGF0ZXRpbWU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5NZW51IGUgTWVudWl0ZW08L0xpbms+PGJyIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgICA8c3VtbWFyeT5TVkc8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PnJlY3Q8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PmVsbGlwc2UsIHRleHQ8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PmxpbmUsIHBvbHlnb24sIHBvbHlsaW5lPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgICA8c3VtbWFyeT5DYXJyb3NlbDwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+Q2Fycm9zZWwgMDE8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkNhcnJvc2VsIDAyPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+U2VtYW50aWNhPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vamF2YS8/cmVnaWFvPVwiK3JlZ2lhb30+SmF2YTwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vamF2YS8/cmVnaWFvPVwiK3JlZ2lhb30+SmF2YTwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2phdmEvP3JlZ2lhbz1cIityZWdpYW99PnJlZGlyZWN0IDMwMSBlbSBKU1A8L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vamF2YXNjcmlwdD9yZWdpYW89XCIrcmVnaWFvfT5KUyBKYXZhU2NyaXB0PC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9qYXZhc2NyaXB0P3JlZ2lhbz1cIityZWdpYW99PkpTIEphdmFTY3JpcHQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9qYXZhc2NyaXB0P3JlZ2lhbz1cIityZWdpYW99PkpTIEphdmFTY3JpcHQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9qYXZhc2NyaXB0P3JlZ2lhbz1cIityZWdpYW99PkpTIEphdmFTY3JpcHQ8L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28va25vY2tvdXQvP3JlZ2lhbz1cIityZWdpYW99Pmtub2Nrb3V0IEpTPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9rbm9ja291dC8/cmVnaWFvPVwiK3JlZ2lhb30+a25vY2tvdXQgSlMgZXhlbXBsbyAwMTwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2tub2Nrb3V0Lz9yZWdpYW89XCIrcmVnaWFvfT5rbm9ja291dCBKUyBleGVtcGxvIDAyPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28va25vY2tvdXQvP3JlZ2lhbz1cIityZWdpYW99Pmtub2Nrb3V0IEpTIGV4ZW1wbG8gMDM8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9rbm9ja291dC8/cmVnaWFvPVwiK3JlZ2lhb30+a25vY2tvdXQgSlMgZXhlbXBsbyAwNDwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2tub2Nrb3V0Lz9yZWdpYW89XCIrcmVnaWFvfT5rbm9ja291dCBKUyBleGVtcGxvIDA1PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28va25vY2tvdXQvP3JlZ2lhbz1cIityZWdpYW99Pmtub2Nrb3V0IEpTIGV4ZW1wbG8gMDY8L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vZG90bmV0Lz9yZWdpYW89XCIrcmVnaWFvfT4uTkVUPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9kb3RuZXQvP3JlZ2lhbz1cIityZWdpYW99Pi5ORVQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9kb3RuZXQvP3JlZ2lhbz1cIityZWdpYW99PnJlZGlyZWN0IDMwMSBlbSBBU1AuTkVUPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5PjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL3BocC8/cmVnaWFvPVwiK3JlZ2lhb30+UEhQPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9waHAvP3JlZ2lhbz1cIityZWdpYW99PlBIUDwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL3BocC9yZWRpcmVjdC8/cmVnaWFvPVwiK3JlZ2lhb30+cmVkaXJlY3QgMzAxIG5vIFBIUDwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL3BocC9wcm9jdXJhYXJxdWl2by8/cmVnaWFvPVwiK3JlZ2lhb30+ZW5jb250cmFyIGFycXVpdmlvIG5vIFBIUDwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL3BocC9wcm9jdXJhZGlyZXRvcmlvLz9yZWdpYW89XCIrcmVnaWFvfT5lbmNvbnRyYXIgZGlyZXRvcmlvIG5vIFBIUDwvTGluaz48L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9ydWJ5b25yYWlscy8/cmVnaWFvPVwiK3JlZ2lhb30+UnVieSBvbiBSYWlsczwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vcnVieW9ucmFpbHMvP3JlZ2lhbz1cIityZWdpYW99PnJlZGlyZWN0IDMwMSBlbSBSdWJ5IG9uIFJhaWxzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICBcbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9nYW1lLz9yZWdpYW89XCIrcmVnaWFvfT5HQU1FPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2dhbWUvY29udHJvbGVvZ29kemlsbGE/cmVnaWFvPVwiK3JlZ2lhb30+R0FNRSAtIENvbnRyb2xlIE8gR29kemlsbGE8L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9odWIvP3JlZ2lhbz1cIityZWdpYW99Pkh1YiBkZSBDb250YXRvPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5ID48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvbXBvbmVudGVzLz9yZWdpYW89XCIrcmVnaWFvfT5Db21wb25lbnRlczwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9ldS8/cmVnaWFvPVwiK3JlZ2lhb30+UXVlbSBTb3UgRXU8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvZXUvY3VycmljdWxvLz9yZWdpYW89XCIrcmVnaWFvfT5DdXJyaWN1bG88L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtcIi9hbXAvZXUvY3VycmljdWxvLz9yZWdpYW89XCIrcmVnaWFvfT5DdXJyaWN1bG8gKFBhZ2luYSBlbSBBTVApPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5Dc3NSb3Rhc1Byb2pldG8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIH1cbiAgICAgIC5Dc3NUaXRsZVJvdGFzUHJvamV0byB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RhZGVSb3Rhc1xuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moListadeRotas/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ListadeRotas);

/***/ }),

/***/ "./components/templates/index.js":
/*!***************************************!*\
  !*** ./components/templates/index.js ***!
  \***************************************/
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
/* harmony import */ var _moleculas_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../moleculas/layout */ "./components/moleculas/layout/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controller/util.js */ "./controller/util.js");







var templateHome = function templateHome(props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      index                             ║');
  console.log('╚════════════════════════════════════════╝');
  var regiao = props.regiao;
  var modo = props.modo;
  var JsonRegiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["regiao"](regiao);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-926456489"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-926456489"
  }, "Home SITE DO VALENTE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "Bem vindo ao SITE DO VALENTE",
    className: "jsx-926456489"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: "https://www.oi.com.br/",
    className: "jsx-926456489"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    regiao: regiao,
    modo: modo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-926456489"
  }, "Bem vindo ao Projeto SITE_DO_VALENTE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-926456489"
  }, "Melhor que jogo do ", JsonRegiao.timea, " com ", JsonRegiao.timeb, ".", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "Renderiza\xE7\xE3o server-side de HTML e AMP (isomorfica ReactJS e NextJS)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "0 - Site pessoal", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "1 - Objetivo de compartilhar conhecimento t\xE9cnico.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "1 - P\xE1ginas em html (Next + React)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "2 - P\xE1ginas AMP (Next + React + AMP)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "4 - Gerador de captcha interno (N\xE3o funciona com balance).", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "Repositorio : https://github.com/ViniciusVC/site_do_valente"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "926456489"
  }, ".h1.jsx-926456489{color :#000000;}.p.jsx-926456489{color :#000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDa0IsQUFHMEIsQUFHQSxlQUZqQixBQUdBIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEZhdkljb24gZnJvbSAnLi4vYXRvbXMvYXRGYXZJY29uJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9tb2xlY3VsYXMvbGF5b3V0J1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZUhvbWUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgY29uc29sZS5sb2coJ+KVlOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVlycpO1xuICBjb25zb2xlLmxvZygn4pWRICAgICAgaW5kZXggICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKVkScpO1xuICBjb25zb2xlLmxvZygn4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWdJyk7XG4gIHZhciByZWdpYW8gPSBwcm9wcy5yZWdpYW87XG4gIHZhciBtb2RvID0gcHJvcHMubW9kbztcbiAgY29uc3QgSnNvblJlZ2lhbyA9IFV0aWwucmVnaWFvKHJlZ2lhbyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZSBTSVRFIERPIFZBTEVOVEU8L3RpdGxlPlxuICAgICAgICA8RmF2SWNvbiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQmVtIHZpbmRvIGFvIFNJVEUgRE8gVkFMRU5URVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3d3dy5vaS5jb20uYnIvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQgcmVnaWFvPXtyZWdpYW99IG1vZG89e21vZG99PlxuICAgICAgICAgIDxoMT5CZW0gdmluZG8gYW8gUHJvamV0byBTSVRFX0RPX1ZBTEVOVEU8L2gxPlxuICAgICAgICAgIDxwPk1lbGhvciBxdWUgam9nbyBkbyB7SnNvblJlZ2lhby50aW1lYX0gY29tIHtKc29uUmVnaWFvLnRpbWVifS48YnIgLz5cbiAgICAgICAgICBSZW5kZXJpemHDp8OjbyBzZXJ2ZXItc2lkZSBkZSBIVE1MIGUgQU1QIChpc29tb3JmaWNhIFJlYWN0SlMgZSBOZXh0SlMpPGJyIC8+XG4gICAgICAgICAgICAwIC0gU2l0ZSBwZXNzb2FsPGJyIC8+XG4gICAgICAgICAgICAxIC0gT2JqZXRpdm8gZGUgY29tcGFydGlsaGFyIGNvbmhlY2ltZW50byB0w6ljbmljby48YnIgLz5cbiAgICAgICAgICAgIDEgLSBQw6FnaW5hcyBlbSBodG1sIChOZXh0ICsgUmVhY3QpPGJyIC8+XG4gICAgICAgICAgICAyIC0gUMOhZ2luYXMgQU1QIChOZXh0ICsgUmVhY3QgKyBBTVApPGJyIC8+XG4gICAgICAgICAgICA0IC0gR2VyYWRvciBkZSBjYXB0Y2hhIGludGVybm8gKE7Do28gZnVuY2lvbmEgY29tIGJhbGFuY2UpLjxiciAvPlxuICAgICAgICAgICAgUmVwb3NpdG9yaW8gOiBodHRwczovL2dpdGh1Yi5jb20vVmluaWNpdXNWQy9zaXRlX2RvX3ZhbGVudGU8L3A+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oMXtcbiAgICAgICAgICBjb2xvciA6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnB7XG4gICAgICAgICAgY29sb3IgOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGVIb21lXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (templateHome);

/***/ }),

/***/ "./controller/util.js":
/*!****************************!*\
  !*** ./controller/util.js ***!
  \****************************/
/*! exports provided: validaProps, apenasNumeros, fontesCSS, fontesCSS1, fontesCSS2, fontesCSS3, fontesCSS4, fontesCSS5, listaRegioes, regiao */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listaRegioes", function() { return listaRegioes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regiao", function() { return regiao; });
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/templates/index.js */ "./components/templates/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/util.js */ "./controller/util.js");


 //import { withAmp } from 'next/amp';

var RotaIndex = function RotaIndex(props) {
  console.log('Rota index'); //var regiao = req.query.regiao
  //var regiao = Util.validaProps(props.regiao, "SP")

  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.url.query.regiao, "RJ"); //var modo = Util.validaProps(props.modo,"html")

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_templates_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modo: "html",
    regiao: regiao
  });
}; //export default withAmp(RotaIndex); // Usado para páginas AMP
//export default withAmp(RotaIndex, { hybrid: true }); // Usado para páginas hibridas


/* harmony default export */ __webpack_exports__["default"] = (RotaIndex); // Usado para páginas HTML

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oi402825/Documentos/Projetos/site_do_valente/pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map