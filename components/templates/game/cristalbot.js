import React from 'react';
import Layout from '../../moleculas/layout/cristalbot.js'; // Esta pagina tem um layout diferente.
import MoHead from '../../moleculas/moHead';
import HeaderCristalBot from '../../moleculas/moHeaderSideDoValente/cristalbot.js';
import Janela from '../../moleculas/moJanela/index.js';
import * as Util from '../../../controller/util.js';
import BtLink from '../../atoms/atBtLink';
import Img from '../../atoms/atImg';
import Div from '../../atoms/atDiv/index.js';


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
        title="Cristal Bot" 
        description="Cristal Bot é um game independente brasileiro." 
        canonical="/game/cristalbot/" 
        icohref="/static/assetsv5/img/faviconcristal.ico"
        keywords="Jogo, game, cristalbot, cristal, bot, unity, 3d, blender, independente"
        />
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="Games">
      <Div display="responcivo">
        <div>
          <HeaderCristalBot regiao={regiao} modo={modo}/>
            
          <div className="conteudo">
              <br/><br/><br/>
              <p>
                Cristal Bot é um game independente brasileiro, está na sua versão beta, e é feito por uma única pessoa.<br/>
                Foi desenvolvido na plataforma Unity com linguage de programação C# e modelagem 3D no Blender.<br/>
                Desenvolvi tanto o código quanto a arte do jogo.
              </p>
              <p>
                No futuro, a busca extração de pedras presiosas não será na Terra. Será feita por robos em outros planetas. 
              </p>
              <p>
                Baixe a primeira versão de teste do Cristal Bot beta 2 aqui.
                <BtLink href={"https://mega.nz/file/kbwgQIqa#pNLJGvpBl85ywgcVuOKltsu1lA32yD4NKS1IbvQRn30"} value="Baixar para Linux" estilo="neon"/>
                Ainda não disponivel para Windows ou celulares.
                {/*<BtLink href={"https://mega.nz/file/wewRnTxA#GYSz1EGiCwHTeufaeyCofGNyYRiwAPeghCd_jM0FTgc"} value="Baixar para Windows" estilo="neon"/> */}
                <br/>
              </p>
          </div>
        </div>
        <div>
          <Div display="responcivo">
            <Janela estilo="terminal">
              Um video do jogo, para você conhecer a jogabilidade.
              <a href="/game/cristalbotvideob2/">
                <Img src="/static/assetsv5/img/cristalbot/videocristalbotb2.jpg" width="200px" height="150px" alt="Cristal Bot planeta Marte" title="Video Cristal Bot 2" class="Video Cristal Bot Beta 2" modo={modo} />
              </a>
            </Janela>
            <div className="conteudo">
            </div>
            <Janela estilo="terminal">
              Veja aqui imagens dos planetas em que o robo explorador irá procuar as pedras preciosas.
              <a href="/game/cristalbotimgb2/">
                <Img src="/static/assetsv5/img/cristalbot/cristalbotimgsb2.jpg" width="200px" height="114px" alt="Cristal Bot planeta Marte" title="Cristal Bot Imagens 2" class="Cristal Bot imagens beta 2" modo={modo} />
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
                   Veja a página do Cristal Bot Beta 0.1.
                  <BtLink href={"/game/cristalbotb1/"} value="Versão anterior - Cristal Bot Beta 0.1" estilo="neon"/> 
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

      `}</style>

    </div>
  )
}

export default game
