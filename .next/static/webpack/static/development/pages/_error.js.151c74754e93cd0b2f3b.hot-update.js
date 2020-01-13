webpackHotUpdate("static/development/pages/_error.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
    }, ".".concat(varClass, ".__jsx-style-dynamic-selector{src:").concat(varSrc, " width:").concat(varWidth, " height=").concat(varHeight, " alt=").concat(varAlt, " title=").concat(varTitle, ";}@media only screen and (min-width:521px){.hideOnDesktop.__jsx-style-dynamic-selector{display:none;}}@media only screen and (max-width:520px){.hideOnMobile.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpbmljaXVzL0RvY3VtZW50cy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9hdG9tcy9hdEltZy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2dCLEFBUUssQUFJZ0IsQUFNQSxhQUxkLEFBTUEsK0pBWEQiLCJmaWxlIjoiL2hvbWUvdmluaWNpdXMvRG9jdW1lbnRzL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL2F0b21zL2F0SW1nL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuXG5jb25zdCBJbWcgPSBwcm9wcyA9PiB7XG5cdHZhciB2YXJTcmMgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnNyYyxcIi9zdGF0aWMvYXNzZXRzdjUvaW1nL29pLWxvZ28tY2luemEuanBnXCIpO1xuXHQvL2lmKHByb3BzLnNyYyE9dW5kZWZpbmVkKXt2YXJTcmM9cHJvcHMuc3JjfTtcblxuICB2YXIgdmFyV2lkdGggPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLndpZHRoLHZhcldpZHRoKTtcbiAgLy9pZihwcm9wcy53aWR0aCE9dW5kZWZpbmVkKXt2YXJXaWR0aD1wcm9wcy53aWR0aH07XG4gIHZhciB2YXJIZWlnaHQgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLmhlaWdodCwgdmFyV2lkdGgpO1xuICAvL2lmKCBwcm9wcy5oZWlnaHQhPXVuZGVmaW5lZCl7dmFySGVpZ2h0PXByb3BzLmhlaWdodH07XG5cblx0dmFyIHZhckhlaWdodCA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuaGVpZ2h0LCB2YXJXaWR0aCk7XG5cdC8vaWYoIHByb3BzLmhlaWdodCE9dW5kZWZpbmVkKXt2YXJIZWlnaHQ9cHJvcHMuaGVpZ2h0fTtcblxuXHR2YXIgdmFyQWx0ID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5hbHQsXCJJbWFnZW0gUG9ydGFsIE9pXCIpO1xuXHQvL2lmKCBwcm9wcy5hbHQhPXVuZGVmaW5lZCl7dmFyQWx0PXByb3BzLmFsdH07XG5cdHZhciB2YXJUaXRsZSA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMudGl0bGUsdmFyQWx0KTtcblx0Ly9pZiggcHJvcHMudGl0bGUhPXVuZGVmaW5lZCl7dmFyVGl0bGU9cHJvcHMudGl0bGV9O1xuXG5cdHZhciB2YXJDbGFzcyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuY2xhc3MsXCJpbWdcIik7XG5cdC8vaWYoIHByb3BzLmNsYXNzIT11bmRlZmluZWQpe3ZhckNsYXNzPXByb3BzLmNsYXNzfTtcblxuXHR2YXIgdmFySWQgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLmlkLHZhckNsYXNzKTtcblx0Ly9pZihwcm9wcy5pZCE9dW5kZWZpbmVkKXt2YXJJZD1wcm9wcy5pZH07XG5cblx0dmFyIG1vZG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLm1vZG8sXCJodG1sXCIpO1xuXHQvL2lmKCBwcm9wcy5tb2RvIT11bmRlZmluZWQpe21vZG89cHJvcHMubW9kb307XG5cblx0Ly9pZih1c2VBbXAoKSl7IFxuXHRpZiAobW9kbz09XCJhbXBcIiB8fCBtb2RvPT1cIkFNUFwiKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxhbXAtaW1nIHNyYz17dmFyU3JjfVxuXHRcdFx0XHRcdCBpZD17dmFySWR9XG5cdFx0XHRcdFx0IHdpZHRoPXt2YXJXaWR0aH1cblx0XHRcdFx0XHQgaGVpZ2h0PXt2YXJIZWlnaHR9XG5cdFx0XHRcdFx0IGFsdD17dmFyQWx0fVxuXHRcdFx0XHRcdCB0aXRsZT17dmFyVGl0bGV9XG5cdFx0XHRcdFx0IGNsYXNzTmFtZT17dmFyQ2xhc3N9PlxuXHRcdFx0XHQ8L2FtcC1pbWc+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuJHsgdmFyQ2xhc3N9IHtcblx0XHRcdFx0XHRcdHNyYzokeyB2YXJTcmN9XG5cdFx0XHRcdFx0XHR3aWR0aDokeyB2YXJXaWR0aH1cblx0XHRcdFx0XHRcdGhlaWdodD0keyB2YXJIZWlnaHR9XG5cdFx0XHRcdFx0XHRhbHQ9JHsgdmFyQWx0fVxuXHRcdFx0XHRcdFx0dGl0bGU9JHsgdmFyVGl0bGV9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MjFweCkge1xuXHRcdFx0XHRcdFx0LmhpZGVPbkRlc2t0b3Age1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcblx0XHRcdFx0XHRcdC5oaWRlT25Nb2JpbGUge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW1nIHNyYz17dmFyU3JjfVxuXHRcdFx0XHQgICAgIGlkPXt2YXJJZH1cblx0XHRcdFx0ICAgICB3aWR0aD17dmFyV2lkdGh9XG5cdFx0XHRcdCAgICAgaGVpZ2h0PXt2YXJIZWlnaHR9XG5cdFx0XHRcdCAgICAgYWx0PXt2YXJBbHR9XG5cdFx0XHRcdCAgICAgdGl0bGU9e3ZhclRpdGxlfVxuXHRcdFx0XHQgICAgIGNsYXNzTmFtZT17dmFyQ2xhc3N9PlxuXHRcdFx0XHQ8L2ltZz5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC4keyB2YXJDbGFzc317XG5cdFx0XHRcdFx0XHRzcmM6JHsgdmFyU3JjfVxuXHRcdFx0XHRcdFx0d2lkdGg6JHsgdmFyV2lkdGh9XG5cdFx0XHRcdFx0XHRoZWlnaHQ9JHsgdmFySGVpZ2h0fVxuXHRcdFx0XHRcdFx0YWx0PSR7IHZhckFsdH1cblx0XHRcdFx0XHRcdHRpdGxlPSR7IHZhclRpdGxlfVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTIxcHgpIHtcblx0XHRcdFx0XHRcdC5oaWRlT25EZXNrdG9wIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG5cdFx0XHRcdFx0XHQuaGlkZU9uTW9iaWxlIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1nXG4iXX0= */\n/*@ sourceURL=/home/vinicius/Documents/Projetos/site_do_valente/components/atoms/atImg/index.js */")));
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
    }, ".".concat(varClass, ".__jsx-style-dynamic-selector{src:").concat(varSrc, " width:").concat(varWidth, " height=").concat(varHeight, " alt=").concat(varAlt, " title=").concat(varTitle, ";}@media only screen and (min-width:521px){.hideOnDesktop.__jsx-style-dynamic-selector{display:none;}}@media only screen and (max-width:520px){.hideOnMobile.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpbmljaXVzL0RvY3VtZW50cy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9hdG9tcy9hdEltZy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRWdCLEFBUUssQUFJZ0IsQUFNQSxhQUxkLEFBTUEsK0pBWEQiLCJmaWxlIjoiL2hvbWUvdmluaWNpdXMvRG9jdW1lbnRzL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL2F0b21zL2F0SW1nL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuXG5jb25zdCBJbWcgPSBwcm9wcyA9PiB7XG5cdHZhciB2YXJTcmMgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnNyYyxcIi9zdGF0aWMvYXNzZXRzdjUvaW1nL29pLWxvZ28tY2luemEuanBnXCIpO1xuXHQvL2lmKHByb3BzLnNyYyE9dW5kZWZpbmVkKXt2YXJTcmM9cHJvcHMuc3JjfTtcblxuICB2YXIgdmFyV2lkdGggPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLndpZHRoLHZhcldpZHRoKTtcbiAgLy9pZihwcm9wcy53aWR0aCE9dW5kZWZpbmVkKXt2YXJXaWR0aD1wcm9wcy53aWR0aH07XG4gIHZhciB2YXJIZWlnaHQgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLmhlaWdodCwgdmFyV2lkdGgpO1xuICAvL2lmKCBwcm9wcy5oZWlnaHQhPXVuZGVmaW5lZCl7dmFySGVpZ2h0PXByb3BzLmhlaWdodH07XG5cblx0dmFyIHZhckhlaWdodCA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuaGVpZ2h0LCB2YXJXaWR0aCk7XG5cdC8vaWYoIHByb3BzLmhlaWdodCE9dW5kZWZpbmVkKXt2YXJIZWlnaHQ9cHJvcHMuaGVpZ2h0fTtcblxuXHR2YXIgdmFyQWx0ID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5hbHQsXCJJbWFnZW0gUG9ydGFsIE9pXCIpO1xuXHQvL2lmKCBwcm9wcy5hbHQhPXVuZGVmaW5lZCl7dmFyQWx0PXByb3BzLmFsdH07XG5cdHZhciB2YXJUaXRsZSA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMudGl0bGUsdmFyQWx0KTtcblx0Ly9pZiggcHJvcHMudGl0bGUhPXVuZGVmaW5lZCl7dmFyVGl0bGU9cHJvcHMudGl0bGV9O1xuXG5cdHZhciB2YXJDbGFzcyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuY2xhc3MsXCJpbWdcIik7XG5cdC8vaWYoIHByb3BzLmNsYXNzIT11bmRlZmluZWQpe3ZhckNsYXNzPXByb3BzLmNsYXNzfTtcblxuXHR2YXIgdmFySWQgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLmlkLHZhckNsYXNzKTtcblx0Ly9pZihwcm9wcy5pZCE9dW5kZWZpbmVkKXt2YXJJZD1wcm9wcy5pZH07XG5cblx0dmFyIG1vZG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLm1vZG8sXCJodG1sXCIpO1xuXHQvL2lmKCBwcm9wcy5tb2RvIT11bmRlZmluZWQpe21vZG89cHJvcHMubW9kb307XG5cblx0Ly9pZih1c2VBbXAoKSl7IFxuXHRpZiAobW9kbz09XCJhbXBcIiB8fCBtb2RvPT1cIkFNUFwiKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxhbXAtaW1nIHNyYz17dmFyU3JjfVxuXHRcdFx0XHRcdCBpZD17dmFySWR9XG5cdFx0XHRcdFx0IHdpZHRoPXt2YXJXaWR0aH1cblx0XHRcdFx0XHQgaGVpZ2h0PXt2YXJIZWlnaHR9XG5cdFx0XHRcdFx0IGFsdD17dmFyQWx0fVxuXHRcdFx0XHRcdCB0aXRsZT17dmFyVGl0bGV9XG5cdFx0XHRcdFx0IGNsYXNzTmFtZT17dmFyQ2xhc3N9PlxuXHRcdFx0XHQ8L2FtcC1pbWc+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuJHsgdmFyQ2xhc3N9IHtcblx0XHRcdFx0XHRcdHNyYzokeyB2YXJTcmN9XG5cdFx0XHRcdFx0XHR3aWR0aDokeyB2YXJXaWR0aH1cblx0XHRcdFx0XHRcdGhlaWdodD0keyB2YXJIZWlnaHR9XG5cdFx0XHRcdFx0XHRhbHQ9JHsgdmFyQWx0fVxuXHRcdFx0XHRcdFx0dGl0bGU9JHsgdmFyVGl0bGV9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MjFweCkge1xuXHRcdFx0XHRcdFx0LmhpZGVPbkRlc2t0b3Age1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcblx0XHRcdFx0XHRcdC5oaWRlT25Nb2JpbGUge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW1nIHNyYz17dmFyU3JjfVxuXHRcdFx0XHQgICAgIGlkPXt2YXJJZH1cblx0XHRcdFx0ICAgICB3aWR0aD17dmFyV2lkdGh9XG5cdFx0XHRcdCAgICAgaGVpZ2h0PXt2YXJIZWlnaHR9XG5cdFx0XHRcdCAgICAgYWx0PXt2YXJBbHR9XG5cdFx0XHRcdCAgICAgdGl0bGU9e3ZhclRpdGxlfVxuXHRcdFx0XHQgICAgIGNsYXNzTmFtZT17dmFyQ2xhc3N9PlxuXHRcdFx0XHQ8L2ltZz5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC4keyB2YXJDbGFzc317XG5cdFx0XHRcdFx0XHRzcmM6JHsgdmFyU3JjfVxuXHRcdFx0XHRcdFx0d2lkdGg6JHsgdmFyV2lkdGh9XG5cdFx0XHRcdFx0XHRoZWlnaHQ9JHsgdmFySGVpZ2h0fVxuXHRcdFx0XHRcdFx0YWx0PSR7IHZhckFsdH1cblx0XHRcdFx0XHRcdHRpdGxlPSR7IHZhclRpdGxlfVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTIxcHgpIHtcblx0XHRcdFx0XHRcdC5oaWRlT25EZXNrdG9wIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG5cdFx0XHRcdFx0XHQuaGlkZU9uTW9iaWxlIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1nXG4iXX0= */\n/*@ sourceURL=/home/vinicius/Documents/Projetos/site_do_valente/components/atoms/atImg/index.js */")));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Img);

