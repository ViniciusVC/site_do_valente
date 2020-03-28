import React from 'react'
import Img from '../../atoms/atImg/index.js';
import Div from '../../atoms/atDiv'
import SelectOption from './selectOption.js'

import * as Util from '../../../controller/util.js';
//console.log('moHeaderSideDoValente ');

const moHeaderSideDoValente = function (props) {
  const regiao = props.regiao;
  const modo = props.modo;
  const JsonRegiao = Util.regiao(regiao);
  var StringModo = "";
  if(modo=="AMP" || modo=="amp"){
    StringModo = "/amp";
  }
  console.log("regiao="+regiao);
  console.log("modo="+modo);
  console.log(JsonRegiao);
  console.log('╔════════════════════════════════╗');
  console.log(JsonRegiao.estado);
  console.log(JsonRegiao.capital);
  console.log('╚════════════════════════════════╝');
  
  const listaRegioes = Util.listaRegioes();

  // function submit(){
  //   document.getElementById("regiao").submit()
  // }
  
  function selectRegiao(){
    if(modo=="AMP" || modo=="amp"){
      return (
        <span>{'Região(Estado) :'+JsonRegiao.sigla+'-'+JsonRegiao.estado}<br/></span>
      )
    }else{
      return(
        <form id="formregiao" name="formregiao" method="GET">
        Região(Estado) : <br/>
        <select id="regiao" name="regiao" onChange={() => {document.getElementById("formregiao").submit()}}>
          <option value={JsonRegiao.sigla} select>{JsonRegiao.sigla+'-'+JsonRegiao.estado}</option>
          {retornaRegioesa()}
        </select>
      </form>
      )
    }
  }

  function retornaRegioesa(){
    listaRegioes.map((item, i) => {
      if(item.sigla!=JsonRegiao.sigla){
        return (<option value={item.sigla}>{item.sigla+'-'+item.estado}</option>)
      }
    })
  }

  return (
    <Div display="justificado">
        <div className="DivHeaderSideDoValente logo">
          <a href={StringModo+"/?regiao="+regiao} >
            <Img src="/static/assetsv5/img/log_laranja1.png" width="50px" height="50px" alt="Logo Site Valente" title="Logo Site Valente" class="LogoSiteValente" modo={modo} />
          </a>
        </div>
        <div className='DivHeaderSideDoValente pHeaderSideDoValente'>
          <span>Site do Valente</span>
        </div>
        <div>
          <span>
            Modo : {modo}<br/>
            {selectRegiao()}
            Cidade : {JsonRegiao.capital}
          </span>
        </div>
      <style jsx>{`
      .logo{
        padding-top: 10px;
        animation-duration: 1s;
        animation-name: slideinSombra;
      }
      @keyframes slideinSombra {
        from {
          padding-top: 0px;
        }
        to {
          padding-top: 10px;
        }
      }

      .DivHeaderSideDoValente{
        margin:0px;
      }
      .pHeaderSideDoValente{
        padding-top: 15px;
        font-size: 40px;
        font-family: sans-serif;
        text-align: center;
      }
    `}</style>
    </Div>
  )
}

export default moHeaderSideDoValente
