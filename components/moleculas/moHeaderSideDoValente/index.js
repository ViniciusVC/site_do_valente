import React from 'react'
import Img from '../../atoms/atImg/index.js';
import Div from '../../atoms/atDiv'
import MoRegiao from '../moRegiao/index.js'
import MenuMobile01 from '../moMenuMobile01/index.js'

//import * as Util from '../../../controller/util.js';
//console.log('moHeaderSideDoValente ');

const moHeaderSideDoValente = function (props) {
  const titulo = props.titulo;
  const regiao = props.regiao;
  const modo = props.modo;
  const btestilo="neon";
  const btestiloitem="neonItem";
  //const JsonRegiao = Util.regiao(regiao);
  var StringModo = "";
  if(modo=="AMP" || modo=="amp"){
    StringModo = "/amp";
  }
  console.log('* Header do Valente | modo='+modo+ ' | regiao='+regiao);

  return (
    <Div display="responsivo">

        <div className="logo headerpc">
          <a href={StringModo+"/?regiao="+regiao} >
            <Img 
              src="/static/assetsv5/img/logo_vvc.png" 
              width="100px" 
              height="100px" 
              alt="Logo Site Valente" 
              title="Logo Site Valente" 
              class="LogoSiteValente" 
              modo={modo} 
            />
          </a>
        </div>

        <div className="TitulodoSite headerpc">
          <h2>{titulo}</h2>
        </div>

        <div className="heaermob">
            <MenuMobile01 
              modo={modo} 
              regiao={regiao}
              titulo={titulo}
              btestilo={btestilo} 
              btestiloitem={btestiloitem}
              janelaestilo="neon"
            />
        </div>

        <div>
          <p></p>
          <MoRegiao 
            modo={modo} 
            regiao={regiao} 
          />
        </div>
        
      <style jsx>{`
      .logo{
        margin:0px;
        padding-top: 10px;
        /*animation-delay: 2s;*/
        animation-duration: 3s;
        animation-name: slideinSombra;
      }
      h2{
        color: #10ecf5;
        padding-top: 0px;
        font-size: 30px;
        font-family: sans-serif;
        text-align: center;
      }
      @keyframes slideinSombra {
        0% {
            opacity: 0.0;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1.0;
          }
        }
        

      @media(min-width: 1169px) {
        .heaermob{
          display : None;
        }
      }

      @media(max-width: 1169px) {
        .headerpc{
          display : None;
        }
      }
    `}</style>
    </Div>
  )
}

export default moHeaderSideDoValente
