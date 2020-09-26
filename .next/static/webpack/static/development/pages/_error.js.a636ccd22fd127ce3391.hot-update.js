webpackHotUpdate("static/development/pages/_error.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/atDiv */ "./components/atoms/atDiv/index.js");
/* harmony import */ var _moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moListadeRotas/index.js */ "./components/moleculas/moListadeRotas/index.js");
/* harmony import */ var _moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../moJanela/index.js */ "./components/moleculas/moJanela/index.js");
/* harmony import */ var _moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../moHeaderSideDoValente/index.js */ "./components/moleculas/moHeaderSideDoValente/index.js");
/* harmony import */ var _mofooterSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mofooterSideDoValente/index.js */ "./components/moleculas/mofooterSideDoValente/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");
/* harmony import */ var _atoms_atGTM__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/atGTM */ "./components/atoms/atGTM/index.js");










var layout = function layout(props) {
  console.log('Rodando /layout.js Luz Verde');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["validaProps"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["validaProps"](props.modo, "html");
  var titulo = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["validaProps"](props.titulo, "Home");
  var categoria = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["validaProps"](props.categoria, "Outros"); //Layout Luz verde

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2119224616 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2270521256", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]]) + " " + "CSSLayout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atGTM__WEBPACK_IMPORTED_MODULE_8__["default"], {
    position: "body",
    modo: modo,
    codGTM: "UA-143307429-1"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2119224616 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2270521256", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]]) + " " + "layoutManu esconder"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estilo: "neon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    regiao: regiao,
    modo: modo,
    titulo: titulo,
    categoria: categoria
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2119224616 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2270521256", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]]) + " " + "layoutBody"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estilo: "neon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    regiao: regiao,
    modo: modo,
    titulo: titulo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estilo: "neon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2119224616 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2270521256", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]]) + " " + "conteudo"
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estilo: "neon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mofooterSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    regiao: regiao,
    modo: modo
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2119224616"
  }, ".CSSLayout.jsx-2119224616{color:#ffffff;width:100%;margin :0px;padding :0px;padding-top :10px;}.layoutManu.jsx-2119224616{width:25%;}.layoutBody.jsx-2119224616{width:71%;padding-right:2%;}@media(max-width:1169px){.layoutManu.jsx-2119224616{display :None;}.layoutBody.jsx-2119224616{width:96%;}}@media(max-width:1169px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q2tCLEFBR3VCLEFBT0osQUFJQSxBQUtNLEFBR0osVUFWZCxBQUdrQixBQVNoQixJQXBCVSxBQWdCVixXQWZZLEVBV2QsVUFWZSxhQUNLLGtCQUNwQiIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL21vbGVjdWxhcy9sYXlvdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGl2IGZyb20gJy4uLy4uL2F0b21zL2F0RGl2J1xuXG5pbXBvcnQgTGlzdGFkZVJvdGFzIGZyb20gJy4uL21vTGlzdGFkZVJvdGFzL2luZGV4LmpzJ1xuaW1wb3J0IEphbmVsYSBmcm9tICcuLi9tb0phbmVsYS9pbmRleC5qcydcbmltcG9ydCBIZWFkZXJTaWRlRG9WYWxlbnRlIGZyb20gJy4uL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcydcbmltcG9ydCBGb290ZXJTaWRlRG9WYWxlbnRlIGZyb20gJy4uL21vZm9vdGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcydcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi4vLi4vLi4vY29udHJvbGxlci91dGlsLmpzJztcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vYXRvbXMvYXRHVE0nO1xuXG5jb25zdCBsYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnNvbGUubG9nKCdSb2RhbmRvIC9sYXlvdXQuanMgTHV6IFZlcmRlJyk7XG4gIHZhciByZWdpYW8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnJlZ2lhbyAsIFwiUkpcIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLCBcImh0bWxcIik7XG4gIHZhciB0aXR1bG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnRpdHVsbywgXCJIb21lXCIpO1xuICB2YXIgY2F0ZWdvcmlhID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5jYXRlZ29yaWEsIFwiT3V0cm9zXCIpO1xuXG4gIC8vTGF5b3V0IEx1eiB2ZXJkZVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ1NTTGF5b3V0XCI+XG4gICAgICA8R1RNIHBvc2l0aW9uPVwiYm9keVwiIG1vZG89e21vZG99IGNvZEdUTT1cIlVBLTE0MzMwNzQyOS0xXCIgLz5cbiAgICAgIDxEaXYgZGlzcGxheT1cImp1c3RpZmljYWRvXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRNYW51IGVzY29uZGVyXCI+XG4gICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cIm5lb25cIj5cbiAgICAgICAgICAgICAgICA8TGlzdGFkZVJvdGFzIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfSB0aXR1bG89e3RpdHVsb30gY2F0ZWdvcmlhPXtjYXRlZ29yaWF9Lz5cbiAgICAgICAgICAgIDwvSmFuZWxhPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRCb2R5XCI+XG4gICAgICAgICAgICA8RGl2IGRpc3BsYXk9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cIm5lb25cIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyU2lkZURvVmFsZW50ZSByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30gdGl0dWxvPXt0aXR1bG99Lz5cbiAgICAgICAgICAgICAgPC9KYW5lbGE+XG4gICAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibmVvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV1ZG9cIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvSmFuZWxhPlxuICAgICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cIm5lb25cIj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyU2lkZURvVmFsZW50ZSByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30vPlxuICAgICAgICAgICAgICA8L0phbmVsYT5cbiAgICAgICAgICAgIDwvRGl2PlxuICAgICAgICAgIDwvZGl2PiAgICAgIFxuICAgICAgICBcbiAgICAgIDwvRGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLkNTU0xheW91dHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIG1hcmdpbiA6IDBweDtcbiAgICAgICAgcGFkZGluZyA6IDBweDtcbiAgICAgICAgcGFkZGluZy10b3AgOiAxMHB4O1xuICAgICAgfVxuICAgICAgLmxheW91dE1hbnV7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIC8qcGFkZGluZy1sZWZ0OjIlOyovXG4gICAgICB9XG4gICAgICAubGF5b3V0Qm9keXtcbiAgICAgICAgd2lkdGg6IDcxJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDoyJTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDExNjlweCkge1xuICAgICAgICAubGF5b3V0TWFudXtcbiAgICAgICAgICBkaXNwbGF5IDogTm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubGF5b3V0Qm9keXtcbiAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgIC8qcGFkZGluZy1sZWZ0OjIlOyovXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDExNjlweCkge1xuICAgICAgICBcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTMSgpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTMigpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTMygpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTNCgpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTNSgpfVxuICAgICAgICBib2R5e1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMTI4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2xheW91dF9sdXovZnVuZG8wNC5qcGdcIik7XG4gICAgICAgICAgY29sb3I6ICMxMGVjZjU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFNpbXBsb25CUC1SZWd1bGFyLCBzYW5zLXNlcmlmOyAgICAgICBcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsYXlvdXRcblxuLy9Ow6NvIGVzcXVlw6dhIGRlIGRvIEdUTSBkbyBib2R5LiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/layout/index.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2270521256",
    dynamic: [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]
  }, "".concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"](), " body{margin:0px;padding:0px;background-color:#002128;background-image:url(\"/static/assetsv5/img/layout_luz/fundo04.jpg\");color:#10ecf5;font-family:SimplonBP-Regular,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRXlCLEFBUXNCLFdBQ0MsWUFDYSx5QkFDMkMsb0VBQ3RELGNBQzRCLHlDQUM1QyIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL21vbGVjdWxhcy9sYXlvdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGl2IGZyb20gJy4uLy4uL2F0b21zL2F0RGl2J1xuXG5pbXBvcnQgTGlzdGFkZVJvdGFzIGZyb20gJy4uL21vTGlzdGFkZVJvdGFzL2luZGV4LmpzJ1xuaW1wb3J0IEphbmVsYSBmcm9tICcuLi9tb0phbmVsYS9pbmRleC5qcydcbmltcG9ydCBIZWFkZXJTaWRlRG9WYWxlbnRlIGZyb20gJy4uL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcydcbmltcG9ydCBGb290ZXJTaWRlRG9WYWxlbnRlIGZyb20gJy4uL21vZm9vdGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcydcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi4vLi4vLi4vY29udHJvbGxlci91dGlsLmpzJztcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vYXRvbXMvYXRHVE0nO1xuXG5jb25zdCBsYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnNvbGUubG9nKCdSb2RhbmRvIC9sYXlvdXQuanMgTHV6IFZlcmRlJyk7XG4gIHZhciByZWdpYW8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnJlZ2lhbyAsIFwiUkpcIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLCBcImh0bWxcIik7XG4gIHZhciB0aXR1bG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnRpdHVsbywgXCJIb21lXCIpO1xuICB2YXIgY2F0ZWdvcmlhID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5jYXRlZ29yaWEsIFwiT3V0cm9zXCIpO1xuXG4gIC8vTGF5b3V0IEx1eiB2ZXJkZVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ1NTTGF5b3V0XCI+XG4gICAgICA8R1RNIHBvc2l0aW9uPVwiYm9keVwiIG1vZG89e21vZG99IGNvZEdUTT1cIlVBLTE0MzMwNzQyOS0xXCIgLz5cbiAgICAgIDxEaXYgZGlzcGxheT1cImp1c3RpZmljYWRvXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRNYW51IGVzY29uZGVyXCI+XG4gICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cIm5lb25cIj5cbiAgICAgICAgICAgICAgICA8TGlzdGFkZVJvdGFzIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfSB0aXR1bG89e3RpdHVsb30gY2F0ZWdvcmlhPXtjYXRlZ29yaWF9Lz5cbiAgICAgICAgICAgIDwvSmFuZWxhPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRCb2R5XCI+XG4gICAgICAgICAgICA8RGl2IGRpc3BsYXk9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cIm5lb25cIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyU2lkZURvVmFsZW50ZSByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30gdGl0dWxvPXt0aXR1bG99Lz5cbiAgICAgICAgICAgICAgPC9KYW5lbGE+XG4gICAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibmVvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV1ZG9cIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvSmFuZWxhPlxuICAgICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cIm5lb25cIj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyU2lkZURvVmFsZW50ZSByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30vPlxuICAgICAgICAgICAgICA8L0phbmVsYT5cbiAgICAgICAgICAgIDwvRGl2PlxuICAgICAgICAgIDwvZGl2PiAgICAgIFxuICAgICAgICBcbiAgICAgIDwvRGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLkNTU0xheW91dHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIG1hcmdpbiA6IDBweDtcbiAgICAgICAgcGFkZGluZyA6IDBweDtcbiAgICAgICAgcGFkZGluZy10b3AgOiAxMHB4O1xuICAgICAgfVxuICAgICAgLmxheW91dE1hbnV7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIC8qcGFkZGluZy1sZWZ0OjIlOyovXG4gICAgICB9XG4gICAgICAubGF5b3V0Qm9keXtcbiAgICAgICAgd2lkdGg6IDcxJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDoyJTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDExNjlweCkge1xuICAgICAgICAubGF5b3V0TWFudXtcbiAgICAgICAgICBkaXNwbGF5IDogTm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubGF5b3V0Qm9keXtcbiAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgIC8qcGFkZGluZy1sZWZ0OjIlOyovXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDExNjlweCkge1xuICAgICAgICBcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTMSgpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTMigpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTMygpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTNCgpfVxuICAgICAgICAke1V0aWwuZm9udGVzQ1NTNSgpfVxuICAgICAgICBib2R5e1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMTI4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2xheW91dF9sdXovZnVuZG8wNC5qcGdcIik7XG4gICAgICAgICAgY29sb3I6ICMxMGVjZjU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFNpbXBsb25CUC1SZWd1bGFyLCBzYW5zLXNlcmlmOyAgICAgICBcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsYXlvdXRcblxuLy9Ow6NvIGVzcXVlw6dhIGRlIGRvIEdUTSBkbyBib2R5LiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/layout/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (layout); //Não esqueça de do GTM do body.

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
    className: "jsx-1831010245" + " " + "logo headerpc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: StringModo + "/?regiao=" + regiao,
    className: "jsx-1831010245"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/logo_vvc.png",
    width: "100px",
    height: "100px",
    alt: "Logo Site Valente",
    title: "Logo Site Valente",
    class: "LogoSiteValente",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1831010245" + " " + "TitulodoSite headerpc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1831010245"
  }, titulo)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1831010245" + " " + "heaermob"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moMenuMobile01_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1831010245"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1831010245"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    modo: modo,
    regiao: regiao
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1831010245"
  }, ".logo.jsx-1831010245{margin:0px;padding-top:10px;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:slideinSombra-jsx-1831010245;animation-name:slideinSombra-jsx-1831010245;}h2.jsx-1831010245{color:#10ecf5;padding-top:0px;font-size:30px;font-family:sans-serif;text-align:center;}@-webkit-keyframes slideinSombra-jsx-1831010245{0%{opacity:0.0;}50%{opacity:0.5;}100%{opacity:1.0;}}@keyframes slideinSombra-jsx-1831010245{0%{opacity:0.0;}50%{opacity:0.5;}100%{opacity:1.0;}}@media(min-width:1169px){.heaermob.jsx-1831010245{display :None;}}@media(max-width:1169px){.headerpc.jsx-1831010245{display :None;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tCLEFBR21CLEFBT0ksQUFRRSxBQUdBLEFBR0EsQUFPQSxBQU1BLFdBakNDLENBZWpCLEFBR0EsQUFHRSxFQWRjLEFBcUJoQixBQU1BLGNBaENzQixFQU1QLGVBQ1EsdUJBQ0wsWUFQVyxNQVEvQiwwRkFQQSIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL21vbGVjdWxhcy9tb0hlYWRlclNpZGVEb1ZhbGVudGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1nIGZyb20gJy4uLy4uL2F0b21zL2F0SW1nL2luZGV4LmpzJztcbmltcG9ydCBEaXYgZnJvbSAnLi4vLi4vYXRvbXMvYXREaXYnXG5pbXBvcnQgTW9SZWdpYW8gZnJvbSAnLi4vbW9SZWdpYW8vaW5kZXguanMnXG5pbXBvcnQgTWVudU1vYmlsZTAxIGZyb20gJy4uL21vTWVudU1vYmlsZTAxL2luZGV4LmpzJ1xuXG4vL2ltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi4vLi4vLi4vY29udHJvbGxlci91dGlsLmpzJztcbi8vY29uc29sZS5sb2coJ21vSGVhZGVyU2lkZURvVmFsZW50ZSAnKTtcblxuY29uc3QgbW9IZWFkZXJTaWRlRG9WYWxlbnRlID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIGNvbnN0IHRpdHVsbyA9IHByb3BzLnRpdHVsbztcbiAgY29uc3QgcmVnaWFvID0gcHJvcHMucmVnaWFvO1xuICBjb25zdCBtb2RvID0gcHJvcHMubW9kbztcbiAgLy9jb25zdCBKc29uUmVnaWFvID0gVXRpbC5yZWdpYW8ocmVnaWFvKTtcbiAgdmFyIFN0cmluZ01vZG8gPSBcIlwiO1xuICBpZihtb2RvPT1cIkFNUFwiIHx8IG1vZG89PVwiYW1wXCIpe1xuICAgIFN0cmluZ01vZG8gPSBcIi9hbXBcIjtcbiAgfVxuICBjb25zb2xlLmxvZygnKiBIZWFkZXIgZG8gVmFsZW50ZSB8IG1vZG89Jyttb2RvKyAnIHwgcmVnaWFvPScrcmVnaWFvKTtcblxuICByZXR1cm4gKFxuICAgIDxEaXYgZGlzcGxheT1cInJlc3BvbnNpdm9cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gaGVhZGVycGNcIj5cbiAgICAgICAgICA8YSBocmVmPXtTdHJpbmdNb2RvK1wiLz9yZWdpYW89XCIrcmVnaWFvfSA+XG4gICAgICAgICAgICA8SW1nIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2xvZ29fdnZjLnBuZ1wiIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIGFsdD1cIkxvZ28gU2l0ZSBWYWxlbnRlXCIgdGl0bGU9XCJMb2dvIFNpdGUgVmFsZW50ZVwiIGNsYXNzPVwiTG9nb1NpdGVWYWxlbnRlXCIgbW9kbz17bW9kb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0dWxvZG9TaXRlIGhlYWRlcnBjXCI+XG4gICAgICAgICAgPGgyPnt0aXR1bG99PC9oMj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFlcm1vYlwiPlxuICAgICAgICAgICAgPE1lbnVNb2JpbGUwMSBtb2RvPXttb2RvfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgIDxNb1JlZ2lhbyBtb2RvPXttb2RvfSByZWdpYW89e3JlZ2lhb30gLz5cbiAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAubG9nb3tcbiAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIC8qYW5pbWF0aW9uLWRlbGF5OiAyczsqL1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgICAgICBhbmltYXRpb24tbmFtZTogc2xpZGVpblNvbWJyYTtcbiAgICAgIH1cbiAgICAgIGgye1xuICAgICAgICBjb2xvcjogIzEwZWNmNTtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBzbGlkZWluU29tYnJhIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMC4wO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLjA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICBAbWVkaWEobWluLXdpZHRoOiAxMTY5cHgpIHtcbiAgICAgICAgLmhlYWVybW9ie1xuICAgICAgICAgIGRpc3BsYXkgOiBOb25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDExNjlweCkge1xuICAgICAgICAuaGVhZGVycGN7XG4gICAgICAgICAgZGlzcGxheSA6IE5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9EaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9IZWFkZXJTaWRlRG9WYWxlbnRlXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moHeaderSideDoValente/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (moHeaderSideDoValente);

