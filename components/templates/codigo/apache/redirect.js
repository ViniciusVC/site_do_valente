import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const apacheRedirect = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║   codigo - Apache - redirect   ║');
  console.log('╚════════════════════════════════╝');

  const regiao = Util.validaProps(props.regiao , "RJ");
  const modo = Util.validaProps(props.modo, "html");
  const JsonRegiao = Util.regiao(regiao);

  return (
    <div>
      <MoHead modo={modo} title="Apache Redirect" description="Código Apache Redirect" canonical="/codigo/apache/redirect/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="Apache">
        <h1>REDIRECT</h1>
        <p>
          <br/>Oque a diretiva Redirect faz?
          <br/>Mapeia uma URL antiga em uma NOVA URL, forçando o cliente a requisitar a nova URL.
          <br/>
          <br/>existe alguma regra?
          <br/>sim
          <br/>* a URL antiga deve SEMPRE iniciar com “/”.
          <br/>* a nova URL deve ser escrita em sua forma absoluta.
          <br/>
          <br/>Alguns exemplos:
          <br/>Redirect   /pesquisar  http://www.google.com.br
          <br/>
          <br/>Ao requisitar http://{JsonRegiao.timeb}.exemplos.com.br , haverá um redirecionamento para http://www.google.com.br
          <br/>
          <br/>Posso fazer com que esse redirecionamento se torne permanente para o cliente
          <br/>
          <br/>Redirect permanent   /melhorblog   https://{JsonRegiao.timeb}.wordpress.com
          <br/>Redirect /musicas   http://www.srv.com/musicas
          <br/>Redirect  /  https://{JsonRegiao.timeb}.exemplos.com.br/
          <br/>
          <br/>Da mesma forma do Alias o Redirect também tem uma diretiva para expressão regular, o RedirectMatch.
          <br/>Exemplo:
          <br/>RedirectMatch   (.*)\.avi$     https://avi.exemplos.com.br/$1
          <br/> 
          <br/>
          <br/>Para redirecionar arquivos individuais, como example.com/oldfile.htm para newfile.htm, você pode usar um redirecionamento 301 como este:
          <br/>Redirect 301 /oldfile.htm /newfile.htm
          <br/>Redirect 301 /oldfile.htm http://example.net/newfile.htm
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

export default apacheRedirect
