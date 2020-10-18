import React from 'react'
import Head from 'next/head'
import FavIcon from '../../atoms/atFavIcon'
import * as Util from '../../../controller/util.js';
import GTM from '../../atoms/atGTM';

const moHead = props => {
  const modo = Util.validaProps(props.modo, "html");
  const title = Util.validaProps(props.title, "Pagina sem titulo");
  const description = Util.validaProps(props.description, title);
  const canonical = Util.validaProps(props.canonical, "/");
  const keywords = Util.validaProps(props.keywords, "vvc,"+title+","+modo+","+description);
  //const amphtml = "/amp" + canonical;
  const amphtml = canonical+"?amp=1";

  if(modo=="html"||modo=="HTML"){
    return (
      <Head>
        <title>{title}</title>
        <FavIcon icohref={props.icohref}/>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={"http://vvcestudio.com.br" +canonical} />
        <link rel="amphtml" href={"http://vvcestudio.com.br" +amphtml} />
        <link rel="alternate" href={canonical} hreflang="pt-br" /> {/*(OBS: indicando a versão em portugues)*/}
        {/*<link rel="alternate" href={canonical+"es/"} hreflang="es" /> (OBS: indicando a versão em espanhol)*/}
        {/*<link rel="alternate" href={canonical+"en/"} hreflang="en" /> (OBS: indicando a versão em inglês).*/}
        <link rel="alternate" href={canonical} hreflang="x-default" /> {/*(OBS: indicando que, caso o usuário não tenha determinado idioma/região, essa é a página que deve ser apresentada)*/}
        <GTM position="head" modo={modo} codGTM="UA-177955684-1" />
      </Head>
    )
  }else{
    return (
      <Head>
        <title>{title}</title>
        <FavIcon icohref={props.icohref}/>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* <link rel="canonical" href={"http://vvcestudio.com.br" +canonical} /> */}
        {/* <link rel="amphtml" href={"http://vvcestudio.com.br" +amphtml} /> */}
        <link rel="alternate" href={canonical} hreflang="pt-br" /> {/*(OBS: indicando a versão em portugues)*/}
        <link rel="alternate" href={canonical} hreflang="x-default" /> {/*(OBS: indicando que, caso o usuário não tenha determinado idioma/região, essa é a página que deve ser apresentada)*/}
        {/*<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>*/}
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
        <GTM position="head" modo={modo} codGTM="UA-177955684-1" />
      </Head>
    )
  }
  
}

//<GTM position="headbody" modo={modo} codGTM="UA-177955684-1" />
export default moHead

//<GTM position="body" modo={modo} codGTM="UA-177955684-1" />
//<GTM position="head" modo={modo} codGTM="UA-177955684-1" />

// GTM AMP Incluir no Head <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>


/* 
// GTM para HTML incluir
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-177955684-1"></script>
<script>
  {"window.dataLayer = window.dataLayer || [];"}
  {"function gtag(){dataLayer.push(arguments);}"}
  {"gtag('js', new Date());"}
  {"gtag('config', 'UA-177955684-1');"}
</script>
*/


/* 
// GTM para AMP incluir
<amp-analytics type="googleanalytics" id="analytics1">
<script type="application/json">
{
  "vars": {
    "account": "UA-177955684-1"
  },
  "triggers": {
    "trackPageview": {
      "on": "visible",
      "request": "pageview"
    }
  }
} 
</script>
</amp-analytics>
*/