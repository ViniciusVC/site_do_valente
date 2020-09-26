import React, { Children } from "react";

const btLinkItemLuzVerde = props => {
  var varValue = props.value;
  var varHref = props.href;  
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
            display: inline-flex;
            flex-wrap: wrap;
            width: 100%;
            /*max-width: 500px;*/
            padding :0;
            margin:0;
            color: #10ecf5;
            animation-duration: 0.5s;
            animation-name: animaItembutLuz;
          }
          .btLuzA{
            text-decoration: none;
            
            /*background-color:green;*/
          }
          .btLuzA:hover {
            transition-duration: 1s;
            color: #ffffff;
            padding-left:5px;
            /* .btLuz2 {
              background-image: url("/static/assetsv5/img/layout_luz/but_luz_02_hover.png");
            } */
          }
          .btLuzA:hover .btLuz1{ 
              background-image: url("/static/assetsv5/img/layout_luz/item_luz_01_hover.png");
          }
          
          .btLuzA:hover .btLuz2{
            background-image: url("/static/assetsv5/img/layout_luz/item_luz_02_hover.png");
          }
          .btLuzA:hover .btLuz3{ 
              background-image: url("/static/assetsv5/img/layout_luz/item_luz_03_hover.png");
          }
          .btLuz1{
            width: 18px;
            background-image: url("/static/assetsv5/img/layout_luz/item_luz_01.png");
            padding: 0px;
            margin: 0;
          }
          .btLuz2{
            min-width: 140px;
            /*max-width: 468px;*/
            padding: 10px;
            background-image: url("/static/assetsv5/img/layout_luz/item_luz_02.png");
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
            background-image: url("/static/assetsv5/img/layout_luz/item_luz_03.png");
            padding: 0px;
            margin: 0;
          }

          @keyframes animaItembutLuz {
            from {
              opacity: 0.0;
              margin-left: 10%;
              width: 80%;
            }
            to {
              opacity: 1.0;
              margin-left: 0%;
              width: 100%;
            }
          }
        `}</style>
      </a>
    );
};
export default btLinkItemLuzVerde;
