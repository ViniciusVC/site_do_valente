import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../../controller/util.js';
import TableteJavasJava from '../../../../components/templates/codigo/index.js';

const RotaJavasJava = function(props){
  return(
    <TableteJavasRedirect
      modo="amp"
      cidade={Util.validaProps(props.cidade,"Rio de Janeiro")}/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaJavasJava); // Usado para páginas AMP
//export default withAmp(RotaRotaJavasJava, { hybrid: true }); // Usado para páginas hibridas
//export default RotaRotaJavasJava // Usado para páginas HTMP