
import React from 'react';
import Controleogodzilla from './index.js';



export const orgControleogodzilla = (modo) => {
  return(
    <div >
      <div className="p"><h2>orgControleogodzilla</h2></div>
        
        <Controleogodzilla/>
        <div>
          <p className="p">
            Codigo : {'<Controleogodzilla/>'}<br/>
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

export default orgControleogodzilla;
