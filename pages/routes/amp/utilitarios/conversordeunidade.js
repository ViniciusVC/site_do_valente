import React from 'react';
import { withAmp } from 'next/amp';
//import { useAmp } from 'next/amp' //(Não neste projeto)
import * as Util from '../../../../controller/util.js';

import Templateconversordeunidade from '../../../../components/templates/utilitarios/conversordeunidade.js';

const Rotaconversordeunidade = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <Templateconversordeunidade
      modo="amp"
      regiao={regiao}/>
  )
}
//query={props.url.query}

export default withAmp(Rotaconversordeunidade); // Usado para páginas AMP
//export default withAmp(Rotaconversordeunidade, { hybrid: true }); // Usado para páginas hibridas
//export default Rotaconversordeunidade// Usado para páginas HTML

