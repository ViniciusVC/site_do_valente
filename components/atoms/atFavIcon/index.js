//Component atomo atFavIcon.js
import React from 'react'
import * as Util from '../../../controller/util.js';

const atFavIcon = props => {
  var icohref = Util.validaProps(props.icohref,"/static/assetsv5/img/faviconvvc.ico");
  return(
    <link rel="icon" href={icohref} />
  )
}
export default atFavIcon
