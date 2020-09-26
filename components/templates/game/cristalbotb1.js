import React from 'react'
//import Link from 'next/link'
//import Head from 'next/head'
//import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout/cristalbot.js' // Esta pagina tem um layout diferente.
import MoHead from '../../moleculas/moHead'
import MenuMobile01 from '../../moleculas/moMenuMobile01/index.js'
import Janela from '../../moleculas/moJanela/index.js'
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
        title="Cristal Bot beta0.1" 
        canonical="/game/cristalbot1/" 
        icohref="/static/assetsv5/img/faviconcristal.ico"/>
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="Games">
        
      <Div display="responcivo">
        <div>
          <Div display="justificado">
            <a href="/game/cristalbot/">
              <h1><Img src="/static/assetsv5/img/cristalbot/logocistalbotmini.png" width="200px" height="100px" alt="Game Cristal Bot" title="Game Cristal Bot" class="CristalBotLogo" modo={modo} /></h1>
            </a>
            <div className="heaermob">
              <MenuMobile01 modo={modo}/>
            </div>
          </Div>
          <div className="conteudo">
              <br/><br/>
              <p>
                Esta pagina conteim informações sobre o jogo Cristal Bot Beta 0.1.
              </p>
              <p>
                Cristal Bot é um game independente brasileiro, está na sua versão beta, e é feito por uma única pessoa.<br/>
                Foi desenvolvido na plataforma Unity com linguage de programação C# e modelagem 3D no Blender.<br/>
                Desenvolvi tanto o código quanto a arte do jogo.
              </p>
              <p>
                No futuro, a busca extração de pedras presiosas não será na Terra. Será feita por robos em outros planetas. 
              </p>
              <p>
              Baixe a primeira versão de teste do Cristal Bot beta 0.1 aqui. 
              <BtLink href={"https://mega.nz/file/wHgSRCiB#ukPyQc493NQ3i8r6dXFN5KkkUS5xA44FsoowEY08M1I"} value="Baixar para Windows" estilo="neon"/>
              <BtLink href={"https://mega.nz/file/wewRnTxA#GYSz1EGiCwHTeufaeyCofGNyYRiwAPeghCd_jM0FTgc"} value="Baixar para Linux" estilo="neon"/>
              <br/></p>
          </div>
        </div>
        <div>
          <Div display="responcivo">
            <Janela estilo="terminal">
              Um video do jogo, para você conhecer a jogabilidade.
              <a href="/game/cristalbotvideob1/">
                <Img src="/static/assetsv5/img/cristalbot/videocristalbotb01.jpg" width="200px" height="150px" alt="Video Cristal Bot 0.1" title="Video Cristal Bot Beta 0.1" class="VideoCristalBotB1" modo={modo} />
              </a>
            </Janela>
            <div className="conteudo">
            </div>
            <Janela estilo="terminal">
              Veja aqui imagens dos planetas em que o robo explorador irá procuar as pedras preciosas.
              <a href="/game/cristalbotimgb1/">
                <Img src="/static/assetsv5/img/cristalbot/cristalbotimgsb1.jpg" width="200px" height="114px" alt="Cristal Bot Imagens 0.1" title="Cristal Bot Imagens Beta 0.1" class="CristalBotImgB1" modo={modo} />
              </a>
            </Janela>
          </Div>
          <div className="conteudo">
                <p>
                  Veja a página do Cristal Bot no facebook.
                  <BtLink href={"https://web.facebook.com/gamecristalbot"} value="Cristal Bot no Facebook" estilo="neon"/> 
                </p> 
                <p>
                  Sobre o desenvolvimento do jogo:<br/>
                  Gerado na Plataforma Unity com linguagem C#;<br/>
                  Edição de codico com Visual Studio Code;<br/>
                  Versionamento de codigo com GitHub(privado);<br/>
                  Edição de texturas no Gimp;<br/>
                  Para a modelagem dos objetos 3D foi usado Blender;<br/>
                  E para o desenho da logo foi utilisado Inkscape, Blender e Gimp.<br/>
                </p>
                <p>
                  Veja a página do Cristal Bot Beta 2.
                  <BtLink href={"/game/cristalbot/"} value="Cristal Bot Beta 2" estilo="neon"/> 
                </p> 
            </div>
        </div>  
      </Div>

           
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        .p{
          color : #000000;
        }
        .conteudo{
          padding:10px;
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
