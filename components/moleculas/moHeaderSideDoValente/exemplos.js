
import React from 'react';
import HeaderSideDoValente from './index.js';

export const moHeaderSideDoValente = (modo) => (
    <div>
      <h2>moHeaderSideDoValente</h2>
        <HeaderSideDoValente regiao="RJ" titulo="Titulo Página" modo={modo}/>
        {"import HeaderSideDoValente from '../moleculas/moHeaderSideDoValente';"}<br/>
        {'<HeaderSideDoValente regiao="RJ" titulo="Titulo Página" modo='+modo+'/>'}
    </div>
);

export default moHeaderSideDoValente;
