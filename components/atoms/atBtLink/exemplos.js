
import React from 'react';
import BtLink from './index.js';

export const atBtLink = (modo) => {
  return(
    <div>
      <h2>BtLink</h2>
      <div>
        Componente atBtLink Purple (site_do_valente):
        <BtLink href="https://www.facebook.com/" value="Link cinza" estilo="cinza"/>
        <p className="p">Codigo:{'<BtLink href="https://www.facebook.com/" value="Link cinza" estilo="cinza"/>'}</p>
      </div>
      <div>
        Componente atBtLink Purple (Portal Oi Home):
        <BtLink href="https://www.facebook.com/" value="Link Purple1" estilo="Purple1"/>
        <p className="p">Codigo:{'<BtLink href="https://www.facebook.com/" value="Link Purple1" estilo="Purple1"/>'}</p>
      </div>
      <div>
        Componente atBtLink Purple (Portal Oi Home):
        <BtLink href="https://www.facebook.com/" value="Link Purple2" estilo="Purple2"/>
        <p className="p">Codigo:{'<BtLink href="https://www.facebook.com/" value="Link Purple2" estilo="Purple2"/>'}</p>
      </div>
      <div>
        Componente atBtLink amarelo (Documentoscopia):
        <BtLink href="https://www.facebook.com/" value="Link laranja" estilo="laranja"/>
        <p className="p">Codigo:{'<BtLink href="https://www.facebook.com/" value="Acessar" estilo="laranja"/>'}</p>
      </div>
      <div>
        Componente atBtLink amarelo (Minha Oi):
        <BtLink href="https://www.facebook.com/" value="link amarelo1" estilo="amarelo1"/>
        <p className="p">Codigo:{'<BtLink href="https://www.facebook.com/" value="Eu quero!" estilo="amarelo1"/>'}</p>
      </div>
      <div>
        Componente atBtLink amarelo (Minha Oi):
        <BtLink href="https://www.facebook.com/" value="link amarelo 2" estilo="amarelo2"/>
        <p className="p">Codigo:{'<BtLink href="https://www.facebook.com/" value="Veja a disponibilidade" estilo="amarelo2"/>'}</p>
      </div>
      <div>
        Componente atBtLink amarelo (OCC):
        <BtLink href="https://www.facebook.com/" value="link amarelo3" estilo="amarelo3"/>
        <p className="p">Codigo:{'<BtLink href="https://www.facebook.com/" value="Eu quero" estilo="amarelo3"/>'}</p>
      </div>
      <div>
        Componente atBtLink laranja-degrade (OCC):
        <BtLink href="https://www.facebook.com/" value="link laraja" estilo="laraja-degrade"/>
        <p className="p">Codigo:{'<BtLink href="https://www.facebook.com/" value="Eu quero" estilo="laraja-degrade"/>'}</p>
      </div>
      <div>
        Componente atBtLink rosa (Minha Oi):
        <BtLink href="https://www.facebook.com/" value="link rosa" estilo="rosa"/>
        <p className="p">Codigo:{'<BtLink href="https://www.facebook.com/" value="Entrar" estilo="rosa"/>'}</p>
      </div>
      <div>
        Componente atBtLink rosa (Minha Oi):
        <BtLink href="https://www.facebook.com/" value="link rosa" estilo="rosa-invetido"/>
        <p className="p">Codigo:{'<BtLink href="https://www.facebook.com/" value="Entrar" estilo="rosa-invetido"/>'}</p>
      </div>
      <div>
        Componente atBtLink:
        <BtLink href="https://www.facebook.com/" value="link branco" estilo="branco"/>
        <p className="p">Codigo:{'<BtLink href="https://www.facebook.com/" value="Carteira de identidade e CPF" estilo="branco"/>'}</p>
      </div>
      <div>
        Componente atBtLink:
        <BtLink href="https://www.facebook.com/" value="link"/>
        <p className="p">Codigo:{'<BtLink href="https://www.facebook.com/" value="Acessar"/>'}</p>
      </div>
      
      <style jsx>{`
      .p{ 
        background-color: #ffffff;
        color: #000000
      }
    `}</style>
    </div>
)};

export default atBtLink;
