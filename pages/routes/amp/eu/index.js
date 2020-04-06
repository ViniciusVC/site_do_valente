import React from 'react';
import { withAmp } from 'next/amp';
//import { useAmp } from 'next/amp' //(Não neste projeto)
import * as Util from '../../../../controller/util.js';
import TemplatePagina from '../../../../components/templates/eu/index.js';

const RotaEuAMP = function(props){
  return(
    <TemplatePagina
      modo="amp"
      regiao={Util.validaProps(props.url.query.regiao,"RJ")
    }/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaEuAMP); // Usado para páginas AMP
//export default withAmp(RotaEuAMP, { hybrid: true });
//export default RotaEuAMP // Usado para páginas HTMP
