import React from 'react'
//import Link from 'next/link'
import Img from '../../atoms/atImg'
import BtLink from '../../atoms/atBtLink'
import Div from '../../atoms/atDiv/index.js'
import Layout from '../../moleculas/layout/eu.js'
import MoHead from '../../moleculas/moHead'
//import Janela from '../../moleculas/moJanela/index.js'
import * as Util from '../../../controller/util.js';

const templateHome = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Eu                                ║');
  console.log('╚════════════════════════════════════════╝');
  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Vinícius Valente Coutinho"
        description="Vinícius Valente Coutinho autor deste projeto."  
        canonical="/eu/"
      />
      <Layout regiao={regiao} modo={modo} titulo="Eu" categoria="Eu">
          
          <Div display="responsivo">
            <div className="fotoEu">
              <Img 
                src="/static/assetsv5/img/eu.png" 
                width="128px" 
                height="128px"
                alt="foto Vinicius Valente Coutinho" 
                title="foto Vinicius Valente Coutinho" 
                class="ClassImgNext" 
                modo={modo} />
            </div>
            <div>
              <p>Meu nome é Vinícius Valente Coutinho, Analista de Sistemas fullstack,<br/> 
              com experiência em configuração de CDN, <BtLink href={"/tutorial/apache/?regiao="+regiao} value="Apache" estilo="azulLink"/>, <BtLink href={"/tutorial/seo/amp/?regiao="+regiao} value="AMP" estilo="azulLink"/>, <BtLink href={"/tutorial/seo/?regiao="+regiao} value="SEO" estilo="azulLink"/>, <BtLink href={"/tutorial/javascript/nodejs/?regiao="+regiao} value="NodeJS" estilo="azulLink"/>, <BtLink href={"/tutorial/php/?regiao="+regiao} value="PHP" estilo="azulLink"/>, <BtLink href={"/tutorial/bancodedados/hadoop/?regiao="+regiao} value="Hadoop" estilo="azulLink"/>.<br/> 
              Atualmente liderando equipe de desenvolvimento de projeto de <BtLink href={"/tutorial/bancodedados/hadoop/?regiao="+regiao} value="BigData" estilo="azulLink"/>.<br/> 
              Atuei como líder de equipe em projeto <BtLink href={"/tutorial/seo/amp/?regiao="+regiao} value="AMP" estilo="azulLink"/> com foco em melhoria do <BtLink href={"/tutorial/seo/?regiao="+regiao} value="SEO" estilo="azulLink"/>.</p>
              <BtLink href={"/eu/curriculo/?regiao="+regiao} value="Veja meu currículo aqui." estilo="azul"/>
              <br/>
            </div>
          </Div>
        </Layout>
      <style jsx>{`
        .fotoEu{
          border-radius: 90px;
          display: block;
          border: solid 1px #f0f0f0;
          margin-top:-100px;
          background-color: #ffffff;
          width:130px; 
          height:130px;
        }
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
