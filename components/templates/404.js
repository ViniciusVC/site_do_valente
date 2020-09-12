import React from 'react'
//import Link from 'next/link'
import Img from '../atoms/atImg/index.js'
import Icon from '../atoms/atIcon/index.js'
import Div from '../atoms/atDiv/index.js'
import Layout from '../moleculas/layout'
import MoHead from '../moleculas/moHead'
import BtLink from '../atoms/atBtLink'
import * as Util from '../../controller/util.js';

//import Head from 'next/head'
//import FavIcon from '../atoms/atFavIcon'

const templateHome = function (props) {
  console.log('╔════════════════════════════╗');
  console.log('║    template erro 404       ║');
  console.log('╚════════════════════════════╝');
  var regiao = Util.validaProps(props.regiao,"RJ");
  var modo = Util.validaProps(props.modo,"html");
  return (
    <div>
      <MoHead modo={modo} title="Página não encontrada" description="Página não encontrada" canonical="/404/"/>
      <Layout regiao={regiao} modo={modo} titulo="Erro" categoria="Erro">
        <Div display="responsivo">
          <div className="coluna404">
            <h1 className='title'>Ih, essa página não foi encontrada</h1>
            <p>
              Talvez o endereço digitado esteja incorreto ou você tenha
              clicado em uma página que não existe.
            </p>
            <Div display="justificado">
              <div>
                <Icon type="inputAlert" color="#ffffff" width="30px"/>
              </div>
              <div>
                <p>
                Você pode ver as opções do menu ao lado ou continuar
                a navegação pela página inicial.
                </p>
              </div>
            </Div>
            <BtLink href={"/?regiao="+regiao} value="Página inicial." estilo="luz"/>
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/hero-large-404.png"
                width="323px"
                height="436px"
                alt="Pagina não encontrada"
                title="Pagina não encontrada"
                class="ClassImg404"
                modo={modo}>
              </Img>
          </div>
      </Div>
    </Layout>
    <style jsx>{`
      .title {
        margin: 0;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .coluna404{
        width: 50%;
      }
      `}</style>
    </div>
  )
}

export default templateHome


//<Head>
//<title>Home SITE DO VALENTE</title>
//<FavIcon />
//<meta name="description" content="Bem vindo ao SITE DO VALENTE" />
//<link rel="canonical" href="/" />
//<link rel="canonical" href="https://www.oi.com.br/"/>
//<link rel="amphtml" href="https://www.oi.com.br/amp/"/>
//<script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
//<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
//</Head>