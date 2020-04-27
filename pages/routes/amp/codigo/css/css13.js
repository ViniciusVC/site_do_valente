import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../../../controller/util.js';
import TemplateCSS01 from '../../../../../components/templates/codigo/css/css13.js';

const RotaCSS01 = function(props){
  return(
    <TemplateCSS01
      modo="amp"
      regiao={Util.validaProps(props.regiao,"RJ")}/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaCSS01); // Usado para páginas AMP
//export default withAmp(RotaCSS01, { hybrid: true }); // Usado para páginas hibridas
//export default RotaCSS01 // Usado para páginas HTMP