import React from 'react'
//import Link from 'next/link'
// import Head from 'next/head'
// import FavIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout'
import MoHead from '../../moleculas/moHead'
import Ecossistema from '../../organisms/orgEcossistema'
import * as Util from '../../../controller/util.js';
import BtLink from '../../atoms/atBtLink'

function retornaogame(modo,regiao){
  if (modo=="html"){ 
    return (<Ecossistema/>) 
  }else{ 
    return (
      <p>O jogo não pode ser visto no modo AMP.<br/>
        <BtLink href={"/game/tanque?regiao="+regiao} value="Clique aqui para sair do modo AMP." estilo="cinza"/><br/>
      </p>
      )
  }
}


const ecossistema = function (props) {

  console.log('╔══════════════════════════════════════╗');
  console.log('║  Template - GAME - orgEcossistema    ║');
  console.log('╚══════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");   
  

  return (
    <div>
      <MoHead modo={modo} title="Teste Game Ecossistema" description="Desenvolvimento de Game com JS - Ecossistema." canonical="/game/ecossistema/"/>
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="Games">
          <h1>Simulador de Ecossistema</h1>
          {retornaogame(modo,regiao)}
          <p>Carnivoro come herbivoro.<br/> 
            herbivoro come planta, foge de carnivoro e se reproduz.</p>
          <p>Estudo de desenvolvimento de game apenas com JS e canvas.</p>
          <br/>
      </Layout>
    </div>
  )
}

// <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">

//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>

export default ecossistema