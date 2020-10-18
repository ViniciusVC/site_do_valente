import React, { Children } from "react";

const btLinkbutAzul = props => {
  var varValue = props.value;
  var varHref = props.href;
    return (
        <a className="btLinkbutazulLink" href={varHref}>
          <strong>
            {varValue}
          </strong>        
        <style jsx>{`
          .btLinkbutazulLink {
            color: #000000;
            text-decoration: none;
            outline: 0;
            box-sizing: border-box;
            font-style: normal;
          }
          .btLinkbutazulLink:hover {
            color: #0073b1;
          }
        `}</style>
      </a>
    );
};
export default btLinkbutAzul;
