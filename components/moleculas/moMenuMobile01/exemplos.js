
import React from 'react';
import Head from 'next/head'
import MenuMobile01 from './index.js';


export const moMenuMobile01 = (modo) => {
  return(
    <div >
      <Head>
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <div className="p"><h2>Menu mobile Minha-Oi</h2></div>
        
        <MenuMobile01 modo={modo}/>
        <div>
          <p className="p">
            Codigo : {'<MenuMobile01 modo="'+modo+'"/>'}<br/>
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

export default moMenuMobile01;
