import React from 'react';
import TemplateForm from '../../../../../components/templates/codigo/html/form02.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaForm = function(props){
  return(
    <TemplateForm 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaForm, { hybrid: true });
export default withAmp(RotaForm);
//export default RotaForm