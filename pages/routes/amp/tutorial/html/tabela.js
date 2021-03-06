import React from 'react';
import TemplateHtml5 from '../../../../../components/templates/codigo/html/tabela.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaHtml5 = function(props){
  return(
    <TemplateHtml5 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaHtml5, { hybrid: true });
export default withAmp(RotaHtml5);
//export default RotaHtml5