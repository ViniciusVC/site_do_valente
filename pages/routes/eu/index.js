import React from 'react';
import TemplateEu from '../../../components/templates/eu';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaEuHtml = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateEu
      modo="html"
      cidade={regiao}/>
  )
}
//query={props.url.query}

//export default withAmp(RotaEuHtml); // Usado para páginas AMP
//export default withAmp(RotaEuHtml, { hybrid: true }); // Usado para páginas hibridas
export default RotaEuHtml// Usado para páginas HTML


