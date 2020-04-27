
import React from 'react';
import DivCodigo from './index.js';

export const atDivCodigo = (modo) => (
    <div >
      <div className="p"><h2>atDivCodigo</h2></div>
        
      <div>
        <h3>Com Titulo</h3>
        <DivCodigo titulo="Html">
          <p>Texto qualquer.</p>
          <p>Texto qualquer.</p>
          <p>Texto qualquer.</p>
        </DivCodigo>
        <p className="p">
            Codigo : {'<DivCodigo display="Html"></DivCodigo>'}<br/>
            modo={modo}
        </p>
      </div>

      <div>
        <h3>Sem Titulo</h3>
        <DivCodigo>
          <p>Texto qualquer.</p>
          <p>Texto qualquer.</p>
          <p>Texto qualquer.</p>
        </DivCodigo>
          <p className="p">
            Codigo : {'<DivCodigo display="responsivo"></DivCodigo>'}<br/>
            modo={modo}
          </p>
      </div>
        
      <style jsx>{`
          .p{ 
            background-color: #ffffff;
            color: #000000
          }
      `}</style>
    </div>
);

export default atDivCodigo;
