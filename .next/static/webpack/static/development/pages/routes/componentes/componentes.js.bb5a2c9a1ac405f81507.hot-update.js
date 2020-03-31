webpackHotUpdate("static/development/pages/routes/componentes/componentes.js",{

/***/ "./components/templates/componentes.js":
/*!*********************************************!*\
  !*** ./components/templates/componentes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _moleculas_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../moleculas/moListadeRotas/index.js */ "./components/moleculas/moListadeRotas/index.js");
/* harmony import */ var _atoms_atFavIcon___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/atFavIcon/ */ "./components/atoms/atFavIcon/index.js");
/* harmony import */ var _atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms/atDiv/index.js */ "./components/atoms/atDiv/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index.js */ "./components/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../controller/util.js */ "./controller/util.js");










var getAtoms = function getAtoms(nameAtoms, modo) {
  return _index_js__WEBPACK_IMPORTED_MODULE_7__[nameAtoms](modo);
};

var componentes = function componentes(props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      componentes                       ║');
  console.log('╚════════════════════════════════════════╝');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_8__["validaProps"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_8__["validaProps"](props.modo, "html");
  var id = _controller_util_js__WEBPACK_IMPORTED_MODULE_8__["validaProps"](props.id, "atArrow");
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    className: "jsx-586128705"
  }, "Componentes"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_atoms_atFavIcon___WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "icon",
    href: "https://www.oi.com.br/componentes/componentes",
    className: "jsx-586128705"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "description",
    content: "Componentes html do Portal da Oi (AMP).",
    className: "jsx-586128705"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "robots",
    content: "noindex",
    className: "jsx-586128705"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "canonical",
    href: "https://www.oi.com.br/",
    className: "jsx-586128705"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "amphtml",
    href: "https://www.oi.com.br/amp/",
    className: "jsx-586128705"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("script", {
    async: true,
    "custom-element": "amp-lightbox",
    src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js",
    className: "jsx-586128705"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("script", {
    async: true,
    "custom-element": "amp-iframe",
    src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js",
    className: "jsx-586128705"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("dib", {
    className: "jsx-586128705"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-586128705" + " " + 'title'
  }, "Componentes html deste Projeto.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "horizontal"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-586128705" + " " + 'coluna1'
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "jsx-586128705" + " " + 'CssTitleRotasProjeto'
  }, "Lista de componentes"), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_index_js__WEBPACK_IMPORTED_MODULE_7__).map(function (nomeAtoms, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-586128705"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "/componentes/?id=" + nomeAtoms,
      className: "jsx-586128705"
    }, index + " - " + nomeAtoms));
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_moleculas_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-586128705" + " " + 'coluna2'
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-586128705"
  }, getAtoms(id, modo)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-586128705"
  }, "Cidade:", regiao, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-586128705"
  }), "Modo:", modo, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-586128705"
  }), "teste function apenasNumros(", _controller_util_js__WEBPACK_IMPORTED_MODULE_8__["apenasNumeros"]('A1B2C3'), ")"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "586128705"
  }, ".title.jsx-586128705{margin:0;width:100%;padding-top:10px;line-height:1.15;font-size:48px;}.coluna1.jsx-586128705{width:20%;}.coluna2.jsx-586128705{width:70%;background-color:#e9e9e9;}.CssTitleListadeAtomos.jsx-586128705{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:22px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2NvbXBvbmVudGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEa0IsQUFHb0IsQUFPQyxBQUdBLEFBSUQsU0FiRSxBQWNBLENBUGIsQUFHMkIsVUFUUixBQWNBLGVBSm5CLEVBVG1CLEFBY0EsaUJBYkYsQUFjQSxlQWJqQixBQWNBIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2NvbXBvbmVudGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGlzdGFkZVJvdGFzIGZyb20gJy4uL21vbGVjdWxhcy9tb0xpc3RhZGVSb3Rhcy9pbmRleC5qcyc7XG5pbXBvcnQgRmF2SWNvbiBmcm9tICcuLi9hdG9tcy9hdEZhdkljb24vJ1xuXG5pbXBvcnQgRGl2IGZyb20gJy4uL2F0b21zL2F0RGl2L2luZGV4LmpzJztcbmltcG9ydCAqIGFzIEF0b21zIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi4vLi4vY29udHJvbGxlci91dGlsLmpzJztcblxuY29uc3QgZ2V0QXRvbXMgPSBmdW5jdGlvbihuYW1lQXRvbXMsbW9kbyl7XG4gIHJldHVybiBBdG9tc1tuYW1lQXRvbXNdKG1vZG8pO1xufVxuXG5jb25zdCBjb21wb25lbnRlcyA9IGZ1bmN0aW9uKHByb3BzKXtcbiAgICBjb25zb2xlLmxvZygn4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG4gICAgY29uc29sZS5sb2coJ+KVkSAgICAgIGNvbXBvbmVudGVzICAgICAgICAgICAgICAgICAgICAgICDilZEnKTtcbiAgICBjb25zb2xlLmxvZygn4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWdJyk7XG4gICAgdmFyIHJlZ2lhbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMucmVnaWFvLFwiUkpcIik7XG4gICAgdmFyIG1vZG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLm1vZG8sXCJodG1sXCIpO1xuICAgIHZhciBpZCA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMuaWQsXCJhdEFycm93XCIpO1xuICAgIHJldHVybihcbiAgICA8RGl2IGRpc3BsYXk9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db21wb25lbnRlczwvdGl0bGU+XG4gICAgICAgIDxGYXZJY29uIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiaHR0cHM6Ly93d3cub2kuY29tLmJyL2NvbXBvbmVudGVzL2NvbXBvbmVudGVzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvbXBvbmVudGVzIGh0bWwgZG8gUG9ydGFsIGRhIE9pIChBTVApLlwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3d3dy5vaS5jb20uYnIvXCIvPlxuICAgICAgICA8bGluayByZWw9XCJhbXBodG1sXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm9pLmNvbS5ici9hbXAvXCIvPlxuICAgICAgICA8c2NyaXB0IGFzeW5jIGN1c3RvbS1lbGVtZW50PVwiYW1wLWxpZ2h0Ym94XCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWxpZ2h0Ym94LTAuMS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IGFzeW5jIGN1c3RvbS1lbGVtZW50PVwiYW1wLWlmcmFtZVwiIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1pZnJhbWUtMC4xLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGliPjxoMSBjbGFzc05hbWU9J3RpdGxlJz5Db21wb25lbnRlcyBodG1sIGRlc3RlIFByb2pldG8uPC9oMT48L2RpYj5cbiAgICAgIDxEaXYgZGlzcGxheT1cImhvcml6b250YWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVuYTEnPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nQ3NzVGl0bGVSb3Rhc1Byb2pldG8nPkxpc3RhIGRlIGNvbXBvbmVudGVzPC9oND5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKEF0b21zKS5tYXAoKG5vbWVBdG9tcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIi9jb21wb25lbnRlcy8/aWQ9XCIrbm9tZUF0b21zfT5cbiAgICAgICAgICAgICAgICAgIHtpbmRleCArIFwiIC0gXCIrIG5vbWVBdG9tc31cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDxMaXN0YWRlUm90YXMvPiAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bmEyJz5cbiAgICAgICAgICAgIDxkaXY+e2dldEF0b21zKGlkLG1vZG8pfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgICAgIENpZGFkZTp7cmVnaWFvfTxici8+XG4gICAgICAgICAgICBNb2RvOnttb2RvfTxici8+XG4gICAgICAgICAgICB0ZXN0ZSBmdW5jdGlvbiBhcGVuYXNOdW1yb3Moe1V0aWwuYXBlbmFzTnVtZXJvcygnQTFCMkMzJyl9KVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgfVxuICAgICAgICAuY29sdW5hMXtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb2x1bmEye1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgICAgICAgfVxuICAgICAgICAuQ3NzVGl0bGVMaXN0YWRlQXRvbW9ze1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0Rpdj5cbiApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudGVzIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/componentes.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (componentes);

/***/ })

})
//# sourceMappingURL=componentes.js.bb5a2c9a1ac405f81507.hot-update.js.map