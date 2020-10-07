webpackHotUpdate("static/development/pages/routes/tutorial/python.js",{

/***/ "./components/templates/codigo/python/index.js":
/*!*****************************************************!*\
  !*** ./components/templates/codigo/python/index.js ***!
  \*****************************************************/
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
/* harmony import */ var _atoms_atBtLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../atoms/atBtLink */ "./components/atoms/atBtLink/index.js");
/* harmony import */ var _atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../atoms/atDivCodigo */ "./components/atoms/atDivCodigo/index.js");
/* harmony import */ var _moleculas_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../moleculas/layout */ "./components/moleculas/layout/index.js");
/* harmony import */ var _moleculas_moHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../moleculas/moHead */ "./components/moleculas/moHead/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../controller/util.js */ "./controller/util.js");










var codigoJava = function codigoJava(props) {
  console.log('╔═══════════════════════════╗');
  console.log('║    Tutorial  Python       ║');
  console.log('╚═══════════════════════════╝');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_8__["validaProps"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_8__["validaProps"](props.modo, "html");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1367375073"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_moHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    modo: modo,
    title: "Python",
    description: "O que \xE9 Python",
    canonical: "/tutorial/python/",
    keywords: "Python, Tutorial, linguagem, programa\xE7\xE3o, codigo, variavel, loop"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    regiao: regiao,
    modo: modo,
    titulo: "Tutoriais",
    categoria: "Python"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "responcivo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1367375073" + " " + "coluna404"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1367375073"
  }, "O que \xE9 Python?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1367375073"
  }, "Python \xE9 uma linguagem de programa\xE7\xE3o de alto n\xEDvel, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem din\xE2mica e forte.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "Foi lan\xE7ada por Guido van Rossum em 1991.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Exemplo de c\xF3digo Python"
  }, 'x = 1', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), 'if x == 1:', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), '# indented four spaces', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), 'print("x is 1.")', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1367375073"
  }, "A linguagem foi projetada com a filosofia de enfatizar a import\xE2ncia do esfor\xE7o do programador sobre o esfor\xE7o computacional.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "Prioriza a legibilidade do c\xF3digo sobre a velocidade ou expressividade.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "Combina uma sintaxe concisa e clara com os recursos poderosos de sua biblioteca padr\xE3o e por m\xF3dulos e frameworks desenvolvidos por terceiros.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "Python \xE9 uma linguagem de prop\xF3sito geral de alto n\xEDvel, multiparadigma, suporta o paradigma orientado a objetos, imperativo, funcional e procedural.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "Possui tipagem din\xE2mica e uma de suas principais caracter\xEDsticas \xE9 permitir a f\xE1cil leitura do c\xF3digo e exigir poucas linhas de c\xF3digo se comparado ao mesmo programa em outras linguagens.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "Devido \xE0s suas caracter\xEDsticas, ela \xE9 principalmente utilizada para processamento de textos, dados cient\xEDficos e cria\xE7\xE3o de CGIs para p\xE1ginas din\xE2micas para a web.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "Foi considerada pelo p\xFAblico a 3\xAA linguagem \"mais amada\", de acordo com uma pesquisa conduzida pelo site Stack Overflow em 2018, e est\xE1 entre as 5 linguagens mais populares, de acordo com uma pesquisa conduzida pela RedMonk.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Entrar prompt de comandos do Python"
  }, "$ python", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), "obs.: (Use \"python\" tudo minusculo)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Sair do prompt de comandos do Python"
  }, "exit()", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0# ou ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "Control D", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Declarar variavel"
  }, "a = 3", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Declarar uma Lista"
  }, "a = [0,1,3]", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Comentario em Python"
  }, "#este \xE9 um comentario.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Criar um Loop for"
  }, "for item in range(10):", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0\xA0print(item)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Condicional (IF)"
  }, "if a > 2:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0\xA0print(\"A \xE9 maior que 2\")", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), "Note que a identa\xE7\xE3o no Python \xE9 obrigatoria.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "fun\xE7\xE3o no python"
  }, "def nome_da_funcao(qtd_horas, valor_hora):", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0horas = float(qtd_horas)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0taxa = float(valor_hora)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0", '   if horas <= 40:', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0\xA0\xA0salario=horas*taxa", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0else:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0\xA0\xA0h_excd = horas - 40", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0\xA0\xA0salario = 40*taxa+(h_excd*(1.5*taxa))", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0return salario", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Criar arquivo de codigo Python"
  }, "arquivo.py"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Lendo arquivo CSV no Python"
  }, "import CSV", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "with open('diretorio/arquivo.csv\", 'r') as entrada:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0ler = csv.reader(entrada)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0next(ler) ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0for linha in ler:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  }), "\xA0\xA0\xA0\xA0print(linha)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Rodar um arquivo de c\xF3digo Python 2"
  }, "$ python arquivo.py"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Rodar um arquivo de c\xF3digo Python 3"
  }, "$ python3 arquivo.py"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDivCodigo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titulo: "Para instalar o Python3 no Ubuntu"
  }, "$ sudo apt install python3-pip")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1367375073"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/codigo/logopython.svg",
    width: "200px",
    height: "200px",
    alt: "Logo python",
    title: "Logo Python",
    class: "ClassLogoPython",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1367375073"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1367375073"
  }, "O nome Python teve a sua origem no grupo humor\xEDstico brit\xE2nico Monty Python. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1367375073"
  })), "Veja tambe:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/tutorial/python/matplotlib/",
    value: "Matplotlib",
    estilo: "neon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/tutorial/python/numpy/",
    value: "Numpy",
    estilo: "neon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/tutorial/python/pandas",
    value: "pandas",
    estilo: "neon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/tutorial/python/seaborn",
    value: "seaborn",
    estilo: "neon"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atBtLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/tutorial/python/sklearn",
    value: "sklearn",
    estilo: "neon"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1367375073"
  }, ".h1.jsx-1367375073{color :#000000;}.p.jsx-1367375073{color :#000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2NvZGlnby9weXRob24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUlrQixBQUcwQixBQUdBLGVBRmpCLEFBR0EiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy90ZW1wbGF0ZXMvY29kaWdvL3B5dGhvbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1nIGZyb20gJy4uLy4uLy4uL2F0b21zL2F0SW1nL2luZGV4LmpzJztcbmltcG9ydCBEaXYgZnJvbSAnLi4vLi4vLi4vYXRvbXMvYXREaXYvaW5kZXguanMnO1xuaW1wb3J0IEJ0TGluayBmcm9tICcuLi8uLi8uLi9hdG9tcy9hdEJ0TGluayc7XG5pbXBvcnQgRGl2Q29kaWdvIGZyb20gJy4uLy4uLy4uL2F0b21zL2F0RGl2Q29kaWdvJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vbW9sZWN1bGFzL2xheW91dCc7XG5pbXBvcnQgTW9IZWFkIGZyb20gJy4uLy4uLy4uL21vbGVjdWxhcy9tb0hlYWQnO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuXG5jb25zdCBjb2RpZ29KYXZhID0gZnVuY3Rpb24gKHByb3BzKSB7XG5cbiAgY29uc29sZS5sb2coJ+KVlOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVlycpO1xuICBjb25zb2xlLmxvZygn4pWRICAgIFR1dG9yaWFsICBQeXRob24gICAgICAg4pWRJyk7XG4gIGNvbnNvbGUubG9nKCfilZrilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZ0nKTtcblxuICB2YXIgcmVnaWFvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5yZWdpYW8gLCBcIlJKXCIpO1xuICB2YXIgbW9kbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMubW9kbywgXCJodG1sXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxNb0hlYWQgXG4gICAgICAgIG1vZG89e21vZG99IFxuICAgICAgICB0aXRsZT1cIlB5dGhvblwiIFxuICAgICAgICBkZXNjcmlwdGlvbj1cIk8gcXVlIMOpIFB5dGhvblwiIFxuICAgICAgICBjYW5vbmljYWw9XCIvdHV0b3JpYWwvcHl0aG9uL1wiXG4gICAgICAgIGtleXdvcmRzPVwiUHl0aG9uLCBUdXRvcmlhbCwgbGluZ3VhZ2VtLCBwcm9ncmFtYcOnw6NvLCBjb2RpZ28sIHZhcmlhdmVsLCBsb29wXCJcbiAgICAgIC8+XG4gICAgICA8TGF5b3V0IHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfSB0aXR1bG89XCJUdXRvcmlhaXNcIiBjYXRlZ29yaWE9XCJQeXRob25cIj5cbiAgICAgICAgPERpdiBkaXNwbGF5PVwicmVzcG9uY2l2b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW5hNDA0XCI+XG4gICAgICAgICAgICA8aDE+TyBxdWUgw6kgUHl0aG9uPzwvaDE+XG4gICAgICAgICAgICA8cD5QeXRob24gw6kgdW1hIGxpbmd1YWdlbSBkZSBwcm9ncmFtYcOnw6NvIGRlIGFsdG8gbsOtdmVsLCBpbnRlcnByZXRhZGEsIGRlIHNjcmlwdCwgaW1wZXJhdGl2YSwgb3JpZW50YWRhIGEgb2JqZXRvcywgZnVuY2lvbmFsLCBkZSB0aXBhZ2VtIGRpbsOibWljYSBlIGZvcnRlLjxici8+XG4gICAgICAgICAgICAgIEZvaSBsYW7Dp2FkYSBwb3IgR3VpZG8gdmFuIFJvc3N1bSBlbSAxOTkxLjxici8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8RGl2Q29kaWdvIHRpdHVsbz1cIkV4ZW1wbG8gZGUgY8OzZGlnbyBQeXRob25cIj5cbiAgICAgICAgICAgICAgeyd4ID0gMSd9PGJyLz5cbiAgICAgICAgICAgICAgeydpZiB4ID09IDE6J308YnIvPlxuICAgICAgICAgICAgICB7JyMgaW5kZW50ZWQgZm91ciBzcGFjZXMnfTxici8+XG4gICAgICAgICAgICAgIHsncHJpbnQoXCJ4IGlzIDEuXCIpJ308YnIvPlxuICAgICAgICAgICAgPC9EaXZDb2RpZ28+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQSBsaW5ndWFnZW0gZm9pIHByb2pldGFkYSBjb20gYSBmaWxvc29maWEgZGUgZW5mYXRpemFyIGEgaW1wb3J0w6JuY2lhIGRvIGVzZm9yw6dvIGRvIHByb2dyYW1hZG9yIHNvYnJlIG8gZXNmb3LDp28gY29tcHV0YWNpb25hbC48YnIvPlxuICAgICAgICAgICAgICBQcmlvcml6YSBhIGxlZ2liaWxpZGFkZSBkbyBjw7NkaWdvIHNvYnJlIGEgdmVsb2NpZGFkZSBvdSBleHByZXNzaXZpZGFkZS48YnIvPlxuICAgICAgICAgICAgICBDb21iaW5hIHVtYSBzaW50YXhlIGNvbmNpc2EgZSBjbGFyYSBjb20gb3MgcmVjdXJzb3MgcG9kZXJvc29zIGRlIHN1YSBiaWJsaW90ZWNhIHBhZHLDo28gZSBwb3IgbcOzZHVsb3MgZSBmcmFtZXdvcmtzIGRlc2Vudm9sdmlkb3MgcG9yIHRlcmNlaXJvcy48YnIvPlxuICAgICAgICAgICAgICBQeXRob24gw6kgdW1hIGxpbmd1YWdlbSBkZSBwcm9ww7NzaXRvIGdlcmFsIGRlIGFsdG8gbsOtdmVsLCBtdWx0aXBhcmFkaWdtYSwgc3Vwb3J0YSBvIHBhcmFkaWdtYSBvcmllbnRhZG8gYSBvYmpldG9zLCBpbXBlcmF0aXZvLCBmdW5jaW9uYWwgZSBwcm9jZWR1cmFsLjxici8+XG4gICAgICAgICAgICAgIFBvc3N1aSB0aXBhZ2VtIGRpbsOibWljYSBlIHVtYSBkZSBzdWFzIHByaW5jaXBhaXMgY2FyYWN0ZXLDrXN0aWNhcyDDqSBwZXJtaXRpciBhIGbDoWNpbCBsZWl0dXJhIGRvIGPDs2RpZ28gZSBleGlnaXIgcG91Y2FzIGxpbmhhcyBkZSBjw7NkaWdvIHNlIGNvbXBhcmFkbyBhbyBtZXNtbyBwcm9ncmFtYSBlbSBvdXRyYXMgbGluZ3VhZ2Vucy48YnIvPlxuICAgICAgICAgICAgICBEZXZpZG8gw6BzIHN1YXMgY2FyYWN0ZXLDrXN0aWNhcywgZWxhIMOpIHByaW5jaXBhbG1lbnRlIHV0aWxpemFkYSBwYXJhIHByb2Nlc3NhbWVudG8gZGUgdGV4dG9zLCBkYWRvcyBjaWVudMOtZmljb3MgZSBjcmlhw6fDo28gZGUgQ0dJcyBwYXJhIHDDoWdpbmFzIGRpbsOibWljYXMgcGFyYSBhIHdlYi48YnIvPlxuICAgICAgICAgICAgICBGb2kgY29uc2lkZXJhZGEgcGVsbyBww7pibGljbyBhIDPCqiBsaW5ndWFnZW0gXCJtYWlzIGFtYWRhXCIsIGRlIGFjb3JkbyBjb20gdW1hIHBlc3F1aXNhIGNvbmR1emlkYSBwZWxvIHNpdGUgU3RhY2sgT3ZlcmZsb3cgZW0gMjAxOCwgZSBlc3TDoSBlbnRyZSBhcyA1IGxpbmd1YWdlbnMgbWFpcyBwb3B1bGFyZXMsIGRlIGFjb3JkbyBjb20gdW1hIHBlc3F1aXNhIGNvbmR1emlkYSBwZWxhIFJlZE1vbmsuPGJyLz5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPERpdkNvZGlnbyB0aXR1bG89XCJFbnRyYXIgcHJvbXB0IGRlIGNvbWFuZG9zIGRvIFB5dGhvblwiPlxuICAgICAgICAgICAgICAkIHB5dGhvbjxici8+XG4gICAgICAgICAgICA8L0RpdkNvZGlnbz5cbiAgICAgICAgICAgIG9icy46IChVc2UgXCJweXRob25cIiB0dWRvIG1pbnVzY3VsbylcbiAgICAgICAgICAgIDxEaXZDb2RpZ28gdGl0dWxvPVwiU2FpciBkbyBwcm9tcHQgZGUgY29tYW5kb3MgZG8gUHl0aG9uXCI+XG4gICAgICAgICAgICAgIGV4aXQoKTxici8+XG4gICAgICAgICAgICAgICZuYnNwOyMgb3UgPGJyLz5cbiAgICAgICAgICAgICAgQ29udHJvbCBEPGJyLz5cbiAgICAgICAgICAgIDwvRGl2Q29kaWdvPlxuICAgICAgICAgICAgPERpdkNvZGlnbyB0aXR1bG89XCJEZWNsYXJhciB2YXJpYXZlbFwiPlxuICAgICAgICAgICAgICBhID0gMzxici8+XG4gICAgICAgICAgICA8L0RpdkNvZGlnbz5cbiAgICAgICAgICAgIDxEaXZDb2RpZ28gdGl0dWxvPVwiRGVjbGFyYXIgdW1hIExpc3RhXCI+XG4gICAgICAgICAgICAgIGEgPSBbMCwxLDNdPGJyLz5cbiAgICAgICAgICAgIDwvRGl2Q29kaWdvPlxuICAgICAgICAgICAgPERpdkNvZGlnbyB0aXR1bG89XCJDb21lbnRhcmlvIGVtIFB5dGhvblwiPlxuICAgICAgICAgICAgICAjZXN0ZSDDqSB1bSBjb21lbnRhcmlvLjxici8+XG4gICAgICAgICAgICA8L0RpdkNvZGlnbz5cbiAgICAgICAgICAgIDxEaXZDb2RpZ28gdGl0dWxvPVwiQ3JpYXIgdW0gTG9vcCBmb3JcIj5cbiAgICAgICAgICAgICAgZm9yIGl0ZW0gaW4gcmFuZ2UoMTApOjxici8+XG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO3ByaW50KGl0ZW0pPGJyLz5cbiAgICAgICAgICAgIDwvRGl2Q29kaWdvPlxuICAgICAgICAgICAgPERpdkNvZGlnbyB0aXR1bG89XCJDb25kaWNpb25hbCAoSUYpXCI+XG4gICAgICAgICAgICAgIGlmIGEgPiAyOjxici8+XG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO3ByaW50KFwiQSDDqSBtYWlvciBxdWUgMlwiKTxici8+XG4gICAgICAgICAgICA8L0RpdkNvZGlnbz5cbiAgICAgICAgICAgIE5vdGUgcXVlIGEgaWRlbnRhw6fDo28gbm8gUHl0aG9uIMOpIG9icmlnYXRvcmlhLlxuICAgICAgICAgICAgPERpdkNvZGlnbyB0aXR1bG89XCJmdW7Dp8OjbyBubyBweXRob25cIj5cbiAgICAgICAgICAgICAgZGVmIG5vbWVfZGFfZnVuY2FvKHF0ZF9ob3JhcywgdmFsb3JfaG9yYSk6PGJyLz5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7aG9yYXMgPSBmbG9hdChxdGRfaG9yYXMpPGJyLz5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7dGF4YSA9IGZsb2F0KHZhbG9yX2hvcmEpPGJyLz5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7eycgICBpZiBob3JhcyA8PSA0MDonfTxici8+XG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO3NhbGFyaW89aG9yYXMqdGF4YTxici8+XG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwO2Vsc2U6PGJyLz5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7aF9leGNkID0gaG9yYXMgLSA0MDxici8+XG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO3NhbGFyaW8gPSA0MCp0YXhhKyhoX2V4Y2QqKDEuNSp0YXhhKSk8YnIvPlxuICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtyZXR1cm4gc2FsYXJpbzxici8+XG4gICAgICAgICAgICA8L0RpdkNvZGlnbz5cblxuICAgICAgICAgICAgPERpdkNvZGlnbyB0aXR1bG89XCJDcmlhciBhcnF1aXZvIGRlIGNvZGlnbyBQeXRob25cIj5cbiAgICAgICAgICAgICAgYXJxdWl2by5weVxuICAgICAgICAgICAgPC9EaXZDb2RpZ28+XG4gICAgICAgICAgICA8RGl2Q29kaWdvIHRpdHVsbz1cIkxlbmRvIGFycXVpdm8gQ1NWIG5vIFB5dGhvblwiPlxuICAgICAgICAgICAgaW1wb3J0IENTVjxici8+XG4gICAgICAgICAgICB3aXRoIG9wZW4oJ2RpcmV0b3Jpby9hcnF1aXZvLmNzdlwiLCAncicpIGFzIGVudHJhZGE6PGJyLz5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7bGVyID0gY3N2LnJlYWRlcihlbnRyYWRhKTxici8+XG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwO25leHQobGVyKVx0PGJyLz5cbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Zm9yIGxpbmhhIGluIGxlcjo8YnIvPlxuICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtwcmludChsaW5oYSk8YnIvPlxuICAgICAgICAgICAgPC9EaXZDb2RpZ28+XG4gICAgICAgICAgICA8RGl2Q29kaWdvIHRpdHVsbz1cIlJvZGFyIHVtIGFycXVpdm8gZGUgY8OzZGlnbyBQeXRob24gMlwiPlxuICAgICAgICAgICAgICAkIHB5dGhvbiBhcnF1aXZvLnB5XG4gICAgICAgICAgICA8L0RpdkNvZGlnbz5cbiAgICAgICAgICAgIDxEaXZDb2RpZ28gdGl0dWxvPVwiUm9kYXIgdW0gYXJxdWl2byBkZSBjw7NkaWdvIFB5dGhvbiAzXCI+XG4gICAgICAgICAgICAgICQgcHl0aG9uMyBhcnF1aXZvLnB5XG4gICAgICAgICAgICA8L0RpdkNvZGlnbz5cbiAgICAgICAgICAgIDxEaXZDb2RpZ28gdGl0dWxvPVwiUGFyYSBpbnN0YWxhciBvIFB5dGhvbjMgbm8gVWJ1bnR1XCI+XG4gICAgICAgICAgICAgICQgc3VkbyBhcHQgaW5zdGFsbCBweXRob24zLXBpcFxuICAgICAgICAgICAgPC9EaXZDb2RpZ28+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEltZyBcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2NvZGlnby9sb2dvcHl0aG9uLnN2Z1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ28gcHl0aG9uXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTG9nbyBQeXRob25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJDbGFzc0xvZ29QeXRob25cIlxuICAgICAgICAgICAgICAgICAgbW9kbz17bW9kb30+XG4gICAgICAgICAgICA8L0ltZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE8gbm9tZSBQeXRob24gdGV2ZSBhIHN1YSBvcmlnZW0gbm8gZ3J1cG8gaHVtb3LDrXN0aWNvIGJyaXTDom5pY28gTW9udHkgUHl0aG9uLiA8YnIvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICBWZWphIHRhbWJlOlxuICAgICAgICAgICAgPEJ0TGluayBocmVmPVwiL3R1dG9yaWFsL3B5dGhvbi9tYXRwbG90bGliL1wiIHZhbHVlPVwiTWF0cGxvdGxpYlwiIGVzdGlsbz1cIm5lb25cIi8+XG4gICAgICAgICAgICA8QnRMaW5rIGhyZWY9XCIvdHV0b3JpYWwvcHl0aG9uL251bXB5L1wiIHZhbHVlPVwiTnVtcHlcIiBlc3RpbG89XCJuZW9uXCIvPlxuICAgICAgICAgICAgPEJ0TGluayBocmVmPVwiL3R1dG9yaWFsL3B5dGhvbi9wYW5kYXNcIiB2YWx1ZT1cInBhbmRhc1wiIGVzdGlsbz1cIm5lb25cIi8+XG4gICAgICAgICAgICA8QnRMaW5rIGhyZWY9XCIvdHV0b3JpYWwvcHl0aG9uL3NlYWJvcm5cIiB2YWx1ZT1cInNlYWJvcm5cIiBlc3RpbG89XCJuZW9uXCIvPlxuICAgICAgICAgICAgPEJ0TGluayBocmVmPVwiL3R1dG9yaWFsL3B5dGhvbi9za2xlYXJuXCIgdmFsdWU9XCJza2xlYXJuXCIgZXN0aWxvPVwibmVvblwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmgxe1xuICAgICAgICAgIGNvbG9yIDogIzAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgICAucHtcbiAgICAgICAgICBjb2xvciA6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29kaWdvSmF2YVxuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/codigo/python/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (codigoJava);

/***/ })

})
//# sourceMappingURL=python.js.ee0c738f648974595f6f.hot-update.js.map