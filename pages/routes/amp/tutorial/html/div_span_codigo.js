import React from 'react';
import TemplateDivSpan from '../../../../../components/templates/codigo/html/div_span.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaDivSpan = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateDivSpan
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaDivSpan, { hybrid: true });
export default withAmp(RotaDivSpan);
//export default RotaDivSpan