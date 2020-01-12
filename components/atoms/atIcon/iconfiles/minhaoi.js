
import React from 'react'
import Gradiente from '../gradiente.js';

export const minhaoi = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 19">
    <g fill={fillColor}>
      <path fillRule="evenodd" d="M7.832 10.488L3.344 1.2H.776V18H3.32V6.336l3.456 7.152h2.112l3.456-7.152V18h2.544V1.2H12.32l-4.488 9.288zm19.2-6.744V1.2H18.08v2.544h3.192v11.712H18.08V18h8.952v-2.544H23.84V3.744h3.192zM42.272 1.2h-2.568v12.048L32.792 1.2h-2.568V18h2.568V5.952L39.704 18h2.568V1.2zm13.032 7.056h-6.912V1.2h-2.568V18h2.568v-7.2h6.912V18h2.568V1.2h-2.568v7.056zm9.408 3.312h4.656L67.04 4.896l-2.328 6.672zM71.6 18l-1.416-4.056h-6.288L62.48 18h-2.64l5.88-16.8h2.64L74.24 18H71.6zm9.36-5.688V6.888c0-3.624 2.424-5.928 6.024-5.928s6.024 2.304 6.024 5.928v5.424c0 3.624-2.424 5.928-6.024 5.928s-6.024-2.304-6.024-5.928zm9.48 0V6.888c0-2.352-1.776-3.384-3.456-3.384s-3.456 1.032-3.456 3.384v5.424c0 2.352 1.776 3.384 3.456 3.384s3.456-1.032 3.456-3.384zm14.208-8.568V1.2h-8.952v2.544h3.192v11.712h-3.192V18h8.952v-2.544h-3.192V3.744h3.192z"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
)

export default minhaoi
