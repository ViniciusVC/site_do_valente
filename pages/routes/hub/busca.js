import React from 'react';
import TemplateRub from '../../../components/templates/hubBusca.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaHub = function(props){
  var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplateRub
      modo="html"
      cidade={cidade}/>
  )
}
//query={props.url.query}
//export default withAmp(RotaHub); // Usado para páginas AMP
//export default withAmp(RotaHub, { hybrid: true }); // Usado para páginas hibridas
export default RotaHub// Usado para páginas HTML
