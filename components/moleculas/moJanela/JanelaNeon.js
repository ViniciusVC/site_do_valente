import React from 'react'
//import * as Util from '../../../controller/util.js';

const JanelaNeon = props => {
      // console.log('Rodando /moJanela/JanelaEscuro');
      //Layout escuro
      return (
        <div className="winDetal">
          <div className="winDetal1 winDetalD1"></div>
          <div className="winDetal2 winDetalD2"></div>
          <div className="JanelaNeon">
            <div className="winDetal3"></div>
            {props.children}
          </div>
          <div className="winDetal1 winDetalE"></div>
          <div className="winDetal2 winDetalE2"></div>
          <div className="winDetal4"></div>
          <style jsx>{`
              .winDetal{
                padding :10px;
              }

                    .winDetal1 {
                      background-color:#00ffea;
          
                      border-top: solid 1px #00ffea;
                      
                      /*border-right: solid 20px #00ffea;*/
                      /*border-left: solid 2px #00ffea;*/
                      
                      border-top-right-radius: 6px;
                      border-top-left-radius: 6px;
          
                      width: 50px;
                      height: 5px;
                    }
                    .winDetal2 {
                      float: right;
                      border-top: solid 1px #00ffea;
                      border-left: solid 2px #00ffea;
                      border-top-left-radius: 5px;
                      
                      width: 90%;
                      /*margin-top: -3px;*/
                      height: 2px;
                    }
          .winDetalD1 {
            float: right;
            margin-right: -26px;
            margin-top: -5px;
          }
          .winDetalD2 {
            float: right;
            margin-right: -22px;
            margin-top: -2px;
          }
          .winDetalE {
            margin-top: -6px;
          }
          .winDetalE2 {
            float: right;
            margin-right: -20px;
            margin-top: -3px;
          }
          .winDetal3 {
            background-color:#00ffea;
            border-bottom-right-radius: 6px;
            float: right;
            margin-right: -15px;
            margin-top: -11px;
            width: 5px;
            height: 25px;
          }
          .winDetal4 {
            background-color:#00ffea;
            border-top-right-radius: 6px;
            margin-right: -15px;
            margin-top: -25px;
            width: 5px;
            height: 25px;
          }
          .JanelaNeon{
            width: 100%;
            font-size: 17px;
            font-family: sans-serif;
            
            color: #ffffff;
            
            background-color:#00ffea;
            background: rgba(0, 255, 255, 0.2);
            
            border-bottom-right-radius: 8px;
            border-top-left-radius: 8px;
            border: solid 1px #00ffea;
            padding: 10px;
                    
          }
          `}</style>
        </div>
      )
    }

    export default JanelaNeon
