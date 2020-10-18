import React from 'react';
import Templateh1pbr from '../../../../../components/templates/codigo/html/h1_p_br.js';
import * as Util from '../../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaH1PBR = function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <Templateh1pbr 
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaH1PBR, { hybrid: true });
export default withAmp(RotaH1PBR);
//export default RotaH1PBR