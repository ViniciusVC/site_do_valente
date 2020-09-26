import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import * as Util from '../../../../controller/util.js';

const instalaubuntu = function (props) {

  console.log('╔═════════════════════════════════╗');
  console.log('║ Tutoriais - Apache - instalaubuntu ║');
  console.log('╚═════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Instalando Apache no Ubuntu" 
        canonical="/tutorial/apache/instalaubuntu/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Apache">
        <h1>Instalando Apache no Ubuntu</h1>
          <p>
          <br/>Resumo
          <br/>
          <br/>
          <DivCodigo titulo="Logar como administrador:">
            $ sudo su
          </DivCodigo>
          <br/>
          
          <DivCodigo titulo="Atualizar o Ubuntu:">$ apt-get update </DivCodigo>
          <br/>
           
          <DivCodigo titulo="Instalar o Apache v2:">$ apt-get install apache2</DivCodigo>
          <br/>
           
          <DivCodigo titulo="Reinicie o Apache:">
            $ /etc/init.d/apache2 restart
          </DivCodigo>

          <DivCodigo titulo="Permissão de escrita no diretório padrão do Apache:">
            $ chmod 777 /var/www 
          </DivCodigo>

          <br/>
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
