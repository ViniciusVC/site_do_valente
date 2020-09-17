import React from 'react';
import TemplateSVG from '../../../../components/templates/codigo/html/svg02.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaSVG = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateSVG 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaSVG, { hybrid: true });
//export default withAmp(RotaSVG);
export default RotaSVG