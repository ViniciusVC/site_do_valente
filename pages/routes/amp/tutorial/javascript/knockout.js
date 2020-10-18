import React from 'react';
import TemplaKnockout from '../../../../../components/templates/codigo/javascript/knockout.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaKnockout = function(props){
  return(
    <TemplaKnockout
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaKnockout, { hybrid: true });
export default withAmp(RotaKnockout);
//export default RotaKnockout