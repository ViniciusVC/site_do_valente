
import React from 'react';
import Tanque from './index.js';



export const orgTanque = (modo) => {
  return(
    <div >

      <div className="p"><h2>orgTanque</h2></div>
        
        <Tanque/>
        <div>
          <p className="p">
            Codigo : {'<Tanque/>'}<br/>
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
