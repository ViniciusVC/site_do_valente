import React from 'react';
import { withAmp } from 'next/amp';
//import { useAmp } from 'next/amp' //(Não neste projeto)
import * as Util from '../../../../controller/util.js';

import Templategame from '../../../../components/templates/game/controleogodzilla.js';

const RotaGameAMP = function(props){
  return(
    <Templategame
      modo="amp"
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//query={props.url.query}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaGameAMP); // Usado para páginas AMP
//export default withAmp(RotaGameAMP, { hybrid: true });
//export default RotaGameAMP // Usado para páginas HTMP
