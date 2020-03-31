import React from 'react'
import * as Util from '../../../controller/util.js';

const moOptRegiao = function (props) {
  const modo = props.modo;
  const JsonRegiao = props.JsonRegiao;
  const listaRegioes = Util.listaRegioes();
  return listaRegioes.map((item, i) => {
    if(item.sigla!=JsonRegiao.sigla){
        return (<option value={item.sigla}>{item.sigla+'-'+item.estado}</option>)
    }
  })
}

export default moOptRegiao
