import React, { Children } from "react";

const BtLinkLuz = props => {
  var varValue = props.value;
  var varHref = props.href;

    if(varHref!=""){
      return (
        // Botão luz.
        <a className="btLuzA" href={varHref}>
          <div className="btLuz">
            <div className="btLuz1"></div>
            <div className="btLuz2">{varValue}</div>
            <div className="btLuz3"></div>
          </div>
          <style jsx>{`
            .btLuz{
              color: #10ecf5;
              display: inline-flex;
              flex-wrap: wrap;
              width: 100%;
              /*max-width: 500px;*/
              padding :0;
              margin:0;
              animation-duration: 1s;
              animation-name: animabutLuz;
            }
            .btLuzA{
              text-decoration: none;
              /*background-color:green;*/
            }
            .btLuzA:hover {
              color: #ffffff;
            }
            .btLuzA:hover .btLuz1{ 
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_01_hover.png");
            } 
            .btLuzA:hover .btLuz2{
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_02_hover.png");
            }
            .btLuzA:hover .btLuz3{ 
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_03_hover.png");
            }
            .btLuz1{
              width: 17px;
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_01.png");
              padding: 0px;
              margin: 0;
            }
            .btLuz2{
              min-width: 150px;
              /*max-width: 468px;*/
              padding: 10px;
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_02.png");
              text-align: center;
              font-family: sans-serif;
              display: block;
              font-size: 1rem; /*16px*/
              cursor: pointer;
              outline: 0;
              font-style: normal;
              margin: 0;
            }
            .btLuz3{
              width: 15px;
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_03.png");
              padding: 0px;
              margin: 0;
            }

            @keyframes animabutLuz {
              0% {
                  opacity: 0.0;
              }
              100% {
                  opacity: 1.0;
              }
            }
            
          `}</style>
        </a>
      );
    }else{
      return (
        // Botão luz.
        <div className="btLuz">
            <div className="btLuz1"></div>
            <div className="btLuz2">{varValue}</div>
            <div className="btLuz3"></div>
          
          <style jsx>{`
            .btLuz{
              color: #10ecf5;
              display: inline-flex;
              flex-wrap: wrap;
              width: 100%;
              /*max-width: 500px;*/
              padding :0;
              margin:0;
              animation-duration: 1s;
              animation-name: animabutLuz;
            }
            .btLuz:hover {
              color: #ffffff;
            }
            .btLuz:hover .btLuz1{ 
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_01_hover.png");
            } 
            .btLuz:hover .btLuz2{
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_02_hover.png");
            }
            .btLuz:hover .btLuz3{ 
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_03_hover.png");
            }
            .btLuz1{
              width: 17px;
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_01.png");
              padding: 0px;
              margin: 0;
            }
            .btLuz2{
              min-width: 150px;
              /*max-width: 468px;*/
              padding: 10px;
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_02.png");
              text-align: center;
              font-family: sans-serif;
              display: block;
              font-size: 1rem; /*16px*/
              cursor: pointer;
              outline: 0;
              font-style: normal;
              margin: 0;
            }
            .btLuz3{
              width: 15px;
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_03.png");
              padding: 0px;
              margin: 0;
            }

            @keyframes animabutLuz {
              0% {
                  opacity: 0.0;
              }
              100% {
                  opacity: 1.0;
              }
            }
          `}</style>
        </div>
      );
    }
};

export default BtLinkLuz;