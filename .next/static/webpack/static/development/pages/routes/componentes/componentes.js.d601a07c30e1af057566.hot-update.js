webpackHotUpdate("static/development/pages/routes/componentes/componentes.js",{

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
/* harmony import */ var _atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/atBtLink */ "./components/atoms/atBtLink/index.js");





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
    className: "jsx-1543707363" + " " + "logo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: StringModo + "/?regiao=" + regiao,
    className: "jsx-1543707363"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/logo_vvc.png",
    width: "100px",
    height: "100px",
    alt: "Logo Site Valente",
    title: "Logo Site Valente",
    class: "LogoSiteValente",
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1543707363"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    modo: modo,
    regiao: regiao
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1543707363"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: StringModo + "/?regiao=" + regiao,
    value: "Home",
    estilo: "luz"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: StringModo + "/codigo/?regiao=" + regiao,
    value: "Tutoriais",
    estilo: "luz"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: StringModo + "/utilitarios/?regiao=" + regiao,
    value: "Utilitarios",
    estilo: "luz"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: StringModo + "/game?regiao=" + regiao,
    value: "Jogos",
    estilo: "luz"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1543707363" + " " + "FooterdoSite"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "horizontal"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1543707363"
  }, "Visite outros canais :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1543707363"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://web.facebook.com/designervvc",
    className: "jsx-1543707363"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/facebook.jpg",
    width: "24px",
    height: "24px",
    alt: "facebook",
    title: "Facebook Designer VVC",
    class: "LogoFacebook",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1543707363"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://sites.google.com/view/vvc-estudio/",
    className: "jsx-1543707363"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/sitesgoogle.jpg",
    width: "24px",
    height: "24px",
    alt: "sites google",
    title: "Site Google VVC estudio",
    class: "LogoSitesgoogle",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1543707363"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.youtube.com/user/vvcestudio",
    className: "jsx-1543707363"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/youtube.jpg",
    width: "24px",
    height: "24px",
    alt: "Youtube",
    title: "Youtube VVC Estudio",
    class: "LogoYoutube",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1543707363"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://br.pinterest.com/viniciusvalente/modelagem-3d-do-valente/",
    className: "jsx-1543707363"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/pinterest.jpg",
    width: "24px",
    height: "24px",
    alt: "Pinterest",
    title: "Pinterest Modelagem 3d",
    class: "LogoPinterest",
    modo: modo
  })))), "\xA9 2020 VVC Studio. Todos os direitos reservados."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1543707363"
  }, ".logo.jsx-1543707363{margin:0px;padding-top:10px;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:slideinSombra-jsx-1543707363;animation-name:slideinSombra-jsx-1543707363;}.FooterdoSite.jsx-1543707363{right:0px;float:right;padding-top:15px;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vZm9vdGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWtCLEFBR21CLEFBUUEsVUFDRSxDQVJLLFdBU0EsTUFQSyxXQVFMLGlCQUNuQix3QkFSK0IsZ0dBQy9CIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vZm9vdGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWcgZnJvbSAnLi4vLi4vYXRvbXMvYXRJbWcvaW5kZXguanMnO1xuaW1wb3J0IERpdiBmcm9tICcuLi8uLi9hdG9tcy9hdERpdidcbmltcG9ydCBNb1JlZ2lhbyBmcm9tICcuLi9tb1JlZ2lhby9pbmRleC5qcydcbmltcG9ydCBCdExpbmsgZnJvbSAnLi4vLi4vYXRvbXMvYXRCdExpbmsnXG4vL2ltcG9ydCBNZW51TW9iaWxlMDEgZnJvbSAnLi4vbW9NZW51TW9iaWxlMDEvaW5kZXguanMnXG5cbi8vaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuLy9jb25zb2xlLmxvZygnbW9IZWFkZXJTaWRlRG9WYWxlbnRlICcpO1xuXG5jb25zdCBtb0hlYWRlclNpZGVEb1ZhbGVudGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgY29uc3QgcmVnaWFvID0gcHJvcHMucmVnaWFvO1xuICBjb25zdCBtb2RvID0gcHJvcHMubW9kbztcbiAgLy9jb25zdCBKc29uUmVnaWFvID0gVXRpbC5yZWdpYW8ocmVnaWFvKTtcbiAgdmFyIFN0cmluZ01vZG8gPSBcIlwiO1xuICBpZihtb2RvPT1cIkFNUFwiIHx8IG1vZG89PVwiYW1wXCIpe1xuICAgIFN0cmluZ01vZG8gPSBcIi9hbXBcIjtcbiAgfVxuICBjb25zb2xlLmxvZygnKiBIZWFkZXIgZG8gVmFsZW50ZSB8IG1vZG89Jyttb2RvKyAnIHwgcmVnaWFvPScrcmVnaWFvKTtcblxuICByZXR1cm4gKFxuICAgIDxEaXYgZGlzcGxheT1cInJlc3BvbnNpdm9cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICA8YSBocmVmPXtTdHJpbmdNb2RvK1wiLz9yZWdpYW89XCIrcmVnaWFvfSA+XG4gICAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2xvZ29fdnZjLnBuZ1wiIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIGFsdD1cIkxvZ28gU2l0ZSBWYWxlbnRlXCIgdGl0bGU9XCJMb2dvIFNpdGUgVmFsZW50ZVwiIGNsYXNzPVwiTG9nb1NpdGVWYWxlbnRlXCIgbW9kbz17bW9kb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgIDxNb1JlZ2lhbyBtb2RvPXttb2RvfSByZWdpYW89e3JlZ2lhb30gLz5cbiAgICAgICAgPC9kaXY+XG48ZGl2PlxuPEJ0TGluayBocmVmPXtTdHJpbmdNb2RvK1wiLz9yZWdpYW89XCIrcmVnaWFvfSB2YWx1ZT1cIkhvbWVcIiBlc3RpbG89XCJsdXpcIi8+XG4gICAgICAgICAgPEJ0TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30gdmFsdWU9XCJUdXRvcmlhaXNcIiBlc3RpbG89XCJsdXpcIi8+XG4gICAgICAgICAgPEJ0TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL3V0aWxpdGFyaW9zLz9yZWdpYW89XCIrcmVnaWFvfSB2YWx1ZT1cIlV0aWxpdGFyaW9zXCIgZXN0aWxvPVwibHV6XCIvPlxuICAgICAgICAgIDxCdExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9nYW1lP3JlZ2lhbz1cIityZWdpYW99IHZhbHVlPVwiSm9nb3NcIiBlc3RpbG89XCJsdXpcIi8+ICAgICAgICBcbjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZvb3RlcmRvU2l0ZVwiPlxuICAgICAgICAgIDxEaXYgZGlzcGxheT1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIFZpc2l0ZSBvdXRyb3MgY2FuYWlzIDpcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd2ViLmZhY2Vib29rLmNvbS9kZXNpZ25lcnZ2Y1wiID5cbiAgICAgICAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2ZhY2Vib29rLmpwZ1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiBhbHQ9XCJmYWNlYm9va1wiIHRpdGxlPVwiRmFjZWJvb2sgRGVzaWduZXIgVlZDXCIgY2xhc3M9XCJMb2dvRmFjZWJvb2tcIiBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy92dmMtZXN0dWRpby9cIiA+XG4gICAgICAgICAgICAgICAgPEltZyBzcmM9XCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9zaXRlc2dvb2dsZS5qcGdcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgYWx0PVwic2l0ZXMgZ29vZ2xlXCIgdGl0bGU9XCJTaXRlIEdvb2dsZSBWVkMgZXN0dWRpb1wiIGNsYXNzPVwiTG9nb1NpdGVzZ29vZ2xlXCIgbW9kbz17bW9kb30gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vdXNlci92dmNlc3R1ZGlvXCIgPlxuICAgICAgICAgICAgICAgIDxJbWcgc3JjPVwiL3N0YXRpYy9hc3NldHN2NS9pbWcveW91dHViZS5qcGdcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgYWx0PVwiWW91dHViZVwiIHRpdGxlPVwiWW91dHViZSBWVkMgRXN0dWRpb1wiIGNsYXNzPVwiTG9nb1lvdXR1YmVcIiBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2JyLnBpbnRlcmVzdC5jb20vdmluaWNpdXN2YWxlbnRlL21vZGVsYWdlbS0zZC1kby12YWxlbnRlL1wiID5cbiAgICAgICAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL3BpbnRlcmVzdC5qcGdcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgYWx0PVwiUGludGVyZXN0XCIgdGl0bGU9XCJQaW50ZXJlc3QgTW9kZWxhZ2VtIDNkXCIgY2xhc3M9XCJMb2dvUGludGVyZXN0XCIgbW9kbz17bW9kb30gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9EaXY+ICBcbiAgICAgICAgICDCqSAyMDIwIFZWQyBTdHVkaW8uIFRvZG9zIG9zIGRpcmVpdG9zIHJlc2VydmFkb3MuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxvZ297XG4gICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAvKmFuaW1hdGlvbi1kZWxheTogMnM7Ki9cbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW5Tb21icmE7XG4gICAgICB9XG5cbiAgICAgIC5Gb290ZXJkb1NpdGV7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L0Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb0hlYWRlclNpZGVEb1ZhbGVudGVcblxuXG4vL8KpIDIwMjAgVlZDIEVzdHVkaW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIFxuLy/CqSAyMDIwIFZWQyBTdHVkaW8uIFRvZG9zIG9zIGRpcmVpdG9zIHJlc2VydmFkb3MuXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/mofooterSideDoValente/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (moHeaderSideDoValente); //© 2020 VVC Estudio. All Rights Reserved. 
//© 2020 VVC Studio. Todos os direitos reservados.

/***/ })

})
//# sourceMappingURL=componentes.js.d601a07c30e1af057566.hot-update.js.map