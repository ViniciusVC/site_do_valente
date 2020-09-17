import React from 'react';
import TemplateIframe from '../../../../components/templates/codigo/html/iframe.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaIframe = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateIframe 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaIframe, { hybrid: true });
//export default withAmp(RotaIframe);
export default RotaIframe