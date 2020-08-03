import React from 'react'
//import Link from 'next/link'
import Img from '../../atoms/atImg'
import BtLink from '../../atoms/atBtLink'
import Layout from '../../moleculas/layout'
import MoHead from '../../moleculas/moHead'
import Janela from '../../moleculas/moJanela/index.js'
import * as Util from '../../../controller/util.js';

const templateHome = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Eu                                ║');
  console.log('╚════════════════════════════════════════╝');
  var regiao = Util.validaProps(props.regiao, "MG");
  var modo = Util.validaProps(props.modo, "html");
  return (
    <div>
      <MoHead modo={modo} title="Vinícius Valente Coutinh" canonical="/eu/"/>
      <Layout regiao={regiao} modo={modo} titulo="Eu" categoria="Eu">
          <br/>
          <Img src="https://media-exp1.licdn.com/dms/image/C4E03AQGA95B0oD-O9w/profile-displayphoto-shrink_200_200/0?e=1591833600&amp;v=beta&amp;t=ddlDl6gLziWUfvEi6KL2kYa1s4EIdMeGBfbsMusSw0c" width="128px" height="128px" alt="foto Vinicius Valente Coutinho" title="foto Vinicius Valente Coutinho" class="ClassImgNext" modo={modo} />
          <p>Meu nome é Vinícius Valente Coutinho, Analista de Sistemas fullstack,<br/> 
          com experiencia em configuração de CDN, Apache, AMP, SEO, NodeJS, PHP, Hadoop.<br/> 
          Atualmente liderando equipe de desenvolvimento de projeto de BigData.<br/> 
          Atuei como lider de equipe em projeto AMP com foco em melhoria do SEO.</p>
          <BtLink href={"/eu/curriculo/?regiao="+regiao} value="Veja meu curriculo aqui." estilo="luz"/>
          <br/>
        </Layout>
      <style jsx>{`
        .HomeListadeRotas{
         width:25%;
        }
        .HomeIndex{
          width:75%;
        }
      `}</style>
    </div>
  )
}

export default templateHome
