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
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
  }), "\xA9 2020 VVC Studio. Todos os direitos reservados."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1543707363" + " " + "FooterdoSite"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1543707363"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    modo: modo,
    regiao: regiao
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1543707363"
  }, "Visite outros canais :"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "horizontal"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1543707363"
  }, ".logo.jsx-1543707363{margin:0px;padding-top:10px;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:slideinSombra-jsx-1543707363;animation-name:slideinSombra-jsx-1543707363;}.FooterdoSite.jsx-1543707363{right:0px;float:right;padding-top:15px;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vZm9vdGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRWtCLEFBR21CLEFBUUEsVUFDRSxDQVJLLFdBU0EsTUFQSyxXQVFMLGlCQUNuQix3QkFSK0IsZ0dBQy9CIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vZm9vdGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWcgZnJvbSAnLi4vLi4vYXRvbXMvYXRJbWcvaW5kZXguanMnO1xuaW1wb3J0IERpdiBmcm9tICcuLi8uLi9hdG9tcy9hdERpdidcbmltcG9ydCBNb1JlZ2lhbyBmcm9tICcuLi9tb1JlZ2lhby9pbmRleC5qcydcbmltcG9ydCBCdExpbmsgZnJvbSAnLi4vLi4vYXRvbXMvYXRCdExpbmsnXG4vL2ltcG9ydCBNZW51TW9iaWxlMDEgZnJvbSAnLi4vbW9NZW51TW9iaWxlMDEvaW5kZXguanMnXG5cbi8vaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuLy9jb25zb2xlLmxvZygnbW9IZWFkZXJTaWRlRG9WYWxlbnRlICcpO1xuXG5jb25zdCBtb0hlYWRlclNpZGVEb1ZhbGVudGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgY29uc3QgcmVnaWFvID0gcHJvcHMucmVnaWFvO1xuICBjb25zdCBtb2RvID0gcHJvcHMubW9kbztcbiAgLy9jb25zdCBKc29uUmVnaWFvID0gVXRpbC5yZWdpYW8ocmVnaWFvKTtcbiAgdmFyIFN0cmluZ01vZG8gPSBcIlwiO1xuICBpZihtb2RvPT1cIkFNUFwiIHx8IG1vZG89PVwiYW1wXCIpe1xuICAgIFN0cmluZ01vZG8gPSBcIi9hbXBcIjtcbiAgfVxuICBjb25zb2xlLmxvZygnKiBIZWFkZXIgZG8gVmFsZW50ZSB8IG1vZG89Jyttb2RvKyAnIHwgcmVnaWFvPScrcmVnaWFvKTtcblxuICByZXR1cm4gKFxuICAgIDxEaXYgZGlzcGxheT1cInJlc3BvbnNpdm9cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICA8YSBocmVmPXtTdHJpbmdNb2RvK1wiLz9yZWdpYW89XCIrcmVnaWFvfSA+XG4gICAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2xvZ29fdnZjLnBuZ1wiIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIGFsdD1cIkxvZ28gU2l0ZSBWYWxlbnRlXCIgdGl0bGU9XCJMb2dvIFNpdGUgVmFsZW50ZVwiIGNsYXNzPVwiTG9nb1NpdGVWYWxlbnRlXCIgbW9kbz17bW9kb30gLz5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxCdExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi8/cmVnaWFvPVwiK3JlZ2lhb30gdmFsdWU9XCJIb21lXCIgZXN0aWxvPVwibHV6XCIvPlxuICAgICAgICAgICAgICA8QnRMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfSB2YWx1ZT1cIlR1dG9yaWFpc1wiIGVzdGlsbz1cImx1elwiLz5cbiAgICAgICAgICAgICAgPEJ0TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL3V0aWxpdGFyaW9zLz9yZWdpYW89XCIrcmVnaWFvfSB2YWx1ZT1cIlV0aWxpdGFyaW9zXCIgZXN0aWxvPVwibHV6XCIvPlxuICAgICAgICAgICAgICA8QnRMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvZ2FtZT9yZWdpYW89XCIrcmVnaWFvfSB2YWx1ZT1cIkpvZ29zXCIgZXN0aWxvPVwibHV6XCIvPiAgICAgICAgXG4gICAgICAgICAgICAgIMKpIDIwMjAgVlZDIFN0dWRpby4gVG9kb3Mgb3MgZGlyZWl0b3MgcmVzZXJ2YWRvcy5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9vdGVyZG9TaXRlXCI+XG4gICAgICAgIDxwPjwvcD5cbiAgICAgICAgICA8TW9SZWdpYW8gbW9kbz17bW9kb30gcmVnaWFvPXtyZWdpYW99IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgVmlzaXRlIG91dHJvcyBjYW5haXMgOlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERpdiBkaXNwbGF5PVwiaG9yaXpvbnRhbFwiPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93ZWIuZmFjZWJvb2suY29tL2Rlc2lnbmVydnZjXCIgPlxuICAgICAgICAgICAgICAgIDxJbWcgc3JjPVwiL3N0YXRpYy9hc3NldHN2NS9pbWcvZmFjZWJvb2suanBnXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIGFsdD1cImZhY2Vib29rXCIgdGl0bGU9XCJGYWNlYm9vayBEZXNpZ25lciBWVkNcIiBjbGFzcz1cIkxvZ29GYWNlYm9va1wiIG1vZG89e21vZG99IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vc2l0ZXMuZ29vZ2xlLmNvbS92aWV3L3Z2Yy1lc3R1ZGlvL1wiID5cbiAgICAgICAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL3NpdGVzZ29vZ2xlLmpwZ1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiBhbHQ9XCJzaXRlcyBnb29nbGVcIiB0aXRsZT1cIlNpdGUgR29vZ2xlIFZWQyBlc3R1ZGlvXCIgY2xhc3M9XCJMb2dvU2l0ZXNnb29nbGVcIiBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS91c2VyL3Z2Y2VzdHVkaW9cIiA+XG4gICAgICAgICAgICAgICAgPEltZyBzcmM9XCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy95b3V0dWJlLmpwZ1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiBhbHQ9XCJZb3V0dWJlXCIgdGl0bGU9XCJZb3V0dWJlIFZWQyBFc3R1ZGlvXCIgY2xhc3M9XCJMb2dvWW91dHViZVwiIG1vZG89e21vZG99IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYnIucGludGVyZXN0LmNvbS92aW5pY2l1c3ZhbGVudGUvbW9kZWxhZ2VtLTNkLWRvLXZhbGVudGUvXCIgPlxuICAgICAgICAgICAgICAgIDxJbWcgc3JjPVwiL3N0YXRpYy9hc3NldHN2NS9pbWcvcGludGVyZXN0LmpwZ1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiBhbHQ9XCJQaW50ZXJlc3RcIiB0aXRsZT1cIlBpbnRlcmVzdCBNb2RlbGFnZW0gM2RcIiBjbGFzcz1cIkxvZ29QaW50ZXJlc3RcIiBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Rpdj4gIFxuIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5sb2dve1xuICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgLyphbmltYXRpb24tZGVsYXk6IDJzOyovXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluU29tYnJhO1xuICAgICAgfVxuXG4gICAgICAuRm9vdGVyZG9TaXRle1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9EaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9IZWFkZXJTaWRlRG9WYWxlbnRlXG5cblxuLy/CqSAyMDIwIFZWQyBFc3R1ZGlvLiBBbGwgUmlnaHRzIFJlc2VydmVkLiBcbi8vwqkgMjAyMCBWVkMgU3R1ZGlvLiBUb2RvcyBvcyBkaXJlaXRvcyByZXNlcnZhZG9zLlxuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/mofooterSideDoValente/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (moHeaderSideDoValente); //© 2020 VVC Estudio. All Rights Reserved. 
//© 2020 VVC Studio. Todos os direitos reservados.

/***/ })

})
//# sourceMappingURL=index.js.5f27db26f5c47dcd50b0.hot-update.js.map