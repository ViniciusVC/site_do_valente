import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import TemplaMySQL from '../../../../../components/templates/codigo/bancodedados/mysql.js';
import * as Util from '../../../../../controller/util.js';

const RotaMySQL = function(props){
  //var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplaMySQL
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaMySQL, { hybrid: true });
export default withAmp(RotaMySQL);
//export default RotaMySQL