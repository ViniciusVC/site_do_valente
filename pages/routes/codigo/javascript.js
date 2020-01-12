import React from 'react';
import TemplaJavaScript from '../../../components/templates/codigo/javascript.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaHome = function(props){
  //var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplaJavaScript 
      modo="html" 
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

//export default withAmp(RotaHome, { hybrid: true });
//export default withAmp(RotaHome);
export default RotaHome