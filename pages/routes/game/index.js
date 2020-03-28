import React from 'react';
import TemplateGame from '../../../components/templates/game/index.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaGameHtml = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplateGame
      modo="html"
      cidade={regiao}/>
  )
}
//query={props.url.query}

//export default withAmp(RotaGameAMP); // Usado para páginas AMP
//export default withAmp(RotaGameAMP, { hybrid: true }); // Usado para páginas hibridas
export default RotaGameHtml// Usado para páginas HTML


