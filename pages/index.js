import React from 'react';
import TemplaIndex from '../components/templates/index.js';
import * as Util from '../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaIndex = function(props){
  console.log('+++++++++++++++++++++++++++++');
  console.log('Rota index');
  console.log('query.regiao='+props.url.query.regiao);
  console.log('query.amp='+props.url.query.amp);

  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <TemplaIndex 
      modo="html" 
      regiao={regiao}/>
  )
}

//export default withAmp(RotaIndex); // Usado para páginas AMP
//export default withAmp(RotaIndex, { hybrid: true }); // Usado para páginas hibridas
export default RotaIndex // Usado para páginas HTML
