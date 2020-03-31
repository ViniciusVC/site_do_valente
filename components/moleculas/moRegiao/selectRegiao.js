import React from 'react'
import OptRegiao from './optRegiao.js'
import * as Util from '../../../controller/util.js';

const moSelectRegiao = function (props) {
  const regiao = props.regiao;
  const modo = props.modo;
  const JsonRegiao = Util.regiao(regiao);

  // var stringModo = "";
  // if(modo=="AMP" || modo=="amp"){
  //   stringModo = "/amp";
  // }

  console.log(JsonRegiao);
  console.log('╔══════════╗ regiao='+regiao);
  console.log('║  Select  ║ modo='+modo);
  console.log('║          ║ estado='+JsonRegiao.estado);
  console.log('╚══════════╝ capital='+JsonRegiao.capital);
  
    if(modo=="AMP" || modo=="amp"){
      return (
        <span>{'Região(Estado) :'+JsonRegiao.sigla+'-'+JsonRegiao.estado}<br/></span>
      )
    }else{
      console.log('Região(Estado) : ' +JsonRegiao.sigla+'-'+JsonRegiao.estado+ ')');
      return(
        <form id="formregiao" name="formregiao" method="GET">
        Região(Estado) : <br/>
        <select id="regiao" name="regiao" onChange={() => {document.getElementById("formregiao").submit()}}>
          <option value={JsonRegiao.sigla} select>{JsonRegiao.sigla+'-'+JsonRegiao.estado}</option>
          <OptRegiao modo={modo} regiao={regiao} JsonRegiao={JsonRegiao}></OptRegiao>
        </select>
      </form>
      )
    }

}

export default moSelectRegiao
