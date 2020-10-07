import React from 'react'
import Link from 'next/link'
import DivCodigo from '../../../atoms/atDivCodigo'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import OQueERedirect from '../../../moleculas/moOQueERedirect'
import * as Util from '../../../../controller/util.js';
//import DivNaveg from '../../../atoms/atDivNaveg'

const codigoAspRedirect = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║     Tutoriais - CGI - Redirect    ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="REDIRECT CGI PERL" 
        description="REDIRECT 301 com CGI PERL" 
        canonical="/tutorial/cgi/redirect/"
        keywords="CGI, PERL, Tutorial, REDIRECT, linguagem, programação, codigo, HTTP, protocolo"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="CGI">
        <h1>REDIRECT com CGI PERL</h1>
          <p>Como fazer redirect 301 com CGI PERL?</p>
          <DivCodigo titulo="Codigo redirect CGI PERL">
            <xmp>
              {'$q = new CGI;'}<br/>
              {'print $q->redirect("http://www.seu-novo-site.com.br/");'}<br/>
            </xmp>
          </DivCodigo> 
          <OQueERedirect/>
          <Link href={"/tutorial/cgi?regiao="+regiao}>O que é CGI?</Link>
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

export default codigoAspRedirect
