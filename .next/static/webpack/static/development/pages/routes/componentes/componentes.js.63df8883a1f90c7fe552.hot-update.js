webpackHotUpdate("static/development/pages/routes/componentes/componentes.js",{

/***/ "./components/moleculas/moRegiao/index.js":
/*!************************************************!*\
  !*** ./components/moleculas/moRegiao/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selectRegiao_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectRegiao.js */ "./components/moleculas/moRegiao/selectRegiao.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");



 //console.log('moHeaderSideDoValente ');

var moHeaderSideDoValente = function moHeaderSideDoValente(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  var JsonRegiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_3__["regiao"](regiao); // var StringModo = "";
  // if(modo=="AMP" || modo=="amp"){
  //   StringModo = "/amp";
  // }
  // console.log(JsonRegiao);
  // console.log('╔════════════╗ regiao='+regiao);
  // console.log('║  MoRegiao  ║ modo='+modo);
  // console.log('║            ║ estado='+JsonRegiao.estado);
  // console.log('╚════════════╝ capital='+JsonRegiao.capital);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-239843368"
  }, "Modo : ", modo, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-239843368"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_selectRegiao_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    modo: modo,
    regiao: regiao
  }), "Cidade : ", JsonRegiao.capital, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "239843368"
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vUmVnaWFvL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9tb2xlY3VsYXMvbW9SZWdpYW8vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VsZWN0UmVnaWFvIGZyb20gJy4vc2VsZWN0UmVnaWFvLmpzJ1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuLy9jb25zb2xlLmxvZygnbW9IZWFkZXJTaWRlRG9WYWxlbnRlICcpO1xuXG5jb25zdCBtb0hlYWRlclNpZGVEb1ZhbGVudGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgY29uc3QgcmVnaWFvID0gcHJvcHMucmVnaWFvO1xuICBjb25zdCBtb2RvID0gcHJvcHMubW9kbztcbiAgY29uc3QgSnNvblJlZ2lhbyA9IFV0aWwucmVnaWFvKHJlZ2lhbyk7XG4gIC8vIHZhciBTdHJpbmdNb2RvID0gXCJcIjtcbiAgLy8gaWYobW9kbz09XCJBTVBcIiB8fCBtb2RvPT1cImFtcFwiKXtcbiAgLy8gICBTdHJpbmdNb2RvID0gXCIvYW1wXCI7XG4gIC8vIH1cblxuICAvLyBjb25zb2xlLmxvZyhKc29uUmVnaWFvKTtcbiAgLy8gY29uc29sZS5sb2coJ+KVlOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVlyByZWdpYW89JytyZWdpYW8pO1xuICAvLyBjb25zb2xlLmxvZygn4pWRICBNb1JlZ2lhbyAg4pWRIG1vZG89Jyttb2RvKTtcbiAgLy8gY29uc29sZS5sb2coJ+KVkSAgICAgICAgICAgIOKVkSBlc3RhZG89JytKc29uUmVnaWFvLmVzdGFkbyk7XG4gIC8vIGNvbnNvbGUubG9nKCfilZrilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZ0gY2FwaXRhbD0nK0pzb25SZWdpYW8uY2FwaXRhbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3Bhbj5cbiAgICAgICAgTW9kbyA6IHttb2RvfTxici8+XG4gICAgICAgIDxTZWxlY3RSZWdpYW8gbW9kbz17bW9kb30gcmVnaWFvPXtyZWdpYW99IC8+XG4gICAgICAgIENpZGFkZSA6IHtKc29uUmVnaWFvLmNhcGl0YWx9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBcbiAgICBgfTwvc3R5bGU+XG4gICAgPC9zcGFuPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vSGVhZGVyU2lkZURvVmFsZW50ZVxuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moRegiao/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (moHeaderSideDoValente);

/***/ })

})
//# sourceMappingURL=componentes.js.63df8883a1f90c7fe552.hot-update.js.map