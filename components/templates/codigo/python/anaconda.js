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
        title="Anaconda Navigator" 
        description="Plataforma Anaconda Navigator - Python" 
        canonical="/tutorial/python/anaconda/"
        keywords="Anaconda, python, tutorial, linguagem, programação, codigo, instalando, instalar"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>Anaconda</h1>
            <h3>que é Anaconda?</h3>
            <p>
              Anaconda é uma distribuição gratuita e de código aberto das linguagens de programação Python e R para computação científica, que visa simplificar o gerenciamento e implantação de pacotes.<br/>
              A distribuição inclui pacotes de ciência de dados adequados para Windows, Linux e macOS.<br/>
              O Anaconda Navigator é uma interface gráfica do usuário (GUI) de desktop incluída na distribuição do Anaconda que permite aos usuários iniciar aplicativos e gerenciar pacotes conda, ambientes e canais sem usar comandos de linha de comando.<br/>
              O Navigator pode pesquisar pacotes na nuvem Anaconda ou em um repositório Anaconda local, instalá-los em um ambiente, executar os pacotes e atualizá-los.<br/>
              Ele está disponível para Windows, macOS e Linux.<br/>
            </p>
            <h3>Instalar a Plataforma Anaconda</h3>
            <p>
              Em construção...
            </p>
            <h3>Aplicativos disponíveis no Anaconda Navigator</h3> 
            <ol type="I">
              <li>
                -JupyterLab
              </li>
              <li>
                -Jupyter Notebook
              </li>
              <li>
                -QtConsole
              </li>
              <li>
                -Spyder
              </li>
              <li>
                -Glue
              </li>
              <li>
                -Orange
              </li>
              <li>
                -RStudio
              </li>
              <li>
                  -Visual Studio Code
              </li>
            </ol>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logoanaconda.png"
                  width="200px"
                  height="200px"
                  alt="Logo Anaconda"
                  title="Logo Anaconda"
                  class="ClassLogoAnaconda"
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
