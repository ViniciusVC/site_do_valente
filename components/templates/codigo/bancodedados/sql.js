import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔════════════════════════╗');
  console.log('║    Tutorial  SQL       ║');
  console.log('╚════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="SQL" 
        description="SQL" 
        canonical="/tutorial/sql/"
        keywords="Banco de Dados, SQL, Select, Insert, Delete, Update, Group By"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Banco de Dados">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>SQL</h1>
            <h3>O que é SQL?</h3>
              <p>
                SQL, ou Structured Query Language, ou Linguagem de Consulta Estruturada, é a linguagem de pesquisa declarativa padrão para banco de dados relacional (base de dados relacional).
                As características originais do SQL foram inspiradas na álgebra relacional.
              </p>
            <h3>A linguagem:</h3>
              <DivCodigo titulo="Adicionar um novo registro">
                Insert Into clientes  (nome, sobrenomes, endereço, cidade, código postal, e-mail, pedidos) Values ('Pedro', 'Palotes', 'Percebe n°13', 'Londrina', '123456', 'pedro@criarweb.com', 33)<br/>
              </DivCodigo>
              Insert Into nome_tabela (nome_campo1, nome_campo2,...) Values (valor_campo1, valor_campo2...)<br/>
              <br/>
              <br/>
              <DivCodigo titulo="Apagar um registro">
                Delete From nome_tabela Where condicoes_de_selecao<br/>
              </DivCodigo>
              <br/>
              <br/>
              <DivCodigo titulo="Atualizar um registro">
                Update clientes Set nome='José' Where nome='Pedro' <br/>
              </DivCodigo>
              Update nome_tabela Set nome_campo1 = valor_campo1, nome_campo2 = valor_campo2,... Where condicoes_de_selecao<br/>
              
              <br/>
              <br/>
              <DivCodigo titulo="Seleção de tabelas I:">
                Select * From clientes<br/>
              </DivCodigo>
              <br/>
              <br/>
              <DivCodigo titulo="Mostrar os clientes da cidade 'Rio de janeiro':">
                Select * From clientes Where cidade Like 'Rio de janeiro'<br/>
              </DivCodigo>
              <br/>
              <br/>
              <DivCodigo titulo="Ordenar o resultado pelo campo nome:">
                Select * From clientes Where cidade Like 'Rio de janeiro' Order By nome<br/>
              </DivCodigo>
              <br/>
              <br/>
              <DivCodigo titulo="Ordenar o resultado pelos campos nome e sobrenome:">
                Select * From clientes Where cidade Like 'Rio de Janeiro' Order By nome, sobrenome<br/>
              </DivCodigo>
              <br/>
              <br/>
              <DivCodigo titulo="É possível também usar ordem inversa:">
                Select * From clientes Order By pedidos Decres<br/>
              </DivCodigo>
              <br/>
              Uma opção interessante é a de efetuar seleções sem coincidência. Se por exemplo, <br/>
              buscássemos saber em que cidades se encontram nossos clientes sem a necessidade de que para isso apareça várias vezes a mesma cidade,<br/>
              usaríamos uma sentença desta classe:<br/>
              <DivCodigo titulo="seleções sem coincidência:">
                Ex.: Select Distinct cidade From clientes Order By cidade <br/>
              </DivCodigo>
              <br/>
              Nesta sentença selecionamos todos os clientes de Salvador cujo nome não seja Jose.<br/>
              Como se pode ver, empregamos Like ao invés de = simplesmente para evitar inconvenientes devido ao emprego ou não de maiúsculas.<br/>
              <DivCodigo titulo="SQL:">
                Select * From clientes Where cidade Like 'salvador' And Not nome Like 'Jose'<br/>
              </DivCodigo>
              <br/>
              Se quiséssemos recolher em uma seleção aos clientes de nossa tabela cujo sobrenome começa por A e cujo número de pedidos esteja compreendido entre 20 e 40:<br/>
              <DivCodigo titulo="SQL:">
                Select * From clientes Where sobrenomes like 'A%' And pedidos Between 20 And 40<br/>
              </DivCodigo>
              <br/>
              O operador In, será visto mais adiante, é muito prático para consultas em várias tabelas. Para casos em uma única tabela é empregada da seguinte forma:<br/>
              <DivCodigo titulo="SQL:">
                Select * From clientes Where cidade In ('Salvador','Fortaleza','Florianopolis') <br/>
              </DivCodigo>
              <br/>
              <br/>
              Select em varias tabelas:<br/>
              <DivCodigo titulo="SQL:">
                Select clientes.sobrenomes, clientes.email From clientes,pedidos Where pedidos.data like '25/02/00' And pedidos.id_cliente= clientes.id_cliente<br/>
                Select pedidos.id_pedido, artigos.titulo From pedidos, artigos Where pedidos.id_artigo=artigos.id_artigo <br/>
              </DivCodigo>
              <br/>
              <br/>
              Dado que o campo da função não existe no banco de dados, pois o estamos gerando virtualmente, isto pode criar inconvenientes quando estivermos trabalhando com nossos scripts na hora de tratar seu valor e seu nome de campo. É por isso que o valor da função tem que ser recuperada a partir de um apelido que nós especificaremos na sentença SQL a partir da instrução AS. A coisa poderia ficar assim:<br/>
              <DivCodigo titulo="SQL:">
              Select Soma(total) As soma_pedidos From pedidos<br/>
              </DivCodigo>
              <br/>
              A partir desta sentença calculamos a soma dos valores de todos os pedidos realizados e armazenamos esse valor em um campo virtual chamado soma_pedidos que poderá ser utilizado como qualquer outro campo por nossas páginas dinâmicas.<br/>
              <br/>
              Obviamente, tudo que foi visto até agora pode ser aplicado neste tipo de funções de modo que, por exemplo, podemos estabelecer condições com a cláusula Where construindo sentenças como esta:<br/>
              <DivCodigo titulo="SQL:">
              Select Soma(quantidade) as soma_artigos From pedidos Where id_artigo=6<br/>
              </DivCodigo>
              <br/>
              Isto nos proporcionaria a quantidade de exemplares de um determinado livro que foram vendidos.<br/>
              <br/>
              Outra propriedade interessante destas funções é que permitem realizar operações com vários campos dentro de um mesmo parênteses:<br/>
              <DivCodigo titulo="SQL:">
              Select Avg(total/quantidade) From pedidos<br/>
              </DivCodigo>
              <br/>
              Esta sentença dá como resultado o preço médio que estão sendo vendidos os livros. Este resultado não tem porquê coincidir com o do preço médio dos livros presentes no inventário, já que, pode ser que as pessoas tenham tendência a comprar os livros caros ou os baratos:<br/>
              <DivCodigo titulo="SQL:">
              Select Avg(precio) as preco_venda From artigos<br/>
              </DivCodigo>
              <br/>
              Uma cláusula interessante no uso das funções é Group By. Esta cláusula nos permite agrupar registros aos quais vamos aplicar a função. Podemos por exemplo calcular o dinheiro gastado por cada cliente:<br/>
              <DivCodigo titulo="SQL:">
              select id_cliente, Soma(total) as soma_pedidos From pedidos Group By id_cliente<br/>
              </DivCodigo>
              <br/>
              Ou saber o número de pedidos que foram realizados:<br/>
              <DivCodigo titulo="SQL:">
              Select id_cliente, Count(*) as numero_pedidos From pedidos Group By id_cliente<br/>
              </DivCodigo>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logosql.svg"
                  width="200px"
                  height="200px"
                  alt="Logo sql"
                  title="Logo sql"
                  class="ClassLogosql"
                  modo={modo}>
            </Img>
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
