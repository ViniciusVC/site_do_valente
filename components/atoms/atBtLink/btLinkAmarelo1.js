import React, { Children } from "react";

const btLinkAmarelo1 = props => {
  var varValue = props.value;
  var varHref = props.href;
  
  return (
      // Botão de eu quero no minha Oi.
      <div>
        <a className="btLinkAmarelo1" id="euquero" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinkAmarelo1 {
            transition-duration: 1s;
            font-family: oiTextRegular, sans-serif;
            font-size: 1rem; /*16px*/

            background-color: #ffd700;
            border-radius: 0.28571429rem;
            color: #222;
            display: block;

            height: 2.2rem;
            text-align: center;
            width: 196px;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            outline: 0;
            margin: 0;
            padding: 0.6rem 2.5rem;
            box-sizing: border-box;
            border: solid 2px #ffd700;
          }
          .btLinkAmarelo1:hover {
            transition-duration: 1s;
            color: #222;
            border: solid 2px #ffd700;
            background-color: #ffffff;
            background-image: none;
          }
        `}</style>
      </div>
    );
  };
export default btLinkAmarelo1;
