import React from 'react';
import TemplateASP from '../../../../components/templates/codigo/asp/index.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaASP = function(props){
  return(
    <TemplateASP 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaASP, { hybrid: true });
//export default withAmp(RotaASP);
export default RotaASP