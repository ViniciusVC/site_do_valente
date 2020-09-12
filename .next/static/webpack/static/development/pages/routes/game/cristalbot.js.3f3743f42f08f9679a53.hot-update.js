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
/* harmony import */ var _mofooterSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mofooterSideDoValente/index.js */ "./components/moleculas/mofooterSideDoValente/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");








var layoutCristalBot = function layoutCristalBot(props) {
  console.log('Rodando /layout/cristalbot.js GAME');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["validaProps"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["validaProps"](props.modo, "html");
  var titulo = _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["validaProps"](props.titulo, "Home");
  var categoria = _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["validaProps"](props.categoria, "Outros"); //Layout Luz verde

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-697027707 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4144199036", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"]()]]]) + " " + "CSSLayout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-697027707 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4144199036", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"]()]]]) + " " + "layoutManu esconder"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estilo: "luz"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    regiao: regiao,
    modo: modo,
    titulo: titulo,
    categoria: categoria
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-697027707 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4144199036", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"]()]]]) + " " + "layoutBody"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-697027707 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4144199036", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"]()]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-697027707 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4144199036", [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"]()]]]) + " " + "conteudo"
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estilo: "luz"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mofooterSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    regiao: regiao,
    modo: modo
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "697027707"
  }, ".CSSLayout.jsx-697027707{color:#ffffff;width:100%;margin :0px;padding :0px;padding-top :10px;}.layoutManu.jsx-697027707{width:25%;padding-left:2%;}.layoutBody.jsx-697027707{width:70%;padding-right:2%;}@media(max-width:1169px){.layoutManu.jsx-697027707{display :None;}.layoutBody.jsx-697027707{width:100%;padding-left:5px;}}@media(max-width:1169px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9jcmlzdGFsYm90LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDa0IsQUFHdUIsQUFPSixBQUlBLEFBS00sQUFHSCxVQVhFLEFBSUMsQ0FRRSxHQW5CUixBQWdCVixXQWZZLENBT2QsQ0FJQSxDQVFFLFNBbEJhLGFBQ0ssa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9jcmlzdGFsYm90LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERpdiBmcm9tICcuLi8uLi9hdG9tcy9hdERpdidcblxuaW1wb3J0IExpc3RhZGVSb3RhcyBmcm9tICcuLi9tb0xpc3RhZGVSb3Rhcy9pbmRleC5qcydcbmltcG9ydCBKYW5lbGEgZnJvbSAnLi4vbW9KYW5lbGEvaW5kZXguanMnXG5pbXBvcnQgRm9vdGVyU2lkZURvVmFsZW50ZSBmcm9tICcuLi9tb2Zvb3RlclNpZGVEb1ZhbGVudGUvaW5kZXguanMnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IGxheW91dENyaXN0YWxCb3QgPSBwcm9wcyA9PiB7XG4gIGNvbnNvbGUubG9nKCdSb2RhbmRvIC9sYXlvdXQvY3Jpc3RhbGJvdC5qcyBHQU1FJyk7XG4gIHZhciByZWdpYW8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnJlZ2lhbyAsIFwiUkpcIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLCBcImh0bWxcIik7XG4gIHZhciB0aXR1bG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnRpdHVsbywgXCJIb21lXCIpO1xuICB2YXIgY2F0ZWdvcmlhID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5jYXRlZ29yaWEsIFwiT3V0cm9zXCIpO1xuXG4gIC8vTGF5b3V0IEx1eiB2ZXJkZVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ1NTTGF5b3V0XCI+XG4gICAgICA8RGl2IGRpc3BsYXk9XCJqdXN0aWZpY2Fkb1wiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0TWFudSBlc2NvbmRlclwiPlxuICAgICAgICAgICAgPEphbmVsYSBlc3RpbG89XCJsdXpcIj5cbiAgICAgICAgICAgICAgICA8TGlzdGFkZVJvdGFzIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfSB0aXR1bG89e3RpdHVsb30gY2F0ZWdvcmlhPXtjYXRlZ29yaWF9Lz5cbiAgICAgICAgICAgIDwvSmFuZWxhPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRCb2R5XCI+XG4gICAgICAgICAgICA8RGl2IGRpc3BsYXk9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV1ZG9cIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cImx1elwiPlxuICAgICAgICAgICAgICAgIDxGb290ZXJTaWRlRG9WYWxlbnRlIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfS8+XG4gICAgICAgICAgICAgIDwvSmFuZWxhPlxuICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgPC9kaXY+ICAgICAgXG4gICAgICAgIFxuICAgICAgPC9EaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuQ1NTTGF5b3V0e1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgbWFyZ2luIDogMHB4O1xuICAgICAgICBwYWRkaW5nIDogMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcCA6IDEwcHg7XG4gICAgICB9XG4gICAgICAubGF5b3V0TWFudXtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjIlO1xuICAgICAgfVxuICAgICAgLmxheW91dEJvZHl7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MiU7XG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMTY5cHgpIHtcbiAgICAgICAgLmxheW91dE1hbnV7XG4gICAgICAgICAgZGlzcGxheSA6IE5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmxheW91dEJvZHl7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OjVweDtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMTY5cHgpIHtcbiAgICAgICAgXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzEoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzIoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzMoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzQoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzUoKX1cbiAgICAgICAgYm9keXtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhkNTExOTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9jcmlzdGFsYm90L2Z1bmRvcGFnaW5hY3Jpc3RhbGJvdC5qcGdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgIGNvbG9yOiAjMTBlY2Y1O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBTaW1wbG9uQlAtUmVndWxhciwgc2Fucy1zZXJpZjsgICAgICAgXG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0Q3Jpc3RhbEJvdFxuXG5cbi8qXG4gPGRpdiBjbGFzc05hbWU9XCJib3JkYVwiPjwvZGl2PlxuICAgICAgPERpdiBkaXNwbGF5PVwianVzdGlmaWNhZG9cIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGFcIj48L2Rpdj5cblxuICAgICAgICA8RGl2IGRpc3BsYXk9XCJqdXN0aWZpY2Fkb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kaWdvSW5kZXhMaXN0YWRlUm90YXMgZXNjb25kZXJcIj5cbiAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibHV6XCI+XG4gICAgICAgICAgICAgIE1lbnVcbiAgICAgICAgICAgICAgPExpc3RhZGVSb3RhcyByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30gdGl0dWxvPXt0aXR1bG99IGNhdGVnb3JpYT17Y2F0ZWdvcmlhfS8+XG4gICAgICAgICAgICA8L0phbmVsYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhIGVzY29uZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxEaXYgZGlzcGxheT1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cImx1elwiPlxuICAgICAgICAgICAgICAgIEhlYWRlclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTaWRlRG9WYWxlbnRlIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfS8+XG4gICAgICAgICAgICAgIDwvSmFuZWxhPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgXG4gIFxuICAgICAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibHV6XCI+XG4gICAgICAgICAgICAgICAgICBCb2R5XG4gICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9KYW5lbGE+XG4gIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkYVwiPjwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEphbmVsYSBlc3RpbG89XCJsdXpcIj5cbiAgICAgICAgICAgICAgICBGb3RlclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTaWRlRG9WYWxlbnRlIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfS8+XG4gICAgICAgICAgICAgIDwvSmFuZWxhPlxuXG4gICAgICAgICAgICA8L0Rpdj4gICAgICBcblxuICAgICAgICAgIDwvRGl2PlxuXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhXCI+PC9kaXY+XG4gICAgICAgICovIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/layout/cristalbot.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4144199036",
    dynamic: [_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"]()]
  }, "".concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS1"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS2"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS3"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS4"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_6__["fontesCSS5"](), " body{margin:0px;padding:0px;background-color:#8d5119;background-image:url(\"/static/assetsv5/img/cristalbot/fundopaginacristalbot.jpg\");background-repeat:repeat-x;color:#10ecf5;font-family:SimplonBP-Regular,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9jcmlzdGFsYm90LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFeUIsQUFRc0IsV0FDQyxZQUNhLHlCQUN5RCxrRkFDdkQsMkJBQ2IsY0FDNEIseUNBQzVDIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9jcmlzdGFsYm90LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERpdiBmcm9tICcuLi8uLi9hdG9tcy9hdERpdidcblxuaW1wb3J0IExpc3RhZGVSb3RhcyBmcm9tICcuLi9tb0xpc3RhZGVSb3Rhcy9pbmRleC5qcydcbmltcG9ydCBKYW5lbGEgZnJvbSAnLi4vbW9KYW5lbGEvaW5kZXguanMnXG5pbXBvcnQgRm9vdGVyU2lkZURvVmFsZW50ZSBmcm9tICcuLi9tb2Zvb3RlclNpZGVEb1ZhbGVudGUvaW5kZXguanMnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IGxheW91dENyaXN0YWxCb3QgPSBwcm9wcyA9PiB7XG4gIGNvbnNvbGUubG9nKCdSb2RhbmRvIC9sYXlvdXQvY3Jpc3RhbGJvdC5qcyBHQU1FJyk7XG4gIHZhciByZWdpYW8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnJlZ2lhbyAsIFwiUkpcIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLCBcImh0bWxcIik7XG4gIHZhciB0aXR1bG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnRpdHVsbywgXCJIb21lXCIpO1xuICB2YXIgY2F0ZWdvcmlhID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5jYXRlZ29yaWEsIFwiT3V0cm9zXCIpO1xuXG4gIC8vTGF5b3V0IEx1eiB2ZXJkZVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ1NTTGF5b3V0XCI+XG4gICAgICA8RGl2IGRpc3BsYXk9XCJqdXN0aWZpY2Fkb1wiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0TWFudSBlc2NvbmRlclwiPlxuICAgICAgICAgICAgPEphbmVsYSBlc3RpbG89XCJsdXpcIj5cbiAgICAgICAgICAgICAgICA8TGlzdGFkZVJvdGFzIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfSB0aXR1bG89e3RpdHVsb30gY2F0ZWdvcmlhPXtjYXRlZ29yaWF9Lz5cbiAgICAgICAgICAgIDwvSmFuZWxhPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRCb2R5XCI+XG4gICAgICAgICAgICA8RGl2IGRpc3BsYXk9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV1ZG9cIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cImx1elwiPlxuICAgICAgICAgICAgICAgIDxGb290ZXJTaWRlRG9WYWxlbnRlIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfS8+XG4gICAgICAgICAgICAgIDwvSmFuZWxhPlxuICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgPC9kaXY+ICAgICAgXG4gICAgICAgIFxuICAgICAgPC9EaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuQ1NTTGF5b3V0e1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgbWFyZ2luIDogMHB4O1xuICAgICAgICBwYWRkaW5nIDogMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcCA6IDEwcHg7XG4gICAgICB9XG4gICAgICAubGF5b3V0TWFudXtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjIlO1xuICAgICAgfVxuICAgICAgLmxheW91dEJvZHl7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MiU7XG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMTY5cHgpIHtcbiAgICAgICAgLmxheW91dE1hbnV7XG4gICAgICAgICAgZGlzcGxheSA6IE5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmxheW91dEJvZHl7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OjVweDtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMTY5cHgpIHtcbiAgICAgICAgXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzEoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzIoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzMoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzQoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzUoKX1cbiAgICAgICAgYm9keXtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhkNTExOTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9jcmlzdGFsYm90L2Z1bmRvcGFnaW5hY3Jpc3RhbGJvdC5qcGdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgIGNvbG9yOiAjMTBlY2Y1O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBTaW1wbG9uQlAtUmVndWxhciwgc2Fucy1zZXJpZjsgICAgICAgXG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0Q3Jpc3RhbEJvdFxuXG5cbi8qXG4gPGRpdiBjbGFzc05hbWU9XCJib3JkYVwiPjwvZGl2PlxuICAgICAgPERpdiBkaXNwbGF5PVwianVzdGlmaWNhZG9cIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGFcIj48L2Rpdj5cblxuICAgICAgICA8RGl2IGRpc3BsYXk9XCJqdXN0aWZpY2Fkb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kaWdvSW5kZXhMaXN0YWRlUm90YXMgZXNjb25kZXJcIj5cbiAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibHV6XCI+XG4gICAgICAgICAgICAgIE1lbnVcbiAgICAgICAgICAgICAgPExpc3RhZGVSb3RhcyByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30gdGl0dWxvPXt0aXR1bG99IGNhdGVnb3JpYT17Y2F0ZWdvcmlhfS8+XG4gICAgICAgICAgICA8L0phbmVsYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhIGVzY29uZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxEaXYgZGlzcGxheT1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cImx1elwiPlxuICAgICAgICAgICAgICAgIEhlYWRlclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTaWRlRG9WYWxlbnRlIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfS8+XG4gICAgICAgICAgICAgIDwvSmFuZWxhPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgXG4gIFxuICAgICAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibHV6XCI+XG4gICAgICAgICAgICAgICAgICBCb2R5XG4gICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9KYW5lbGE+XG4gIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkYVwiPjwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEphbmVsYSBlc3RpbG89XCJsdXpcIj5cbiAgICAgICAgICAgICAgICBGb3RlclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTaWRlRG9WYWxlbnRlIHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfS8+XG4gICAgICAgICAgICAgIDwvSmFuZWxhPlxuXG4gICAgICAgICAgICA8L0Rpdj4gICAgICBcblxuICAgICAgICAgIDwvRGl2PlxuXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRhXCI+PC9kaXY+XG4gICAgICAgICovIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/layout/cristalbot.js */")));
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

/***/ }),

/***/ "./components/moleculas/moHeaderSideDoValente/index.js":
false

})
//# sourceMappingURL=cristalbot.js.3f3743f42f08f9679a53.hot-update.js.map