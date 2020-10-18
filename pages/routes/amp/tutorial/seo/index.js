import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import TemplateASP from '../../../../../components/templates/codigo/seo/index.js';
import * as Util from '../../../../../controller/util.js';

const RotaASP = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateASP
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaASP, { hybrid: true });
export default withAmp(RotaASP);
//export default RotaASP