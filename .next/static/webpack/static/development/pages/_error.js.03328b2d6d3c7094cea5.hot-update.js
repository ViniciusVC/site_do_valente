webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/moleculas/moRegiao/index.js":
/*!************************************************!*\
  !*** ./components/moleculas/moRegiao/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selectRegiao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectRegiao.js */ "./components/moleculas/moRegiao/selectRegiao.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");


 //console.log('moHeaderSideDoValente ');

var moHeaderSideDoValente = function moHeaderSideDoValente(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  var JsonRegiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["regiao"](regiao); // var StringModo = "";
  // if(modo=="AMP" || modo=="amp"){
  //   StringModo = "/amp";
  // }
  // console.log(JsonRegiao);
  // console.log('╔════════════╗ regiao='+regiao);
  // console.log('║  MoRegiao  ║ modo='+modo);
  // console.log('║            ║ estado='+JsonRegiao.estado);
  // console.log('╚════════════╝ capital='+JsonRegiao.capital);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Modo : ", modo, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_selectRegiao_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modo: modo,
    regiao: regiao
  }), "Cidade : ", JsonRegiao.capital);
};

/* harmony default export */ __webpack_exports__["default"] = (moHeaderSideDoValente);

/***/ })

})
//# sourceMappingURL=_error.js.03328b2d6d3c7094cea5.hot-update.js.map