/***/ }),

/***/ "./components/organisms/Eu/header04.js":
/*!*********************************************!*\
  !*** ./components/organisms/Eu/header04.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/atImg/index.js */ "./components/atoms/atImg/index.js");

// header do Documentoscopia  - Projeto Piloto

 //console.log('Instanciando /componentes/organisms/documentoscopia/header04.js');

var header04 = function header04(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-812511045"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-812511045" + " " + "cabecalho"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-812511045" + " " + "logooi"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/documentoscopia/Controle-logo.svg",
    width: "40px",
    height: "43px",
    alt: "Logo Oi",
    title: "Logo Oi",
    modo: props.modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "812511045"
  }, ".cabecalho.jsx-812511045{padding-top:10px;margin:0;padding:0;width:96%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.logooi.jsx-812511045{-webkit-transition:all 0.8s;transition:all 0.8s;margin:0;padding:0;width:50%;height:50px;-webkit-animation:abreJanela-jsx-812511045 1s ease 0s 1 normal none running;animation:abreJanela-jsx-812511045 1s ease 0s 1 normal none running;}@-webkit-keyframes abreJanela-jsx-812511045{0%{padding-left:50px;opacity:0;}100%{padding-left:0px;opacity:1;}}@keyframes abreJanela-jsx-812511045{0%{padding-left:50px;opacity:0;}100%{padding-left:0px;opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpbmljaXVzL0RvY3VtZW50cy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9vcmdhbmlzbXMvRXUvaGVhZGVyMDQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNnQixBQUcwQixBQVFHLEFBU0EsQUFJRCxpQkFwQlYsQUFxQkcsQ0FKQSxRQWhCRixDQXFCVixDQUpBLFFBaEJVLFVBQ0csRUFLSixTQUNDLFVBQ0QsVUFDRyxZQUMwQywrQkFSdkMseURBQ2pCLHdEQVFBIiwiZmlsZSI6Ii9ob21lL3ZpbmljaXVzL0RvY3VtZW50cy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9vcmdhbmlzbXMvRXUvaGVhZGVyMDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gaGVhZGVyIGRvIERvY3VtZW50b3Njb3BpYSAgLSBQcm9qZXRvIFBpbG90b1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWcgZnJvbSAnLi4vLi4vYXRvbXMvYXRJbWcvaW5kZXguanMnO1xuXG4vL2NvbnNvbGUubG9nKCdJbnN0YW5jaWFuZG8gL2NvbXBvbmVudGVzL29yZ2FuaXNtcy9kb2N1bWVudG9zY29waWEvaGVhZGVyMDQuanMnKTtcblxuY29uc3QgaGVhZGVyMDQgPSBwcm9wcyA9PiAoXG4gIDxoZWFkZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYWJlY2FsaG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb29pXCI+XG4gICAgICAgIDxJbWdcbiAgICAgICAgICBzcmM9XCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9kb2N1bWVudG9zY29waWEvQ29udHJvbGUtbG9nby5zdmdcIlxuICAgICAgICAgIHdpZHRoPVwiNDBweFwiXG4gICAgICAgICAgaGVpZ2h0PVwiNDNweFwiXG4gICAgICAgICAgYWx0PVwiTG9nbyBPaVwiXG4gICAgICAgICAgdGl0bGU9XCJMb2dvIE9pXCJcbiAgICAgICAgICBtb2RvPXtwcm9wcy5tb2RvfT5cbiAgICAgICAgPC9JbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImFqdWRhXCI+XG4gICAgICAgIDxhIGhyZWY9XCIvZG9jdW1lbnRvc2NvcGlhL2FqdWRhZG9jdW1lbnRvc1wiPlxuICAgICAgICAgIDxJbWcgc3JjPVwiLi4vc3RhdGljL2Fzc2V0c3Y1L2ltZy9kb2N1bWVudG9zY29waWEvYnRuLUFqdWRhLnBuZ1wiXG4gICAgICAgICAgICB3aWR0aD0nMjBweCdcbiAgICAgICAgICAgIGhlaWdodD0nMjBweCdcbiAgICAgICAgICAgIGFsdD0nQWp1ZGEnXG4gICAgICAgICAgICB0aXRsZT0nQWp1ZGEnXG4gICAgICAgICAgICBtb2RvPXtwcm9wcy5tb2RvfT5cbiAgICAgICAgICA8L0ltZz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jYWJlY2FsaG97XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cbiAgICAgIC5sb2dvb2l7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjhzO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOjUwJTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBhbmltYXRpb246IGFicmVKYW5lbGEgMXMgZWFzZSAwcyAxIG5vcm1hbCBub25lIHJ1bm5pbmc7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIGFicmVKYW5lbGF7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyMDRcblxuXG4vKlxuLy8gaGVhZGVyIGRvIERvY3VtZW50b3Njb3BpYSAtIFByb2pldG8gUGlsb3RvXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltZyBmcm9tICcuLi8uLi9hdG9tcy9JbWFnZW0uanMnO1xudmFyIHZhcm1vZG8gPSAnaHRtbCc7XG5jbGFzcyBoZWFkZXIwNCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnUm9kYW5kbyAvdmlld3Mvb3JnYW5pc21zL2hlYWRlcjA0LmpzeCcpO1xuICAgIHJldHVybiAoXG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhYmVjYWxob1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb29pXCI+XG4gICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzdjUvaW1nL2RvY3VtZW50b3Njb3BpYS9sb2dvLWxhcmFuamEuanBnXCJcbiAgICAgICAgICAgICB3aWR0aD17JzMycHgnfVxuICAgICAgICAgICAgIGhlaWdodD17JzM1cHgnfVxuICAgICAgICAgICAgIGFsdD17J0xvZ28gT2knfVxuICAgICAgICAgICAgIHRpdGxlPXsnRG9jdW1lbnRvc2NvcGlhJ31cbiAgICAgICAgICAgICBtb2RvPXt2YXJtb2RvfT5cbiAgICAgICAgICAgIDwvSW1nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWp1ZGFcIj5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8SW1nIHNyYz1cIi4uL2Fzc2V0c3Y1L2ltZy9kb2N1bWVudG9zY29waWEvYnRuLUFqdWRhLnBuZ1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9eycyMHB4J31cbiAgICAgICAgICAgICAgICBoZWlnaHQ9eycyMHB4J31cbiAgICAgICAgICAgICAgICBhbHQ9eydBanVkYSd9XG4gICAgICAgICAgICAgICAgdGl0bGU9eydBanVkYSd9XG4gICAgICAgICAgICAgICAgbW9kbz17dmFybW9kb30+XG4gICAgICAgICAgICAgIDwvSW1nPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gaGVhZGVyMDQ7XG4qLyJdfQ== */\n/*@ sourceURL=/home/vinicius/Documents/Projetos/site_do_valente/components/organisms/Eu/header04.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (header04);
