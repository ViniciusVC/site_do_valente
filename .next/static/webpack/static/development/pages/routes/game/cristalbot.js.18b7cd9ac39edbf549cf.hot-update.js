webpackHotUpdate("static/development/pages/routes/game/cristalbot.js",{

/***/ "./components/moleculas/layout/cristalbot.js":
/*!***************************************************!*\
  !*** ./components/moleculas/layout/cristalbot.js ***!
  \***************************************************/
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
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");








var layoutCristalBot = function layoutCristalBot(props) {
  console.log('Rodando /layout/cristalbot.js GAME');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["validaProps"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["validaProps"](props.modo, "html");
  var titulo = _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["validaProps"](props.titulo, "Home");
  var categoria = _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["validaProps"](props.categoria, "Outros"); //Layout Luz verde

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-467196087 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2619129941", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"]()]]]) + " " + "CSSLayout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-467196087 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2619129941", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"]()]]]) + " " + "layoutManu esconder"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estilo: "luz"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    regiao: regiao,
    modo: modo,
    titulo: titulo,
    categoria: categoria
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-467196087 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2619129941", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"]()]]]) + " " + "layoutBody"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-467196087 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2619129941", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-467196087 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2619129941", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"]()]]]) + " " + "conteudo"
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estilo: "luz"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    regiao: regiao,
    modo: modo
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "467196087"
  }, ".CSSLayout.jsx-467196087{color:#ffffff;width:100%;margin :0px;padding :0px;padding-top :10px;}.layoutManu.jsx-467196087{width:25%;padding-left:2%;}.layoutBody.jsx-467196087{width:90%;padding-right:2%;}@media(max-width:1169px){.layoutManu.jsx-467196087{display :None;}.layoutBody.jsx-467196087{width:96%;padding-left:2%;}.conteudo.jsx-467196087{width:50%;}}@media(max-width:1169px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9jcmlzdGFsYm90LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHdUIsQUFPSixBQUlBLEFBS00sQUFHSixBQUlBLFVBZkcsQUFJQyxBQVFDLEFBSWpCLElBdkJVLEFBZ0JWLFdBZlksQ0FPZCxBQVlFLENBUkYsVUFWZSxhQUNLLGtCQUNwQiIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL21vbGVjdWxhcy9sYXlvdXQvY3Jpc3RhbGJvdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBEaXYgZnJvbSAnLi4vLi4vYXRvbXMvYXREaXYnXG5cbmltcG9ydCBMaXN0YWRlUm90YXMgZnJvbSAnLi4vbW9MaXN0YWRlUm90YXMvaW5kZXguanMnXG5pbXBvcnQgSmFuZWxhIGZyb20gJy4uL21vSmFuZWxhL2luZGV4LmpzJ1xuaW1wb3J0IEhlYWRlclNpZGVEb1ZhbGVudGUgZnJvbSAnLi4vbW9IZWFkZXJTaWRlRG9WYWxlbnRlL2luZGV4LmpzJ1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuXG5jb25zdCBsYXlvdXRDcmlzdGFsQm90ID0gcHJvcHMgPT4ge1xuICBjb25zb2xlLmxvZygnUm9kYW5kbyAvbGF5b3V0L2NyaXN0YWxib3QuanMgR0FNRScpO1xuICB2YXIgcmVnaWFvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5yZWdpYW8gLCBcIlJKXCIpO1xuICB2YXIgbW9kbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMubW9kbywgXCJodG1sXCIpO1xuICB2YXIgdGl0dWxvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy50aXR1bG8sIFwiSG9tZVwiKTtcbiAgdmFyIGNhdGVnb3JpYSA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuY2F0ZWdvcmlhLCBcIk91dHJvc1wiKTtcblxuICAvL0xheW91dCBMdXogdmVyZGVcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkNTU0xheW91dFwiPlxuICAgICAgPERpdiBkaXNwbGF5PVwianVzdGlmaWNhZG9cIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dE1hbnUgZXNjb25kZXJcIj5cblxuICAgICAgICAgICAgPEphbmVsYSBlc3RpbG89XCJsdXpcIj5cbiAgICAgICAgICAgICAgICA8TGlzdGFkZVJvdGFzIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfSB0aXR1bG89e3RpdHVsb30gY2F0ZWdvcmlhPXtjYXRlZ29yaWF9Lz5cbiAgICAgICAgICAgIDwvSmFuZWxhPlxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dEJvZHlcIj5cbiAgICAgICAgICAgIDxEaXYgZGlzcGxheT1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXVkb1wiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibHV6XCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlclNpZGVEb1ZhbGVudGUgcmVnaWFvPXtyZWdpYW99IG1vZG89e21vZG99Lz5cbiAgICAgICAgICAgICAgPC9KYW5lbGE+XG4gICAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICA8L2Rpdj4gICAgICBcbiAgICAgICAgXG4gICAgICA8L0Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5DU1NMYXlvdXR7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBtYXJnaW4gOiAwcHg7XG4gICAgICAgIHBhZGRpbmcgOiAwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wIDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5sYXlvdXRNYW51e1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MiU7XG4gICAgICB9XG4gICAgICAubGF5b3V0Qm9keXtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDoyJTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDExNjlweCkge1xuICAgICAgICAubGF5b3V0TWFudXtcbiAgICAgICAgICBkaXNwbGF5IDogTm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubGF5b3V0Qm9keXtcbiAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDoyJTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGV1ZG97XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhKG1heC13aWR0aDogMTE2OXB4KSB7XG4gICAgICAgIFxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICR7VXRpbC5mb250ZXNDU1MxKCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1MyKCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1MzKCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1M0KCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1M1KCl9XG4gICAgICAgIGJvZHl7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZDUxMTk7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9hc3NldHN2NS9pbWcvY3Jpc3RhbGJvdC9mdW5kb3BhZ2luYWNyaXN0YWxib3QuanBnXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICBjb2xvcjogIzEwZWNmNTtcbiAgICAgICAgICBmb250LWZhbWlseTogU2ltcGxvbkJQLVJlZ3VsYXIsIHNhbnMtc2VyaWY7ICAgICAgIFxuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dENyaXN0YWxCb3RcblxuXG4vKlxuIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGFcIj48L2Rpdj5cbiAgICAgIDxEaXYgZGlzcGxheT1cImp1c3RpZmljYWRvXCI+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhXCI+PC9kaXY+XG5cbiAgICAgICAgPERpdiBkaXNwbGF5PVwianVzdGlmaWNhZG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGlnb0luZGV4TGlzdGFkZVJvdGFzIGVzY29uZGVyXCI+XG4gICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cImx1elwiPlxuICAgICAgICAgICAgICBNZW51XG4gICAgICAgICAgICAgIDxMaXN0YWRlUm90YXMgcmVnaWFvPXtyZWdpYW99IG1vZG89e21vZG99IHRpdHVsbz17dGl0dWxvfSBjYXRlZ29yaWE9e2NhdGVnb3JpYX0vPlxuICAgICAgICAgICAgPC9KYW5lbGE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkYSBlc2NvbmRlclwiPjwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8RGl2IGRpc3BsYXk9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEphbmVsYSBlc3RpbG89XCJsdXpcIj5cbiAgICAgICAgICAgICAgICBIZWFkZXJcbiAgICAgICAgICAgICAgICA8SGVhZGVyU2lkZURvVmFsZW50ZSByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30vPlxuICAgICAgICAgICAgICA8L0phbmVsYT5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhXCI+PC9kaXY+XG4gICAgICAgICAgICAgIFxuICBcbiAgICAgICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cImx1elwiPlxuICAgICAgICAgICAgICAgICAgQm9keVxuICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvSmFuZWxhPlxuICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibHV6XCI+XG4gICAgICAgICAgICAgICAgRm90ZXJcbiAgICAgICAgICAgICAgICA8SGVhZGVyU2lkZURvVmFsZW50ZSByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30vPlxuICAgICAgICAgICAgICA8L0phbmVsYT5cblxuICAgICAgICAgICAgPC9EaXY+ICAgICAgXG5cbiAgICAgICAgICA8L0Rpdj5cblxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkYVwiPjwvZGl2PlxuICAgICAgICAqLyJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/layout/cristalbot.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2619129941",
    dynamic: [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"]()]
  }, "".concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"](), " body{margin:0px;padding:0px;background-color:#8d5119;background-image:url(\"/static/assetsv5/img/cristalbot/fundopaginacristalbot.jpg\");background-repeat:repeat-x;color:#10ecf5;font-family:SimplonBP-Regular,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9jcmlzdGFsYm90LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFeUIsQUFRc0IsV0FDQyxZQUNhLHlCQUN5RCxrRkFDdkQsMkJBQ2IsY0FDNEIseUNBQzVDIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9jcmlzdGFsYm90LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERpdiBmcm9tICcuLi8uLi9hdG9tcy9hdERpdidcblxuaW1wb3J0IExpc3RhZGVSb3RhcyBmcm9tICcuLi9tb0xpc3RhZGVSb3Rhcy9pbmRleC5qcydcbmltcG9ydCBKYW5lbGEgZnJvbSAnLi4vbW9KYW5lbGEvaW5kZXguanMnXG5pbXBvcnQgSGVhZGVyU2lkZURvVmFsZW50ZSBmcm9tICcuLi9tb0hlYWRlclNpZGVEb1ZhbGVudGUvaW5kZXguanMnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IGxheW91dENyaXN0YWxCb3QgPSBwcm9wcyA9PiB7XG4gIGNvbnNvbGUubG9nKCdSb2RhbmRvIC9sYXlvdXQvY3Jpc3RhbGJvdC5qcyBHQU1FJyk7XG4gIHZhciByZWdpYW8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnJlZ2lhbyAsIFwiUkpcIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLCBcImh0bWxcIik7XG4gIHZhciB0aXR1bG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnRpdHVsbywgXCJIb21lXCIpO1xuICB2YXIgY2F0ZWdvcmlhID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5jYXRlZ29yaWEsIFwiT3V0cm9zXCIpO1xuXG4gIC8vTGF5b3V0IEx1eiB2ZXJkZVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ1NTTGF5b3V0XCI+XG4gICAgICA8RGl2IGRpc3BsYXk9XCJqdXN0aWZpY2Fkb1wiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0TWFudSBlc2NvbmRlclwiPlxuXG4gICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cImx1elwiPlxuICAgICAgICAgICAgICAgIDxMaXN0YWRlUm90YXMgcmVnaWFvPXtyZWdpYW99IG1vZG89e21vZG99IHRpdHVsbz17dGl0dWxvfSBjYXRlZ29yaWE9e2NhdGVnb3JpYX0vPlxuICAgICAgICAgICAgPC9KYW5lbGE+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0Qm9keVwiPlxuICAgICAgICAgICAgPERpdiBkaXNwbGF5PVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRldWRvXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEphbmVsYSBlc3RpbG89XCJsdXpcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyU2lkZURvVmFsZW50ZSByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30vPlxuICAgICAgICAgICAgICA8L0phbmVsYT5cbiAgICAgICAgICAgIDwvRGl2PlxuICAgICAgICAgIDwvZGl2PiAgICAgIFxuICAgICAgICBcbiAgICAgIDwvRGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLkNTU0xheW91dHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIG1hcmdpbiA6IDBweDtcbiAgICAgICAgcGFkZGluZyA6IDBweDtcbiAgICAgICAgcGFkZGluZy10b3AgOiAxMHB4O1xuICAgICAgfVxuICAgICAgLmxheW91dE1hbnV7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDoyJTtcbiAgICAgIH1cbiAgICAgIC5sYXlvdXRCb2R5e1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OjIlO1xuICAgICAgfVxuICAgICAgQG1lZGlhKG1heC13aWR0aDogMTE2OXB4KSB7XG4gICAgICAgIC5sYXlvdXRNYW51e1xuICAgICAgICAgIGRpc3BsYXkgOiBOb25lO1xuICAgICAgICB9XG4gICAgICAgIC5sYXlvdXRCb2R5e1xuICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OjIlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZXVkb3tcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMTY5cHgpIHtcbiAgICAgICAgXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzEoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzIoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzMoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzQoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzUoKX1cbiAgICAgICAgYm9keXtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhkNTExOTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9jcmlzdGFsYm90L2Z1bmRvcGFnaW5hY3Jpc3RhbGJvdC5qcGdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgIGNvbG9yOiAjMTBlY2Y1O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBTaW1wbG9uQlAtUmVndWxhciwgc2Fucy1zZXJpZjsgICAgICAgXG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0Q3Jpc3RhbEJvdFxuXG5cbi8qXG4gPGRpdiBjbGFzc05hbWU9XCJib3JkYVwiPjwvZGl2PlxuICAgICAgPERpdiBkaXNwbGF5PVwianVzdGlmaWNhZG9cIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGFcIj48L2Rpdj5cblxuICAgICAgICA8RGl2IGRpc3BsYXk9XCJqdXN0aWZpY2Fkb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kaWdvSW5kZXhMaXN0YWRlUm90YXMgZXNjb25kZXJcIj5cbiAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibHV6XCI+XG4gICAgICAgICAgICAgIE1lbnVcbiAgICAgICAgICAgICAgPExpc3RhZGVSb3RhcyByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30gdGl0dWxvPXt0aXR1bG99IGNhdGVnb3JpYT17Y2F0ZWdvcmlhfS8+XG4gICAgICAgICAgICA8L0phbmVsYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhIGVzY29uZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxEaXYgZGlzcGxheT1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cImx1elwiPlxuICAgICAgICAgICAgICAgIEhlYWRlclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTaWRlRG9WYWxlbnRlIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfS8+XG4gICAgICAgICAgICAgIDwvSmFuZWxhPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgXG4gIFxuICAgICAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibHV6XCI+XG4gICAgICAgICAgICAgICAgICBCb2R5XG4gICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9KYW5lbGE+XG4gIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkYVwiPjwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEphbmVsYSBlc3RpbG89XCJsdXpcIj5cbiAgICAgICAgICAgICAgICBGb3RlclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTaWRlRG9WYWxlbnRlIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfS8+XG4gICAgICAgICAgICAgIDwvSmFuZWxhPlxuXG4gICAgICAgICAgICA8L0Rpdj4gICAgICBcblxuICAgICAgICAgIDwvRGl2PlxuXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhXCI+PC9kaXY+XG4gICAgICAgICovIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/layout/cristalbot.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (layoutCristalBot);
/*
 <div className="borda"></div>
      <Div display="justificado">
        
        <div className="borda"></div>

        <Div display="justificado">
          <div className="codigoIndexListadeRotas esconder">
            <Janela estilo="luz">
              Menu
              <ListadeRotas regiao={regiao} modo={modo} titulo={titulo} categoria={categoria}/>
            </Janela>
          </div>
          
          <div className="borda esconder"></div>
            
            <Div display="vertical">
              
              <Janela estilo="luz">
                Header
                <HeaderSideDoValente regiao={regiao} modo={modo}/>
              </Janela>

              <div className="borda"></div>
              
  
                <Janela estilo="luz">
                  Body
                  {props.children}
                </Janela>
  
              
              <div className="borda"></div>
              
              <Janela estilo="luz">
                Foter
                <HeaderSideDoValente regiao={regiao} modo={modo}/>
              </Janela>

            </Div>      

          </Div>

        
        <div className="borda"></div>
        */

/***/ })

})
//# sourceMappingURL=cristalbot.js.18b7cd9ac39edbf549cf.hot-update.js.map