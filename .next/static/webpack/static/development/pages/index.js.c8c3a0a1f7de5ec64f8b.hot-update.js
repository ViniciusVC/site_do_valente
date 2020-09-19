webpackHotUpdate("static/development/pages/index.js",{

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
    className: "jsx-3813789053" + " " + "logo headerpc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: StringModo + "/?regiao=" + regiao,
    className: "jsx-3813789053"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/logo_vvc.png",
    width: "100px",
    height: "100px",
    alt: "Logo Site Valente",
    title: "Logo Site Valente",
    class: "LogoSiteValente",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3813789053" + " " + "TitulodoSite headerpc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3813789053"
  }, titulo)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3813789053" + " " + "heaermob"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moMenuMobile01_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3813789053"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3813789053"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    modo: modo,
    regiao: regiao
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3813789053"
  }, ".logo.jsx-3813789053{margin:0px;padding-top:10px;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:slideinSombra-jsx-3813789053;animation-name:slideinSombra-jsx-3813789053;}@-webkit-keyframes slideinSombra-jsx-3813789053{0%{opacity:0.0;}50%{opacity:0.5;}100%{opacity:1.0;}}@keyframes slideinSombra-jsx-3813789053{0%{opacity:0.0;}50%{opacity:0.5;}100%{opacity:1.0;}}@media(min-width:1169px){.heaermob.jsx-3813789053{display :None;}}@media(max-width:1169px){.headerpc.jsx-3813789053{display :None;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tCLEFBR21CLEFBUU0sQUFHQSxBQUdBLEFBT0EsQUFNQSxXQTFCQyxDQVFqQixBQUdBLEFBR0UsRUFPRixBQU1BLGNBekJzQixvREFDTyxnR0FDL0IiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9tb2xlY3VsYXMvbW9IZWFkZXJTaWRlRG9WYWxlbnRlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltZyBmcm9tICcuLi8uLi9hdG9tcy9hdEltZy9pbmRleC5qcyc7XG5pbXBvcnQgRGl2IGZyb20gJy4uLy4uL2F0b21zL2F0RGl2J1xuaW1wb3J0IE1vUmVnaWFvIGZyb20gJy4uL21vUmVnaWFvL2luZGV4LmpzJ1xuaW1wb3J0IE1lbnVNb2JpbGUwMSBmcm9tICcuLi9tb01lbnVNb2JpbGUwMS9pbmRleC5qcydcblxuLy9pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG4vL2NvbnNvbGUubG9nKCdtb0hlYWRlclNpZGVEb1ZhbGVudGUgJyk7XG5cbmNvbnN0IG1vSGVhZGVyU2lkZURvVmFsZW50ZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCB0aXR1bG8gPSBwcm9wcy50aXR1bG87XG4gIGNvbnN0IHJlZ2lhbyA9IHByb3BzLnJlZ2lhbztcbiAgY29uc3QgbW9kbyA9IHByb3BzLm1vZG87XG4gIC8vY29uc3QgSnNvblJlZ2lhbyA9IFV0aWwucmVnaWFvKHJlZ2lhbyk7XG4gIHZhciBTdHJpbmdNb2RvID0gXCJcIjtcbiAgaWYobW9kbz09XCJBTVBcIiB8fCBtb2RvPT1cImFtcFwiKXtcbiAgICBTdHJpbmdNb2RvID0gXCIvYW1wXCI7XG4gIH1cbiAgY29uc29sZS5sb2coJyogSGVhZGVyIGRvIFZhbGVudGUgfCBtb2RvPScrbW9kbysgJyB8IHJlZ2lhbz0nK3JlZ2lhbyk7XG5cbiAgcmV0dXJuIChcbiAgICA8RGl2IGRpc3BsYXk9XCJyZXNwb25zaXZvXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvIGhlYWRlcnBjXCI+XG4gICAgICAgICAgPGEgaHJlZj17U3RyaW5nTW9kbytcIi8/cmVnaWFvPVwiK3JlZ2lhb30gPlxuICAgICAgICAgICAgPEltZyBzcmM9XCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9sb2dvX3Z2Yy5wbmdcIiB3aWR0aD1cIjEwMHB4XCIgaGVpZ2h0PVwiMTAwcHhcIiBhbHQ9XCJMb2dvIFNpdGUgVmFsZW50ZVwiIHRpdGxlPVwiTG9nbyBTaXRlIFZhbGVudGVcIiBjbGFzcz1cIkxvZ29TaXRlVmFsZW50ZVwiIG1vZG89e21vZG99IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpdHVsb2RvU2l0ZSBoZWFkZXJwY1wiPlxuICAgICAgICAgIDxoMj57dGl0dWxvfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZXJtb2JcIj5cbiAgICAgICAgICAgIDxNZW51TW9iaWxlMDEgbW9kbz17bW9kb30vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICA8TW9SZWdpYW8gbW9kbz17bW9kb30gcmVnaWFvPXtyZWdpYW99IC8+XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxvZ297XG4gICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAvKmFuaW1hdGlvbi1kZWxheTogMnM7Ki9cbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW5Tb21icmE7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHNsaWRlaW5Tb21icmEge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjA7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICBAbWVkaWEobWluLXdpZHRoOiAxMTY5cHgpIHtcbiAgICAgICAgLmhlYWVybW9ie1xuICAgICAgICAgIGRpc3BsYXkgOiBOb25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDExNjlweCkge1xuICAgICAgICAuaGVhZGVycGN7XG4gICAgICAgICAgZGlzcGxheSA6IE5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9EaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9IZWFkZXJTaWRlRG9WYWxlbnRlXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moHeaderSideDoValente/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (moHeaderSideDoValente);

/***/ })

})
//# sourceMappingURL=index.js.c8c3a0a1f7de5ec64f8b.hot-update.js.map