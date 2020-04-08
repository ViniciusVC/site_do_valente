webpackHotUpdate("static/development/pages/routes/utilitarios/servicosgratuitos.js",{

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
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-1456622017" + " " + 'CssRotasProjeto'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/?regiao=" + regiao
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/?regiao=" + regiao
  }, "Home (Pagina em HTML)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/amp/?regiao=" + regiao
  }, "Home (Pagina em AMP)")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, "CODIGO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/apache/?regiao=" + regiao
  }, "Apache")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/apache/instalubuntu?regiao=" + regiao
  }, "Instalar Apache no Ubuntu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/apache/alias?regiao=" + regiao
  }, "Alias em Apache")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/apache/redirect?regiao=" + regiao
  }, "redirect 301 em Apache")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/asp/?regiao=" + regiao
  }, "ASP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/asp/?regiao=" + regiao
  }, "ASP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/asp/redirect?regiao=" + regiao
  }, "redirect 301 em ASP")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/cgi/?regiao=" + regiao
  }, "CGI PERL")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/cgi/redirect?regiao=" + regiao
  }, "redirect 301 em CGI")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/coldfusion/?regiao=" + regiao
  }, "ColdFusion")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/coldfusion/?regiao=" + regiao
  }, "redirect 301 em ColdFusion")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/?regiao=" + regiao
  }, "CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/?regiao=" + regiao
  }, "Introdu\xE7\xE3o ao CSS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css02/?regiao=" + regiao
  }, "Estilizando textos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css03/?regiao=" + regiao
  }, "Imagens de fundo e atributo text")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css04/?regiao=" + regiao
  }, "Links e Divs")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css05/?regiao=" + regiao
  }, "Classe, ID e Span")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css06/?regiao=" + regiao
  }, "Margin, padding e floatAula")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css07/?regiao=" + regiao
  }, "Posicionamento de elementos, bordas e z-index")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css08/?regiao=" + regiao
  }, "Efeitos com o atributo hover")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css09/?regiao=" + regiao
  }, "Heran\xE7a")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css10/?regiao=" + regiao
  }, "Criando um menu com listas")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css11/?regiao=" + regiao
  }, "Menu drop-down")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css12/?regiao=" + regiao
  }, "Valida\xE7\xE3o e Web Standards")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/css13/?regiao=" + regiao
  }, "Tabelas Style")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/css/anima_but/?regiao=" + regiao
  }, "Exemplos Anima But")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/html5/?regiao=" + regiao
  }, "HTML")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/html5/?regiao=" + regiao
  }, "HTML5 Introdu\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/amp/codigo/html5/?regiao=" + regiao
  }, "HTML5 Introdu\xE7\xE3o (Pagina AMP)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Estrutura da P\xE1gina HTML5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/amp/codigo/?regiao=" + regiao
  }, "Estrutura da P\xE1gina HTML5 (Pagina AMP)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Titulo, Par\xE1grafo e Quebra de Linha"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/amp/codigo/?regiao=" + regiao
  }, "Titulo, Par\xE1grafo e Quebra de Linha (Pagina AMP)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, "Listas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "N\xE3o ordenada"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Ordenada (type=1)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Ordenada (type=A)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Ordenada (type=i)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Ordenada (type=I)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Com descri\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, "Imagem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Imagens"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "MAP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Figure e Figcaption"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Iframe"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Links"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, "Tabelas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Tabelas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Tabelas Style"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Div e Span"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Coment\xE1rios"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, "Midia"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Audio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "V\xEDdeo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Video (Criando legendas)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Object"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, "Formul\xE1rio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Formul\xE1rios"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "com legenda)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "atributos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "campos: radio e checkbox)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "campos: Number, Range e Color)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Autocomplete e Placeholder"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Types: File, Hidden, Search, URL, Tel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Types Date, Time, Month, Week, Datetime local"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Textarea, Spellcheck"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Button"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Select, Optgroup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Formul\xE1rios Datalist)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Formul\xE1rios Form, Formaction, Formmethod, Formenctype, Formnovalidate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Mark e Contenteditable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Tabindex e Accesskey"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Formul\xE1rio Campo (Keygen)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Hgroup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Meter e Progresse"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Tag link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Time e Datetime"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Menu e Menuitem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, "SVG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "rect"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "ellipse, text"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "line, polygon, polyline"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, "Carrosel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Carrosel 01"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Carrosel 02"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/?regiao=" + regiao
  }, "Semantica"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1456622017"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/java/?regiao=" + regiao
  }, "Java")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/java/?regiao=" + regiao
  }, "Java")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/java/?regiao=" + regiao
  }, "redirect 301 em JSP")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/javascript?regiao=" + regiao
  }, "JS JavaScript")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/javascript?regiao=" + regiao
  }, "JS JavaScript")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/javascript?regiao=" + regiao
  }, "JS JavaScript")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/javascript?regiao=" + regiao
  }, "JS JavaScript")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 01")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 02")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 03")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 04")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 05")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/knockout/?regiao=" + regiao
  }, "knockout JS exemplo 06")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/dotnet/?regiao=" + regiao
  }, ".NET")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/dotnet/?regiao=" + regiao
  }, ".NET")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/dotnet/?regiao=" + regiao
  }, "redirect 301 em ASP.NET")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/?regiao=" + regiao
  }, "PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/?regiao=" + regiao
  }, "PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/redirect/?regiao=" + regiao
  }, "redirect 301 no PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/procuraarquivo/?regiao=" + regiao
  }, "encontrar arquivio no PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/php/procuradiretorio/?regiao=" + regiao
  }, "encontrar diretorio no PHP")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/rubyonrails/?regiao=" + regiao
  }, "Ruby on Rails")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/codigo/rubyonrails/?regiao=" + regiao
  }, "redirect 301 em Ruby on Rails"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/utilitarios/?regiao=" + regiao
  }, "Utilitarios")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/utilitarios/conversordetexto?regiao=" + regiao
  }, "Conversor de Texto")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/utilitarios/conversordeunidade?regiao=" + regiao
  }, "Conversor de Unidade")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/utilitarios/servicosgratuitos?regiao=" + regiao
  }, "Servicos Gratuitos")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/game/?regiao=" + regiao
  }, "Games")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/game/controleogodzilla?regiao=" + regiao
  }, "GAME - Controle O Godzilla")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/game/tanque?regiao=" + regiao
  }, "GAME - Tanque")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/componentes/"
  }, "Componentes")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/componentes/?regiao=" + regiao
  }, "Componentes")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/eu/?regiao=" + regiao
  }, "Quem Sou Eu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", {
    type: "1",
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1456622017"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: StringModo + "/eu/curriculo/?regiao=" + regiao
  }, "Curriculo"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1456622017"
  }, ".CssRotasProjeto.jsx-1456622017{width:100%;color:#333;font-size:17px;}.CssTitleRotasProjeto.jsx-1456622017{margin:0;width:100%;padding-top:10px;font-size:22px;}li.jsx-1456622017{font-family:oiTextRegular,sans-serif;background-color:#ffffff;border-radius:8px;color:#222222;display:block;font-size:16px;height:20px;width:300px;-webkit-text-decoration:none;text-decoration:none;border:solid 2px #dbdbdb;cursor:pointer;outline:0;margin:0;padding:1px;box-sizing:border-box;font-style:normal;-webkit-transition:0.5s;transition:0.5s;-webkit-box-shadow:2px 2px 20px rgba(1,1,1,0.17);-moz-box-shadow:2px 2px 20px rgba(1,1,1,0.17);box-shadow:2px 2px 20px rgba(1,1,1,0.17);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vTGlzdGFkZVJvdGFzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlTa0IsQUFHb0IsQUFLRixBQU1pQyxTQUwvQixFQUxBLFNBTU0sRUFMRixlQUNqQixBQUtpQixBQUljLGVBSC9CLFVBSXdCLGtCQUNKLGNBQ0EsY0FDQyxlQUNILFlBQ0EsWUFFUyxrREFDSSx5QkFDVixlQUNMLFVBQ0QsU0FDRyxZQUNVLHNCQUNKLGtCQUNGLHdDQUNvQyxpREFDSCw4Q0FDTCx5Q0FDOUMiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9tb2xlY3VsYXMvbW9MaXN0YWRlUm90YXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuLy9jb25zb2xlLmxvZygnSW5zdGFuY2lhbmRvIHRlbXBsYXRlcy9pbmRleC5qcycpO1xuY29uc3QgTGlzdGFkZVJvdGFzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIGNvbnN0IHJlZ2lhbyA9IHByb3BzLnJlZ2lhbztcbiAgY29uc3QgbW9kbyA9IHByb3BzLm1vZG87XG4gIHZhciBTdHJpbmdNb2RvID0gXCJcIjtcbiAgaWYobW9kbz09XCJBTVBcIiB8fCBtb2RvPT1cImFtcFwiKXtcbiAgICBTdHJpbmdNb2RvID0gXCIvYW1wXCI7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9J0Nzc1JvdGFzUHJvamV0byc+XG4gICAgICAgIFxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiLz9yZWdpYW89XCIrcmVnaWFvfT5Ib21lPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICA8bGk+PExpbmsgaHJlZj17XCIvP3JlZ2lhbz1cIityZWdpYW99PkhvbWUgKFBhZ2luYSBlbSBIVE1MKTwvTGluaz48L2xpPlxuICAgICAgICAgIDxsaT48TGluayBocmVmPXtcIi9hbXAvP3JlZ2lhbz1cIityZWdpYW99PkhvbWUgKFBhZ2luYSBlbSBBTVApPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5PkNPRElHTzwvc3VtbWFyeT5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9hcGFjaGUvP3JlZ2lhbz1cIityZWdpYW99PkFwYWNoZTwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9hcGFjaGUvaW5zdGFsdWJ1bnR1P3JlZ2lhbz1cIityZWdpYW99Pkluc3RhbGFyIEFwYWNoZSBubyBVYnVudHU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vYXBhY2hlL2FsaWFzP3JlZ2lhbz1cIityZWdpYW99PkFsaWFzIGVtIEFwYWNoZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9hcGFjaGUvcmVkaXJlY3Q/cmVnaWFvPVwiK3JlZ2lhb30+cmVkaXJlY3QgMzAxIGVtIEFwYWNoZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vYXNwLz9yZWdpYW89XCIrcmVnaWFvfT5BU1A8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vYXNwLz9yZWdpYW89XCIrcmVnaWFvfT5BU1A8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vYXNwL3JlZGlyZWN0P3JlZ2lhbz1cIityZWdpYW99PnJlZGlyZWN0IDMwMSBlbSBBU1A8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgIDxzdW1tYXJ5PjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2NnaS8/cmVnaWFvPVwiK3JlZ2lhb30+Q0dJIFBFUkw8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY2dpL3JlZGlyZWN0P3JlZ2lhbz1cIityZWdpYW99PnJlZGlyZWN0IDMwMSBlbSBDR0k8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jb2xkZnVzaW9uLz9yZWdpYW89XCIrcmVnaWFvfT5Db2xkRnVzaW9uPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2NvbGRmdXNpb24vP3JlZ2lhbz1cIityZWdpYW99PnJlZGlyZWN0IDMwMSBlbSBDb2xkRnVzaW9uPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvP3JlZ2lhbz1cIityZWdpYW99PkNTUzwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvP3JlZ2lhbz1cIityZWdpYW99PkludHJvZHXDp8OjbyBhbyBDU1M8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzL2NzczAyLz9yZWdpYW89XCIrcmVnaWFvfT5Fc3RpbGl6YW5kbyB0ZXh0b3M8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzL2NzczAzLz9yZWdpYW89XCIrcmVnaWFvfT5JbWFnZW5zIGRlIGZ1bmRvIGUgYXRyaWJ1dG8gdGV4dDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMDQvP3JlZ2lhbz1cIityZWdpYW99PkxpbmtzIGUgRGl2czwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMDUvP3JlZ2lhbz1cIityZWdpYW99PkNsYXNzZSwgSUQgZSBTcGFuPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy9jc3MwNi8/cmVnaWFvPVwiK3JlZ2lhb30+TWFyZ2luLCBwYWRkaW5nIGUgZmxvYXRBdWxhPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy9jc3MwNy8/cmVnaWFvPVwiK3JlZ2lhb30+UG9zaWNpb25hbWVudG8gZGUgZWxlbWVudG9zLCBib3JkYXMgZSB6LWluZGV4PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy9jc3MwOC8/cmVnaWFvPVwiK3JlZ2lhb30+RWZlaXRvcyBjb20gbyBhdHJpYnV0byBob3ZlcjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMDkvP3JlZ2lhbz1cIityZWdpYW99PkhlcmFuw6dhPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2Nzcy9jc3MxMC8/cmVnaWFvPVwiK3JlZ2lhb30+Q3JpYW5kbyB1bSBtZW51IGNvbSBsaXN0YXM8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzL2NzczExLz9yZWdpYW89XCIrcmVnaWFvfT5NZW51IGRyb3AtZG93bjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMTIvP3JlZ2lhbz1cIityZWdpYW99PlZhbGlkYcOnw6NvIGUgV2ViIFN0YW5kYXJkczwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9jc3MvY3NzMTMvP3JlZ2lhbz1cIityZWdpYW99PlRhYmVsYXMgU3R5bGU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vY3NzL2FuaW1hX2J1dC8/cmVnaWFvPVwiK3JlZ2lhb30+RXhlbXBsb3MgQW5pbWEgQnV0PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9odG1sNS8/cmVnaWFvPVwiK3JlZ2lhb30+SFRNTDwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2h0bWw1Lz9yZWdpYW89XCIrcmVnaWFvfT5IVE1MNSBJbnRyb2R1w6fDo288L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2FtcC9jb2RpZ28vaHRtbDUvP3JlZ2lhbz1cIityZWdpYW99PkhUTUw1IEludHJvZHXDp8OjbyAoUGFnaW5hIEFNUCk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+RXN0cnV0dXJhIGRhIFDDoWdpbmEgSFRNTDU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2FtcC9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkVzdHJ1dHVyYSBkYSBQw6FnaW5hIEhUTUw1IChQYWdpbmEgQU1QKTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5UaXR1bG8sIFBhcsOhZ3JhZm8gZSBRdWVicmEgZGUgTGluaGE8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2FtcC9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlRpdHVsbywgUGFyw6FncmFmbyBlIFF1ZWJyYSBkZSBMaW5oYSAoUGFnaW5hIEFNUCk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+TGlzdGFzPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+TsOjbyBvcmRlbmFkYTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99Pk9yZGVuYWRhICh0eXBlPTEpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+T3JkZW5hZGEgKHR5cGU9QSk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5PcmRlbmFkYSAodHlwZT1pKTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99Pk9yZGVuYWRhICh0eXBlPUkpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+Q29tIGRlc2NyacOnw6NvPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PkltYWdlbTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkltYWdlbnM8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5NQVA8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5GaWd1cmUgZSBGaWdjYXB0aW9uPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PklmcmFtZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5MaW5rczwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT5UYWJlbGFzPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+VGFiZWxhczwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlRhYmVsYXMgU3R5bGU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+RGl2IGUgU3BhbjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5Db21lbnTDoXJpb3M8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+TWlkaWE8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5BdWRpbzwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlbDrWRlbzwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlZpZGVvIChDcmlhbmRvIGxlZ2VuZGFzKTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99Pk9iamVjdDwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT5Gb3JtdWzDoXJpbzwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkZvcm11bMOhcmlvczwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PmNvbSBsZWdlbmRhKTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PmF0cmlidXRvczwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PmNhbXBvczogcmFkaW8gZSBjaGVja2JveCk8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5jYW1wb3M6IE51bWJlciwgUmFuZ2UgZSBDb2xvcik8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5BdXRvY29tcGxldGUgZSBQbGFjZWhvbGRlcjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlR5cGVzOiBGaWxlLCBIaWRkZW4sIFNlYXJjaCwgVVJMLCBUZWw8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5UeXBlcyBEYXRlLCBUaW1lLCBNb250aCwgV2VlaywgRGF0ZXRpbWUgbG9jYWw8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5UZXh0YXJlYSwgU3BlbGxjaGVjazwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkJ1dHRvbjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PlNlbGVjdCwgT3B0Z3JvdXA8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5Gb3JtdWzDoXJpb3MgRGF0YWxpc3QpPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+Rm9ybXVsw6FyaW9zIEZvcm0sIEZvcm1hY3Rpb24sIEZvcm1tZXRob2QsIEZvcm1lbmN0eXBlLCBGb3Jtbm92YWxpZGF0ZTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99Pk1hcmsgZSBDb250ZW50ZWRpdGFibGU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5UYWJpbmRleCBlIEFjY2Vzc2tleTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkZvcm11bMOhcmlvIENhbXBvIChLZXlnZW4pPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PkRldGFpbHM8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+SGdyb3VwPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99Pk1ldGVyIGUgUHJvZ3Jlc3NlPC9MaW5rPjxiciAvPlxuXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+VGFnIGxpbms8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+VGltZSBlIERhdGV0aW1lPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99Pk1lbnUgZSBNZW51aXRlbTwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT5TVkc8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5yZWN0PC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+ZWxsaXBzZSwgdGV4dDwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vP3JlZ2lhbz1cIityZWdpYW99PmxpbmUsIHBvbHlnb24sIHBvbHlsaW5lPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PkNhcnJvc2VsPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby8/cmVnaWFvPVwiK3JlZ2lhb30+Q2Fycm9zZWwgMDE8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5DYXJyb3NlbCAwMjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvLz9yZWdpYW89XCIrcmVnaWFvfT5TZW1hbnRpY2E8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgIDxzdW1tYXJ5PjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2phdmEvP3JlZ2lhbz1cIityZWdpYW99PkphdmE8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vamF2YS8/cmVnaWFvPVwiK3JlZ2lhb30+SmF2YTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9qYXZhLz9yZWdpYW89XCIrcmVnaWFvfT5yZWRpcmVjdCAzMDEgZW0gSlNQPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9qYXZhc2NyaXB0P3JlZ2lhbz1cIityZWdpYW99PkpTIEphdmFTY3JpcHQ8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vamF2YXNjcmlwdD9yZWdpYW89XCIrcmVnaWFvfT5KUyBKYXZhU2NyaXB0PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2phdmFzY3JpcHQ/cmVnaWFvPVwiK3JlZ2lhb30+SlMgSmF2YVNjcmlwdDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9qYXZhc2NyaXB0P3JlZ2lhbz1cIityZWdpYW99PkpTIEphdmFTY3JpcHQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgICAgIDxzdW1tYXJ5PjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2tub2Nrb3V0Lz9yZWdpYW89XCIrcmVnaWFvfT5rbm9ja291dCBKUzwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9rbm9ja291dC8/cmVnaWFvPVwiK3JlZ2lhb30+a25vY2tvdXQgSlMgZXhlbXBsbyAwMTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9rbm9ja291dC8/cmVnaWFvPVwiK3JlZ2lhb30+a25vY2tvdXQgSlMgZXhlbXBsbyAwMjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9rbm9ja291dC8/cmVnaWFvPVwiK3JlZ2lhb30+a25vY2tvdXQgSlMgZXhlbXBsbyAwMzwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9rbm9ja291dC8/cmVnaWFvPVwiK3JlZ2lhb30+a25vY2tvdXQgSlMgZXhlbXBsbyAwNDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9rbm9ja291dC8/cmVnaWFvPVwiK3JlZ2lhb30+a25vY2tvdXQgSlMgZXhlbXBsbyAwNTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9rbm9ja291dC8/cmVnaWFvPVwiK3JlZ2lhb30+a25vY2tvdXQgSlMgZXhlbXBsbyAwNjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vZG90bmV0Lz9yZWdpYW89XCIrcmVnaWFvfT4uTkVUPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL2RvdG5ldC8/cmVnaWFvPVwiK3JlZ2lhb30+Lk5FVDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9kb3RuZXQvP3JlZ2lhbz1cIityZWdpYW99PnJlZGlyZWN0IDMwMSBlbSBBU1AuTkVUPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9waHAvP3JlZ2lhbz1cIityZWdpYW99PlBIUDwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgICAgIDxvbCB0eXBlPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9waHAvP3JlZ2lhbz1cIityZWdpYW99PlBIUDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2NvZGlnby9waHAvcmVkaXJlY3QvP3JlZ2lhbz1cIityZWdpYW99PnJlZGlyZWN0IDMwMSBubyBQSFA8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vcGhwL3Byb2N1cmFhcnF1aXZvLz9yZWdpYW89XCIrcmVnaWFvfT5lbmNvbnRyYXIgYXJxdWl2aW8gbm8gUEhQPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvY29kaWdvL3BocC9wcm9jdXJhZGlyZXRvcmlvLz9yZWdpYW89XCIrcmVnaWFvfT5lbmNvbnRyYXIgZGlyZXRvcmlvIG5vIFBIUDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgPHN1bW1hcnk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vcnVieW9ucmFpbHMvP3JlZ2lhbz1cIityZWdpYW99PlJ1Ynkgb24gUmFpbHM8L0xpbms+PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb2RpZ28vcnVieW9ucmFpbHMvP3JlZ2lhbz1cIityZWdpYW99PnJlZGlyZWN0IDMwMSBlbSBSdWJ5IG9uIFJhaWxzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL3V0aWxpdGFyaW9zLz9yZWdpYW89XCIrcmVnaWFvfT5VdGlsaXRhcmlvczwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi91dGlsaXRhcmlvcy9jb252ZXJzb3JkZXRleHRvP3JlZ2lhbz1cIityZWdpYW99PkNvbnZlcnNvciBkZSBUZXh0bzwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvdXRpbGl0YXJpb3MvY29udmVyc29yZGV1bmlkYWRlP3JlZ2lhbz1cIityZWdpYW99PkNvbnZlcnNvciBkZSBVbmlkYWRlPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi91dGlsaXRhcmlvcy9zZXJ2aWNvc2dyYXR1aXRvcz9yZWdpYW89XCIrcmVnaWFvfT5TZXJ2aWNvcyBHcmF0dWl0b3M8L0xpbms+PC9saT5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICA8c3VtbWFyeT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2dhbWUvP3JlZ2lhbz1cIityZWdpYW99PkdhbWVzPC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2dhbWUvY29udHJvbGVvZ29kemlsbGE/cmVnaWFvPVwiK3JlZ2lhb30+R0FNRSAtIENvbnRyb2xlIE8gR29kemlsbGE8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2dhbWUvdGFucXVlP3JlZ2lhbz1cIityZWdpYW99PkdBTUUgLSBUYW5xdWU8L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgey8qIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5PjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvaHViLz9yZWdpYW89XCIrcmVnaWFvfT5IdWIgZGUgQ29udGF0bzwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgIDwvZGV0YWlscz4gKi99XG5cbiAgICAgICAgPGRldGFpbHM+XG4gICAgICAgICAgPHN1bW1hcnkgPjxMaW5rIGhyZWY9e1wiL2NvbXBvbmVudGVzL1wifT5Db21wb25lbnRlczwvTGluaz48L3N1bW1hcnk+XG4gICAgICAgICAgPG9sIHR5cGU9XCIxXCI+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17U3RyaW5nTW9kbytcIi9jb21wb25lbnRlcy8/cmVnaWFvPVwiK3JlZ2lhb30+Q29tcG9uZW50ZXM8L0xpbms+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgIDxzdW1tYXJ5PjxMaW5rIGhyZWY9e1N0cmluZ01vZG8rXCIvZXUvP3JlZ2lhbz1cIityZWdpYW99PlF1ZW0gU291IEV1PC9MaW5rPjwvc3VtbWFyeT5cbiAgICAgICAgICA8b2wgdHlwZT1cIjFcIj5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtTdHJpbmdNb2RvK1wiL2V1L2N1cnJpY3Vsby8/cmVnaWFvPVwiK3JlZ2lhb30+Q3VycmljdWxvPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5Dc3NSb3Rhc1Byb2pldG8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIH1cbiAgICAgIC5Dc3NUaXRsZVJvdGFzUHJvamV0byB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogb2lUZXh0UmVndWxhciwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjZGJkYmRiO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjE3KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMSwgMSwgMSwgMC4xNyk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjE3KTtcbiAgICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RhZGVSb3Rhc1xuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moListadeRotas/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ListadeRotas);

/***/ })

})
//# sourceMappingURL=servicosgratuitos.js.e06dc31f79cdd897a6ac.hot-update.js.map