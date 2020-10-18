import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import DivCodigo from '../../../atoms/atDivCodigo'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'

//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔═════════════════════════════╗');
  console.log('║ Tutorial - Python - Anaconda ║');
  console.log('╚═════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Jupyter Notebook" 
        description="Jupyter Notebook - Python" 
        canonical="/tutorial/python/anaconda/"
        keywords="Jupyter, python, tutorial, linguagem, programação, Notebook, ipynb, instalando, instalar"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>Jupyter Notebook</h1>    

            <h3>O que é o Jupyter Notebook?</h3>
            <p>
              É uma Interface interativa para Python.<br/>
              É um ambiente computacional web para a internet rica para criação de documentos para a plataforma Jupyter.<br/>
            </p>

            <h3>Documento Jupyter Notebook:</h3>
            <p>
              É estruturado no formato JSON, contendo uma lista ordenada de células de entrada / saída.<br/>
              Podem conter código, texto(Markdown), matemática, gráficos e texto enriquecido. <br/>
              A extensão do documentos Jupyter Notbook é <strong>".ipynb"</strong>.<br/>
              Obs.: Markdown é uma linguagem simples de marcação para representar um HTML válido simples. Markdown tambem é usado no README do GIT.<br/>
            </p>

            <h3>Jupyter Notebook na nuvem:</h3>
            <p>
              Para usar o Jupyter Notebook não precisa instalá-lo, qualquer pessoa pode rodar diretamente na nuvem do Google.<br/>
            </p>

            <h3>Instalação do Jupyter Notebook:</h3>
            <p>
              Em construção... 
              Após instalar o Jupyter Notebook, cria uma pasta onde serão baixados os arquivos de dados e os códigos.<br/>
            </p>

            <h3>Aplicativo Web Jupyter:</h3>
            <p>
              Em construção... 
            </p>

            <h3>Servidor Web Jupyter Python:</h3>
            <p>
              Em construção...
            </p>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logojupyter.png"
                  width="200px"
                  height="200px"
                  alt="Logo Jupyter"
                  title="Logo Jupyter"
                  class="ClassLogoJupyter"
                  modo={modo}>
            </Img>
          </div>
        </Div>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
    `}</style>
    </div>
  )
}

export default codigoJava
