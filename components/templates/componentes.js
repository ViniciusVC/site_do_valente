import React from 'react';
import MoHead from '../moleculas/moHead'
import ListadeRotas from '../moleculas/moListadeRotas/index.js';
import Div from '../atoms/atDiv/index.js';
import * as Atoms from '../index.js';
import * as Util from '../../controller/util.js';
import Layout from '../moleculas/layout'

const getAtoms = function(nameAtoms,modo){
  return Atoms[nameAtoms](modo);
}

const componentes = function(props){
    console.log('╔════════════════════════════════════════╗');
    console.log('║      componentes                       ║');
    console.log('╚════════════════════════════════════════╝');
    var regiao = Util.validaProps(props.regiao,"rj");
    var modo = Util.validaProps(props.modo,"html");
    var id = Util.validaProps(props.id,"atArrow");
    var StringModo = "";
    if(modo=="AMP" || modo=="amp"){
      StringModo = "/amp";
    }
  
    return(
    <div>
      <MoHead modo={modo} title="Componentes" description="Componentes html do Portal da Oi (AMP)." canonical="/"/>
      <Layout regiao={regiao} modo={modo} titulo="Componentes" categoria="Componentes"> 
      <dib><h1 className='title'>Componentes React deste Projeto.</h1></dib>
      <Div display="horizontal">
        <div className='coluna1'>
            <h4 className='CssTitleRotasProjeto'>Lista de componentes</h4>
              {Object.keys(Atoms).map((nomeAtoms, index) => {
                return (<div>
                  <a href={StringModo + "/componentes/?id="+nomeAtoms+"&regiao="+regiao}>
                  {index + " - "+ nomeAtoms}
                  </a>
                  </div>)
              })}
        </div>
        <div className='coluna2'>
            <div>{getAtoms(id,modo)}</div>
        </div>
        
      </Div>

      </Layout>
      <style jsx>{`
        .title {
          margin: 0;
          width: 100%;
          padding-top: 10px;
          line-height: 1.15;
          font-size: 48px;
        }
        .coluna1{
          width: 20%;
        }
        .coluna2{
          width: 70%;

        }
        .CssTitleListadeAtomos{
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 22px;
        }
      `}</style>
    </div>
 )
}

export default componentes

//<div>
//Cidade:{regiao}<br/>
//Modo:{modo}<br/>
//teste function apenasNumros({Util.apenasNumeros('A1B2C3')})
//</div>


//       <Head>
//         <title>Componentes</title>
//         <FavIcon />
//         <link rel="icon" href="https://www.oi.com.br/componentes/componentes" />
//         <meta name="description" content="Componentes html do Portal da Oi (AMP)." />
//         <meta name="robots" content="noindex" />
//         <link rel="canonical" href="https://www.oi.com.br/"/>
//         <link rel="amphtml" href="https://www.oi.com.br/amp/"/>
//         <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
//         <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
//       </Head>