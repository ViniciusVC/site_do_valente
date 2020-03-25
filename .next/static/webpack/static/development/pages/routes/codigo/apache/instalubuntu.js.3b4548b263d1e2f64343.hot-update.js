webpackHotUpdate("static/development/pages/routes/codigo/apache/instalubuntu.js",{

/***/ "./components/templates/codigo/apache/instalaUbuntu.js":
/*!*************************************************************!*\
  !*** ./components/templates/codigo/apache/instalaUbuntu.js ***!
  \*************************************************************/
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
/* harmony import */ var _atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../atoms/atFavIcon */ "./components/atoms/atFavIcon/index.js");
/* harmony import */ var _moleculas_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../moleculas/layout */ "./components/moleculas/layout/index.js");
/* harmony import */ var _atoms_atDiv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../atoms/atDiv */ "./components/atoms/atDiv/index.js");
/* harmony import */ var _moleculas_moListadeRotas_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../moleculas/moListadeRotas/index.js */ "./components/moleculas/moListadeRotas/index.js");
/* harmony import */ var _moleculas_moHeaderSideDoValente_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../moleculas/moHeaderSideDoValente/index.js */ "./components/moleculas/moHeaderSideDoValente/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../controller/util.js */ "./controller/util.js");










var atendimentoOi = function atendimentoOi(props) {
  console.log('╔════════════════════════════════╗');
  console.log('║        codigo   Apache       ║');
  console.log('╚════════════════════════════════╝');
  var cidade = _controller_util_js__WEBPACK_IMPORTED_MODULE_8__["validaProps"](props.cidade, "Rio de Janeiro");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_8__["validaProps"](props.modo, "html");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2907404390"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2907404390"
  }, "Instala\xE7\xE3o o Apache no Ubuntu"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "Apache Instalar Ubuntu",
    className: "jsx-2907404390"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: "/codigo/apache/instalaubuntu",
    className: "jsx-2907404390"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "amphtml",
    href: "/amp/codigo/apache/instalaubuntu",
    className: "jsx-2907404390"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    "custom-element": "amp-lightbox",
    src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js",
    className: "jsx-2907404390"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    async: true,
    "custom-element": "amp-iframe",
    src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js",
    className: "jsx-2907404390"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cidade: cidade,
    modo: modo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2907404390"
  }, "Instala\xE7\xE3o o Apache no Ubuntu"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2907404390"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "Resumo", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "Logar como administrador:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "$ sudo su", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "Atualizar o Ubuntu:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "$ apt-get update", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "Instalar o Apache v2:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "$ apt-get install apache2", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "Reinicie o Apache:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "$ /etc/init.d/apache2 restart", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "Permiss\xE3o de escrita no diret\xF3rio padr\xE3o do Apache:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "$ chmod 777 /var/www", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "Teste usando", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "http://localhost", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "http://127.0.0.1/", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "http://localhost:80", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }), "http://127.0.0.1:80", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2907404390"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2907404390"
  }, ".codigoApacheListadeRotas.jsx-2907404390{width:25%;}.codigoApache.jsx-2907404390{width:75%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2NvZGlnby9hcGFjaGUvaW5zdGFsYVVidW50dS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRGtCLEFBR2tCLEFBR0EsVUFGWCxBQVNBIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2NvZGlnby9hcGFjaGUvaW5zdGFsYVVidW50dS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBGYXZpSWNvbiBmcm9tICcuLi8uLi8uLi9hdG9tcy9hdEZhdkljb24nXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL21vbGVjdWxhcy9sYXlvdXQnXG5cbmltcG9ydCBEaXYgZnJvbSAnLi4vLi4vLi4vYXRvbXMvYXREaXYnXG5pbXBvcnQgTGlzdGFkZVJvdGFzIGZyb20gJy4uLy4uLy4uL21vbGVjdWxhcy9tb0xpc3RhZGVSb3Rhcy9pbmRleC5qcydcbmltcG9ydCBIZWFkZXJTaWRlRG9WYWxlbnRlIGZyb20gJy4uLy4uLy4uL21vbGVjdWxhcy9tb0hlYWRlclNpZGVEb1ZhbGVudGUvaW5kZXguanMnXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IGF0ZW5kaW1lbnRvT2kgPSBmdW5jdGlvbiAocHJvcHMpIHtcblxuICBjb25zb2xlLmxvZygn4pWU4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWXJyk7XG4gIGNvbnNvbGUubG9nKCfilZEgICAgICAgIGNvZGlnbyAgIEFwYWNoZSAgICAgICDilZEnKTtcbiAgY29uc29sZS5sb2coJ+KVmuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVnScpO1xuXG4gIHZhciBjaWRhZGUgPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLmNpZGFkZSwgXCJSaW8gZGUgSmFuZWlyb1wiKTtcbiAgdmFyIG1vZG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLm1vZG8sIFwiaHRtbFwiKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SW5zdGFsYcOnw6NvIG8gQXBhY2hlIG5vIFVidW50dTwvdGl0bGU+XG4gICAgICAgIDxGYXZpSWNvbiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQXBhY2hlIEluc3RhbGFyIFVidW50dVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCIvY29kaWdvL2FwYWNoZS9pbnN0YWxhdWJ1bnR1XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYW1waHRtbFwiIGhyZWY9XCIvYW1wL2NvZGlnby9hcGFjaGUvaW5zdGFsYXVidW50dVwiIC8+XG4gICAgICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtbGlnaHRib3hcIiBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtbGlnaHRib3gtMC4xLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtaWZyYW1lXCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWlmcmFtZS0wLjEuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQgY2lkYWRlPXtjaWRhZGV9IG1vZG89e21vZG99PlxuICAgICAgICA8aDE+SW5zdGFsYcOnw6NvIG8gQXBhY2hlIG5vIFVidW50dTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgPGJyLz5SZXN1bW9cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+TG9nYXIgY29tbyBhZG1pbmlzdHJhZG9yOlxuICAgICAgICAgIDxici8+JCBzdWRvIHN1XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPkF0dWFsaXphciBvIFVidW50dTpcbiAgICAgICAgICA8YnIvPiQgYXB0LWdldCB1cGRhdGUgXG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPkluc3RhbGFyIG8gQXBhY2hlIHYyOiBcbiAgICAgICAgICA8YnIvPiQgYXB0LWdldCBpbnN0YWxsIGFwYWNoZTJcbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+UmVpbmljaWUgbyBBcGFjaGU6IFxuICAgICAgICAgIDxici8+JCAvZXRjL2luaXQuZC9hcGFjaGUyIHJlc3RhcnRcbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+UGVybWlzc8OjbyBkZSBlc2NyaXRhIG5vIGRpcmV0w7NyaW8gcGFkcsOjbyBkbyBBcGFjaGU6IFxuICAgICAgICAgIDxici8+JCBjaG1vZCA3NzcgL3Zhci93d3cgXG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlRlc3RlIHVzYW5kb1xuICAgICAgICAgIDxici8+aHR0cDovL2xvY2FsaG9zdFxuICAgICAgICAgIDxici8+aHR0cDovLzEyNy4wLjAuMS9cbiAgICAgICAgICA8YnIvPmh0dHA6Ly9sb2NhbGhvc3Q6ODBcbiAgICAgICAgICA8YnIvPmh0dHA6Ly8xMjcuMC4wLjE6ODBcbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29kaWdvQXBhY2hlTGlzdGFkZVJvdGFze1xuICAgICAgICB3aWR0aDoyNSU7XG4gICAgICB9XG4gICAgICAuY29kaWdvQXBhY2hle1xuICAgICAgICB3aWR0aDo3NSU7XG4gICAgICAgIC8qIFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwOyAqL1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdGVuZGltZW50b09pXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/codigo/apache/instalaUbuntu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (atendimentoOi);

/***/ })

})
//# sourceMappingURL=instalubuntu.js.3b4548b263d1e2f64343.hot-update.js.map