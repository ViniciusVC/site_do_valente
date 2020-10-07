import React from 'react';
import TemplateSklearn from '../../../../components/templates/codigo/python/sklearn.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaPythonSklearn = function(props){
  return(
    <TemplateSklearn 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaPythonSklearn, { hybrid: true });
//export default withAmp(RotaPythonSklearn);
export default RotaPythonSklearn