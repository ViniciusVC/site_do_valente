import React from "react";
import * as Util from "../../../controller/util.js";
//import { useAmp } from 'next/amp'

const atdetails = props => {
  
  const open = Util.validaProps(props.open, false);
  console.log('open =' + open);

  if (open) {
    return (
      <details open>
        {props.children}
      </details>
    );
  } else {
    return (
      <details>
        {props.children}
      </details>
    );
  }
};

export default atdetails;
