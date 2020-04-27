import React from 'react';
import TemplateColdfusion from '../../../../../components/templates/codigo/coldfusion/redirect.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaColdfusion = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateColdfusion 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaColdfusion, { hybrid: true });
export default withAmp(RotaColdfusion);
//export default RotaColdfusion