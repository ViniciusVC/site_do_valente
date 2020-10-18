import React from 'react';
import TemplaNextJS from '../../../../../components/templates/codigo/javascript/nextjs.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaNextJS = function(props){
  return(
    <TemplaNextJS 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaNextJS, { hybrid: true });
export default withAmp(RotaNextJS);
//export default RotaNextJS