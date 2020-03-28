import React from 'react';
import TemplateApache from '../../../../components/templates/codigo/apache/index.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaApacheHtml = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateApache 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,regiao)} />
  )
}

//export default withAmp(RotaApacheHtml, { hybrid: true });
//export default withAmp(RotaApacheHtml);
export default RotaApacheHtml