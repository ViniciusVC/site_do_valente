import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import TemplaSQL from '../../../../../components/templates/codigo/bancodedados/sql.js';
import * as Util from '../../../../../controller/util.js';

const RotaSQL = function(props){
  //var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplaSQL
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaSQL, { hybrid: true });
export default withAmp(RotaSQL);
//export default RotaSQL