import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';
import DivCodigo from '../../../atoms/atDivCodigo'

const Knockout = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║     Tutorial   Knockout  2     ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="KnockoutJS" 
        description="Tutorial Knockout JS" 
        canonical="/tutorial/javascript/knockout2"
        keywords="knockout, knockoutJS, tutorial, js, codigo, html5, javascript, programação, vvc estudio"
        />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="KnockoutJS">
          <h1>Knockout JS - 2</h1>
          <p>
            Knockout é uma implementação JavaScript independente do padrão Model-View-ViewModel com modelos.<br />
            Os princípios subjacentes são, portanto: uma separação clara entre os dados do domínio, visualize os componentes e os dados a serem exibidos.
          </p>
            <DivCodigo titulo="Exemplo de código Knockout">
              {'<!-- Importar biblioteca knockout.js -->'}<br/>
              {'<script src="knockout-3.3.0.js"></script>'}<br/>
              {'<!-- Exemplo de knockout js -->'}<br/>
              {'<div id="liveExample" class="liveExample">'}<br/>
              {'<p>'}<br/>
              {'<!-- Binding attributes declaratively link DOM elements whth model properties -->'}<br/>
              {'Choose a ticket class:'}<br/>
              {'<select data-bind="options: tickets, optionsCaption: "Choose...", optionsText: "name", value: chosenTicket"></select>'}<br/>
              {'<button data-bind="enable: chosenTicket, click: resetTicket">Clear</button>'}<br/>
              {'</p>                   '}<br/>
              {'<p data-bind="with: chosenTicket">'}<br/>
              {'Você escolheu <b data-bind="text: name"></b>'}<br/>
              {'($<span data-bind="text: price"></span>)    '}<br/>
              {'</p>'}<br/>
              {'<script type="text/javascript">'}<br/>
              {'// Seu modelo de visão contém a data e os comportamentos subjacentes do Ul'}<br/>
              {'function TicketsViewModel() {'}<br/>
              {'this.tickets = ['}<br/>
              {'                { name: "Economy", price: 199.95 },'}<br/>
              {'            { name: "Business", price: 449.22 },'}<br/>
              {'            { name: "First Class", price: 1199.99 }'}<br/>
              {'        ];'}<br/>
              {'        this.chosenTicket = ko.observable();'}<br/>
              {'        this.resetTicket = function() { this.chosenTicket(null) }'}<br/>
              {'    }'}<br/>
              {'    ko.applyBindings(new TicketsViewModel(), document.getElementById("liveExample"));'}<br/>
              {'// Activates Knockout'}<br/>
              {'</script>	'}<br/>
              {'<!-- Encapsulando dado e comportamento em um modelo de visão, você tem fundação limpa e extensível no qual para construir UIs sofisticadas sem se perder em um emaranhado de manipuladores de eventos e atualizações manuais de DOM. -->'}<br/>
              {'</div>'}<br/>
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




// <!-- Importar biblioteca knockout.js -->
// <script src="knockout-3.3.0.js"></script>
// <!-- Exemplo de knockout js -->
// <div id="liveExample" class="liveExample">
//     <p>
// 	<!-- Binding attributes declaratively link DOM elements whth model properties -->
//     Choose a ticket class:
//     <select data-bind="options: tickets, 
//                        optionsCaption: 'Choose...',
//                        optionsText: 'name',
//                        value: chosenTicket"></select>
//     <button data-bind="enable: chosenTicket, 
//                        click: resetTicket">Clear</button>
//     </p>                   
// 	<p data-bind="with: chosenTicket">
//         You have chosen <b data-bind="text: name"></b>
//         ($<span data-bind="text: price"></span>)    
//     </p>
//     <script type="text/javascript">
// 		// Your view model holds the Ul's underliying date and behaviors
//         function TicketsViewModel() {
//             this.tickets = [
//                 { name: "Economy", price: 199.95 },
//                 { name: "Business", price: 449.22 },
//                 { name: "First Class", price: 1199.99 }
//             ];
//             this.chosenTicket = ko.observable();
//             this.resetTicket = function() { this.chosenTicket(null) }
//         }
//         ko.applyBindings(new TicketsViewModel(), document.getElementById("liveExample"));
// 		// Activates Knockout
//     </script>	
// <!-- Encapsulando dado e comportamento em uma view model, você tem fundação limpa e extensível no qual para construir UIs sofisticadas sem se perder em um emaranhado de event handlers e atualizações manuais de DOM. -->
// </div>