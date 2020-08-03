import React from 'react';
import { withAmp } from 'next/amp';
//import { useAmp } from 'next/amp' //(Não neste projeto)
import * as Util from '../../../../controller/util.js';

import TemplateCobrinha from '../../../../components/templates/game/cobrinha.js';

const RotaCobrinha = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateCobrinha
      modo="amp"
      regiao={regiao}/>
  )
}
//query={props.url.query}

export default withAmp(RotaCobrinha); // Usado para páginas AMP
//export default withAmp(RotaCobrinha, { hybrid: true }); // Usado para páginas hibridas
//export default RotaCobrinha// Usado para páginas HTML
