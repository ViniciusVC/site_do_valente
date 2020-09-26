import React from 'react';
import TemplateMatplotlib from '../../../../components/templates/codigo/python/matplotlib.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaPythonMatplotlib = function(props){
  return(
    <TemplateMatplotlib 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaPythonMatplotlib, { hybrid: true });
//export default withAmp(RotaPythonMatplotlib);
export default RotaPythonMatplotlib