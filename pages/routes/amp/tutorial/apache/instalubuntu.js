import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import TemplateInstalUbuntu from '../../../../../components/templates/codigo/apache/instalaUbuntu.js';
import * as Util from '../../../../../controller/util.js';


const RotaInstalUbuntuAMP = function(props){
  return(
    <TemplateInstalUbuntu
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

// //Usado para páginas hibridas (Não neste projeto)
// export const config = {
//   amp: true
// }

//export default withAmp(RotaInstalUbuntuAMP, { hybrid: true }); // Usado para páginas hibridas (Não neste projeto)
export default withAmp(RotaInstalUbuntuAMP); // Usado para páginas AMP
//export default RotaInstalUbuntuAMP // Usado para páginas HTMP