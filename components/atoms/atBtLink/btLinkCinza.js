import React, { Children } from "react";

const btLinkCinza = props => {
  var varValue = props.value;
  var varHref = props.href;
  return (
      // Botão cinza site valente.
      <div>
        <a className="btCinza" href={varHref}>
          {varValue}{" "}
        </a>
        <style jsx>{`
          .btCinza {
            padding: 10px;
            transition: all 0.8s;
            font-family: oiTextRegular, sans-serif;
            background-color: #26293c;
            border-radius: 15px;
            color: #ffffff;
            display: block;
            font-size: 1rem; /*16px*/
            text-align: center;

            text-decoration: none;
            border: solid 2px #4a516b;
            cursor: pointer;
            outline: 0;
            margin: 0;
            box-sizing: border-box;
            font-style: normal;
            width: 100%;
            max-width: 500px;
          }
          .btCinza:hover {
            transition: all 0.8s;
            -webkit-transition: all 0.8s;
            -moz-transition: all 0.8s;
            -o-transition: all 0.8s;
            /*color: #d82482;*/
            background-color: #4a516b;
          }
        `}</style>
      </div>
    );
};
export default btLinkCinza;
