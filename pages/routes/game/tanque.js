import React from 'react';
import TemplateTanque from '../../../components/templates/game/tanque.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaTanque = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateTanque
      modo="html"
      regiao={regiao}/>
  )
}
//query={props.url.query}

//export default withAmp(RotaTanque); // Usado para páginas AMP
//export default withAmp(RotaTanque, { hybrid: true }); // Usado para páginas hibridas
export default RotaTanque// Usado para páginas HTML
