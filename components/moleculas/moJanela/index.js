import React from 'react'
import Div from '../../atoms/atDiv'
import * as Util from '../../../controller/util.js';

const layout = props => {
  console.log('Rodando /moJanela');

  var varEstilo = Util.validaProps(props.estilo, "");

  if (varEstilo == "luz") {
    //Layout Luz verde
    return (
      <div className="DivJanela">
        
        <Div display="justificado">
          <div className="DivJanelaHead1"></div>
          <div className="DivJanelaHead2"></div>
          <div className="DivJanelaHead3"></div>
        </Div>
        
        <Div display="justificado">
          <div className="DivJanelaBody1"></div>
          <div className="DivJanelaBody2">{props.children}</div>
          <div className="DivJanelaBody3"></div>
        </Div>

        <Div display="justificado">
          <div className="DivJanelaFooter1"></div>
          <div className="DivJanelaFooter2"></div>
          <div className="DivJanelaFooter3"></div>
        </Div>
        
        <style jsx>{`
        .DivJanelaHead1{
          margin : 0;
          padding :0;
          height: 51px;
          width: 51px;
          background-image: url("/static/assetsv5/img/layout_luz/janela_luz_01.png");
        }

        .DivJanelaHead2{
          margin : 0;
          padding :0;
          height: 51px;
          width: 100%;
          background-image: url("/static/assetsv5/img/layout_luz/janela_luz_02.png");
        }

        .DivJanelaHead3{
          margin : 0;
          padding :0;
          height: 51px;
          width: 65px;
          background-image: url("/static/assetsv5/img/layout_luz/janela_luz_03.png");
        }

        .DivJanelaBody1{
          margin : 0;
          margin-left : -2px;
          padding :0;
          width: 51px;;
          background-image: url("/static/assetsv5/img/layout_luz/janela_luz_04.png");
          animation-duration: 1s;
          animation-name: slidein1;
        }

        .DivJanelaBody2{
          margin : 0;
          padding :0;
          width: 100%;
          font-size: 17px;
          font-family: sans-serif;
          background-image: url("/static/assetsv5/img/layout_luz/janela_luz_05.png");
          display: block;
          /*border: solid 1px #000000;
          padding: 10px;
          box-sizing: border-box;*/
        }

        .DivJanelaBody3{
          margin : 0;
          padding :0;
          width: 65px;
          background-image: url("/static/assetsv5/img/layout_luz/janela_luz_06.png");
        }

        .DivJanelaFooter1{
          margin : 0;
          margin-left : -2px;
          padding :0;
          height: 47px;
          width: 51px;;
          background-image: url("/static/assetsv5/img/layout_luz/janela_luz_07.png");
        }

        .DivJanelaFooter2{
          margin : 0;
          padding :0;
          height: 47px;
          width: 100%;
          background-image: url("/static/assetsv5/img/layout_luz/janela_luz_08.png");
        }

        .DivJanelaFooter3{
          margin : 0;
          padding : 0;
          height: 47px;
          width: 65px;
          background-image: url("/static/assetsv5/img/layout_luz/janela_luz_09.png");
        }

        .DivJanela{
          width: 100%;
          animation-duration: 0.5s;
          animation-name: animabrilho;
        }

        @keyframes animabrilho {
          from {
            opacity: 0.1;
            margin-left: 5%;
            width: 90%;
          }
          to {
            opacity: 1.0;
            margin-left: 0%;
            width: 100%;
          }
        }

   
        }
      `}</style>
      </div>
    )
    }else {
      //Layout escuro
      return (
        <div className="DivSombra">
          {props.children}
          <style jsx>{`
          .DivSombra{
            width: 100%;
            font-size: 17px;
            font-family: sans-serif;
            background-color: #282c45;
            background-image: linear-gradient(45deg, #16192a, #282c45, #282c45 );
            border-radius: 4px;
            display: block;
            /*border: solid 1px #000000;*/
            padding: 10px;
            box-sizing: border-box;
            -webkit-box-shadow: -9px 9px 20px rgba(1, 1, 1, 0.57);
            -moz-box-shadow: -9px 9px 20px rgba(1, 1, 1, 0.57);
            box-shadow: -9px 9px 20px rgba(1, 1, 1, 0.57);        
          }
        `}</style>
        </div>
      )
    }
}

export default layout
