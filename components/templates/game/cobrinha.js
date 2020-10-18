import React from 'react'
import Layout from '../../moleculas/layout/games.js' // Esta pagina tem um layout diferente.
import MoHead from '../../moleculas/moHead'
import Cobrinha from '../../organisms/orgCobrinha'
import * as Util from '../../../controller/util.js';
import BtLink from '../../atoms/atBtLink'
import Img from '../../atoms/atImg/index.js'
import Div from '../../atoms/atDiv/index.js'

function retornaogame(modo,regiao){
  if (modo=="html"){ 
    return (<Cobrinha/>) 
  }else{ 
    return (
      <p>O jogo não pode ser visto no modo AMP.<br/>
        <BtLink href={"/game/tanque?regiao="+regiao} value="Clique aqui para sair do modo AMP." estilo="neon"/><br/>
      </p>
      )
  }
}


const TemplateCobrinha = function (props) {

  console.log('╔══════════════════════════════════╗');
  console.log('║  Template - GAME - orgCobrinha   ║');
  console.log('╚══════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");   
  

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Game Cobrinha Classico" 
        description="Desenvolvimento de Game com JS - Cobrinha." 
        canonical="/game/Cobrinha/"
      />
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="Games">
        <Div display="responcivo">
          <div>
            <h1>Jogo da Cobrinha</h1>
            {retornaogame(modo,regiao)}
            <br/>
            <p>
              Verção do clássico Blockade ou "Jogo da Cobrinha".<br/>
              Blockadev foi um videogame de arcade lançado em outubro de 1976 desenvolvido por Gremlin.<br/>
              Foi o primeiro do que seria conhecido como "jogos de cobra".<br/>
            </p>  
          </div>
          <div>
            <Img 
              src="/static/assetsv5/img/game/imgcobra.jpg"
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

// <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">

//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>

export default TemplateCobrinha