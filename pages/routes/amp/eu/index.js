
import React from 'react';
import * as Util from '../../../../controller/util.js';
import { withAmp } from 'next/amp';

import Eu from '../../../../components/templates/eu/index.js';

const RotaEuAMP = function(props){
  return(
    <Eu
      modo="amp"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

//query={props.url.query}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaEuAMP); // Usado para páginas AMP
//export default withAmp(RotaEuAMP, { hybrid: true });
//export default RotaEuAMP // Usado para páginas HTMP