/*
// header do Documentoscopia - Projeto Piloto
import React, { Component } from 'react';
import Img from '../../atoms/Imagem.js';
var varmodo = 'html';
class header04 extends React.Component {
  render() {
    console.log('Rodando /views/organisms/header04.jsx');
    return (
      <header>
        <div className="cabecalho">
          <div className="logooi">
            <Img
             src="../assetsv5/img/documentoscopia/logo-laranja.jpg"
             width={'32px'}
             height={'35px'}
             alt={'Logo Oi'}
             title={'Documentoscopia'}
             modo={varmodo}>
            </Img>
          </div>
          <div className="ajuda">
            <a>
              <Img src="../assetsv5/img/documentoscopia/btn-Ajuda.png"
                width={'20px'}
                height={'20px'}
                alt={'Ajuda'}
                title={'Ajuda'}
                modo={varmodo}>
              </Img>
            </a>
          </div>
        </div>
      </header>
    );
  }
}
module.exports = header04;
*/

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
false,

/***/ "./node_modules/next-server/head.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Fvinicius%2FDocuments%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js!./":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Fvinicius%2FDocuments%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var page = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_organisms_Eu_header04__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/organisms/Eu/header04 */ "./components/organisms/Eu/header04.js");
/* harmony import */ var _components_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/atoms/atImg/index.js */ "./components/atoms/atImg/index.js");
/* harmony import */ var _components_atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/atoms/atDiv/index.js */ "./components/atoms/atDiv/index.js");







