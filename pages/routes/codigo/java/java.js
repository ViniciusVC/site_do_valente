import React from 'react';
import TemplaJava from '../../../../components/templates/codigo/javascript.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaJava = function(props){
  //var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplaJava
      modo="html" 
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

//export default withAmp(RotaJava, { hybrid: true });
//export default withAmp(RotaJava);
export default RotaJava