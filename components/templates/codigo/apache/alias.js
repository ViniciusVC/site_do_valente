// Rotas 
// http://www.vvcestudio.com.br/tutorial/apache/alias/
// http://www.vvcestudio.com.br/amp/tutorial/apache/alias/

import React from 'react';
import Layout from '../../../moleculas/layout';
import MoHead from '../../..//moleculas/moHead';
import DivCodigo from '../../../atoms/atDivCodigo';
import * as Util from '../../../../controller/util.js';

const apacheAlias = function (props) {

  console.log('╔══════════════════════════════╗');
  console.log('║    Tutoriais - Apache - Alias   ║');
  console.log('╚══════════════════════════════╝');

  const regiao = Util.validaProps(props.regiao , "RJ");
  const modo = Util.validaProps(props.modo, "html");
  const JsonRegiao = Util.regiao(regiao);

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="ALIAS e REDIRECIONAMENTOS no APACHE" 
        description="CRIANDO ALIAS E REDIRECIONAMENTOS NO APACHE" 
        canonical="/tutorial/apache/alias/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Apache">
        <h1>CRIANDO ALIAS E REDIRECIONAMENTOS NO APACHE</h1>
          <p>
          <br/>(
          <br/>Obs.:
          <br/>Alias é uma mascara a URL. 
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
          <DivCodigo titulo="La dentro vou colocar um exemplo da Diretiva Alias">
            Alias	/pub  /var/archives/pub
          </DivCodigo>
          <br/>oque essa Diretiva faz?
          <br/>Quando um usuario requisitar o meu servidor , ou meu site especifico(VirtualHost), por 
          <br/>exemplo:
          <br/>http://{JsonRegiao.timea}.exemplo.com.br/pub/vinicius.pdf 	o arquivo que vai ser transferido para o usuário não vai ser oque esta dentro do DocumentRoot padrão, que neste case deveria ser /var/www/{JsonRegiao.timea}/pub   , ele vai transferir o arquivo que está dentro de /var/archives/pub/ que tem o nome de vinicius.pdf
          <br/>Quando eu desejo mapear a pagina de índice de um diretório, recomenda-se finalizar a URL com uma “/”
          <br/>
          <DivCodigo titulo="exemplo:">Alias   /documentos/  /var/www/documentos/</DivCodigo>
          <br/>
          <br/>Ao requisitar http://{JsonRegiao.timea}.exemplos.com.br/documentos/ o arquivo que será entregue, é o índice do diretório /var/www/documentos
          <br/>
          <br/>Caso eu queira utilizar expressões regulares no alias, podemos utilizar diretiva AliasMatch.
          <br/>
          <DivCodigo titulo="exemplo:">AliasMatch ^/([0-9]{'{2}'})  /var/www/srv$1</DivCodigo>
          <br/>Ao requisitar por exemplo a URL  http://{JsonRegiao.timea}.exemplo.com.br/15/santosmelhortimedomundo.png será enviado o arquivo
          <br/>/var/www/srv15/santosmelhortimedomundo.png
          <br/>
          <br/>
          </p>
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

export default apacheAlias
