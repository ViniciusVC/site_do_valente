webpackHotUpdate("static/development/pages/routes/hub/busca.js",{

/***/ "./components/atoms/atCampoTexto/index.js":
/*!************************************************!*\
  !*** ./components/atoms/atCampoTexto/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");

// layout de Documentoscopia(/meusdocumentos/) - Projeto Piloto



var AtCampoTexto = function AtCampoTexto(props) {
  var varId = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.id, "id");
  var varName = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.name, "nome");
  var varPlaceholder = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.placeholder, "--");
  var varType = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.type, "text");
  var varAutocomplete = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.autocomplete, "on");
  var varSize = _controller_util_js__WEBPACK_IMPORTED_MODULE_2__["validaProps"](props.size, "15");

  if (props.maxlength != undefined) {
    varSize = props.maxlength;
  }

  ;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1860538152"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: varType,
    id: varId,
    name: varName,
    accept: "image/*",
    placeholder: varPlaceholder,
    autocomplete: varAutocomplete,
    size: varSize,
    maxlength: varSize,
    required: true,
    className: "jsx-1860538152" + " " + "campotexto"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1860538152"
  }, ".campotexto.jsx-1860538152{width:280px;height:48px;border-radius:4px;border:solid 1px #dbdbdb;text-indent:10px;margin:10px;font-family:SimplonBP-Regular background-color:#ffffff;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvYXRvbXMvYXRDYW1wb1RleHRvL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHdUIsWUFDQSxZQUNNLGtCQUNPLHlCQUNSLGlCQUNMLFlBRWEsdURBQ1YsZUFDakIiLCJmaWxlIjoiL2hvbWUvb2k0MDI4MjUvRG9jdW1lbnRvcy9Qcm9qZXRvcy9zaXRlX2RvX3ZhbGVudGUvY29tcG9uZW50cy9hdG9tcy9hdENhbXBvVGV4dG8vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsYXlvdXQgZGUgRG9jdW1lbnRvc2NvcGlhKC9tZXVzZG9jdW1lbnRvcy8pIC0gUHJvamV0byBQaWxvdG9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvdXRpbC5qcyc7XG5cbmNvbnN0IEF0Q2FtcG9UZXh0byA9IHByb3BzID0+IHtcbiAgdmFyIHZhcklkPVV0aWwudmFsaWRhUHJvcHMocHJvcHMuaWQsXCJpZFwiKTtcbiAgdmFyIHZhck5hbWU9VXRpbC52YWxpZGFQcm9wcyhwcm9wcy5uYW1lLFwibm9tZVwiKTtcbiAgdmFyIHZhclBsYWNlaG9sZGVyPVV0aWwudmFsaWRhUHJvcHMocHJvcHMucGxhY2Vob2xkZXIsXCItLVwiKTtcbiAgdmFyIHZhclR5cGU9VXRpbC52YWxpZGFQcm9wcyhwcm9wcy50eXBlLFwidGV4dFwiKTtcbiAgdmFyIHZhckF1dG9jb21wbGV0ZT1VdGlsLnZhbGlkYVByb3BzKHByb3BzLmF1dG9jb21wbGV0ZSxcIm9uXCIpO1xuICB2YXIgdmFyU2l6ZT1VdGlsLnZhbGlkYVByb3BzKHByb3BzLnNpemUsXCIxNVwiKTtcbiAgaWYoIHByb3BzLm1heGxlbmd0aCE9dW5kZWZpbmVkKXt2YXJTaXplPXByb3BzLm1heGxlbmd0aH07XG4gIFxuICByZXR1cm4oXG4gICAgPHNwYW4+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT17dmFyVHlwZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiY2FtcG90ZXh0b1wiXG4gICAgICAgIGlkPXt2YXJJZH1cbiAgICAgICAgbmFtZT17dmFyTmFtZX1cbiAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPXt2YXJQbGFjZWhvbGRlcn1cbiAgICAgICAgYXV0b2NvbXBsZXRlPXt2YXJBdXRvY29tcGxldGV9XG4gICAgICAgIHNpemU9e3ZhclNpemV9XG4gICAgICAgIG1heGxlbmd0aD17dmFyU2l6ZX1cbiAgICAgICAgcmVxdWlyZWQvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2FtcG90ZXh0b3tcbiAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZGJkYmRiO1xuICAgICAgICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogU2ltcGxvbkJQLVJlZ3VsYXJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvc3Bhbj5cbiAgKVxufVxuXG4vL2ZvbnQtZmFtaWx5OiAnU2ltcGxvbi1IZWFkbGluZSc7XG5leHBvcnQgZGVmYXVsdCBBdENhbXBvVGV4dG9cbiJdfQ== */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/atoms/atCampoTexto/index.js */"));
}; //font-family: 'Simplon-Headline';


/* harmony default export */ __webpack_exports__["default"] = (AtCampoTexto);

/***/ })

})
//# sourceMappingURL=busca.js.51aa79057407094cde3e.hot-update.js.map