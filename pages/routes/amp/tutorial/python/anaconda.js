import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import Templateanaconda from '../../../../../components/templates/codigo/python/anaconda.js';
import * as Util from '../../../../../controller/util.js';

const Rotaanaconda = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <Templateanaconda
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(Rotaanaconda, { hybrid: true });
export default withAmp(Rotaanaconda);
//export default Rotaanaconda