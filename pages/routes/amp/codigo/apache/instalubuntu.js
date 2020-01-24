import React from 'react';
import TemplateHtml5 from '../../../../../components/templates/codigo/apache/instalaUbuntu.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const Rotainstalubuntu = function(props){
  // var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplateHtml5 
      modo="html" 
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")} />
  )
}

//export default withAmp(Rotainstalubuntu, { hybrid: true });
//export default withAmp(Rotainstalubuntu);
export default Rotainstalubuntu