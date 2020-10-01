import React from 'react'
//import Link from 'next/link'
//import Head from 'next/head'
//import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout/cristalbot.js' // Esta pagina tem um layout diferente.
import MoHead from '../../moleculas/moHead'
import MenuMobile01 from '../../moleculas/moMenuMobile01/index.js'
import HeaderCristalBot from '../../moleculas/moHeaderSideDoValente/cristalbot.js';
import * as Util from '../../../controller/util.js';
import BtLink from '../../atoms/atBtLink'
import Img from '../../atoms/atImg'
import DivNaveg from '../../atoms/atDivNaveg'
import Div from '../../atoms/atDiv/index.js'

const game = function (props) {

  console.log('╔══════════════════════╗');
  console.log('║  GANE - Cristal Bot  ║');
  console.log('╚══════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Cristal Bot Imagens" 
        canonical="/game/cristalbotimgb1/" 
        icohref="/static/assetsv5/img/faviconcristal.ico"/>
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="Games">

      <HeaderCristalBot regiao={regiao} modo={modo}/>
          
          <div>
              <p>
              Veja aqui imagens dos planetas em que o robo explorador irá procuar as pedras preciosas.
              </p>
          </div>
          

          Tela inicial.
          <div>
              <Img src="/static/assetsv5/img/cristalbot/cristalbot201.jpg" width="784px" height="279px" alt="Cristal Bot planeta Plutao" title="Cristal Bot planeta Plutao" class="Cristal Bot planeta Plutao" modo={modo} />
          </div>
          Uma imagem do game Cristal Bot Lua.
          <div>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot202.jpg" width="784px" height="279px" alt="Cristal Bot planeta Lua" title="Cristal Bot planeta Lua" class="Cristal Bot planeta Lua" modo={modo} />
          </div>
          Uma imagem do game Cristal Bot planeta Marte.
          <div>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot203.jpg" width="784px" height="279px" alt="Cristal Bot planeta Venus" title="Cristal Bot planeta Venus" class="Cristal Bot planeta Venus" modo={modo} />
          </div>
            Uma imagem do game Cristal Bot planeta Mercurio.
          <div>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot204.jpg" width="784px" height="279px" alt="Cristal Bot planeta Mercurio" title="Cristal Bot planeta Mercurio" class="Cristal Bot planeta Mercurio" modo={modo} />
          </div>
            Uma imagem do game Cristal Bot planeta Plutão.
          <div>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot205.jpg" width="784px" height="279px" alt="Cristal Bot planeta Marte" title="Cristal Bot planeta Marte" class="Cristal Bot planeta Marte" modo={modo} />
          </div>  
          <div>
            Uma imagem do game Cristal Bot planeta Venus.
            <Img src="/static/assetsv5/img/cristalbot/cristalbot206.jpg" width="784px" height="279px" alt="Cristal Bot planeta Marte" title="Cristal Bot planeta Marte" class="Cristal Bot planeta Marte" modo={modo} />
          </div>  
          <div>
            Cabine de controle da Nave.
            <Img src="/static/assetsv5/img/cristalbot/cristalbot207.jpg" width="784px" height="279px" alt="Cristal Bot planeta Marte" title="Cristal Bot planeta Marte" class="Cristal Bot planeta Marte" modo={modo} />
          </div>  
            <div>
              Imagem da modelagem 3D no Blender
              <Img src="/static/assetsv5/img/cristalbot/cristalbot008.png" width="300px" height="300px" alt="Cristal Bot modelagem Blender" title="Cristal Bot modelagem Blender" class="Cristal Bot modelagem Blender" modo={modo} />
            </div>
            <div>
              Uma foto do primeiro rascunho do jogo desenhado a mão.
              <Img src="/static/assetsv5/img/cristalbot/cristalbot007.jpeg" width="600px" height="350px" alt="Cristal Bot rascunho game" title="Cristal Bot rascunho game" class="Cristal Bot rascunho game" modo={modo} />
              
            </div>

          
          <div>
            <p>
              Veja a página do Cristal Bot Beta 2.
              <BtLink href={"/game/cristalbot/"} value="Cristal Bot Beta 2" estilo="neon"/> 
            </p> 
          </div>
           
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        .p{
          color : #000000;
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

export default game
