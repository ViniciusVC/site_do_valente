import React, { Children } from "react";

import BtLink from './btLink.js';
import BtLinkAmarelo1 from './btLinkAmarelo1.js';
import BtLinkAmarelo2 from './btLinkAmarelo2.js';
import BtLinkAmarelo3 from './btLinkAmarelo3.js';

import BtLinklaranja from './btLinkLaranja.js';
import BtLinkItemLuzVerde from './btLinkItemLuzVerde.js';
import BtLinkLuz from './btLinkLuz.js';
import BtLinkCinza from './btLinkCinza.js';
import BtLinkRosa from './btLinkRosa.js';
import BtLinkRosaInvertido from './btLinkRosaInvertido.js';
import BtLinkRosaInvertidoCurto from './btLinkRosaInvertidoCurto.js';
import BtLinkLaranjaDegrade from './btLinkLaranjaDegrade.js';    
import BtLinkNeon from './btLinkNeon.js';
import BtLinkNeonItem from './btLinkNeonItem.js';
import BtLinkPurple1 from './btLinkPurple1.js';
import BtLinkPurple2 from './btLinkPurple2.js';
import BtLinkBranco from './btLinkBranco.js';
import * as Util from "../../../controller/util.js";

const btSubmit = props => {
  var varValue = Util.validaProps(props.value, "");
  var varHref = Util.validaProps(props.href, "www.oi.com.br");
  var varEstilo = Util.validaProps(props.estilo, "");
  var varWidth = Util.validaProps(props.width, "");
  var varWidthMobile = Util.validaProps(props.mobilewidth, "");

  if (varEstilo == "laranja") {
    return (<BtLinklaranja value={varValue} href={varHref}/>);
  } else if (varEstilo == "amarelo1") {
    return (<BtLinkAmarelo1 value={varValue} href={varHref}/>);
  } else if (varEstilo == "amarelo2") {
    return (<BtLinkAmarelo2 value={varValue} href={varHref}/>);
  } else if (varEstilo == "amarelo3") {
    return (<BtLinkAmarelo3 value={varValue} href={varHref}/>);
  } else if (varEstilo == "branco") {
    return (<BtLinkBranco value={varValue} href={varHref}/>);
  } else if (varEstilo == "cinza") {
    return (<BtLinkCinza value={varValue} href={varHref}/>);
  } else if (varEstilo == "itemLuzVerde") {
    return (<BtLinkItemLuzVerde value={varValue} href={varHref}/>);
  } else if (varEstilo == "luz") {
    return (<BtLinkLuz value={varValue} href={varHref}/>);
  } else if (varEstilo == "neon") {
    return (<BtLinkNeon value={varValue} href={varHref}/>);
  } else if (varEstilo == "neonItem") {
    return (<BtLinkNeonItem value={varValue} href={varHref}/>);
  } else if (varEstilo == "Purple1") {
    return (<BtLinkPurple1 value={varValue} href={varHref}/>);
  } else if (varEstilo == "Purple2") {
    return (<BtLinkPurple2 value={varValue} href={varHref}/>);
  } else if (varEstilo == "rosa") {
    return (<BtLinkRosa value={varValue} href={varHref}/>);
  } else if (varEstilo == "rosa-invetido") {
    return (<BtLinkRosaInvertido value={varValue} href={varHref} width={varWidth}/>);        
  } else if (varEstilo == "rosa-invetido-curto") {
    return (<BtLinkRosaInvertidoCurto value={varValue} href={varHref} width={varWidth} mobilewidth={varWidthMobile}/>);
  } else if (varEstilo == "laraja-degrade") {
    return (<BtLinkLaranjaDegrade value={varValue} href={varHref}/>);    
  }  else {
    return (<BtLink value={varValue} href={varHref}/>);
  }
};
export default btSubmit;
