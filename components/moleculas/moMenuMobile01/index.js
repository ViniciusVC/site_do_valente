// layout de Documentoscopia - Projeto Piloto
import React from 'react';
//import Img from '../../atoms/atImg/index.js';
//import BtLink from '../../atoms/atBtLink/index.js';
import * as Util from '../../../controller/util.js';
import Icon from '../../atoms/atIcon/index.js'
//import MenuMobileItens from '../moMenuMobileItens.js'
import ListadeRotas from '../moListadeRotas/index.js'


const MenuMobile01 = props => {
  var modo = Util.validaProps(props.modo,"html");
  
  if(modo=="html"||modo=="HTML"){
    function fechalightboxMenu(){
      document.getElementById("contMenuMobiles").style.display = "none";
    }
    function abrirlightboxMenu(){
      document.getElementById("contMenuMobiles").style.display = "block";
    }
    return(
      <div>
        <div className="contMenuMobile" id="contMenuMobiles">
              <div id="lightboxMenu" className="lightboxMenu" >
                <div className="close"  role="button" tabindex="0">
                  <a onClick={() => {fechalightboxMenu()}}>
                    <Icon type="close" color="#000000" />
                  </a>
                </div>
                <ListadeRotas/>
              </div>
          </div>
        <div>
            <a onClick={() => {abrirlightboxMenu()}}>
              <Icon type="menu" color="#000000" width="25px"/>
            </a>
        </div>
        <style jsx>{`
            .contMenuMobile{
              position: fixed;
              z-index: 1000;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              background: rgba(0,0,0,0.6) none repeat scroll 0% 0%;
              display:none;
              animation: abremenu 1s ease 0s 1 normal none running;
            }
            @keyframes abremenu{
              0% {
                left: -100px;
                opacity: 0;
              }
              100% {
                left: 0px;
                opacity: 1;
              }
            }
            .lightboxMenu {
              margin : 10px;
              height: 100vh;
              width: 86vw;
              border-radius: 8px;
           
              box-shadow: rgba(0, 0, 0, 1.3) 0px 0px 15px;
              background: white;
              transition: all 0.3s ease 0s;
              overflow-y: scroll;
              background-color: #ffffff;
              background-image: linear-gradient(180deg, #ffffff, #ffffff, #bdb8a7 );
              padding: 10px;
            }

            .closeMenu {
              margin-bottom : 20px;
              border-left:100px;
              top:5px;
              font-family: arial;    
              position: relative;
              flex-direction: row-reverse;
              display: flex;
              padding: 0px;
            }
        `}</style>
      </div>
    )
  }else{
    //if(modo=="amp"||modo=="AMP")
    return(
      <div>
          <amp-lightbox id="PopupMenu" layout="nodisplay">
            <div className="lightboxMenu" >
              <span className="closeMenu" on="tap:PopupMenu.close" role="button" tabindex="0">
                <Icon type="close" color="#000000" />
              </span>
              <ListadeRotas/>
            </div>
          </amp-lightbox>
          <div className="ampstart-btn caps m2" on="tap:PopupMenu" role="button" tabindex="0">
            <div>
              <Icon type="menu" color="#000000" width="25px"/>
            </div>
          </div>
        <style jsx>{`

            #PopupMenu{
              background: rgba(0, 0, 0, 0.6) none repeat scroll 0% 0%;
            }
            .lightboxMenu {
              margin : 10px;
              
              height: 100vh;
              width: 86vw;
              border-radius: 8px;
           
              box-shadow: rgba(0, 0, 0, 1.3) 0px 0px 15px;
              background: white;
              transition: all 0.3s ease 0s;
              overflow-y: scroll;
              background-color: #ffffff;
              background-image: linear-gradient(180deg, #ffffff, #ffffff, #bdb8a7 );
              padding: 10px;
             
            }
            .closeMenu {
              margin-bottom : 20px;
              left:5px;
              top:5px;
              font-family: arial;    
              justify-content: space-between;
              position: relative;
              flex-direction: row-reverse;
              display: flex;
              padding: 0px;
            }
        `}</style>
      </div>
      )
  }
};


export default MenuMobile01

