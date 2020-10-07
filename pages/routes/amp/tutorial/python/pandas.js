import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import TemplatePandas from '../../../../../components/templates/codigo/python/pandas.js';
import * as Util from '../../../../../controller/util.js';

const RotaPython = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplatePandas
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaPython, { hybrid: true });
export default withAmp(RotaPython);
//export default RotaPython