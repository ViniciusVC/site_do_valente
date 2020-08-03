import React from 'react';
import TemplateCurriculo from '../../../components/templates/eu/curriculo.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaCurriculoHtml = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateCurriculo
      modo="html"
      regiao={regiao}/>
  )
}
//query={props.url.query}

//export default withAmp(RotaCurriculoHtml); // Usado para páginas AMP
//export default withAmp(RotaCurriculoHtml, { hybrid: true }); // Usado para páginas hibridas
export default RotaCurriculoHtml// Usado para páginas HTML


