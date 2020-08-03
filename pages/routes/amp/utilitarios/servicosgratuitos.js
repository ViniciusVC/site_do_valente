import React from 'react';
import { withAmp } from 'next/amp';
//import { useAmp } from 'next/amp' //(Não neste projeto)
import * as Util from '../../../../controller/util.js';

import Templateservicosgratuitos from '../../../../components/templates/utilitarios/servicosgratuitos.js';

const Rotaservicosgratuitos = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <Templateservicosgratuitos
      modo="amp"
      regiao={regiao}/>
  )
}
//query={props.url.query}

export default withAmp(Rotaservicosgratuitos); // Usado para páginas AMP
//export default withAmp(Rotaservicosgratuitos, { hybrid: true }); // Usado para páginas hibridas
//export default Rotaservicosgratuitos// Usado para páginas HTML
