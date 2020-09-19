import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║   Tutorial - HTML - Formulário - Select  ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML Formulario Campo Select" description="HTML Formulario Campo Select" canonical="/codigo/html/formulario_campos_05_select/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML Formulário Campo Select</h1>
          Segue um exemplo de um formulário com campo select.<br />        
        <DivNaveg>

        <form action="cadastro.php" methodo="POST">
                <fieldset>
                    <legend>Exemplos de Campos (select, optgroup, option)</legend>
                    Escolha um veiculo:<br />
                    <select name="Veiculo">
                        <optgroup label="Carro">
                            <option val0ue="brasilha"> brasilha </option>
                            <option value="Uno" selected> Uno </option>
                            <option value="Camaro"> Camaro </option>
                            <option value="Fusca"> Fusca </option>
                        </optgroup>
                        <optgroup label="Motos">
                            <option value="Pop100"> Pop 1000 </option>
                            <option value="Zig-50"> Zig-50 </option>
                            <option value="Bereta"> bereta </option>
                            <option value="38"> 38 </option>
                        </optgroup>
                    </select><br />
                    <br />
                    <input type="submit" name="btn-enviar" value="Enviar" /><br />
                </fieldset>
            </form>
        </DivNaveg>
        Segue o codigo HTML deste formulário:<br/>
        <DivCodigo titulo="codigo">

        {'<form action="cadastro.php" methodo="POST">'}<br/>
            {'    <fieldset>'}<br/>
            {'        <legend>Exemplos de Campos (select, optgroup, option)</legend>'}<br/>
            {'        Escolha um veiculo:<br />'}<br/>
            {'        <select name="Veiculo">'}<br/>
            {'            <optgroup label="Carro">'}<br/>
            {'                <option val0ue="brasilha"> brasilha </option>'}<br/>
            {'                <option value="Uno" selected> Uno </option>'}<br/>
            {'                <option value="Camaro"> Camaro </option>'}<br/>
            {'                <option value="Fusca"> Fusca </option>'}<br/>
            {'            </optgroup>'}<br/>
            {'            <optgroup label="Motos">'}<br/>
            {'                <option value="Pop100"> Pop 1000 </option>'}<br/>
            {'                <option value="Zig-50"> Zig-50 </option>'}<br/>
            {'                <option value="Bereta"> bereta </option>'}<br/>
            {'                <option value="38"> 38 </option>'}<br/>
            {'            </optgroup>'}<br/>
            {'        </select><br />'}<br/>
            {'        <br />'}<br/>
            {'        <input type="submit" name="btn-enviar" value="Enviar" /><br />'}<br/>
            {'    </fieldset>'}<br/>
            {'</form>'}<br/>
        </DivCodigo>

            
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
