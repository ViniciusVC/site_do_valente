import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import TemplaBD from '../../../../../components/templates/codigo/bancodedados/index.js';
import * as Util from '../../../../../controller/util.js';

const RotaBD = function(props){
  //var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplaBD
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaBD, { hybrid: true });
export default withAmp(RotaBD);
//export default RotaBD