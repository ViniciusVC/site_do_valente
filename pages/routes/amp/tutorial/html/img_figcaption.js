import React from 'react';
import TemplateImgFigcaption from '../../../../../components/templates/codigo/html/img_figcaption.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaImgFigcaption = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateImgFigcaption
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaImgFigcaption, { hybrid: true });
export default withAmp(RotaImgFigcaption);
//export default RotaImgFigcaption