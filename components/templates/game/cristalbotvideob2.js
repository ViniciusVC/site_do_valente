import React from 'react'
import Layout from '../../moleculas/layout/cristalbot.js' // Esta pagina tem um layout diferente.
import MoHead from '../../moleculas/moHead'
import Janela from '../../moleculas/moJanela/index.js'
import HeaderCristalBot from '../../moleculas/moHeaderSideDoValente/cristalbot.js';
import * as Util from '../../../controller/util.js';

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
        title="Cristal Bot Video"
        description="Cristal Bot Video"  
        canonical="/game/cristalbotvideob2/" 
        icohref="/static/assetsv5/img/faviconcristal.ico"
        keywords="Jogo, game, cristalbot, cristal, bot, unity, 3d, blender, independente"
      />
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="Games">
        <HeaderCristalBot regiao={regiao} modo={modo}/>
        <Janela estilo="terminal">
              Cristal Bot é um game independente brasileiro, está na sua versão beta, e é feito por uma única pessoa.<br/>
              Foi desenvolvido na plataforma Unity com linguage de programação C# e modelagem 3D no Blender.<br/>
              Desenvolvi tanto o código quanto a arte do jogo.
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BsNJSy8Qkq4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Janela>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        .p{
          color : #000000;
        }
        @media(min-width: 1169px) {
          .headermob{
            display : None;
          }
        }
      `}</style>

    </div>
  )
}

export default game
