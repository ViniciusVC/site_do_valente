import React from 'react'
import Layout from '../../moleculas/layout/games.js' // Esta pagina tem um layout diferente.
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
      <MoHead 
        modo={modo} 
        title="Games do Valente"
        description="Alguns jogos desenvolvidos pelo Valente." 
        canonical="/game/"
        keywords="jogos, game, javascript, canvas, Unity, 3D, cristalbot, godzilla, tanque, cobrinha"
      />
      <Layout regiao={regiao} modo={modo} titulo="Games" categoria="Games">
          <h1>Game</h1>
          <p>Alguns games de teste :)</p>
            <BtLink href={"/game/cristalbot?regiao="+regiao} value="GAME - Cristal Bot" estilo="neon"/>
            <p>Jogo Cristal Bot desenvolvido na Unity com C# modelagem 3D no Blender. <br/>
            Desenvolvi tanto o código quanto a arte do jogo.</p>
            <BtLink href={"/game/controleogodzilla?regiao="+regiao} value="GAME - Controle O Godzilla" estilo="neon"/>
            <p>Brincadeira que fiz pro meu filho em um fim de dia.<br/>
            Um JS simples que interage com o mouse.</p>
            <BtLink href={"/game/tanque?regiao="+regiao} value="GAME - Tanque" estilo="neon"/>
            <p>Estudo de desenvolvimento de game para Web com a biblioteca PhaserJS.<br/> 
            Controle de um tanque em vista superior.</p>
            <BtLink href={"/game/ecossistema?regiao="+regiao} value="Simulador de Ecossistema" estilo="neon"/>
            <p>Estudo de desenvolvimento de game apenas com JS e canvas.<br/> 
            Uma simulação de ecossistema, Não é jogavel.</p>
            <BtLink href={"/game/cobrinha?regiao="+regiao} value="Cobrinha" estilo="neon"/>
            <p>Estudo de desenvolvimento de game apenas com JS e canvas.<br/> 
            Classico jogo da cobrinha.</p>
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
