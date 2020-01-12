import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../../controller/util.js';
import TableteJavasCript from '../../../../components/templates/codigo/index.js';

const RotaJavasCript = function(props){
  return(
    <TableteJavasCript
      modo="amp"
      cidade={Util.validaProps(props.cidade,"Rio de Janeiro")}/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaJavasCript); // Usado para páginas AMP
//export default withAmp(RotaRotaJavasCript, { hybrid: true }); // Usado para páginas hibridas
//export default RotaRotaJavasCript // Usado para páginas HTMP