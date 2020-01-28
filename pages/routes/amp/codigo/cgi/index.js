import React from 'react';
import TemplateASP from '../../../../../components/templates/codigo/apache';
import * as Util from '../../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaASP = function(props){
  // var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplateASP
      modo="html" 
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")} />
  )
}

//export default withAmp(RotaASP, { hybrid: true });
//export default withAmp(RotaASP);
export default RotaASP