import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'

import Div from '../../../atoms/atDiv'
import ListadeRotas from '../../../moleculas/moListadeRotas/index.js'
import HeaderSideDoValente from '../../../moleculas/moHeaderSideDoValente/index.js'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║        codigo   Apache       ║');
  console.log('╚════════════════════════════════╝');

  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <Head>
        <title>CRIANDO ALIAS E REDIRECIONAMENTOS NO APACHE</title>
        <FaviIcon />
        <meta name="description" content="Apache Alias" />
        <link rel="canonical" href="/codigo/apache/alias" />
        <link rel="amphtml" href="/amp/codigo/apache/alias" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout cidade={cidade} modo={modo}>
        <h1>CRIANDO ALIAS E REDIRECIONAMENTOS NO APACHE</h1>
          <p>
          <br/>(
          <br/>Obs.:
          <br/>Alias  é uma mascara a URL. 
          <br/>O redirect e o redirectmatch sobrescrever a URL
          <br/>)
          <br/>
          <br/>
          <br/>Bom pessoal aqui está mais um brinde para hoje , como fazer alias e redirects no apache.
          <br/>Da mesma forma como eu posso fazer alias no linux , para quando executar o comando ls , na verdade ele fazer um ls –color -lha por exemplo, podemos mapear a nossa URL, para que ela não acesse o seu diretório padrão e sim acesse um outro diretório dentro do meu sistema.
          <br/>Dentro do httpd.conf ou no seu VirtualHost, edite para Mapear um diretório com Alias
          <br/>
          <br/>#Debian
          <br/>/etc/apache2/httpd.conf
          <br/>
          <br/>#Centos/Redhat
          <br/>/etc/httpd/conf/httpd.conf
          <br/>
          <br/>la dentro vou colocar um exemplo da Diretiva Alias
          <br/>
          <br/>Alias	/pub  /var/archives/pub
          <br/>
          <br/>oque essa Diretiva faz?
          <br/>Quando um usuario requisitar o meu servidor , ou meu site especifico(VirtualHost), por 
          <br/>exemplo:
          <br/>http://linuxextreme.exemplo.com.br/pub/renan.pdf 	o arquivo que vai ser transferido para o usuário não vai ser oque esta dentro do DocumentRoot padrão, que neste case deveria ser /var/www/linuxextreme/pub   , ele vai transferir o arquivo que está dentro de /var/archives/pub/ que tem o nome de renan.pdf
          <br/>Quando eu desejo mapear a pagina de índice de um diretório, recomenda-se finalizar a URL com uma “/”
          <br/>
          <br/>exemplo:
          <br/>Alias   /documentos/  /var/www/documentos/
          <br/>
          <br/>Ao requisitar http://linuxextreme.exemplos.com.br/documentos/ o arquivo que será entregue, é o índice do diretório /var/www/documentos
          <br/>
          <br/>Caso eu queira utilizar expressões regulares no alias, podemos utilizar diretiva AliasMatch.
          <br/>
          <br/>Exemplo:
          <br/>AliasMatch ^/([0-9]{'{2}'})  /var/www/srv$1
          <br/>Ao requisitar por exemplo a URL  http://linuxextreme.exemplo.com.br/15/santosmelhortimedomundo.png será enviado o arquivo
          <br/>/var/www/srv15/santosmelhortimedomundo.png
          <br/>
          </p>
        </Layout>
      <style jsx>{`
      h1{
        width:25%;
      }
     `}</style>
    </div>
  )
}

export default atendimentoOi
