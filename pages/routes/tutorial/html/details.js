import React from 'react';
import Templatedetails from '../../../../components/templates/codigo/html/details';
import * as Util from '../../../../controller/util.js';

//import { withAmp } from 'next/amp';

const RotaDetails= function(props){
  // var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <Templatedetails 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")} />
  )
}

//export default withAmp(RotaDetails, { hybrid: true });
//export default withAmp(RotaDetails);
export default RotaDetails