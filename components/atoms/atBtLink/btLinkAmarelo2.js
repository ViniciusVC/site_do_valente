import React, { Children } from "react";


const btLinkAmarelo2 = props => {
  var varValue = props.value;
  var varHref = props.href;

    return (
      // Botão de eu quero no minha Oi.
      <div>
        <a className="btLinkAmarelo2" id="euquero" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinkAmarelo2 {
            transition-duration: 1s;
            font-family: oiTextRegular, sans-serif;
            font-size: 1rem; /*16px*/
            padding-top: 18px;
            background-color: #ffd700;
            border-radius: 3px;
            color: #222;
            display: block;
            height: 3.8rem;
            text-align: center;
            width: 100%;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            box-sizing: border-box;
            border: solid 2px #ffd700;
          }
          .btLinkAmarelo2:hover {
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
export default btLinkAmarelo2;
