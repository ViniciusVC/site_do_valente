import React, { Children } from "react";
import * as Util from "../../../controller/util.js";

const btSubmit = props => {
  var varValue = Util.validaProps(props.value, "");
  var varHref = Util.validaProps(props.href, "www.oi.com.br");
  var varEstilo = Util.validaProps(props.estilo, "");
  var varWidth = Util.validaProps(props.width, "");
  var varWidthMobile = Util.validaProps(props.mobilewidth, "");
    return (
      // Botão do formulário Meus Documentos.
      <div>
        <a className="btLinklaranja" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinklaranja {
            font-family: oiTextRegular, sans-serif;
            background-color: #f8562c;
            background-image: linear-gradient(260deg, #fb851c, #f8562c);
            border-radius: 6px;
            color: #ffffff;
            display: block;
            font-size: 1rem; /*16px*/
            height: 3.42857143rem;
            text-align: center;
            width: 280px;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            outline: 0;
            margin: 0;
            padding: 1.2rem;
            box-sizing: border-box;
            font-style: normal;
            transition-duration: 1s;
          }
          .btLinklaranja:hover {
            transition-duration: 1s;
            color: #f8562c;
            border: solid 1px #fb851c;
            background-color: #ffffff;
            background-image: none;
          }
        `}</style>
      </div>
    );
};
export default btSubmit;
