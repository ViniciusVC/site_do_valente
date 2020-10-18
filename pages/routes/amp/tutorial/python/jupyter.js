import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import Templatejupyter from '../../../../../components/templates/codigo/python/jupyter.js';
import * as Util from '../../../../../controller/util.js';

const Rotajupyter = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <Templatejupyter
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(Rotajupyter, { hybrid: true });
export default withAmp(Rotajupyter);
//export default Rotajupyter