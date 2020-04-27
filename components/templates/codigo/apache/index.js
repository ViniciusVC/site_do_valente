import React from 'react'
//import Head from 'next/head'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
//import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import MoHead from '../../..//moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const apache = function (props) {

  console.log('╔══════════════════════════════╗');
  console.log('║        codigo - Apache       ║');
  console.log('╚══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="Apache" description="Código Apache" canonical="/codigo/apache/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="Apache">
        <Div display="responsivo">
          <div className="coluna404">
            <h1>Apache</h1>
            <p>O Servidor HTTP Apache ou Servidor Apache ou HTTP Daemon Apache ou somente Apache, é o servidor web livre criado em 1995 por Rob McCool.</p>
          </div>
          <div>
            <Img 
                src="/static/assetsv5/img/codigo/logoapache.png"
                width="323px"
                height="136px"
                alt="Logo Apache"
                title="Logo Apache"
                class="ClassLogoApache"
                modo={modo}>
            </Img>
          </div>
        </Div>
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
