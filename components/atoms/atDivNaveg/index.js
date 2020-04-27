import React from "react";

const atDivNaveg = props => {
  return (
      <div className="atDivNavegContorno">
        <div className="atDivNavegTop">
          <div className="atDivNavegBola corvermelho"></div>
          <div className="atDivNavegBola coramarelo"></div>
          <div className="atDivNavegBola corverde"></div>
        </div>
        <div className="atDivCodigo">
        {props.children}
        </div>
        <style jsx>{`
          .atDivNavegBola {
            width : 10px;
            height : 10px;
            background-color: #ff5247;
            margin: 0px;
            margin-top: 4px;
            margin-left: 8px;
            border-radius : 10px;
          }

          .corvermelho {
             background-color: #ff5247;
          }
          .coramarelo {
            background-color: #f7cf00;
          }
          .corverde {
            background-color: #00e047;
          }
        
          .atDivNavegTop {
            width: 100%;
            height :20px;
            font-size: 17px;
            font-family: sans-serif;
            background-color: #282c45;
            background-image: linear-gradient(45deg, #9d9d9d, #e2e2e2 );
            border-top-left-radius :  10px;
            border-top-right-radius :  10px;
            display: inline-flex;
            flex-wrap: wrap;
            /*display: block;*/
            /*border: solid 1px #000000;*/
            padding: 0px;
            box-sizing: border-box;
          }
          .atDivCodigo {
            color:#000000;
            padding : 10px;
          }
          .atDivNavegContorno{
            margin-bottom: 10px;
            width: 100%;
            font-size: 17px;
            font-family: sans-serif;
            background-color: #282c45;
            background-image: linear-gradient(45deg, #cfc0db, #ffffff, #cfc0db );
            border-radius : 10px;
            display: block;
            /*border: solid 1px #000000;*/
            box-sizing: border-box;
            -webkit-box-shadow: -9px 9px 20px rgba(1, 1, 1, 0.57);
            -moz-box-shadow: -9px 9px 20px rgba(1, 1, 1, 0.57);
            box-shadow: -9px 9px 20px rgba(1, 1, 1, 0.57);  
          }
        `}</style>
      </div>
    );
};

export default atDivNaveg;
