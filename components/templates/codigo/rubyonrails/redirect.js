import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import OQueERedirect from '../../../moleculas/moOQueERedirect'
import DivCodigo from '../../../atoms/atDivCodigo'
import BtLink from '../../../atoms/atBtLink';
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoRubyRedirect = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║  Tutoriais - Ruby - Redirect   ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="Ruby On Rails" description="Tutorial Ruby On Rails" canonical="/tutorial/rubyonrails/redirect/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Ruby on Rails">
        <Div display="responcivo">
          <div>
            <h1>redirect 301 em Ruby on Rails</h1>
            <DivCodigo titulo="codigo">
                def old_action<br/>
                headers["Status"] = "301 Moved Permanently"<br/>
                redirect_to "http://www.seu-novo-site.com.br/"<br/>
                End
            </DivCodigo>
          </div>
          <div>
            <Img 
                src="/static/assetsv5/img/codigo/logorubyonrails.png"
                width="200px"
                height="249px"
                alt="Logo Ruby On Rails"
                title="Logo Ruby On Rails"
                class="ClassLogoRuby"
                modo={modo}>
            </Img>
          </div>
        </Div>
        <OQueERedirect/>
        <BtLink href="/tutorial/rubyonrails/" value="O que é Ruby on Rails" estilo="neon"/>
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
