import React from 'react';
import TemplateCGI from '../../../../../components/templates/codigo/cgi/redirect.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaCGIamp = function(props){
  return(
    <TemplateCGI 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaCGIamp, { hybrid: true });
export default withAmp(RotaCGIamp);
//export default RotaCGIamp