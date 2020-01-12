import React from 'react'

//console.log('moHeaderSideDoValente ');

const moHeaderSideDoValente = function (props) {
  var cidade = props.cidade;
  var modo = props.modo;

  return (
    <div className='DivHeaderSideDoValente'>
      <p>Site do Valente<br/>
      Cidade : {cidade}<br/>
      Modo : {modo}</p>
      <style jsx>{`
      .DivHeaderSideDoValente {
        background-color: #696969;
        width: 100%;
        color: #333;
        font-size: 17px;
      }
    `}</style>
    </div>
  )
}

export default moHeaderSideDoValente
