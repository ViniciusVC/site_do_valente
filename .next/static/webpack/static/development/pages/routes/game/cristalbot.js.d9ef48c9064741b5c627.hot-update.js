webpackHotUpdate("static/development/pages/routes/game/cristalbot.js",{

/***/ "./components/templates/game/cristalbot.js":
/*!*************************************************!*\
  !*** ./components/templates/game/cristalbot.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _moleculas_layout_cristalbot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../moleculas/layout/cristalbot.js */ "./components/moleculas/layout/cristalbot.js");
/* harmony import */ var _moleculas_moHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../moleculas/moHead */ "./components/moleculas/moHead/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");
/* harmony import */ var _atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/atBtLink */ "./components/atoms/atBtLink/index.js");
/* harmony import */ var _atoms_atImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/atImg */ "./components/atoms/atImg/index.js");
/* harmony import */ var _atoms_atDivNaveg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/atDivNaveg */ "./components/atoms/atDivNaveg/index.js");
/* harmony import */ var _atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/atDiv/index.js */ "./components/atoms/atDiv/index.js");

 //import Link from 'next/link'
//import Head from 'next/head'
//import FaviIcon from '../../atoms/atFavIcon'

 // Esta pagina tem um layout diferente.








var game = function game(props) {
  console.log('╔══════════════════════╗');
  console.log('║  GANE - Cristal Bot  ║');
  console.log('╚══════════════════════╝');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_4__["validaProps"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_4__["validaProps"](props.modo, "html");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-926456489"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_moHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
    modo: modo,
    title: "Cristal Bot",
    canonical: "/game/cristalbot"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_layout_cristalbot_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    regiao: regiao,
    modo: modo,
    titulo: "Games Cristal Bot",
    categoria: "Games"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-926456489"
  }, "Game Cristal Bot"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    display: "responcivo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: "/static/assetsv5/img/cristalbot/cristalbot001.png",
    width: "100px",
    height: "100px",
    alt: "Cristal Bot",
    title: "Cristal Bot",
    class: "Cristal Bot",
    modo: modo
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-926456489"
  }, "Cristal Bot \xE9 um game independente brasileiro, est\xE1 na sua vers\xE3o beta, e \xE9 feito por uma \xFAnica pessoa.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "Foi desenvolvido na plataforma Unity com linguage de programa\xE7\xE3o C# e modelagem 3D no Blender.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "Desenvolvi tanto o c\xF3digo quanto a arte do jogo."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/static/assetsv5/",
    value: "Baixar para Linux",
    estilo: "luz"
  })), "Uma imagem do game Cristal Bot planeta Marte.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivNaveg__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: "/static/assetsv5/img/cristalbot/cristalbot002.png",
    width: "786px",
    height: "453px",
    alt: "Cristal Bot planeta Marte",
    title: "Cristal Bot planeta Marte",
    class: "Cristal Bot planeta Marte",
    modo: modo
  })), "Uma imagem do game Cristal Bot planeta Plutao.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivNaveg__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: "/static/assetsv5/img/cristalbot/cristalbot003.png",
    width: "786px",
    height: "453px",
    alt: "Cristal Bot planeta Plutao",
    title: "Cristal Bot planeta Plutao",
    class: "Cristal Bot planeta Plutao",
    modo: modo
  })), "Uma imagem do game Cristal Bot planeta Lua.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivNaveg__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: "/static/assetsv5/img/cristalbot/cristalbot004.png",
    width: "786px",
    height: "453px",
    alt: "Cristal Bot planeta Lua",
    title: "Cristal Bot planeta Lua",
    class: "Cristal Bot planeta Lua",
    modo: modo
  })), "Uma imagem do game Cristal Bot planeta Venus.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivNaveg__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: "/static/assetsv5/img/cristalbot/cristalbot005.png",
    width: "786px",
    height: "453px",
    alt: "Cristal Bot planeta Venus",
    title: "Cristal Bot planeta Venus",
    class: "Cristal Bot planeta Venus",
    modo: modo
  })), "Uma imagem do game Cristal Bot planeta Mercurio.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivNaveg__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: "/static/assetsv5/img/cristalbot/cristalbot006.png",
    width: "786px",
    height: "453px",
    alt: "Cristal Bot planeta Mercurio",
    title: "Cristal Bot planeta Mercurio",
    class: "Cristal Bot planeta Mercurio",
    modo: modo
  })), "Uma imagem do game Cristal Bot rascunho game.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: "/static/assetsv5/img/cristalbot/cristalbot007.jpeg",
    width: "600px",
    height: "350px",
    alt: "Cristal Bot rascunho game",
    title: "Cristal Bot rascunho game",
    class: "Cristal Bot rascunho game",
    modo: modo
  }), "Uma imagem do game Cristal Bot modelagem Blender.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: "/static/assetsv5/img/cristalbot/cristalbot008.png",
    width: "300px",
    height: "300px",
    alt: "Cristal Bot modelagem Blender",
    title: "Cristal Bot modelagem Blender",
    class: "Cristal Bot modelagem Blender",
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "926456489"
  }, ".h1.jsx-926456489{color :#000000;}.p.jsx-926456489{color :#000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2dhbWUvY3Jpc3RhbGJvdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRGtCLEFBRzBCLEFBR0EsZUFGakIsQUFHQSIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL3RlbXBsYXRlcy9nYW1lL2NyaXN0YWxib3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vL2ltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy9pbXBvcnQgRmF2aUljb24gZnJvbSAnLi4vLi4vYXRvbXMvYXRGYXZJY29uJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9tb2xlY3VsYXMvbGF5b3V0L2NyaXN0YWxib3QuanMnIC8vIEVzdGEgcGFnaW5hIHRlbSB1bSBsYXlvdXQgZGlmZXJlbnRlLlxuaW1wb3J0IE1vSGVhZCBmcm9tICcuLi8uLi9tb2xlY3VsYXMvbW9IZWFkJ1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuaW1wb3J0IEJ0TGluayBmcm9tICcuLi8uLi9hdG9tcy9hdEJ0TGluaydcbmltcG9ydCBJbWcgZnJvbSAnLi4vLi4vYXRvbXMvYXRJbWcnXG5pbXBvcnQgRGl2TmF2ZWcgZnJvbSAnLi4vLi4vYXRvbXMvYXREaXZOYXZlZydcbmltcG9ydCBEaXYgZnJvbSAnLi4vLi4vYXRvbXMvYXREaXYvaW5kZXguanMnXG5cbmNvbnN0IGdhbWUgPSBmdW5jdGlvbiAocHJvcHMpIHtcblxuICBjb25zb2xlLmxvZygn4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG4gIGNvbnNvbGUubG9nKCfilZEgIEdBTkUgLSBDcmlzdGFsIEJvdCAg4pWRJyk7XG4gIGNvbnNvbGUubG9nKCfilZrilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZ0nKTtcblxuICB2YXIgcmVnaWFvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5yZWdpYW8gLCBcIlJKXCIpO1xuICB2YXIgbW9kbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMubW9kbywgXCJodG1sXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxNb0hlYWQgbW9kbz17bW9kb30gdGl0bGU9XCJDcmlzdGFsIEJvdFwiIGNhbm9uaWNhbD1cIi9nYW1lL2NyaXN0YWxib3RcIi8+XG4gICAgICA8TGF5b3V0IHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfSB0aXR1bG89XCJHYW1lcyBDcmlzdGFsIEJvdFwiIGNhdGVnb3JpYT1cIkdhbWVzXCI+XG4gICAgICAgICAgPGgxPkdhbWUgQ3Jpc3RhbCBCb3Q8L2gxPlxuICAgICAgICAgIDxEaXYgZGlzcGxheT1cInJlc3BvbmNpdm9cIj5cbiAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2NyaXN0YWxib3QvY3Jpc3RhbGJvdDAwMS5wbmdcIiB3aWR0aD1cIjEwMHB4XCIgaGVpZ2h0PVwiMTAwcHhcIiBhbHQ9XCJDcmlzdGFsIEJvdFwiIHRpdGxlPVwiQ3Jpc3RhbCBCb3RcIiBjbGFzcz1cIkNyaXN0YWwgQm90XCIgbW9kbz17bW9kb30gLz5cbiAgICAgICAgICAgIDxwPkNyaXN0YWwgQm90IMOpIHVtIGdhbWUgaW5kZXBlbmRlbnRlIGJyYXNpbGVpcm8sIGVzdMOhIG5hIHN1YSB2ZXJzw6NvIGJldGEsIGUgw6kgZmVpdG8gcG9yIHVtYSDDum5pY2EgcGVzc29hLjxici8+XG4gICAgICAgICAgICBGb2kgZGVzZW52b2x2aWRvIG5hIHBsYXRhZm9ybWEgVW5pdHkgY29tIGxpbmd1YWdlIGRlIHByb2dyYW1hw6fDo28gQyMgZSBtb2RlbGFnZW0gM0Qgbm8gQmxlbmRlci48YnIvPlxuICAgICAgICAgICAgRGVzZW52b2x2aSB0YW50byBvIGPDs2RpZ28gcXVhbnRvIGEgYXJ0ZSBkbyBqb2dvLjwvcD5cbiAgICAgICAgICA8QnRMaW5rIGhyZWY9e1wiL3N0YXRpYy9hc3NldHN2NS9cIn0gdmFsdWU9XCJCYWl4YXIgcGFyYSBMaW51eFwiIGVzdGlsbz1cImx1elwiLz5cbiAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICBVbWEgaW1hZ2VtIGRvIGdhbWUgQ3Jpc3RhbCBCb3QgcGxhbmV0YSBNYXJ0ZS5cbiAgICAgICAgICA8RGl2TmF2ZWc+XG4gICAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2NyaXN0YWxib3QvY3Jpc3RhbGJvdDAwMi5wbmdcIiB3aWR0aD1cIjc4NnB4XCIgaGVpZ2h0PVwiNDUzcHhcIiBhbHQ9XCJDcmlzdGFsIEJvdCBwbGFuZXRhIE1hcnRlXCIgdGl0bGU9XCJDcmlzdGFsIEJvdCBwbGFuZXRhIE1hcnRlXCIgY2xhc3M9XCJDcmlzdGFsIEJvdCBwbGFuZXRhIE1hcnRlXCIgbW9kbz17bW9kb30gLz5cbiAgICAgICAgICA8L0Rpdk5hdmVnPiAgXG4gICAgICAgICAgVW1hIGltYWdlbSBkbyBnYW1lIENyaXN0YWwgQm90IHBsYW5ldGEgUGx1dGFvLlxuICAgICAgICAgIDxEaXZOYXZlZz5cbiAgICAgICAgICAgICAgPEltZyBzcmM9XCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9jcmlzdGFsYm90L2NyaXN0YWxib3QwMDMucG5nXCIgd2lkdGg9XCI3ODZweFwiIGhlaWdodD1cIjQ1M3B4XCIgYWx0PVwiQ3Jpc3RhbCBCb3QgcGxhbmV0YSBQbHV0YW9cIiB0aXRsZT1cIkNyaXN0YWwgQm90IHBsYW5ldGEgUGx1dGFvXCIgY2xhc3M9XCJDcmlzdGFsIEJvdCBwbGFuZXRhIFBsdXRhb1wiIG1vZG89e21vZG99IC8+XG4gICAgICAgICAgPC9EaXZOYXZlZz5cbiAgICAgICAgICBVbWEgaW1hZ2VtIGRvIGdhbWUgQ3Jpc3RhbCBCb3QgcGxhbmV0YSBMdWEuXG4gICAgICAgICAgPERpdk5hdmVnPlxuICAgICAgICAgICAgPEltZyBzcmM9XCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9jcmlzdGFsYm90L2NyaXN0YWxib3QwMDQucG5nXCIgd2lkdGg9XCI3ODZweFwiIGhlaWdodD1cIjQ1M3B4XCIgYWx0PVwiQ3Jpc3RhbCBCb3QgcGxhbmV0YSBMdWFcIiB0aXRsZT1cIkNyaXN0YWwgQm90IHBsYW5ldGEgTHVhXCIgY2xhc3M9XCJDcmlzdGFsIEJvdCBwbGFuZXRhIEx1YVwiIG1vZG89e21vZG99IC8+XG4gICAgICAgICAgPC9EaXZOYXZlZz5cbiAgICAgICAgICBVbWEgaW1hZ2VtIGRvIGdhbWUgQ3Jpc3RhbCBCb3QgcGxhbmV0YSBWZW51cy5cbiAgICAgICAgICA8RGl2TmF2ZWc+XG4gICAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2NyaXN0YWxib3QvY3Jpc3RhbGJvdDAwNS5wbmdcIiB3aWR0aD1cIjc4NnB4XCIgaGVpZ2h0PVwiNDUzcHhcIiBhbHQ9XCJDcmlzdGFsIEJvdCBwbGFuZXRhIFZlbnVzXCIgdGl0bGU9XCJDcmlzdGFsIEJvdCBwbGFuZXRhIFZlbnVzXCIgY2xhc3M9XCJDcmlzdGFsIEJvdCBwbGFuZXRhIFZlbnVzXCIgbW9kbz17bW9kb30gLz5cbiAgICAgICAgICA8L0Rpdk5hdmVnPlxuICAgICAgICAgIFVtYSBpbWFnZW0gZG8gZ2FtZSBDcmlzdGFsIEJvdCBwbGFuZXRhIE1lcmN1cmlvLlxuICAgICAgICAgIDxEaXZOYXZlZz5cbiAgICAgICAgICAgIDxJbWcgc3JjPVwiL3N0YXRpYy9hc3NldHN2NS9pbWcvY3Jpc3RhbGJvdC9jcmlzdGFsYm90MDA2LnBuZ1wiIHdpZHRoPVwiNzg2cHhcIiBoZWlnaHQ9XCI0NTNweFwiIGFsdD1cIkNyaXN0YWwgQm90IHBsYW5ldGEgTWVyY3VyaW9cIiB0aXRsZT1cIkNyaXN0YWwgQm90IHBsYW5ldGEgTWVyY3VyaW9cIiBjbGFzcz1cIkNyaXN0YWwgQm90IHBsYW5ldGEgTWVyY3VyaW9cIiBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgIDwvRGl2TmF2ZWc+XG4gICAgICAgICAgVW1hIGltYWdlbSBkbyBnYW1lIENyaXN0YWwgQm90IHJhc2N1bmhvIGdhbWUuXG4gICAgICAgICAgPEltZyBzcmM9XCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9jcmlzdGFsYm90L2NyaXN0YWxib3QwMDcuanBlZ1wiIHdpZHRoPVwiNjAwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIGFsdD1cIkNyaXN0YWwgQm90IHJhc2N1bmhvIGdhbWVcIiB0aXRsZT1cIkNyaXN0YWwgQm90IHJhc2N1bmhvIGdhbWVcIiBjbGFzcz1cIkNyaXN0YWwgQm90IHJhc2N1bmhvIGdhbWVcIiBtb2RvPXttb2RvfSAvPlxuICAgICAgICAgIFVtYSBpbWFnZW0gZG8gZ2FtZSBDcmlzdGFsIEJvdCBtb2RlbGFnZW0gQmxlbmRlci5cbiAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2NyaXN0YWxib3QvY3Jpc3RhbGJvdDAwOC5wbmdcIiB3aWR0aD1cIjMwMHB4XCIgaGVpZ2h0PVwiMzAwcHhcIiBhbHQ9XCJDcmlzdGFsIEJvdCBtb2RlbGFnZW0gQmxlbmRlclwiIHRpdGxlPVwiQ3Jpc3RhbCBCb3QgbW9kZWxhZ2VtIEJsZW5kZXJcIiBjbGFzcz1cIkNyaXN0YWwgQm90IG1vZGVsYWdlbSBCbGVuZGVyXCIgbW9kbz17bW9kb30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaDF7XG4gICAgICAgICAgY29sb3IgOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5we1xuICAgICAgICAgIGNvbG9yIDogIzAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZVxuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/game/cristalbot.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (game);

/***/ })

})
//# sourceMappingURL=cristalbot.js.d9ef48c9064741b5c627.hot-update.js.map