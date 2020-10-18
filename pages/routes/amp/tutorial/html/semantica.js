import React from 'react';
import TemplateSemantica from '../../../../../components/templates/codigo/html/semantica.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaSemantica = function(props){
  return(
    <TemplateSemantica 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaSemantica, { hybrid: true });
export default withAmp(RotaSemantica);
//export default RotaSemantica