var Error = function Error(props) {
  console.log("\x1B[31m\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
  console.log("\x1B[31m\u2551      _error 404                        \u2551");
  console.log("\x1B[31m\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\x1B[0m");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3598388578"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-3598388578"
  }, "P\xE1gina n\xE3o encontrada"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3598388578"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "Pagina n\xE3o encontrada.",
    className: "jsx-3598388578"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "robots",
    content: "noindex",
    className: "jsx-3598388578"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: "/",
    className: "jsx-3598388578"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_organisms_Eu_header04__WEBPACK_IMPORTED_MODULE_3__["default"], {
    modo: "html"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    display: "horizontal"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3598388578" + " " + "coluna404"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3598388578" + " " + 'title'
  }, "Ih, essa p\xE1gina n\xE3o foi encontrada"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3598388578"
  }, "Talvez o endere\xE7o digitado esteja incorreto ou voc\xEA tenha clicado em uma p\xE1gina que n\xE3o existe."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3598388578"
  }, "Voc\xEA pode ver as op\xE7\xF5es do menu acima ou continuar a navega\xE7\xE3o pela p\xE1gina inicial."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3598388578"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3598388578"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: "/static/assetsv5/img/hero-large-404.png",
    width: "323px",
    height: "436px",
    alt: "Componente Img exemplo next",
    title: "Componente Img exemplo next",
    class: "ClassImgNext",
    modo: "html"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3598388578"
  }, ".title.jsx-3598388578{margin:0;padding-top:80px;line-height:1.15;font-size:48px;}.coluna404.jsx-3598388578{width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpbmljaXVzL0RvY3VtZW50cy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvcGFnZXMvX2Vycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDZ0IsQUFHa0IsQUFNQyxTQUxPLENBTW5CLGdCQUxtQixpQkFDRixlQUNqQiIsImZpbGUiOiIvaG9tZS92aW5pY2l1cy9Eb2N1bWVudHMvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL3BhZ2VzL19lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyMDQgZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvRXUvaGVhZGVyMDQnXG5pbXBvcnQgSW1nIGZyb20gJy4uL2NvbXBvbmVudHMvYXRvbXMvYXRJbWcvaW5kZXguanMnXG5pbXBvcnQgRGl2IGZyb20gJy4uL2NvbXBvbmVudHMvYXRvbXMvYXREaXYvaW5kZXguanMnXG5cbmNvbnN0IEVycm9yID0gZnVuY3Rpb24ocHJvcHMpe1xuY29uc29sZS5sb2coJ1xcdTAwMWJbMzFt4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG5jb25zb2xlLmxvZygnXFx1MDAxYlszMW3ilZEgICAgICBfZXJyb3IgNDA0ICAgICAgICAgICAgICAgICAgICAgICAg4pWRJyk7XG5jb25zb2xlLmxvZygnXFx1MDAxYlszMW3ilZrilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZ1cXHUwMDFiWzBtJyk7XG5yZXR1cm4oXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qw6FnaW5hIG7Do28gZW5jb250cmFkYTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlBhZ2luYSBuw6NvIGVuY29udHJhZGEuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cIi9cIi8+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkZXIwNCBtb2RvPVwiaHRtbFwiPjwvSGVhZGVyMDQ+XG4gICAgPERpdiBkaXNwbGF5PVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVuYTQwNFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlJz5JaCwgZXNzYSBww6FnaW5hIG7Do28gZm9pIGVuY29udHJhZGE8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGFsdmV6IG8gZW5kZXJlw6dvIGRpZ2l0YWRvIGVzdGVqYSBpbmNvcnJldG8gb3Ugdm9jw6ogdGVuaGFcbiAgICAgICAgICAgIGNsaWNhZG8gZW0gdW1hIHDDoWdpbmEgcXVlIG7Do28gZXhpc3RlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFZvY8OqIHBvZGUgdmVyIGFzIG9ww6fDtWVzIGRvIG1lbnUgYWNpbWEgb3UgY29udGludWFyXG4gICAgICAgICAgICBhIG5hdmVnYcOnw6NvIHBlbGEgcMOhZ2luYSBpbmljaWFsLlxuICAgICAgICAgIDwvcD48YnIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbWcgXG4gICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2hlcm8tbGFyZ2UtNDA0LnBuZ1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzIzcHhcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0MzZweFwiXG4gICAgICAgICAgICAgIGFsdD1cIkNvbXBvbmVudGUgSW1nIGV4ZW1wbG8gbmV4dFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ29tcG9uZW50ZSBJbWcgZXhlbXBsbyBuZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJDbGFzc0ltZ05leHRcIlxuICAgICAgICAgICAgICBtb2RvPVwiaHRtbFwiPlxuICAgICAgICAgICAgPC9JbWc+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvRGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICB9XG4gICAgICAuY29sdW5hNDA0e1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pfVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvclxuXG5cbi8qXG5jbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZXMsIGVyciB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiBudWxsXG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8aDE+UGFnaW5hIG7Do28gZW5jb250cmFkYTwvaDE+XG4gICAgICA8cD5cbiAgICAgICAge3RoaXMucHJvcHMuc3RhdHVzQ29kZVxuICAgICAgICAgID8gYEFuIGVycm9yICR7dGhpcy5wcm9wcy5zdGF0dXNDb2RlfSBvY2N1cnJlZCBvbiBzZXJ2ZXJgXG4gICAgICAgICAgOiAnQW4gZXJyb3Igb2NjdXJyZWQgb24gY2xpZW50J31cbiAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuKi9cblxuXG4iXX0= */\n/*@ sourceURL=/home/vinicius/Documents/Projetos/site_do_valente/pages/_error.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Error);
/*
class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <div>
      <h1>Pagina não encontrada</h1>
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      </div>
    )
  }
}
*/

/***/ }),

/***/ 1:
/*!******************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fhome%2Fvinicius%2FDocuments%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fhome%2Fvinicius%2FDocuments%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Fvinicius%2FDocuments%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.151c74754e93cd0b2f3b.hot-update.js.map