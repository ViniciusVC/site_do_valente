import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import TemplateASPredirect from '../../../../../components/templates/codigo/seo/amp.js';
import * as Util from '../../../../../controller/util.js';


const RotaASP = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateASPredirect 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaASP, { hybrid: true });
export default withAmp(RotaASP);
//export default RotaASP