import React from 'react';
import TemplaNodejs from '../../../../../components/templates/codigo/javascript/nodejs.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaNodejs = function(props){
  return(
    <TemplaNodejs 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaNodejs, { hybrid: true });
export default withAmp(RotaNodejs);
//export default RotaNodejs