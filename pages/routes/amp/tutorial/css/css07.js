import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../../../controller/util.js';
import TemplateCSS02 from '../../../../../components/templates/codigo/css/css07.js';

const RotaCSS02 = function(props){
  return(
    <TemplateCSS02
      modo="amp"
      regiao={Util.validaProps(props.regiao,"RJ")}/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaCSS02); // Usado para páginas AMP
//export default withAmp(RotaCSS02, { hybrid: true }); // Usado para páginas hibridas
//export default RotaCSS02 // Usado para páginas HTMP