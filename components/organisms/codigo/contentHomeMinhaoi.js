// content do Atendimento - Layout Minha-Oi
import React from 'react';
import * as Util from '../../../controller/util.js';
import HomeSession1 from '../../moleculas/codigo/moHomeSession1.js';
import HomeSession2 from '../../moleculas/codigo/moHomeSession2.js';
import HomeSession3 from '../../moleculas/codigo/moHomeSession3.js';


const contentHomeMinhaOi = props => {
  var modo = Util.validaProps(props.modo,"html");
  //var regiao = Util.validaProps(props.regiao,"RJ");
  return(
      <div className="contentHomeMinhaOi">
        <HomeSession1 modo={modo}/>
        <HomeSession2 modo={modo}/>
        <HomeSession3 modo={modo}/>
        <style jsx>{`
        .contentHomeMinhaOi {
          margin:30px;
          max-width:1330px;
          justify-content: center;
          align-items: center
          /*margin: 70px 300px 40px 300px;*/
          /*margin-left: 30px;
            margin-right: 30px;*/
        }
      `}</style>
      </div>
  )
};
export default contentHomeMinhaOi