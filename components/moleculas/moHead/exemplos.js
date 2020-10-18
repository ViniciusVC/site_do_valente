
import React from 'react';
import MoHead from './index.js';

export const MoHead = (modo) => (
    <div>
      <h2>moHead</h2>
      <p>Não é um componente visual</p>
       {'<MoHead'}<br/>
        modo="{modo}"<br/>
        title="title"<br/>
        canonical="/"<br/>
       {'/>'}
    </div>
);

export default moHeaderSideDoValente;

