import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import TemplateApache from '../../../../../components/templates/codigo/apache';
import * as Util from '../../../../../controller/util.js';


const RotaHomeAMP = function(props){
  return(
    <TemplateApache 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

// //Usado para páginas hibridas (Não neste projeto)
// export const config = {
//   amp: true
// }

//export default withAmp(RotaHomeAMP, { hybrid: true }); // Usado para páginas hibridas (Não neste projeto)
export default withAmp(RotaHomeAMP); // Usado para páginas AMP
//export default RotaHomeAMP // Usado para páginas HTMP