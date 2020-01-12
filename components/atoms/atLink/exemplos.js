
import React from 'react';
import Link from './index.js';

export const atLink = (modo) => {
  return(
    <div>
      <h2>BtLink</h2>
      <div>
        (Portal Oi Home):
        <div><Link href="https://www.oi.com.br" value="Minha Oi" estilo="LinkHeaderMinhaOi"/></div>
        <p className="p">Codigo:{'<Link href="https://www.oi.com.br" value="Minha Oi" estilo="LinkHeaderMinhaOi"/>'}</p>
      </div>
      <div>
        <div><Link href="https://www.oi.com.br" value="Minha Oi" estilo="LinkFooterNavMinhaOi"/></div>
        <p className="p">Codigo:{'<Link href="https://www.oi.com.br" value="Minha Oi" estilo="LinkFooterNavMinhaOi"/>'}</p>
      </div>
      <div>
        <div><Link href="https://www.oi.com.br" value="Acessar"/></div>
        <p className="p">Codigo:{'<Link href="https://www.oi.com.br" value="Acessar"/>'}</p>
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
