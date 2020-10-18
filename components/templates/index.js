import React from 'react'
import Layout from '../moleculas/layout'
import MoHead from '../moleculas/moHead'
import BtLink from '../atoms/atBtLink'
import * as Util from '../../controller/util.js';

const templateHome = function (props) {
  console.log('╔══════════════════════════════════════╗');
  console.log('║      index Home                      ║');
  console.log('╚══════════════════════════════════════╝');
  var regiao = props.regiao;
  var modo = props.modo;
  const JsonRegiao = Util.regiao(regiao);
  //{JsonRegiao.timea}
  console.log('regiao='+regiao);
  console.log('modo='+modo);
  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Home SITE DO VALENTE" 
        description="Bem vindo ao VVC Estudio" c
        anonical="/"
        keywords="VVC, Estudio, Studio, Valente, AMP, isomórfica, reactJS, nextJS, coutinho, site"
      />
      <Layout regiao={regiao} modo={modo} titulo="Home" categoria="Home">
          <h1>Bem vindo ao VVC Estudio</h1>
          <p>
            Melhor que jogo do {JsonRegiao.timea} com {JsonRegiao.timeb}.<br />
            Renderização server-side de <BtLink href={"/tutorial/html/?regiao="+regiao} value="HTML" estilo="neonLink"/> e <BtLink href={"/tutorial/seo/amp/?regiao="+regiao} value="AMP" estilo="neonLink"/> (isomórfica <BtLink href="/tutorial/javascript/reactjs/" value="ReactJS" estilo="neonLink"/> e <BtLink href={"/tutorial/javascript/nextjs/?regiao="+regiao} value="NextJS" estilo="neonLink"/>)<br />
            0 - Site pessoal<br />
            1 - Objetivo de compartilhar conhecimento técnico.<br />
            1 - Páginas em <BtLink href={"/tutorial/html/?regiao="+regiao} value="html" estilo="neonLink"/> (<BtLink href={"/tutorial/javascript/nextjs/?regiao="+regiao} value="Next" estilo="neonLink"/> + <BtLink href="/tutorial/javascript/reactjs/" value="React" estilo="neonLink"/>)<br />
            2 - Páginas AMP (<BtLink href={"/tutorial/javascript/nextjs/?regiao="+regiao} value="Next" estilo="neonLink"/> + <BtLink href="/tutorial/javascript/reactjs/" value="React" estilo="neonLink"/> + <BtLink href={"/tutorial/seo/amp/?regiao="+regiao} value="AMP" estilo="neonLink"/>)<br />
            4 - Gerador de captcha interno (Não funciona com balance).<br />
            Repositório : <BtLink href={"https://github.com/ViniciusVC/?regiao="+regiao} value="https://github.com/ViniciusVC/site_do_valente" estilo="neonLink"/>
          </p>
          <BtLink href={"/eu/?regiao="+regiao} value="Quem sou eu." estilo="neon"/>
          <br />
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

export default templateHome

//estilo="cinza"

