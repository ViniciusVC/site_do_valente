import React from 'react'
//import * as Util from '../../../controller/util.js';

const JanelaClaro = props => {
      // console.log('Rodando /moJanela/JanelaEscuro');
      //Layout escuro
      return (
        <div className="DivJanClaro">
          {props.children}
          <style jsx>{`
          .DivJanClaro{
            width: 100%;
            font-size: 17px;
            font-family: sans-serif;
            background-color: #ffffff;
            color: #000000;
            border-radius: 2px;
            display: block;
            border: solid 1px #f0f0f0;
            padding: 10px;
            box-sizing: border-box;
            -webkit-box-shadow: -1px 2px 10px rgba(1, 1, 1, 0.37);
            -moz-box-shadow: -1px 2px 10px rgba(1, 1, 1, 0.37);
            box-shadow: -1px 2px 10px rgba(1, 1, 1, 0.37);        
          }
        `}</style>
        </div>
      )
    }

export default JanelaClaro
