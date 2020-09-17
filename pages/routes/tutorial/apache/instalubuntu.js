import React from 'react';
import TemplateUbunt from '../../../../components/templates/codigo/apache/instalaUbuntu.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const Rotainstalubuntu = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateUbunt 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(Rotainstalubuntu, { hybrid: true });
//export default withAmp(Rotainstalubuntu);
export default Rotainstalubuntu