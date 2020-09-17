import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import Templateknockout from '../../../../../components/templates/codigo/knockout/index.js';
import * as Util from '../../../../../controller/util.js';

const Rotaknockout = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <Templateknockout
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(Rotaknockout, { hybrid: true });
export default withAmp(Rotaknockout);
//export default Rotaknockout