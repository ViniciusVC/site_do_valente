import React from 'react';
import Templateredirect from '../../../../components/templates/codigo/html/timedatetime.js';
import * as Util from '../../../../controller/util.js';

//import { withAmp } from 'next/amp';

const Retaredirect = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <Templateredirect 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(Retaredirect, { hybrid: true });
//export default withAmp(Retaredirect);
export default Retaredirect