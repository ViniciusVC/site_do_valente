import React from 'react'
import Link from 'next/link'
import DivCodigo from '../../../atoms/atDivCodigo'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'

import * as Util from '../../../../controller/util.js';

const codigoAsp = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║      Tutorial  CGI        ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="CGI PERL" 
        description="O que é CGI PERL" 
        canonical="/tutorial/cgi/"
        keywords="CGI, PERL, Tutorial, linguagem, programação, codigo, HTTP, protocolo"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="CGI">
          <h1>O que é CGI PERL?</h1>
          <p>CGI é um protocolo de comunicação (um código) através do qual o servidor HTTP (ou servidor web) intermedia a transferência de informações entre um programa (no mesmo computador que o servidor) e um cliente HTTP (o seu browser).</p>
          <p>Perl é uma linguagem de programação.</p>
          <DivCodigo titulo="Exemplo codigo CGI PERL">
            #Comentario<br/>
            print 'Olá mundo.\n';<br/>
          </DivCodigo>
          <p>
            Servidor web é um software responsável por aceitar pedidos em HTTP de clientes, geralmente os navegadores, e servi-los com respostas em HTTP, incluindo opcionalmente dados, que geralmente são páginas web, tais como documentos em HTML com objetos embutidos (imagens, etc). 
          </p>
          <Link href={"/tutorial/cgi/redirect?regiao="+regiao}>Como fazer um redirect 301 em CGI</Link>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
      `}</style>
    </div>
  )
}

export default codigoAsp
