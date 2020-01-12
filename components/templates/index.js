import React from 'react'
import Head from 'next/head'
import FavIcon from '../atoms/atFavIcon'
import ListadeRotas from '../moleculas/moListadeRotas/index.js'
import * as Util from '../../controller/util.js';
//console.log('Instanciando templates/index.js');

const Home = function(props){
  console.log('╔════════════════════════════════════════╗');
  console.log('║      index                             ║');
  console.log('╚════════════════════════════════════════╝');
  var cidade = Util.validaProps(props.cidade,"Rio de Janeiro");
  var modo = Util.validaProps(props.modo,"html");
  return(
  <div>
    <Head>
      <title>Home</title>
      <FavIcon />
      <meta name="description" content="Portal da Oi." />
      <meta name="robots" content="noindex" />
      <link rel="canonical" href="https://www.oi.com.br/"/>
    </Head>
    Cidade:{cidade}
    <h1 className='title'>Bem vindo ao Projeto AMP_V1</h1>
    <ListadeRotas/>
  </div>
)}

export default Home
