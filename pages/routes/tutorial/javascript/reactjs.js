import React from 'react';
import TemplaReactJS from '../../../../components/templates/codigo/javascript/reactjs.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaReactJS = function(props){
  //var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplaReactJS 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaRectJS, { hybrid: true });
//export default withAmp(RotaRectJS);
export default RotaReactJS