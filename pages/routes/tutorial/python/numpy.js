import React from 'react';
import TemplateNumpy from '../../../../components/templates/codigo/python/numpy.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaPythonNumpy = function(props){
  return(
    <TemplateNumpy 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaPython, { hybrid: true });
//export default withAmp(RotaPython);
export default RotaPythonNumpy