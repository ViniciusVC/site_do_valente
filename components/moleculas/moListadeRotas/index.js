import React from 'react'
//import a from 'next/a'
import Details from '../../atoms/atDetails'
import * as Util from "../../../controller/util.js";

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


  return (
    <div>
      <nav className='CssRotasProjeto'>
        
        <Details open={titulo=="Home"}>
          <summary><a href={StringModo+"/?regiao="+regiao}>Home</a></summary>
          <ol type="1">
          <li><a href={"/?regiao="+regiao} alert="Home (Pagina em HTML)">Pagina em HTML</a></li>
          <li><a href={"/amp/?regiao="+regiao} alert="Home (Pagina em AMP)">Pagina em AMP</a></li>
          </ol>
        </Details>

        <Details open={titulo=="Codigo"}>
          <summary>Codigo</summary>
          
          <Details open={categoria=="html"}>
              <summary ><a href={StringModo+"/codigo/html/?regiao="+regiao}>HTML</a></summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/html/?regiao="+regiao}>HTML5 Introdução</a></li>
                <li><a href={StringModo+"/codigo/html/semantica/?regiao="+regiao}>Estrutura da Página</a></li>
                <li><a href={StringModo+"/codigo/html/h1_p_br/?regiao="+regiao}>Titulo, Parágrafo e Quebra</a></li>
                <li><a href={StringModo+"/codigo/html/lista01/?regiao="+regiao}>Listas Não ordenada</a></li>
                <li><a href={StringModo+"/codigo/html/lista02/?regiao="+regiao}>Listas Ordenada (type=1)</a></li>
                <li><a href={StringModo+"/codigo/html/lista03/?regiao="+regiao}>Listas Ordenada (type=A)</a></li>
                <li><a href={StringModo+"/codigo/html/lista04/?regiao="+regiao}>Listas Ordenada (type=i)</a></li>
                <li><a href={StringModo+"/codigo/html/lista05/?regiao="+regiao}>Listas Ordenada (type=I)</a></li>
                <li><a href={StringModo+"/codigo/html/lista06/?regiao="+regiao}>Listas Com descrição</a></li>
                <li><a href={StringModo+"/codigo/html/img/?regiao="+regiao}>Imagem</a></li>        
                <li><a href={StringModo+"/codigo/html/img_figcaption/?regiao="+regiao}>Figure e Figcaption</a></li>
                <li><a href={StringModo+"/codigo/html/iframe/?regiao="+regiao}>Iframe</a></li>
                <li><a href={StringModo+"/codigo/html/links/?regiao="+regiao}>Links - tag A</a></li>
                <li><a href={StringModo+"/codigo/html/tabela/?regiao="+regiao}>Tabelas</a></li>
                <li><a href={StringModo+"/codigo/css/css13/?regiao="+regiao}>Tabelas Style</a></li>
                <li><a href={StringModo+"/codigo/html/div_span/?regiao="+regiao}>Div e Span</a></li>
                <li><a href={StringModo+"/codigo/html/comentario/?regiao="+regiao}>Comentários</a></li>
                <li><a href={StringModo+"/codigo/html/meta/?regiao="+regiao}>Meta Tag</a></li>
                {/* <li><a href={StringModo+"/codigo/html/?regiao="+regiao}>Midia Audio</a></li>*/}
                {/* <li><a href={StringModo+"/codigo/html/?regiao="+regiao}>?Midia Vídeo</a></li>*/}
                {/* <li><a href={StringModo+"/codigo/html/?regiao="+regiao}>?Midia Video (Criando legendas)</a></li>*/}
                {/* <li><a href={StringModo+"/codigo/html/?regiao="+regiao}>?Midia Object</a></li> */}
                <li><a href={StringModo+"/codigo/html/form01/?regiao="+regiao}>Formulários</a></li>
                <li><a href={StringModo+"/codigo/html/form02/?regiao="+regiao}>Formulário com legenda</a></li>
                <li><a href={StringModo+"/codigo/html/form03/?regiao="+regiao}>Formulário atributos</a></li>
                <li><a href={StringModo+"/codigo/html/form04/?regiao="+regiao}>Form: radio e checkbox</a></li>
                <li><a href={StringModo+"/codigo/html/form05/?regiao="+regiao}>Form: Number Range Color</a></li>
                <li><a href={StringModo+"/codigo/html/form06/?regiao="+regiao}>Form: Date, Time</a></li>
                <li><a href={StringModo+"/codigo/html/form07/?regiao="+regiao}>Formulário Button</a></li>
                <li><a href={StringModo+"/codigo/html/form08/?regiao="+regiao}>Form: Select, Optgroup</a></li>
                <li><a href={StringModo+"/codigo/html/form09/?regiao="+regiao}>Formulários Datalist</a></li>
                <li><a href={StringModo+"/codigo/html/form10/?regiao="+regiao}>Formulário Keygen</a></li>
                <li><a href={StringModo+"/codigo/html/form11/?regiao="+regiao}>Formulário sbmit externo</a></li>
                {/* <li><a href={StringModo+"/codigo/html/form01/?regiao="+regiao}>?Formulário Autocomplete e Placeholder</a></li>*/}
                {/* <li><a href={StringModo+"/codigo/html/form01/?regiao="+regiao}>?Formulário Types: File, Hidden, Search, URL, Tel</a></li>*/}
                {/* <li><a href={StringModo+"/codigo/html/form01/?regiao="+regiao}>?Formulário Textarea, Spellcheck</a></li>*/}
                {/* <li><a href={StringModo+"/codigo/html/form01/?regiao="+regiao}>?Formulários Form, Formaction, Formmethod, Formenctype, Formnovalidate</a></li> */}
                <li><a href={StringModo+"/codigo/html/mark/?regiao="+regiao}>Mark e Contenteditable</a></li>
                <li><a href={StringModo+"/codigo/html/tabindexaccesskey/?regiao="+regiao}>Tabindex e Accesskey</a></li>
                <li><a href={StringModo+"/codigo/html/details/?regiao="+regiao}>Details</a></li>
                <li><a href={StringModo+"/codigo/html/hgroup/?regiao="+regiao}>Hgroup</a></li>
                <li><a href={StringModo+"/codigo/html/meterprogress/?regiao="+regiao}>Meter e Progresse</a></li>
                <li><a href={StringModo+"/codigo/html/links/?regiao="+regiao}>Tag a</a></li>
                <li><a href={StringModo+"/codigo/html/map/?regiao="+regiao}>Imagem MAP</a></li>          
                <li><a href={StringModo+"/codigo/html/timedatetime/?regiao="+regiao}>Time e Datetime</a></li>
                <li><a href={StringModo+"/codigo/html/semantica/?regiao="+regiao}>Semantica</a></li>
                <li><a href={StringModo+"/codigo/html/canvas/?regiao="+regiao}>Canvas</a></li>
              </ol>
            </Details>     

            <Details open={categoria=="SVG"}>
              <summary>SVG</summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/html/svg01/?regiao="+regiao}>SVG rect</a></li>
                <li><a href={StringModo+"/codigo/html/svg02/?regiao="+regiao}>SVG ellipse, text</a></li>
                <li><a href={StringModo+"/codigo/html/svg03/?regiao="+regiao}>SVG line, polygon, polyline</a></li>
              </ol>
            </Details>     

            <Details open={categoria=="CSS"}>
              <summary><a href={StringModo+"/codigo/css/?regiao="+regiao}>CSS</a></summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/css/css01/?regiao="+regiao}>Introdução ao CSS</a></li>
                <li><a href={StringModo+"/codigo/css/css02/?regiao="+regiao}>Estilizando textos</a></li>
                <li><a href={StringModo+"/codigo/css/css03/?regiao="+regiao}>Imagens de fundo</a></li>
                <li><a href={StringModo+"/codigo/css/css04/?regiao="+regiao}>Link e Divs</a></li>
                <li><a href={StringModo+"/codigo/css/css05/?regiao="+regiao}>Classe, ID e Span</a></li>
                <li><a href={StringModo+"/codigo/css/css06/?regiao="+regiao}>Margin, padding e floatAula</a></li>
                <li><a href={StringModo+"/codigo/css/css07/?regiao="+regiao}>Posição e z-index</a></li>
                <li><a href={StringModo+"/codigo/css/css08/?regiao="+regiao}>Efeito hover</a></li>
                <li><a href={StringModo+"/codigo/css/css09/?regiao="+regiao}>Herança</a></li>
                <li><a href={StringModo+"/codigo/css/css10/?regiao="+regiao}>Menu com listas</a></li>
                <li><a href={StringModo+"/codigo/css/css11/?regiao="+regiao}>Menu drop-down</a></li>
                <li><a href={StringModo+"/codigo/css/css12/?regiao="+regiao}>Validação</a></li>
                <li><a href={StringModo+"/codigo/css/css13/?regiao="+regiao}>Tabelas Style</a></li>
                <li><a href={StringModo+"/codigo/css/anima_but/?regiao="+regiao}>Exemplos Anima But</a></li>
              </ol>
            </Details>
            
            <Details open={categoria=="Python"}>
              <summary><a href={StringModo+"/codigo/python/?regiao="+regiao}>Python</a></summary>
            </Details>

            <Details open={categoria=="Apache"}>
              <summary><a href={StringModo+"/codigo/apache/?regiao="+regiao}>Apache</a></summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/apache/instalubuntu?regiao="+regiao}>Instalar Apache no Ubuntu</a></li>
                <li><a href={StringModo+"/codigo/apache/alias?regiao="+regiao}>Alias em Apache</a></li>
                <li><a href={StringModo+"/codigo/apache/redirect?regiao="+regiao}>redirect 301 em Apache</a></li>
              </ol>
            </Details>
            <Details open={categoria=="ASP"}>
              <summary><a href={StringModo+"/codigo/asp/?regiao="+regiao}>ASP</a></summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/asp/?regiao="+regiao}>ASP</a></li>
                <li><a href={StringModo+"/codigo/asp/redirect?regiao="+regiao}>redirect 301 em ASP</a></li>
              </ol>
            </Details>
            <Details open={categoria=="CGI"}>
              <summary><a href={StringModo+"/codigo/cgi/?regiao="+regiao}>CGI PERL</a></summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/cgi/redirect?regiao="+regiao}>redirect 301 em CGI</a></li>
              </ol>
            </Details>
            <Details open={categoria=="ColdFusion"}>
              <summary><a href={StringModo+"/codigo/coldfusion/?regiao="+regiao}>ColdFusion</a></summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/coldfusion/?regiao="+regiao}>redirect 301 em ColdFusion</a></li>
              </ol>
            </Details>
            <Details open={categoria=="JavaScript"}>
              <summary><a href={StringModo+"/codigo/javascript?regiao="+regiao}>JavaScript</a></summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/javascript?regiao="+regiao}>JS JavaScript</a></li>
                <li><a href={StringModo+"/codigo/javascript?regiao="+regiao}>JS JavaScript</a></li>
                <li><a href={StringModo+"/codigo/javascript?regiao="+regiao}>JS JavaScript</a></li>
              </ol>
            </Details>
            <Details open={categoria=="Java"}>
              <summary><a href={StringModo+"/codigo/java/?regiao="+regiao}>Java</a></summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/java/?regiao="+regiao}>Java</a></li>
                <li><a href={StringModo+"/codigo/java/?regiao="+regiao}>redirect 301 em JSP</a></li>
              </ol>
            </Details>

            <Details open={categoria=="knockout"}>
              <summary><a href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS</a></summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 01</a></li>
                <li><a href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 02</a></li>
                <li><a href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 03</a></li>
                <li><a href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 04</a></li>
                <li><a href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 05</a></li>
                <li><a href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 06</a></li>
              </ol>
            </Details>

            <Details open={categoria==".Net"}>
              <summary><a href={StringModo+"/codigo/dotnet/?regiao="+regiao}>.NET</a></summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/dotnet/?regiao="+regiao}>.NET</a></li>
                <li><a href={StringModo+"/codigo/dotnet/?regiao="+regiao}>redirect 301 em ASP.NET</a></li>
              </ol>
            </Details>

            <Details open={categoria=="PHP"}>
              <summary><a href={StringModo+"/codigo/php/?regiao="+regiao}>PHP</a></summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/php/?regiao="+regiao}>PHP</a></li>
                <li><a href={StringModo+"/codigo/php/redirect/?regiao="+regiao}>redirect 301 no PHP</a></li>
                <li><a href={StringModo+"/codigo/php/procuraarquivo/?regiao="+regiao}>encontrar arquivio no PHP</a></li>
                <li><a href={StringModo+"/codigo/php/procuradiretorio/?regiao="+regiao}>encontrar diretorio no PHP</a></li>
              </ol>
            </Details>

            <Details open={categoria=="Ruby on Rails"}>
              <summary><a href={StringModo+"/codigo/rubyonrails/?regiao="+regiao}>Ruby on Rails</a></summary>
              <ol type="1">
                <li><a href={StringModo+"/codigo/rubyonrails/redirect/?regiao="+regiao}>redirect 301 em Ruby on Rails</a></li>
              </ol>
            </Details>
        </Details>

        <Details open={titulo=="Utilitarios"}>
          <summary><a href={StringModo+"/utilitarios/?regiao="+regiao}>Utilitarios</a></summary>
          <ol type="1">
            <li><a href={StringModo+"/utilitarios/conversordetexto?regiao="+regiao}>Conversor de Texto</a></li>
            <li><a href={StringModo+"/utilitarios/conversordeunidade?regiao="+regiao}>Conversor de Unidade</a></li>
            <li><a href={StringModo+"/utilitarios/conversorUnicode?regiao="+regiao}>Conversor Unicode</a></li>
            <li><a href={StringModo+"/utilitarios/servicosgratuitos?regiao="+regiao}>Servicos Gratuitos</a></li> 
          </ol>
        </Details>

        <Details open={titulo=="Games"}>
          <summary><a href={StringModo+"/game/?regiao="+regiao}>Games</a></summary>
          <ol type="1">
            <li><a href={StringModo+"/game/controleogodzilla?regiao="+regiao}>Controle O Godzilla</a></li>
            <li><a href={StringModo+"/game/tanque?regiao="+regiao}>Tanque de Guerra</a></li>
            <li><a href={StringModo+"/game/ecossistema?regiao="+regiao}>Ecossistema</a></li>
          </ol>
        </Details>

        {/* <Details open={titulo=="outros"}>
          <summary><a href={StringModo+"/hub/?regiao="+regiao}>Hub de Contato</a></summary>
        </Details> */}

        <Details open={titulo=="Componentes"}>
          <summary ><a href={"/componentes/"}>Componentes</a></summary>
          <ol type="1">
            <li><a href={StringModo+"/componentes/?regiao="+regiao}>Componentes</a></li>
          </ol>
        </Details>
        <Details open={titulo=="Eu"}>
          <summary><a href={StringModo+"/eu/?regiao="+regiao}>Quem Sou Eu</a></summary>
          <ol type="1">
            <li><a href={StringModo+"/eu/curriculo/?regiao="+regiao}>Curriculo</a></li>
          </ol>
        </Details>
      </nav>

      <style jsx>{`
      a {
        text-decoration: none;
        font-style: normal;
        color: #ffffff;
          }
      .CssRotasProjeto {
        width: 100%;
        font-size: 17px;
      }
      summary {
            border-radius: 8px;
            color: #ffffff;
            display: block;
            font-size: 16px;
            height: 25px;
            width: 90%;
            /*border: solid 2px #dbdbdb;*/
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
      ol {
            width: 100%;
          }
      li {
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
    `}</style>
    </div>
  )
}

export default ListadeRotas
