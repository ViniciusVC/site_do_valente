(window.webpackJsonp=window.webpackJsonp||[]).push([["6459"],{FU8Q:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/routes/tutorial/apache/redirect",function(){var e=t("eep+");return{page:e.default||e}}])},YW8C:function(e,a,t){"use strict";var r=t("MX0m"),s=t.n(r),c=t("q1tI"),m=t.n(c);a.a=function(e){return m.a.createElement("div",{className:"jsx-294334214"},m.a.createElement("span",{className:"jsx-294334214"},m.a.createElement("h3",{className:"jsx-294334214"},"O que é o Redirect 301?"),m.a.createElement("br",{className:"jsx-294334214"}),"O Redirect 301 é uma instrução no servidor que informa que a Página A agora é a Página B, de forma que quando o visitante acessar a Página A será automaticamente remetido para o endereço da Página B.",m.a.createElement("br",{className:"jsx-294334214"}),"É através desse mecanismo que quando você acessa unibanco.com.br cai em itau.com.br e também quando você acessa www.vvcestudio.com.br cai em vvcestudio.com.br.",m.a.createElement("br",{className:"jsx-294334214"})),m.a.createElement(s.a,{id:"294334214"},['.obs.jsx-294334214{font-family:"SimplonBP-Regular",Arial;}']))}},eQfc:function(e,a,t){"use strict";var r=t("MX0m"),s=t.n(r),c=t("q1tI"),m=t.n(c),o=t("T9MM"),l=t("h6+w"),n=t("YW8C"),i=t("QEe7"),u=t("ob7O"),d=t("JkDD");a.a=function(e){console.log("╔════════════════════════════════╗"),console.log("║   Tutoriais - Apache - redirect   ║"),console.log("╚════════════════════════════════╝");var a=d.h(e.regiao,"RJ"),t=d.h(e.modo,"html"),r=d.g(a);return m.a.createElement("div",{className:"jsx-1367375073"},m.a.createElement(l.a,{modo:t,title:"Apache Redirect",description:"Tutorial Apache Redirect",canonical:"/tutorial/apache/redirect/"}),m.a.createElement(o.a,{regiao:a,modo:t,titulo:"Tutoriais",categoria:"Apache"},m.a.createElement("h1",{className:"jsx-1367375073"},"REDIRECT"),m.a.createElement("p",{className:"jsx-1367375073"},m.a.createElement("br",{className:"jsx-1367375073"}),"Oque a diretiva Redirect faz?",m.a.createElement("br",{className:"jsx-1367375073"}),"Mapeia uma URL antiga em uma NOVA URL, forçando o cliente a requisitar a nova URL.",m.a.createElement("br",{className:"jsx-1367375073"}),m.a.createElement("br",{className:"jsx-1367375073"}),"existe alguma regra?",m.a.createElement("br",{className:"jsx-1367375073"}),"sim",m.a.createElement("br",{className:"jsx-1367375073"}),"* a URL antiga deve SEMPRE iniciar com “/”.",m.a.createElement("br",{className:"jsx-1367375073"}),"* a nova URL deve ser escrita em sua forma absoluta.",m.a.createElement("br",{className:"jsx-1367375073"}),m.a.createElement("br",{className:"jsx-1367375073"}),"Alguns exemplos:",m.a.createElement(u.a,null,"Redirect   /pesquisar  http://www.google.com.br"),m.a.createElement("br",{className:"jsx-1367375073"}),m.a.createElement("br",{className:"jsx-1367375073"}),"Ao requisitar http://",r.timeb,".exemplos.com.br , haverá um redirecionamento para http://www.google.com.br",m.a.createElement("br",{className:"jsx-1367375073"}),m.a.createElement("br",{className:"jsx-1367375073"}),"Posso fazer com que esse redirecionamento se torne permanente para o cliente",m.a.createElement(u.a,null,"Redirect permanent   /melhorblog   https://",r.timeb,".wordpress.com",m.a.createElement("br",{className:"jsx-1367375073"}),"Redirect /musicas   http://www.srv.com/musicas",m.a.createElement("br",{className:"jsx-1367375073"}),"Redirect  /  https://",r.timeb,".exemplos.com.br/"),m.a.createElement("br",{className:"jsx-1367375073"}),m.a.createElement("br",{className:"jsx-1367375073"}),"Da mesma forma do Alias o Redirect também tem uma diretiva para expressão regular, o RedirectMatch.",m.a.createElement("br",{className:"jsx-1367375073"}),"Exemplo:",m.a.createElement(u.a,null,"RedirectMatch   (.*)\\.avi$     https://avi.exemplos.com.br/$1"),m.a.createElement("br",{className:"jsx-1367375073"}),m.a.createElement("br",{className:"jsx-1367375073"}),"Para redirecionar arquivos individuais, como example.com/oldfile.htm para newfile.htm, você pode usar um redirecionamento 301 como este:",m.a.createElement(u.a,null,"Redirect 301 /oldfile.htm /newfile.htm",m.a.createElement("br",{className:"jsx-1367375073"}),"Redirect 301 /oldfile.htm http://example.net/newfile.htm"),m.a.createElement("br",{className:"jsx-1367375073"})),m.a.createElement(n.a,null),m.a.createElement(i.a,{href:"/tutorial/apache/?regiao="+a,value:"O que é Apache",estilo:"neon"})),m.a.createElement(s.a,{id:"1367375073"},[".h1.jsx-1367375073{color :#000000;}",".p.jsx-1367375073{color :#000000;}"]))}},"eep+":function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),s=t.n(r),c=t("eQfc"),m=t("JkDD");a.default=function(e){return s.a.createElement(c.a,{modo:"html",regiao:m.h(e.url.query.regiao,"RJ")})}}},[["FU8Q","5d41","9da1"]]]);