webpackHotUpdate("static/development/pages/routes/utilitarios.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/atImg/index.js */ "./components/atoms/atImg/index.js");
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/atDiv */ "./components/atoms/atDiv/index.js");
/* harmony import */ var _moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../moRegiao/index.js */ "./components/moleculas/moRegiao/index.js");
/* harmony import */ var _moMenuMobile01_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../moMenuMobile01/index.js */ "./components/moleculas/moMenuMobile01/index.js");





 //import * as Util from '../../../controller/util.js';
//console.log('moHeaderSideDoValente ');

var moHeaderSideDoValente = function moHeaderSideDoValente(props) {
  var titulo = props.titulo;
  var regiao = props.regiao;
  var modo = props.modo; //const JsonRegiao = Util.regiao(regiao);

  var StringModo = "";

  if (modo == "AMP" || modo == "amp") {
    StringModo = "/amp";
  }

  console.log('* Header do Valente | modo=' + modo + ' | regiao=' + regiao);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "responsivo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3487925225" + " " + "logo headerpc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: StringModo + "/?regiao=" + regiao,
    className: "jsx-3487925225"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/logo_vvc.png",
    width: "100px",
    height: "100px",
    alt: "Logo Site Valente",
    title: "Logo Site Valente",
    class: "LogoSiteValente",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3487925225" + " " + "TitulodoSite headerpc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3487925225"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3487925225"
  }, titulo))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3487925225" + " " + "heaermob"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moMenuMobile01_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3487925225"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3487925225"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    modo: modo,
    regiao: regiao
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3487925225"
  }, ".logo.jsx-3487925225{margin:0px;padding-top:10px;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:slideinSombra-jsx-3487925225;animation-name:slideinSombra-jsx-3487925225;}@-webkit-keyframes slideinSombra-jsx-3487925225{0%{opacity:0.0;}50%{opacity:0.5;}100%{opacity:1.0;}}@keyframes slideinSombra-jsx-3487925225{0%{opacity:0.0;}50%{opacity:0.5;}100%{opacity:1.0;}}.TitulodoSite.jsx-3487925225{color:#10ecf5;padding-top:15px;font-size:20px;font-family:sans-serif;text-align:center;font-size:60px;}@media(min-width:1169px){.heaermob.jsx-3487925225{display :None;}}@media(max-width:1169px){.headerpc.jsx-3487925225{display :None;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tCLEFBR21CLEFBUU0sQUFHQSxBQUdBLEFBSUYsQUFVRSxBQU1BLFdBakNDLENBUWpCLEFBR0EsQUFHQSxFQUlpQixBQVVqQixBQU1BLGNBaENzQixHQWlCUCxlQUNRLHVCQUNMLFdBbEJXLE9BbUJkLGVBQ2pCLDBFQW5CQSIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL21vbGVjdWxhcy9tb0hlYWRlclNpZGVEb1ZhbGVudGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1nIGZyb20gJy4uLy4uL2F0b21zL2F0SW1nL2luZGV4LmpzJztcbmltcG9ydCBEaXYgZnJvbSAnLi4vLi4vYXRvbXMvYXREaXYnXG5pbXBvcnQgTW9SZWdpYW8gZnJvbSAnLi4vbW9SZWdpYW8vaW5kZXguanMnXG5pbXBvcnQgTWVudU1vYmlsZTAxIGZyb20gJy4uL21vTWVudU1vYmlsZTAxL2luZGV4LmpzJ1xuXG4vL2ltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi4vLi4vLi4vY29udHJvbGxlci91dGlsLmpzJztcbi8vY29uc29sZS5sb2coJ21vSGVhZGVyU2lkZURvVmFsZW50ZSAnKTtcblxuY29uc3QgbW9IZWFkZXJTaWRlRG9WYWxlbnRlID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIGNvbnN0IHRpdHVsbyA9IHByb3BzLnRpdHVsbztcbiAgY29uc3QgcmVnaWFvID0gcHJvcHMucmVnaWFvO1xuICBjb25zdCBtb2RvID0gcHJvcHMubW9kbztcbiAgLy9jb25zdCBKc29uUmVnaWFvID0gVXRpbC5yZWdpYW8ocmVnaWFvKTtcbiAgdmFyIFN0cmluZ01vZG8gPSBcIlwiO1xuICBpZihtb2RvPT1cIkFNUFwiIHx8IG1vZG89PVwiYW1wXCIpe1xuICAgIFN0cmluZ01vZG8gPSBcIi9hbXBcIjtcbiAgfVxuICBjb25zb2xlLmxvZygnKiBIZWFkZXIgZG8gVmFsZW50ZSB8IG1vZG89Jyttb2RvKyAnIHwgcmVnaWFvPScrcmVnaWFvKTtcblxuICByZXR1cm4gKFxuICAgIDxEaXYgZGlzcGxheT1cInJlc3BvbnNpdm9cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gaGVhZGVycGNcIj5cbiAgICAgICAgICA8YSBocmVmPXtTdHJpbmdNb2RvK1wiLz9yZWdpYW89XCIrcmVnaWFvfSA+XG4gICAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2xvZ29fdnZjLnBuZ1wiIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIGFsdD1cIkxvZ28gU2l0ZSBWYWxlbnRlXCIgdGl0bGU9XCJMb2dvIFNpdGUgVmFsZW50ZVwiIGNsYXNzPVwiTG9nb1NpdGVWYWxlbnRlXCIgbW9kbz17bW9kb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0dWxvZG9TaXRlIGhlYWRlcnBjXCI+XG4gICAgICAgICAgPHNwYW4+PGgyPnt0aXR1bG99PC9oMj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZXJtb2JcIj5cbiAgICAgICAgICAgIDxNZW51TW9iaWxlMDEgbW9kbz17bW9kb30vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICA8TW9SZWdpYW8gbW9kbz17bW9kb30gcmVnaWFvPXtyZWdpYW99IC8+XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxvZ297XG4gICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAvKmFuaW1hdGlvbi1kZWxheTogMnM7Ki9cbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW5Tb21icmE7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHNsaWRlaW5Tb21icmEge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjA7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLlRpdHVsb2RvU2l0ZXtcbiAgICAgICAgY29sb3I6ICMxMGVjZjU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogMTE2OXB4KSB7XG4gICAgICAgIC5oZWFlcm1vYntcbiAgICAgICAgICBkaXNwbGF5IDogTm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMTY5cHgpIHtcbiAgICAgICAgLmhlYWRlcnBje1xuICAgICAgICAgIGRpc3BsYXkgOiBOb25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvRGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vSGVhZGVyU2lkZURvVmFsZW50ZVxuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moHeaderSideDoValente/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (moHeaderSideDoValente);

/***/ })

})
//# sourceMappingURL=utilitarios.js.1d5b7d77360b420d1eab.hot-update.js.map