import React from 'react'
import Img from '../../atoms/atImg/index.js';
//import Div from '../../atoms/atDiv'
//import MoRegiao from '../moRegiao/index.js'
import MenuMobile01 from '../moMenuMobile01/index.js'

//import * as Util from '../../../controller/util.js';
//console.log('moHeaderSideDoValente ');

const moHeaderCristalBot = function (props) {
  //const titulo = props.titulo;
  const regiao = props.regiao;
  const modo = props.modo;
  //const btestilo="neon";
  //const btestiloitem="neonItem";
  //const JsonRegiao = Util.regiao(regiao);
  var StringModo = "";
  if(modo=="AMP" || modo=="amp"){
    StringModo = "/amp";
  }
  console.log('* Header do Valente | modo='+modo+ ' | regiao='+regiao);

  return (
        <div>
            <div className="heaermob">
              <MenuMobile01 
                modo={modo} 
                regiao={regiao}
                titulo="Games"
                categoria="Games"
                btestilo="neon" 
                btestiloitem="neonItem"
                janelaestilo="terminal"
              />
            </div>
            <a href="/game/cristalbot/">
              <h1>
                <Img 
                  src="/static/assetsv5/img/cristalbot/logocistalbotmini.png" 
                  width="200px" 
                  height="100px" 
                  alt="Game Cristal Bot" title="Game Cristal Bot" 
                  class="CristalBotLogo" 
                  modo={modo} />
              </h1>
            </a>        
      <style jsx>{`
 

            .heaermob{
              background-color: #283e4a;
              width:100%;
              margin-top : -10px;
            }
            @media(min-width: 1169px) {
              .heaermob{
                display : None;
              }
            }
    `}</style>
    </div>
  )
}

export default moHeaderCristalBot
