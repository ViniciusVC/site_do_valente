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
    className: "jsx-986963589" + " " + "logo headerpc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: StringModo + "/?regiao=" + regiao,
    className: "jsx-986963589"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/logo_vvc.png",
    width: "100px",
    height: "100px",
    alt: "Logo Site Valente",
    title: "Logo Site Valente",
    class: "LogoSiteValente",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-986963589" + " " + "TitulodoSite headerpc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-986963589"
  }, titulo)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-986963589" + " " + "heaermob"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moMenuMobile01_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-986963589"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-986963589"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    modo: modo,
    regiao: regiao
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "986963589"
  }, ".logo.jsx-986963589{margin:0px;padding-top:10px;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:slideinSombra-jsx-986963589;animation-name:slideinSombra-jsx-986963589;}@-webkit-keyframes slideinSombra-jsx-986963589{0%{opacity:0.0;}50%{opacity:0.5;}100%{opacity:1.0;}}@keyframes slideinSombra-jsx-986963589{0%{opacity:0.0;}50%{opacity:0.5;}100%{opacity:1.0;}}h2.jsx-986963589{color:#10ecf5;padding-top:15px;font-size:20px;font-family:sans-serif;text-align:center;font-size:60px;}@media(min-width:1169px){.heaermob.jsx-986963589{display :None;}}@media(max-width:1169px){.headerpc.jsx-986963589{display :None;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tCLEFBR21CLEFBUU0sQUFHQSxBQUdBLEFBSUYsQUFVRSxBQU1BLFdBakNDLENBUWpCLEFBR0EsQUFHRSxFQUllLEFBVWpCLEFBTUEsY0FoQ3NCLEdBaUJQLGVBQ1EsdUJBQ0wsV0FsQlcsT0FtQmQsZUFDakIsd0VBbkJBIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWcgZnJvbSAnLi4vLi4vYXRvbXMvYXRJbWcvaW5kZXguanMnO1xuaW1wb3J0IERpdiBmcm9tICcuLi8uLi9hdG9tcy9hdERpdidcbmltcG9ydCBNb1JlZ2lhbyBmcm9tICcuLi9tb1JlZ2lhby9pbmRleC5qcydcbmltcG9ydCBNZW51TW9iaWxlMDEgZnJvbSAnLi4vbW9NZW51TW9iaWxlMDEvaW5kZXguanMnXG5cbi8vaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuLy9jb25zb2xlLmxvZygnbW9IZWFkZXJTaWRlRG9WYWxlbnRlICcpO1xuXG5jb25zdCBtb0hlYWRlclNpZGVEb1ZhbGVudGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgY29uc3QgdGl0dWxvID0gcHJvcHMudGl0dWxvO1xuICBjb25zdCByZWdpYW8gPSBwcm9wcy5yZWdpYW87XG4gIGNvbnN0IG1vZG8gPSBwcm9wcy5tb2RvO1xuICAvL2NvbnN0IEpzb25SZWdpYW8gPSBVdGlsLnJlZ2lhbyhyZWdpYW8pO1xuICB2YXIgU3RyaW5nTW9kbyA9IFwiXCI7XG4gIGlmKG1vZG89PVwiQU1QXCIgfHwgbW9kbz09XCJhbXBcIil7XG4gICAgU3RyaW5nTW9kbyA9IFwiL2FtcFwiO1xuICB9XG4gIGNvbnNvbGUubG9nKCcqIEhlYWRlciBkbyBWYWxlbnRlIHwgbW9kbz0nK21vZG8rICcgfCByZWdpYW89JytyZWdpYW8pO1xuXG4gIHJldHVybiAoXG4gICAgPERpdiBkaXNwbGF5PVwicmVzcG9uc2l2b1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nbyBoZWFkZXJwY1wiPlxuICAgICAgICAgIDxhIGhyZWY9e1N0cmluZ01vZG8rXCIvP3JlZ2lhbz1cIityZWdpYW99ID5cbiAgICAgICAgICAgIDxJbWcgc3JjPVwiL3N0YXRpYy9hc3NldHN2NS9pbWcvbG9nb192dmMucG5nXCIgd2lkdGg9XCIxMDBweFwiIGhlaWdodD1cIjEwMHB4XCIgYWx0PVwiTG9nbyBTaXRlIFZhbGVudGVcIiB0aXRsZT1cIkxvZ28gU2l0ZSBWYWxlbnRlXCIgY2xhc3M9XCJMb2dvU2l0ZVZhbGVudGVcIiBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXR1bG9kb1NpdGUgaGVhZGVycGNcIj5cbiAgICAgICAgICA8aDI+e3RpdHVsb308L2gyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWVybW9iXCI+XG4gICAgICAgICAgICA8TWVudU1vYmlsZTAxIG1vZG89e21vZG99Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgPE1vUmVnaWFvIG1vZG89e21vZG99IHJlZ2lhbz17cmVnaWFvfSAvPlxuICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5sb2dve1xuICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgLyphbmltYXRpb24tZGVsYXk6IDJzOyovXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluU29tYnJhO1xuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBzbGlkZWluU29tYnJhIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMC4wO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLjA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBoMntcbiAgICAgICAgY29sb3I6ICMxMGVjZjU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogMTE2OXB4KSB7XG4gICAgICAgIC5oZWFlcm1vYntcbiAgICAgICAgICBkaXNwbGF5IDogTm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMTY5cHgpIHtcbiAgICAgICAgLmhlYWRlcnBje1xuICAgICAgICAgIGRpc3BsYXkgOiBOb25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvRGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vSGVhZGVyU2lkZURvVmFsZW50ZVxuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moHeaderSideDoValente/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (moHeaderSideDoValente);

/***/ })

})
//# sourceMappingURL=utilitarios.js.ebb2d3001933f95aac06.hot-update.js.map