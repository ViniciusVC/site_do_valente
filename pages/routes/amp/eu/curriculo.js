import React from 'react';
import { withAmp } from 'next/amp';
//import { useAmp } from 'next/amp' //(Não neste projeto)
import * as Util from '../../../../controller/util.js';
import TemplateCurriculo from '../../../../components/templates/eu/curriculo.js';

const RotaCurriculoAMP = function(props){
  return(
    <TemplateCurriculo
      modo="amp"
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//query={props.url.query}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaCurriculoAMP); // Usado para páginas AMP
//export default withAmp(RotaCurriculoAMP, { hybrid: true });
//export default RotaCurriculoAMP // Usado para páginas HTMP
