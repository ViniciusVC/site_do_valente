import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoRubyRedirect = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║    codigo - Ruby - Redirect    ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="Ruby On Rails" description="Código Ruby On Rails" canonical="/codigo/rubyonrails/redirect/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="Ruby on Rails">
          <div className="coluna404">
            <h1>redirect 301 em Ruby on Rails</h1>
            <DivCodigo titulo="codigo">
                def old_action<br/>
                headers["Status"] = "301 Moved Permanently"<br/>
                redirect_to "http://www.seu-novo-site.com.br/"<br/>
                End
            </DivCodigo>
          </div>
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

export default codigoRubyRedirect
