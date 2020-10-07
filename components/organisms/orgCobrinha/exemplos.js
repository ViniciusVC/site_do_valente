
import React from 'react';
import Cobrinha from './index.js';



export const orgCobrinha = (modo) => {
  return(
    <div >
      <div className="p"><h2>orgCobrinha</h2></div>
        
        <Cobrinha/>
        <div>
          <p className="p">
            Codigo : {'<Cobrinha/>'}<br/>
            modo={modo}
          </p>
        </div>
        
        <style jsx>{`
          .p{ 
            background-color: #ffffff;
            color: #000000
          }
        `}</style>
    </div>
  )
};

export default orgCobrinha;
