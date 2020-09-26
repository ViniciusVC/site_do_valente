import React, { Children } from "react";


const btLinkAmarelo3 = props => {
  var varValue = props.value;
  var varHref = props.href;

    return (
      // Botão de "eu quero" OCC.
      <div>
        <a className="btLinkAmarelo3" id="euquero" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinkAmarelo3 {
            transition-duration: 1s;
            background-color: #ffd700;
            border-radius: 0.28571429rem;
            color: #222;
            display: block;
            font-size: 1.14285714rem;
            font-weight: 37.5rem; /*600*/

            height: 3.42857143rem;
            text-align: center;
            width: fit-content;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            font-family: "SimplonBP-Regular", Arial;
            outline: 0;
            margin: 0;
            /*margin-top: 1.28571429rem;*/
            padding: 0.85714286rem 20px;
            box-sizing: border-box;
            font-style: normal;
            border: solid 2px #ffd700;
          }
          .btLinkAmarelo3:hover {
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
export default btLinkAmarelo3;
