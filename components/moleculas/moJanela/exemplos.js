
import React from 'react';
import Janela from './index.js';

export const moJanela = (modo) => (
    <div>
      <h2>moHeaderSideDoValente</h2>
        <div>
        <Janela estilo="luz">
          Conteudo
        </Janela>
        {'<Janela estilo="luz">Conteudo</Janela>'}<br/>
        modo="{modo}"<br/> <br/>
        </div>
        <div>
        <Janela estilo="neon">
          Conteudo
        </Janela>
        {'<Janela estilo="neon">Conteudo</Janela>'}<br/>
        modo="{modo}"<br/> <br/>
        </div>
        <div>
        <Janela estilo="escuro">
          Conteudo
        </Janela>
        {'Codigo : <Janela estilo="escuro">Conteudo</Janela>'}<br/>
        modo="{modo}"<br/> <br/>
        </div>
        <div>
        <Janela estilo="naveg">
          Conteudo
        </Janela>
        {'Codigo : <Janela estilo="naveg">Conteudo</Janela>'}<br/>
        modo="{modo}"<br/> <br/>
        </div>
        <div>
        <Janela estilo="terminal">
          Conteudo
        </Janela>
        {'Codigo : <Janela estilo="terminal">Conteudo</Janela>'}<br/>
        modo="{modo}"<br/> <br/>
        </div>
        <div>
        <Janela>
          Conteudo
        </Janela>
        {'Codigo : <Janela>Conteudo</Janela>'}<br/>
        modo="{modo}"<br/> <br/>
        </div>
    </div>
);

export default moJanela;
