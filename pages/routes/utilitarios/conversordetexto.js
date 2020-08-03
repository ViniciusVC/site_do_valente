import React from 'react';
import TemplateConversordeTexto from '../../../components/templates/utilitarios/conversordetexto.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaConversordeTexto = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateConversordeTexto
      modo="html"
      regiao={regiao}/>
  )
}
//query={props.url.query}

//export default withAmp(RotaConversordeTexto); // Usado para páginas AMP
//export default withAmp(RotaConversordeTexto, { hybrid: true }); // Usado para páginas hibridas
export default RotaConversordeTexto// Usado para páginas HTML
