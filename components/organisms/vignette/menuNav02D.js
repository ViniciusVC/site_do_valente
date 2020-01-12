// menu Nav padrão portal vignette
import React from 'react';

const menuNav02D = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  console.log('Rodando /views/organisms/menuNav02D.jsx - layout Portal Oi VIGNETTE. modo:'+modo);
  return(
    <nav>
    <h3>
      <a href="#">TV</a>
    </h3>
    <ul>
      <li>
        <a href="/oi/oi-pra-voce/planos-servicos/oi-tv/planos" title="Conheca os Planos">Conheca os Planos</a>
      </li>
      <li>
        <a href="/oi/oi-pra-voce/planos-servicos/oi-tv/canais-a-la-carte" title="Canais à la Carte">Canais à la Carte</a>
      </li>
      <li>
        <a href="/oi/oi-pra-voce/planos-servicos/oi-tv/servicos/programacao-oi-tv" title="Grade de Programação">Grade de Programação</a>
      </li>
    </ul>
      <style jsx>{`
        .a{
          width: 100%;
        }
    `}</style>
  </nav>
)};

export default menuNav02D