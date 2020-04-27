import React from 'react'
import Layout from '../../moleculas/layout'
import MoHead from '../../moleculas/moHead'
import * as Util from '../../../controller/util.js';
import BtLink from '../../atoms/atBtLink'

const atendimentoOi = function (props) {

  console.log('╔═══════════════════════════════╗');
  console.log('║        UTILITARIOS            ║');
  console.log('╚═══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="UTILITARIOS" canonical="/utilitarios/"/>

      <Layout regiao={regiao} modo={modo} titulo="Utilitarios" categoria="Utilitarios">
          <h1>UTILITARIOS</h1>
          <p>Aplicações úteis.</p>
          <BtLink href={"/utilitarios/conversordetexto?regiao="+regiao} value="Conversor de Texto" estilo="cinza"/><br/>
          Conversão de textos maiusculos e minusculos.<br/>
          Experimento de codigo em javascript.<br/><br/>
          <BtLink href={"/utilitarios/conversordeunidade?regiao="+regiao} value="conversor de Unidade" estilo="cinza"/><br/>
          Conversão de medidas de comprimento.<br/>
          Outro experimento de codigo em javascript.<br/><br/>
          <BtLink href={"/utilitarios/servicosgratuitos?regiao="+regiao} value="Servicos Gratuitos" estilo="cinza"/><br/>
          Lista com diversos serviços gratuitos na WEB.<br/><br/>
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

export default atendimentoOi
