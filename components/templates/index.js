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
            Renderização server-side de <a href="/tutorial/html/">HTML</a> e AMP (isomórfica ReactJS e NextJS)<br />
            0 - Site pessoal<br />
            1 - Objetivo de compartilhar conhecimento técnico.<br />
            1 - Páginas em html (<a href="/tutorial/javascript/nextjs/">Next</a> + <a href="/tutorial/javascript/reactjs/">React</a>)<br />
            2 - Páginas AMP (<a href="/tutorial/javascript/nextjs/">Next</a> + <a href="/tutorial/javascript/reactjs/">React</a> + AMP)<br />
            4 - Gerador de captcha interno (Não funciona com balance).<br />
            Repositório : <a href="https://github.com/ViniciusVC/">https://github.com/ViniciusVC/site_do_valente</a>
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

