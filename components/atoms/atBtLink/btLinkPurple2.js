import React, { Children } from "react";

const btLinkPurple2 = props => {
  var varValue = props.value;
  var varHref = props.href;
  
  return (
      // Botão do Minha Oi na home do site SEO.
      <div>
        <a className="btLinkPurple2" id="euquero" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinkPurple2 {
            font-family: oiTextRegular, sans-serif;
            background-color: #8f25e5;
            border-radius: 3px;
            color: #ffffff;
            display: block;
            font-size: 1rem; /*16px*/
            height: 3.2rem;
            text-align: center;
            width: 169px;
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
          .btLinkPurple2:hover {
            transition-duration: 1s;
            color: #8f25e5;
            border: solid 1px #8f25e5;
            background-color: #ffffff;
            background-image: none;
          }
        `}</style>
      </div>
    );
};
export default btLinkPurple2;
