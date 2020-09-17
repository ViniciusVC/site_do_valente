import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import TemplateJava from '../../../../../components/templates/codigo/java/index.js';
import * as Util from '../../../../../controller/util.js';

const RotaJava = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateJava
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaJava, { hybrid: true });
export default withAmp(RotaJava);
//export default RotaJava