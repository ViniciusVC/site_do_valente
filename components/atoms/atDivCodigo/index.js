import React from "react";
import * as Util from "../../../controller/util.js";
//import { useAmp } from 'next/amp'

const atDivCodigo = props => {
  var titulo = Util.validaProps(props.titulo, "Codigo"); 

  return (
      <div className="atDivCodContorno">
        <div className="atDivCodigoTop">
          {titulo}
        </div>
        <div className="atDivCodigo">
        {props.children}
        </div>
        <style jsx>{`
          .atDivCodigoTop {
            width: 100%;
            font-size: 17px;
            font-family: sans-serif;
            background-color: #282c45;
            background-image: linear-gradient(45deg, #282c45, #4f4e64 );
            border-top-left-radius :  12px;
            border-top-right-radius :  12px;
            display: block;
            /*border: solid 1px #000000;*/
            padding: 10px;
            box-sizing: border-box;
          }
          .atDivCodigo {
            color:#00ff00;
            padding : 10px;
          }
          .atDivCodContorno{
            
            margin-bottom: 10px;
            width: 100%;
            font-size: 17px;
            font-family: sans-serif;
            background-color: #282c45;
            background-image: linear-gradient(90deg, #100e16, #363046 );
            border-radius : 12px;
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

export default atDivCodigo;
