import React from 'react';
import TemplateSeaborn from '../../../../components/templates/codigo/python/seaborn.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaPythonSeaborn = function(props){
  return(
    <TemplateSeaborn 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaPythonSeaborn, { hybrid: true });
//export default withAmp(RotaPythonSeaborn);
export default RotaPythonSeaborn