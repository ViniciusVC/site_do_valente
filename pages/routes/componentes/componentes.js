import React from 'react';
import TemplaComponentes from '../../../components/templates/componentes.js';
import * as Util from '../../../controller/util.js';

const RotaComponentes = function(props){
  return(
    <TemplaComponentes
      modo="html"
      regiao={Util.validaProps(props.url.query.regiao,"RJ")}
      id={Util.validaProps(props.url.query.id,"atArrow")}
    />
  )
}

//export default withAmp(RotaComponentes); // Usado para páginas AMP
//export default withAmp(RotaComponentes, { hybrid: true }); // Usado para páginas hibridas
export default RotaComponentes // Usado para páginas HTML