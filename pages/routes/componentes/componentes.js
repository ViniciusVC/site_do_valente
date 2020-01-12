import React from 'react';
import * as Util from '../../../controller/util.js';
import TemplaComponentes from '../../../components/templates/componentes.js';

const RotaComponentes = function(props){
  return(
    <TemplaComponentes
      modo="html"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}
      id={Util.validaProps(props.url.query.id,"atArrow")}
    />
  )
}

//export default withAmp(RotaComponentes); // Usado para páginas AMP
//export default withAmp(RotaComponentes, { hybrid: true }); // Usado para páginas hibridas
export default RotaComponentes // Usado para páginas HTML