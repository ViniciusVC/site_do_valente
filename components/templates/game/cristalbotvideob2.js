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
      <MoHead 
        modo={modo} 
        title="Cristal Bot"
        description="Cristal Bot Video Beta2"  
        canonical="/cristalbotvideob2/" 
        icohref="/static/assetsv5/img/faviconcristal.ico"/>
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="Games">
        
        <Div display="justificado">
        <a href="/game/cristalbot/">
              <h1><Img src="/static/assetsv5/img/cristalbot/logocistalbotmini.png" width="200px" height="100px" alt="Game Cristal Bot" title="Game Cristal Bot" class="CristalBotLogo" modo={modo} /></h1>
            </a>
          <div className="headermob">
            <MenuMobile01 modo={modo}/>
          </div>
        </Div>
          
        <Div display="responcivo">
          <div>
            <br/><br/><br/>
            <p>
              Cristal Bot é um game independente brasileiro, está na sua versão beta, e é feito por uma única pessoa.<br/>
              Foi desenvolvido na plataforma Unity com linguage de programação C# e modelagem 3D no Blender.<br/>
              Desenvolvi tanto o código quanto a arte do jogo.
            </p>
            <p>
              Baixe a primeira versão de teste do Cristal Bot aqui. 
              <BtLink href={"https://mega.nz/file/wHgSRCiB#ukPyQc493NQ3i8r6dXFN5KkkUS5xA44FsoowEY08M1I"} value="Baixar para Windows" estilo="neon"/>
              <BtLink href={"https://mega.nz/file/wewRnTxA#GYSz1EGiCwHTeufaeyCofGNyYRiwAPeghCd_jM0FTgc"} value="Baixar para Linux" estilo="neon"/>
              <br/>
            </p>
          </div>
        </Div>

        <DivNaveg>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vqyOsArIorY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </DivNaveg>
           
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
