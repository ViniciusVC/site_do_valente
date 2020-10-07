
import React from 'react';
import ConvertUnidade from './index.js';



export const orgTanque = (modo) => {
  return(
    <div >
      <div className="p"><h2>orgConvertUnidade</h2></div>
        
        <ConvertUnidade/>
        <div>
          <p className="p">
            Codigo : {'<ConvertUnidade/>'}<br/>
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

export default orgTanque;
