import React from 'react';
import TemplateRub from '../../../components/templates/hub.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaHub = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateRub
      modo="html"
      regiao={regiao}/>
  )
}
//query={props.url.query}
//export default withAmp(RotaHub); // Usado para páginas AMP
//export default withAmp(RotaHub, { hybrid: true }); // Usado para páginas hibridas
export default RotaHub// Usado para páginas HTML
