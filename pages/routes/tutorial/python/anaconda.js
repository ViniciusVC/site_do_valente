import React from 'react';
import TemplateAnaconda from '../../../../components/templates/codigo/python/anaconda.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaPythonAnaconda = function(props){
  return(
    <TemplateAnaconda 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaPythonAnaconda, { hybrid: true });
//export default withAmp(RotaPythonAnaconda);
export default RotaPythonAnaconda