import React from 'react'
import Gradiente from '../gradiente.js';

export const circulo = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.6 489.6" fill={fillColor}>
	<g>
		<ellipse fill={fillColor} cx="245" cy="245" rx="245" ry="245" />
	</g>
  <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
</svg>
);

export default circulo
