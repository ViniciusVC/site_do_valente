import React from 'react'
//import a from 'next/a'
import Details from '../../atoms/atDetails'
import BtLink from '../../atoms/atBtLink'
import ListadeRotasHTML from './listaHTML.js'
import * as Util from "../../../controller/util.js";
//import Li from './itemMenu.js';

//consdive.log('Instanciando templates/index.js');
const ListadeRotas = function (props) {
  const regiao = props.regiao;
  const modo = props.modo;
  const titulo = Util.validaProps(props.titulo, "nenhum");
  const categoria = Util.validaProps(props.categoria, "categoria");
  
  var StringModo = "";
  if(modo=="AMP" || modo=="amp"){
    StringModo = "/amp";
  }

  //Layout Luz Verde
  return (
    <div className='CssRotasProjeto'>
      <nav>
        <Details open={titulo=="Home"}>
          <summary><BtLink href="" value="Home >" estilo="luz"/></summary>
          <div className="subitens">
            <BtLink href={"/?regiao="+regiao} value="Pagina em HTML" estilo="itemLuzVerde"/>
            <BtLink href={"/amp/?regiao="+regiao} value="Pagina em AMP" estilo="itemLuzVerde"/>
          </div>
        </Details>

        <Details open={titulo=="Tutoriais"}>
        
          <summary><BtLink href="" value="Tutoriais >" estilo="luz"/></summary>
          <div className="subitens">
          <BtLink href={StringModo+"/tutorial/?regiao="+regiao} value="Código intro" estilo="itemLuzVerde"/>

            <Details open={categoria=="html"}>
              <summary><BtLink href="" value="HTML" estilo="luz"/></summary>
              <div className="subitens">
                <ListadeRotasHTML modo={modo} regiao={regiao}/>
              </div>
            </Details>     

            <Details open={categoria=="SVG"}>
              <summary><BtLink href="" value="SVG" estilo="luz"/></summary>
              <div className="subitens">
               <BtLink href={StringModo+"/tutorial/html/svg01/?regiao="+regiao} value="SVG rect" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/html/svg02/?regiao="+regiao} value="SVG ellipse, text" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/html/svg03/?regiao="+regiao} value="Line Polygon" estilo="itemLuzVerde"/>
              </div>
            </Details>     

            <Details open={categoria=="CSS"}>
              <summary><BtLink href="" value="CSS" estilo="luz"/></summary>
              <div className="subitens">
               <BtLink href={StringModo+"/tutorial/css/?regiao="+regiao} value="Introdução ao CSS" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/css02/?regiao="+regiao} value="Estilizando textos" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/css03/?regiao="+regiao} value="Imagens de fundo" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/css04/?regiao="+regiao} value="Link e Divs" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/css05/?regiao="+regiao} value="Classe, ID e Span" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/css06/?regiao="+regiao} value="Margin, padding e floatAula" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/css07/?regiao="+regiao} value="Posição e z-index" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/css08/?regiao="+regiao} value="Efeito hover" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/css09/?regiao="+regiao} value="Herança" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/css10/?regiao="+regiao} value="Menu com listas" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/css11/?regiao="+regiao} value="Menu drop-down" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/css12/?regiao="+regiao} value="Validação" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/css13/?regiao="+regiao} value="Tabelas Style" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/css/anima_but/?regiao="+regiao} value="Exemplos Anima But" estilo="itemLuzVerde"/>
              </div>
            </Details>
            
            
            <Details open={categoria=="Python"}>
              <summary><BtLink href="" value="Python" estilo="luz"/></summary>
              <div className="subitens">
                <BtLink href={StringModo+"/tutorial/python/?regiao="+regiao} value="Python intro." estilo="itemLuzVerde"/>
              </div>
            </Details>

            <Details open={categoria=="Apache"}>
              <summary><BtLink href="" value="Apache" estilo="luz"/></summary>
              <div className="subitens">
                <BtLink href={StringModo+"/tutorial/apache/?regiao="+regiao} value="Apache intro." estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/apache/instalubuntu?regiao="+regiao} value="Instalar no Ubuntu" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/apache/alias?regiao="+regiao} value="Alias em Apache" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/apache/redirect?regiao="+regiao} value="redirect 301" estilo="itemLuzVerde"/>
              </div>
            </Details>

            <Details open={categoria=="ASP"}>
              <summary><BtLink href="" value="ASP >" estilo="luz"/></summary>
              <div className="subitens">
               <BtLink href={StringModo+"/tutorial/asp/?regiao="+regiao} value="ASP introdução" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/asp/redirect?regiao="+regiao} value="redirect 301" estilo="itemLuzVerde"/>
              </div>
            </Details>

            <Details open={categoria=="CGI"}>
              <summary><BtLink href="" value="CGI PERL>" estilo="luz"/></summary>
              <div className="subitens">
               <BtLink href={StringModo+"/tutorial/cgi/?regiao="+regiao} value="CGI introdução" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/cgi/redirect?regiao="+regiao} value="redirect 301" estilo="itemLuzVerde"/>
              </div>
            </Details>

            <Details open={categoria=="Coldfusion"}>
              <summary><BtLink href="" value="coldfusion >" estilo="luz"/></summary>
              <div className="subitens">
                <BtLink href={StringModo+"/tutorial/coldfusion/?regiao="+regiao} value="coldfusion intro." estilo="itemLuzVerde"/>
                <BtLink href={StringModo+"/tutorial/coldfusion/?regiao="+regiao} value="redirect coldfusion" estilo="itemLuzVerde"/>
              </div>
            </Details>

            <Details open={categoria=="JavaScript"}>
              <summary><BtLink href="" value="JavaScript >" estilo="luz"/></summary>
              <div className="subitens">
               <BtLink href={StringModo+"/tutorial/javascript?regiao="+regiao} value="JS JavaScript" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/javascript?regiao="+regiao} value="JS JavaScript" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/javascript?regiao="+regiao} value="JS JavaScript" estilo="itemLuzVerde"/>
              </div>
            </Details>
            <Details open={categoria=="Java"}>

            <summary>
              <BtLink href="" value="Java >" estilo="luz"/></summary>
              <div className="subitens">
               <BtLink href={StringModo+"/tutorial/java/?regiao="+regiao} value="Java" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/java/?regiao="+regiao} value="redirect 301 em JSP" estilo="itemLuzVerde"/>
              </div>
            </Details>

            <Details open={categoria=="knockout"}>
              <summary><BtLink href="" value="knockout JS >" estilo="luz"/></summary>
              <div className="subitens">
               <BtLink href={StringModo+"/tutorial/knockout/?regiao="+regiao} value=">knockout" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/knockout/?regiao="+regiao} value="knockout JS exemplo 01" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/knockout/?regiao="+regiao} value="knockout JS exemplo 02" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/knockout/?regiao="+regiao} value="knockout JS exemplo 03" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/knockout/?regiao="+regiao} value="knockout JS exemplo 04" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/knockout/?regiao="+regiao} value="knockout JS exemplo 05" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/knockout/?regiao="+regiao} value="knockout JS exemplo 06" estilo="itemLuzVerde"/>
              </div>
            </Details>

            <Details open={categoria==".Net"}>
              <summary><BtLink href="" value=".NET >" estilo="luz"/></summary>
              <div className="subitens">
               <BtLink href={StringModo+"/tutorial/dotnet/?regiao="+regiao} value=".NET" estilo="itemLuzVerde"/>
               <BtLink href={StringModo+"/tutorial/dotnet/?regiao="+regiao} value="redirect 301 em ASP.NET" estilo="itemLuzVerde"/>
              </div>
            </Details>

            <Details open={categoria=="PHP"}>
              <summary><BtLink href="" value="PHP >" estilo="luz"/></summary>
              <div className="subitens">
                <BtLink href={StringModo+"/tutorial/php//?regiao="+regiao} value="PHP intro" estilo="itemLuzVerde"/>
                <BtLink href={StringModo+"/tutorial/php/redirect/?regiao="+regiao} value="redirect 301 no PHP" estilo="itemLuzVerde"/>
                <BtLink href={StringModo+"/tutorial/php/procuraarquivo/?regiao="+regiao} value="encontrar arquivio no PHP" estilo="itemLuzVerde"/>
                <BtLink href={StringModo+"/tutorial/php/procuradiretorio/?regiao="+regiao} value="encontrar diretorio no PHP" estilo="itemLuzVerde"/>
              </div>
            </Details>

            <Details open={categoria=="Ruby on Rails"}>
              <summary><BtLink href="" value="Ruby on Rails >" estilo="luz"/></summary>
              <div className="subitens">
                <BtLink href={StringModo+"/tutorial/rubyonrails/?regiao="+regiao} value="RubyonRails intro" estilo="itemLuzVerde"/>
                <BtLink href={StringModo+"/tutorial/rubyonrails/redirect/?regiao="+regiao} value="redirect RubyonRails" estilo="itemLuzVerde"/>
              </div>
            </Details>

            <Details open={categoria=="Componentes"}>
              <summary><BtLink href="" value="Componentes >" estilo="luz"/></summary>
              <div className="subitens">
                <BtLink href={StringModo+"/componentes/?regiao="+regiao} value="Deste projeto" estilo="itemLuzVerde"/>
              </div>
            </Details>

            </div>
        </Details>

        <Details open={titulo=="Utilitarios"}>
          <summary><BtLink href="" value="Utilitarios >" estilo="luz"/></summary>
          <div className="subitens">
            <BtLink href={StringModo+"/utilitarios/?regiao="+regiao} value="Utilitarios" estilo="itemLuzVerde"/>
            <BtLink href={StringModo+"/utilitarios/conversordetexto/?regiao="+regiao} value="Converta Textos" estilo="itemLuzVerde"/>
            <BtLink href={StringModo+"/utilitarios/conversordeunidade/?regiao="+regiao} value="Converta Unidades" estilo="itemLuzVerde"/>
            <BtLink href={StringModo+"/utilitarios/conversorunicode/?regiao="+regiao} value="Converta Unicode" estilo="itemLuzVerde"/>
            <BtLink href={StringModo+"/utilitarios/servicosgratuitos/?regiao="+regiao} value="Servicos Gratuitos" estilo="itemLuzVerde"/>
          </div>
        </Details>

        <Details open={titulo=="Games"}>
          <summary><BtLink href="" value="Games >" estilo="luz"/></summary>
          <div className="subitens">
            <BtLink href={"/game?regiao="+regiao} value="Games do valente" estilo="itemLuzVerde"/>

            <BtLink href={StringModo+"/game/cristalbot/?regiao="+regiao} value="Cristal Bot" estilo="itemLuzVerde"/>

            <BtLink href={StringModo+"/game/controleogodzilla/?regiao="+regiao} value="Controle o Godzilla" estilo="itemLuzVerde"/>
            <BtLink href={StringModo+"/game/tanque/?regiao="+regiao} value="Tanque de Guerra" estilo="itemLuzVerde"/>
            <BtLink href={StringModo+"/game/ecossistema/?regiao="+regiao} value="Ecossistema" estilo="itemLuzVerde"/>
            <BtLink href={StringModo+"/game/cobrinha/?regiao="+regiao} value="Cobrinha" estilo="itemLuzVerde"/>
          </div>
        </Details>

        <Details open={titulo=="Design"}>
          <summary><BtLink href="" value="Design >" estilo="luz"/></summary>
          <div className="subitens">
            <BtLink href="https://sites.google.com/view/vvc-estudio/home" value="Design" estilo="itemLuzVerde"/>
            <BtLink href="https://sites.google.com/view/vvc-estudio/maquete-3d" value="Maquete 3d" estilo="itemLuzVerde"/>
            <BtLink href="https://sites.google.com/view/vvc-estudio/modelagem-3d" value="Modelagem 3d" estilo="itemLuzVerde"/>
            <BtLink href="https://sites.google.com/view/vvc-estudio/logos" value="logos" estilo="itemLuzVerde"/>
            <BtLink href="https://sites.google.com/view/vvc-estudio/ilustra%C3%A7%C3%B5es" value="Ilustrações" estilo="itemLuzVerde"/>
            <BtLink href="https://sites.google.com/view/vvc-estudio/layout-web" value="layout Web" estilo="itemLuzVerde"/>
          </div>
        </Details>

        {/* <Details open={titulo=="outros"}>
          <summary><a href={StringModo+"/hub/?regiao="+regiao}>Hub de Contato</a></summary>
        </Details> */}



        <Details open={titulo=="Eu"}>
          <summary><BtLink href="" value="Autor >" estilo="luz"/></summary>
          <div className="subitens">
            <BtLink href={StringModo+"/eu/?regiao="+regiao} value="Apresentação" estilo="itemLuzVerde"/>
            <BtLink href={StringModo+"/eu/curriculo/?regiao="+regiao} value="Curriculo" estilo="itemLuzVerde"/>
          </div>
        </Details>
        
      </nav>

      <style jsx>{`
      
      /*a {
        text-decoration: none;
        font-style: normal;
        cdivor: #ffffff;
          }
      */

      .subitens{
        margin-left : 10px;
        border-bottom : solid 1px #10ecf5;
        border-left: solid 2px #10ecf5;
      }
      .subitens:hover {
        transition-duration: 1s;
        border-bottom : solid 2px #ffffff;
        border-left: solid 2px #FFFFFF;
      }
      .CssRotasProjeto {
        font-size: 17px;
      }

      summary::-webkit-details-marker{
        display: none;
      }

      summary {
        /*width: 100%;*/
        margin:0;
        padding:0;
      }


    `}</style>
    </div>
  )
}

export default ListadeRotas
