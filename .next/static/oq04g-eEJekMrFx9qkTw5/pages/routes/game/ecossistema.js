(window.webpackJsonp=window.webpackJsonp||[]).push([["c5b0"],{"+kBU":function(e,a,o){"use strict";var t=o("q1tI"),i=o.n(t),n=o("NK3G"),r=o("h6+w"),s=o("MX0m"),c=o.n(s),l=o("uhj+"),d=function(e){var a=[];function o(e,o,t,i,n){console.log("---\x3efuncPropSer("+e+","+o+","+t+","+i+","+n+")"),"novo"==e&&(console.log("Criando NOVO personagens ["+o+"]"),a[o]={tipo:t,width:20,height:20,direcao:"parado",objetivo:"nada"},console.log("---\x3e personagens["+o+"] = "+a[o]),console.log("---\x3e personagens["+o+"].tipo = "+a[o].tipo),a[o].objImg=new Image),"manter"!=i&&(a[o].x=i),"manter"!=n&&(a[o].y=n),"avatar"==t?(a[o].tipo="avatar",a[o].hierarquia=4,a[o].width=20,a[o].height=20,a[o].velocidade=30,a[o].imge="https://images.vexels.com/media/users/3/177827/isolated/preview/03cbb4fb0d0318befadf121314e35d40-cabelo-de-monstro-monstro-liso-by-vexels.png",a[o].img="https://images.vexels.com/media/users/3/177827/isolated/preview/03cbb4fb0d0318befadf121314e35d40-cabelo-de-monstro-monstro-liso-by-vexels.png",a[o].objImg.src="https://images.vexels.com/media/users/3/177827/isolated/preview/03cbb4fb0d0318befadf121314e35d40-cabelo-de-monstro-monstro-liso-by-vexels.png",a[o].direcao="parado",a[o].objetivo="nada",a[o].tempo=100):"carnivoro"==t?(a[o].tipo="carnivoro",a[o].hierarquia=4,a[o].width=40,a[o].height=40,a[o].imge="/static/assetsv5/img/game/minitrexe.png",a[o].img="/static/assetsv5/img/game/minitrex.png",a[o].velocidade=4,a[o].objImg.src="/static/assetsv5/img/game/minitrex.png",a[o].direcao="parado",a[o].objetivo="nada",a[o].tempo=2e3):"herbivoro"==t?(a[o].tipo="herbivoro",a[o].hierarquia=3,a[o].width=40,a[o].height=20,a[o].velocidade=2,a[o].imge="/static/assetsv5/img/game/herbivoroe.png",a[o].img="/static/assetsv5/img/game/herbivoro.png",a[o].objImg.src="/static/assetsv5/img/game/herbivoro.png",a[o].direcao="parado",a[o].objetivo="nada",a[o].tempo=1e3):"ovo"==t?(a[o].tipo="ovo",a[o].hierarquia=2,a[o].width=10,a[o].height=10,a[o].velocidade=0,a[o].imge="/static/assetsv5/img/game/ovo.png",a[o].img="/static/assetsv5/img/game/ovo.png",a[o].objImg.src="/static/assetsv5/img/game/ovo.png",a[o].direcao="parado",a[o].objetivo="nada",a[o].tempo=100):"planta"==t?(a[o].tipo="planta",a[o].hierarquia=1,a[o].width=41,a[o].height=49,a[o].velocidade=0,a[o].imge="/static/assetsv5/img/game/arvore.png",a[o].img="/static/assetsv5/img/game/arvore.png",a[o].objImg.src="/static/assetsv5/img/game/arvore.png",a[o].direcao="parado",a[o].objetivo="nada",a[o].tempo=100):"coco"==t?(a[o].tipo="coco",a[o].hierarquia=0,a[o].width=20,a[o].height=20,a[o].velocidade=0,a[o].imge="https://image.flaticon.com/icons/svg/1642/1642901.svg",a[o].img="https://image.flaticon.com/icons/svg/1642/1642901.svg",a[o].objImg.src="/static/assetsv5/img/game/caverinha.png",a[o].direcao="parado",a[o].objetivo="nada",a[o].tempo=100):"cenario"==t?(a[o].tipo="cenario",a[o].hierarquia=0,a[o].width=600,a[o].height=600,a[o].velocidade=0,a[o].imge="/static/assetsv5/img/game/terrenoecossistema.jpg",a[o].img="/static/assetsv5/img/game/terrenoecossistema.jpg",a[o].objImg.src="/static/assetsv5/img/game/terrenoecossistema.jpg",a[o].direcao="parado",a[o].objetivo="nada",a[o].tempo=100):"pedra"==t&&(a[o].tipo="pedra",a[o].hierarquia=0,a[o].width=80,a[o].height=80,a[o].velocidade=0,a[o].imge="/static/assetsv5/img/game/pedra.png",a[o].img="/static/assetsv5/img/game/pedra.png",a[o].objImg.src="/static/assetsv5/img/game/pedra.png",a[o].direcao="parado",a[o].objetivo="nada",a[o].tempo=100),console.log("---\x3e personagens["+o+"].tipo = "+a[o].tipo)}function t(){var e=2;for(e=2;e<a.length;e++)if(a[e].tempo=a[e].tempo-1,"carnivoro"==a[e].tipo||"herbivoro"==a[e].tipo)if(a[e].tempo<1)o("altera",e,"coco","manter","manter");else{var t=1,i=1200,c=1200,l="parado",m=1;for(t=2;t<a.length;t++)e!=t&&("carnivoro"==a[e].tipo?"herbivoro"==a[t].tipo&&i>(c=r(e,t))&&(i=c,l=s(e,t),m=t,a[e].objetivo="caçando"):"herbivoro"==a[e].tipo&&("planta"==a[t].tipo?i>(c=r(e,t))&&(i=c,l=s(e,t),m=t,a[e].objetivo=e):"carnivoro"==a[t].tipo&&i>(c=r(e,t))&&(i=c,l=s(t,e),m=t,a[e].objetivo="Fugindo de "+t)));"carnivoro"==a[e].tipo&&"devorou"==l?(a[e].tempo=2e3,o("altera",m,"coco","manter","manter")):"herbivoro"==a[e].tipo&&"planta"==a[m].tipo&&"devorou"==l&&(a[e].tempo=2e3,o("altera",m,"ovo","manter","manter")),d(e,l)}else"ovo"==a[e].tipo&&a[e].tempo<1?o("altera",e,"herbivoro","manter","manter"):"coco"==a[e].tipo&&a[e].tempo<1&&o("altera",e,"planta","manter","manter");n()}function n(){var e,o=document.getElementById("canvasGame").getContext("2d");for(console.log("| inicio do FOR | <══════════════════════════════════════"),console.log(a),e=0;e<a.length;e++)console.log("i="+e),console.log("tipo = "+a[e].tipo),o.drawImage(a[e].objImg,a[e].x,a[e].y,a[e].width,a[e].height),o.font="30px Arial",o.fillStyle="red";console.log("| fim do FOR | <══════════════════════════════════════")}function r(e,o){var t=0;return a[e].x==a[o].x&&a[e].y==a[o].y?t=0:(a[e].x>a[o].x?t=a[e].x-a[o].x:a[e].x<a[o].x&&(t=a[e].x+a[o].x),a[e].y>a[o].y?t=t+a[e].y-a[o].y:a[e].y<a[o].y&&(t=t+a[e].y+a[o].y)),t}function s(e,o){var t="parado",i=a[e].width/2;if(a[e].x+i>a[o].x&&a[e].x-i<a[o].x&&a[e].y+i>a[o].y&&a[e].y-i<a[o].y)t="devorou";else{var n=Math.floor(2*Math.random()+1);console.log("sorteio="+n),1==n?a[e].y>a[o].y?t="subir":a[e].y<a[o].y&&(t="descer"):a[e].x>a[o].x?t="<-":a[e].x<a[o].x&&(t="->")}return t}function d(e,o){"subir"==o?(a[e].y=a[e].y-a[e].velocidade,a[e].y<0&&(a[e].y=600)):"descer"==o?(a[e].y=a[e].y+a[e].velocidade,a[e].y>600&&(a[e].y=0)):"<-"==o?(a[e].x=a[e].x-a[e].velocidade,a[e].objImg.src=a[e].imge,a[e].x<0&&(a[e].x=599)):"->"==o&&(a[e].x=a[e].x+a[e].velocidade,a[e].objImg.src=a[e].img,a[e].x>600&&(a[e].x=0)),a[e].direcao=o}function m(){document.getElementById("canvasGame").style.display="block",document.getElementById("Controles").style.display="block",document.getElementById("btLinkIniciar").style.display="none",function(){console.log("!!!!! iniciarPersonagens()");var e=0;o("novo",e++,"cenario",0,0),o("novo",e++,"avatar",g(),g()),o("novo",e++,"carnivoro",g(),g()),o("novo",e++,"herbivoro",g(),g()),o("novo",e++,"herbivoro",g(),g()),o("novo",e++,"ovo",g(),g()),o("novo",e++,"ovo",g(),g()),o("novo",e++,"planta",g(),g()),o("novo",e++,"planta",g(),g()),o("novo",e++,"planta",g(),g()),o("novo",e++,"coco",g(),g()),o("novo",e++,"herbivoro",g(),g()),o("novo",e++,"planta",g(),g()),o("novo",e++,"planta",g(),g()),o("novo",e++,"planta",g(),g()),o("novo",e++,"planta",g(),g()),o("novo",e++,"planta",g(),g()),o("novo",e++,"planta",g(),g()),o("novo",e++,"planta",g(),g()),o("novo",e++,"planta",g(),g()),o("novo",e++,"planta",g(),g()),o("novo",e++,"pedra",g(),g()),o("novo",e++,"pedra",g(),g()),o("novo",e++,"pedra",g(),g())}(),window.addEventListener("keydown",function(e){console.log("| Digitou algo | <══════════════════════════════════════");var a=e.keyCode,o=e.key;if(void 0!==a){console.log("varKeyCode !== undefined"),console.log("varKeyCode="+a),console.log("varKey="+o);var t="parar";"38"==a||38==a||"ArrowUp"==o?t="subir":"40"==a||40==a||"ArrowUp"==o?t="descer":"37"==a||47==a||"ArrowLeft"==o?t="<-":"39"!=a&&39!=a&&"ArrowRight"!=o||(t="->"),console.log("evento = "+t),d(1,t)}else console.log("varKeyCode == undefined"),alert("varKeyCode == undefined")},!0),n(),setInterval(t,100)}function g(){return Math.floor(500*Math.random()+1)}return i.a.createElement(l.a,{display:"responsivo"},i.a.createElement("div",{className:"jsx-3065395871"},i.a.createElement("a",{id:"btLinkIniciar",onClick:function(){m()},className:"jsx-3065395871 btCinza"},"Iniciar Ecossistema"),i.a.createElement("canvas",{id:"canvasGame",width:"600",height:"600",className:"jsx-3065395871"})),i.a.createElement("div",{id:"Controles",className:"jsx-3065395871 Controles"},i.a.createElement(l.a,{display:"vertical"},i.a.createElement("h2",{className:"jsx-3065395871"},"Controle do personagem AVATAR."),i.a.createElement("a",{id:"btLinkIniciar",onClick:function(){d(1,"subir")},className:"jsx-3065395871 btCinza"},"sobe"),i.a.createElement(l.a,{display:"justificado"},i.a.createElement("a",{id:"btLinkIniciar",onClick:function(){d(1,"<-")},className:"jsx-3065395871 btCinza"},"esquerda"),i.a.createElement("a",{id:"btLinkIniciar",onClick:function(){d(1,"->")},className:"jsx-3065395871 btCinza"},"direita")),i.a.createElement("a",{id:"btLinkIniciar",onClick:function(){d(1,"descer")},className:"jsx-3065395871 btCinza"},"desce"))),i.a.createElement(c.a,{id:"3065395871"},[".Controles.jsx-3065395871{margin:10px;width:100%;display:none;}",".Godzilla.jsx-3065395871{position:absolute;}","canvas.jsx-3065395871{display:none;}",".btCinza.jsx-3065395871{padding:10px;-webkit-transition:all 0.8s;transition:all 0.8s;font-family:oiTextRegular,sans-serif;background-color:#26293c;border-radius:15px;color:#ffffff;display:block;font-size:1rem;text-align:center;-webkit-text-decoration:none;text-decoration:none;border:solid 2px #4a516b;cursor:pointer;outline:0;margin-bottom :10px;box-sizing:border-box;font-style:normal;width:100%;max-width:600px;}",".btCinza.jsx-3065395871:hover{-webkit-transition:all 0.8s;transition:all 0.8s;-webkit-transition:all 0.8s;-moz-transition:all 0.8s;-o-transition:all 0.8s;background-color:#4a516b;}"]))},m=o("JkDD"),g=o("QEe7");a.a=function(e){console.log("╔══════════════════════════════════════╗"),console.log("║  Template - GAME - orgEcossistema    ║"),console.log("╚══════════════════════════════════════╝");var a=m.h(e.regiao,"RJ"),o=m.h(e.modo,"html");return i.a.createElement("div",null,i.a.createElement(r.a,{modo:o,title:"Teste Game Ecossistema",description:"Desenvolvimento de Game com JS - Ecossistema.",canonical:"/game/ecossistema/"}),i.a.createElement(n.a,{regiao:a,modo:o,titulo:"Games",categoria:"Games"},i.a.createElement("h1",null,"Simulador de Ecossistema"),function(e,a){return"html"==e?i.a.createElement(d,null):i.a.createElement("p",null,"O jogo não pode ser visto no modo AMP.",i.a.createElement("br",null),i.a.createElement(g.a,{href:"/game/tanque?regiao="+a,value:"Clique aqui para sair do modo AMP.",estilo:"neon"}),i.a.createElement("br",null))}(o,a),i.a.createElement("p",null,"Carnívoro come herbívoro.",i.a.createElement("br",null),"herbivoro come planta, foge de carnívoro e se reproduz."),i.a.createElement("p",null,"Estudo de desenvolvimento de game apenas com JS e canvas."),i.a.createElement("br",null)))}},LApt:function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/routes/game/ecossistema",function(){var e=o("yYuW");return{page:e.default||e}}])},NK3G:function(e,a,o){"use strict";var t=o("MX0m"),i=o.n(t),n=o("q1tI"),r=o.n(n),s=o("uhj+"),c=o("wwkz"),l=o("D7Tn"),d=o("X6eQ"),m=o("JkDD"),g=o("ORJM");a.a=function(e){console.log("Rodando /layout/cristalbot.js GAME");var a=m.h(e.regiao,"RJ"),o=m.h(e.modo,"html"),t=m.h(e.titulo,"Home"),n=m.h(e.categoria,"Outros");return r.a.createElement("div",{className:"jsx-134656585 "+i.a.dynamic([["536722714",[m.a(),m.b(),m.c(),m.d(),m.e()]]])+" CSSLayout"},r.a.createElement(g.a,{position:"body",modo:o,codGTM:"UA-143307429-1"}),r.a.createElement(s.a,{display:"justificado"},r.a.createElement("div",{className:"jsx-134656585 "+i.a.dynamic([["536722714",[m.a(),m.b(),m.c(),m.d(),m.e()]]])+" layoutManu esconder"},r.a.createElement(l.a,{estilo:"terminal"},r.a.createElement(c.a,{regiao:a,modo:o,titulo:t,categoria:n}))),r.a.createElement("div",{className:"jsx-134656585 "+i.a.dynamic([["536722714",[m.a(),m.b(),m.c(),m.d(),m.e()]]])+" layoutBody"},r.a.createElement(s.a,{display:"vertical"},r.a.createElement("div",{className:"jsx-134656585 "+i.a.dynamic([["536722714",[m.a(),m.b(),m.c(),m.d(),m.e()]]])},e.children),r.a.createElement(l.a,{estilo:"terminal"},r.a.createElement(d.a,{regiao:a,modo:o}))))),r.a.createElement(i.a,{id:"134656585"},[".CSSLayout.jsx-134656585{color:#ffffff;width:100%;margin :0px;padding :0px;padding-top :10px;}",".layoutManu.jsx-134656585{width:25%;padding-left:2%;}",".layoutBody.jsx-134656585{width:70%;padding-right:2%;}","@media(max-width:1169px){.layoutManu.jsx-134656585{display :None;}.layoutBody.jsx-134656585{width:100%;padding-right:0px;}}","@media(max-width:1169px){}"]),r.a.createElement(i.a,{id:"536722714",dynamic:[m.a(),m.b(),m.c(),m.d(),m.e()]},["".concat(m.a()," ").concat(m.b()," ").concat(m.c()," ").concat(m.d()," ").concat(m.e(),' body{margin:0px;padding:0px;background-color:#8d5119;background-image:url("/static/assetsv5/img/cristalbot/fundopaginacristalbot.jpg");background-repeat:repeat-x;color:#10ecf5;font-family:SimplonBP-Regular,sans-serif;}')]))}},yYuW:function(e,a,o){"use strict";o.r(a);var t=o("q1tI"),i=o.n(t),n=o("+kBU"),r=o("JkDD");a.default=function(e){var a=r.h(e.url.query.regiao,"RJ");return i.a.createElement(n.a,{modo:"html",regiao:a})}}},[["LApt","5d41","9da1"]]]);