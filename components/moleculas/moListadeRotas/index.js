import React from 'react'
//import a from 'next/a'
import Details from '../../atoms/atDetails'
import BtLink from '../../atoms/atBtLink'
import ListadeRotasHTML from './listaHTML.js'
import Li from './itemMenu.js';
import * as Util from "../../../controller/util.js";
//import Li from './itemMenu.js';

//consdive.log('Instanciando templates/index.js');
const ListadeRotas = function (props) {
  var regiao = Util.validaProps(props.regiao, "RJ");
  const modo = props.modo;
  const titulo = Util.validaProps(props.titulo, "nenhum");
  const categoria = Util.validaProps(props.categoria, "nenhum");
  const btestilo = props.btestilo;
  const btestiloitem = props.btestiloitem;
  
  var ParamentroURL = "?regiao="+regiao;
  if(modo=="AMP" || modo=="amp"){
    ParamentroURL = "?amp=1";
  }
  
  //Layout Luz Verde
  return (
    <div className='CssRotasProjeto'>
      <nav>
        <Details open={titulo=="Home"}>
          <summary><BtLink href="" value="Home" estilo={btestilo}/></summary>
          <div className="subitens">
            <Li modo="html" href="/" regiao={regiao} estilo={btestiloitem}>"Pagina em HTML"</Li>
            <Li modo="amp" href="/" regiao={regiao} estilo={btestiloitem}>"Pagina em AMP"</Li>
          </div>
        </Details>

        <Details open={titulo=="Utilitarios"}>
          <summary><BtLink href="" value="Utilitarios" estilo={btestilo}/></summary>
          <div className="subitens">
            <BtLink href={"/utilitarios/"+ParamentroURL} value="Utilitarios" estilo={btestiloitem}/>
            <BtLink href={"/utilitarios/conversordetexto/"+ParamentroURL} value="Converta Textos" estilo={btestiloitem}/>
            <BtLink href={"/utilitarios/conversordeunidade/"+ParamentroURL} value="Converta Unidades" estilo={btestiloitem}/>
            {/*<BtLink href={"/utilitarios/conversorunicode/"+ParamentroURL} value="Converta Unicode" estilo={btestiloitem}/>*/}
            <BtLink href={"/utilitarios/servicosgratuitos/"+ParamentroURL} value="Servicos Gratuitos" estilo={btestiloitem}/>
          </div>
        </Details>

        <Details open={titulo=="Games"}>
          <summary><BtLink href="" value="Games" estilo={btestilo}/></summary>
          <div className="subitens">
            <BtLink href={"/game/"+ParamentroURL} value="Games do valente" estilo={btestiloitem}/>

            <BtLink href={"/game/cristalbot/"+ParamentroURL} value="Cristal Bot" estilo={btestiloitem}/>

            <BtLink href={"/game/controleogodzilla/"+ParamentroURL} value="Controle o Godzilla" estilo={btestiloitem}/>
            <BtLink href={"/game/tanque/"+ParamentroURL} value="Tanque de Guerra" estilo={btestiloitem}/>
            <BtLink href={"/game/ecossistema/"+ParamentroURL} value="Ecossistema" estilo={btestiloitem}/>
            <BtLink href={"/game/cobrinha/"+ParamentroURL} value="Cobrinha" estilo={btestiloitem}/>
          </div>
        </Details>

        <Details open={titulo=="Tutoriais"}>
        
          <summary><BtLink href="" value="Tutoriais" estilo={btestilo}/></summary>
          <div className="subitens">
          <BtLink href={"/tutorial/"+ParamentroURL} value="Código intro" estilo={btestiloitem}/>

            <Details open={categoria=="html"}>
              <summary><BtLink href="" value="HTML" estilo={btestilo}/></summary>
              <div className="subitens">
                <ListadeRotasHTML modo={modo} regiao={regiao} btestiloitem={btestiloitem}/>
              </div>
            </Details>     

            <Details open={categoria=="SVG"}>
              <summary><BtLink href="" value="SVG" estilo={btestilo}/></summary>
              <div className="subitens">
               <BtLink href={"/tutorial/html/svg01/"+ParamentroURL} value="SVG rect" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/html/svg02/"+ParamentroURL} value="SVG ellipse, text" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/html/svg03/"+ParamentroURL} value="Line Polygon" estilo={btestiloitem}/>
              </div>
            </Details>     

            <Details open={categoria=="CSS"}>
              <summary><BtLink href="" value="CSS" estilo={btestilo}/></summary>
              <div className="subitens">
               <BtLink href={"/tutorial/css/"+ParamentroURL} value="Introdução ao CSS" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/css02/"+ParamentroURL} value="Estilizando textos" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/css03/"+ParamentroURL} value="Imagens de fundo" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/css04/"+ParamentroURL} value="Link e Divs" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/css05/"+ParamentroURL} value="Classe, ID e Span" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/css06/"+ParamentroURL} value="Margin, padding e floatAula" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/css07/"+ParamentroURL} value="Posição e z-index" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/css08/"+ParamentroURL} value="Efeito hover" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/css09/"+ParamentroURL} value="Herança" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/css10/"+ParamentroURL} value="Menu com listas" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/css11/"+ParamentroURL} value="Menu drop-down" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/css12/"+ParamentroURL} value="Validação" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/css13/"+ParamentroURL} value="Tabelas Style" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/css/anima_but/"+ParamentroURL} value="Exemplos Anima But" estilo={btestiloitem}/>
              </div>
            </Details>
            
            <Details open={categoria=="Python"}>
              <summary><BtLink href="" value="Python" estilo={btestilo}/></summary>
              <div className="subitens">
                <BtLink href={"/tutorial/python/"+ParamentroURL} value="Python intro." estilo={btestiloitem}/>
                <BtLink href={"/tutorial/python/Pandas/"+ParamentroURL} value="Pandas" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/python/NumPy/"+ParamentroURL} value="Numpy" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/python/matplotlib/"+ParamentroURL} value="matplotlib" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/python/seaborn/"+ParamentroURL} value="seaborn" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/python/jupyter/"+ParamentroURL} value="Jupyter" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/python/anaconda/"+ParamentroURL} value="Anaconda" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/python/sklearn/"+ParamentroURL} value="Scikit-learn" estilo={btestiloitem}/>
              </div>
            </Details>

            <Details open={categoria=="JavaScript"}>
              <summary><BtLink href="" value="JavaScript" estilo={btestilo}/></summary>
              <div className="subitens">
               <BtLink href={"/tutorial/javascript"+ParamentroURL} value="JS JavaScript" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/javascript/nodejs"+ParamentroURL} value="Node.JS" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/javascript/reactjs"+ParamentroURL} value="React.JS" estilo={btestiloitem}/>
               <BtLink href={"/componentes/"+ParamentroURL} value="Componentes React" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/javascript/nextjs"+ParamentroURL} value="Next.JS" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/javascript/knockout/"+ParamentroURL} value=">knockout" estilo={btestiloitem}/>
              </div>
            </Details>
            
            <BtLink href={"/tutorial/java/"+ParamentroURL} value="Java" estilo={btestiloitem}/>
               
            <Details open={categoria=="ASP"}>
              <summary><BtLink href="" value="ASP" estilo={btestilo}/></summary>
              <div className="subitens">
               <BtLink href={"/tutorial/asp/"+ParamentroURL} value="ASP introdução" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/asp/redirect"+ParamentroURL} value="redirect 301" estilo={btestiloitem}/>
              </div>
            </Details>
            
            {/* <Details open={categoria==".Net"}>
              <summary><BtLink href="" value=".NET >" estilo={btestilo}/></summary>
              <div className="subitens">
               <BtLink href={"/tutorial/dotnet/"+ParamentroURL} value=".NET" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/dotnet/"+ParamentroURL} value="redirect 301 em ASP.NET" estilo={btestiloitem}/>
              </div>
            </Details> */}

            <Details open={categoria=="PHP"}>
              <summary><BtLink href="" value="PHP" estilo={btestilo}/></summary>
              <div className="subitens">
                <BtLink href={"/tutorial/php/"+ParamentroURL} value="PHP intro" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/php/redirect/"+ParamentroURL} value="redirect 301 no PHP" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/php/procuraarquivo/"+ParamentroURL} value="encontrar arquivio no PHP" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/php/procuradiretorio/"+ParamentroURL} value="encontrar diretorio no PHP" estilo={btestiloitem}/>
              </div>
            </Details>

            <BtLink href={"/tutorial/rubyonrails/"+ParamentroURL} value="Ruby on Rails" estilo={btestiloitem}/>
                
            <BtLink href={"/tutorial/coldfusion/"+ParamentroURL} value="coldfusion intro." estilo={btestiloitem}/>

            <Details open={categoria=="Apache"}>
              <summary><BtLink href="" value="Apache" estilo={btestilo}/></summary>
              <div className="subitens">
                <BtLink href={"/tutorial/apache/"+ParamentroURL} value="Apache intro." estilo={btestiloitem}/>
               <BtLink href={"/tutorial/apache/instalubuntu"+ParamentroURL} value="Instalar no Ubuntu" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/apache/alias"+ParamentroURL} value="Alias em Apache" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/apache/redirect"+ParamentroURL} value="redirect 301" estilo={btestiloitem}/>
              </div>
            </Details>
            <Details open={categoria=="CGI"}>
              <summary><BtLink href="" value="CGI PERL" estilo={btestilo}/></summary>
              <div className="subitens">
               <BtLink href={"/tutorial/cgi/"+ParamentroURL} value="CGI introdução" estilo={btestiloitem}/>
               <BtLink href={"/tutorial/cgi/redirect"+ParamentroURL} value="redirect 301" estilo={btestiloitem}/>
              </div>
            </Details>

            <Details open={categoria=="Banco de Dados"}>
              <summary><BtLink href="" value="Dados" estilo={btestilo}/></summary>
              <div className="subitens">
                <BtLink href={"/tutorial/bancodedados/"+ParamentroURL} value="Banco de Dados" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/bancodedados/sql/"+ParamentroURL} value="SQL" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/bancodedados/mysql/"+ParamentroURL} value="MySQL" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/bancodedados/datascience/"+ParamentroURL} value="Cientista de Dados" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/bancodedados/hadoop/"+ParamentroURL} value="Hadoop" estilo={btestiloitem}/>
              </div>
            </Details>

            <Details open={categoria=="SEO"}>
              <summary><BtLink href="" value="SEO" estilo={btestilo}/></summary>
              <div className="subitens">
                <BtLink href={"/tutorial/seo/"+ParamentroURL} value="SEO" estilo={btestiloitem}/>
                <BtLink href={"/tutorial/seo/amp/"+ParamentroURL} value="AMP" estilo={btestiloitem}/>
              </div>
            </Details>
            </div>
        </Details>

        <Details open={titulo=="Design"}>
          <summary><BtLink href="" value="Design" estilo={btestilo}/></summary>
          <div className="subitens">
            <BtLink href="https://sites.google.com/view/vvc-estudio/home" value="Design" estilo={btestiloitem}/>
            <BtLink href="https://sites.google.com/view/vvc-estudio/maquete-3d" value="Maquete 3d" estilo={btestiloitem}/>
            <BtLink href="https://sites.google.com/view/vvc-estudio/modelagem-3d" value="Modelagem 3d" estilo={btestiloitem}/>
            <BtLink href="https://sites.google.com/view/vvc-estudio/logos" value="logos" estilo={btestiloitem}/>
            <BtLink href="https://sites.google.com/view/vvc-estudio/ilustra%C3%A7%C3%B5es" value="Ilustrações" estilo={btestiloitem}/>
            <BtLink href="https://sites.google.com/view/vvc-estudio/layout-web" value="layout Web" estilo={btestiloitem}/>
          </div>
        </Details>

        {/* <Details open={titulo=="outros"}>
          <summary><a href={"/hub/"+ParamentroURL}>Hub de Contato</a></summary>
        </Details> */}

        <Details open={titulo=="Eu"}>
          <summary><BtLink href="" value="Autor" estilo={btestilo}/></summary>
          <div className="subitens">
            <BtLink href={"/eu/"+ParamentroURL} value="Apresentação" estilo={btestiloitem}/>
            <BtLink href={"/eu/curriculo/"+ParamentroURL} value="Curriculo" estilo={btestiloitem}/>
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
        /*border-bottom : solid 1px #10ecf5;*/
        border-left: solid 2px #10ecf5;
      }
      .subitens:hover {
        transition-duration: 1s;
        /*border-bottom : solid 2px #ffffff;*/
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
