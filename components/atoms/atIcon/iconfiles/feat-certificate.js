import React from 'react'
import Gradiente from '../gradiente.js';

export const feat_certificate = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 74 74" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor} transform="translate(-694 -348)">
      <path d="M767.903 348H694.61v55.597h41.85V422l10.438-6.718L757.303 422v-18.403h10.632V348h-.032zm-21.038 56.02c-5.623 0-10.21-4.61-10.21-10.257 0-5.647 4.587-10.256 10.21-10.256 5.623 0 10.212 4.61 10.212 10.256 0 5.648-4.59 10.256-10.212 10.256zm0 7.01l-6.883 4.446v-9.704c2.036 1.168 4.363 1.85 6.883 1.85 2.49 0 4.815-.682 6.82-1.818v9.672l-6.82-4.446zm17.483-11.003h-5.203c.938-1.882 1.487-3.992 1.487-6.23 0-7.63-6.172-13.828-13.767-13.828-7.594 0-13.766 6.198-13.766 13.826 0 2.24.548 4.38 1.485 6.23h-36.452V351.57h66.183v48.457h.032zm-17.483-12.43c-3.393 0-6.14 2.758-6.14 6.166 0 3.408 2.747 6.167 6.14 6.167 3.394 0 6.14-2.76 6.14-6.167 0-3.375-2.746-6.167-6.14-6.167zm0 9.444c-1.777 0-3.23-1.46-3.23-3.244 0-1.785 1.453-3.246 3.23-3.246 1.778 0 3.232 1.46 3.232 3.246 0 1.785-1.454 3.245-3.232 3.245zm-41.85-27.197h52.482v3.895h-52.48v-3.895zm0-10.678h52.482v3.895h-52.48v-3.895zm0 21.356h26.565v3.896h-26.564v-3.895z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default feat_certificate
