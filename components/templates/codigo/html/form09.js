import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║ Tutorial - HTML - Formulário - Datalist  ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML Formulario Campo Datalist" description="coHTML Formulario Campo Datalistdigo" canonical="/codigo/html/formulario_campos_06_datalist/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML Formulario Campo Datalist</h1>
          Segue um exemplo de um formário com campos imput e datalist.<br/>
        <DivNaveg>
        <form action="cadastro.php" methodo="POST">
                <fieldset>
                    <legend>Exemplos de Campos 04 (input, datalist)</legend>
                    Escolha o curso : <br />
                    <input name="cursos" list="lista-cursos" />
                    <datalist id="lista-cursos">
                        <option value="HTML5">HTML5</option>
                        <option value="CSS">CSS</option>
                        <option value="PHP">PHP</option>
                    </datalist>
                    <br />
                    <input type="submit" name="btn-enviar" value="Enviar" /><br />
                </fieldset>
            </form>
        </DivNaveg>
        <DivCodigo titulo="codigo">

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
