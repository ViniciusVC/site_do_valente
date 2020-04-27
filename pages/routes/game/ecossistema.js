import React from 'react';
import TemplateEcossistema from '../../../components/templates/game/ecossistema.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaEcossistema = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateEcossistema
      modo="html"
      regiao={regiao}/>
  )
}
//query={props.url.query}

//export default withAmp(RotaEcossistema); // Usado para páginas AMP
//export default withAmp(RotaEcossistema, { hybrid: true }); // Usado para páginas hibridas
export default RotaEcossistema// Usado para páginas HTML
