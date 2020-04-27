import React from 'react';
import TemplateForm from '../../../../components/templates/codigo/html/form10.js';
import * as Util from '../../../../controller/util.js';

//import { withAmp } from 'next/amp';

const RotaForm = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateForm 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaForm, { hybrid: true });
//export default withAmp(RotaForm);
export default RotaForm