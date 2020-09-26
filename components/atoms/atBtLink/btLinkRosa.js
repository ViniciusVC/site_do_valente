import React, { Children } from "react";

const btLinkRosa = props => {
  var varValue = props.value;
  var varHref = props.href;

    return (
      // Botão de ENTRAR no minha Oi.
      <div>
        <a className="btLinkRosa" href={varHref}>
          {varValue}{" "}
        </a>
        <style jsx>{`
          .btLinkRosa {
            padding: 10px;
            transition: all 0.8s;
            font-family: oiTextRegular, sans-serif;
            background-color: #d82482;
            border-radius: 3px;
            color: #ffffff;
            display: block;
            font-size: 1rem; /*16px*/
            text-align: center;

            text-decoration: none;
            border: solid 2px #d82482;
            cursor: pointer;
            outline: 0;
            margin: 0;
            box-sizing: border-box;
            font-style: normal;
            width: 100%;
            max-width: 500px;
          }
          .btLinkRosa:hover {
            transition: all 0.8s;
            -webkit-transition: all 0.8s;
            -moz-transition: all 0.8s;
            -o-transition: all 0.8s;
            color: #d82482;
            background-color: #ffffff;
            border: solid 1px #d82482;
          }
        `}</style>
      </div>
    );
};
export default btLinkRosa;
