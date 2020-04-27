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
    <Div display="justificado">
        <div className="logo">
          <a href={StringModo+"/?regiao="+regiao} >
            <Img src="/static/assetsv5/img/log_laranja1.png" width="50px" height="50px" alt="Logo Site Valente" title="Logo Site Valente" class="LogoSiteValente" modo={modo} />
          </a>
        </div>
        <div className='TitulodoSite'>
          <span>Site do Valente</span>
        </div>
        <div className="esconder">
            <MenuMobile01 modo={modo}/>
          </div>
        <div>
            <MoRegiao modo={modo} regiao={regiao} />
        </div>
      <style jsx>{`
      .logo{
        margin:0px;
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
      .TitulodoSite{
        padding-top: 15px;
        font-size: 25px;
        font-family: sans-serif;
        text-align: center;
        font-size: 60px;
      }

      @media(min-width: 900px) {
        .esconder{
          display : None;
        }
      }

      @media(max-width: 900px) {
        .TitulodoSite {
          display : None;
        }
        .logo{
          display : None;
        }
      }
    `}</style>
    </Div>
  )
}

export default moHeaderSideDoValente
