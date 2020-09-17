import React from 'react';
import TemplateCSSAnimaBut from '../../../../components/templates/codigo/css/anima_but.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaCSSAnimaBut = function(props){
  //var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateCSSAnimaBut 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaCSSAnimaBut, { hybrid: true });
//export default withAmp(RotaCSSAnimaBut);
export default RotaCSSAnimaBut