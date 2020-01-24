
import React from 'react';
import * as Util from '../../../../controller/util.js';
import { withAmp } from 'next/amp';

import TemplateCurriculo from '../../../../components/templates/curriculo.js';

const RotaCurriculoAMP = function(props){
  return(
    <TemplateCurriculo
      modo="amp"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
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
