import React from 'react'
//import * as Util from '../../../controller/util.js';

const JanelaTerminal = props => {
      // console.log('Rodando /moJanela/JanelaEscuro');
      //Layout escuro
      return (
        <div className="DivTerm1">
          <div className="DivTerm2">
            {props.children}
          </div>
          <style jsx>{`
          .DivTerm1{
            padding :10px;
          }
          .DivTerm2{
            width: 100%;
            font-size: 17px;
            font-family: sans-serif;
            
            color: #00ffea;

            background-color:#000000;
            background: rgba(0, 0, 0, 0.7);
            
            border: solid 1px s#00ffea;
            border-radius: 4px;
            padding: 10px;        
          }
        `}</style>
        </div>
      )
    }

export default JanelaTerminal
