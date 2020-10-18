import React from 'react';
import TemplateLink from '../../../../../components/templates/codigo/html/links.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaLink = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateLink 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaLink, { hybrid: true });
export default withAmp(RotaLink);
//export default RotaLink