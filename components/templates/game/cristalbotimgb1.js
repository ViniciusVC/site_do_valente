import React from 'react'
import Layout from '../../moleculas/layout/cristalbot.js' // Esta pagina tem um layout diferente.
import MoHead from '../../moleculas/moHead'
import HeaderCristalBot from '../../moleculas/moHeaderSideDoValente/cristalbot.js';
import * as Util from '../../../controller/util.js';
import BtLink from '../../atoms/atBtLink'
import Img from '../../atoms/atImg'
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
        title="Cristal Bot Beta 0.1" 
        description="Game independente Cristal Bot Beta 0.1" 
        canonical="/game/cristalbotimgb1/" 
        icohref="/static/assetsv5/img/faviconcristal.ico"
        keywords="Jogo, game, cristalbot, cristal, bot, unity, 3d, blender, independente"
      />
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="Games">
      <HeaderCristalBot regiao={regiao} modo={modo}/>
          <Div display="responcivo">
            <div>
              <br/><br/><br/>
              
              <p>Cristal Bot é um game independente brasileiro, está na sua versão beta, e é feito por uma única pessoa.<br/>
              Foi desenvolvido na plataforma Unity com linguage de programação C# e modelagem 3D no Blender.<br/>
              Desenvolvi tanto o código quanto a arte do jogo.</p>
              <p>
              Veja aqui imagens dos planetas em que o robo explorador irá procuar as pedras preciosas.
              </p>
            </div>
          </Div>

          Uma imagem do game Cristal Bot planeta Plutao.
          <div>
              <Img src="/static/assetsv5/img/cristalbot/cristalbot003.jpg" width="786px" height="453px" alt="Cristal Bot planeta Plutao" title="Cristal Bot planeta Plutao" class="Cristal Bot planeta Plutao" modo={modo} />
          </div>
          
          Uma imagem do game Cristal Bot planeta Lua.
          <div>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot004.jpg" width="786px" height="453px" alt="Cristal Bot planeta Lua" title="Cristal Bot planeta Lua" class="Cristal Bot planeta Lua" modo={modo} />
          </div>
          
          Uma imagem do game Cristal Bot planeta Venus.
          <div>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot005.jpg" width="786px" height="453px" alt="Cristal Bot planeta Venus" title="Cristal Bot planeta Venus" class="Cristal Bot planeta Venus" modo={modo} />
          </div>
          
          Uma imagem do game Cristal Bot planeta Mercurio.
          <div>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot006.jpg" width="786px" height="453px" alt="Cristal Bot planeta Mercurio" title="Cristal Bot planeta Mercurio" class="Cristal Bot planeta Mercurio" modo={modo} />
          </div>
          
          Uma imagem do game Cristal Bot planeta Marte.
          <div>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot002.jpg" width="786px" height="453px" alt="Cristal Bot planeta Marte" title="Cristal Bot planeta Marte" class="Cristal Bot planeta Marte" modo={modo} />
          </div>  


          <div>
            Imagem da modelagem 3D no Blender.
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
