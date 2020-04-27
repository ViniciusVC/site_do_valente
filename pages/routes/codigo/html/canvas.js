import React from 'react';
import TemplateCanvas from '../../../../components/templates/codigo/html/canvas.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaCanvas = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateCanvas 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaCanvas, { hybrid: true });
//export default withAmp(RotaCanvas);
export default RotaCanvas