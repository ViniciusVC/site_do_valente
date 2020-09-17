import React from 'react'
import * as Util from '../../../controller/util.js';

const headerGTM = props => {
    var codGTM = Util.validaProps(props.codGTM, 'UA-177955684-1');
    var modo = Util.validaProps(props.modo, 'html');
    if(modo=="html" || modo=="HTML"){
      return(
        <script>
          {"<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','"+codGTM+"');</script>"}
        </script>
      )
      // (function(w,d,s,l,i){
      //   w[l]=w[l]||[];
      //   w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      //   var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      //   j.async=true;
      //   j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      //   f.parentNode.insertBefore(j,f);
      // })(window,document,'script','dataLayer','UA-177955684-1')
    }else{
      return(
        <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
      )
    }
}

export default headerGTM

//Codigo GTM para HTML Incluir no Head 
//<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//})(window,document,'script','dataLayer','UA-177955684-1');</script>

//Codigo GTM para HTML Incluir no Head 
//<script async src="https://www.googletagmanager.com/gtag/js?id=UA-177955684-1"></script>

//Codigo GTM para AMP Incluir no Head 
//<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>