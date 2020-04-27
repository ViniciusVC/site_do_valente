import React from 'react'
//import Link from 'next/link'
//import Head from 'next/head'
//import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout'
import MoHead from '../../moleculas/moHead'
import * as Util from '../../../controller/util.js';
import BtLink from '../../atoms/atBtLink'

const game = function (props) {

  console.log('╔══════════════════════╗');
  console.log('║        GANES         ║');
  console.log('╚══════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="Games do Valente" canonical="/game/"/>
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="Games">
          <h1>Game</h1>
          <p>Vou disponibilisar alguns games de teste aqui. :)</p>
            <BtLink href={"/game/controleogodzilla?regiao="+regiao} value="GAME - Controle O Godzilla" estilo="cinza"/><br/>
            <BtLink href={"/game/tanque?regiao="+regiao} value="GAME - Tanque" estilo="cinza"/><br/>
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
