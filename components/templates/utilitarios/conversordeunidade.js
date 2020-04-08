import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout'
import * as Util from '../../../controller/util.js';

const conversordeunidade = function (props) {

  console.log('╔═════════════════════════════════════╗');
  console.log('║          conversordeunidade         ║');
  console.log('╚═════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>Controle o Godzilla</title>
        <FaviIcon />
        <meta name="description" content="Controle o Godzilla" />
        <link rel="canonical" href="/game/conversordeunidade/" />
        <link rel="amphtml" href="/amp/game/conversordeunidade/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>Conversor de Unidade</h1>
          <div>
            <p>Esta página está em desenvolvimento. Volte em breve.</p>
          <select id="regiao" name="regiao">
            <option value="metros">metros</option>
            <option value="Quilômetros">Quilômetros</option>
            <option value="centimetros">centimetros</option>
            <option value="Milímetros">Milímetros</option>
            <option value="Micrômetros">Micrômetros</option>
            <option value="Nanômetros">Nanômetros</option>
            <option value="Milhas">Milhas</option>
            <option value="Jardas">Jardas</option>
            <option value="pés">pés</option>
            <option value="polegada">polegada</option>
            <option value="milha nautica">milha nautica</option>
          </select>:<input type="number" name="nome" required autofocus maxlength="20"/><br/>
          <select id="regiao" name="regiao">
            <option value="metros">metros</option>
            <option value="Quilômetros">Quilômetros</option>
            <option value="centimetros">centimetros</option>
            <option value="Milímetros">Milímetros</option>
            <option value="Micrômetros">Micrômetros</option>
            <option value="Nanômetros">Nanômetros</option>
            <option value="Milhas">Milhas</option>
            <option value="Jardas">Jardas</option>
            <option value="pés">pés</option>
            <option value="polegada">polegada</option>
            <option value="milha nautica">milha nautica</option>
          </select>:<input type="number" name="nome" maxlength="20"/><br/>
          </div>

          //Unidade de Comprimento<br/>
          //1 metro = 0,001 Quilômetros (divida o valor de comprimento por 1000)<br/>
          //1 metro = 100 centimetros (multiplique o valor de comprimento por 100)<br/>
          //1 metro = 1000 Milímetros (multiplique o valor de comprimento por 1000)<br/>
          //1 metro = 1e+6 Micrômetros (multiplique o valor de comprimento por 1e+6)<br/>
          //1 metro = 1e+9 Nanômetros (Multiplique o valor de comprimento por 1e+9)<br/>
          //1 metro = 0,000621371 Milhas (divida o valor de comprimento por 1609)<br/>
          //1 metro = 1,09361 Jardas (multiplique o valor de comprimento por 1,094)<br/>
          //1 metro = 3,28084 pés (multiplique o valor de comprimento por 3,281)<br/>
          //1 metro = 39,37008 polegada (multiplique o valor de comprimento por 39,37)<br/>
          //1 metro = 0,000539957 milha nautica (divida o valor de comprimento por 1852)<br/> 
      </Layout>
      <style jsx>{`
        .Godzilla {
          position: absolute;
        }
      `}</style>

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

