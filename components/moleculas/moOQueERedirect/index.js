// Esplicação rapida sobre o que é o Redirect 301.
import React from 'react';

const moOQueERedirect = props => {  
  return(
    <div>
      <span>
        <h3>O que é o Redirect 301?</h3><br/>
        O Redirect 301 é uma instrução no servidor que informa que a Página A agora é a Página B, de forma que quando o visitante acessar a Página A será automaticamente remetido para o endereço da Página B.<br/>
        É através desse mecanismo que quando você acessa unibanco.com.br cai em itau.com.br e também quando você acessa www.vvcestudio.com.br cai em vvcestudio.com.br.<br/>
      </span>
      <style jsx>{`
        .obs{
          font-family: "SimplonBP-Regular",Arial;
        }
      `}</style>
    </div>
    )
};

export default moOQueERedirect