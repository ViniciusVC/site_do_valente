import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout'
import MoHead from '../../moleculas/moHead'
import * as Util from '../../../controller/util.js';

const conversordetexto = function (props) {

  console.log('╔═══════════════════════════════╗');
  console.log('║      servicosgratuitos        ║');
  console.log('╚═══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="Serviços Gratuitos" canonical="/utilitarios/servicosgratuitos/"/>
      <Layout regiao={regiao} modo={modo} titulo="Utilitarios" categoria="Utilitarios">
          <h1>Lista de Serviços Gratuitos</h1>
          <p>Os desenvolvedores e autores de código aberto agora têm uma quantidade enorme de serviços que oferecem camadas gratuitas, mas pode ser difícil encontrá-los todos para tomar decisões informadas.</p>
          <p>Esta é uma lista de software (SaaS, PaaS, IaaS etc.) e outras ofertas que possuem camadas gratuitas para desenvolvedores.</p>
          <p>O escopo desta lista específica é limitado ao que os desenvolvedores de infraestrutura (Administrador do Sistema, Profissionais de DevOps etc.) provavelmente acharão úteis. Adoramos todos os serviços gratuitos disponíveis, mas seria bom mantê-lo no tópico. Às vezes, é um pouco de uma linha cinza, então é um pouco opinativo; não se ofenda se eu não aceitar sua contribuição.</p>
          <p>Esta lista é o resultado de solicitações pull, revisões, idéias e trabalhos realizados por mais de 500 pessoas. Você também pode ajudar enviando solicitações pull para adicionar mais serviços ou removendo aqueles cujas ofertas foram alteradas ou retiradas.</p>
          <p>NOTA: Esta lista é apenas para ofertas como serviço, não para software auto-hospedado. Para que um serviço seja elegível, ele precisa oferecer um Nível Gratuito e não apenas uma avaliação gratuita. Se o nível gratuito for calculado, o tempo deve ser de pelo menos um ano.</p>


          <div>
            <h2><a href="algorithmia.com">algorithmia.com</a></h2>
            <p>
            Hospede algoritmos gratuitamente.<br/>
            Inclui subsídio mensal gratuito para a execução de algoritmos.<br/>
            Agora com suporte a CLI.<br/>
            </p>
            Colorful Image Colorization : Colore fotos em preto e branco automaticamente.<br/>
            
            Car Make and Model Recognition : Identifica na imagem de um carro, a marca, o modelo e ano.<br/>

            Summarizer : Resume textos utilizando inteligencia artificial.<br/>
            
            DeepFilter : Alica filtros<br/>

            Programming Language Identification : Identifica qual a linguagem que um codigo fonte foi escrito.<br/>

            Smart Thumbnail : Criar uma thum com a parte mais importante da imagem.<br/>

            Obs.: Você ganha 5000 créditos para utilizar estes algoritimos.<br/>
          </div>

          <div>
            <h2><a href="apify.com">apify.com</a></h2>
            <p>
            Extrair dados<br/>
            de qualquer site<br/>
            O Apify é o balcão único para toda a sua raspagem na web,<br/>
            extração de dados e necessidades de automação de processos robóticos.<br/>
            </p>
            para transformar qualquer site em API<br/>
            Automação em cima de qualquer site<br/>
            Algumas API já estão pontas<br/>
            O plano gratuito funciona para sempre<br/>
          </div>

          <div>
            <h2><a href="aws">aws</a></h2>
            <p>
            Servidor Cloud Grátis.<br/>
            Recursos gratuitos para maquina virtual e armazenamento de arquivos<br/>
            Alguns produtos ficam gratuitos apenas por 12 meses.<br/>
            </p>
            <br/>
          </div>

          <div>
            <h2><a href="Azure">Azure</a></h2>
            <p>
            Servidor Cloud Grátis.<br/>
            Recursos gratuitos para maquina virtual e armazenamento de arquivos<br/>
            Alguns produtos ficam gratuitos apenas por 12 meses.<br/>
            </p>
            <br/>
          </div>

          <div>
            <h2><a href="Google">Google Cloud Platform(GPC)</a></h2>
            <p>
            Servidor Cloud Grátis.<br/>
            Recursos gratuitos para maquina virtual e armazenamento de arquivos<br/>
            Oferece um plano gratuito para sempre<br/>
            </p>
            <br/>
          </div>


          <div>
            <h2><a href="statuspile.com">statuspile.com</a></h2>
            <p>
            Servidor Cloud Grátis.<br/>
            Monte um Dashboard para monitorar várias paginas<br/>
            </p>
            <br/>
          </div>

          <div>
            <h2><a href="formspree.io">formspree.io</a></h2>
            <p>
            Jeito mais fácio de adicionar um form.<br/>
            Use esta API para enviar dados da sua pagina html.<br/>
            Crie quantos formulçarios quiser.<br/>
            Permite que cada formulário envia 50 envios por mes.<br/>
            </p>
            <br/>
          </div>

          <div>
            <h2><a href="staticforms.xyz">staticforms.xyz</a></h2>
            <p>
            Adicionar um form Para sites estáticos.<br/>
            Use esta API para enviar dados da sua pagina html.<br/>
            Sem limite de envios.<br/>
            </p>
            <br/>
          </div>


          <div>
            <h2><a href="staticforms.xyz">Developer Metrics</a></h2>
            <p>
            Documentação interatica<br/>
            </p>
            <br/>
          </div>


          <p>Fonte : https://free-for.dev/</p>
      </Layout>
      <style jsx>{`
        .Godzilla {
          position: absolute;
        }
      `}</style>

    </div>
  )
}

export default conversordetexto

