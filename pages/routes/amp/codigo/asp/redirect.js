import React from 'react';
import TemplateASPredirect from '../../../../../components/templates/codigo/apache/redirect.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaASP = function(props){
  // var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplateASPredirect 
      modo="html" 
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")} />
  )
}

//export default withAmp(RotaASP, { hybrid: true });
//export default withAmp(RotaASP);
export default RotaASP