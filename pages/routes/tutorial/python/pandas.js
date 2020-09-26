import React from 'react';
import TemplatePandas from '../../../../components/templates/codigo/python/pandas.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaPythonPandas = function(props){
  return(
    <TemplatePandas 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaPython, { hybrid: true });
//export default withAmp(RotaPython);
export default RotaPythonPandas