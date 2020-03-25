import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../../../controller/util.js';
import TemplateCSS from '../../../../../components/templates/codigo/css/css.js';

const RotaCSS = function(props){
  return(
    <TemplateCSS
      modo="amp"
      cidade={Util.validaProps(props.cidade,"Rio de Janeiro")}/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaCSS); // Usado para páginas AMP
//export default withAmp(RotaRotaJavasCript, { hybrid: true }); // Usado para páginas hibridas
//export default RotaRotaJavasCript // Usado para páginas HTMP