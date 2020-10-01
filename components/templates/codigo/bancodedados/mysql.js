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
  console.log('║ Tutorial my sql no ubuntu ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="MYSQL no Ubuntu" 
        description="INstalar MYSQL no Ubuntu" 
        canonical="/tutorial/mysql/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Banco de Dados">
        <div className="coluna404">
          <h1>MySQL no Ubuntu</h1>
          <h3>O que é MySQL</h3>
          <p>
            O MySQL é um sistema de gerenciamento de banco de dados (SGBD), que utiliza a linguagem SQL (Linguagem de Consulta Estruturada, do inglês Structured Query Language) como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares[2] da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.
          </p>
          <h3>Instalar MySQL no Ubuntu</h3>
          <DivCodigo titulo="Instalar MySQL.">
            $ sudo Apt-get install mysql-server mysql-client<br/>
          </DivCodigo>
          Responder sim para continuar<br/>
          Criar senha<br/>
          <br/>
          <br/>
          <DivCodigo titulo="Iniciar o MySQL no Prompt.">
          $ mysql -u root -p <br/>
          </DivCodigo>
          Enter password:<br/>
          <br/>
          <br/>
          //Criar usuário “vinicius” para administrar o banco de dados.<br/>
          <DivCodigo titulo="Criar usuário administrador BD.">
          mysql> CREATE USER ‘vinicius’@’%’ IDENTIFIED BY ‘senha’;<br/>
          </DivCodigo>
          Retorna : “Query OK”<br/>
          <br/>
          <br/>
          Dar permissão total ao usuário “vinicius”.
          <DivCodigo titulo="Limpar privilegios.">
            mysql> GRANT ALL PRIVILEGES ON *.* TO ‘vinicius’@’%’;<br/>
            Query OK<br/>
          </DivCodigo>
          Retorna : “Query OK”
          <br/>
          <br/>
          Dar FLUSH nos privilegios.
          <DivCodigo titulo="Limpar privilegios.">
            mysql> flush privileges;<br/>
            Query OK<br/>
          </DivCodigo>
          #Retorna : “Query OK”
          <br/>
          <br/>
          <DivCodigo titulo="sair do MySQL">
            mysql> Quit<br/>
          </DivCodigo>
          <br/>
          <br/>
          Testar usuário criado no MySQL no Prompt.
          <DivCodigo titulo="Testar usuário">
            $ mysql -u vinicius -p
            Enter password: 
          </DivCodigo>
          <br/>
          <br/>
          Por padrão o MySQL é acessado apenas por localhost.<br/>
          Para liberar o MySQL para ser acessado por outros hosts(IP).<br/>
          <DivCodigo titulo="liberar para outros hosts">
            $ sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf<br/>
          </DivCodigo>
          #Alterar o IP para *<br/>
          bind-addresse = 127.0.0.1<br/>
          <br/>
          <br/>
          Para as configurações terem efeito é preciso reiniciar o SQL.
          <DivCodigo titulo="Reiniciar o MySQL.">
            $ sudo /etc/init.d/mysql restart
          </DivCodigo>
          Retorna : “[ ok ]”<br/>
          Ou  
          <DivCodigo titulo="Reiniciar o MySQL.">
            $ sudo service restart<br/>
          </DivCodigo>
          Retorna : “stop/waiting - start/running, process”<br/>
          <DivCodigo titulo="Abrir o arquivo de configuração do MySQL pelo editor vi.">
            $ vi /etc/mysql/my.cnf
          </DivCodigo>	
          #Mostra a porta padrão do MySQL<br/>
          #E o local host 127.0.0.1<br/>
          <br/>
          Alterar a senha do usuário<br/>
          <DivCodigo titulo="Alterar a senha do usuário">
            $ sudo mysqladmin -u root -p password<br/>
          </DivCodigo>	
           
          <br/>

          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logomysql.png"
                  width="200px"
                  height="200px"
                  alt="Logo MySQL"
                  title="Logo MySQL"
                  class="ClassLogoMySQL"
                  modo={modo}>
            </Img>
          </div>
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
