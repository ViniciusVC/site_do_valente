import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import DivCodigo from '../../../atoms/atDivCodigo'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔═════════════════════════════════╗');
  console.log('║ Tutoriais - JavaScript - NodeJS ║');
  console.log('╚═════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="NodeJS" 
        description="O que é NodeJS" 
        canonical="/codigo/javascript/nodejs/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="JavaScript">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>NodeJS</h1>
            <p>O que é NodeJS?</p>
            <p>
              Node.js trata-se de um software open-source, cross-platform, e de um runtime de JavaScript que execute código de JavaScript a nível backend e frontend.<br/>
            </p>
            <DivCodigo titulo="Exemplo de código NodeJS">
              {"const http = require('http');"}<br/>
              {"const hostname = '127.0.0.1';"}<br/>
              {"const port = 3000;"}<br/>
              {"const server = http.createServer((req, res) => {"}<br/>
              {" res.statusCode = 200;"}<br/>
              {" res.setHeader('Content-Type', 'text/plain');"}<br/>
              {" res.end('Ola Mundo! \\ n Bem vindo ao nodejs');"}<br/>
              {"});"}<br/>
              {"server.listen(port, hostname, () => {"}<br/>
              {" console.log(`Server running at http://${hostname}:${port}/`);"}<br/>
              {"});"}<br/>
            </DivCodigo>
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logonodejs.png"
                width="200px"
                height="200px"
                alt="Logo JavaScript"
                title="Logo JavaScript"
                class="ClassLogoJavaScript"
                modo={modo}>
              </Img>
          </div>
      </Div>

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

export default atendimentoOi
