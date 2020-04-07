
import React from 'react';
import Link from './index.js';

export const atLink = (modo) => {
  return(
    <div>
      <h2>BtLink</h2>
      <div>
        (Portal Oi Home):
        <div><Link href="https://github.com/ViniciusVC/" value="Git Valente" estilo="LinkHeader"/></div>
        <p className="p">Codigo:{'<Link href="https://github.com/ViniciusVC/" value="Git Valente" estilo="LinkHeader"/>'}</p>
      </div>
      <div>
        <div><Link href="https://github.com/ViniciusVC/" value="Git Valente" estilo="LinkFooterNav"/></div>
        <p className="p">Codigo:{'<Link href="https://github.com/ViniciusVC/" value="Git Valente" estilo="LinkFooterNav"/>'}</p>
      </div>
      <div>
        <div><Link href="https://github.com/ViniciusVC/" value="Git Valente"/></div>
        <p className="p">Codigo:{'<Link href="https://github.com/ViniciusVC/" value="Git Valente"/>'}</p>
      </div>
      <style jsx>{`
      .p{ 
        background-color: #ffffff;
        color: #000000
      }
    `}</style>
    </div>
)};

export default atLink;
