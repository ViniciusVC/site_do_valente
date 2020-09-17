import React from 'react';
import TemplateApache from '../../../../components/templates/codigo/cgi/index.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaApache = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateApache 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaApache, { hybrid: true });
//export default withAmp(RotaApache);
export default RotaApache