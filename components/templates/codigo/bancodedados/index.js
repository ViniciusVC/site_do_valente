import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import BtLink from '../../../atoms/atBtLink'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
//import DivCodigo from '../../../atoms/atDivCodigo'
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
            <h3>Relacionais:</h3>
            <p>
              Cada tabela em um banco de dados relacional contém um ou mais dados em colunas, e cada linha, também chamada de registro, contém uma instância exclusiva de dados ou chave para os dados definidos pelas colunas. <br/>
              Cada tabela normalmente possui uma coluna de chave primária, um registro único dentro da tabela para identificar os registros. <br/>
              O relacionamento entre tabelas pode ser definido através do uso de chaves estrangeiras – um campo em uma tabela que se vincula à chave primária de outra tabela.<br/>
              Bancos de dados relacionais utilisão <BtLink href={"/tutorial/bancodedados/sql/?regiao="+regiao} value="SQL" estilo="neonLink"/>. 
            </p>
            <h3>Não Relacionais:</h3>
            <p>
              
              Existem diversos tipos de banco de dados não relacional, eles são categorizadas pela sua maneira de armazenamento de dados.<br/>
              Os dois tipos mais utilizados de bancos NoSQL são:
            </p>
            <h4>Banco de Documentos:</h4>
            <p>
              Armazena seus dados em documentos semelhantes aos objetos JSON (JavaScript Object Notation).
            </p>
            <h4>Chave-Valor:</h4>
            <p>
              São um tipo mais “simples” de banco de dados, em que cada item contém chaves e valores.<br/>
              Esses valores podem ser qualquer tipo de dado, um texto, um número, um JSON e eles podem ser recuperados fazendo referência a sua chave, fazendo com que sua consulta seja muito simples. <br/>
              Esses bancos são ótimos para quando você precisa armazenar grandes quantidades de dados, mas não precisa executar consultas complexas neles.<br/> 
              Os usos mais comuns são ​​para armazenamento de dados em cache.<br/> 
              Redis e DynanoDB são provavelmente os bancos mais populares desse tipo.
            </p>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/bancodedados.jpeg"
                  width="200px"
                  height="200px"
                  alt="Logo bancodedados"
                  title="Logo bancodedados"
                  class="ClassLogobancodedados"
                  modo={modo}>
            </Img>
            <div>
              Veja tambem:<br/>
              <BtLink href={"/tutorial/bancodedados/hadoop/?regiao="+regiao} value="Big Data" estilo="neon"/>
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
