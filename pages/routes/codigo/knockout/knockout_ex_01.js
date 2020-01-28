import React from 'react';
import TemplaKnockout from '../../../components/templates/codigo/knockout.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaKnockout = function(props){
  //var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplaKnockout
      modo="html" 
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

//export default withAmp(RotaKnockout, { hybrid: true });
//export default withAmp(RotaKnockout);
export default RotaKnockout