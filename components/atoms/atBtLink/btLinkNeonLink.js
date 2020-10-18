import React, { Children } from "react";

const btLinkNeonLink = props => {
  var varValue = props.value;
  var varHref = props.href;
    return (
      // Botão Neon VVC Estudio.
        <a className="btLinkNeonLink" href={varHref}>
          <strong>
            {varValue}
          </strong>
        <style jsx>{`
          .btLinkNeonLink {
            color: #00ffea;
            text-decoration: none;
            outline: 0;
            box-sizing: border-box;
            font-style: normal;
          }
          .btLinkNeonLink:hover {
            color: #ffffff;
          }
        `}</style>
        </a>
    );
};
export default btLinkNeonLink;
