import React from 'react';
import { withAmp } from 'next/amp';
//import { useAmp } from 'next/amp' //(Não neste projeto)
import * as Util from '../../../controller/util.js';
import Index from '../../../components/templates/index.js';


const RotaIndexAMP = function(props){
  console.log('+++++++++++++++++++++++++++++');
  console.log('Rota index AMP');
  console.log('query.regiao='+props.url.query.regiao);
  console.log('query.amp='+props.url.query.amp);
  
  var regiao = Util.validaProps(props.url.query.regiao,"RJ")
  var modo="amp"

  return(
    <Index
      modo={modo}
      regiao={regiao}/>
  )
}

// //export const config = { amp: false } // Usado para paginas apenas AMP (Não esta funcionando)
// //export const config = { amp: true } // Usado para paginas apenas AMP (Não esta funcionando)
// //export const config = { amp: 'hybrid' } // Usado para páginas hibridas (Não esta funcionando)

// //&amp=1


//export default withAmp(RotaIndexAMP, { hybrid: false }); // (erros) Gerou um html com alguns codigos em AMP.
//export default withAmp(RotaIndexAMP, false); // (erros) Gerou um html com alguns codigos em AMP.
//export default withAmp(RotaIndexAMP, { amp: false }); // Continuou gerando pagina AMP.
//export default withAmp(RotaIndexAMP, { amp: true }); // Gera páginas AMP. Funciona!

export default withAmp(RotaIndexAMP); // Funciona para paginas AMP. 
//export default withAmp(RotaIndexAMP, { hybrid: true }); // Usado para páginas hibridas (Não funcionou bem) 
//export default RotaIndexAMP // Gera páginas estáticas HTML.
