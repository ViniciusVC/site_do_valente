import React from 'react';
import TemplatePython from '../../../../components/templates/codigo/python/index.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaPython = function(props){
  return(
    <TemplatePython 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaPython, { hybrid: true });
//export default withAmp(RotaPython);
export default RotaPython