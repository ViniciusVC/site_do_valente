import React from 'react';
import { withAmp } from 'next/amp';
//import { useAmp } from 'next/amp' //(Não neste projeto)
import * as Util from '../../../controller/util.js';
import Index from '../../../components/templates/index.js';

const RotaIndexAMP = function(props){
  return(
    <Index
      modo="amp"
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

// //Usado para páginas hibridas (Não neste projeto)
// export const config = {
//   amp: true
// }

export default withAmp(RotaIndexAMP); // Usado para páginas AMP (Não neste projeto)
//export default withAmp(RotaIndexAMP, { hybrid: true }); // Usado para páginas hibridas
//export default RotaIndexAMP // Usado para páginas HTMP
