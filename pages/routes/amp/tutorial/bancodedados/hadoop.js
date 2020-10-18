import React from 'react';
import { withAmp } from 'next/amp'; // Usado para páginas AMP
//import { useAmp } from 'next/amp' //(Não neste projeto)
import TemplaDataCience from '../../../../../components/templates/codigo/bancodedados/hadoop.js';
import * as Util from '../../../../../controller/util.js';


const RotaDataCience = function(props){
  //var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <TemplaDataCience
      modo="amp" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(RotaDataCience, { hybrid: true });
export default withAmp(RotaDataCience);
//export default RotaDataCience