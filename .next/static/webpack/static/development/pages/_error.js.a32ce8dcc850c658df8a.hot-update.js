webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/moleculas/moListadeRotas/index.js":
/*!******************************************************!*\
  !*** ./components/moleculas/moListadeRotas/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


 //console.log('Instanciando templates/index.js');

var ListadeRotas = function ListadeRotas(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  var StringModo = "";

  if (modo == "AMP" || modo == "amp") {
    StringModo = "/amp";
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-272789479" + " " + 'CssRotasProjeto'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/?regiao=" + regiao
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/?regiao=" + regiao
  }, "Home (Pagina em HTML)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/amp/?regiao=" + regiao
  }, "Home (Pagina em AMP)")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, "CODIGO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/apache/?regiao=" + regiao
  }, "Apache")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/apache/instalubuntu?regiao=" + regiao
  }, "Instalar Apache no Ubuntu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/apache/alias?regiao=" + regiao
  }, "Alias em Apache")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/apache/redirect?regiao=" + regiao
  }, "redirect 301 em Apache")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/asp/?regiao=" + regiao
  }, "ASP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/asp/?regiao=" + regiao
  }, "ASP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/asp/redirect?regiao=" + regiao
  }, "redirect 301 em ASP")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/cgi/?regiao=" + regiao
  }, "CGI PERL")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/cgi/redirect?regiao=" + regiao
  }, "redirect 301 em CGI")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/coldfusion/?regiao=" + regiao
  }, "ColdFusion")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/coldfusion/?regiao=" + regiao
  }, "redirect 301 em ColdFusion")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/?regiao=" + regiao
  }, "CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/?regiao=" + regiao
  }, "Introdu\xE7\xE3o ao CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css02/?regiao=" + regiao
  }, "Estilizando textos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css03/?regiao=" + regiao
  }, "Imagens de fundo e atributo text")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css04/?regiao=" + regiao
  }, "Links e Divs")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css05/?regiao=" + regiao
  }, "Classe, ID e Span")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css06/?regiao=" + regiao
  }, "Margin, padding e floatAula")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css07/?regiao=" + regiao
  }, "Posicionamento de elementos, bordas e z-index")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css08/?regiao=" + regiao
  }, "Efeitos com o atributo hover")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css09/?regiao=" + regiao
  }, "Heran\xE7a")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css10/?regiao=" + regiao
  }, "Criando um menu com listas")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css11/?regiao=" + regiao
  }, "Menu drop-down")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css12/?regiao=" + regiao
  }, "Valida\xE7\xE3o e Web Standards")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css13/?regiao=" + regiao
  }, "Tabelas Style")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/anima_but/?regiao=" + regiao
  }, "Exemplos Anima But")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/html5/?regiao=" + regiao
  }, "HTML")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/html5/?regiao=" + regiao
  }, "HTML5 Introdu\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/amp/codigo/html5/?regiao=" + regiao
  }, "HTML5 Introdu\xE7\xE3o (Pagina AMP)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Estrutura da P\xE1gina HTML5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/amp/codigo/?regiao=" + regiao
  }, "Estrutura da P\xE1gina HTML5 (Pagina AMP)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Titulo, Par\xE1grafo e Quebra de Linha"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/amp/codigo/?regiao=" + regiao
  }, "Titulo, Par\xE1grafo e Quebra de Linha (Pagina AMP)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, "Listas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "N\xE3o ordenada"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Ordenada (type=1)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Ordenada (type=A)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Ordenada (type=i)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Ordenada (type=I)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Com descri\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, "Imagem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Imagens"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "MAP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Figure e Figcaption"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Iframe"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Links"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, "Tabelas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Tabelas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Tabelas Style"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Div e Span"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Coment\xE1rios"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, "Midia"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Audio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "V\xEDdeo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Video (Criando legendas)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Object"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, "Formul\xE1rio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Formul\xE1rios"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "com legenda)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "atributos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "campos: radio e checkbox)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "campos: Number, Range e Color)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Autocomplete e Placeholder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Types: File, Hidden, Search, URL, Tel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Types Date, Time, Month, Week, Datetime local"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Textarea, Spellcheck"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Select, Optgroup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Formul\xE1rios Datalist)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Formul\xE1rios Form, Formaction, Formmethod, Formenctype, Formnovalidate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Mark e Contenteditable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Tabindex e Accesskey"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Formul\xE1rio Campo (Keygen)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Hgroup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Meter e Progresse"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Tag link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Time e Datetime"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Menu e Menuitem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, "SVG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "rect"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "ellipse, text"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "line, polygon, polyline"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, "Carrosel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Carrosel 01"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Carrosel 02"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Semantica"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-272789479"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/java/?regiao=" + regiao
  }, "Java")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/java/?regiao=" + regiao
  }, "Java")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/java/?regiao=" + regiao
  }, "redirect 301 em JSP")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/javascript?regiao=" + regiao
  }, "JS JavaScript")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/javascript?regiao=" + regiao
  }, "JS JavaScript")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/javascript?regiao=" + regiao
  }, "JS JavaScript")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/javascript?regiao=" + regiao
  }, "JS JavaScript")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 01")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 02")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 03")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 04")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 05")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 06")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/dotnet/?regiao=" + regiao
  }, ".NET")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/dotnet/?regiao=" + regiao
  }, ".NET")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/dotnet/?regiao=" + regiao
  }, "redirect 301 em ASP.NET")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/?regiao=" + regiao
  }, "PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/?regiao=" + regiao
  }, "PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/redirect/?regiao=" + regiao
  }, "redirect 301 no PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/procuraarquivo/?regiao=" + regiao
  }, "encontrar arquivio no PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/procuradiretorio/?regiao=" + regiao
  }, "encontrar diretorio no PHP")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/rubyonrails/?regiao=" + regiao
  }, "Ruby on Rails")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/rubyonrails/?regiao=" + regiao
  }, "redirect 301 em Ruby on Rails"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/utilitarios/?regiao=" + regiao
  }, "Utilitarios")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/utilitarios/conversordetexto?regiao=" + regiao
  }, "Conversor de Texto")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/utilitarios/conversordeunidade?regiao=" + regiao
  }, "Conversor de Unidade")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/utilitarios/servicosgratuitos?regiao=" + regiao
  }, "Servicos Gratuitos")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/game/?regiao=" + regiao
  }, "Games")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/game/controleogodzilla?regiao=" + regiao
  }, "GAME - Controle O Godzilla")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/game/tanque?regiao=" + regiao
  }, "GAME - Tanque")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/componentes/"
  }, "Componentes")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/componentes/?regiao=" + regiao
  }, "Componentes")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/eu/?regiao=" + regiao
  }, "Quem Sou Eu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-272789479"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/eu/curriculo/?regiao=" + regiao
  }, "Curriculo"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "272789479"
  }, ".CssRotasProjeto.jsx-272789479{width:100%;color:#333;font-size:17px;}.CssTitleRotasProjeto.jsx-272789479{margin:0;width:100%;padding-top:10px;font-size:22px;}li.jsx-272789479 summary.jsx-272789479{font-family:oiTextRegular,sans-serif;background-color:#ffffff;border-radius:8px;color:#222222;display:block;font-size:1rem;height:3.42857143rem;text-align:center;width:300px;-webkit-text-decoration:none;text-decoration:none;border:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition:0.5s;transition:0.5s;-webkit-box-shadow:2px 2px 20px rgba(1,1,1,0.17);-moz-box-shadow:2px 2px 20px rgba(1,1,1,0.17);box-shadow:2px 2px 20px rgba(1,1,1,0.17);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vTGlzdGFkZVJvdGFzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlTa0IsQUFHb0IsQUFLRixBQU1pQyxTQUwvQixFQUxBLFNBTU0sRUFMRixlQUNqQixBQUtpQixBQUljLGVBSC9CLFVBSXdCLGtCQUNKLGNBQ0EsY0FDQyxlQUNNLHFCQUNILGtCQUNOLFlBQ1Msa0RBQ0kseUJBQ1YsZUFDTCxVQUNELFNBQ00sZUFDTyxzQkFDSixrQkFDRix3Q0FDb0MsaURBQ0gsOENBQ0wseUNBQzlDIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vTGlzdGFkZVJvdGFzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cbi8vY29uc29sZS5sb2coJ0luc3RhbmNpYW5kbyB0ZW1wbGF0ZXMvaW5kZXguanMnKTtcbmNvbnN0IExpc3RhZGVSb3RhcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCByZWdpYW8gPSBwcm9wcy5yZWdpYW87XG4gIGNvbnN0IG1vZG8gPSBwcm9wcy5tb2RvO1xuICB2YXIgU3RyaW5nTW9kbyA9IFwiXCI7XG4gIGlmKG1vZG89PVwiQU1QXCIgfHwgbW9kbz09XCJhbXBcIil7XG4gICAgU3RyaW5nTW9kbyA9IFwiL2FtcFwiO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPSdDc3NSb3Rhc1Byb2pldG8nPlxuICAgICAgICBcbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi8/cmVnaWFvPVwiK3JlZ2lhb30+SG9tZTwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1wiLz9yZWdpYW89XCIrcmVnaWFvfT5Ib21lIChQYWdpbmEgZW0gSFRNTCk8L0xpbms+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvYW1wLz9yZWdpYW89XCIrcmVnaWFvfT5Ib21lIChQYWdpbmEgZW0gQU1QKTwvTGluaz48L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT5DT0RJR088L3N1bW1hcnk+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vYXBhY2hlLz9yZWdpYW89XCIrcmVnaWFvfT5BcGFjaGU8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vYXBhY2hlL2luc3RhbHVidW50dT9yZWdpYW89XCIrcmVnaWFvfT5JbnN0YWxhciBBcGFjaGUgbm8gVWJ1bnR1PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2FwYWNoZS9hbGlhcz9yZWdpYW89XCIrcmVnaWFvfT5BbGlhcyBlbSBBcGFjaGU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vYXBhY2hlL3JlZGlyZWN0P3JlZ2lhbz1cIityZWdpYW99PnJlZGlyZWN0IDMwMSBlbSBBcGFjaGU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgIDxzdW1tYXJ5PjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2FzcC8/cmVnaWFvPVwiK3JlZ2lhb30+QVNQPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2FzcC8/cmVnaWFvPVwiK3JlZ2lhb30+QVNQPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2FzcC9yZWRpcmVjdD9yZWdpYW89XCIrcmVnaWFvfT5yZWRpcmVjdCAzMDEgZW0gQVNQPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jZ2kvP3JlZ2lhbz1cIityZWdpYW99PkNHSSBQRVJMPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2NnaS9yZWRpcmVjdD9yZWdpYW89XCIrcmVnaWFvfT5yZWRpcmVjdCAzMDEgZW0gQ0dJPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY29sZGZ1c2lvbi8/cmVnaWFvPVwiK3JlZ2lhb30+Q29sZEZ1c2lvbjwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jb2xkZnVzaW9uLz9yZWdpYW89XCIrcmVnaWFvfT5yZWRpcmVjdCAzMDEgZW0gQ29sZEZ1c2lvbjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzLz9yZWdpYW89XCIrcmVnaWFvfT5DU1M8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzLz9yZWdpYW89XCIrcmVnaWFvfT5JbnRyb2R1w6fDo28gYW8gQ1NTPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy9jc3MwMi8/cmVnaWFvPVwiK3JlZ2lhb30+RXN0aWxpemFuZG8gdGV4dG9zPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy9jc3MwMy8/cmVnaWFvPVwiK3JlZ2lhb30+SW1hZ2VucyBkZSBmdW5kbyBlIGF0cmlidXRvIHRleHQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzL2NzczA0Lz9yZWdpYW89XCIrcmVnaWFvfT5MaW5rcyBlIERpdnM8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzL2NzczA1Lz9yZWdpYW89XCIrcmVnaWFvfT5DbGFzc2UsIElEIGUgU3BhbjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMDYvP3JlZ2lhbz1cIityZWdpYW99Pk1hcmdpbiwgcGFkZGluZyBlIGZsb2F0QXVsYTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMDcvP3JlZ2lhbz1cIityZWdpYW99PlBvc2ljaW9uYW1lbnRvIGRlIGVsZW1lbnRvcywgYm9yZGFzIGUgei1pbmRleDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMDgvP3JlZ2lhbz1cIityZWdpYW99PkVmZWl0b3MgY29tIG8gYXRyaWJ1dG8gaG92ZXI8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzL2NzczA5Lz9yZWdpYW89XCIrcmVnaWFvfT5IZXJhbsOnYTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMTAvP3JlZ2lhbz1cIityZWdpYW99PkNyaWFuZG8gdW0gbWVudSBjb20gbGlzdGFzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy9jc3MxMS8/cmVnaWFvPVwiK3JlZ2lhb30+TWVudSBkcm9wLWRvd248L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzL2NzczEyLz9yZWdpYW89XCIrcmVnaWFvfT5WYWxpZGHDp8OjbyBlIFdlYiBTdGFuZGFyZHM8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzL2NzczEzLz9yZWdpYW89XCIrcmVnaWFvfT5UYWJlbGFzIFN0eWxlPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy9hbmltYV9idXQvP3JlZ2lhbz1cIityZWdpYW99PkV4ZW1wbG9zIEFuaW1hIEJ1dDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vaHRtbDUvP3JlZ2lhbz1cIityZWdpYW99PkhUTUw8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9odG1sNS8/cmVnaWFvPVwiK3JlZ2lhb30+SFRNTDUgSW50cm9kdcOnw6NvPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9hbXAvY29kaWdvL2h0bWw1Lz9yZWdpYW89XCIrcmVnaWFvfT5IVE1MNSBJbnRyb2R1w6fDo28gKFBhZ2luYSBBTVApPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkVzdHJ1dHVyYSBkYSBQw6FnaW5hIEhUTUw1PC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9hbXAvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5Fc3RydXR1cmEgZGEgUMOhZ2luYSBIVE1MNSAoUGFnaW5hIEFNUCk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+VGl0dWxvLCBQYXLDoWdyYWZvIGUgUXVlYnJhIGRlIExpbmhhPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9hbXAvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5UaXR1bG8sIFBhcsOhZ3JhZm8gZSBRdWVicmEgZGUgTGluaGEgKFBhZ2luYSBBTVApPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5Pkxpc3Rhczwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99Pk7Do28gb3JkZW5hZGE8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5PcmRlbmFkYSAodHlwZT0xKTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99Pk9yZGVuYWRhICh0eXBlPUEpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+T3JkZW5hZGEgKHR5cGU9aSk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5PcmRlbmFkYSAodHlwZT1JKTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkNvbSBkZXNjcmnDp8OjbzwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT5JbWFnZW08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5JbWFnZW5zPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+TUFQPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+RmlndXJlIGUgRmlnY2FwdGlvbjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5JZnJhbWU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+TGlua3M8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+VGFiZWxhczwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlRhYmVsYXM8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5UYWJlbGFzIFN0eWxlPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkRpdiBlIFNwYW48L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+Q29tZW50w6FyaW9zPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5Pk1pZGlhPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+QXVkaW88L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5Ww61kZW88L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5WaWRlbyAoQ3JpYW5kbyBsZWdlbmRhcyk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5PYmplY3Q8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+Rm9ybXVsw6FyaW88L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5Gb3JtdWzDoXJpb3M8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5jb20gbGVnZW5kYSk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5hdHJpYnV0b3M8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5jYW1wb3M6IHJhZGlvIGUgY2hlY2tib3gpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+Y2FtcG9zOiBOdW1iZXIsIFJhbmdlIGUgQ29sb3IpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+QXV0b2NvbXBsZXRlIGUgUGxhY2Vob2xkZXI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5UeXBlczogRmlsZSwgSGlkZGVuLCBTZWFyY2gsIFVSTCwgVGVsPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+VHlwZXMgRGF0ZSwgVGltZSwgTW9udGgsIFdlZWssIERhdGV0aW1lIGxvY2FsPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+VGV4dGFyZWEsIFNwZWxsY2hlY2s8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5CdXR0b248L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5TZWxlY3QsIE9wdGdyb3VwPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+Rm9ybXVsw6FyaW9zIERhdGFsaXN0KTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkZvcm11bMOhcmlvcyBGb3JtLCBGb3JtYWN0aW9uLCBGb3JtbWV0aG9kLCBGb3JtZW5jdHlwZSwgRm9ybW5vdmFsaWRhdGU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5NYXJrIGUgQ29udGVudGVkaXRhYmxlPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+VGFiaW5kZXggZSBBY2Nlc3NrZXk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5Gb3JtdWzDoXJpbyBDYW1wbyAoS2V5Z2VuKTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5EZXRhaWxzPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99Pkhncm91cDwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5NZXRlciBlIFByb2dyZXNzZTwvTGluaz48YnIgLz5cblxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlRhZyBsaW5rPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlRpbWUgZSBEYXRldGltZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5NZW51IGUgTWVudWl0ZW08L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+U1ZHPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+cmVjdDwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PmVsbGlwc2UsIHRleHQ8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5saW5lLCBwb2x5Z29uLCBwb2x5bGluZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT5DYXJyb3NlbDwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkNhcnJvc2VsIDAxPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+Q2Fycm9zZWwgMDI8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+U2VtYW50aWNhPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9qYXZhLz9yZWdpYW89XCIrcmVnaWFvfT5KYXZhPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2phdmEvP3JlZ2lhbz1cIityZWdpYW99PkphdmE8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vamF2YS8/cmVnaWFvPVwiK3JlZ2lhb30+cmVkaXJlY3QgMzAxIGVtIEpTUDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vamF2YXNjcmlwdD9yZWdpYW89XCIrcmVnaWFvfT5KUyBKYXZhU2NyaXB0PC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2phdmFzY3JpcHQ/cmVnaWFvPVwiK3JlZ2lhb30+SlMgSmF2YVNjcmlwdDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9qYXZhc2NyaXB0P3JlZ2lhbz1cIityZWdpYW99PkpTIEphdmFTY3JpcHQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vamF2YXNjcmlwdD9yZWdpYW89XCIrcmVnaWFvfT5KUyBKYXZhU2NyaXB0PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9rbm9ja291dC8/cmVnaWFvPVwiK3JlZ2lhb30+a25vY2tvdXQgSlM8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28va25vY2tvdXQvP3JlZ2lhbz1cIityZWdpYW99Pmtub2Nrb3V0IEpTIGV4ZW1wbG8gMDE8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28va25vY2tvdXQvP3JlZ2lhbz1cIityZWdpYW99Pmtub2Nrb3V0IEpTIGV4ZW1wbG8gMDI8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28va25vY2tvdXQvP3JlZ2lhbz1cIityZWdpYW99Pmtub2Nrb3V0IEpTIGV4ZW1wbG8gMDM8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28va25vY2tvdXQvP3JlZ2lhbz1cIityZWdpYW99Pmtub2Nrb3V0IEpTIGV4ZW1wbG8gMDQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28va25vY2tvdXQvP3JlZ2lhbz1cIityZWdpYW99Pmtub2Nrb3V0IEpTIGV4ZW1wbG8gMDU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28va25vY2tvdXQvP3JlZ2lhbz1cIityZWdpYW99Pmtub2Nrb3V0IEpTIGV4ZW1wbG8gMDY8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgIDxzdW1tYXJ5PjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2RvdG5ldC8/cmVnaWFvPVwiK3JlZ2lhb30+Lk5FVDwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9kb3RuZXQvP3JlZ2lhbz1cIityZWdpYW99Pi5ORVQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vZG90bmV0Lz9yZWdpYW89XCIrcmVnaWFvfT5yZWRpcmVjdCAzMDEgZW0gQVNQLk5FVDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vcGhwLz9yZWdpYW89XCIrcmVnaWFvfT5QSFA8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vcGhwLz9yZWdpYW89XCIrcmVnaWFvfT5QSFA8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vcGhwL3JlZGlyZWN0Lz9yZWdpYW89XCIrcmVnaWFvfT5yZWRpcmVjdCAzMDEgbm8gUEhQPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL3BocC9wcm9jdXJhYXJxdWl2by8/cmVnaWFvPVwiK3JlZ2lhb30+ZW5jb250cmFyIGFycXVpdmlvIG5vIFBIUDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9waHAvcHJvY3VyYWRpcmV0b3Jpby8/cmVnaWFvPVwiK3JlZ2lhb30+ZW5jb250cmFyIGRpcmV0b3JpbyBubyBQSFA8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgIDxzdW1tYXJ5PjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL3J1YnlvbnJhaWxzLz9yZWdpYW89XCIrcmVnaWFvfT5SdWJ5IG9uIFJhaWxzPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL3J1YnlvbnJhaWxzLz9yZWdpYW89XCIrcmVnaWFvfT5yZWRpcmVjdCAzMDEgZW0gUnVieSBvbiBSYWlsczwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi91dGlsaXRhcmlvcy8/cmVnaWFvPVwiK3JlZ2lhb30+VXRpbGl0YXJpb3M8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvdXRpbGl0YXJpb3MvY29udmVyc29yZGV0ZXh0bz9yZWdpYW89XCIrcmVnaWFvfT5Db252ZXJzb3IgZGUgVGV4dG88L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL3V0aWxpdGFyaW9zL2NvbnZlcnNvcmRldW5pZGFkZT9yZWdpYW89XCIrcmVnaWFvfT5Db252ZXJzb3IgZGUgVW5pZGFkZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvdXRpbGl0YXJpb3Mvc2Vydmljb3NncmF0dWl0b3M/cmVnaWFvPVwiK3JlZ2lhb30+U2Vydmljb3MgR3JhdHVpdG9zPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9nYW1lLz9yZWdpYW89XCIrcmVnaWFvfT5HYW1lczwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9nYW1lL2NvbnRyb2xlb2dvZHppbGxhP3JlZ2lhbz1cIityZWdpYW99PkdBTUUgLSBDb250cm9sZSBPIEdvZHppbGxhPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9nYW1lL3RhbnF1ZT9yZWdpYW89XCIrcmVnaWFvfT5HQU1FIC0gVGFucXVlPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgIHsvKiA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2h1Yi8/cmVnaWFvPVwiK3JlZ2lhb30+SHViIGRlIENvbnRhdG88L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICA8L2RldGFpbHM+ICovfVxuXG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5ID48TGluayBocmVmPXtcIi9jb21wb25lbnRlcy9cIn0+Q29tcG9uZW50ZXM8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29tcG9uZW50ZXMvP3JlZ2lhbz1cIityZWdpYW99PkNvbXBvbmVudGVzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2V1Lz9yZWdpYW89XCIrcmVnaWFvfT5RdWVtIFNvdSBFdTwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9ldS9jdXJyaWN1bG8vP3JlZ2lhbz1cIityZWdpYW99PkN1cnJpY3VsbzwvTGluaz48L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGV0YWlscz5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuQ3NzUm90YXNQcm9qZXRvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICB9XG4gICAgICAuQ3NzVGl0bGVSb3Rhc1Byb2pldG8ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgfVxuICAgICAgbGkgc3VtbWFyeSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogb2lUZXh0UmVndWxhciwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtOyAvKjE2cHgqL1xuICAgICAgICAgICAgaGVpZ2h0OiAzLjQyODU3MTQzcmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2RiZGJkYjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjJyZW07XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMSwgMSwgMSwgMC4xNyk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMjBweCByZ2JhKDEsIDEsIDEsIDAuMTcpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMSwgMSwgMSwgMC4xNyk7XG4gICAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0YWRlUm90YXNcbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moListadeRotas/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ListadeRotas);

/***/ })

})
//# sourceMappingURL=_error.js.a32ce8dcc850c658df8a.hot-update.js.map