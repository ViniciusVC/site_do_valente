webpackHotUpdate("static/development/pages/routes/tutorial/python/pandas.js",{

/***/ "./components/templates/codigo/python/pandas.js":
/*!******************************************************!*\
  !*** ./components/templates/codigo/python/pandas.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../atoms/atImg/index.js */ "./components/atoms/atImg/index.js");
/* harmony import */ var _atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../atoms/atDiv/index.js */ "./components/atoms/atDiv/index.js");
/* harmony import */ var _moleculas_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../moleculas/layout */ "./components/moleculas/layout/index.js");
/* harmony import */ var _moleculas_moHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../moleculas/moHead */ "./components/moleculas/moHead/index.js");
/* harmony import */ var _atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../atoms/atDivCodigo */ "./components/atoms/atDivCodigo/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../controller/util.js */ "./controller/util.js");









var codigoJava = function codigoJava(props) {
  console.log('╔═════════════════════════════╗');
  console.log('║ Tutorial - Python - Pandas  ║');
  console.log('╚═════════════════════════════╝');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["validaProps"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_7__["validaProps"](props.modo, "html");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2716360461"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_moHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    modo: modo,
    title: "Pandas",
    description: "O que \xE9 Pandas",
    canonical: "/tutorial/python/pandas/",
    keywords: "Python, Tutorial, linguagem, programa\xE7\xE3o, codigo, Pandas, biblioteca, Dados"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    regiao: regiao,
    modo: modo,
    titulo: "Tutoriais",
    categoria: "Python"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "responcivo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2716360461"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2716360461"
  }, "O que \xE9 Pandas?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2716360461"
  }, "Pandas \xE9 uma biblioteca de software criada para a linguagem Python, para manipula\xE7\xE3o e an\xE1lise de dados.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  }), "\xC9 atualmente a biblioteca mais usada para ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-2716360461"
  }, "MANIPULA\xC7\xC3O DE DADOS"), " no Pyton.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  }), "Oferece estruturas e opera\xE7\xF5es para manipular tabelas num\xE9ricas e s\xE9ries temporais.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  }), "Pandas \xE9 um software livre, sob a licen\xE7a BSD.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    titulo: "Exemplo de codigo Python com PANDAS"
  }, "import pandas as pd #Importando biblioteca Pandas.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  }), "uri = \"dadosExemploGui.csv\" # Instanciar caminho do arquivo.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  }), "dados = pd.read_csv(uri) #  Obter arquivo", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  }), "dados.head() # Ler conteudo do arquivo", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    titulo: "Para instalar o PANDAS para Python 2:"
  }, "$ sudo apt-get install python-pandas", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    titulo: "Para instalar o PANDAS para Python 3:"
  }, "$ sudo apt install python3-pandas", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2716360461"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/codigo/logopython.svg",
    width: "200px",
    height: "200px",
    alt: "Logo python",
    title: "Logo Python",
    class: "ClassLogoPython",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2716360461"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2716360461"
  }, "Selecionar Colunas", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  }), "Filtrar Linhas", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  }), "Agrega\xE7\xE3o (Group by)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  }), "Fun\xE7\xE3o Apply Lambida(Equivale ao For)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  }), "Uni\xE3o de Dados (Merge, Concat)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2716360461"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2716360461"
  }, ".h1.jsx-2716360461{color :#000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2NvZGlnby9weXRob24vcGFuZGFzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFa0IsQUFHMEIsZUFDakIiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy90ZW1wbGF0ZXMvY29kaWdvL3B5dGhvbi9wYW5kYXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1nIGZyb20gJy4uLy4uLy4uL2F0b21zL2F0SW1nL2luZGV4LmpzJ1xuaW1wb3J0IERpdiBmcm9tICcuLi8uLi8uLi9hdG9tcy9hdERpdi9pbmRleC5qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vbW9sZWN1bGFzL2xheW91dCdcbmltcG9ydCBNb0hlYWQgZnJvbSAnLi4vLi4vLi4vbW9sZWN1bGFzL21vSGVhZCdcbmltcG9ydCBEaXZDb2RpZ28gZnJvbSAnLi4vLi4vLi4vYXRvbXMvYXREaXZDb2RpZ28nXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IGNvZGlnb0phdmEgPSBmdW5jdGlvbiAocHJvcHMpIHtcblxuICBjb25zb2xlLmxvZygn4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG4gIGNvbnNvbGUubG9nKCfilZEgVHV0b3JpYWwgLSBQeXRob24gLSBQYW5kYXMgIOKVkScpO1xuICBjb25zb2xlLmxvZygn4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWdJyk7XG5cbiAgdmFyIHJlZ2lhbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMucmVnaWFvICwgXCJSSlwiKTtcbiAgdmFyIG1vZG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLm1vZG8sIFwiaHRtbFwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TW9IZWFkIFxuICAgICAgICBtb2RvPXttb2RvfSBcbiAgICAgICAgdGl0bGU9XCJQYW5kYXNcIiBcbiAgICAgICAgZGVzY3JpcHRpb249XCJPIHF1ZSDDqSBQYW5kYXNcIiBcbiAgICAgICAgY2Fub25pY2FsPVwiL3R1dG9yaWFsL3B5dGhvbi9wYW5kYXMvXCJcbiAgICAgICAga2V5d29yZHM9XCJQeXRob24sIFR1dG9yaWFsLCBsaW5ndWFnZW0sIHByb2dyYW1hw6fDo28sIGNvZGlnbywgUGFuZGFzLCBiaWJsaW90ZWNhLCBEYWRvc1wiXG4gICAgICAvPlxuICAgICAgPExheW91dCByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30gdGl0dWxvPVwiVHV0b3JpYWlzXCIgY2F0ZWdvcmlhPVwiUHl0aG9uXCI+XG4gICAgICAgIDxEaXYgZGlzcGxheT1cInJlc3BvbmNpdm9cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPk8gcXVlIMOpIFBhbmRhcz88L2gxPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFBhbmRhcyDDqSB1bWEgYmlibGlvdGVjYSBkZSBzb2Z0d2FyZSBjcmlhZGEgcGFyYSBhIGxpbmd1YWdlbSBQeXRob24sIHBhcmEgbWFuaXB1bGHDp8OjbyBlIGFuw6FsaXNlIGRlIGRhZG9zLjxici8+XG4gICAgICAgICAgICAgIMOJIGF0dWFsbWVudGUgYSBiaWJsaW90ZWNhIG1haXMgdXNhZGEgcGFyYSA8c3Ryb25nPk1BTklQVUxBw4fDg08gREUgREFET1M8L3N0cm9uZz4gbm8gUHl0b24uPGJyLz5cbiAgICAgICAgICAgICAgT2ZlcmVjZSBlc3RydXR1cmFzIGUgb3BlcmHDp8O1ZXMgcGFyYSBtYW5pcHVsYXIgdGFiZWxhcyBudW3DqXJpY2FzIGUgc8OpcmllcyB0ZW1wb3JhaXMuPGJyLz5cbiAgICAgICAgICAgICAgUGFuZGFzIMOpIHVtIHNvZnR3YXJlIGxpdnJlLCBzb2IgYSBsaWNlbsOnYSBCU0QuPGJyLz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxEaXZDb2RpZ28gdGl0dWxvPVwiRXhlbXBsbyBkZSBjb2RpZ28gUHl0aG9uIGNvbSBQQU5EQVNcIj5cbiAgICAgICAgICAgICAgaW1wb3J0IHBhbmRhcyBhcyBwZCAjSW1wb3J0YW5kbyBiaWJsaW90ZWNhIFBhbmRhcy48YnIvPlxuICAgICAgICAgICAgICB1cmkgPSBcImRhZG9zRXhlbXBsb0d1aS5jc3ZcIiAjIEluc3RhbmNpYXIgY2FtaW5obyBkbyBhcnF1aXZvLjxici8+XG4gICAgICAgICAgICAgIGRhZG9zID0gcGQucmVhZF9jc3YodXJpKSAjICBPYnRlciBhcnF1aXZvPGJyLz5cbiAgICAgICAgICAgICAgZGFkb3MuaGVhZCgpICMgTGVyIGNvbnRldWRvIGRvIGFycXVpdm88YnIvPlxuICAgICAgICAgICAgPC9EaXZDb2RpZ28+XG4gICAgICAgICAgICA8RGl2Q29kaWdvIHRpdHVsbz1cIlBhcmEgaW5zdGFsYXIgbyBQQU5EQVMgcGFyYSBQeXRob24gMjpcIj5cbiAgICAgICAgICAgICAgJCBzdWRvIGFwdC1nZXQgaW5zdGFsbCBweXRob24tcGFuZGFzPGJyLz5cbiAgICAgICAgICAgIDwvRGl2Q29kaWdvPlxuICAgICAgICAgICAgPERpdkNvZGlnbyB0aXR1bG89XCJQYXJhIGluc3RhbGFyIG8gUEFOREFTIHBhcmEgUHl0aG9uIDM6XCI+XG4gICAgICAgICAgICAgICQgc3VkbyBhcHQgaW5zdGFsbCBweXRob24zLXBhbmRhczxici8+XG4gICAgICAgICAgICA8L0RpdkNvZGlnbz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWcgXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9jb2RpZ28vbG9nb3B5dGhvbi5zdmdcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvIHB5dGhvblwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkxvZ28gUHl0aG9uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiQ2xhc3NMb2dvUHl0aG9uXCJcbiAgICAgICAgICAgICAgICAgIG1vZG89e21vZG99PlxuICAgICAgICAgICAgPC9JbWc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTZWxlY2lvbmFyIENvbHVuYXM8YnIvPlxuICAgICAgICAgICAgICBGaWx0cmFyIExpbmhhczxici8+XG4gICAgICAgICAgICAgIEFncmVnYcOnw6NvIChHcm91cCBieSk8YnIvPlxuICAgICAgICAgICAgICBGdW7Dp8OjbyBBcHBseSBMYW1iaWRhKEVxdWl2YWxlIGFvIEZvcik8YnIvPlxuICAgICAgICAgICAgICBVbmnDo28gZGUgRGFkb3MgKE1lcmdlLCBDb25jYXQpPGJyLz5cbiAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmgxe1xuICAgICAgICAgIGNvbG9yIDogIzAwMDAwMDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb2RpZ29KYXZhXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/codigo/python/pandas.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (codigoJava);

/***/ })

})
//# sourceMappingURL=pandas.js.cd37ac99c8804f6af9b7.hot-update.js.map