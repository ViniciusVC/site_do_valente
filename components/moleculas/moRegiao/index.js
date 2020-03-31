import React from 'react'
import SelectRegiao from './selectRegiao.js'
import * as Util from '../../../controller/util.js';
//console.log('moHeaderSideDoValente ');

const moHeaderSideDoValente = function (props) {
  const regiao = props.regiao;
  const modo = props.modo;
  const JsonRegiao = Util.regiao(regiao);
  // var StringModo = "";
  // if(modo=="AMP" || modo=="amp"){
  //   StringModo = "/amp";
  // }

  // console.log(JsonRegiao);
  // console.log('╔════════════╗ regiao='+regiao);
  // console.log('║  MoRegiao  ║ modo='+modo);
  // console.log('║            ║ estado='+JsonRegiao.estado);
  // console.log('╚════════════╝ capital='+JsonRegiao.capital);

  return (
    <span>
        Modo : {modo}<br/>
        <SelectRegiao modo={modo} regiao={regiao} />
        Cidade : {JsonRegiao.capital}
    </span>
  )
}

export default moHeaderSideDoValente
