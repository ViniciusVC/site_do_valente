import React from 'react';
import TemplateHtml5 from '../../../../components/templates/codigo/apache/alias.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaHome = function(props){
  // var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplateHtml5 
      modo="html" 
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")} />
  )
}

//export default withAmp(RotaHome, { hybrid: true });
//export default withAmp(RotaHome);
export default RotaHome