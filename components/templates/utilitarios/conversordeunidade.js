import React from 'react'
import Layout from '../../moleculas/layout'
import MoHead from '../../moleculas/moHead'
import * as Util from '../../../controller/util.js';
import Div from '../../atoms/atDiv'
import ConvertUnidade from '../../organisms/orgConvertUnidade'
const conversordeunidade = function (props) {

  console.log('╔═════════════════════════════════════╗');
  console.log('║          conversordeunidade         ║');
  console.log('╚═════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="Conversor de Unidade" description="Utilitario - Conversor de Unidade" canonical="/utilitarios/conversordeunidade/"/>

      <Layout regiao={regiao} modo={modo} titulo="Utilitarios" categoria="Utilitarios">
      <Div display="responsivo">
          <div>
            <h1>Conversor de Unidade</h1>
            <h3>Converta qualquer medida.</h3>
            <ConvertUnidade modo={modo}/>
          </div>
          <div>
          <h2>Unidades de Comprimento</h2><br/>
          1 metro = 0,001 Quilômetros <br/>(divida o valor de comprimento por 1000)<br/>
          1 metro = 100 centimetros <br/>(multiplique o valor de comprimento por 100)<br/>
          1 metro = 1000 Milímetros <br/>(multiplique o valor de comprimento por 1000)<br/>
          1 metro = 1e+6 Micrômetros <br/>(multiplique o valor de comprimento por 1e+6)<br/>
          1 metro = 1e+9 Nanômetros <br/>(Multiplique o valor de comprimento por 1e+9)<br/>
          1 metro = 0,000621371 Milhas <br/>(divida o valor de comprimento por 1609)<br/>
          1 metro = 1,09361 Jardas <br/>(multiplique o valor de comprimento por 1,094)<br/>
          1 metro = 3,28084 pés <br/>(multiplique o valor de comprimento por 3,281)<br/>
          1 metro = 39,37008 polegada <br/>(multiplique o valor de comprimento por 39,37)<br/>
          1 metro = 0,000539957 milha nautica <br/>(divida o valor de comprimento por 1852)<br/> 
          </div>
        </Div>  
      </Layout>
    </div>
  )
}

//Unidade de Comprimento
//1 metro = 0,001 Quilômetros (divida o valor de comprimento por 1000)
//1 metro = 100 centimetros (multiplique o valor de comprimento por 100)
//1 metro = 1000 Milímetros (multiplique o valor de comprimento por 1000)
//1 metro = 1e+6 Micrômetros (multiplique o valor de comprimento por 1e+6)
//1 metro = 1e+9 Nanômetros (Multiplique o valor de comprimento por 1e+9)
//1 metro = 0,000621371 Milhas (divida o valor de comprimento por 1609)
//1 metro = 1,09361 Jardas (multiplique o valor de comprimento por 1,094)
//1 metro = 3,28084 pés (multiplique o valor de comprimento por 3,281)
//1 metro = 39,37008 polegada (multiplique o valor de comprimento por 39,37)
//1 metro = 0,000539957 milha nautica (divida o valor de comprimento por 1852)


// <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">

//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>

export default conversordeunidade

