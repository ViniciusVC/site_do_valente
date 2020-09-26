import React from 'react'
//import * as Util from '../../../controller/util.js';

const JanelaEscuro = props => {
      // console.log('Rodando /moJanela/JanelaEscuro');
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

export default JanelaEscuro
