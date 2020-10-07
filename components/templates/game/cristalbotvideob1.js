import React from 'react';
import Layout from '../../moleculas/layout/cristalbot.js'; // Esta pagina tem um layout diferente.
import MoHead from '../../moleculas/moHead';
import HeaderCristalBot from '../../moleculas/moHeaderSideDoValente/cristalbot.js';
import * as Util from '../../../controller/util.js';
import BtLink from '../../atoms/atBtLink';
import DivNaveg from '../../atoms/atDivNaveg';
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
        title="Cristal Bot Video Beta 0.1" 
        canonical="/game/cristalbotvideob1/" 
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
            </div>
         
          </Div>

          <DivNaveg>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vqyOsArIorY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </DivNaveg>

          
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
                  <BtLink href={"https://web.facebook.com/gamecristalbot"} value="Página no Facebook" estilo="neon"/> 
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
