
import React from 'react';
import Head from 'next/head'
import ConvertUnidade from './index.js';



export const orgTanque = (modo) => {
  return(
    <div >
      <Head>
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
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
