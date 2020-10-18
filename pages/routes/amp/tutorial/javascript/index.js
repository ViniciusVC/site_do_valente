import React from 'react';
import TemplaJavaScript from '../../../../../components/templates/codigo/javascript/index.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaHome = function(props){
  return(
    <TemplaJavaScript 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaHome, { hybrid: true });
export default withAmp(RotaHome);
//export default RotaHome