import React from 'react'
import Head from 'next/head'
import FavIcon from '../../atoms/atFavIcon'
import * as Util from '../../../controller/util.js';

const moHead = props => {
  console.log('Rodando /layout.js');
  const modo = Util.validaProps(props.modo, "html");
  const title = Util.validaProps(props.title, "Pagina sem titulo");
  const description = Util.validaProps(props.description, title);
  const canonical = Util.validaProps(props.canonical, "/");
  const amphtml = "/amp" + canonical;
  if(modo=="html"||modo=="HTML"){
    return (
      <Head>
      <title>{title}</title>
      <FavIcon href={props.href}/>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="amphtml" href={amphtml} />
      </Head>
    )
  }else{
    return (
      <Head>
      <title>{title}</title>
      <FavIcon href={props.icohref}/>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="amphtml" href={amphtml} />
      <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
      <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
    )
  }
  
}

export default moHead
