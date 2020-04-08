webpackHotUpdate("static/development/pages/routes/utilitarios/conversordetexto.js",{

/***/ "./components/templates/utilitarios/conversordetexto.js":
/*!**************************************************************!*\
  !*** ./components/templates/utilitarios/conversordetexto.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/atFavIcon */ "./components/atoms/atFavIcon/index.js");
/* harmony import */ var _moleculas_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../moleculas/layout */ "./components/moleculas/layout/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/atDiv */ "./components/atoms/atDiv/index.js");

 //import Link from 'next/link'







var conversordetexto = function conversordetexto(props) {
  console.log('╔═══════════════════════════════╗');
  console.log('║      conversordetexto         ║');
  console.log('╚═══════════════════════════════╝');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["validaProps"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["validaProps"](props.modo, "html");

  function FuncConverter(varOpt) {
    var saida = "";
    var textooriginal = document.getElementById('textareaoriginal').value;

    if (varOpt == "a") {
      //Primeira letra da fraze maiuscula.
      textooriginal = "@. " + textooriginal;
      textooriginal = textooriginal.toLowerCase().replace(/(?:^|\.|\!|\?)\s\S/g, function (a) {
        return a.toUpperCase();
      });
      textooriginal = textooriginal.replace(/(?:^|\@\.)/, function (a) {
        return "";
      });
      saida = textooriginal;
    } else if (varOpt == "b") {
      //Todas As Primeiras Letras Maiusculas. 
      saida = textooriginal.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      });
    } else if (varOpt == "c") {
      //TUDO MAIUSCULA.
      saida = textooriginal.toUpperCase();
    } else if (varOpt == "d") {
      //tudo minuscula. 
      saida = textooriginal.toLowerCase();
    } else if (varOpt == "e") {
      //tODAS aS pRIMEIRAS lETRAS mINUSCULAS.
      saida = textooriginal.toUpperCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toLowerCase();
      });
    } else if (varOpt == "f") {
      //pRIMEIRA lETRA dA fRAZE mINUSCULA.
      textooriginal = "@. " + textooriginal;
      textooriginal = textooriginal.toUpperCase().replace(/(?:^|\.|\!|\?)/g, function (a) {
        return a.toLowerCase();
      });
      textooriginal = textooriginal.replace(/(?:^|\@\.)/, function (a) {
        return "";
      });
      saida = textooriginal;
    }

    document.getElementById('textareaconvertido').value = saida;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932574820"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1932574820"
  }, "Conversor de Texto"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "Conversor de Texto",
    className: "jsx-1932574820"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: "/game/conversordetexto/",
    className: "jsx-1932574820"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "amphtml",
    href: "/amp/game/conversordetexto/",
    className: "jsx-1932574820"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    "custom-element": "amp-lightbox",
    src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js",
    className: "jsx-1932574820"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    "custom-element": "amp-iframe",
    src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js",
    className: "jsx-1932574820"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    regiao: regiao,
    modo: modo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1932574820"
  }, "Conversor de Texto"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "responsivo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932574820"
  }, "Digite ou cole o texto aqui:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1932574820"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    id: "textareaoriginal",
    name: "textareaoriginal",
    rows: "6",
    cols: "40",
    className: "jsx-1932574820" + " " + "DesenhoSombra"
  }, "Digite ou cole seu texto aqui."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1932574820"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1932574820"
  }, "Texto convertido:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1932574820"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    id: "textareaconvertido",
    name: "textareaconvertido",
    rows: "6",
    cols: "45",
    spellcheck: "false",
    className: "jsx-1932574820" + " " + "DesenhoSombra"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1932574820"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "btLinkConvertc",
    onClick: function onClick() {
      FuncConverter("c");
    },
    className: "jsx-1932574820" + " " + "btLinkBranco DesenhoSombra"
  }, "TUDO MAIUSCULA."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "btLinkConvertd",
    onClick: function onClick() {
      FuncConverter("d");
    },
    className: "jsx-1932574820" + " " + "btLinkBranco DesenhoSombra"
  }, "tudo minuscula."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "btLinkConverta",
    onClick: function onClick() {
      FuncConverter("a");
    },
    className: "jsx-1932574820" + " " + "btLinkBranco DesenhoSombra"
  }, "Primeira letra da fraze maiuscula."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "btLinkConverta",
    onClick: function onClick() {
      FuncConverter("f");
    },
    className: "jsx-1932574820" + " " + "btLinkBranco DesenhoSombra"
  }, "pRIMEIRA lETRA dA fRAZE mINUSCULA."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "btLinkConvertb",
    onClick: function onClick() {
      FuncConverter("b");
    },
    className: "jsx-1932574820" + " " + "btLinkBranco DesenhoSombra"
  }, "Todas As Primeiras Letras Maiusculas."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "btLinkConvertb",
    onClick: function onClick() {
      FuncConverter("e");
    },
    className: "jsx-1932574820" + " " + "btLinkBranco DesenhoSombra"
  }, "tODAS aS pRIMEIRAS lETRAS mINUSCULAS.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1932574820"
  }, ".textarea.jsx-1932574820{width:100%;}.btLinkBranco.jsx-1932574820{height:3.42857143rem;}.DesenhoSombra.jsx-1932574820{font-family:oiTextRegular,sans-serif;background-color:#ffffff;border-radius:8px;color:#222222;display:block;font-size:1rem;text-align:center;width:90%;-webkit-text-decoration:none;text-decoration:none;border:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:10px;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition:0.5s;transition:0.5s;-webkit-box-shadow:1px 1px 10px rgba(1,1,1,0.47);-moz-box-shadow:1px 1px 10px rgba(1,1,1,0.47);box-shadow:1px 1px 10px rgba(1,1,1,0.47);}.btLinkBranco.jsx-1932574820:hover{-webkit-box-shadow:2px 2px 20px rgba(1,1,1,0.17);-moz-box-shadow:2px 2px 20px rgba(1,1,1,0.17);box-shadow:2px 2px 20px rgba(1,1,1,0.17);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL3V0aWxpdGFyaW9zL2NvbnZlcnNvcmRldGV4dG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZrQixBQUdzQixBQUdVLEFBR21CLEFBd0JjLFdBN0J4RCxVQUdBLGdCQUc2QixZQXdCd0IsYUF2Qi9CLGtCQUNKLGNBQ0EsQ0FzQjhCLGFBckI3QixlQUVHLGFBb0JwQixLQW5CWSxVQUNXLGtEQUNJLHlCQUNWLGVBQ0wsVUFDRSxZQUNHLGVBQ08sc0JBQ0osa0JBQ0Ysd0NBQ29DLGlEQUNILDhDQUNMLHlDQUU5QyIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL3RlbXBsYXRlcy91dGlsaXRhcmlvcy9jb252ZXJzb3JkZXRleHRvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy9pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgRmF2aUljb24gZnJvbSAnLi4vLi4vYXRvbXMvYXRGYXZJY29uJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9tb2xlY3VsYXMvbGF5b3V0J1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuaW1wb3J0IERpdiBmcm9tICcuLi8uLi9hdG9tcy9hdERpdidcblxuY29uc3QgY29udmVyc29yZGV0ZXh0byA9IGZ1bmN0aW9uIChwcm9wcykge1xuXG4gIGNvbnNvbGUubG9nKCfilZTilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZcnKTtcbiAgY29uc29sZS5sb2coJ+KVkSAgICAgIGNvbnZlcnNvcmRldGV4dG8gICAgICAgICDilZEnKTtcbiAgY29uc29sZS5sb2coJ+KVmuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVnScpO1xuXG4gIHZhciByZWdpYW8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnJlZ2lhbyAsIFwiUkpcIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLCBcImh0bWxcIik7XG5cbiAgZnVuY3Rpb24gRnVuY0NvbnZlcnRlcih2YXJPcHQpe1xuICAgIHZhciBzYWlkYSA9IFwiXCI7XG4gICAgdmFyIHRleHRvb3JpZ2luYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWFvcmlnaW5hbCcpLnZhbHVlO1xuICAgIGlmKHZhck9wdD09XCJhXCIpe1xuICAgICAgLy9QcmltZWlyYSBsZXRyYSBkYSBmcmF6ZSBtYWl1c2N1bGEuXG4gICAgICB0ZXh0b29yaWdpbmFsID0gXCJALiBcIiArIHRleHRvb3JpZ2luYWw7XG4gICAgICB0ZXh0b29yaWdpbmFsID0gdGV4dG9vcmlnaW5hbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyg/Ol58XFwufFxcIXxcXD8pXFxzXFxTL2csIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEudG9VcHBlckNhc2UoKTsgfSk7XG4gICAgICB0ZXh0b29yaWdpbmFsID0gdGV4dG9vcmlnaW5hbC5yZXBsYWNlKC8oPzpefFxcQFxcLikvLCBmdW5jdGlvbihhKSB7IHJldHVybiBcIlwiIH0pO1xuICAgICAgc2FpZGEgPSB0ZXh0b29yaWdpbmFsXG4gICAgfSBlbHNlIGlmKHZhck9wdD09XCJiXCIpe1xuICAgICAgLy9Ub2RhcyBBcyBQcmltZWlyYXMgTGV0cmFzIE1haXVzY3VsYXMuIFxuICAgICAgc2FpZGEgPSB0ZXh0b29yaWdpbmFsLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKD86XnxcXHMpXFxTL2csIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEudG9VcHBlckNhc2UoKTsgfSk7XG4gICAgfSBlbHNlIGlmKHZhck9wdD09XCJjXCIpe1xuICAgICAgLy9UVURPIE1BSVVTQ1VMQS5cbiAgICAgIHNhaWRhID0gdGV4dG9vcmlnaW5hbC50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmKHZhck9wdD09XCJkXCIpe1xuICAgICAgLy90dWRvIG1pbnVzY3VsYS4gXG4gICAgICBzYWlkYSA9IHRleHRvb3JpZ2luYWwudG9Mb3dlckNhc2UoKVxuICAgIH0gZWxzZSBpZih2YXJPcHQ9PVwiZVwiKXtcbiAgICAgIC8vdE9EQVMgYVMgcFJJTUVJUkFTIGxFVFJBUyBtSU5VU0NVTEFTLlxuICAgICAgc2FpZGEgPSB0ZXh0b29yaWdpbmFsLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvKD86XnxcXHMpXFxTL2csIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEudG9Mb3dlckNhc2UoKTsgfSk7XG4gICAgfSBlbHNlIGlmKHZhck9wdD09XCJmXCIpe1xuICAgICAgLy9wUklNRUlSQSBsRVRSQSBkQSBmUkFaRSBtSU5VU0NVTEEuXG4gICAgICB0ZXh0b29yaWdpbmFsID0gXCJALiBcIiArIHRleHRvb3JpZ2luYWw7XG4gICAgICB0ZXh0b29yaWdpbmFsID0gdGV4dG9vcmlnaW5hbC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoLyg/Ol58XFwufFxcIXxcXD8pL2csIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEudG9Mb3dlckNhc2UoKTsgfSk7XG4gICAgICB0ZXh0b29yaWdpbmFsID0gdGV4dG9vcmlnaW5hbC5yZXBsYWNlKC8oPzpefFxcQFxcLikvLCBmdW5jdGlvbihhKSB7IHJldHVybiBcIlwiIH0pO1xuICAgICAgc2FpZGEgPSB0ZXh0b29yaWdpbmFsXG4gICAgfSBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWFjb252ZXJ0aWRvJykudmFsdWU9c2FpZGE7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvbnZlcnNvciBkZSBUZXh0bzwvdGl0bGU+XG4gICAgICAgIDxGYXZpSWNvbiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29udmVyc29yIGRlIFRleHRvXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cIi9nYW1lL2NvbnZlcnNvcmRldGV4dG8vXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYW1waHRtbFwiIGhyZWY9XCIvYW1wL2dhbWUvY29udmVyc29yZGV0ZXh0by9cIiAvPlxuICAgICAgICA8c2NyaXB0IGFzeW5jIGN1c3RvbS1lbGVtZW50PVwiYW1wLWxpZ2h0Ym94XCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWxpZ2h0Ym94LTAuMS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IGFzeW5jIGN1c3RvbS1lbGVtZW50PVwiYW1wLWlmcmFtZVwiIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1pZnJhbWUtMC4xLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0IHJlZ2lhbz17cmVnaWFvfSBtb2RvPXttb2RvfT5cbiAgICAgIDxoMT5Db252ZXJzb3IgZGUgVGV4dG88L2gxPlxuICAgICAgICA8RGl2IGRpc3BsYXk9XCJyZXNwb25zaXZvXCI+XG4gICAgICAgIFxuICAgICAgICAgIDxEaXYgZGlzcGxheT1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBEaWdpdGUgb3UgY29sZSBvIHRleHRvIGFxdWk6PGJyLz5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIkRlc2VuaG9Tb21icmFcIiBpZD1cInRleHRhcmVhb3JpZ2luYWxcIiBuYW1lPVwidGV4dGFyZWFvcmlnaW5hbFwiIHJvd3M9XCI2XCIgY29scz1cIjQwXCI+RGlnaXRlIG91IGNvbGUgc2V1IHRleHRvIGFxdWkuPC90ZXh0YXJlYT48YnIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgVGV4dG8gY29udmVydGlkbzo8YnIvPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiRGVzZW5ob1NvbWJyYVwiIGlkPVwidGV4dGFyZWFjb252ZXJ0aWRvXCIgbmFtZT1cInRleHRhcmVhY29udmVydGlkb1wiIHJvd3M9XCI2XCIgY29scz1cIjQ1XCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+PC90ZXh0YXJlYT48YnIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRGl2PlxuICAgICAgICAgIDxEaXYgZGlzcGxheT1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICA8YSBpZD1cImJ0TGlua0NvbnZlcnRjXCIgY2xhc3NOYW1lPVwiYnRMaW5rQnJhbmNvIERlc2VuaG9Tb21icmFcIiBvbkNsaWNrPXsoKSA9PiB7RnVuY0NvbnZlcnRlcihcImNcIil9fT5UVURPIE1BSVVTQ1VMQS48L2E+XG4gICAgICAgICAgICA8YSBpZD1cImJ0TGlua0NvbnZlcnRkXCIgY2xhc3NOYW1lPVwiYnRMaW5rQnJhbmNvIERlc2VuaG9Tb21icmFcIiBvbkNsaWNrPXsoKSA9PiB7RnVuY0NvbnZlcnRlcihcImRcIil9fT50dWRvIG1pbnVzY3VsYS48L2E+XG4gICAgICAgICAgICA8YSBpZD1cImJ0TGlua0NvbnZlcnRhXCIgY2xhc3NOYW1lPVwiYnRMaW5rQnJhbmNvIERlc2VuaG9Tb21icmFcIiBvbkNsaWNrPXsoKSA9PiB7RnVuY0NvbnZlcnRlcihcImFcIil9fT5QcmltZWlyYSBsZXRyYSBkYSBmcmF6ZSBtYWl1c2N1bGEuPC9hPlxuICAgICAgICAgICAgPGEgaWQ9XCJidExpbmtDb252ZXJ0YVwiIGNsYXNzTmFtZT1cImJ0TGlua0JyYW5jbyBEZXNlbmhvU29tYnJhXCIgb25DbGljaz17KCkgPT4ge0Z1bmNDb252ZXJ0ZXIoXCJmXCIpfX0+cFJJTUVJUkEgbEVUUkEgZEEgZlJBWkUgbUlOVVNDVUxBLjwvYT5cbiAgICAgICAgICAgIDxhIGlkPVwiYnRMaW5rQ29udmVydGJcIiBjbGFzc05hbWU9XCJidExpbmtCcmFuY28gRGVzZW5ob1NvbWJyYVwiIG9uQ2xpY2s9eygpID0+IHtGdW5jQ29udmVydGVyKFwiYlwiKX19PlRvZGFzIEFzIFByaW1laXJhcyBMZXRyYXMgTWFpdXNjdWxhcy48L2E+XG4gICAgICAgICAgICA8YSBpZD1cImJ0TGlua0NvbnZlcnRiXCIgY2xhc3NOYW1lPVwiYnRMaW5rQnJhbmNvIERlc2VuaG9Tb21icmFcIiBvbkNsaWNrPXsoKSA9PiB7RnVuY0NvbnZlcnRlcihcImVcIil9fT50T0RBUyBhUyBwUklNRUlSQVMgbEVUUkFTIG1JTlVTQ1VMQVMuPC9hPlxuICAgICAgICAgIDwvRGl2PlxuICAgICAgICA8L0Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGV4dGFyZWEge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5idExpbmtCcmFuY28ge1xuICAgICAgICAgIGhlaWdodDogMy40Mjg1NzE0M3JlbTtcbiAgICAgICAgfVxuICAgICAgICAuRGVzZW5ob1NvbWJyYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogb2lUZXh0UmVndWxhciwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtOyAvKjE2cHgqL1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2RiZGJkYjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjJyZW07XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMSwgMSwgMSwgMC40Nyk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDEsIDEsIDEsIDAuNDcpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMSwgMSwgMSwgMC40Nyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0TGlua0JyYW5jbzpob3ZlciB7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMjBweCByZ2JhKDEsIDEsIDEsIDAuMTcpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjE3KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCByZ2JhKDEsIDEsIDEsIDAuMTcpO1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnZlcnNvcmRldGV4dG9cblxuIl19 */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/utilitarios/conversordetexto.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (conversordetexto);

/***/ })

})
//# sourceMappingURL=conversordetexto.js.c1a9995d4ed4c7c13a3a.hot-update.js.map