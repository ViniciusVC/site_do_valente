import React from 'react'

//console.log('moHeaderSideDoValente ');

const moHeaderSideDoValente = function (props) {
  var cidade = props.cidade;
  var modo = props.modo;

  return (
      <div className='DivSombra'>
        <p>Site do Valente<br/>
        Cidade : {cidade}<br/>
        Modo : {modo}</p>
      <style jsx>{`
      .DivSombra{
        background-color: #696969;
        width: 100%;
        color: #333;
        font-size: 17px;
        font-family: sans-serif;
        background-color: #ffffff;
        border-radius: 8px;
        color: #222222;
        display: block;
        /*height: 3.42857143rem;*/
        text-align: center;
        border: solid 1px #dbdbdb;
        padding: 0px;
        box-sizing: border-box;
        -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
        -moz-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
        box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);        
      }
    `}</style>
    </div>
  )
}

export default moHeaderSideDoValente
