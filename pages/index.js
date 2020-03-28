import React from 'react';
import TemplaIndex from '../components/templates/index.js';
import * as Util from '../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaIndex = function(props){
  console.log('Rota index');
  //var regiao = req.query.regiao
  //var regiao = Util.validaProps(props.regiao, "SP")
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  //var modo = Util.validaProps(props.modo,"html")
  return(
    <TemplaIndex 
      modo="html" 
      regiao={regiao}/>
  )
}

//export default withAmp(RotaIndex); // Usado para páginas AMP
//export default withAmp(RotaIndex, { hybrid: true }); // Usado para páginas hibridas
export default RotaIndex // Usado para páginas HTML
