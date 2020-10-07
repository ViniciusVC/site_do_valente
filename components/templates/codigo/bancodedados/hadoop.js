import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔═══════════════════╗');
  console.log('║ Tutorial - Hadoop ║');
  console.log('╚═══════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Big Data Hadoop" 
        description="O que é o Hadoop Big Data" 
        canonical="/tutorial/bancodedados/hadoop/"
        keywords="Hadoop, banco de dados, bigdata, tutorial, EdgeNode, NameNode, DataNode"
        />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Banco de Dados">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>Big Data Hadoop</h1>
            <h3>O que é Hadoop?</h3>
            <p>            
              Hadoop é uma plataforma de software em Java de computação distribuída voltada para clusters e processamento de grandes volumes de dados, com atenção a tolerância a falhas. <br/>
              Foi inspirada no MapReduce e no GoogleFS. <br/>
              <br/>
            </p>
            <h3>Arquitetura</h3>
            <p>
              EdgeNode - Maquina de acesso ao hadoop.<br/>
              NameNode - (Masters) Master. Possui os metadados. Server NameNode. Mapa do cluster.<br/>
              DataNode - Onde ficam os dados e rodam os processos. O conjunto de DataNodes fica dentro do Cluster do hadoop. O arquivo Grande é dividido em 3 partes e duplicado para 6 servidores diferentes do DataNode.<br/>
              <br/>
            </p>
            <p>
              BATH - Processamentos : MapReduce, Hive, Spark(É o que o Hub Está usando)<br/>
              STREAM -<br/>
              SQL - Impala: Ideal para extrair relatorios (select)<br/>
              SERCH -<br/>
              <br/>
            </p>
            <h3>Ecosistema</h3>
            <p>
              Spark - Melhor do que MapReduce mais fácil de usar.<br/>
              HBase - Não relacional, não permite alterar parte do arquivo. <br/>
              Hive - Bom para mastigar Dados<br/>
              Impala - Tambem usa SQL mais inteligente.<br/>
              Parquet - <br/>
              Sqoop - Integrar dados ler dados externos.<br/>
              Solr - <br/>
              Hue - Apenas para usuários avançados<br/>
              Oozie - Não use [control-M]<br/>
              Sentry - Prove a ... <br/>
              <br/>
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
    `}</style>
    </div>
  )
}

export default codigoJava
