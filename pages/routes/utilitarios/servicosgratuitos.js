import React from 'react';
import Templateservicosgratuitos from '../../../components/templates/utilitarios/servicosgratuitos.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const Rotaservicosgratuitos = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <Templateservicosgratuitos
      modo="html"
      regiao={regiao}/>
  )
}
//query={props.url.query}

//export default withAmp(Rotaconversordeunidade); // Usado para páginas AMP
//export default withAmp(Rotaconversordeunidade, { hybrid: true }); // Usado para páginas hibridas
export default Rotaservicosgratuitos// Usado para páginas HTML
