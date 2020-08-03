import React from 'react';
import { withAmp } from 'next/amp';
//import { useAmp } from 'next/amp' //(Não neste projeto)
import * as Util from '../../../../controller/util.js';

import Templateutilitarios from '../../../../components/templates/utilitarios/index.js';

const RotautilitariosAMP = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <Templateutilitarios
      modo="amp"
      cidade={regiao}/>
  )
}
//query={props.url.query}

export default withAmp(RotautilitariosAMP); // Usado para páginas AMP
//export default withAmp(RotautilitariosAMP, { hybrid: true }); // Usado para páginas hibridas
//export default RotautilitariosHtml// Usado para páginas HTML


