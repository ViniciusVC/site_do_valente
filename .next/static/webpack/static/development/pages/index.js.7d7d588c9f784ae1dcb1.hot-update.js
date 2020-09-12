webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/moleculas/mofooterSideDoValente/index.js":
/*!*************************************************************!*\
  !*** ./components/moleculas/mofooterSideDoValente/index.js ***!
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




 //import MenuMobile01 from '../moMenuMobile01/index.js'
//import * as Util from '../../../controller/util.js';
//console.log('moHeaderSideDoValente ');

var moHeaderSideDoValente = function moHeaderSideDoValente(props) {
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
    className: "jsx-1325186422" + " " + "logo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: StringModo + "/?regiao=" + regiao,
    className: "jsx-1325186422"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/logo_vvc.png",
    width: "100px",
    height: "100px",
    alt: "Logo Site Valente",
    title: "Logo Site Valente",
    class: "LogoSiteValente",
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1325186422"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    modo: modo,
    regiao: regiao
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1325186422"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "horizontal"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1325186422"
  }, "Visite outros canais :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1325186422"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://web.facebook.com/designervvc",
    className: "jsx-1325186422"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/facebook.jpg",
    width: "24px",
    height: "24px",
    alt: "facebook",
    title: "Facebook Designer VVC",
    class: "LogoFacebook",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1325186422"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://sites.google.com/view/vvc-estudio/",
    className: "jsx-1325186422"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/sitesgoogle.jpg",
    width: "24px",
    height: "24px",
    alt: "sites google",
    title: "Site Google VVC estudio",
    class: "LogoSitesgoogle",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1325186422"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.youtube.com/user/vvcestudio",
    className: "jsx-1325186422"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/youtube.jpg",
    width: "24px",
    height: "24px",
    alt: "Youtube",
    title: "Youtube VVC Estudio",
    class: "LogoYoutube",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1325186422"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://br.pinterest.com/viniciusvalente/modelagem-3d-do-valente/",
    className: "jsx-1325186422"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/pinterest.jpg",
    width: "24px",
    height: "24px",
    alt: "Pinterest",
    title: "Pinterest Modelagem 3d",
    class: "LogoPinterest",
    modo: modo
  })))), "\xA9 2020 VVC Studio. Todos os direitos reservados."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1325186422"
  }, ".logo.jsx-1325186422{margin:0px;padding-top:10px;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:slideinSombra-jsx-1325186422;animation-name:slideinSombra-jsx-1325186422;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vZm9vdGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRGtCLEFBR21CLFdBQ08saUJBRUssb0RBQ08sZ0dBQy9CIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vZm9vdGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWcgZnJvbSAnLi4vLi4vYXRvbXMvYXRJbWcvaW5kZXguanMnO1xuaW1wb3J0IERpdiBmcm9tICcuLi8uLi9hdG9tcy9hdERpdidcbmltcG9ydCBNb1JlZ2lhbyBmcm9tICcuLi9tb1JlZ2lhby9pbmRleC5qcydcbi8vaW1wb3J0IE1lbnVNb2JpbGUwMSBmcm9tICcuLi9tb01lbnVNb2JpbGUwMS9pbmRleC5qcydcblxuLy9pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG4vL2NvbnNvbGUubG9nKCdtb0hlYWRlclNpZGVEb1ZhbGVudGUgJyk7XG5cbmNvbnN0IG1vSGVhZGVyU2lkZURvVmFsZW50ZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCByZWdpYW8gPSBwcm9wcy5yZWdpYW87XG4gIGNvbnN0IG1vZG8gPSBwcm9wcy5tb2RvO1xuICAvL2NvbnN0IEpzb25SZWdpYW8gPSBVdGlsLnJlZ2lhbyhyZWdpYW8pO1xuICB2YXIgU3RyaW5nTW9kbyA9IFwiXCI7XG4gIGlmKG1vZG89PVwiQU1QXCIgfHwgbW9kbz09XCJhbXBcIil7XG4gICAgU3RyaW5nTW9kbyA9IFwiL2FtcFwiO1xuICB9XG4gIGNvbnNvbGUubG9nKCcqIEhlYWRlciBkbyBWYWxlbnRlIHwgbW9kbz0nK21vZG8rICcgfCByZWdpYW89JytyZWdpYW8pO1xuXG4gIHJldHVybiAoXG4gICAgPERpdiBkaXNwbGF5PVwicmVzcG9uc2l2b1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIDxhIGhyZWY9e1N0cmluZ01vZG8rXCIvP3JlZ2lhbz1cIityZWdpYW99ID5cbiAgICAgICAgICAgIDxJbWcgc3JjPVwiL3N0YXRpYy9hc3NldHN2NS9pbWcvbG9nb192dmMucG5nXCIgd2lkdGg9XCIxMDBweFwiIGhlaWdodD1cIjEwMHB4XCIgYWx0PVwiTG9nbyBTaXRlIFZhbGVudGVcIiB0aXRsZT1cIkxvZ28gU2l0ZSBWYWxlbnRlXCIgY2xhc3M9XCJMb2dvU2l0ZVZhbGVudGVcIiBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgPE1vUmVnaWFvIG1vZG89e21vZG99IHJlZ2lhbz17cmVnaWFvfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxEaXYgZGlzcGxheT1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIFZpc2l0ZSBvdXRyb3MgY2FuYWlzIDpcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd2ViLmZhY2Vib29rLmNvbS9kZXNpZ25lcnZ2Y1wiID5cbiAgICAgICAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2ZhY2Vib29rLmpwZ1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiBhbHQ9XCJmYWNlYm9va1wiIHRpdGxlPVwiRmFjZWJvb2sgRGVzaWduZXIgVlZDXCIgY2xhc3M9XCJMb2dvRmFjZWJvb2tcIiBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy92dmMtZXN0dWRpby9cIiA+XG4gICAgICAgICAgICAgICAgPEltZyBzcmM9XCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9zaXRlc2dvb2dsZS5qcGdcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgYWx0PVwic2l0ZXMgZ29vZ2xlXCIgdGl0bGU9XCJTaXRlIEdvb2dsZSBWVkMgZXN0dWRpb1wiIGNsYXNzPVwiTG9nb1NpdGVzZ29vZ2xlXCIgbW9kbz17bW9kb30gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vdXNlci92dmNlc3R1ZGlvXCIgPlxuICAgICAgICAgICAgICAgIDxJbWcgc3JjPVwiL3N0YXRpYy9hc3NldHN2NS9pbWcveW91dHViZS5qcGdcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgYWx0PVwiWW91dHViZVwiIHRpdGxlPVwiWW91dHViZSBWVkMgRXN0dWRpb1wiIGNsYXNzPVwiTG9nb1lvdXR1YmVcIiBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2JyLnBpbnRlcmVzdC5jb20vdmluaWNpdXN2YWxlbnRlL21vZGVsYWdlbS0zZC1kby12YWxlbnRlL1wiID5cbiAgICAgICAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL3BpbnRlcmVzdC5qcGdcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgYWx0PVwiUGludGVyZXN0XCIgdGl0bGU9XCJQaW50ZXJlc3QgTW9kZWxhZ2VtIDNkXCIgY2xhc3M9XCJMb2dvUGludGVyZXN0XCIgbW9kbz17bW9kb30gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgwqkgMjAyMCBWVkMgU3R1ZGlvLiBUb2RvcyBvcyBkaXJlaXRvcyByZXNlcnZhZG9zLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5sb2dve1xuICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgLyphbmltYXRpb24tZGVsYXk6IDJzOyovXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluU29tYnJhO1xuICAgICAgfVxuXG4gICAgICAvKi5UaXR1bG9kb1NpdGV7XG4gICAgICAgIGNvbG9yOiAjMTBlY2Y1O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICB9Ki9cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9EaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9IZWFkZXJTaWRlRG9WYWxlbnRlXG5cblxuLy/CqSAyMDIwIFZWQyBFc3R1ZGlvLiBBbGwgUmlnaHRzIFJlc2VydmVkLiBcbi8vwqkgMjAyMCBWVkMgU3R1ZGlvLiBUb2RvcyBvcyBkaXJlaXRvcyByZXNlcnZhZG9zLlxuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/mofooterSideDoValente/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (moHeaderSideDoValente); //© 2020 VVC Estudio. All Rights Reserved. 
//© 2020 VVC Studio. Todos os direitos reservados.

/***/ })

})
//# sourceMappingURL=index.js.7d7d588c9f784ae1dcb1.hot-update.js.map