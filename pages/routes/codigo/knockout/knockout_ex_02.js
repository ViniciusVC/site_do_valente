import React from 'react';
import TemplaKnockout from '../../../../components/templates/codigo/knockout/index.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaKnockout = function(props){
  //var regiao = Util.validaProps(props.url.query.regiao,"Rio de Janeiro")
  return(
    <TemplaKnockout
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaKnockout, { hybrid: true });
//export default withAmp(RotaKnockout);
export default RotaKnockout