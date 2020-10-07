import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║ Tutorial - Banco de Dados ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Banco de Dados" 
        description="O que é um Banco de Dados" 
        canonical="/tutorial/bancodedados/"
        keywords="Banco de Dados, bigdata, tutorial, Relacionais, JSON, Chave-Valor"
        />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Banco de Dados">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>O que é um Banco de Dados?</h1>
            <p>
              Bancos de dados ou bases de dados são conjuntos de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas.<br/>
              São coleções organizadas de dados que se relacionam de forma a criar algum sentido (Informação) e dar mais eficiência durante uma pesquisa ou estudo cientifico.<br/>
              Bancos de dados podem ser relacionais ou não relacionais. 
            </p>
            <p>
              Relacionais:<br/>
              Cada tabela em um banco de dados relacional contém um ou mais dados em colunas, e cada linha, também chamada de registro, contém uma instância exclusiva de dados ou chave para os dados definidos pelas colunas. Cada tabela normalmente possui uma coluna de chave primária, um registro único dentro da tabela para identificar os registros. O relacionamento entre tabelas pode ser definido através do uso de chaves estrangeiras – um campo em uma tabela que se vincula à chave primária de outra tabela.<br/>
              Bancos de dados relacionais utilisão SQL. 
            </p>
            <p>
              Não Relacionais:<br/>
              Existem diversos tipos de banco de dados não relacional, eles são categorizadas pela sua maneira de armazenamento de dados.<br/>
              Os dois tipos mais utilizados de bancos NoSQL são:
            </p>
            <p>
              Banco de Documentos:<br/>
              Armazena seus dados em documentos semelhantes aos objetos JSON (JavaScript Object Notation).
            </p>
            <p>
              Chave-Valor:<br/>
              São um tipo mais “simples” de banco de dados, em que cada item contém chaves e valores.
              Esses valores podem ser qualquer tipo de dado, um texto, um número, um JSON e eles podem ser recuperados fazendo referência a sua chave, fazendo com que sua consulta seja muito simples. Esses bancos são ótimos para quando você precisa armazenar grandes quantidades de dados, mas não precisa executar consultas complexas neles. 
              Os usos mais comuns são ​​para armazenamento de dados em cache. 
              Redis e DynanoDB são provavelmente os bancos mais populares desse tipo.
            </p>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logobancodedados.svg"
                  width="200px"
                  height="200px"
                  alt="Logo bancodedados"
                  title="Logo bancodedados"
                  class="ClassLogobancodedados"
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
