import React from 'react';
import { withAmp } from 'next/amp';
//import { useAmp } from 'next/amp' //(Não neste projeto)
import * as Util from '../../../../controller/util.js';

import TemplateConversordeTexto from '../../../../components/templates/utilitarios/conversordetexto.js';

const RotaConversordeTexto = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateConversordeTexto
      modo="amp"
      regiao={regiao}/>
  )
}
//query={props.url.query}

export default withAmp(RotaConversordeTexto); // Usado para páginas AMP
//export default withAmp(RotaConversordeTexto, { hybrid: true }); // Usado para páginas hibridas
//export default RotaConversordeTexto// Usado para páginas HTML
