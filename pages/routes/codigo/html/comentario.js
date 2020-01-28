import React from 'react';
import TemplateHtml5 from '../../../../components/templates/codigo/html5.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaHtml5 = function(props){
  // var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplateHtml5 
      modo="html" 
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")} />
  )
}

//export default withAmp(RotaHtml5, { hybrid: true });
//export default withAmp(RotaHtml5);
export default RotaHtml5