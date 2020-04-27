import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../..//moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const instalaubuntu = function (props) {

  console.log('╔═════════════════════════════════╗');
  console.log('║ codigo - Apache - instalaubuntu ║');
  console.log('╚═════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="Instalando Apache no Ubuntu" canonical="/codigo/apache/instalaubuntu/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="Apache">
        <h1>Instalando Apache no Ubuntu</h1>
          <p>
          <br/>Resumo
          <br/>
          <br/>Logar como administrador:
          <br/>$ sudo su
          <br/>
          <br/>Atualizar o Ubuntu:
          <br/>$ apt-get update 
          <br/>
          <br/>Instalar o Apache v2: 
          <br/>$ apt-get install apache2
          <br/>
          <br/>Reinicie o Apache: 
          <br/>$ /etc/init.d/apache2 restart
          <br/>
          <br/>Permissão de escrita no diretório padrão do Apache: 
          <br/>$ chmod 777 /var/www 
          <br/>
          <br/>Teste usando
          <br/>http://localhost
          <br/>ou http://127.0.0.1/
          <br/>ou http://localhost:80
          <br/>ou http://127.0.0.1:80
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

export default instalaubuntu
