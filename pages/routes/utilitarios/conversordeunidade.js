import React from 'react';
import Templateconversordeunidade from '../../../components/templates/utilitarios/conversordeunidade.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const Rotaconversordeunidade = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <Templateconversordeunidade
      modo="html"
      regiao={regiao}/>
  )
}
//query={props.url.query}

//export default withAmp(Rotaconversordeunidade); // Usado para páginas AMP
//export default withAmp(Rotaconversordeunidade, { hybrid: true }); // Usado para páginas hibridas
export default Rotaconversordeunidade// Usado para páginas HTML

