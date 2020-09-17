import React from 'react'
//import Link from 'next/link'
//import Head from 'next/head'
//import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout/cristalbot.js' // Esta pagina tem um layout diferente.
import MoHead from '../../moleculas/moHead'
import MenuMobile01 from '../../moleculas/moMenuMobile01/index.js'
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
      <MoHead modo={modo} title="Cristal Bot" canonical="/cristalbot" icohref="/static/assetsv5/img/faviconcristal.ico"/>
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="Games">
        <Div display="justificado">
          <h1><Img src="/static/assetsv5/img/cristalbot/logocistalbotmini.png" width="200px" height="100px" alt="Game Cristal Bot" title="Game Cristal Bot" class="CristalBotLogo" modo={modo} /></h1>
          <div className="heaermob">
            <MenuMobile01 modo={modo}/>
          </div>
        </Div>
          
          <Div display="responcivo">
            <div>
              <br/><br/><br/>
              
              <p>Cristal Bot é um game independente brasileiro, está na sua versão beta, e é feito por uma única pessoa.<br/>
              Foi desenvolvido na plataforma Unity com linguage de programação C# e modelagem 3D no Blender.<br/>
              Desenvolvi tanto o código quanto a arte do jogo.</p>
              <p>
              Baixe a primeira versão de teste do Cristal Bot aqui. 
              <BtLink href={"https://mega.nz/file/wHgSRCiB#ukPyQc493NQ3i8r6dXFN5KkkUS5xA44FsoowEY08M1I"} value="Baixar para Windows" estilo="luz"/>
              <BtLink href={"https://mega.nz/file/wewRnTxA#GYSz1EGiCwHTeufaeyCofGNyYRiwAPeghCd_jM0FTgc"} value="Baixar para Linux" estilo="luz"/>
              <br/></p>
            </div>
            

          </Div>


          <DivNaveg>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vqyOsArIorY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </DivNaveg>
          Uma imagem do game Cristal Bot planeta Marte.
          <DivNaveg>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot002.png" width="786px" height="453px" alt="Cristal Bot planeta Marte" title="Cristal Bot planeta Marte" class="Cristal Bot planeta Marte" modo={modo} />
          </DivNaveg>  
          Uma imagem do game Cristal Bot planeta Plutao.
          <DivNaveg>
              <Img src="/static/assetsv5/img/cristalbot/cristalbot003.png" width="786px" height="453px" alt="Cristal Bot planeta Plutao" title="Cristal Bot planeta Plutao" class="Cristal Bot planeta Plutao" modo={modo} />
          </DivNaveg>
          Uma imagem do game Cristal Bot planeta Lua.
          <DivNaveg>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot004.png" width="786px" height="453px" alt="Cristal Bot planeta Lua" title="Cristal Bot planeta Lua" class="Cristal Bot planeta Lua" modo={modo} />
          </DivNaveg>
          Uma imagem do game Cristal Bot planeta Venus.
          <DivNaveg>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot005.png" width="786px" height="453px" alt="Cristal Bot planeta Venus" title="Cristal Bot planeta Venus" class="Cristal Bot planeta Venus" modo={modo} />
          </DivNaveg>
          Uma imagem do game Cristal Bot planeta Mercurio.
          <DivNaveg>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot006.png" width="786px" height="453px" alt="Cristal Bot planeta Mercurio" title="Cristal Bot planeta Mercurio" class="Cristal Bot planeta Mercurio" modo={modo} />
          </DivNaveg>

          <Div display="responcivo">
            <div>
              <Img src="/static/assetsv5/img/cristalbot/cristalbot008.png" width="300px" height="300px" alt="Cristal Bot modelagem Blender" title="Cristal Bot modelagem Blender" class="Cristal Bot modelagem Blender" modo={modo} />
              Imagem da modelagem 3D no Blender:<BtLink href={"https://br.pinterest.com/pin/395894623497558014/"} value="pinterest" estilo="luz"/>
            </div>
            <div>
              <Img src="/static/assetsv5/img/cristalbot/cristalbot007.jpeg" width="600px" height="350px" alt="Cristal Bot rascunho game" title="Cristal Bot rascunho game" class="Cristal Bot rascunho game" modo={modo} />
              Uma foto do primeiro rascunho do jogo desenhado a mão.
            </div>
          </Div>
          
          <div>
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
                  Veja a página do Cristal Bot no facebook.
                  <BtLink href={"https://web.facebook.com/gamecristalbot"} value="Página no Facebook" estilo="luz"/> 
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
