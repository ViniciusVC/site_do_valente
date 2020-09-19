//Component atomo Price.js

import React from 'react';
import * as Util from '../../../controller/util.js';

const bodyGTM = props => {
  //console.log('Rodando /componentes/atoms/atGTM/bodyGTM.js');
  var codGTM = Util.validaProps(props.codGTM, 'UA-177955684-1');
  var varSRC="https://www.googletagmanager.com/ns.html?id="+codGTM;
  var modo = Util.validaProps(props.modo, 'html');
  //var varAmpGtm = "{vars:{account:"+codGTM+"},triggers:{trackPageview:{on:visible,request:pageview}}}";
  // var varAmpGtm = { 
  //                 "vars": { "account": "UA-177955684-1" },
  //                 "triggers": { 
  //                    "trackPageview": { "on": "visible", "request": "pageview" } 
  //                 } 
  //             }

  if(modo=="html" || modo=="HTML"){
    return(
      <noscript>
        <iframe
            src={varSRC}
            height="0" 
            width="0">
        </iframe>
      </noscript>
    )
  }else{
    return(
      <amp-analytics type="googleanalytics">
        <script 
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: `
                { "vars": { "account": "${codGTM}" },
                 "triggers": { 
                    "trackPageview": { "on": "visible", "request": "pageview" } 
                  } 
                }
              `,
            }}
        />
      </amp-analytics>
    )
  }
}

export default bodyGTM


// Codigo GTM Body com script para html retornar.
//<script>
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'UA-177955684-1');
//</script>


// Codigo GTM Body para AMP retornar.
//<amp-analytics type="googleanalytics" id="analytics1">
//<script type="application/json">
//{
//  "vars": {
//    "account": "UA-177955684-1"
//  },
//  "triggers": {
//    "trackPageview": {
//      "on": "visible",
//      "request": "pageview"
//    }
//  }
//}
//</script>
//</amp-analytics>




// Codigo GTM do BODY para html com Iframe.
// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=UA-177955684-1"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->
