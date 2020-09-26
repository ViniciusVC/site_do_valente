import React from 'react';
import TemplateCristalBot from '../../../components/templates/game/cristalbotvideob2.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaCristalBot = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateCristalBot
      modo="html"
      regiao={regiao}/>
  )
}

//query={props.url.query}
//export default withAmp(RotaCristalBot); // Usado para páginas AMP
//export default withAmp(RotaCristalBot, { hybrid: true }); // Usado para páginas hibridas
export default RotaCristalBot// Usado para páginas HTML
