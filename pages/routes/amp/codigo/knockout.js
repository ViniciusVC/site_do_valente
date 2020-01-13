import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../../controller/util.js';
import TemblateKnockout from '../../../../components/templates/codigo/knockout.js';

const RotaKnockout = function(props){
  return(
    <TemblateKnockout
      modo="amp"
      cidade={Util.validaProps(props.cidade,"Rio de Janeiro")}/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaKnockout); // Usado para páginas AMP
//export default withAmp(RotaKnockout, { hybrid: true }); // Usado para páginas hibridas
//export default RotaKnockout // Usado para páginas HTMP