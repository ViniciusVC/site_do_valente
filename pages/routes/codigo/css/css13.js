import React from 'react';
import TemplateCSS from '../../../../components/templates/codigo/css/css13.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaCSS = function(props){
  //var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplateCSS 
      modo="html" 
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

//export default withAmp(RotaHome, { hybrid: true });
//export default withAmp(RotaHome);
export default RotaCSS