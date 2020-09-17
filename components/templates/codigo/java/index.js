import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║  Tutorial - O que é Java  ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="Java" description="O que é Java." canonical="/codigo/java/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Java">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>O que é Java?</h1>
            <p>Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems.<br/>
              A linguagem de programação Java é a linguagem convencional da Plataforma Java, mas não é a sua única linguagem.<br/>
            </p>
            <DivCodigo titulo="Exemplo de código JAVA:">
              {'public class OláMundo {'}<br/>
              {'  public static void main(String[] args) {'}<br/>
              {'     System.out.println("Olá, Mundo!"); //Imprime na tela a frase'}<br/>
              {'  }'}<br/>
              {'}'}<br/>
            </DivCodigo>
          </div>
          <div>
                <Img 
                  src="/static/assetsv5/img/codigo/logojava.svg"
                  width="323px"
                  height="436px"
                  alt="Logo Java"
                  title="Logo Java"
                  class="ClassLogoJava"
                  modo={modo}>
                </Img>
          </div>
        </Div>
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

export default codigoJava
