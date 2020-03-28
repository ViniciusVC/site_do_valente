import React from 'react';
import TemplateAlias from '../../../../components/templates/codigo/apache/alias.js';
import * as Util from '../../../../controller/util.js';
//import { useAmp } from 'next/amp' //(Não neste projeto)
//import { withAmp } from 'next/amp'; // Usado para páginas AMP


const RotaAliasHtml = function(props){
  var regiao = Util.validaProps(props.url.query.regiao,"SP")
  return(
    <TemplateAlias 
      modo="html" 
      regiao={Util.validaProps(props.url.query.regiao,regiao)} />
  )
}

// //Usado para páginas hibridas (Não neste projeto)
// export const config = {
//   amp: true
// }

//export default withAmp(RotaAliasHtml, { hybrid: true }); // Usado para páginas hibridas (Não neste projeto)
//export default withAmp(RotaAliasHtml); // Usado para páginas AMP
export default RotaAliasHtml // Usado para páginas HTMP