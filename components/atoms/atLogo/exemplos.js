
import React from 'react';
import Logo from './index.js';
import Div from '../atDiv/index.js';
import * as logos from './logofiles';

export const atLogo = (modo) => (
  <Div display="justificado">

      <Div display="vertical">
        <h2>atIcon</h2>
        <Logo type="oi"/>
        <p className="p">código : {'<Logo type="oi"/>'}</p>
        <Logo type="minhaoi"/>
        <p className="p">código : {'<Logo type="minhaoi"/>'}</p>
        <Logo type="minhaoi2"/>
        <p className="p">código : {'<Logo type="minhaoi2"/>'}</p>
        <Logo type="minhaoi3"/>
        <p className="p">código : {'<Logo type="minhaoi3"/>'}</p>
        <Logo type="oiPlay"/>
        <p className="p">código : {'<Logo type="oiplay"/>'}</p>
        <Logo type="roxo01"/>
        <p className="p">código : {'<Logo type="roxo01"/>'}</p>
        <Logo type="roxo02"/>
        <p className="p">código : {'<Logo type="roxo02"/>'}</p>
        <p>modo={modo}</p>
      </Div>
      <Div display="vertical">
        <h2>atIcon</h2>
        <Logo type="oi" width="40px"/>
        <p className="p">código : {'<Logo type="oi" width="40px"/>'}</p>
        <Logo type="minhaoi" width="40px"/>
        <p className="p">código : {'<Logo type="minhaoi" width="40px"/>'}</p>
        <Logo type="minhaoi2" width="40px"/>
        <p className="p">código : {'<Logo type="minhaoi2" width="40px"/>'}</p>
        <Logo type="minhaoi3" width="40px"/>
        <p className="p">código : {'<Logo type="minhaoi3" width="40px"/>'}</p>
        <Logo type="oiPlay" width="40px"/>
        <p className="p">código : {'<Logo type="oiplay" width="40px"/>'}</p>
        <Logo type="roxo01" width="40px"/>
        <p className="p">código : {'<Logo type="roxo01" width="40px"/>'}</p>
        <Logo type="roxo02" width="40px"/>
        <p className="p">código : {'<Logo type="roxo02" width="40px"/>'}</p>
        <p>modo={modo}</p>
      </Div>
      <Div display="vertical">
        <h2>atIcon</h2>
        <Logo type="oi" width="80px"/>
        <p className="p">código : {'<Logo type="oi" width="80px"/>'}</p>
        <Logo type="minhaoi" width="80px"/>
        <p className="p">código : {'<Logo type="minhaoi" width="80px"/>'}</p>
        <Logo type="minhaoi2" width="80px"/>
        <p className="p">código : {'<Logo type="minhaoi2" width="80px"/>'}</p>
        <Logo type="minhaoi3" width="80px"/>
        <p className="p">código : {'<Logo type="minhaoi3" width="80px"/>'}</p>
        <Logo type="oiPlay" width="80px"/>
        <p className="p">código : {'<Logo type="oiplay" width="80px"/>'}</p>
        <Logo type="roxo01" width="80px"/>
        <p className="p">código : {'<Logo type="roxo01" width="80px"/>'}</p>
        <Logo type="roxo02" width="80px"/>
        <p className="p">código : {'<Logo type="roxo02" width="80px"/>'}</p>
        <p>modo={modo}</p>
      </Div>
      <style jsx>{`
          .p{
            margin-top: 40px; 
            background-color: #ffffff;
            color: #000000
          }
        `}</style>
    
  </Div>
);

export default atLogo;