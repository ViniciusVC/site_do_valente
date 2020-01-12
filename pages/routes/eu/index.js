import React from 'react';
import TemplateEu from '../../components/templates/eu/index.js';
import * as Util from '../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaEuHtml = function(props){
  var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplateEu
      modo="html"
      cidade={cidade}/>
  )
}
//query={props.url.query}

//export default withAmp(RotaEuHtml); // Usado para páginas AMP
//export default withAmp(RotaEuHtml, { hybrid: true }); // Usado para páginas hibridas
export default RotaEuHtml// Usado para páginas HTML


