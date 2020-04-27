import React from 'react'
import Link from 'next/link'
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
          <summary><Link href={StringModo+"/?regiao="+regiao}>Home</Link></summary>
          <ol type="1">
          <li><Link href={"/?regiao="+regiao}>Home (Pagina em HTML)</Link></li>
          <li><Link href={"/amp/?regiao="+regiao}>Home (Pagina em AMP)</Link></li>
          </ol>
        </Details>

        <Details open={titulo=="Codigo"}>
          <summary>Codigo</summary>
          
          <Details open={categoria=="html"}>
              <summary ><Link href={StringModo+"/codigo/html/?regiao="+regiao}>HTML</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>HTML5 Introdução</Link></li>
                <li><Link href={StringModo+"/amp/codigo/html5/?regiao="+regiao}>HTML5 Introdução (Pagina AMP)</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Estrutura da Página HTML5</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Titulo, Parágrafo e Quebra de Linha</Link></li>
                <li><Link href={StringModo+"/codigo/html/lista01/?regiao="+regiao}>Listas Não ordenada</Link></li>
                <li><Link href={StringModo+"/codigo/html/lista02/?regiao="+regiao}>Listas Ordenada (type=1)</Link></li>
                <li><Link href={StringModo+"/codigo/html/lista03/?regiao="+regiao}>Listas Ordenada (type=A)</Link></li>
                <li><Link href={StringModo+"/codigo/html/lista04/?regiao="+regiao}>Listas Ordenada (type=i)</Link></li>
                <li><Link href={StringModo+"/codigo/html/lista05/?regiao="+regiao}>Listas Ordenada (type=I)</Link></li>
                <li><Link href={StringModo+"/codigo/html/lista06/?regiao="+regiao}>Listas Com descrição</Link></li>
                <li><Link href={StringModo+"/codigo/html/img/?regiao="+regiao}>Imagens</Link></li>
                <li><Link href={StringModo+"/codigo/html/img/?regiao="+regiao}>Imagem MAP</Link></li>
                <li><Link href={StringModo+"/codigo/html/img/?regiao="+regiao}>Figure e Figcaption</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Iframe</Link></li>
                <li><Link href={StringModo+"/codigo/html/links/?regiao="+regiao}>Links</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Tabelas</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Tabelas Style</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Div e Span</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Comentários</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Midia Audio</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Midia Vídeo</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Midia Video (Criando legendas)</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Midia Object</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulários</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário com legenda)</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário atributos</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário campos: radio e checkbox)</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário campos: Number, Range e Color)</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário Autocomplete e Placeholder</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário Types: File, Hidden, Search, URL, Tel</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário Types Date, Time, Month, Week, Datetime local</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário Textarea, Spellcheck</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário Button</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário Select, Optgroup</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulários Datalist)</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulários Form, Formaction, Formmethod, Formenctype, Formnovalidate</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário Mark e Contenteditable</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário Tabindex e Accesskey</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Formulário Campo (Keygen)</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Details</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Hgroup</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Meter e Progresse</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Tag link</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Time e Datetime</Link></li>
                <li><Link href={StringModo+"/codigo/html/?regiao="+regiao}>Menu e Menuitem</Link></li>
                <li><Link href={StringModo+"/codigo/html/svg/?regiao="+regiao}>SVG rect</Link></li>
                <li><Link href={StringModo+"/codigo/html/svg/?regiao="+regiao}>SVG ellipse, text</Link></li>
                <li><Link href={StringModo+"/codigo/html/svg/?regiao="+regiao}>SVG line, polygon, polyline</Link></li>
                <li><Link href={StringModo+"/codigo/html/carrosel01/?regiao="+regiao}>Carrosel 01</Link></li>
                <li><Link href={StringModo+"/codigo/html/carrosel02/?regiao="+regiao}>Carrosel 02</Link></li>
                <li><Link href={StringModo+"/codigo/html/semantica/?regiao="+regiao}>Semantica</Link><br />
                </li>
              </ol>
            </Details>            
            
            <Details open={categoria=="CSS"}>
              <summary><Link href={StringModo+"/codigo/css/?regiao="+regiao}>CSS</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/css/?regiao="+regiao}>Introdução ao CSS</Link></li>
                <li><Link href={StringModo+"/codigo/css/css02/?regiao="+regiao}>Estilizando textos</Link></li>
                <li><Link href={StringModo+"/codigo/css/css03/?regiao="+regiao}>Imagens de fundo e atributo text</Link></li>
                <li><Link href={StringModo+"/codigo/css/css04/?regiao="+regiao}>Links e Divs</Link></li>
                <li><Link href={StringModo+"/codigo/css/css05/?regiao="+regiao}>Classe, ID e Span</Link></li>
                <li><Link href={StringModo+"/codigo/css/css06/?regiao="+regiao}>Margin, padding e floatAula</Link></li>
                <li><Link href={StringModo+"/codigo/css/css07/?regiao="+regiao}>Posicionamento de elementos, bordas e z-index</Link></li>
                <li><Link href={StringModo+"/codigo/css/css08/?regiao="+regiao}>Efeitos com o atributo hover</Link></li>
                <li><Link href={StringModo+"/codigo/css/css09/?regiao="+regiao}>Herança</Link></li>
                <li><Link href={StringModo+"/codigo/css/css10/?regiao="+regiao}>Criando um menu com listas</Link></li>
                <li><Link href={StringModo+"/codigo/css/css11/?regiao="+regiao}>Menu drop-down</Link></li>
                <li><Link href={StringModo+"/codigo/css/css12/?regiao="+regiao}>Validação e Web Standards</Link></li>
                <li><Link href={StringModo+"/codigo/css/css13/?regiao="+regiao}>Tabelas Style</Link></li>
                <li><Link href={StringModo+"/codigo/css/anima_but/?regiao="+regiao}>Exemplos Anima But</Link></li>
              </ol>
            </Details>
            
            <Details open={categoria=="Python"}>
              <summary><Link href={StringModo+"/codigo/python/?regiao="+regiao}>Python</Link></summary>
            </Details>

            <Details open={categoria=="Apache"}>
              <summary><Link href={StringModo+"/codigo/apache/?regiao="+regiao}>Apache</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/apache/instalubuntu?regiao="+regiao}>Instalar Apache no Ubuntu</Link></li>
                <li><Link href={StringModo+"/codigo/apache/alias?regiao="+regiao}>Alias em Apache</Link></li>
                <li><Link href={StringModo+"/codigo/apache/redirect?regiao="+regiao}>redirect 301 em Apache</Link></li>
              </ol>
            </Details>
            <Details open={categoria=="ASP"}>
              <summary><Link href={StringModo+"/codigo/asp/?regiao="+regiao}>ASP</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/asp/?regiao="+regiao}>ASP</Link></li>
                <li><Link href={StringModo+"/codigo/asp/redirect?regiao="+regiao}>redirect 301 em ASP</Link></li>
              </ol>
            </Details>
            <Details open={categoria=="CGI PERL"}>
              <summary><Link href={StringModo+"/codigo/cgi/?regiao="+regiao}>CGI PERL</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/cgi/redirect?regiao="+regiao}>redirect 301 em CGI</Link></li>
              </ol>
            </Details>
            <Details open={categoria=="ColdFusion"}>
              <summary><Link href={StringModo+"/codigo/coldfusion/?regiao="+regiao}>ColdFusion</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/coldfusion/?regiao="+regiao}>redirect 301 em ColdFusion</Link></li>
              </ol>
            </Details>
            <Details open={categoria=="JavaScript"}>
              <summary><Link href={StringModo+"/codigo/javascript?regiao="+regiao}>JavaScript</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/javascript?regiao="+regiao}>JS JavaScript</Link></li>
                <li><Link href={StringModo+"/codigo/javascript?regiao="+regiao}>JS JavaScript</Link></li>
                <li><Link href={StringModo+"/codigo/javascript?regiao="+regiao}>JS JavaScript</Link></li>
              </ol>
            </Details>
            <Details open={categoria=="Java"}>
              <summary><Link href={StringModo+"/codigo/java/?regiao="+regiao}>Java</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/java/?regiao="+regiao}>Java</Link></li>
                <li><Link href={StringModo+"/codigo/java/?regiao="+regiao}>redirect 301 em JSP</Link></li>
              </ol>
            </Details>

            <Details open={categoria=="knockout"}>
              <summary><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 01</Link></li>
                <li><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 02</Link></li>
                <li><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 03</Link></li>
                <li><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 04</Link></li>
                <li><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 05</Link></li>
                <li><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 06</Link></li>
              </ol>
            </Details>

            <Details open={categoria==".Net"}>
              <summary><Link href={StringModo+"/codigo/dotnet/?regiao="+regiao}>.NET</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/dotnet/?regiao="+regiao}>.NET</Link></li>
                <li><Link href={StringModo+"/codigo/dotnet/?regiao="+regiao}>redirect 301 em ASP.NET</Link></li>
              </ol>
            </Details>

            <Details open={categoria=="PHP"}>
              <summary><Link href={StringModo+"/codigo/php/?regiao="+regiao}>PHP</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/php/?regiao="+regiao}>PHP</Link></li>
                <li><Link href={StringModo+"/codigo/php/redirect/?regiao="+regiao}>redirect 301 no PHP</Link></li>
                <li><Link href={StringModo+"/codigo/php/procuraarquivo/?regiao="+regiao}>encontrar arquivio no PHP</Link></li>
                <li><Link href={StringModo+"/codigo/php/procuradiretorio/?regiao="+regiao}>encontrar diretorio no PHP</Link></li>
              </ol>
            </Details>

            <Details open={categoria=="Ruby on Rails"}>
              <summary><Link href={StringModo+"/codigo/rubyonrails/?regiao="+regiao}>Ruby on Rails</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/rubyonrails/?regiao="+regiao}>redirect 301 em Ruby on Rails</Link></li>
              </ol>
            </Details>
        </Details>

        <Details open={titulo=="Utilitarios"}>
          <summary><Link href={StringModo+"/utilitarios/?regiao="+regiao}>Utilitarios</Link></summary>
          <ol type="1">
            <li><Link href={StringModo+"/utilitarios/conversordetexto?regiao="+regiao}>Conversor de Texto</Link></li>
            <li><Link href={StringModo+"/utilitarios/conversordeunidade?regiao="+regiao}>Conversor de Unidade</Link></li>
            <li><Link href={StringModo+"/utilitarios/servicosgratuitos?regiao="+regiao}>Servicos Gratuitos</Link></li> 
          </ol>
        </Details>

        <Details open={titulo=="Games"}>
          <summary><Link href={StringModo+"/game/?regiao="+regiao}>Games</Link></summary>
          <ol type="1">
            <li><Link href={StringModo+"/game/controleogodzilla?regiao="+regiao}>GAME - Controle O Godzilla</Link></li>
            <li><Link href={StringModo+"/game/tanque?regiao="+regiao}>GAME - Tanque</Link></li>
          </ol>
        </Details>

        {/* <Details open={titulo=="outros"}>
          <summary><Link href={StringModo+"/hub/?regiao="+regiao}>Hub de Contato</Link></summary>
        </Details> */}

        <Details open={titulo=="Componentes"}>
          <summary ><Link href={"/componentes/"}>Componentes</Link></summary>
          <ol type="1">
            <li><Link href={StringModo+"/componentes/?regiao="+regiao}>Componentes</Link></li>
          </ol>
        </Details>
        <Details open={titulo=="Eu"}>
          <summary><Link href={StringModo+"/eu/?regiao="+regiao}>Quem Sou Eu</Link></summary>
          <ol type="1">
            <li><Link href={StringModo+"/eu/curriculo/?regiao="+regiao}>Curriculo</Link></li>
          </ol>
        </Details>
      </nav>

      <style jsx>{`
      .CssRotasProjeto {
        width: 100%;
        font-size: 17px;
      }
      summary {
            background-color: #ffffff;
            border-radius: 8px;
            color: #222222;
            display: block;
            font-size: 16px;
            height: 25px;
            width: 90%;
            border: solid 2px #dbdbdb;
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
        background-color: #dbdbdb;
          }
      ol {
            width: 100%;
          }
      li {
            background-color: #ffffff;
            border-radius: 8px;
            color: #222222;
            display: block;
            font-size: 16px;
            height: 25px;
            width: 85%;
            border: solid 1px #dbdbdb;
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
        background-color: #dbdbdb;
          }
    `}</style>
    </div>
  )
}

export default ListadeRotas
