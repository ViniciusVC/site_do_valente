import React from 'react';
import TemplateASPredirect from '../../../../components/templates/codigo/seo/amp.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaASPredirect = function(props){

  return(
    <TemplateASPredirect 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaASPredirect, { hybrid: true });
//export default withAmp(RotaASPredirect);
export default RotaASPredirect