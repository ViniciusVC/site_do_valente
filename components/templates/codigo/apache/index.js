import React from 'react'
//import Head from 'next/head'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import BtLink from '../../../atoms/atBtLink'
import Layout from '../../../moleculas/layout'
import MoHead from '../../..//moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const apache = function (props) {

  console.log('╔══════════════════════════════╗');
  console.log('║      Tutoriais - Apache       ║');
  console.log('╚══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead
        modo={modo} title="Apache" 
        description="O que é o Apache" 
        canonical="/tutorial/apache/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Apache">
        <Div display="responsivo">
          <div className="coluna404">
            <h1>Apache</h1>
            <p>O Servidor HTTP Apache ou Servidor Apache ou HTTP Daemon Apache ou somente Apache, é o servidor web livre criado em 1995 por Rob McCool.</p>
          </div>
          <div>
            <Img 
                src="/static/assetsv5/img/codigo/logoapache.png"
                width="300px"
                height="127px"
                alt="Logo Apache"
                title="Logo Apache"
                class="ClassLogoApache"
                modo={modo}>
            </Img>
          </div>
        </Div>
        <BtLink href={"/tutorial/apache/alias?regiao="+regiao} value="Alias" estilo="neon"/><br/>
        <BtLink href={"/tutorial/apache/instalubuntu?regiao="+regiao} value="Instalar Apache no Ubuntu" estilo="neon"/><br/>
        <BtLink href={"/tutorial/apache/redirect?regiao="+regiao} value="Redirect" estilo="neon"/><br/>
      </Layout >
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

export default apache
