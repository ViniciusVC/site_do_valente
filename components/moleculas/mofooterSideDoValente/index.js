import React from 'react'
import Img from '../../atoms/atImg/index.js';
import Div from '../../atoms/atDiv'
import MoRegiao from '../moRegiao/index.js'
import BtLink from '../../atoms/atBtLink'
//import MenuMobile01 from '../moMenuMobile01/index.js'

//import * as Util from '../../../controller/util.js';
//console.log('moHeaderSideDoValente ');

const moFooterSideDoValente = function (props) {
  const regiao = props.regiao;
  const modo = props.modo;
  const btestilo = props.btestilo;
  //const JsonRegiao = Util.regiao(regiao);
  var StringModo = "";
  if(modo=="AMP" || modo=="amp"){
    StringModo = "/amp";
  }
  console.log('* Header do Valente | modo='+modo+ ' | regiao='+regiao);

  return (
    <Div display="responsivo">

        <div className="logo">
          <a href={StringModo+"/?regiao="+regiao} >
            <Img src="/static/assetsv5/img/logo_vvc.png" width="100px" height="100px" alt="Logo Site Valente" title="Logo Site Valente" class="LogoSiteValente" modo={modo} />
          </a>
        </div>
        <div>
          <Div display="responsivo">
            <div className="footerColuna">
              <BtLink href={StringModo+"/?regiao="+regiao} value="Home" estilo={btestilo}/>
              <BtLink href={StringModo+"/tutorial/?regiao="+regiao} value="Tutoriais" estilo={btestilo}/>
            </div>
            <div className="footerColuna">
              <BtLink href={StringModo+"/utilitarios/?regiao="+regiao} value="Utilitarios" estilo={btestilo}/>
              <BtLink href={StringModo+"/game/?regiao="+regiao} value="Jogos" estilo={btestilo}/>                  
            </div>    
            <div className="footerColuna">
              <BtLink href="https://sites.google.com/view/vvc-estudio/home" value="Design" estilo={btestilo}/>
              <BtLink href={StringModo+"/eu/?regiao="+regiao} value="Autor" estilo={btestilo}/>       
            </div>
          </Div>
          <Div display="horizontal">
            <div>
              Visite outros canais :
            </div>
            <div>
              <a href="https://web.facebook.com/designervvc" >
                <Img src="/static/assetsv5/img/facebook.jpg" width="24px" height="24px" alt="facebook" title="Facebook Designer VVC" class="LogoFacebook" modo={modo} />
              </a>
            </div>
            <div>
              <a href="https://sites.google.com/view/vvc-estudio/" >
                <Img src="/static/assetsv5/img/sitesgoogle.jpg" width="24px" height="24px" alt="sites google" title="Site Google VVC estudio" class="LogoSitesgoogle" modo={modo} />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/user/vvcestudio" >
                <Img src="/static/assetsv5/img/youtube.jpg" width="24px" height="24px" alt="Youtube" title="Youtube VVC Estudio" class="LogoYoutube" modo={modo} />
              </a>
            </div>
            <div>
              <a href="https://br.pinterest.com/viniciusvalente/modelagem-3d-do-valente/" >
                <Img src="/static/assetsv5/img/pinterest.jpg" width="24px" height="24px" alt="Pinterest" title="Pinterest Modelagem 3d" class="LogoPinterest" modo={modo} />
              </a>
            </div>
          </Div>  
              © 2020 VVC Studio. Todos os direitos reservados.
        </div>
        
        <div className="FooterdoSite">
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
      
      .footerColuna{
        min-width: 155px;
      }

      .FooterdoSite{
        right: 0px;
        float: right;
        padding-top: 15px;
        text-align: right;
      }
    `}</style>
    </Div>
  )
}

export default moFooterSideDoValente


//© 2020 VVC Estudio. All Rights Reserved. 
//© 2020 VVC Studio. Todos os direitos reservados.
