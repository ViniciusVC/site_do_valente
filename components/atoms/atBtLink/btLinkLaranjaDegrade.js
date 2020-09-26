import React, { Children } from "react";


const btLinkLaranjaDegrade = props => {
  var varValue = props.value;
  var varHref = props.href;
 
    return (
      <div>
        <a className="btLinkLaranjaDegrade" href={varHref}>
          {varValue}{" "}
        </a>
        <style jsx>{`
          .btLinkLaranjaDegrade {
            display: inline-block;
            position: relative;
            width: 100%;
            max-width: 16.875rem;
            border-radius: 4px;
            background-color: rgb(255, 215, 0);
            font-family: "SimplonBP-Regular";
            font-weight: 400;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            text-decoration: none;
            transition: all 0.3s ease 0s;
            outline: currentcolor none medium;
            background-image: linear-gradient(
              281deg,
              rgb(254, 107, 3) -100%,
              rgb(227, 52, 101)
            );
            color: rgb(255, 255, 255);
            font-size: 1.125rem;
            box-shadow: rgba(0, 0, 0, 0.2) 10px 13px 20px -3px;
            border: medium none;
            padding: 16.5px;
          }
        `}</style>
      </div>
    );
};

export default btLinkLaranjaDegrade;
