import React, { Children } from "react";

const btLinkNeon = props => {
  var varValue = props.value;
  var varHref = props.href;
  if(varHref!=""){
    return (
      // Botão Neon VVC Estudio.
      <div>
        <a className="btLinkNeon" href={varHref}>
          {varValue}
        </a>
        <style jsx>{`
          .btLinkNeon {

            border: solid 2px #00ffea;
            border-radius: 5px;
            
            padding: 5px;
            
            transition: all 0.8s;
            font-family: oiTextRegular, sans-serif;
            
            background-color:#00ffea;
            background: rgba(0, 255, 255, 0.2);

            color: #00ffea;
            display: block;
            font-size: 1rem; /*16px*/
            text-align: center;

            text-decoration: none;
            
            cursor: pointer;
            outline: 0;
            margin-right: 5px;
            margin-bottom: 5px; 
            box-sizing: border-box;
            font-style: normal;

            width: 100%;
            max-width: 500px;
          }
          .btLinkNeon:hover {
            transition: all 0.5s;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            -o-transition: all 0.5s;
            color: #ffffff;
            border: solid 2px #ffffff;
            /*background-color: #ffffff;*/
          }
        `}</style>
      </div>
    )
  }else{
    return (
      <div>
        <div className="btLinkNeon">
          {varValue}
        </div>
        <style jsx>{`
          .btLinkNeon {

            border: solid 2px #00ffea;
            border-radius: 5px;
            
            padding: 5px;
            
            transition: all 0.8s;
            font-family: oiTextRegular, sans-serif;
            
            background-color:#00ffea;
            background: rgba(0, 255, 255, 0.2);

            color: #00ffea;
            display: block;
            font-size: 1rem; /*16px*/
            text-align: center;

            text-decoration: none;
            
            cursor: pointer;
            outline: 0;
            margin-right: 5px;
            margin-bottom: 5px; 
            box-sizing: border-box;
            font-style: normal;

            width: 100%;
            max-width: 500px;
          }
          .btLinkNeon:hover {
            transition: all 0.5s;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            -o-transition: all 0.5s;
            color: #ffffff;
            border: solid 2px #ffffff;
            /*background-color: #ffffff;*/
          }
        `}</style>
      </div>
      );
    }
};
export default btLinkNeon;
