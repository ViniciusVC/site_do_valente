import React from 'react';
import TemplateComentario from '../../../../../components/templates/codigo/html/comentario.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaComentario = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateComentario 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaComentario, { hybrid: true });
export default withAmp(RotaComentario);
//export default RotaComentario