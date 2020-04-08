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
  }, ".textarea.jsx-1932574820{width:100%;}.btLinkBranco.jsx-1932574820{height:3.42857143rem;}.DesenhoSombra.jsx-1932574820{font-family:oiTextRegular,sans-serif;background-color:#ffffff;border-radius:8px;color:#222222;display:block;font-size:1rem;text-align:center;width:90%;-webkit-text-decoration:none;text-decoration:none;border:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:10px;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition:0.5s;transition:0.5s;-webkit-box-shadow:1px 1px 10px rgba(1,1,1,0.47);-moz-box-shadow:1px 1px 10px rgba(1,1,1,0.47);box-shadow:1px 1px 10px rgba(1,1,1,0.47);}.btLinkBranco.jsx-1932574820:hover{-webkit-box-shadow:2px 2px 20px rgba(1,1,1,0.17);-moz-box-shadow:2px 2px 20px rgba(1,1,1,0.17);box-shadow:2px 2px 20px rgba(1,1,1,0.17);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL3V0aWxpdGFyaW9zL2NvbnZlcnNvcmRldGV4dG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZrQixBQUdzQixBQUdVLEFBR21CLEFBd0JjLFdBN0J4RCxVQUdBLGdCQUc2QixZQXdCd0IsYUF2Qi9CLGtCQUNKLGNBQ0EsQ0FzQjhCLGFBckI3QixlQUVHLGFBb0JwQixLQW5CWSxVQUNXLGtEQUNJLHlCQUNWLGVBQ0wsVUFDRSxZQUNHLGVBQ08sc0JBQ0osa0JBQ0Ysd0NBQ29DLGlEQUNILDhDQUNMLHlDQUU5QyIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL3RlbXBsYXRlcy91dGlsaXRhcmlvcy9jb252ZXJzb3JkZXRleHRvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy9pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgRmF2aUljb24gZnJvbSAnLi4vLi4vYXRvbXMvYXRGYXZJY29uJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9tb2xlY3VsYXMvbGF5b3V0J1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuaW1wb3J0IERpdiBmcm9tICcuLi8uLi9hdG9tcy9hdERpdidcblxuY29uc3QgY29udmVyc29yZGV0ZXh0byA9IGZ1bmN0aW9uIChwcm9wcykge1xuXG4gIGNvbnNvbGUubG9nKCfilZTilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZcnKTtcbiAgY29uc29sZS5sb2coJ+KVkSAgICAgIGNvbnZlcnNvcmRldGV4dG8gICAgICAgICDilZEnKTtcbiAgY29uc29sZS5sb2coJ+KVmuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVnScpO1xuXG4gIHZhciByZWdpYW8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnJlZ2lhbyAsIFwiUkpcIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLCBcImh0bWxcIik7XG5cbiAgZnVuY3Rpb24gRnVuY0NvbnZlcnRlcih2YXJPcHQpe1xuICAgIHZhciBzYWlkYSA9IFwiXCI7XG4gICAgdmFyIHRleHRvb3JpZ2luYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWFvcmlnaW5hbCcpLnZhbHVlO1xuICAgIGlmKHZhck9wdD09XCJhXCIpe1xuICAgICAgLy9QcmltZWlyYSBsZXRyYSBkYSBmcmF6ZSBtYWl1c2N1bGEuXG4gICAgICB0ZXh0b29yaWdpbmFsID0gXCJALiBcIiArIHRleHRvb3JpZ2luYWw7XG4gICAgICB0ZXh0b29yaWdpbmFsID0gdGV4dG9vcmlnaW5hbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyg/Ol58XFwufFxcIXxcXD8pXFxzXFxTL2csIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEudG9VcHBlckNhc2UoKTsgfSk7XG4gICAgICBzYWlkYSA9IHRleHRvb3JpZ2luYWxcbiAgICB9IGVsc2UgaWYodmFyT3B0PT1cImJcIil7XG4gICAgICAvL1RvZGFzIEFzIFByaW1laXJhcyBMZXRyYXMgTWFpdXNjdWxhcy4gXG4gICAgICBzYWlkYSA9IHRleHRvb3JpZ2luYWwudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oPzpefFxccylcXFMvZywgZnVuY3Rpb24oYSkgeyByZXR1cm4gYS50b1VwcGVyQ2FzZSgpOyB9KTtcbiAgICB9IGVsc2UgaWYodmFyT3B0PT1cImNcIil7XG4gICAgICAvL1RVRE8gTUFJVVNDVUxBLlxuICAgICAgc2FpZGEgPSB0ZXh0b29yaWdpbmFsLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYodmFyT3B0PT1cImRcIil7XG4gICAgICAvL3R1ZG8gbWludXNjdWxhLiBcbiAgICAgIHNhaWRhID0gdGV4dG9vcmlnaW5hbC50b0xvd2VyQ2FzZSgpXG4gICAgfSBlbHNlIGlmKHZhck9wdD09XCJlXCIpe1xuICAgICAgLy90T0RBUyBhUyBwUklNRUlSQVMgbEVUUkFTIG1JTlVTQ1VMQVMuXG4gICAgICBzYWlkYSA9IHRleHRvb3JpZ2luYWwudG9VcHBlckNhc2UoKS5yZXBsYWNlKC8oPzpefFxccylcXFMvZywgZnVuY3Rpb24oYSkgeyByZXR1cm4gYS50b0xvd2VyQ2FzZSgpOyB9KTtcbiAgICB9IGVsc2UgaWYodmFyT3B0PT1cImZcIil7XG4gICAgICAvL3BSSU1FSVJBIGxFVFJBIGRBIGZSQVpFIG1JTlVTQ1VMQS5cbiAgICAgIHRleHRvb3JpZ2luYWwgPSBcIkAuIFwiICsgdGV4dG9vcmlnaW5hbDtcbiAgICAgIHRleHRvb3JpZ2luYWwgPSB0ZXh0b29yaWdpbmFsLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvKD86XnxcXC58XFwhfFxcPylcXHNcXFMvZywgZnVuY3Rpb24oYSkgeyByZXR1cm4gYS50b0xvd2VyQ2FzZSgpOyB9KTtcbiAgICAgIHNhaWRhID0gdGV4dG9vcmlnaW5hbFxuICAgIH0gXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRhcmVhY29udmVydGlkbycpLnZhbHVlPXNhaWRhO1xuICB9XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29udmVyc29yIGRlIFRleHRvPC90aXRsZT5cbiAgICAgICAgPEZhdmlJY29uIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDb252ZXJzb3IgZGUgVGV4dG9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiL2dhbWUvY29udmVyc29yZGV0ZXh0by9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhbXBodG1sXCIgaHJlZj1cIi9hbXAvZ2FtZS9jb252ZXJzb3JkZXRleHRvL1wiIC8+XG4gICAgICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtbGlnaHRib3hcIiBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtbGlnaHRib3gtMC4xLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtaWZyYW1lXCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWlmcmFtZS0wLjEuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQgcmVnaWFvPXtyZWdpYW99IG1vZG89e21vZG99PlxuICAgICAgPGgxPkNvbnZlcnNvciBkZSBUZXh0bzwvaDE+XG4gICAgICAgIDxEaXYgZGlzcGxheT1cInJlc3BvbnNpdm9cIj5cbiAgICAgICAgXG4gICAgICAgICAgPERpdiBkaXNwbGF5PVwidmVydGljYWxcIj5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIERpZ2l0ZSBvdSBjb2xlIG8gdGV4dG8gYXF1aTo8YnIvPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiRGVzZW5ob1NvbWJyYVwiIGlkPVwidGV4dGFyZWFvcmlnaW5hbFwiIG5hbWU9XCJ0ZXh0YXJlYW9yaWdpbmFsXCIgcm93cz1cIjZcIiBjb2xzPVwiNDBcIj5EaWdpdGUgb3UgY29sZSBzZXUgdGV4dG8gYXF1aS48L3RleHRhcmVhPjxiciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBUZXh0byBjb252ZXJ0aWRvOjxici8+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJEZXNlbmhvU29tYnJhXCIgaWQ9XCJ0ZXh0YXJlYWNvbnZlcnRpZG9cIiBuYW1lPVwidGV4dGFyZWFjb252ZXJ0aWRvXCIgcm93cz1cIjZcIiBjb2xzPVwiNDVcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3RleHRhcmVhPjxiciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgPERpdiBkaXNwbGF5PVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxhIGlkPVwiYnRMaW5rQ29udmVydGNcIiBjbGFzc05hbWU9XCJidExpbmtCcmFuY28gRGVzZW5ob1NvbWJyYVwiIG9uQ2xpY2s9eygpID0+IHtGdW5jQ29udmVydGVyKFwiY1wiKX19PlRVRE8gTUFJVVNDVUxBLjwvYT5cbiAgICAgICAgICAgIDxhIGlkPVwiYnRMaW5rQ29udmVydGRcIiBjbGFzc05hbWU9XCJidExpbmtCcmFuY28gRGVzZW5ob1NvbWJyYVwiIG9uQ2xpY2s9eygpID0+IHtGdW5jQ29udmVydGVyKFwiZFwiKX19PnR1ZG8gbWludXNjdWxhLjwvYT5cbiAgICAgICAgICAgIDxhIGlkPVwiYnRMaW5rQ29udmVydGFcIiBjbGFzc05hbWU9XCJidExpbmtCcmFuY28gRGVzZW5ob1NvbWJyYVwiIG9uQ2xpY2s9eygpID0+IHtGdW5jQ29udmVydGVyKFwiYVwiKX19PlByaW1laXJhIGxldHJhIGRhIGZyYXplIG1haXVzY3VsYS48L2E+XG4gICAgICAgICAgICA8YSBpZD1cImJ0TGlua0NvbnZlcnRhXCIgY2xhc3NOYW1lPVwiYnRMaW5rQnJhbmNvIERlc2VuaG9Tb21icmFcIiBvbkNsaWNrPXsoKSA9PiB7RnVuY0NvbnZlcnRlcihcImZcIil9fT5wUklNRUlSQSBsRVRSQSBkQSBmUkFaRSBtSU5VU0NVTEEuPC9hPlxuICAgICAgICAgICAgPGEgaWQ9XCJidExpbmtDb252ZXJ0YlwiIGNsYXNzTmFtZT1cImJ0TGlua0JyYW5jbyBEZXNlbmhvU29tYnJhXCIgb25DbGljaz17KCkgPT4ge0Z1bmNDb252ZXJ0ZXIoXCJiXCIpfX0+VG9kYXMgQXMgUHJpbWVpcmFzIExldHJhcyBNYWl1c2N1bGFzLjwvYT5cbiAgICAgICAgICAgIDxhIGlkPVwiYnRMaW5rQ29udmVydGJcIiBjbGFzc05hbWU9XCJidExpbmtCcmFuY28gRGVzZW5ob1NvbWJyYVwiIG9uQ2xpY2s9eygpID0+IHtGdW5jQ29udmVydGVyKFwiZVwiKX19PnRPREFTIGFTIHBSSU1FSVJBUyBsRVRSQVMgbUlOVVNDVUxBUy48L2E+XG4gICAgICAgICAgPC9EaXY+XG4gICAgICAgIDwvRGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50ZXh0YXJlYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0TGlua0JyYW5jbyB7XG4gICAgICAgICAgaGVpZ2h0OiAzLjQyODU3MTQzcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5EZXNlbmhvU29tYnJhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvaVRleHRSZWd1bGFyLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07IC8qMTZweCovXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZGJkYmRiO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgxLCAxLCAxLCAwLjQ3KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMSwgMSwgMSwgMC40Nyk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgxLCAxLCAxLCAwLjQ3KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRMaW5rQnJhbmNvOmhvdmVyIHtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMSwgMSwgMSwgMC4xNyk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMjBweCByZ2JhKDEsIDEsIDEsIDAuMTcpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMSwgMSwgMSwgMC4xNyk7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udmVyc29yZGV0ZXh0b1xuXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/utilitarios/conversordetexto.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (conversordetexto);

/***/ })

})
//# sourceMappingURL=conversordetexto.js.f45799eb9661a0c84c14.hot-update.js.map