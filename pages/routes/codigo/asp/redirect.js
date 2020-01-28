import React from 'react';
import Templateredirect from '../../../../components/templates/codigo/apache/redirect.js';
import * as Util from '../../../../controller/util.js';

//import { withAmp } from 'next/amp';

const Retaredirect = function(props){
  // var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <Templateredirect 
      modo="html" 
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")} />
  )
}

//export default withAmp(Retaredirect, { hybrid: true });
//export default withAmp(Retaredirect);
export default Retaredirect