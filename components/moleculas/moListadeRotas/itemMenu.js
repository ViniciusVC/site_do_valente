import React from 'react'
import BtLink from '../../atoms/atBtLink'

//console.log('Instanciando templates/index.js');
const ListadeRotas = function (props) {
  const regiao = props.regiao;
  const modo = props.modo;
  const href = props.href;
  const btestiloitem = props.estilo;
  var ParamentroURL = "?regiao="+regiao;
  if(modo=="AMP" || modo=="amp"){
    ParamentroURL = "?amp=1";
  }

  //Layout luz verde
  return (
    <BtLink href={href+ParamentroURL} value={props.children} estilo={btestiloitem}/>
  )
}

export default ListadeRotas
