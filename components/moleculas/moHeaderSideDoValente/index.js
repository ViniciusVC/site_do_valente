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
  //console.log(JsonRegiao);
  console.log('╔══════════╗ regiao='+regiao);
  console.log('║  Header  ║ modo='+modo);
  //console.log('║          ║ estado='+JsonRegiao.estado);
  //console.log('╚══════════╝ capital='+JsonRegiao.capital);
  
  //Div display="DivLinhaResponsivo"
  return (
    <Div display="responsivo">
        <div className="DivHeaderSideDoValente logo">
          <a href={StringModo+"/?regiao="+regiao} >
            <Img src="/static/assetsv5/img/log_laranja1.png" width="50px" height="50px" alt="Logo Site Valente" title="Logo Site Valente" class="LogoSiteValente" modo={modo} />
          </a>
          <div className="esconder">
            <MenuMobile01 modo={modo}/>MENU
          </div>
        </div>
        <div className='DivHeaderSideDoValente pHeaderSideDoValente'>
          <span>Site do Valente</span>
        </div>
        <div>
            <MoRegiao modo={modo} regiao={regiao} />
        </div>
      <style jsx>{`
      .logo{
        padding-top: 10px;
        animation-duration: 1s;
        animation-name: slideinSombra;
      }
      @keyframes slideinSombra {
        from {
          padding-top: 0px;
        }
        to {
          padding-top: 10px;
        }
      }

      .DivHeaderSideDoValente{
        margin:0px;
      }
      .pHeaderSideDoValente{
        padding-top: 15px;
        font-size: 25px;
        font-family: sans-serif;
        text-align: center;
      }

      @media(min-width: 900px) {
        .pHeaderSideDoValente{
          font-size: 60px;
        }
        .esconder{
          display : None;
        }
      }

    `}</style>
    </Div>
  )
}

export default moHeaderSideDoValente
