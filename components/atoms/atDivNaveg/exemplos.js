
import React from 'react';
import DivNaveg from './index.js';

export const atDivNaveg = (modo) => (
    <div >
      <div className="p"><h2>atDivNaveg</h2></div>
        
      <div>
        <h3>Com Titulo</h3>
        <DivNaveg titulo="Html">
          <p>Texto qualquer.</p>
          <p>Texto qualquer.</p>
          <p>Texto qualquer.</p>
        </DivNaveg>
        <p className="p">
            Codigo : {'<DivCodigo display="Html"></DivCodigo>'}<br/>
            modo={modo}
        </p>
      </div>

      <div>
        <h3>Sem Titulo</h3>
        <DivNaveg>
          <p>Texto qualquer.</p>
          <p>Texto qualquer.</p>
          <p>Texto qualquer.</p>
        </DivNaveg>
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

export default atDivNaveg;
