import React from 'react';
import TemplateCobrinha from '../../../components/templates/game/cobrinha.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaCobrinha = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateCobrinha
      modo="html"
      regiao={regiao}/>
  )
}
//query={props.url.query}

//export default withAmp(RotaCobrinha); // Usado para páginas AMP
//export default withAmp(RotaCobrinha, { hybrid: true }); // Usado para páginas hibridas
export default RotaCobrinha// Usado para páginas HTML
