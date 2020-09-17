import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import Templateredirect from '../../../../../components/templates/codigo/apache/redirect.js';
import * as Util from '../../../../../controller/util.js';

const Rotaredirect = function(props){
  return(
    <Templateredirect 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(Rotaredirect, { hybrid: true });
export default withAmp(Rotaredirect);
//export default Rotaredirect