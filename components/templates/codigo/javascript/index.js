import React from 'react'
import Img from '../../../atoms/atImg/index.js';
import Div from '../../../atoms/atDiv/index.js';
import Layout from '../../../moleculas/layout';
import MoHead from '../../../moleculas/moHead';
import * as Util from '../../../../controller/util.js';
import DivCodigo from '../../../atoms/atDivCodigo'
const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║     Tutoriais  JavaScript      ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead 
        modo={modo} 
        title="JavaScript" 
        description="O que é JavaScript" 
        canonical="/codigo/javascript/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="JavaScript">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>JavaScript</h1>
            <p>O que é JavaScript?</p>
            <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multi-paradigma.<br/>
              Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>
            <DivCodigo titulo="Script dentro da pagina">
            {'<!-- Script dentro do codigo da pagina -->'}<br/>
            {'<script>'}<br/>
            {'alert("Ola")'}<br/>
            {'</script>'}<br/>
            {'<noscript>Você está com o script desabilitado.</noscript>'}<br/>
            </DivCodigo>
            <DivCodigo titulo="Script importado de um arquivo">
          	{'<!-- Codigo JavaScript importado de um arquivo JS -->'}<br/>
	          {'<script src="alerta.js"></script>'}<br/>
            {'<noscript>Você está com o script desabilitado.</noscript>'}<br/>
            </DivCodigo>
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logojs.png"
                width="323px"
                height="436px"
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
