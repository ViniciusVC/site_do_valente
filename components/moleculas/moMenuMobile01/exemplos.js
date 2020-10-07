
import React from 'react';
import MenuMobile01 from './index.js';


export const moMenuMobile01 = (modo) => {
  return(
    <div >
      <div className="p"><h2>Menu mobile Minha-Oi</h2></div>
        
        <MenuMobile01 modo={modo}/>
        <div>
          <p className="p">
            Codigo : {'<MenuMobile01 modo="'+modo+'"/>'}<br/>
            modo="{modo}""<br/>
            titulo="game"<br/>
            categoria="game"<br/>
            btestilo = "neon"<br/>
            btestiloitem = "neonItem"<br/>
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

export default moMenuMobile01;
