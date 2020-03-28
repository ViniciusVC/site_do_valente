import React from 'react';
import TemplateCGIamp from '../../../../../components/templates/codigo/apache';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaCGIamp = function(props){
  return(
    <TemplateCGIamp
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaCGIamp, { hybrid: true });
export default withAmp(RotaCGIamp);
//export default RotaCGIamp