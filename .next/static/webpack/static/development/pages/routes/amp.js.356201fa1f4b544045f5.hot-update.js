webpackHotUpdate("static/development/pages/routes/amp.js",{

/***/ "./components/moleculas/moHeaderSideDoValente/index.js":
/*!*************************************************************!*\
  !*** ./components/moleculas/moHeaderSideDoValente/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/atImg/index.js */ "./components/atoms/atImg/index.js");
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/atDiv */ "./components/atoms/atDiv/index.js");
/* harmony import */ var _selectOption_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectOption.js */ "./components/moleculas/moHeaderSideDoValente/selectOption.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");





 //console.log('moHeaderSideDoValente ');

var moHeaderSideDoValente = function moHeaderSideDoValente(props) {
  var regiao = props.regiao;
  var modo = props.modo;
  var JsonRegiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["regiao"](regiao);
  var StringModo = "";

  if (modo == "AMP" || modo == "amp") {
    StringModo = "/amp";
  }

  console.log("regiao=" + regiao);
  console.log("modo=" + modo);
  console.log(JsonRegiao);
  console.log('╔════════════════════════════════╗');
  console.log(JsonRegiao.estado);
  console.log(JsonRegiao.capital);
  console.log('╚════════════════════════════════╝');
  var listaRegioes = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["listaRegioes"](); // function submit(){
  //   document.getElementById("regiao").submit()
  // }

  function selectRegiao() {
    if (modo == "AMP" || modo == "amp") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, 'Região(Estado) :' + JsonRegiao.sigla + '-' + JsonRegiao.estado, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        id: "formregiao",
        name: "formregiao",
        method: "GET"
      }, "Regi\xE3o(Estado) : ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        id: "regiao",
        name: "regiao",
        onChange: function onChange() {
          document.getElementById("formregiao").submit();
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: JsonRegiao.sigla,
        select: true
      }, JsonRegiao.sigla + '-' + JsonRegiao.estado), retornaRegioesa()));
    }
  }

  function retornaRegioesa() {
    listaRegioes.map(function (item, i) {
      if (item.sigla != JsonRegiao.sigla) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: item.sigla
        }, item.sigla + '-' + item.estado);
      }
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atDiv__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "justificado"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2652638531" + " " + "DivHeaderSideDoValente logo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: StringModo + "/?regiao=" + regiao,
    className: "jsx-2652638531"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atImg_index_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: "/static/assetsv5/img/log_laranja1.png",
    width: "50px",
    height: "50px",
    alt: "Logo Site Valente",
    title: "Logo Site Valente",
    class: "LogoSiteValente",
    modo: modo
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2652638531" + " " + 'DivHeaderSideDoValente pHeaderSideDoValente'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2652638531"
  }, "Site do Valente")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2652638531"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2652638531"
  }, "Modo : ", modo, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2652638531"
  }), selectRegiao(), "Cidade : ", JsonRegiao.capital)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2652638531"
  }, ".logo.jsx-2652638531{padding-top:10px;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:slideinSombra-jsx-2652638531;animation-name:slideinSombra-jsx-2652638531;}@-webkit-keyframes slideinSombra-jsx-2652638531{from{padding-top:0px;}to{padding-top:10px;}}@keyframes slideinSombra-jsx-2652638531{from{padding-top:0px;}to{padding-top:10px;}}.DivHeaderSideDoValente.jsx-2652638531{margin:0px;}.pHeaderSideDoValente.jsx-2652638531{padding-top:15px;font-size:40px;font-family:sans-serif;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvbW9sZWN1bGFzL21vSGVhZGVyU2lkZURvVmFsZW50ZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RWtCLEFBRzBCLEFBTUMsQUFHQyxBQUtULEFBR08sV0FGbkIsS0FSRSxDQU5zQixBQVN0QixBQVFlLGVBQ1EsdUJBQ0wsY0FsQlcsSUFtQi9CLDRGQWxCQSIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL21vbGVjdWxhcy9tb0hlYWRlclNpZGVEb1ZhbGVudGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1nIGZyb20gJy4uLy4uL2F0b21zL2F0SW1nL2luZGV4LmpzJztcbmltcG9ydCBEaXYgZnJvbSAnLi4vLi4vYXRvbXMvYXREaXYnXG5pbXBvcnQgU2VsZWN0T3B0aW9uIGZyb20gJy4vc2VsZWN0T3B0aW9uLmpzJ1xuXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG4vL2NvbnNvbGUubG9nKCdtb0hlYWRlclNpZGVEb1ZhbGVudGUgJyk7XG5cbmNvbnN0IG1vSGVhZGVyU2lkZURvVmFsZW50ZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCByZWdpYW8gPSBwcm9wcy5yZWdpYW87XG4gIGNvbnN0IG1vZG8gPSBwcm9wcy5tb2RvO1xuICBjb25zdCBKc29uUmVnaWFvID0gVXRpbC5yZWdpYW8ocmVnaWFvKTtcbiAgdmFyIFN0cmluZ01vZG8gPSBcIlwiO1xuICBpZihtb2RvPT1cIkFNUFwiIHx8IG1vZG89PVwiYW1wXCIpe1xuICAgIFN0cmluZ01vZG8gPSBcIi9hbXBcIjtcbiAgfVxuICBjb25zb2xlLmxvZyhcInJlZ2lhbz1cIityZWdpYW8pO1xuICBjb25zb2xlLmxvZyhcIm1vZG89XCIrbW9kbyk7XG4gIGNvbnNvbGUubG9nKEpzb25SZWdpYW8pO1xuICBjb25zb2xlLmxvZygn4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG4gIGNvbnNvbGUubG9nKEpzb25SZWdpYW8uZXN0YWRvKTtcbiAgY29uc29sZS5sb2coSnNvblJlZ2lhby5jYXBpdGFsKTtcbiAgY29uc29sZS5sb2coJ+KVmuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVnScpO1xuICBcbiAgY29uc3QgbGlzdGFSZWdpb2VzID0gVXRpbC5saXN0YVJlZ2lvZXMoKTtcblxuICAvLyBmdW5jdGlvbiBzdWJtaXQoKXtcbiAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lhb1wiKS5zdWJtaXQoKVxuICAvLyB9XG4gIFxuICBmdW5jdGlvbiBzZWxlY3RSZWdpYW8oKXtcbiAgICBpZihtb2RvPT1cIkFNUFwiIHx8IG1vZG89PVwiYW1wXCIpe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4+eydSZWdpw6NvKEVzdGFkbykgOicrSnNvblJlZ2lhby5zaWdsYSsnLScrSnNvblJlZ2lhby5lc3RhZG99PGJyLz48L3NwYW4+XG4gICAgICApXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxmb3JtIGlkPVwiZm9ybXJlZ2lhb1wiIG5hbWU9XCJmb3JtcmVnaWFvXCIgbWV0aG9kPVwiR0VUXCI+XG4gICAgICAgIFJlZ2nDo28oRXN0YWRvKSA6IDxici8+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJyZWdpYW9cIiBuYW1lPVwicmVnaWFvXCIgb25DaGFuZ2U9eygpID0+IHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1yZWdpYW9cIikuc3VibWl0KCl9fT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtKc29uUmVnaWFvLnNpZ2xhfSBzZWxlY3Q+e0pzb25SZWdpYW8uc2lnbGErJy0nK0pzb25SZWdpYW8uZXN0YWRvfTwvb3B0aW9uPlxuICAgICAgICAgIHtyZXRvcm5hUmVnaW9lc2EoKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Zvcm0+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmV0b3JuYVJlZ2lvZXNhKCl7XG4gICAgbGlzdGFSZWdpb2VzLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgaWYoaXRlbS5zaWdsYSE9SnNvblJlZ2lhby5zaWdsYSl7XG4gICAgICAgIHJldHVybiAoPG9wdGlvbiB2YWx1ZT17aXRlbS5zaWdsYX0+e2l0ZW0uc2lnbGErJy0nK2l0ZW0uZXN0YWRvfTwvb3B0aW9uPilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGl2IGRpc3BsYXk9XCJqdXN0aWZpY2Fkb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRpdkhlYWRlclNpZGVEb1ZhbGVudGUgbG9nb1wiPlxuICAgICAgICAgIDxhIGhyZWY9e1N0cmluZ01vZG8rXCIvP3JlZ2lhbz1cIityZWdpYW99ID5cbiAgICAgICAgICAgIDxJbWcgc3JjPVwiL3N0YXRpYy9hc3NldHN2NS9pbWcvbG9nX2xhcmFuamExLnBuZ1wiIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjUwcHhcIiBhbHQ9XCJMb2dvIFNpdGUgVmFsZW50ZVwiIHRpdGxlPVwiTG9nbyBTaXRlIFZhbGVudGVcIiBjbGFzcz1cIkxvZ29TaXRlVmFsZW50ZVwiIG1vZG89e21vZG99IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0RpdkhlYWRlclNpZGVEb1ZhbGVudGUgcEhlYWRlclNpZGVEb1ZhbGVudGUnPlxuICAgICAgICAgIDxzcGFuPlNpdGUgZG8gVmFsZW50ZTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBNb2RvIDoge21vZG99PGJyLz5cbiAgICAgICAgICAgIHtzZWxlY3RSZWdpYW8oKX1cbiAgICAgICAgICAgIENpZGFkZSA6IHtKc29uUmVnaWFvLmNhcGl0YWx9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5sb2dve1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW5Tb21icmE7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHNsaWRlaW5Tb21icmEge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuRGl2SGVhZGVyU2lkZURvVmFsZW50ZXtcbiAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgIH1cbiAgICAgIC5wSGVhZGVyU2lkZURvVmFsZW50ZXtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9EaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9IZWFkZXJTaWRlRG9WYWxlbnRlXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/moleculas/moHeaderSideDoValente/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (moHeaderSideDoValente);

/***/ })

})
//# sourceMappingURL=amp.js.356201fa1f4b544045f5.hot-update.js.map