import React from 'react';
import TemplateControleOGodzilla from '../../../components/templates/game/controleogodzilla.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaControleOGodzilla = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateControleOGodzilla
      modo="html"
      regiao={regiao}/>
  )
}
//query={props.url.query}

//export default withAmp(RotaControleOGodzilla); // Usado para páginas AMP
//export default withAmp(RotaControleOGodzilla, { hybrid: true }); // Usado para páginas hibridas
export default RotaControleOGodzilla// Usado para páginas HTML
