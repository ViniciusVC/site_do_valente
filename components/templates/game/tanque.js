import React from 'react'
//import Link from 'next/link'
// import Head from 'next/head'
// import FavIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout/cristalbot.js' // Esta pagina tem um layout diferente.
import MoHead from '../../moleculas/moHead'
import Tanque from '../../organisms/orgTanque'
import * as Util from '../../../controller/util.js';
import BtLink from '../../atoms/atBtLink'

function retornaogame(modo,regiao){
  if (modo=="html"){ 
    return (<Tanque/>) 
  }else{ 
    return (
      <p>O jogo não pode ser visto no modo AMP.<br/>
        <BtLink href={"/game/tanque?regiao="+regiao} value="Clique aqui para sair do modo AMP." estilo="neon"/><br/>
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
      <MoHead modo={modo} title="Game Tanque Teste PhaserJS" description="Desenvolvimento de Game com PhaserJS - Tanque de Guerra." canonical="/game/tanque/"/>
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="gGameame">
          <h1>Game Tanque (Teste PhaserJS)</h1>
          <p>Estudo de desenvolvimento de game com a biblioteca PhaserJS.</p>
          {retornaogame(modo,regiao)}
          <br/>
      </Layout>
    </div>
  )
}

// <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">

//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>

export default tanque