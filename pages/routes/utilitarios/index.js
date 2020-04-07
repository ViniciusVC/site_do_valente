import React from 'react';
import Templateutilitarios from '../../../components/templates/utilitarios/index.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotautilitariosHtml = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  return(
    <Templateutilitarios
      modo="html"
      cidade={regiao}/>
  )
}
//query={props.url.query}

//export default withAmp(RotautilitariosHtml); // Usado para páginas AMP
//export default withAmp(RotautilitariosHtml, { hybrid: true }); // Usado para páginas hibridas
export default RotautilitariosHtml// Usado para páginas HTML


