import React, { Children } from "react";

const btLinkbutAzul = props => {
  var varValue = props.value;
  var varHref = props.href;
  if(varHref!=""){
    return (
      // Botão do Minha Oi na home do site SEO.
      <div>
        <a className="btLinkbutazul" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinkbutazul {
            font-family: oiTextRegular, sans-serif;
            background-color: #0073b1;
            border-radius: 3px;
            color: #ffffff;
            display: block;
            font-size: 1rem; /*16px*/
            height: 30px;
            text-align: center;
            width: 100%;
            max-width: 500px;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            outline: 0;
            margin: 0;
            padding: 5px;
            box-sizing: border-box;
            font-style: normal;
            transition-duration: 1s;
          }
          .btLinkbutazul:hover {
            transition-duration: 1s;
            color: #0073b1;
            border: solid 1px #0073b1;
            background-color: #ffffff;
            background-image: none;
          }
        `}</style>
      </div>
    );
  }else{
    return(
            <div>
        <div className="btLinkbutazul">
          {varValue}
        </div>
        <style jsx>{`
          .btLinkbutazul {
            font-family: oiTextRegular, sans-serif;
            background-color: #0073b1;
            border-radius: 3px;
            color: #ffffff;
            display: block;
            font-size: 1rem; /*16px*/
            height: 30px;
            text-align: center;
            width: 100%;
            max-width: 500px;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            outline: 0;
            margin: 0;
            padding: 5px;
            box-sizing: border-box;
            font-style: normal;
            transition-duration: 1s;
          }
          .btLinkbutazul:hover {
            transition-duration: 1s;
            color: #0073b1;
            border: solid 1px #0073b1;
            background-color: #ffffff;
            background-image: none;
          }
        `}</style>
      </div>
    )
  }
};
export default btLinkbutAzul;
