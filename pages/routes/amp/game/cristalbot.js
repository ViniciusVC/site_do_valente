import React from 'react';
import { withAmp } from 'next/amp';
//import { useAmp } from 'next/amp' //(Não neste projeto)
import * as Util from '../../../../controller/util.js';

import TemplateCristalBotAMP from '../../../../components/templates/game/cristalbot.js';

const RotaCristalBotAMP = function(props){
  return(
    <TemplateCristalBotAMP
      modo="amp"
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//query={props.url.query}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaCristalBotAMP); // Usado para páginas AMP
//export default withAmp(RotaCristalBotAMP, { hybrid: true });
//export default RotaCristalBotAMP // Usado para páginas HTMP