/***/ }),

/***/ "./components/templates/404.js":
/*!*************************************!*\
  !*** ./components/templates/404.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/atImg/index.js */ "./components/atoms/atImg/index.js");
/* harmony import */ var _atoms_atIcon_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/atIcon/index.js */ "./components/atoms/atIcon/index.js");
/* harmony import */ var _atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/atDiv/index.js */ "./components/atoms/atDiv/index.js");
/* harmony import */ var _moleculas_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../moleculas/layout */ "./components/moleculas/layout/index.js");
/* harmony import */ var _moleculas_moHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moleculas/moHead */ "./components/moleculas/moHead/index.js");
/* harmony import */ var _atoms_atBtLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../atoms/atBtLink */ "./components/atoms/atBtLink/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../controller/util.js */ "./controller/util.js");

 //import Link from 'next/link'







 //import Head from 'next/head'
//import FavIcon from '../atoms/atFavIcon'

var templateHome = function templateHome(props) {
  console.log('╔════════════════════════════╗');
  console.log('║    template erro 404       ║');
  console.log('╚════════════════════════════╝');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_8__["validaProps"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_8__["validaProps"](props.modo, "html");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2647530452"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_moHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    modo: modo,
    title: "P\xE1gina n\xE3o encontrada",
    description: "P\xE1gina n\xE3o encontrada",
    canonical: "/404/"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    regiao: regiao,
    modo: modo,
    titulo: "Erro",
    categoria: "Erro"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "responsivo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2647530452" + " " + "coluna404"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2647530452" + " " + 'title'
  }, "Ih, essa p\xE1gina n\xE3o foi encontrada"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2647530452"
  }, "Talvez o endere\xE7o digitado esteja incorreto ou voc\xEA tenha clicado em uma p\xE1gina que n\xE3o existe."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2647530452"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atIcon_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "inputAlert",
    color: "#ffffff",
    width: "30px"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2647530452"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2647530452"
  }, "Voc\xEA pode ver as op\xE7\xF5es do menu ao lado ou continuar a navega\xE7\xE3o pela p\xE1gina inicial."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "/?regiao=" + regiao,
    value: "P\xE1gina inicial.",
    estilo: "neon"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2647530452"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/hero-large-404.png",
    width: "323px",
    height: "436px",
    alt: "Pagina n\xE3o encontrada",
    title: "Pagina n\xE3o encontrada",
    class: "ClassImg404",
    modo: modo
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2647530452"
  }, ".title.jsx-2647530452{margin:0;padding-top:80px;line-height:1.15;font-size:48px;}.coluna404.jsx-2647530452{width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzLzQwNC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGdCLEFBR2tCLEFBTUMsU0FMTyxDQU1uQixnQkFMbUIsaUJBQ0YsZUFDakIiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy90ZW1wbGF0ZXMvNDA0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy9pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1nIGZyb20gJy4uL2F0b21zL2F0SW1nL2luZGV4LmpzJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vYXRvbXMvYXRJY29uL2luZGV4LmpzJ1xuaW1wb3J0IERpdiBmcm9tICcuLi9hdG9tcy9hdERpdi9pbmRleC5qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbW9sZWN1bGFzL2xheW91dCdcbmltcG9ydCBNb0hlYWQgZnJvbSAnLi4vbW9sZWN1bGFzL21vSGVhZCdcbmltcG9ydCBCdExpbmsgZnJvbSAnLi4vYXRvbXMvYXRCdExpbmsnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbi8vaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy9pbXBvcnQgRmF2SWNvbiBmcm9tICcuLi9hdG9tcy9hdEZhdkljb24nXG5cbmNvbnN0IHRlbXBsYXRlSG9tZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zb2xlLmxvZygn4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG4gIGNvbnNvbGUubG9nKCfilZEgICAgdGVtcGxhdGUgZXJybyA0MDQgICAgICAg4pWRJyk7XG4gIGNvbnNvbGUubG9nKCfilZrilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZ0nKTtcbiAgdmFyIHJlZ2lhbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMucmVnaWFvLFwiUkpcIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLFwiaHRtbFwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE1vSGVhZCBcbiAgICAgICAgbW9kbz17bW9kb30gXG4gICAgICAgIHRpdGxlPVwiUMOhZ2luYSBuw6NvIGVuY29udHJhZGFcIiBcbiAgICAgICAgZGVzY3JpcHRpb249XCJQw6FnaW5hIG7Do28gZW5jb250cmFkYVwiIFxuICAgICAgICBjYW5vbmljYWw9XCIvNDA0L1wiLz5cbiAgICAgIDxMYXlvdXQgcmVnaWFvPXtyZWdpYW99IG1vZG89e21vZG99IHRpdHVsbz1cIkVycm9cIiBjYXRlZ29yaWE9XCJFcnJvXCI+XG4gICAgICAgIDxEaXYgZGlzcGxheT1cInJlc3BvbnNpdm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVuYTQwNFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPkloLCBlc3NhIHDDoWdpbmEgbsOjbyBmb2kgZW5jb250cmFkYTwvaDE+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGFsdmV6IG8gZW5kZXJlw6dvIGRpZ2l0YWRvIGVzdGVqYSBpbmNvcnJldG8gb3Ugdm9jw6ogdGVuaGFcbiAgICAgICAgICAgICAgY2xpY2FkbyBlbSB1bWEgcMOhZ2luYSBxdWUgbsOjbyBleGlzdGUuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8RGl2IGRpc3BsYXk9XCJqdXN0aWZpY2Fkb1wiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJpbnB1dEFsZXJ0XCIgY29sb3I9XCIjZmZmZmZmXCIgd2lkdGg9XCIzMHB4XCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBWb2PDqiBwb2RlIHZlciBhcyBvcMOnw7VlcyBkbyBtZW51IGFvIGxhZG8gb3UgY29udGludWFyXG4gICAgICAgICAgICAgICAgYSBuYXZlZ2HDp8OjbyBwZWxhIHDDoWdpbmEgaW5pY2lhbC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgICA8QnRMaW5rIGhyZWY9e1wiLz9yZWdpYW89XCIrcmVnaWFvfSB2YWx1ZT1cIlDDoWdpbmEgaW5pY2lhbC5cIiBlc3RpbG89XCJuZW9uXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJbWcgXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9hc3NldHN2NS9pbWcvaGVyby1sYXJnZS00MDQucG5nXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMyM3B4XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MzZweFwiXG4gICAgICAgICAgICAgICAgYWx0PVwiUGFnaW5hIG7Do28gZW5jb250cmFkYVwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJQYWdpbmEgbsOjbyBlbmNvbnRyYWRhXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIkNsYXNzSW1nNDA0XCJcbiAgICAgICAgICAgICAgICBtb2RvPXttb2RvfT5cbiAgICAgICAgICAgICAgPC9JbWc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L0Rpdj5cbiAgICA8L0xheW91dD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgfVxuICAgICAgLmNvbHVuYTQwNHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZUhvbWVcblxuXG4vLzxIZWFkPlxuLy88dGl0bGU+SG9tZSBTSVRFIERPIFZBTEVOVEU8L3RpdGxlPlxuLy88RmF2SWNvbiAvPlxuLy88bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQmVtIHZpbmRvIGFvIFNJVEUgRE8gVkFMRU5URVwiIC8+XG4vLzxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCIvXCIgLz5cbi8vPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm9pLmNvbS5ici9cIi8+XG4vLzxsaW5rIHJlbD1cImFtcGh0bWxcIiBocmVmPVwiaHR0cHM6Ly93d3cub2kuY29tLmJyL2FtcC9cIi8+XG4vLzxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtbGlnaHRib3hcIiBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtbGlnaHRib3gtMC4xLmpzXCI+PC9zY3JpcHQ+XG4vLzxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtaWZyYW1lXCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWlmcmFtZS0wLjEuanNcIj48L3NjcmlwdD5cbi8vPC9IZWFkPiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/404.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (templateHome); //<Head>
