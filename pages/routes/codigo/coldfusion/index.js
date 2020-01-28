import React from 'react';
import TemplateApache from '../../../../components/templates/codigo/apache/index.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaApache = function(props){
  // var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplateApache 
      modo="html" 
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")} />
  )
}

//export default withAmp(RotaApache, { hybrid: true });
//export default withAmp(RotaApache);
export default RotaApache