import React, { Children } from "react";

const btLink = props => {
  var varValue = props.value;
  var varHref = props.href;
  
    return (
      //Sem padrão
      <a href={varHref}>
        <div className="btLink">{varValue}</div>
        <style jsx>{`
          .btLink {
            width: 100%;
            padding-top: 20px;
            padding-bottom: 20px;
            color: #000000;
            cursor: pointer;
            border-radius: 6px;
            text-align: center;
            border: solid 1px #dbdbdb;
            background-color: #ffffff;
          }
        `}</style>
      </a>
    );
};
export default btLink;
