webpackHotUpdate("static/development/pages/routes/amp/game.js",{

/***/ "./components/templates/game/index.js":
/*!********************************************!*\
  !*** ./components/templates/game/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _moleculas_layout_games_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../moleculas/layout/games.js */ "./components/moleculas/layout/games.js");
/* harmony import */ var _moleculas_moHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../moleculas/moHead */ "./components/moleculas/moHead/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");
/* harmony import */ var _atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/atBtLink */ "./components/atoms/atBtLink/index.js");


 // Esta pagina tem um layout diferente.





var game = function game(props) {
  console.log('╔══════════════════════╗');
  console.log('║        GANES         ║');
  console.log('╚══════════════════════╝');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_4__["validaProps"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_4__["validaProps"](props.modo, "html");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-926456489"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_moHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
    modo: modo,
    title: "Games do Valente",
    description: "Alguns jogos desenvolvidos pelo Valente.",
    canonical: "/game/",
    keywords: "jogos, game, javascript, canvas, Unity, 3D, cristalbot, godzilla, tanque, cobrinha"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_layout_games_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    regiao: regiao,
    modo: modo,
    titulo: "Games",
    categoria: "Games"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-926456489"
  }, "Game"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-926456489"
  }, "Alguns games de teste :)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/game/cristalbot/?regiao=" + regiao,
    value: "GAME - Cristal Bot",
    estilo: "neon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-926456489"
  }, "Jogo Cristal Bot desenvolvido na Unity com C# modelagem 3D no Blender. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "Desenvolvi tanto o c\xF3digo quanto a arte do jogo."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/game/controleogodzilla/?regiao=" + regiao,
    value: "GAME - Controle O Godzilla",
    estilo: "neon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-926456489"
  }, "Brincadeira que fiz pro meu filho em um fim de dia.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "Um JS simples que interage com o mouse."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/game/tanque/?regiao=" + regiao,
    value: "GAME - Tanque",
    estilo: "neon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-926456489"
  }, "Estudo de desenvolvimento de game para Web com a biblioteca PhaserJS.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "Controle de um tanque em vista superior."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/game/ecossistema/?regiao=" + regiao,
    value: "Simulador de Ecossistema",
    estilo: "neon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-926456489"
  }, "Estudo de desenvolvimento de game apenas com JS e canvas.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "Uma simula\xE7\xE3o de ecossistema, N\xE3o \xE9 jogavel."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/game/cobrinha/?regiao=" + regiao,
    value: "Cobrinha",
    estilo: "neon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-926456489"
  }, "Estudo de desenvolvimento de game apenas com JS e canvas.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-926456489"
  }), "Classico jogo da cobrinha.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "926456489"
  }, ".h1.jsx-926456489{color :#000000;}.p.jsx-926456489{color :#000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2dhbWUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNrQixBQUcwQixBQUdBLGVBRmpCLEFBR0EiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy90ZW1wbGF0ZXMvZ2FtZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vbW9sZWN1bGFzL2xheW91dC9nYW1lcy5qcycgLy8gRXN0YSBwYWdpbmEgdGVtIHVtIGxheW91dCBkaWZlcmVudGUuXG5pbXBvcnQgTW9IZWFkIGZyb20gJy4uLy4uL21vbGVjdWxhcy9tb0hlYWQnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5pbXBvcnQgQnRMaW5rIGZyb20gJy4uLy4uL2F0b21zL2F0QnRMaW5rJ1xuXG5jb25zdCBnYW1lID0gZnVuY3Rpb24gKHByb3BzKSB7XG5cbiAgY29uc29sZS5sb2coJ+KVlOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVlycpO1xuICBjb25zb2xlLmxvZygn4pWRICAgICAgICBHQU5FUyAgICAgICAgIOKVkScpO1xuICBjb25zb2xlLmxvZygn4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWdJyk7XG5cbiAgdmFyIHJlZ2lhbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMucmVnaWFvICwgXCJSSlwiKTtcbiAgdmFyIG1vZG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLm1vZG8sIFwiaHRtbFwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TW9IZWFkIFxuICAgICAgICBtb2RvPXttb2RvfSBcbiAgICAgICAgdGl0bGU9XCJHYW1lcyBkbyBWYWxlbnRlXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJBbGd1bnMgam9nb3MgZGVzZW52b2x2aWRvcyBwZWxvIFZhbGVudGUuXCIgXG4gICAgICAgIGNhbm9uaWNhbD1cIi9nYW1lL1wiXG4gICAgICAgIGtleXdvcmRzPVwiam9nb3MsIGdhbWUsIGphdmFzY3JpcHQsIGNhbnZhcywgVW5pdHksIDNELCBjcmlzdGFsYm90LCBnb2R6aWxsYSwgdGFucXVlLCBjb2JyaW5oYVwiXG4gICAgICAvPlxuICAgICAgPExheW91dCByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30gdGl0dWxvPVwiR2FtZXNcIiBjYXRlZ29yaWE9XCJHYW1lc1wiPlxuICAgICAgICAgIDxoMT5HYW1lPC9oMT5cbiAgICAgICAgICA8cD5BbGd1bnMgZ2FtZXMgZGUgdGVzdGUgOik8L3A+XG4gICAgICAgICAgICA8QnRMaW5rIGhyZWY9e1wiL2dhbWUvY3Jpc3RhbGJvdC8/cmVnaWFvPVwiK3JlZ2lhb30gdmFsdWU9XCJHQU1FIC0gQ3Jpc3RhbCBCb3RcIiBlc3RpbG89XCJuZW9uXCIvPlxuICAgICAgICAgICAgPHA+Sm9nbyBDcmlzdGFsIEJvdCBkZXNlbnZvbHZpZG8gbmEgVW5pdHkgY29tIEMjIG1vZGVsYWdlbSAzRCBubyBCbGVuZGVyLiA8YnIvPlxuICAgICAgICAgICAgRGVzZW52b2x2aSB0YW50byBvIGPDs2RpZ28gcXVhbnRvIGEgYXJ0ZSBkbyBqb2dvLjwvcD5cbiAgICAgICAgICAgIDxCdExpbmsgaHJlZj17XCIvZ2FtZS9jb250cm9sZW9nb2R6aWxsYS8/cmVnaWFvPVwiK3JlZ2lhb30gdmFsdWU9XCJHQU1FIC0gQ29udHJvbGUgTyBHb2R6aWxsYVwiIGVzdGlsbz1cIm5lb25cIi8+XG4gICAgICAgICAgICA8cD5CcmluY2FkZWlyYSBxdWUgZml6IHBybyBtZXUgZmlsaG8gZW0gdW0gZmltIGRlIGRpYS48YnIvPlxuICAgICAgICAgICAgVW0gSlMgc2ltcGxlcyBxdWUgaW50ZXJhZ2UgY29tIG8gbW91c2UuPC9wPlxuICAgICAgICAgICAgPEJ0TGluayBocmVmPXtcIi9nYW1lL3RhbnF1ZS8/cmVnaWFvPVwiK3JlZ2lhb30gdmFsdWU9XCJHQU1FIC0gVGFucXVlXCIgZXN0aWxvPVwibmVvblwiLz5cbiAgICAgICAgICAgIDxwPkVzdHVkbyBkZSBkZXNlbnZvbHZpbWVudG8gZGUgZ2FtZSBwYXJhIFdlYiBjb20gYSBiaWJsaW90ZWNhIFBoYXNlckpTLjxici8+IFxuICAgICAgICAgICAgQ29udHJvbGUgZGUgdW0gdGFucXVlIGVtIHZpc3RhIHN1cGVyaW9yLjwvcD5cbiAgICAgICAgICAgIDxCdExpbmsgaHJlZj17XCIvZ2FtZS9lY29zc2lzdGVtYS8/cmVnaWFvPVwiK3JlZ2lhb30gdmFsdWU9XCJTaW11bGFkb3IgZGUgRWNvc3Npc3RlbWFcIiBlc3RpbG89XCJuZW9uXCIvPlxuICAgICAgICAgICAgPHA+RXN0dWRvIGRlIGRlc2Vudm9sdmltZW50byBkZSBnYW1lIGFwZW5hcyBjb20gSlMgZSBjYW52YXMuPGJyLz4gXG4gICAgICAgICAgICBVbWEgc2ltdWxhw6fDo28gZGUgZWNvc3Npc3RlbWEsIE7Do28gw6kgam9nYXZlbC48L3A+XG4gICAgICAgICAgICA8QnRMaW5rIGhyZWY9e1wiL2dhbWUvY29icmluaGEvP3JlZ2lhbz1cIityZWdpYW99IHZhbHVlPVwiQ29icmluaGFcIiBlc3RpbG89XCJuZW9uXCIvPlxuICAgICAgICAgICAgPHA+RXN0dWRvIGRlIGRlc2Vudm9sdmltZW50byBkZSBnYW1lIGFwZW5hcyBjb20gSlMgZSBjYW52YXMuPGJyLz4gXG4gICAgICAgICAgICBDbGFzc2ljbyBqb2dvIGRhIGNvYnJpbmhhLjwvcD5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaDF7XG4gICAgICAgICAgY29sb3IgOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5we1xuICAgICAgICAgIGNvbG9yIDogIzAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZVxuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/game/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (game);

/***/ })

})
//# sourceMappingURL=game.js.0ff62ff2904ecfb4b731.hot-update.js.map