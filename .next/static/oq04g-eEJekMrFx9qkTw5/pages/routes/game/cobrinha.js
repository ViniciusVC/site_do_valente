(window.webpackJsonp=window.webpackJsonp||[]).push([["d22f"],{"859J":function(e,a,t){"use strict";t.r(a);var o=t("q1tI"),n=t.n(o),i=t("pJbi"),r=t("JkDD");a.default=function(e){var a=r.h(e.url.query.regiao,"RJ");return n.a.createElement(i.a,{modo:"html",regiao:a})}},NK3G:function(e,a,t){"use strict";var o=t("MX0m"),n=t.n(o),i=t("q1tI"),r=t.n(i),l=t("uhj+"),c=t("wwkz"),d=t("D7Tn"),s=t("X6eQ"),m=t("JkDD"),u=t("ORJM");a.a=function(e){console.log("Rodando /layout/cristalbot.js GAME");var a=m.h(e.regiao,"RJ"),t=m.h(e.modo,"html"),o=m.h(e.titulo,"Home"),i=m.h(e.categoria,"Outros");return r.a.createElement("div",{className:"jsx-134656585 "+n.a.dynamic([["536722714",[m.a(),m.b(),m.c(),m.d(),m.e()]]])+" CSSLayout"},r.a.createElement(u.a,{position:"body",modo:t,codGTM:"UA-143307429-1"}),r.a.createElement(l.a,{display:"justificado"},r.a.createElement("div",{className:"jsx-134656585 "+n.a.dynamic([["536722714",[m.a(),m.b(),m.c(),m.d(),m.e()]]])+" layoutManu esconder"},r.a.createElement(d.a,{estilo:"terminal"},r.a.createElement(c.a,{regiao:a,modo:t,titulo:o,categoria:i}))),r.a.createElement("div",{className:"jsx-134656585 "+n.a.dynamic([["536722714",[m.a(),m.b(),m.c(),m.d(),m.e()]]])+" layoutBody"},r.a.createElement(l.a,{display:"vertical"},r.a.createElement("div",{className:"jsx-134656585 "+n.a.dynamic([["536722714",[m.a(),m.b(),m.c(),m.d(),m.e()]]])},e.children),r.a.createElement(d.a,{estilo:"terminal"},r.a.createElement(s.a,{regiao:a,modo:t}))))),r.a.createElement(n.a,{id:"134656585"},[".CSSLayout.jsx-134656585{color:#ffffff;width:100%;margin :0px;padding :0px;padding-top :10px;}",".layoutManu.jsx-134656585{width:25%;padding-left:2%;}",".layoutBody.jsx-134656585{width:70%;padding-right:2%;}","@media(max-width:1169px){.layoutManu.jsx-134656585{display :None;}.layoutBody.jsx-134656585{width:100%;padding-right:0px;}}","@media(max-width:1169px){}"]),r.a.createElement(n.a,{id:"536722714",dynamic:[m.a(),m.b(),m.c(),m.d(),m.e()]},["".concat(m.a()," ").concat(m.b()," ").concat(m.c()," ").concat(m.d()," ").concat(m.e(),' body{margin:0px;padding:0px;background-color:#8d5119;background-image:url("/static/assetsv5/img/cristalbot/fundopaginacristalbot.jpg");background-repeat:repeat-x;color:#10ecf5;font-family:SimplonBP-Regular,sans-serif;}')]))}},pJbi:function(e,a,t){"use strict";var o=t("q1tI"),n=t.n(o),i=t("NK3G"),r=t("h6+w"),l=t("MX0m"),c=t.n(l),d=t("uhj+"),s=function(e){var a,t,o,i=1,r=0,l=0,s=10,m=15,u=30,g=20,b=15,p=15,h=[];function f(){(s+=r)<0&&(s=g-1),s>g-1&&(s=0),(m+=l)<0&&(m=g-1),m>g-1&&(m=0),o.fillStyle="black",o.fillRect(0,0,t.width,t.height),o.fillStyle="red",o.fillRect(b*u,p*u,u,u),o.fillStyle="gray";for(var e=0;e<h.length;e++)o.fillRect(h[e].x*u,h[e].y*u,u-1,u-1),h[e].x==s&&h[e].y==m&&(r=l=0,a=5);for(h.push({x:s,y:m});h.length>a;)h.shift();b==s&&p==m&&(a++,b=Math.floor(Math.random()*g),p=Math.floor(Math.random()*g))}function x(e){switch(e.keyCode){case 37:r=-i,l=0;break;case 38:r=0,l=-i;break;case 39:r=i,l=0;break;case 40:r=0,l=i}}return n.a.createElement(d.a,{display:"responsivo"},n.a.createElement("div",{className:"jsx-586914315"},n.a.createElement("a",{id:"btLinkIniciar",onClick:function(){document.getElementById("btLinkIniciar").style.display="none",t=document.getElementById("stage"),o=t.getContext("2d"),setInterval(f,80),a=5,document.addEventListener("keydown",x)},className:"jsx-586914315 btCinza"},"Iniciar Game Cobrinha"),n.a.createElement("canvas",{id:"stage",width:"600",height:"600",className:"jsx-586914315"}),n.a.createElement("img",{id:"imgmaca",src:"https://superprix.vteximg.com.br/arquivos/ids/175207-292-292/Maca-Argentina--1-unidade-aprox.-200g-.png?v=636294203590200000",className:"jsx-586914315 imgmaca"})),n.a.createElement("div",{id:"Controles",className:"jsx-586914315 Controles"}),n.a.createElement(c.a,{id:"586914315"},[".imgmaca.jsx-586914315{display:none;}","canvas.jsx-586914315{border :solid 1px;}",".btCinza.jsx-586914315{padding:10px;-webkit-transition:all 0.8s;transition:all 0.8s;font-family:oiTextRegular,sans-serif;background-color:#26293c;border-radius:15px;color:#ffffff;display:block;font-size:1rem;text-align:center;-webkit-text-decoration:none;text-decoration:none;border:solid 2px #4a516b;cursor:pointer;outline:0;margin-bottom :10px;box-sizing:border-box;font-style:normal;width:100%;max-width:600px;}",".btCinza.jsx-586914315:hover{-webkit-transition:all 0.8s;transition:all 0.8s;-webkit-transition:all 0.8s;-moz-transition:all 0.8s;-o-transition:all 0.8s;background-color:#4a516b;}"]))},m=t("JkDD"),u=t("QEe7");a.a=function(e){console.log("╔══════════════════════════════════╗"),console.log("║  Template - GAME - orgCobrinha   ║"),console.log("╚══════════════════════════════════╝");var a=m.h(e.regiao,"RJ"),t=m.h(e.modo,"html");return n.a.createElement("div",null,n.a.createElement(r.a,{modo:t,title:"Game Cobrinha Classico",description:"Desenvolvimento de Game com JS - Cobrinha.",canonical:"/game/Cobrinha/"}),n.a.createElement(i.a,{regiao:a,modo:t,titulo:"Games",categoria:"Games"},n.a.createElement("h1",null,"Jogo da Cobrinha"),function(e,a){return"html"==e?n.a.createElement(s,null):n.a.createElement("p",null,"O jogo não pode ser visto no modo AMP.",n.a.createElement("br",null),n.a.createElement(u.a,{href:"/game/tanque?regiao="+a,value:"Clique aqui para sair do modo AMP.",estilo:"neon"}),n.a.createElement("br",null))}(t,a),n.a.createElement("br",null),n.a.createElement("p",null,'Verção do clássico Blockade ou "Jogo da Cobrinha".',n.a.createElement("br",null),"Blockadev foi um videogame de arcade lançado em outubro de 1976 desenvolvido por Gremlin.",n.a.createElement("br",null),'Foi o primeiro do que seria conhecido como "jogos de cobra".',n.a.createElement("br",null))))}},ytWl:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/routes/game/cobrinha",function(){var e=t("859J");return{page:e.default||e}}])}},[["ytWl","5d41","9da1"]]]);