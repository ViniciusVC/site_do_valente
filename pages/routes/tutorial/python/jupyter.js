import React from 'react';
import Templatejupyter from '../../../../components/templates/codigo/python/jupyter.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaPythonjupyter = function(props){
  return(
    <Templatejupyter 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaPythonjupyter, { hybrid: true });
//export default withAmp(RotaPythonjupyter);
export default RotaPythonjupyter