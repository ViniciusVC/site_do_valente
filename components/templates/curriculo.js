import React from 'react'
import Head from 'next/head'
import FavIcon from '../atoms/atFavIcon'
import Div from '../atoms/atDiv'
import ListadeRotas from '../moleculas/moListadeRotas/index.js'
import HeaderSideDoValente from '../moleculas/moHeaderSideDoValente/index.js'
import * as Util from '../../controller/util.js';

const templateHome = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Curriculo                         ║');
  console.log('╚════════════════════════════════════════╝');
  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");
  return (
    <div>
      <Head>
        <title>Vinícius Valente Coutinho</title>
        <FavIcon />
        <meta name="description" content="Curriculo Vinícius Valente Coutinho" />
        <link rel="canonical" href="/curriculo/" />
      </Head>
      <HeaderSideDoValente cidade={cidade} modo={modo} />

      <Div display="justificado">
        <div className="HomeListadeRotas">
          <ListadeRotas />
        </div>
        
        <div className="HomeIndex">
          <h1>CURR&Iacute;CULO</h1>
          Vinicius Valente Coutinho
          <h2>CONTATO:</h2>
          Endere&ccedil;o em RJ: Av tenentecoronel Muniz de Aragão. bairro Anil-Jacarepagua, Rio de janeiro, RJ - CEP.<br/>
          Endere&ccedil;o em MG: Rua Jo&atilde;o Marques de Oliveira, 97, bairro Parte Alta, Bicas, MG - CEP 36600-000.<br/>
          E-mail : vinivalent@gmail.com<br/>
          
          <h2>OBJETIVOS:</h2>
          Lider de equipe<br/>

          <h2>HIST&Oacute;RICO PROFISSIONAL:</h2>
          
          <h3>Oi. Atualmente des de 2018</h3><br/>
          <h3>Especialista em Relacionamento Digital</h3>
          Equipe Insigths:
          <ul>
          <li>Lider técnico de projeto Big Data.</li>
          </ul>
          Equipe e-commerce e SEO: 
          <ul>
          <li>Lider técnico do projeto AMP</li>
          <li>Configuração dos Apaches do site da Oi</li>
          <li>Configuração da CDN-AWS.</li>
          </ul>

          <h3>Analista de Relacionamento Digital.</h3>
          <ul>
          <li>Squad Portal Oi - Desenvolvimento frontand ReactJS</li>
          <li>Squad ___OP - Criação de padrões e melhoria de código frontend.</li>
          </ul>

          <h3>Consultor</h3>
          <ul>
          <li>.</li>
          </ul>
          
          <h3>DBA (alocado na TV Globo) - Consultor. De 16/11/2010 a 31/2/2014</h3>
          <ul>
          <li>Analisar e compreender as exig&ecirc;ncias e funcionalidades que o sistema e aplica&ccedil;&atilde;o devera executar de acordo com os requisitos definidos pela equipe de Internet da CGP; </li>
          <li>Apontar falas corre&ccedil;&otilde;es e melhorias de sistemas existentes;</li>
          <li>Definir escopo do projeto e  padr&otilde;es de arquitetura;</li>
          <li>Acompanhamento do ciclo de vida dos sistemas e aplica&ccedil;&otilde;es WEB, apontando melhorias da estrutura existente. Melhorar as t&eacute;cnicas e conceitos existentes, considerando o volume de processamento e o or&ccedil;amento dispon&iacute;vel;</li>
          <li>Suporte aos usu&aacute;rios na implanta&ccedil;&atilde;o e na utiliza&ccedil;&atilde;o de novos sistemas e suporte aos analistas em casos de problemas;</li>
          <li>Cria&ccedil;&atilde;o de prot&oacute;tipos de Aplica&ccedil;&otilde;es.</li>
          </ul>

          <h3>Stefanini (alocado no IRB Brasil Re) - Analista de Qualidade Pleno. De 10/2009 a 11/2010</h3>
          <ul>
          <li>Levantamento de requisitos de qualidade dos servi&ccedil;os e Elabora&ccedil;&atilde;o de plano de testes junto aos analistas de neg&oacute;cio;</li>
          <li>Assegurar que o sistema ou aplica&ccedil;&atilde;o entregue, esteja consistente com a arquitetura concordada, garantindo a qualidade e exig&ecirc;ncias definidas com o cliente;</li>
          <li>Realiza&ccedil;&atilde;o de testes de sistemas e passagem para produ��o ou apontamento de erro; </li>
          <li>Desenvolvimento de ferramentas de aux&iacute;lio, automatizando os testes de sistemas.</li>
          </ul>

          <h3>Canvas Webhouse - Analista de Sistemas S&ecirc;nior. De 5/2009 a 10/2009</h3>
          <ul>
          <li>L&iacute;der de equipe de seis profissionais de programa&ccedil;&atilde;o</li>
          <li>Defini&ccedil;&atilde;o da arquitetura do sistema, coordena&ccedil;&atilde;o de atividades, distribui&ccedil;&atilde;o de tarefas.</li>
          <li>Utiliza&ccedil;&atilde;o de tecnologias de Web2.0, Gest&atilde;o de Conte&uacute;do, Servidor de Portais;</li>
          <li>Desenvolvimento, administra&ccedil;&atilde;o, manuten&ccedil;&atilde;o e suporte de Portais, com tecnologia .Net e J2EE, para clientes de grande porte como Petrobr&aacute;s, Vale e Globo. </li>
          <li>Modelagem utilizando UML, processo unificado;</li>
          </ul>

          <h3>Intercraft Solutions Inform&aacute;tica - Analista de Sistemas Pleno. De 4/2007 a 3/2009.</h3>
          <ul>
          <li>F&aacute;brica de software;</li>
          <li>Atuou na lideran&ccedil;a t&eacute;cnica e funcional de diversos projetos;</li>
          <li>Gest&atilde;o de projetos;</li>
          <li>Desenho de Arquitetura de Aplica&ccedil;&otilde;es .Net;</li>
          <li>Integra&ccedil;&atilde;o de sistemas;</li>
          <li>Desenvolvimento de aplica&ccedil;&otilde;es para com&eacute;rcio eletr&ocirc;nico.</li>
          </ul>

          <h3>Analista Desenvolvedor - Pessoa Jur&iacute;dica. De 2003 a 2007.</h3>
          <ul>
          <li>Consultoria para diversas empresas, tais como: Sign Deluxe; DMN; Nigraph...</li>
          <li>Professor do curso de Inform&aacute;tica EuroData.</li>
          </ul>

          <h3>Sign Deluxe - Programador. De 6/2002 a 7/2003.</h3>
          <ul>
          <li>Negocia&ccedil;&atilde;o com clientes e confec&ccedil;&atilde;o de propostas;</li>
          <li>Levantamento de requisitos;</li>
          <li>Modelagem de sistemas para clientes de pequeno e m&eacute;dio porte;</li>
          <li>Desenvolvimento de sistemas.</li>
          </ul>

          <h3>Zion NetWork (produtora de sites) - Programador. De 7/2000 a 12/2000</h3>
          <ul>
          <li>Desenvolvimento de Portais para empresas utilizando ASP;</li>
          <li>Design gr&aacute;fico;</li>
          </ul>

          <h3>Propag Camp. - Est&aacute;gio. De 9/1999 a 3/2000.</h3>
          <ul>
          <li>Desenvolvimento de websites para clientes de pequeno porte, com PHP.</li>
          </ul>

          <h2>FORMA&Ccedil;&Atilde;O:</h2>
          <ul>
          <li>2008 - P&oacute;s-Graduado de An&aacute;lise, Projeto e Ger&ecirc;ncia de Sistemas - PUC-RJ.</li>
          <li>2004 - P&oacute;s-Graduado em Ergonomia e Usabilidade - PUC-RJ.</li>
          <li>2002 - Gradua&ccedil;&atilde;o em Design Gr&aacute;fico - UNESA.</li>
          <li>1998 - T&eacute;cnico em Processamento de Dados - Col&eacute;gio Santa M&ocirc;nica.</li>
          </ul>

          <h2>L&Iacute;NGUAS:</h2>
          <ul>
            <li>Ingl&ecirc;s Intermedi&aacute;rio t&eacute;cnico.</li>
          </ul>

          <h2>HABILIDADES:</h2>
          Planejamento e condu&ccedil;&atilde;o de projeto, Lideran&ccedil;a; Reuni&otilde;es t&eacute;cnicas; N&atilde;o tenho problema em trabalhar sob press&atilde;o; Desenvolvimento e manuten&ccedil;&atilde;o de sistemas, levantamento de requisitos, modelagem de dados e requisitos; UML, XP, Web Services, C#, VB.NET, ASP, PHP, ColdFusion, JAVA, JS, ActionScript, HTML, XML, DHTML, CSS, PL/SQL.

          <h2>CURSOS:</h2>
          <ul>
          <li> Treinamento Oi</li>
          <li> Treinamento Oi</li>  
          <li> Treinamento Oi</li>  
          <li> Palestras Arquitetura de Software Mercado e Pr&aacute;ticas no Instituto Infnet em 10/02/2011 - 2 horas</li>
          <li> Desenvolvimento Web com ASP.net: DBI  - 9/03/2009 17/04/2009 - 60 horas</li>
          <li> T&eacute;cnicas B&aacute;sicas de Desenvolvimento de Sistemas: PUC-RJ - de 10/09/2007 a 13/12/2007 - 114 horas.</li>
          <li> Desenvolvendo Aplicativos para Celulares com Java Micro Edition - J2ME : PUC-RJ.- 6/2007 a 7/2007 - 15 horas.</li>
          <li> Palestra Projetos de sites em Flash e ActionScript: Infnet - 29/08/2007 - 2 horas.</li>
          <li> Java B&aacute;sico: EuroData - 2006 - 12 horas</li>
          <li> Programa&ccedil;&atilde;o em c++: Universidade Gama Filho. -  de 15/07/97 a 25/07/97 - 16 horas</li>
          <li> 3D Studio: Universidade Gama Filho. - de 15/07/97 a 25/07/97 - 16 horas</li>
          <li> Delphi: Universidade Gama Filho.- 14/07/97 a 23/07/97</li>
          <li> Autocad: Universidade Gama Filho. - de 14/07/97 a 23/07/97 - 16 horas</li>
          <li> Montagem e Manuten&ccedil;&atilde;o de Micro Computadores: Info Grego's Inform&aacute;tica. - de 4/1/95 a 4/2/95</li>
          <li> Lotus123, Dbase, Dbase Programado e Clipper: Info Grego's Inform&aacute;tica. - de 10/94 a 11/94</li>
          <li>IPD, Ms-Dos, Print Master, Formax, Wordstar: Info Grego's inform&aacute;tica. - de 14/6/94 a 14/07/94</li>
          </ul>

          <h2>PRETEN&Ccedil;&Atilde;O SALARIAL:</h2>
          R$ 9.000,00
          <br/><br/>

        </div>
      </Div>
      <style jsx>{`
        .HomeListadeRotas{
         width:25%;
        }
        .HomeIndex{
          width:75%;
        }
      `}</style>
      <style jsx global>{`
        ${Util.fontesCSS1()}
        ${Util.fontesCSS2()}
        ${Util.fontesCSS3()}
        ${Util.fontesCSS4()}
        ${Util.fontesCSS5()}
        body{
          margin: 0px;
          padding: 0px;
          background-color: #ffffff;
          font-family: SimplonBP-Regular, sans-serif;        
        }
      `}</style>
    </div>
  )
}

export default templateHome
