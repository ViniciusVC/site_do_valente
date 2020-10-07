import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import TemplateMatplotlib from '../../../../../components/templates/codigo/python/matplotlib.js';
import * as Util from '../../../../../controller/util.js';

const RotaMatplotlib = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateMatplotlib
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaMatplotlib, { hybrid: true });
export default withAmp(RotaMatplotlib);
//export default RotaMatplotlib