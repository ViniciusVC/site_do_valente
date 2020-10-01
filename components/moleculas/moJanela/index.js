import React from 'react';
import JanelaEscuro from './JanelaEscuro.js';
import JanelaClaro from './JanelaClaro.js';
import JanelaLuz from './JanelaLuz.js';
import JanelaNeon from './JanelaNeon.js';
import JanelaNaveg from './JanelaNaveg.js';
import JanelaTerminal from './JanelaTerminal.js';

import * as Util from '../../../controller/util.js';

const moJanela = props => {
  //console.log('Rodando /moJanela');

  var varEstilo = Util.validaProps(props.estilo, "");

  if (varEstilo == "luz") {
    //Layout Luz verde
    return (
      <JanelaLuz>{props.children}</JanelaLuz>
    )
  }else if (varEstilo == "neon"){
    //Layout escuro
    return (
      <JanelaNeon>{props.children}</JanelaNeon>
    )
  }else if (varEstilo == "escuro"){
    //Layout escuro
    return (
      <JanelaEscuro>{props.children}</JanelaEscuro>
    )
  }else if (varEstilo == "claro"){
    //Layout escuro
    return (
      <JanelaClaro>{props.children}</JanelaClaro>
    )
  } else if (varEstilo == "naveg") {
    //Navegador
    return (
      <JanelaNaveg>{props.children}</JanelaNaveg>
    )
  } else if (varEstilo == "terminal") {
      //Navegador
      return (
        <JanelaTerminal>{props.children}</JanelaTerminal>
      )
  }else {
    //Layout escuro
    return (
      <div>{props.children}</div>
    )
  }
}

export default moJanela
