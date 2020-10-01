import React from 'react'
import Div from '../../atoms/atDiv'
import Img from '../../atoms/atImg/index.js';
import ListadeRotas from '../moListadeRotas/index.js'
import Janela from '../moJanela/index.js'
//import HeaderSideDoValente from '../moHeaderSideDoValente/index.js'
import MenuMobile01 from '../moMenuMobile01/index.js'
import FooterSideDoValente from '../mofooterSideDoValente/index.js'
import * as Util from '../../../controller/util.js';
import GTM from '../../atoms/atGTM';

const layout = props => {
  console.log('Rodando /layout.js Luz Verde');
  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = props.modo;
  var titulo = Util.validaProps(props.titulo, "Home");
  var categoria = Util.validaProps(props.categoria, "Outros");

  //Layout Luz verde
  return (
    <div className="CSSLayout">
      <GTM position="body" modo={modo} codGTM="UA-143307429-1" />
      <div className="HeaderEu centraliza"> 
        <div className="HeaderEu2 tamanhoPagina">
          <Div display="justificado">
          <div>
            <MenuMobile01 
              modo={modo} 
              regiao={regiao}
              titulo={titulo}
              btestilo="azul" 
              btestiloitem="azul"
              janelaestilo="claro"
            />
          </div>
          <div>
              vvcestudio.com.br
          </div>
          <div>
            <Div display="horizontal">
              <div>
                Me visite em outros canais :
              </div>
              <div>
                <a href="https://www.linkedin.com/in/vin%C3%ADcius-valente-51989523/" >
                  <Img src="/static/assetsv5/img/linkedin.png" width="24px" height="24px" alt="linkedin" title="Linkedin do Vinicius Valente" class="LogoLinkedin" modo={modo} />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/vinivalente" >
                  <Img src="/static/assetsv5/img/facebook.jpg" width="24px" height="24px" alt="facebook" title="Facebook do Vinicius Valente" class="LogoFacebook" modo={modo} />
                </a>
              </div>
              <div>
                <a href="http://sites.google.com/view/viniciusvalente/" >
                  <Img src="/static/assetsv5/img/sitesgoogle.jpg" width="24px" height="24px" alt="sites google" title="Site do Vinicius Valente" class="LogoSitesgoogle" modo={modo} />
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/channel/UC1nFOA6zm_XGbiO1xjFk9BQ?view_as=subscriber" >
                  <Img src="/static/assetsv5/img/youtube.jpg" width="24px" height="24px" alt="Youtube" title="Canal Youtube Vinicius Valente" class="LogoYoutube" modo={modo} />
                </a>
              </div>
              <div>
                <a href="https://br.pinterest.com/viniciusvalente/_saved/" >
                  <Img src="/static/assetsv5/img/pinterest.jpg" width="24px" height="24px" alt="Pinterest" title="Pinterest Vinicius Valente" class="LogoPinterest" modo={modo} />
                </a>
              </div>
            </Div>
          </div>  
          </Div>
        </div>
      </div>
      <div className="centraliza">
      <div className="tamanhoPagina">
      <Div display="vertical">
        <Div display="justificado">
          <div className="layoutBody">
              <div className="fundoEu"></div>
              <Janela estilo="claro">
                
                <div className="conteudo">
                {props.children}
                </div>
              </Janela>
          </div>      
          <div className="layoutManu esconder">
            <Janela estilo="claro">
                <ListadeRotas regiao={regiao} modo={modo} titulo={titulo} categoria={categoria} btestilo="azul" btestiloitem="azul"/>
            </Janela>
          </div>
        </Div>
        <Janela estilo="claro">
                <FooterSideDoValente regiao={regiao} modo={modo} btestilo="azul"/>
        </Janela>
        </Div>
      </div>
      </div>
      <style jsx>{`
       .fundoEu{
         height: 200px;
         width:100%; 
         background-image: url("/static/assetsv5/img/fundoeu.jpg");
       }
      .centraliza{
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        
      }
      .tamanhoPagina{
        width:100%;
        max-width : 1128px;
        margin : 0px;
        padding : 0px;
      }
      .HeaderEu{
        color: #ffffff;
        background-color: #283e4a;
        width:100%;
        
      }
      .HeaderEu2{
        min-height: 100%;
      }
      .CSSLayout{
        color: #ffffff;
        width:100%;
        margin : 0px;
        padding : 0px;
      }
      .layoutManu{
        margin-top: 40px;
        width: 25%;
        /*padding-left:2%;*/
      }
      .layoutBody{
        width: 71%;
        margin-top: 40px;
        padding-bottom:10px;
      }
      @media(max-width: 1169px) {
        .layoutManu{
          display : None;
        }
        .layoutBody{
          width: 100%;
          margin-top: 5px;
        }
      }
    `}</style>
      <style jsx global>{`
        ${Util.fontesCSS1()}
        body{
          margin: 0px;
          padding: 0px;
          background-color: #f5f5f5;
          color: #000000;
          font-family: SimplonBP-Regular, sans-serif;       
        }
    `}</style>
    </div>
  )
}

export default layout

// ${Util.fontesCSS2()}
// ${Util.fontesCSS3()}
// ${Util.fontesCSS4()}
// ${Util.fontesCSS5()}
//Não esqueça de do GTM do body.