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
      textooriginal = textooriginal.replace(/(?:^|\@\.)/g, function (a) {
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
      textooriginal = textooriginal.toUpperCase().replace(/(?:^|\.|\!|\?)\s\S/g, function (a) {
        return a.toLowerCase();
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
  }, ".textarea.jsx-1932574820{width:100%;}.btLinkBranco.jsx-1932574820{height:3.42857143rem;}.DesenhoSombra.jsx-1932574820{font-family:oiTextRegular,sans-serif;background-color:#ffffff;border-radius:8px;color:#222222;display:block;font-size:1rem;text-align:center;width:90%;-webkit-text-decoration:none;text-decoration:none;border:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:10px;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition:0.5s;transition:0.5s;-webkit-box-shadow:1px 1px 10px rgba(1,1,1,0.47);-moz-box-shadow:1px 1px 10px rgba(1,1,1,0.47);box-shadow:1px 1px 10px rgba(1,1,1,0.47);}.btLinkBranco.jsx-1932574820:hover{-webkit-box-shadow:2px 2px 20px rgba(1,1,1,0.17);-moz-box-shadow:2px 2px 20px rgba(1,1,1,0.17);box-shadow:2px 2px 20px rgba(1,1,1,0.17);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL3V0aWxpdGFyaW9zL2NvbnZlcnNvcmRldGV4dG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZrQixBQUdzQixBQUdVLEFBR21CLEFBd0JjLFdBN0J4RCxVQUdBLGdCQUc2QixZQXdCd0IsYUF2Qi9CLGtCQUNKLGNBQ0EsQ0FzQjhCLGFBckI3QixlQUVHLGFBb0JwQixLQW5CWSxVQUNXLGtEQUNJLHlCQUNWLGVBQ0wsVUFDRSxZQUNHLGVBQ08sc0JBQ0osa0JBQ0Ysd0NBQ29DLGlEQUNILDhDQUNMLHlDQUU5QyIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL3RlbXBsYXRlcy91dGlsaXRhcmlvcy9jb252ZXJzb3JkZXRleHRvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy9pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgRmF2aUljb24gZnJvbSAnLi4vLi4vYXRvbXMvYXRGYXZJY29uJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9tb2xlY3VsYXMvbGF5b3V0J1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuaW1wb3J0IERpdiBmcm9tICcuLi8uLi9hdG9tcy9hdERpdidcblxuY29uc3QgY29udmVyc29yZGV0ZXh0byA9IGZ1bmN0aW9uIChwcm9wcykge1xuXG4gIGNvbnNvbGUubG9nKCfilZTilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZcnKTtcbiAgY29uc29sZS5sb2coJ+KVkSAgICAgIGNvbnZlcnNvcmRldGV4dG8gICAgICAgICDilZEnKTtcbiAgY29uc29sZS5sb2coJ+KVmuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVnScpO1xuXG4gIHZhciByZWdpYW8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnJlZ2lhbyAsIFwiUkpcIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLCBcImh0bWxcIik7XG5cbiAgZnVuY3Rpb24gRnVuY0NvbnZlcnRlcih2YXJPcHQpe1xuICAgIHZhciBzYWlkYSA9IFwiXCI7XG4gICAgdmFyIHRleHRvb3JpZ2luYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWFvcmlnaW5hbCcpLnZhbHVlO1xuICAgIGlmKHZhck9wdD09XCJhXCIpe1xuICAgICAgLy9QcmltZWlyYSBsZXRyYSBkYSBmcmF6ZSBtYWl1c2N1bGEuXG4gICAgICB0ZXh0b29yaWdpbmFsID0gXCJALiBcIiArIHRleHRvb3JpZ2luYWw7XG4gICAgICB0ZXh0b29yaWdpbmFsID0gdGV4dG9vcmlnaW5hbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyg/Ol58XFwufFxcIXxcXD8pXFxzXFxTL2csIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEudG9VcHBlckNhc2UoKTsgfSk7XG4gICAgICB0ZXh0b29yaWdpbmFsID0gdGV4dG9vcmlnaW5hbC5yZXBsYWNlKC8oPzpefFxcQFxcLikvZywgZnVuY3Rpb24oYSkgeyByZXR1cm4gXCJcIiB9KTtcbiAgICAgIHNhaWRhID0gdGV4dG9vcmlnaW5hbFxuICAgIH0gZWxzZSBpZih2YXJPcHQ9PVwiYlwiKXtcbiAgICAgIC8vVG9kYXMgQXMgUHJpbWVpcmFzIExldHJhcyBNYWl1c2N1bGFzLiBcbiAgICAgIHNhaWRhID0gdGV4dG9vcmlnaW5hbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyg/Ol58XFxzKVxcUy9nLCBmdW5jdGlvbihhKSB7IHJldHVybiBhLnRvVXBwZXJDYXNlKCk7IH0pO1xuICAgIH0gZWxzZSBpZih2YXJPcHQ9PVwiY1wiKXtcbiAgICAgIC8vVFVETyBNQUlVU0NVTEEuXG4gICAgICBzYWlkYSA9IHRleHRvb3JpZ2luYWwudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZih2YXJPcHQ9PVwiZFwiKXtcbiAgICAgIC8vdHVkbyBtaW51c2N1bGEuIFxuICAgICAgc2FpZGEgPSB0ZXh0b29yaWdpbmFsLnRvTG93ZXJDYXNlKClcbiAgICB9IGVsc2UgaWYodmFyT3B0PT1cImVcIil7XG4gICAgICAvL3RPREFTIGFTIHBSSU1FSVJBUyBsRVRSQVMgbUlOVVNDVUxBUy5cbiAgICAgIHNhaWRhID0gdGV4dG9vcmlnaW5hbC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoLyg/Ol58XFxzKVxcUy9nLCBmdW5jdGlvbihhKSB7IHJldHVybiBhLnRvTG93ZXJDYXNlKCk7IH0pO1xuICAgIH0gZWxzZSBpZih2YXJPcHQ9PVwiZlwiKXtcbiAgICAgIC8vcFJJTUVJUkEgbEVUUkEgZEEgZlJBWkUgbUlOVVNDVUxBLlxuICAgICAgdGV4dG9vcmlnaW5hbCA9IFwiQC4gXCIgKyB0ZXh0b29yaWdpbmFsO1xuICAgICAgdGV4dG9vcmlnaW5hbCA9IHRleHRvb3JpZ2luYWwudG9VcHBlckNhc2UoKS5yZXBsYWNlKC8oPzpefFxcLnxcXCF8XFw/KVxcc1xcUy9nLCBmdW5jdGlvbihhKSB7IHJldHVybiBhLnRvTG93ZXJDYXNlKCk7IH0pO1xuICAgICAgc2FpZGEgPSB0ZXh0b29yaWdpbmFsXG4gICAgfSBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWFjb252ZXJ0aWRvJykudmFsdWU9c2FpZGE7XG4gIH1cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db252ZXJzb3IgZGUgVGV4dG88L3RpdGxlPlxuICAgICAgICA8RmF2aUljb24gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvbnZlcnNvciBkZSBUZXh0b1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCIvZ2FtZS9jb252ZXJzb3JkZXRleHRvL1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFtcGh0bWxcIiBocmVmPVwiL2FtcC9nYW1lL2NvbnZlcnNvcmRldGV4dG8vXCIgLz5cbiAgICAgICAgPHNjcmlwdCBhc3luYyBjdXN0b20tZWxlbWVudD1cImFtcC1saWdodGJveFwiIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwL2FtcC1saWdodGJveC0wLjEuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBhc3luYyBjdXN0b20tZWxlbWVudD1cImFtcC1pZnJhbWVcIiBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtaWZyYW1lLTAuMS5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dCByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30+XG4gICAgICA8aDE+Q29udmVyc29yIGRlIFRleHRvPC9oMT5cbiAgICAgICAgPERpdiBkaXNwbGF5PVwicmVzcG9uc2l2b1wiPlxuICAgICAgICBcbiAgICAgICAgICA8RGl2IGRpc3BsYXk9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgRGlnaXRlIG91IGNvbGUgbyB0ZXh0byBhcXVpOjxici8+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJEZXNlbmhvU29tYnJhXCIgaWQ9XCJ0ZXh0YXJlYW9yaWdpbmFsXCIgbmFtZT1cInRleHRhcmVhb3JpZ2luYWxcIiByb3dzPVwiNlwiIGNvbHM9XCI0MFwiPkRpZ2l0ZSBvdSBjb2xlIHNldSB0ZXh0byBhcXVpLjwvdGV4dGFyZWE+PGJyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIFRleHRvIGNvbnZlcnRpZG86PGJyLz5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIkRlc2VuaG9Tb21icmFcIiBpZD1cInRleHRhcmVhY29udmVydGlkb1wiIG5hbWU9XCJ0ZXh0YXJlYWNvbnZlcnRpZG9cIiByb3dzPVwiNlwiIGNvbHM9XCI0NVwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvdGV4dGFyZWE+PGJyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgICA8RGl2IGRpc3BsYXk9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgPGEgaWQ9XCJidExpbmtDb252ZXJ0Y1wiIGNsYXNzTmFtZT1cImJ0TGlua0JyYW5jbyBEZXNlbmhvU29tYnJhXCIgb25DbGljaz17KCkgPT4ge0Z1bmNDb252ZXJ0ZXIoXCJjXCIpfX0+VFVETyBNQUlVU0NVTEEuPC9hPlxuICAgICAgICAgICAgPGEgaWQ9XCJidExpbmtDb252ZXJ0ZFwiIGNsYXNzTmFtZT1cImJ0TGlua0JyYW5jbyBEZXNlbmhvU29tYnJhXCIgb25DbGljaz17KCkgPT4ge0Z1bmNDb252ZXJ0ZXIoXCJkXCIpfX0+dHVkbyBtaW51c2N1bGEuPC9hPlxuICAgICAgICAgICAgPGEgaWQ9XCJidExpbmtDb252ZXJ0YVwiIGNsYXNzTmFtZT1cImJ0TGlua0JyYW5jbyBEZXNlbmhvU29tYnJhXCIgb25DbGljaz17KCkgPT4ge0Z1bmNDb252ZXJ0ZXIoXCJhXCIpfX0+UHJpbWVpcmEgbGV0cmEgZGEgZnJhemUgbWFpdXNjdWxhLjwvYT5cbiAgICAgICAgICAgIDxhIGlkPVwiYnRMaW5rQ29udmVydGFcIiBjbGFzc05hbWU9XCJidExpbmtCcmFuY28gRGVzZW5ob1NvbWJyYVwiIG9uQ2xpY2s9eygpID0+IHtGdW5jQ29udmVydGVyKFwiZlwiKX19PnBSSU1FSVJBIGxFVFJBIGRBIGZSQVpFIG1JTlVTQ1VMQS48L2E+XG4gICAgICAgICAgICA8YSBpZD1cImJ0TGlua0NvbnZlcnRiXCIgY2xhc3NOYW1lPVwiYnRMaW5rQnJhbmNvIERlc2VuaG9Tb21icmFcIiBvbkNsaWNrPXsoKSA9PiB7RnVuY0NvbnZlcnRlcihcImJcIil9fT5Ub2RhcyBBcyBQcmltZWlyYXMgTGV0cmFzIE1haXVzY3VsYXMuPC9hPlxuICAgICAgICAgICAgPGEgaWQ9XCJidExpbmtDb252ZXJ0YlwiIGNsYXNzTmFtZT1cImJ0TGlua0JyYW5jbyBEZXNlbmhvU29tYnJhXCIgb25DbGljaz17KCkgPT4ge0Z1bmNDb252ZXJ0ZXIoXCJlXCIpfX0+dE9EQVMgYVMgcFJJTUVJUkFTIGxFVFJBUyBtSU5VU0NVTEFTLjwvYT5cbiAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgPC9EaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuYnRMaW5rQnJhbmNvIHtcbiAgICAgICAgICBoZWlnaHQ6IDMuNDI4NTcxNDNyZW07XG4gICAgICAgIH1cbiAgICAgICAgLkRlc2VuaG9Tb21icmEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9pVGV4dFJlZ3VsYXIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsgLyoxNnB4Ki9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNkYmRiZGI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMS4ycmVtO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDEsIDEsIDEsIDAuNDcpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgxLCAxLCAxLCAwLjQ3KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDEsIDEsIDEsIDAuNDcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5idExpbmtCcmFuY286aG92ZXIge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjE3KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMSwgMSwgMSwgMC4xNyk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjE3KTtcbiAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb252ZXJzb3JkZXRleHRvXG5cbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/utilitarios/conversordetexto.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (conversordetexto);

/***/ })

})
//# sourceMappingURL=conversordetexto.js.8c7d9353a1c9115d6bc9.hot-update.js.map