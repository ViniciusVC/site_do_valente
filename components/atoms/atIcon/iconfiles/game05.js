import React from 'react';
import Gradiente from '../gradiente.js';

export const game05 = (id, fillColor, ColorGradient1, ColorGradient2) => (
      <svg viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g fill={fillColor}>
          <path d="M3005 6219 c-482 -14 -755 -85 -977 -256 -370 -284 -554 -758 -586 -1508 -13 -295 -7 -1763 7 -1910 63 -639 232 -1039 543 -1290 181 -145 392 -218 743 -256 154 -17 6956 -26 7225 -9 396 23 629 84 826 215 249 166 430 437 533 795 52 183 80 353 101 605 16 182 16 1858 1 2030 -41 468 -140 804 -314 1065 -73 110 -243 274 -349 336 -164 96 -385 153 -683 173 -169 12 -6669 20 -7070 10z m-560 -754 c156 -41 287 -175 331 -338 28 -107 11 -239 -44 -341 -54 -100 -177 -195 -290 -226 -62 -16 -187 -13 -252 6 -301 88 -429 446 -254 711 108 161 315 238 509 188z m8208 0 c88 -23 156 -62 217 -124 289 -297 82 -791 -331 -792 -92 0 -144 12 -222 53 -286 152 -331 542 -88 760 55 49 133 92 198 107 60 14 164 12 226 -4z m-1413 -1870 l0 -1635 -2802 2 -2803 3 -3 1633 -2 1632 2805 0 2805 0 0 -1635z m1018 778 c15 -11 38 -35 50 -54 20 -28 23 -44 20 -92 -3 -36 -12 -67 -24 -85 -24 -32 -98 -72 -134 -72 -40 0 -113 42 -137 79 -27 40 -31 117 -9 159 18 34 53 68 86 81 37 16 117 7 148 -16z m-7396 -220 l3 -168 168 -3 167 -2 0 -120 0 -120 -170 0 -170 0 0 -170 0 -170 -120 0 -120 0 0 170 0 170 -170 0 -170 0 0 120 0 120 168 2 167 3 3 168 2 167 120 0 120 0 2 -167z m6996 -190 c88 -66 88 -201 -1 -267 -22 -16 -43 -21 -95 -21 -77 0 -107 17 -141 76 -43 76 -19 164 59 217 29 20 44 23 93 20 37 -3 67 -11 85 -25z m802 5 c57 -39 75 -72 75 -138 0 -66 -18 -99 -75 -137 -39 -27 -116 -31 -160 -8 -43 22 -79 76 -86 126 -7 56 26 124 75 156 47 32 125 32 171 1z m-406 -406 c44 -26 68 -65 74 -121 6 -62 -9 -101 -54 -141 -64 -56 -151 -52 -217 9 -37 35 -41 43 -45 98 -6 88 26 140 105 169 43 16 94 10 137 -14z m-454 -627 c36 -19 60 -62 60 -110 0 -98 -100 -156 -189 -111 -73 38 -86 140 -26 201 30 30 42 35 81 35 25 0 58 -7 74 -15z m-10 -510 c47 -24 70 -62 70 -116 0 -111 -123 -165 -210 -93 -111 94 10 276 140 209z"/>
          <path d="M2241 5409 c-139 -27 -259 -139 -303 -283 -57 -189 35 -392 220 -479 61 -29 75 -32 162 -31 126 0 188 25 274 105 72 67 111 141 127 240 33 205 -117 409 -330 449 -61 11 -88 11 -150 -1z m224 -73 c108 -49 182 -144 205 -264 30 -151 -51 -307 -198 -379 -50 -24 -69 -28 -147 -28 -76 0 -99 4 -146 26 -161 76 -244 254 -195 422 59 202 291 310 481 223z"/>
          <path d="M10460 5409 c-119 -23 -237 -116 -286 -224 -144 -313 150 -657 475 -556 124 39 200 104 255 220 28 60 31 75 31 166 0 94 -2 105 -33 168 -59 120 -160 199 -290 226 -60 12 -88 13 -152 0z m181 -59 c162 -51 258 -192 247 -365 -8 -127 -85 -237 -207 -294 -47 -22 -70 -26 -146 -26 -78 0 -98 4 -145 27 -75 37 -137 100 -173 177 -92 194 21 430 232 487 67 18 121 17 192 -6z"/>
          <path d="M3720 3600 l0 -1540 2720 0 2720 0 0 1540 0 1540 -2720 0 -2720 0 0 -1540z m5370 -5 l0 -1485 -2652 2 -2653 3 -3 1483 -2 1482 2655 0 2655 0 0 -1485z"/>
          <path d="M2700 4125 l0 -66 43 3 42 3 0 60 0 60 -42 3 -43 3 0 -66z"/>
          <path d="M2420 3865 l0 -45 60 0 60 0 0 45 0 45 -60 0 -60 0 0 -45z"/>
          <path d="M2940 3865 l0 -45 65 0 65 0 0 45 0 45 -65 0 -65 0 0 -45z"/>
          <path d="M2700 3600 l0 -60 45 0 45 0 0 60 0 60 -45 0 -45 0 0 -60z"/>
        </g>
        <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
      </svg>
)

export default game05;
