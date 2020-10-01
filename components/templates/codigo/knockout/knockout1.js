import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';
import DivCodigo from '../../../atoms/atDivCodigo'

const Knockout = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║     Tutorial   Knockout  1     ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="KnockoutJS" 
        description="Tutorial Knockout JS" 
        canonical="/tutorial/knockout/knockout1"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="KnockoutJS">
        <h1>Knockout JS</h1>
        <p>
          Knockout é uma implementação JavaScript independente do padrão Model-View-ViewModel com modelos.<br />
          Os princípios subjacentes são, portanto: uma separação clara entre os dados do domínio, visualize os componentes e os dados a serem exibidos.
        </p>
      
        <DivCodigo titulo="Exemplo de código Knockout">
          {'<!-- Importar biblioteca knockout.js -->'}<br/>
          {'<script src="knockout-3.3.0.js"></script>'}<br/>
          {'<!-- Exemplo de knockout js -->'}<br/>
          {'<p>'}<br/>
          {'<!-- This is a *view* - HTML markup that defines the appearance of your UI -->'}<br/>
          {'<p>First name: <strong data-bind="text:firstName">Blablabla</strong></p>'}<br/>
          {'<p>Last name: <strong data-bind="text:lastName">Blablabla</strong></p>'}<br/>
          {'<script type="text/javascript">'}<br/>
          // Este é um *viewmodel* simples - JavaScript que define os dados e o comportamento de sua interface de usuário.<br/>
          {'function AppViewModel() {'}<br/>
          {'  this.firstName = "Vinicius";'}<br/>
          {'  this.lastName = "Coutinho";'}<br/>
          {'}'}<br/>
          // Activates knockout.js
          ko.applyBindings(new AppViewModel());
          {'</script>'}	
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

export default Knockout

{/* 
          <script src="knockout-3.3.0.js"></script>
          <p>
          <p>First name: <strong data-bind="text:firstName">Blablabla</strong></p>
          <p>Last name: <strong data-bind="text:lastName">Blablabla</strong></p>
          <script type="text/javascript">
          // This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
          function AppViewModel() {
            this.firstName = "Vinicius";
            this.lastName = "Coutinho";
          }
          // Activates knockout.js
          ko.applyBindings(new AppViewModel());
          </script>	 
*/}