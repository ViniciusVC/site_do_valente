import React, { Children } from "react";

const btLinkRosaInvertido = props => {
  var varValue = props.value;
  var varHref = props.href;
  var varWidth = props.width;
  
    return (
      // Botão usado no minha Oi.
      <div>
        <a className="btLinkRosaInvertido" href={varHref}>
          {varValue}{" "}
        </a>
        <style jsx>{`
          .btLinkRosaInvertido {
            padding: 10px;
            transition: all 0.8s;
            font-family: oiTextRegular, sans-serif;
            background-color: #d82482;
            border-radius: 3px;
            display: block;
            font-size: 1rem; /*16px*/
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            outline: 0;
            margin: 0;
            font-style: normal;
            width: ${varWidth};
            max-width: 500px;
            color: #d82482;
            background-color: #ffffff;
            border: solid 1px #d82482;
          }
          .btLinkRosaInvetido:hover {
            transition: all 0.8s;
            -webkit-transition: all 0.8s;
            -moz-transition: all 0.8s;
            -o-transition: all 0.8s;
            color: #ffffff;
            border: solid 1px #d82482;
            background-color: #d82482;
          }
        `}</style>
      </div>
    );
  };
export default btLinkRosaInvertido;
