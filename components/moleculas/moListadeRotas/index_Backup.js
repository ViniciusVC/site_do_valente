import React from 'react'
//import a from 'next/a'
import Details from '../../atoms/atDetails'
import ListadeRotasHTML from './listaHTML.js'
import * as Util from "../../../controller/util.js";
import Li from './itemMenu.js';

//console.log('Instanciando templates/index.js');
const ListadeRotas = function (props) {
  const regiao = props.regiao;
  const modo = props.modo;
  const titulo = Util.validaProps(props.titulo, "nenhum");
  const categoria = Util.validaProps(props.categoria, "categoria");
  
  var StringModo = "";
  if(modo=="AMP" || modo=="amp"){
    StringModo = "/amp";
  }

  //Layout escuro
  return (
    <div>
      <nav className='CssRotasProjeto'>
        
        <Details open={titulo=="Home"}>
          <summary><a href={StringModo+"/?regiao="+regiao}>Home</a></summary>
          <ol type="1">
          <Li modo="html" href="/" regiao={regiao}>Pagina em HTML</Li>
          <Li modo="amp" href="/" regiao={regiao}>Pagina em AMP</Li>
          </ol>
        </Details>

        <Details open={titulo=="Codigo"}>
          <summary><a href={StringModo+"/codigo/?regiao="+regiao}>Código</a></summary>

          <Details open={categoria=="html"}>
              <summary ><a href={StringModo+"/codigo/html/?regiao="+regiao}>HTML</a></summary>
              <ListadeRotasHTML modo={modo} regiao={regiao}/>
            </Details>     

            <Details open={categoria=="SVG"}>
              <summary>SVG</summary>
              <ol type="1">
                <Li modo={modo} href="/codigo/html/svg01/" regiao={regiao}>SVG rect</Li>
                <Li modo={modo} href="/codigo/html/svg02/" regiao={regiao}>SVG ellipse, text</Li>
                <Li modo={modo} href="/codigo/html/svg03/" regiao={regiao}>SVG line, polygon, polyline</Li>
              </ol>
            </Details>     

            <Details open={categoria=="CSS"}>
              <summary><a href={StringModo+"/codigo/css/?regiao="+regiao}>CSS</a></summary>
              <ol type="1">
                <Li modo={modo} href="/codigo/css/" regiao={regiao}>Introdução ao CSS</Li>
                <Li modo={modo} href="/codigo/css/css02/" regiao={regiao}>Estilizando textos</Li>
                <Li modo={modo} href="/codigo/css/css03/" regiao={regiao}>Imagens de fundo</Li>
                <Li modo={modo} href="/codigo/css/css04/" regiao={regiao}>Link e Divs</Li>
                <Li modo={modo} href="/codigo/css/css05/" regiao={regiao}>Classe, ID e Span</Li>
                <Li modo={modo} href="/codigo/css/css06/" regiao={regiao}>Margin, padding e floatAula</Li>
                <Li modo={modo} href="/codigo/css/css07/" regiao={regiao}>Posição e z-index</Li>
                <Li modo={modo} href="/codigo/css/css08/" regiao={regiao}>Efeito hover</Li>
                <Li modo={modo} href="/codigo/css/css09/" regiao={regiao}>Herança</Li>
                <Li modo={modo} href="/codigo/css/css10/" regiao={regiao}>Menu com listas</Li>
                <Li modo={modo} href="/codigo/css/css11/" regiao={regiao}>Menu drop-down</Li>
                <Li modo={modo} href="/codigo/css/css12/" regiao={regiao}>Validação</Li>
                <Li modo={modo} href="/codigo/css/css13/" regiao={regiao}>Tabelas Style</Li>
                <Li modo={modo} href="/codigo/css/anima_but/" regiao={regiao}>Exemplos Anima But</Li>
              </ol>
            </Details>
            
            <Details open={categoria=="Python"}>
              <summary><a href={StringModo+"/codigo/python/?regiao="+regiao}>Python</a></summary>
            </Details>

            <Details open={categoria=="Apache"}>
              <summary><a href={StringModo+"/codigo/apache/?regiao="+regiao}>Apache</a></summary>
              <ol type="1">
                <Li modo={modo} href="/codigo/apache/instalubuntu" regiao={regiao}>Instalar no Ubuntu</Li>
                <Li modo={modo} href="/codigo/apache/alias" regiao={regiao}>Alias em Apache</Li>
                <Li modo={modo} href="/codigo/apache/redirect" regiao={regiao}>redirect 301</Li>
              </ol>
            </Details>
            <Details open={categoria=="ASP"}>
              <summary><a href={StringModo+"/codigo/asp/?regiao="+regiao}>ASP</a></summary>
              <ol type="1">
                <Li modo={modo} href="/codigo/asp/" regiao={regiao}>ASP</Li>
                <Li modo={modo} href="/codigo/asp/redirect" regiao={regiao}>redirect 301</Li>
              </ol>
            </Details>
            <Details open={categoria=="CGI"}>
              <summary><a href={StringModo+"/codigo/cgi/?regiao="+regiao}>CGI PERL</a></summary>
              <ol type="1">
                <Li modo={modo} href="/codigo/cgi/redirect" regiao={regiao}>redirect 301</Li>
              </ol>
            </Details>
            <Details open={categoria=="ColdFusion"}>
              <summary><a href={StringModo+"/codigo/coldfusion/?regiao="+regiao}>ColdFusion</a></summary>
              <ol type="1">
                <Li modo={modo} href="/codigo/coldfusion/" regiao={regiao}>redirect 301 em ColdFusion</Li>
              </ol>
            </Details>
            <Details open={categoria=="JavaScript"}>
              <summary><a href={StringModo+"/codigo/javascript?regiao="+regiao}>JavaScript</a></summary>
              <ol type="1">
                <Li modo={modo} href="/codigo/javascript" regiao={regiao}>JS JavaScript</Li>
                <Li modo={modo} href="/codigo/javascript" regiao={regiao}>JS JavaScript</Li>
                <Li modo={modo} href="/codigo/javascript" regiao={regiao}>JS JavaScript</Li>
              </ol>
            </Details>
            <Details open={categoria=="Java"}>
              <summary><a href={StringModo+"/codigo/java/?regiao="+regiao}>Java</a></summary>
              <ol type="1">
                <Li modo={modo} href="/codigo/java/" regiao={regiao}>Java</Li>
                <Li modo={modo} href="/codigo/java/" regiao={regiao}>redirect 301 em JSP</Li>
              </ol>
            </Details>

            <Details open={categoria=="knockout"}>
              <summary><a href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS</a></summary>
              <ol type="1">
                <Li modo={modo} href="/codigo/knockout/" regiao={regiao}>knockout JS exemplo 01</Li>
                <Li modo={modo} href="/codigo/knockout/" regiao={regiao}>knockout JS exemplo 02</Li>
                <Li modo={modo} href="/codigo/knockout/" regiao={regiao}>knockout JS exemplo 03</Li>
                <Li modo={modo} href="/codigo/knockout/" regiao={regiao}>knockout JS exemplo 04</Li>
                <Li modo={modo} href="/codigo/knockout/" regiao={regiao}>knockout JS exemplo 05</Li>
                <Li modo={modo} href="/codigo/knockout/" regiao={regiao}>knockout JS exemplo 06</Li>
              </ol>
            </Details>

            <Details open={categoria==".Net"}>
              <summary><a href={StringModo+"/codigo/dotnet/?regiao="+regiao}>.NET</a></summary>
              <ol type="1">
                <Li modo={modo} href="/codigo/dotnet/" regiao={regiao}>.NET</Li>
                <Li modo={modo} href="/codigo/dotnet/" regiao={regiao}>redirect 301 em ASP.NET</Li>
              </ol>
            </Details>

            <Details open={categoria=="PHP"}>
              <summary><a href={StringModo+"/codigo/php/?regiao="+regiao}>PHP</a></summary>
              <ol type="1">
                <Li modo={modo} href="/codigo/php/" regiao={regiao}>PHP</Li>
                <Li modo={modo} href="/codigo/php/redirect/" regiao={regiao}>redirect 301 no PHP</Li>
                <Li modo={modo} href="/codigo/php/procuraarquivo/" regiao={regiao}>encontrar arquivio no PHP</Li>
                <Li modo={modo} href="/codigo/php/procuradiretorio/" regiao={regiao}>encontrar diretorio no PHP</Li>
              </ol>
            </Details>

            <Details open={categoria=="Ruby on Rails"}>
              <summary><a href={StringModo+"/codigo/rubyonrails/?regiao="+regiao}>Ruby on Rails</a></summary>
              <ol type="1">
                <Li modo={modo} href="/codigo/rubyonrails/redirect/" regiao={regiao}>redirect RubyonRails</Li>
              </ol>
            </Details>
        </Details>

        <Details open={titulo=="Utilitarios"}>
          <summary><a href={StringModo+"/utilitarios/?regiao="+regiao}>Utilitarios</a></summary>
          <ol type="1">
            <Li modo={modo} href="/utilitarios/conversordetexto" regiao={regiao}>Converta Textos</Li>
            <Li modo={modo} href="/utilitarios/conversordeunidade" regiao={regiao}>Converta Unidades</Li>
            <Li modo={modo} href="/utilitarios/conversorunicode" regiao={regiao}>Converta Unicode</Li>
            <Li modo={modo} href="/utilitarios/servicosgratuitos" regiao={regiao}>Servicos Gratuitos</Li> 
          </ol>
        </Details>

        <Details open={titulo=="Games"}>
          <summary><a href={StringModo+"/game/?regiao="+regiao}>Games</a></summary>
          <ol type="1">
            <Li modo={modo} href="/game/controleogodzilla" regiao={regiao}>Controle O Godzilla</Li>
            <Li modo={modo} href="/game/tanque" regiao={regiao}>Tanque de Guerra</Li>
            <Li modo={modo} href="/game/ecossistema" regiao={regiao}>Ecossistema</Li>
            <Li modo={modo} href="/game/cobrinha" regiao={regiao}>Cobrinha</Li>
          </ol>
        </Details>

        {/* <Details open={titulo=="outros"}>
          <summary><a href={StringModo+"/hub/?regiao="+regiao}>Hub de Contato</a></summary>
        </Details> */}

        <Details open={titulo=="Componentes"}>
          <summary ><a href={"/componentes/"}>Componentes</a></summary>
          <ol type="1">
            <Li modo={modo} href="/componentes/" regiao={regiao}>Componentes</Li>
          </ol>
        </Details>
        <Details open={titulo=="Eu"}>
          <summary><a href={StringModo+"/eu/?regiao="+regiao}>Quem Sou Eu</a></summary>
          <ol type="1">
            <Li modo={modo} href="/eu/curriculo/" regiao={regiao}>Curriculo</Li>
          </ol>
        </Details>
      </nav>

      <style jsx>{`
      /*a {
        text-decoration: none;
        font-style: normal;
        color: #ffffff;
          }
          */
      .CssRotasProjeto {
        width: 100%;
        font-size: 17px;
      }
      /* summary {
            border-radius: 8px;
            color: #ffffff;
            display: block;
            font-size: 16px;
            height: 25px;
            width: 90%;
            margin: 0;
            padding: 0px;
            padding-top: 5px;
            padding-left: 5px;
            -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
            -moz-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
            box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
          }
      summary:hover {
        padding-left: 9px;
        background-color: #1d2033;
          }
      */
      ol {
            width: 100%;
            list-style-type: none;
          }
      /* li {
            border-radius: 8px;
            color: #ffffff;
            display: block;
            font-size: 16px;
            height: 25px;
            width: 85%;
            margin-top: 4px;
            margin-left: -9px;
            padding: 0px;
            padding-top: 5px;
            padding-left: 5px;
            -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
            -moz-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
            box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
          } 
      li:hover {
        border: solid 2px blue;
        padding-left: 9px;
        background-color: #1d2033;
          }
      */
    `}</style>
    </div>
  )
}

export default ListadeRotas
