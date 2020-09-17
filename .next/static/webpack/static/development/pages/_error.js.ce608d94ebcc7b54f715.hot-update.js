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
    className: "jsx-3141894112 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3253468774", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]]) + " " + "CSSLayout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atGTM__WEBPACK_IMPORTED_MODULE_8__["default"], {
    position: "body",
    modo: modo,
    codGTM: "UA-143307429-1"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3141894112 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3253468774", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]]) + " " + "layoutManu esconder"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estilo: "luz"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    regiao: regiao,
    modo: modo,
    titulo: titulo,
    categoria: categoria
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3141894112 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3253468774", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]]) + " " + "layoutBody"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estilo: "luz"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    regiao: regiao,
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estilo: "luz"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3141894112 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3253468774", [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]]]) + " " + "conteudo"
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moJanela_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    estilo: "luz"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mofooterSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    regiao: regiao,
    modo: modo
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3141894112"
  }, ".CSSLayout.jsx-3141894112{color:#ffffff;width:100%;margin :0px;padding :0px;padding-top :10px;}.layoutManu.jsx-3141894112{width:25%;padding-left:2%;}.layoutBody.jsx-3141894112{width:70%;padding-right:2%;}@media(max-width:1169px){.layoutManu.jsx-3141894112{display :None;}.layoutBody.jsx-3141894112{width:96%;padding-left:2%;}}@media(max-width:1169px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q2tCLEFBR3VCLEFBT0osQUFJQSxBQUtNLEFBR0osVUFYRyxBQUlDLEFBUUMsSUFuQlAsQUFnQlYsV0FmWSxDQU9kLEFBWUUsQ0FSRixVQVZlLGFBQ0ssa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBEaXYgZnJvbSAnLi4vLi4vYXRvbXMvYXREaXYnXG5cbmltcG9ydCBMaXN0YWRlUm90YXMgZnJvbSAnLi4vbW9MaXN0YWRlUm90YXMvaW5kZXguanMnXG5pbXBvcnQgSmFuZWxhIGZyb20gJy4uL21vSmFuZWxhL2luZGV4LmpzJ1xuaW1wb3J0IEhlYWRlclNpZGVEb1ZhbGVudGUgZnJvbSAnLi4vbW9IZWFkZXJTaWRlRG9WYWxlbnRlL2luZGV4LmpzJ1xuaW1wb3J0IEZvb3RlclNpZGVEb1ZhbGVudGUgZnJvbSAnLi4vbW9mb290ZXJTaWRlRG9WYWxlbnRlL2luZGV4LmpzJ1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9hdG9tcy9hdEdUTSc7XG5cbmNvbnN0IGxheW91dCA9IHByb3BzID0+IHtcbiAgY29uc29sZS5sb2coJ1JvZGFuZG8gL2xheW91dC5qcyBMdXogVmVyZGUnKTtcbiAgdmFyIHJlZ2lhbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMucmVnaWFvICwgXCJSSlwiKTtcbiAgdmFyIG1vZG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLm1vZG8sIFwiaHRtbFwiKTtcbiAgdmFyIHRpdHVsbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMudGl0dWxvLCBcIkhvbWVcIik7XG4gIHZhciBjYXRlZ29yaWEgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLmNhdGVnb3JpYSwgXCJPdXRyb3NcIik7XG5cbiAgLy9MYXlvdXQgTHV6IHZlcmRlXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDU1NMYXlvdXRcIj5cbiAgICAgIDxHVE0gcG9zaXRpb249XCJib2R5XCIgbW9kbz17bW9kb30gY29kR1RNPVwiVUEtMTQzMzA3NDI5LTFcIiAvPlxuICAgICAgPERpdiBkaXNwbGF5PVwianVzdGlmaWNhZG9cIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dE1hbnUgZXNjb25kZXJcIj5cbiAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibHV6XCI+XG4gICAgICAgICAgICAgICAgPExpc3RhZGVSb3RhcyByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30gdGl0dWxvPXt0aXR1bG99IGNhdGVnb3JpYT17Y2F0ZWdvcmlhfS8+XG4gICAgICAgICAgICA8L0phbmVsYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0Qm9keVwiPlxuICAgICAgICAgICAgPERpdiBkaXNwbGF5PVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgPEphbmVsYSBlc3RpbG89XCJsdXpcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyU2lkZURvVmFsZW50ZSByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30vPlxuICAgICAgICAgICAgICA8L0phbmVsYT5cbiAgICAgICAgICAgICAgPEphbmVsYSBlc3RpbG89XCJsdXpcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRldWRvXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0phbmVsYT5cbiAgICAgICAgICAgICAgPEphbmVsYSBlc3RpbG89XCJsdXpcIj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyU2lkZURvVmFsZW50ZSByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30vPlxuICAgICAgICAgICAgICA8L0phbmVsYT5cbiAgICAgICAgICAgIDwvRGl2PlxuICAgICAgICAgIDwvZGl2PiAgICAgIFxuICAgICAgICBcbiAgICAgIDwvRGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLkNTU0xheW91dHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIG1hcmdpbiA6IDBweDtcbiAgICAgICAgcGFkZGluZyA6IDBweDtcbiAgICAgICAgcGFkZGluZy10b3AgOiAxMHB4O1xuICAgICAgfVxuICAgICAgLmxheW91dE1hbnV7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDoyJTtcbiAgICAgIH1cbiAgICAgIC5sYXlvdXRCb2R5e1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OjIlO1xuICAgICAgfVxuICAgICAgQG1lZGlhKG1heC13aWR0aDogMTE2OXB4KSB7XG4gICAgICAgIC5sYXlvdXRNYW51e1xuICAgICAgICAgIGRpc3BsYXkgOiBOb25lO1xuICAgICAgICB9XG4gICAgICAgIC5sYXlvdXRCb2R5e1xuICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OjIlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMTY5cHgpIHtcbiAgICAgICAgXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzEoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzIoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzMoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzQoKX1cbiAgICAgICAgJHtVdGlsLmZvbnRlc0NTUzUoKX1cbiAgICAgICAgYm9keXtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjEyODtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9sYXlvdXRfbHV6L2Z1bmRvMDQuanBnXCIpO1xuICAgICAgICAgIGNvbG9yOiAjMTBlY2Y1O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBTaW1wbG9uQlAtUmVndWxhciwgc2Fucy1zZXJpZjsgICAgICAgXG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0XG5cbi8vTsOjbyBlc3F1ZcOnYSBkZSBkbyBHVE0gZG8gYm9keS4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/layout/index.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3253468774",
    dynamic: [_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"]()]
  }, "".concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS1"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS2"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS3"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS4"](), " ").concat(_controller_util_js__WEBPACK_IMPORTED_MODULE_7__["fontesCSS5"](), " body{margin:0px;padding:0px;background-color:#002128;background-image:url(\"/static/assetsv5/img/layout_luz/fundo04.jpg\");color:#10ecf5;font-family:SimplonBP-Regular,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL2xheW91dC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRXlCLEFBUXNCLFdBQ0MsWUFDYSx5QkFDMkMsb0VBQ3RELGNBQzRCLHlDQUM1QyIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL21vbGVjdWxhcy9sYXlvdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGl2IGZyb20gJy4uLy4uL2F0b21zL2F0RGl2J1xuXG5pbXBvcnQgTGlzdGFkZVJvdGFzIGZyb20gJy4uL21vTGlzdGFkZVJvdGFzL2luZGV4LmpzJ1xuaW1wb3J0IEphbmVsYSBmcm9tICcuLi9tb0phbmVsYS9pbmRleC5qcydcbmltcG9ydCBIZWFkZXJTaWRlRG9WYWxlbnRlIGZyb20gJy4uL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcydcbmltcG9ydCBGb290ZXJTaWRlRG9WYWxlbnRlIGZyb20gJy4uL21vZm9vdGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcydcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi4vLi4vLi4vY29udHJvbGxlci91dGlsLmpzJztcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vYXRvbXMvYXRHVE0nO1xuXG5jb25zdCBsYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnNvbGUubG9nKCdSb2RhbmRvIC9sYXlvdXQuanMgTHV6IFZlcmRlJyk7XG4gIHZhciByZWdpYW8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnJlZ2lhbyAsIFwiUkpcIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLCBcImh0bWxcIik7XG4gIHZhciB0aXR1bG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnRpdHVsbywgXCJIb21lXCIpO1xuICB2YXIgY2F0ZWdvcmlhID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5jYXRlZ29yaWEsIFwiT3V0cm9zXCIpO1xuXG4gIC8vTGF5b3V0IEx1eiB2ZXJkZVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ1NTTGF5b3V0XCI+XG4gICAgICA8R1RNIHBvc2l0aW9uPVwiYm9keVwiIG1vZG89e21vZG99IGNvZEdUTT1cIlVBLTE0MzMwNzQyOS0xXCIgLz5cbiAgICAgIDxEaXYgZGlzcGxheT1cImp1c3RpZmljYWRvXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRNYW51IGVzY29uZGVyXCI+XG4gICAgICAgICAgICA8SmFuZWxhIGVzdGlsbz1cImx1elwiPlxuICAgICAgICAgICAgICAgIDxMaXN0YWRlUm90YXMgcmVnaWFvPXtyZWdpYW99IG1vZG89e21vZG99IHRpdHVsbz17dGl0dWxvfSBjYXRlZ29yaWE9e2NhdGVnb3JpYX0vPlxuICAgICAgICAgICAgPC9KYW5lbGE+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dEJvZHlcIj5cbiAgICAgICAgICAgIDxEaXYgZGlzcGxheT1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibHV6XCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlclNpZGVEb1ZhbGVudGUgcmVnaWFvPXtyZWdpYW99IG1vZG89e21vZG99Lz5cbiAgICAgICAgICAgICAgPC9KYW5lbGE+XG4gICAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibHV6XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXVkb1wiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9KYW5lbGE+XG4gICAgICAgICAgICAgIDxKYW5lbGEgZXN0aWxvPVwibHV6XCI+XG4gICAgICAgICAgICAgICAgPEZvb3RlclNpZGVEb1ZhbGVudGUgcmVnaWFvPXtyZWdpYW99IG1vZG89e21vZG99Lz5cbiAgICAgICAgICAgICAgPC9KYW5lbGE+XG4gICAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICA8L2Rpdj4gICAgICBcbiAgICAgICAgXG4gICAgICA8L0Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5DU1NMYXlvdXR7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBtYXJnaW4gOiAwcHg7XG4gICAgICAgIHBhZGRpbmcgOiAwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wIDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5sYXlvdXRNYW51e1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MiU7XG4gICAgICB9XG4gICAgICAubGF5b3V0Qm9keXtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDoyJTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDExNjlweCkge1xuICAgICAgICAubGF5b3V0TWFudXtcbiAgICAgICAgICBkaXNwbGF5IDogTm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubGF5b3V0Qm9keXtcbiAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDoyJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhKG1heC13aWR0aDogMTE2OXB4KSB7XG4gICAgICAgIFxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICR7VXRpbC5mb250ZXNDU1MxKCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1MyKCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1MzKCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1M0KCl9XG4gICAgICAgICR7VXRpbC5mb250ZXNDU1M1KCl9XG4gICAgICAgIGJvZHl7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDIxMjg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9hc3NldHN2NS9pbWcvbGF5b3V0X2x1ei9mdW5kbzA0LmpwZ1wiKTtcbiAgICAgICAgICBjb2xvcjogIzEwZWNmNTtcbiAgICAgICAgICBmb250LWZhbWlseTogU2ltcGxvbkJQLVJlZ3VsYXIsIHNhbnMtc2VyaWY7ICAgICAgIFxuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dFxuXG4vL07Do28gZXNxdWXDp2EgZGUgZG8gR1RNIGRvIGJvZHkuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/layout/index.js */")));
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
    className: "jsx-3487925225" + " " + "logo headerpc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: StringModo + "/?regiao=" + regiao,
    className: "jsx-3487925225"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/logo_vvc.png",
    width: "100px",
    height: "100px",
    alt: "Logo Site Valente",
    title: "Logo Site Valente",
    class: "LogoSiteValente",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3487925225" + " " + "TitulodoSite headerpc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3487925225"
  }, "VVC Estudio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3487925225" + " " + "heaermob"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moMenuMobile01_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    modo: modo
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3487925225"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3487925225"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moRegiao_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    modo: modo,
    regiao: regiao
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3487925225"
  }, ".logo.jsx-3487925225{margin:0px;padding-top:10px;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:slideinSombra-jsx-3487925225;animation-name:slideinSombra-jsx-3487925225;}@-webkit-keyframes slideinSombra-jsx-3487925225{0%{opacity:0.0;}50%{opacity:0.5;}100%{opacity:1.0;}}@keyframes slideinSombra-jsx-3487925225{0%{opacity:0.0;}50%{opacity:0.5;}100%{opacity:1.0;}}.TitulodoSite.jsx-3487925225{color:#10ecf5;padding-top:15px;font-size:20px;font-family:sans-serif;text-align:center;font-size:60px;}@media(min-width:1169px){.heaermob.jsx-3487925225{display :None;}}@media(max-width:1169px){.headerpc.jsx-3487925225{display :None;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2tCLEFBR21CLEFBUU0sQUFHQSxBQUdBLEFBSUYsQUFVRSxBQU1BLFdBakNDLENBUWpCLEFBR0EsQUFHQSxFQUlpQixBQVVqQixBQU1BLGNBaENzQixHQWlCUCxlQUNRLHVCQUNMLFdBbEJXLE9BbUJkLGVBQ2pCLDBFQW5CQSIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL21vbGVjdWxhcy9tb0hlYWRlclNpZGVEb1ZhbGVudGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1nIGZyb20gJy4uLy4uL2F0b21zL2F0SW1nL2luZGV4LmpzJztcbmltcG9ydCBEaXYgZnJvbSAnLi4vLi4vYXRvbXMvYXREaXYnXG5pbXBvcnQgTW9SZWdpYW8gZnJvbSAnLi4vbW9SZWdpYW8vaW5kZXguanMnXG5pbXBvcnQgTWVudU1vYmlsZTAxIGZyb20gJy4uL21vTWVudU1vYmlsZTAxL2luZGV4LmpzJ1xuXG4vL2ltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi4vLi4vLi4vY29udHJvbGxlci91dGlsLmpzJztcbi8vY29uc29sZS5sb2coJ21vSGVhZGVyU2lkZURvVmFsZW50ZSAnKTtcblxuY29uc3QgbW9IZWFkZXJTaWRlRG9WYWxlbnRlID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIGNvbnN0IHJlZ2lhbyA9IHByb3BzLnJlZ2lhbztcbiAgY29uc3QgbW9kbyA9IHByb3BzLm1vZG87XG4gIC8vY29uc3QgSnNvblJlZ2lhbyA9IFV0aWwucmVnaWFvKHJlZ2lhbyk7XG4gIHZhciBTdHJpbmdNb2RvID0gXCJcIjtcbiAgaWYobW9kbz09XCJBTVBcIiB8fCBtb2RvPT1cImFtcFwiKXtcbiAgICBTdHJpbmdNb2RvID0gXCIvYW1wXCI7XG4gIH1cbiAgY29uc29sZS5sb2coJyogSGVhZGVyIGRvIFZhbGVudGUgfCBtb2RvPScrbW9kbysgJyB8IHJlZ2lhbz0nK3JlZ2lhbyk7XG5cbiAgcmV0dXJuIChcbiAgICA8RGl2IGRpc3BsYXk9XCJyZXNwb25zaXZvXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvIGhlYWRlcnBjXCI+XG4gICAgICAgICAgPGEgaHJlZj17U3RyaW5nTW9kbytcIi8/cmVnaWFvPVwiK3JlZ2lhb30gPlxuICAgICAgICAgICAgPEltZyBzcmM9XCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9sb2dvX3Z2Yy5wbmdcIiB3aWR0aD1cIjEwMHB4XCIgaGVpZ2h0PVwiMTAwcHhcIiBhbHQ9XCJMb2dvIFNpdGUgVmFsZW50ZVwiIHRpdGxlPVwiTG9nbyBTaXRlIFZhbGVudGVcIiBjbGFzcz1cIkxvZ29TaXRlVmFsZW50ZVwiIG1vZG89e21vZG99IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpdHVsb2RvU2l0ZSBoZWFkZXJwY1wiPlxuICAgICAgICAgIDxzcGFuPlZWQyBFc3R1ZGlvPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWVybW9iXCI+XG4gICAgICAgICAgICA8TWVudU1vYmlsZTAxIG1vZG89e21vZG99Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgPE1vUmVnaWFvIG1vZG89e21vZG99IHJlZ2lhbz17cmVnaWFvfSAvPlxuICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5sb2dve1xuICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgLyphbmltYXRpb24tZGVsYXk6IDJzOyovXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluU29tYnJhO1xuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBzbGlkZWluU29tYnJhIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMC4wO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLjA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5UaXR1bG9kb1NpdGV7XG4gICAgICAgIGNvbG9yOiAjMTBlY2Y1O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYShtaW4td2lkdGg6IDExNjlweCkge1xuICAgICAgICAuaGVhZXJtb2J7XG4gICAgICAgICAgZGlzcGxheSA6IE5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhKG1heC13aWR0aDogMTE2OXB4KSB7XG4gICAgICAgIC5oZWFkZXJwY3tcbiAgICAgICAgICBkaXNwbGF5IDogTm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L0Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb0hlYWRlclNpZGVEb1ZhbGVudGVcbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moHeaderSideDoValente/index.js */"));
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
    estilo: "luz"
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
  }, ".title.jsx-2647530452{margin:0;padding-top:80px;line-height:1.15;font-size:48px;}.coluna404.jsx-2647530452{width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzLzQwNC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RGdCLEFBR2tCLEFBTUMsU0FMTyxDQU1uQixnQkFMbUIsaUJBQ0YsZUFDakIiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy90ZW1wbGF0ZXMvNDA0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy9pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1nIGZyb20gJy4uL2F0b21zL2F0SW1nL2luZGV4LmpzJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vYXRvbXMvYXRJY29uL2luZGV4LmpzJ1xuaW1wb3J0IERpdiBmcm9tICcuLi9hdG9tcy9hdERpdi9pbmRleC5qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbW9sZWN1bGFzL2xheW91dCdcbmltcG9ydCBNb0hlYWQgZnJvbSAnLi4vbW9sZWN1bGFzL21vSGVhZCdcbmltcG9ydCBCdExpbmsgZnJvbSAnLi4vYXRvbXMvYXRCdExpbmsnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbi8vaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy9pbXBvcnQgRmF2SWNvbiBmcm9tICcuLi9hdG9tcy9hdEZhdkljb24nXG5cbmNvbnN0IHRlbXBsYXRlSG9tZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zb2xlLmxvZygn4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG4gIGNvbnNvbGUubG9nKCfilZEgICAgdGVtcGxhdGUgZXJybyA0MDQgICAgICAg4pWRJyk7XG4gIGNvbnNvbGUubG9nKCfilZrilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZ0nKTtcbiAgdmFyIHJlZ2lhbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMucmVnaWFvLFwiUkpcIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLFwiaHRtbFwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE1vSGVhZCBtb2RvPXttb2RvfSB0aXRsZT1cIlDDoWdpbmEgbsOjbyBlbmNvbnRyYWRhXCIgZGVzY3JpcHRpb249XCJQw6FnaW5hIG7Do28gZW5jb250cmFkYVwiIGNhbm9uaWNhbD1cIi80MDQvXCIvPlxuICAgICAgPExheW91dCByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30gdGl0dWxvPVwiRXJyb1wiIGNhdGVnb3JpYT1cIkVycm9cIj5cbiAgICAgICAgPERpdiBkaXNwbGF5PVwicmVzcG9uc2l2b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW5hNDA0XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+SWgsIGVzc2EgcMOhZ2luYSBuw6NvIGZvaSBlbmNvbnRyYWRhPC9oMT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUYWx2ZXogbyBlbmRlcmXDp28gZGlnaXRhZG8gZXN0ZWphIGluY29ycmV0byBvdSB2b2PDqiB0ZW5oYVxuICAgICAgICAgICAgICBjbGljYWRvIGVtIHVtYSBww6FnaW5hIHF1ZSBuw6NvIGV4aXN0ZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxEaXYgZGlzcGxheT1cImp1c3RpZmljYWRvXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImlucHV0QWxlcnRcIiBjb2xvcj1cIiNmZmZmZmZcIiB3aWR0aD1cIjMwcHhcIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFZvY8OqIHBvZGUgdmVyIGFzIG9ww6fDtWVzIGRvIG1lbnUgYW8gbGFkbyBvdSBjb250aW51YXJcbiAgICAgICAgICAgICAgICBhIG5hdmVnYcOnw6NvIHBlbGEgcMOhZ2luYSBpbmljaWFsLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICAgIDxCdExpbmsgaHJlZj17XCIvP3JlZ2lhbz1cIityZWdpYW99IHZhbHVlPVwiUMOhZ2luYSBpbmljaWFsLlwiIGVzdGlsbz1cImx1elwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8SW1nIFxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2hlcm8tbGFyZ2UtNDA0LnBuZ1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMjNweFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDM2cHhcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlBhZ2luYSBuw6NvIGVuY29udHJhZGFcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiUGFnaW5hIG7Do28gZW5jb250cmFkYVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJDbGFzc0ltZzQwNFwiXG4gICAgICAgICAgICAgICAgbW9kbz17bW9kb30+XG4gICAgICAgICAgICAgIDwvSW1nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9EaXY+XG4gICAgPC9MYXlvdXQ+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIH1cbiAgICAgIC5jb2x1bmE0MDR7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGVIb21lXG5cblxuLy88SGVhZD5cbi8vPHRpdGxlPkhvbWUgU0lURSBETyBWQUxFTlRFPC90aXRsZT5cbi8vPEZhdkljb24gLz5cbi8vPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkJlbSB2aW5kbyBhbyBTSVRFIERPIFZBTEVOVEVcIiAvPlxuLy88bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiL1wiIC8+XG4vLzxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3d3dy5vaS5jb20uYnIvXCIvPlxuLy88bGluayByZWw9XCJhbXBodG1sXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm9pLmNvbS5ici9hbXAvXCIvPlxuLy88c2NyaXB0IGFzeW5jIGN1c3RvbS1lbGVtZW50PVwiYW1wLWxpZ2h0Ym94XCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWxpZ2h0Ym94LTAuMS5qc1wiPjwvc2NyaXB0PlxuLy88c2NyaXB0IGFzeW5jIGN1c3RvbS1lbGVtZW50PVwiYW1wLWlmcmFtZVwiIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1pZnJhbWUtMC4xLmpzXCI+PC9zY3JpcHQ+XG4vLzwvSGVhZD4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/404.js */"));
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

/***/ 1:
/*!*******************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fhome%2Foi402825%2FDocumentos%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fhome%2Foi402825%2FDocumentos%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Foi402825%2FDocumentos%2FProjetos%2Fsite_do_valente%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.ce608d94ebcc7b54f715.hot-update.js.map