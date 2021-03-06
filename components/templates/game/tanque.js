import React from 'react'
import Layout from '../../moleculas/layout/games.js' // Esta pagina tem um layout diferente.
import MoHead from '../../moleculas/moHead'
import Tanque from '../../organisms/orgTanque'
import * as Util from '../../../controller/util.js';
import BtLink from '../../atoms/atBtLink'
import Img from '../../atoms/atImg/index.js'
import Div from '../../atoms/atDiv/index.js'

function retornaogame(modo,regiao){
  if (modo=="html"){ 
    return (<Tanque/>) 
  }else{ 
    return (
      <p>O jogo não pode ser visto no modo AMP.<br/>
        <BtLink href={"/game/tanque/?regiao="+regiao} value="Clique aqui para sair do modo AMP." estilo="neon"/><br/>
      </p>
      )
  }
}


const tanque = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║  Template - GAME - Tanque de Guerra    ║');
  console.log('╚════════════════════════════════════════╝');
  
  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");     

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Game Tanque PhaserJS" 
        description="Teste de Game Tanque de Guerra com PhaserJS."
        canonical="/game/tanque/"
        keywords="VVC, games, tanque, guerra, phaserjs, biblioteca, javascript, canvas, desenvolvimento"
      />
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="gGameame">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>Game Tanque (Teste PhaserJS)</h1>
            <p>Estudo de desenvolvimento de game com a biblioteca PhaserJS.</p>
            {retornaogame(modo,regiao)}
            <br/>  
          </div>
          <div>
            <Img 
              src="/static/assetsv5/img/codigo/logophanzerjs.png"
              width="200px"
              height="200px"
              alt="Logo SEO"
              title="Logo SEO"
              class="ClassLogoSEO"
              modo={modo}>
            </Img>
          </div>
        </Div>
      </Layout>
    </div>
  )
}

export default tanque