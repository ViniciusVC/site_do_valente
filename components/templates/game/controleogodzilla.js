import React from 'react'
import Layout from '../../moleculas/layout'
import MoHead from '../../moleculas/moHead'
import Controleogodzilla from '../../organisms/orgControleogodzilla'
import * as Util from '../../../controller/util.js';
import BtLink from '../../atoms/atBtLink'

const controleogodzilla = function (props) {

  console.log('╔══════════════════════════════════════╗');
  console.log('║  Taplate - GAME - controleogodzilla  ║');
  console.log('╚══════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  function retornaogame(modo,regiao){
    if (modo=="html"){ 
      return (<Controleogodzilla/>) 
    }else{ 
      return (
        <p>O jogo não pode ser visto no modo AMP.<br/>
          <BtLink href={"/game/controleogodzilla/?regiao="+regiao} value="Clique aqui para sair do modo AMP." estilo="cinza"/><br/>
        </p>
        )
    }
  }

  return (
    <div>
      <MoHead modo={modo} title="Controle o Godzilla" canonical="/game/controleogodzilla/"/>
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="gGameame">
          <h1>GAME Controle o Godzilla</h1>
          <p>Brincadeira que fiz pro meu filho em um fim de dia.</p>
          {retornaogame(modo,regiao)}
      </Layout>
      <style jsx>{`
        .Godzilla {
          position: absolute;
        }
      `}</style>

    </div>
  )
}

// <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">

//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>

export default controleogodzilla

