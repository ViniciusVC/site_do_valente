import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../../controller/util.js';
import TemplateHtml5 from '../../../../components/templates/codigo/html5.js';

const RotaHtml5AMP = function(props){
  return(
    <TemplateHtml5
      modo="amp"
      cidade={Util.validaProps(props.cidade,"Rio de Janeiro")}/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaHtml5AMP); // Usado para páginas AMP
//export default withAmp(RotaHtml5AMP, { hybrid: true }); // Usado para páginas hibridas
//export default RotaHtml5AMP // Usado para páginas HTMP