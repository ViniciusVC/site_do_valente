import React from 'react'
import * as Util from '../../../controller/util.js';
//console.log('moHeaderSideDoValente ');

const moSelectOption = function (props) {
  const regiao = props.regiao;
  const listaRegioes = Util.listaRegioes();
  var h=0;
  //for (var h=0; h<listaRegioes.length; ++h) {
  //  varRegiao[h].sigla +" - " varRegiao[h].estado
  //}

  // this.listaRegioes.map(function(item, i){
  //   console.log('test');
  //   return <option value={i}>Test</option>
  // })

  listaRegioes.map((item, i) => {
    console.log("listaRegioes="+i+"/"+item.sigla);    
    return (<option value={item.sigla}>{item.estado}</option>)
  })
           
}

export default moSelectOption
