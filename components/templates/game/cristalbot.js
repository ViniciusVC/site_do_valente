import React from 'react'
//import Link from 'next/link'
//import Head from 'next/head'
//import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout/cristalbot.js' // Esta pagina tem um layout diferente.
import MoHead from '../../moleculas/moHead'
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
      <MoHead modo={modo} title="Cristal Bot" canonical="/game/cristalbot"/>
      <Layout regiao={regiao} modo={modo} titulo="Games Cristal Bot" categoria="Games">
          <h1>Game Cristal Bot</h1>
          <Div display="responcivo">
            <div>
              <p>Cristal Bot é um game independente brasileiro, está na sua versão beta, e é feito por uma única pessoa.<br/>
              Foi desenvolvido na plataforma Unity com linguage de programação C# e modelagem 3D no Blender.<br/>
              Desenvolvi tanto o código quanto a arte do jogo.</p>
              <BtLink href={"/static/assetsv5/"} value="Baixar para Linux" estilo="luz"/>
            </div>
            <Img src="/static/assetsv5/img/cristalbot/cristalbot001.png" width="100px" height="100px" alt="Cristal Bot" title="Cristal Bot" class="Cristal Bot" modo={modo} />
          </Div>
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
          Uma imagem do game Cristal Bot rascunho game.
          <Img src="/static/assetsv5/img/cristalbot/cristalbot007.jpeg" width="600px" height="350px" alt="Cristal Bot rascunho game" title="Cristal Bot rascunho game" class="Cristal Bot rascunho game" modo={modo} />
          Uma imagem do game Cristal Bot modelagem Blender.
          <Img src="/static/assetsv5/img/cristalbot/cristalbot008.png" width="300px" height="300px" alt="Cristal Bot modelagem Blender" title="Cristal Bot modelagem Blender" class="Cristal Bot modelagem Blender" modo={modo} />
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        .p{
          color : #000000;
        }
      `}</style>

    </div>
  )
}

export default game
