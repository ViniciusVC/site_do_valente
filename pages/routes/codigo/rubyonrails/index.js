import React from 'react';
import TemplatRubyonrails from '../../../../components/templates/codigo/rubyonrails/';
import * as Util from '../../../../controller/util.js';
//import { withAmp } from 'next/amp';

const Rotarubyonrails = function(props){
  //var regiao = Util.validaProps(props.url.query.regiao,"Rio de Janeiro")
  return(
    <TemplatRubyonrails 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}/>
  )
}

//export default withAmp(Rotarubyonrails, { hybrid: true });
//export default withAmp(Rotarubyonrails);
export default Rotarubyonrails