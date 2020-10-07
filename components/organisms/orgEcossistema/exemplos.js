
import React from 'react';
import Ecossistema from './index.js';



export const orgEcossistema = (modo) => {
  return(
    <div >
      <div className="p"><h2>orgEcossistema</h2></div>
        
        <Ecossistema/>
        <div>
          <p className="p">
            Codigo : {'<Ecossistema/>'}<br/>
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

export default orgEcossistema;
