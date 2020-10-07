import React from 'react'
import Link from 'next/link'
import DivCodigo from '../../../atoms/atDivCodigo'
import MoHead from '../../..//moleculas/moHead'
import Layout from '../../../moleculas/layout'
import OQueERedirect from '../../../moleculas/moOQueERedirect'
import * as Util from '../../../../controller/util.js';

const codigoAspRedirect = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║   Tutorial - ASP - Redirect    ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="REDIRECT com ASP" 
        description="Codigo REDIRECT 301 com ASP" 
        canonical="/tutorial/asp/redirect/"
        keywords="asp,tutoriais,REDIRECT,linguagens,script,programação"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="ASP">
        <h1>REDIRECT com ASP</h1>
          <DivCodigo titulo="REDIRECT com ASP">
            <xmp>
              {'<%@ Language=VBScript %>'}<br/>
              {'<%'}<br/>
              {'Response.Status="301 Moved Permanently"'}<br/>
              {'Response.AddHeader "Location","http://www.seu-novo-site.com.br/"'}<br/>
              {'%>'}<br/>
            </xmp>
          </DivCodigo>
          <OQueERedirect/>
          <Link href={"/codigo/ASP?regiao="+regiao}>O que é ASP?</Link>
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
