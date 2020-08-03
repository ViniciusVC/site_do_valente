import React from 'react';
import { withAmp } from 'next/amp';
//import { useAmp } from 'next/amp' //(Não neste projeto)
import * as Util from '../../../../controller/util.js';

import TemplateEcossistema from '../../../../components/templates/game/ecossistema';

const RotaEcossistema = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateEcossistema
      modo="amp"
      regiao={regiao}/>
  )
}
//query={props.url.query}

export default withAmp(RotaEcossistema); // Usado para páginas AMP
//export default withAmp(RotaEcossistema, { hybrid: true }); // Usado para páginas hibridas
//export default RotaEcossistema// Usado para páginas HTML
