import React from 'react';
import Gradiente from '../gradiente.js';

export const configuracao = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <g fill={fillColor} fillRule="evenodd">
      <path  d="M27.455 17.568c.064-.512.112-1.024.112-1.568s-.048-1.056-.112-1.568l3.376-2.64a.807.807 0 0 0 .192-1.024l-3.2-5.536c-.192-.352-.624-.48-.976-.352l-3.984 1.6a11.69 11.69 0 0 0-2.704-1.568L19.55.672A.78.78 0 0 0 18.767 0h-6.4a.78.78 0 0 0-.784.672l-.608 4.24c-.976.4-1.872.944-2.704 1.568l-3.984-1.6a.78.78 0 0 0-.976.352l-3.2 5.536a.789.789 0 0 0 .192 1.024l3.376 2.64c-.064.512-.112 1.04-.112 1.568s.048 1.056.112 1.568l-3.376 2.64a.807.807 0 0 0-.192 1.024l3.2 5.536c.192.352.624.48.976.352l3.984-1.6a11.69 11.69 0 0 0 2.704 1.568l.608 4.24a.78.78 0 0 0 .784.672h6.4a.78.78 0 0 0 .784-.672l.608-4.24c.976-.4 1.872-.944 2.704-1.568l3.984 1.6a.78.78 0 0 0 .976-.352l3.2-5.536a.807.807 0 0 0-.192-1.024l-3.376-2.64zM15.567 21.6a5.606 5.606 0 0 1-5.6-5.6c0-3.088 2.512-5.6 5.6-5.6 3.088 0 5.6 2.512 5.6 5.6 0 3.088-2.512 5.6-5.6 5.6z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default configuracao;
