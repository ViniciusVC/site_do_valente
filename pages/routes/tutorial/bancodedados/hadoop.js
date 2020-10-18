import React from 'react';
import TemplaJava from '../../../../components/templates/codigo/bancodedados/hadoop.js';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaJava = function(props){
  //var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplaJava
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaJava, { hybrid: true });
//export default withAmp(RotaJava);
export default RotaJava