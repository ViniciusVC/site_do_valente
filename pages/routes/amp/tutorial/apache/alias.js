import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import TemplateAlias from '../../../../../components/templates/codigo/apache/alias.js';
import * as Util from '../../../../../controller/util.js';



const RotaAliasAmp = function(props){
  return(
    <TemplateAlias 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

// //Usado para páginas hibridas (Não neste projeto)
// export const config = {
//   amp: true
// }

//export default withAmp(RotaAliasAmp, { hybrid: true }); // Usado para páginas hibridas (Não neste projeto)
export default withAmp(RotaAliasAmp); // Usado para páginas AMP
//export default RotaAliasAmp // Usado para páginas HTMP