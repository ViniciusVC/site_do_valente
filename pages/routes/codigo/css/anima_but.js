import React from 'react';
import TemplateCSSAnimaBut from '../../../../components/templates/codigo/css/anima_but.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaCSSAnimaBut = function(props){
  //var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplateCSSAnimaBut 
      modo="html" 
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

//export default withAmp(RotaCSSAnimaBut, { hybrid: true });
//export default withAmp(RotaCSSAnimaBut);
export default RotaCSSAnimaBut