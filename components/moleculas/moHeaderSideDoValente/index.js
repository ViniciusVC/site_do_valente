import React from 'react'
import Img from '../../atoms/atImg/index.js';
import Div from '../../atoms/atDiv'
import MoRegiao from '../moRegiao/index.js'
import MenuMobile01 from '../moMenuMobile01/index.js'

//import * as Util from '../../../controller/util.js';
//console.log('moHeaderSideDoValente ');

const moHeaderSideDoValente = function (props) {
  const regiao = props.regiao;
  const modo = props.modo;
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
            <Img src="/static/assetsv5/img/logo_vvc.png" width="100px" height="100px" alt="Logo Site Valente" title="Logo Site Valente" class="LogoSiteValente" modo={modo} />
          </a>
        </div>

        <div className="TitulodoSite headerpc">
          <span>VVC Estudio</span>
        </div>

        <div className="heaermob">
            <MenuMobile01 modo={modo}/>
        </div>

        <div>
          <p></p>
          <MoRegiao modo={modo} regiao={regiao} />
         
        </div>
        
      <style jsx>{`
      .logo{
        margin:0px;
        padding-top: 10px;
        /*animation-delay: 2s;*/
        animation-duration: 3s;
        animation-name: slideinSombra;
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
      .TitulodoSite{
        color: #10ecf5;
        padding-top: 15px;
        font-size: 20px;
        font-family: sans-serif;
        text-align: center;
        font-size: 60px;
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
