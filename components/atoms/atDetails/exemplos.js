
import React from 'react';
import Detail from './index.js';

export const atDdetails = (modo) => (
    <div >
      <div className="p"><h2>atDiv (vertical/horizontal/justificado/responsivo)</h2></div>
        
      <div>
        <h3>Details open true</h3>
        </div>
        <Detail open="True">
          <div className="divExmploAtDIV">item1</div>
          <div className="divExmploAtDIV">item2</div>
        </Detail>
        <div>
          <p className="p">
            Codigo : {'<Div display="responsivo"></Div>'}<br/>
            modo={modo}
          </p>
        </div>

        <div>
        <h3>detail open false</h3>
        </div>        
        <Detail open="False">
          <li className="divExmploAtDIV">item1</div>
          <li className="divExmploAtDIV">item2</div>
          <li className="divExmploAtDIV">item3</div>
        </Detail>
        <div>
          <p className="p">
            Codigo : {'<Div display="justificado"></Div>'}<br/>
            modo={modo}
          </p>
        </div>

        <style jsx>{`
          .p{ 
            background-color: #ffffff;
            color: #000000
          }
          .divExmploAtDIV{
            margin : 10px;
          }
        `}</style>
    </div>
);

export default atdetails;
