// Rotas 
// http://www.vvcestudio.com.br/tutorial/python/
// http://www.vvcestudio.com.br/amp/tutorial/python/

import React from 'react';
import Img from '../../../atoms/atImg/index.js';
import Div from '../../../atoms/atDiv/index.js';
import BtLink from '../../../atoms/atBtLink';
import DivCodigo from '../../../atoms/atDivCodigo';
import Layout from '../../../moleculas/layout';
import MoHead from '../../../moleculas/moHead';
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║    Tutorial  Python       ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Python" 
        description="O que é Python" 
        canonical="/tutorial/python/"
        keywords="Python, Tutorial, linguagem, programação, codigo, variavel, loop"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>O que é Python?</h1>
            <p>Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.<br/>
              Foi lançada por Guido van Rossum em 1991.<br/>
            </p>
            <DivCodigo titulo="Exemplo de código Python">
              {'x = 1'}<br/>
              {'if x == 1:'}<br/>
              {'# indented four spaces'}<br/>
              {'print("x is 1.")'}<br/>
            </DivCodigo>
            <p>
              A linguagem foi projetada com a filosofia de enfatizar a importância do esforço do programador sobre o esforço computacional.<br/>
              Prioriza a legibilidade do código sobre a velocidade ou expressividade.<br/>
              Combina uma sintaxe concisa e clara com os recursos poderosos de sua biblioteca padrão e por módulos e frameworks desenvolvidos por terceiros.<br/>
              Python é uma linguagem de propósito geral de alto nível, multiparadigma, suporta o paradigma orientado a objetos, imperativo, funcional e procedural.<br/>
              Possui tipagem dinâmica e uma de suas principais características é permitir a fácil leitura do código e exigir poucas linhas de código se comparado ao mesmo programa em outras linguagens.<br/>
              Devido às suas características, ela é principalmente utilizada para processamento de textos, dados científicos e criação de CGIs para páginas dinâmicas para a web.<br/>
              Foi considerada pelo público a 3ª linguagem "mais amada", de acordo com uma pesquisa conduzida pelo site Stack Overflow em 2018, e está entre as 5 linguagens mais populares, de acordo com uma pesquisa conduzida pela RedMonk.<br/>
            </p>
            <h3>Usando o Python</h3>
            <DivCodigo titulo="Entrar prompt de comandos do Python">
              $ python<br/>
            </DivCodigo>
            obs.: (Use "python" tudo minusculo)
            <DivCodigo titulo="Sair do prompt de comandos do Python">
              exit()<br/>
              &nbsp;# ou <br/>
              Control D<br/>
            </DivCodigo>
            <DivCodigo titulo="Declarar variavel">
              a = 3<br/>
            </DivCodigo>
            <DivCodigo titulo="Declarar uma Lista">
              a = [0,1,3]<br/>
            </DivCodigo>
            <DivCodigo titulo="Comentario em Python">
              #este é um comentario.<br/>
            </DivCodigo>
            <DivCodigo titulo="Criar um Loop for">
              for item in range(10):<br/>
              &nbsp;&nbsp;&nbsp;print(item)<br/>
            </DivCodigo>
            <DivCodigo titulo="Condicional (IF)">
              if a > 2:<br/>
              &nbsp;&nbsp;&nbsp;print("A é maior que 2")<br/>
            </DivCodigo>
            Note que a identação no Python é obrigatoria.
            <DivCodigo titulo="função no python">
              def nome_da_funcao(qtd_horas, valor_hora):<br/>
              &nbsp;&nbsp;horas = float(qtd_horas)<br/>
              &nbsp;&nbsp;taxa = float(valor_hora)<br/>
              &nbsp;&nbsp;{'   if horas <= 40:'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;salario=horas*taxa<br/>
              &nbsp;&nbsp;else:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;h_excd = horas - 40<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;salario = 40*taxa+(h_excd*(1.5*taxa))<br/>
              &nbsp;&nbsp;return salario<br/>
            </DivCodigo>

            <DivCodigo titulo="Criar arquivo de codigo Python">
              arquivo.py
            </DivCodigo>
            <DivCodigo titulo="Lendo arquivo CSV no Python">
            import CSV<br/>
            with open('diretorio/arquivo.csv", 'r') as entrada:<br/>
              &nbsp;&nbsp;ler = csv.reader(entrada)<br/>
              &nbsp;&nbsp;next(ler)	<br/>
              &nbsp;&nbsp;for linha in ler:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;print(linha)<br/>
            </DivCodigo>
            <DivCodigo titulo="Rodar um arquivo de código Python 2">
              $ python arquivo.py
            </DivCodigo>
            <DivCodigo titulo="Rodar um arquivo de código Python 3">
              $ python3 arquivo.py
            </DivCodigo>
            <DivCodigo titulo="Para instalar o Python3 no Ubuntu">
              $ sudo apt install python3-pip
            </DivCodigo>
            <p>
            Nota : O nome Python teve a sua origem no grupo humorístico britânico Monty Python. <br/>
            <DivCodigo titulo="Algumas bibliotecas">
              copy :
              numpy :
              scipy : 
              math :
              multiprocessing : 
              functools : 
              time :
              sys : 
              warnings :
              collections :
              datetime : 
              itertools : 
            </DivCodigo>
          </p>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logopython.svg"
                  width="200px"
                  height="200px"
                  alt="Logo python"
                  title="Logo Python"
                  class="ClassLogoPython"
                  modo={modo}>
            </Img>
            <div>

Veja tambe:
  <BtLink href="/tutorial/python/matplotlib/" value="Matplotlib" estilo="neon"/>
  <BtLink href="/tutorial/python/numpy/" value="Numpy" estilo="neon"/>
  <BtLink href="/tutorial/python/pandas" value="Pandas" estilo="neon"/>
  <BtLink href="/tutorial/python/seaborn" value="Seaborn" estilo="neon"/>
  <BtLink href="/tutorial/python/sklearn" value="Sklearn" estilo="neon"/>
  <BtLink href="/tutorial/python/jupyter" value="Jupyter" estilo="neon"/>
  <BtLink href="/tutorial/python/anaconda" value="Anaconda" estilo="neon"/>
</div>
          </div>
        </Div>

      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        .p{
          color : #000000;
        }
    `}</style>
    </div>
  )
}

export default codigoJava
