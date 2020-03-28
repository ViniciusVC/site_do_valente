import React from 'react';
import TemplateCodigo from '../../../components/templates/codigo/index.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaHome = function(props){
  //var regiao = Util.validaProps(props.url.query.regiao,"Rio de Janeiro")
  return(
    <TemplateCodigo 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaHome, { hybrid: true });
//export default withAmp(RotaHome);
export default RotaHome