//<title>Home SITE DO VALENTE</title>
//<FavIcon />
//<meta name="description" content="Bem vindo ao SITE DO VALENTE" />
//<link rel="canonical" href="/" />
//<link rel="canonical" href="https://www.oi.com.br/"/>
//<link rel="amphtml" href="https://www.oi.com.br/amp/"/>
//<script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
//<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
//</Head>

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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Foi402825%2FDocumentos%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js!./":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Foi402825%2FDocumentos%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_404_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/templates/404.js */ "./components/templates/404.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/util.js */ "./controller/util.js");


 //import { withAmp } from 'next/amp';

var RotaIndex = function RotaIndex(props) {
  console.log('+++++++++++++++++++++++++++++');
  console.log('Rota Erro 404');
  console.log(props.url.query.regiao); //var regiao = req.query.regiao
  //var regiao = Util.validaProps(props.regiao, "SP")

  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.url.query.regiao, "RJ"); //var modo = Util.validaProps(props.modo,"html")

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_templates_404_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modo: "html",
    regiao: regiao
  });
}; //export default withAmp(RotaIndex); // Usado para páginas AMP
//export default withAmp(RotaIndex, { hybrid: true }); // Usado para páginas hibridas


/* harmony default export */ __webpack_exports__["default"] = (RotaIndex); // Usado para páginas HTML

/***/ }),

/***/ 2:
/*!*******************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fhome%2Foi402825%2FDocumentos%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fhome%2Foi402825%2FDocumentos%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Foi402825%2FDocumentos%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.a636ccd22fd127ce3391.hot-update.js.map