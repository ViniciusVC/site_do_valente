import React from 'react';
import Templateredirect from '../../../../../components/templates/codigo/html/script.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const Retaredirect = function(props){
  return(
    <Templateredirect 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(Retaredirect, { hybrid: true });
export default withAmp(Retaredirect);
//export default Retaredirect