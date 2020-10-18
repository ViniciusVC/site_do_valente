import React from 'react';
import TemplaReactJS from '../../../../../components/templates/codigo/javascript/reactjs.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaReactJS = function(props){
  return(
    <TemplaReactJS 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaReactJS, { hybrid: true });
export default withAmp(RotaReactJS);
//export default RotaReactJS