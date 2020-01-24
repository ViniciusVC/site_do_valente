import React from 'react';
import TemplateCurriculo from '../../../components/templates/curriculo.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaCurriculoHtml = function(props){
  var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplateCurriculo
      modo="html"
      cidade={cidade}/>
  )
}
//query={props.url.query}

//export default withAmp(RotaCurriculoHtml); // Usado para páginas AMP
//export default withAmp(RotaCurriculoHtml, { hybrid: true }); // Usado para páginas hibridas
export default RotaCurriculoHtml// Usado para páginas HTML


