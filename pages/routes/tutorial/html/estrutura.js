import React from 'react';
import TemplateEstrutura from '../../../../components/templates/codigo/html/estrutura.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaEstrutura = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateEstrutura 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaEstrutura, { hybrid: true });
//export default withAmp(RotaEstrutura);
export default RotaEstrutura