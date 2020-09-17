import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../../controller/util.js';
import TableteCodigo from '../../../../components/templates/codigo/index.js';

const RotaCodigo = function(props){
  return(
    <TableteCodigo
      modo="amp"
      regiao={Util.validaProps(props.regiao,"RJ")}/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaCodigo);
//export default withAmp(RotaDocumentoscopiaAjuda, { hybrid: true }); // Usado para páginas hibridas
//export default RotaDocumentoscopiaAjuda // Usado para páginas HTMP