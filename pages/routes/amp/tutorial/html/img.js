import React from 'react';
import TemplateImg from '../../../../../components/templates/codigo/html/img.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaImg = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateImg 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaImg, { hybrid: true });
export default withAmp(RotaImg);
//export default RotaImg