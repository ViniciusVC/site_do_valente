import React from 'react'
import Div from '../../atoms/atDiv/index.js';


const orgEcossistema = function (props) {

  var relogio;
  var personagens = [];
  var ultimaTecla = "parar";

  function funcPropSer(varNovo,NumSer, tipo, varPositX, varPositY){
    console.log("--->funcPropSer("+varNovo+","+NumSer+","+ tipo+","+ varPositX+","+ varPositY +")")
    if(varNovo=="novo"){
      console.log("Criando NOVO personagens ["+ NumSer +"]");
      personagens[NumSer] = {
        "tipo":tipo,
        "width": 20,
        "height": 20,
        "direcao":"parado",
        "objetivo":"nada"
      }
      console.log("---> personagens["+ NumSer +"] = " + personagens[NumSer]);
      console.log("---> personagens["+ NumSer +"].tipo = " + personagens[NumSer].tipo);
      personagens[NumSer].objImg = new Image();
    }
    //else if (=="altera"){ }
    if(varPositX!="manter"){
      personagens[NumSer].x=varPositX;
    }
    if(varPositY!="manter"){
      personagens[NumSer].y=varPositY;
    }
    if(tipo=="avatar"){
        personagens[NumSer].tipo="avatar";
        personagens[NumSer].hierarquia=4;
        personagens[NumSer].width=20;
        personagens[NumSer].height=20;
        personagens[NumSer].velocidade=3;
        personagens[NumSer].img="https://images.vexels.com/media/users/3/177827/isolated/preview/03cbb4fb0d0318befadf121314e35d40-cabelo-de-monstro-monstro-liso-by-vexels.png";
        personagens[NumSer].objImg.src ="https://images.vexels.com/media/users/3/177827/isolated/preview/03cbb4fb0d0318befadf121314e35d40-cabelo-de-monstro-monstro-liso-by-vexels.png";
        personagens[NumSer].direcao="parado";
        personagens[NumSer].objetivo="nada";
        personagens[NumSer].tempo=100;
    }else if(tipo=="carnivoro"){
        personagens[NumSer].tipo="carnivoro";
        personagens[NumSer].hierarquia=4;
        personagens[NumSer].width=20;
        personagens[NumSer].height=20;
        personagens[NumSer].img="https://image.flaticon.com/icons/svg/1236/1236125.svg";
        personagens[NumSer].velocidade=4;
        personagens[NumSer].objImg.src ="https://image.flaticon.com/icons/svg/1236/1236125.svg";
        personagens[NumSer].direcao="parado";
        personagens[NumSer].objetivo="nada";
        personagens[NumSer].tempo=2000;
    }else if(tipo=="herbivoro"){
        personagens[NumSer].tipo="herbivoro";
        personagens[NumSer].hierarquia=3;
        personagens[NumSer].width=20;
        personagens[NumSer].height=20;
        personagens[NumSer].velocidade=2;
        personagens[NumSer].img="https://images.vexels.com/media/users/3/177828/isolated/preview/2cad4138c11ac3e2798bed47b3e21084-monstro-olho-peludo-plano-by-vexels.png";
        personagens[NumSer].objImg.src ="https://images.vexels.com/media/users/3/177828/isolated/preview/2cad4138c11ac3e2798bed47b3e21084-monstro-olho-peludo-plano-by-vexels.png";
        personagens[NumSer].direcao="parado";
        personagens[NumSer].objetivo="nada";
        personagens[NumSer].tempo=1000;
    }else if(tipo=="ovo"){
        personagens[NumSer].tipo="ovo";
        personagens[NumSer].hierarquia=2;
        personagens[NumSer].width=20;
        personagens[NumSer].height=20;
        personagens[NumSer].velocidade=0;
        personagens[NumSer].img="https://image.flaticon.com/icons/svg/1462/1462011.svg";
        personagens[NumSer].objImg.src ="https://image.flaticon.com/icons/svg/1462/1462011.svg";
        personagens[NumSer].direcao="parado";
        personagens[NumSer].objetivo="nada";
        personagens[NumSer].tempo=100;
    }else if(tipo=="planta"){
        personagens[NumSer].tipo="planta";
        personagens[NumSer].hierarquia=1;
        personagens[NumSer].width=20;
        personagens[NumSer].height=20;
        personagens[NumSer].velocidade=0;
        personagens[NumSer].img="https://image.flaticon.com/icons/png/512/1431/premium/1431933.png";
        personagens[NumSer].objImg.src ="https://image.flaticon.com/icons/png/512/1431/premium/1431933.png";
        personagens[NumSer].direcao="parado";
        personagens[NumSer].objetivo="nada";
        personagens[NumSer].tempo=100;
    }else if(tipo=="coco"){
        personagens[NumSer].tipo="coco";
        personagens[NumSer].hierarquia=0;
        personagens[NumSer].width=20;
        personagens[NumSer].height=20;
        personagens[NumSer].velocidade=0;
        personagens[NumSer].img="https://image.flaticon.com/icons/svg/1642/1642901.svg";
        personagens[NumSer].objImg.src="https://image.flaticon.com/icons/svg/1642/1642901.svg";
        personagens[NumSer].direcao="parado";
        personagens[NumSer].objetivo="nada";
        personagens[NumSer].tempo=100;
    }else if(tipo=="cenario"){
        personagens[NumSer].tipo="cenario";
        personagens[NumSer].hierarquia=0;
        personagens[NumSer].width=600;
        personagens[NumSer].height=600;
        personagens[NumSer].velocidade=0;
        personagens[NumSer].img="/static/assetsv5/img/game/tanqueclareira.jpg";
        personagens[NumSer].objImg.src="/static/assetsv5/img/game/tanqueclareira.jpg";
        personagens[NumSer].direcao="parado";
        personagens[NumSer].objetivo="nada";
        personagens[NumSer].tempo=100;
    }
    console.log("---> personagens["+ NumSer +"].tipo = " + personagens[NumSer].tipo);
  }


  function comportamento(){
    //O personagem 0 é o cenário.
    //O personagem 1 é o avatar.
    var serA = 2
    for (serA=2; serA < personagens.length; serA++) {
    //for (serA=2; serA < 5; serA++) {
      personagens[serA].tempo=personagens[serA].tempo-1;
      if(personagens[serA].tipo=="carnivoro"||personagens[serA].tipo=="herbivoro"){
        if(personagens[serA].tempo<1){
          funcPropSer("altera",serA, "coco", "manter", "manter");
        }else{
          var serB = 1
          var menorDistancia = 1200;
          var distanciaAtual = 1200;
          var melhorDecisao="parado";
          var serMaisPerto=1;
          for (serB=2; serB < personagens.length; serB++) {
          //for (serB=1; serB < 5; serB++) {
            // console.log('comparando o personagem '+serA+ 'com' +serB+ '.');
            // console.log('Personagem A ('+serA+') é um '+personagens[serA].tipo+'.');
            // console.log('Personagem B ('+serB+') é um '+personagens[serB].tipo+'.');
            if(serA!=serB){
                
                if(personagens[serA].tipo=="carnivoro"){
                    if(personagens[serB].tipo=="herbivoro"){
                        //Caçar
                        distanciaAtual = calDistancia(serA,serB)
                        if(menorDistancia>distanciaAtual){ 
                            menorDistancia=distanciaAtual;
                            melhorDecisao=CalDecisao(serA,serB);
                            serMaisPerto=serB;
                            personagens[serA].objetivo="caçando"
                        } 
                    }
                }else if(personagens[serA].tipo=="herbivoro"){
                    if(personagens[serB].tipo=="planta"){
                        //Caçar
                        distanciaAtual = calDistancia(serA,serB)
                        if(menorDistancia>distanciaAtual){ 
                            menorDistancia=distanciaAtual;
                            melhorDecisao=CalDecisao(serA,serB);
                            serMaisPerto=serB;
                            personagens[serA].objetivo=serA
                        }
                    }else if(personagens[serB].tipo=="carnivoro"){
                        //Fugir
                        distanciaAtual = calDistancia(serA,serB)
                        if(menorDistancia>distanciaAtual){ 
                            menorDistancia=distanciaAtual;
                            melhorDecisao=CalDecisao(serB,serA);
                            serMaisPerto=serB;
                            personagens[serA].objetivo="Fugindo de " + serB
                        }
                    }
                }
            }
          } // Fim do FOR B
          //console.log('Personagem '+serA+' está a disanca de ' + menorDistancia + ' do .' + serMaisPerto);
          //console.log('A melhor decisão é ir para '+ melhorDecisao +'.');
          if(personagens[serA].tipo=="carnivoro" && melhorDecisao=="devorou"){
              personagens[serA].tempo = 2000;
              funcPropSer("altera",serMaisPerto, "coco", "manter", "manter");
          }else if(personagens[serA].tipo=="herbivoro" && personagens[serMaisPerto].tipo=="planta" && melhorDecisao=="devorou"){
            personagens[serA].tempo = 2000;
            funcPropSer("altera",serMaisPerto, "ovo", "manter", "manter");
          } 
          moverPersonagem(serA, melhorDecisao);
        }
      } else if(personagens[serA].tipo=="ovo"&&personagens[serA].tempo<1){
        funcPropSer("altera",serA, "herbivoro", "manter", "manter");
      }else if(personagens[serA].tipo=="planta"&&personagens[serA].tempo<1){
        personagens[serA].width = personagens[serA].width+2,
        personagens[serA].height = personagens[serA].height+2,
        personagens[serA].tempo = 100;
      }else if(personagens[serA].tipo=="coco"&&personagens[serA].tempo<1){
        funcPropSer("altera",serA, "planta", "manter", "manter");
      }// Fim do if
    } // Fim do FOR A
    desenharCanvas();
  }

  function desenharCanvas(){
    // Desenha os objetos na tela.
    var CNV = document.getElementById('canvasGame')
    var CTX = CNV.getContext("2d");
    var i;
    var pespectiva = 0;
    console.log('| inicio do FOR | <══════════════════════════════════════');
    console.log(personagens);
    for (i=0; i < personagens.length; i++) {
    //for (i=0; i < 5; i++) {
      console.log("i="+i);
      console.log("tipo = "+personagens[i].tipo);
      pespectiva =  parseInt(personagens[i].y/10); //(y = 0 a 600) Proporção 10 a 60
      CTX.drawImage(personagens[i].objImg, personagens[i].x,personagens[i].y,(personagens[i].width+pespectiva),(personagens[i].height+pespectiva));  
      CTX.font = "30px Arial";
      CTX.fillStyle = "red"; //personagens[i].cor
      //CTX.fillText(i+'-'+personagens[i].tipo, personagens[i].x+25,personagens[i].y-10);
      CTX.fillText(personagens[i].objetivo, personagens[i].x+25,personagens[i].y);
      //CTX.fillText(personagens[i].direcao, personagens[i].x+25,personagens[i].y+10);
      //CTX.fillText(personagens[i].tempo, personagens[i].x+25,personagens[i].y+20);
    }
    console.log('| fim do FOR | <══════════════════════════════════════');

    // CNV.addEventListener('mousemove', function(evt) {
    //   var mousePos = getMousePos(canvas, evt);
    //   var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    //   alert(message);
    // }, false);
  }

  function calDistancia(serA,serB){
    var varDistancia = 0;
    if(personagens[serA].x==personagens[serB].x&&personagens[serA].y==personagens[serB].y){
      varDistancia = 0;
    }else{
      
      if(personagens[serA].x>personagens[serB].x){
        //"-1"
        varDistancia = personagens[serA].x-personagens[serB].x
      }else if (personagens[serA].x<personagens[serB].x){
        //"+1"
        varDistancia = personagens[serA].x+personagens[serB].x
      }
      if(personagens[serA].y>personagens[serB].y){
        //"-1"
        varDistancia = varDistancia + personagens[serA].y-personagens[serB].y
      }else if (personagens[serA].y<personagens[serB].y){
        //"+1" 
        varDistancia = varDistancia + personagens[serA].y+personagens[serB].y
      }

    }
    return varDistancia
  }

  function CalDecisao(serA,serB){
    var RetonDecisao = "parado"
    var tamanho = personagens[serA].width / 2
    if((personagens[serA].x+tamanho>personagens[serB].x&&personagens[serA].x-tamanho<personagens[serB].x)&&(personagens[serA].y+tamanho>personagens[serB].y&&personagens[serA].y-tamanho<personagens[serB].y)){
      RetonDecisao = "devorou";  
    }else{
      var sorteio = Math.floor((Math.random() * 2) + 1);
      console.log('sorteio='+sorteio);
      if(sorteio==1){
        if(personagens[serA].y>personagens[serB].y){
          //"-1"
          RetonDecisao = "subir";
        }else if (personagens[serA].y<personagens[serB].y){
          //"+1" 
          RetonDecisao = "descer";
        }
      }else{
        if(personagens[serA].x>personagens[serB].x){
          //"-1"
          RetonDecisao = "<-";
        }else if (personagens[serA].x<personagens[serB].x){
          //"+1"
          RetonDecisao = "->";
        }
      }
    }
    return RetonDecisao
    //personagens[i].width
    //personagens[i].height
  }

  function moverPersonagem(personaAtual,varDirecao){
    if(varDirecao=="subir"){
      personagens[personaAtual].y = personagens[personaAtual].y - personagens[personaAtual].velocidade
      if(personagens[personaAtual].y < 0){
        personagens[personaAtual].y = 600;
      }
    } else if(varDirecao=="descer"){
      personagens[personaAtual].y = personagens[personaAtual].y + personagens[personaAtual].velocidade
      if(personagens[personaAtual].y > 600){
        personagens[personaAtual].y = 0;
      }
    } else if(varDirecao=="<-"){
      personagens[personaAtual].x = personagens[personaAtual].x - personagens[personaAtual].velocidade
      if(personagens[personaAtual].x < 0){
        personagens[personaAtual].x = 600;
      }
    } else if(varDirecao=="->"){
      personagens[personaAtual].x = personagens[personaAtual].x + personagens[personaAtual].velocidade
      if(personagens[personaAtual].x > 600){
        personagens[personaAtual].x = 0;
      }
    } 

    personagens[personaAtual].direcao = varDirecao;
  }

  function iniciarPersonagens(){
    console.log("!!!!! iniciarPersonagens()");
    var i = 0;
    funcPropSer("novo",i++,"cenario",0,0)
    funcPropSer("novo",i++,"avatar",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"carnivoro",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"herbivoro",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"herbivoro",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"ovo",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"ovo",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"planta",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"planta",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"planta",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"coco",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"herbivoro",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"carnivoro",funcLocalInit(),funcLocalInit());
    funcPropSer("novo",i++,"planta",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"planta",funcLocalInit(),funcLocalInit())
    funcPropSer("novo",i++,"planta",funcLocalInit(),funcLocalInit())
  }

  function iniciarGame(){

    iniciarPersonagens();

    window.addEventListener("keydown", function (event) {
      console.log('| Digitou algo | <══════════════════════════════════════');
      var varKeyCode = event.keyCode
      var varKey = event.key
      if (varKeyCode !== undefined) {
        console.log("varKeyCode !== undefined");
        console.log("varKeyCode="+varKeyCode);
        console.log("varKey="+varKey);
        var evento="parar";
        if(varKeyCode=="38" || varKeyCode==38 || varKey=="ArrowUp"){
          evento="subir"
        } else if(varKeyCode=="40" || varKeyCode==40 || varKey=="ArrowUp"){
          evento="descer"
        } else if(varKeyCode=="37" || varKeyCode==47 || varKey=="ArrowLeft"){
          evento="<-"
        } else if(varKeyCode=="39" || varKeyCode==39 || varKey=="ArrowRight"){
          evento="->"
        } 
        console.log('evento = ' + evento);
        ultimaTecla=evento;
        moverPersonagem(1, evento);
      }else{
        console.log("varKeyCode == undefined");
        alert("varKeyCode == undefined");
      }
    }, true);
    
    desenharCanvas();
    relogio = setInterval(comportamento, 100);
  }

  function funcLocalInit(){
    return Math.floor(Math.random() * 500 + 1)
  }

  return (
    <Div display="responsivo">
      <div>
      <a id="btLinkIniciar" className="btCinza" onClick={() => {iniciarGame()}}>Iniciar Game</a>
      <canvas id="canvasGame" width="600" height="600"></canvas>
      </div>
      <div>
        Controle do personagem AVATAR.
        <a id="btLinkIniciar" className="btCinza" onClick={() => {moverPersonagem(1,"subir")}}>sobe</a>
        <a id="btLinkIniciar" className="btCinza" onClick={() => {moverPersonagem(1,"<-")}}>esquerda</a>
        <a id="btLinkIniciar" className="btCinza" onClick={() => {moverPersonagem(1,"->")}}>direita</a>
        <a id="btLinkIniciar" className="btCinza" onClick={() => {moverPersonagem(1,"descer")}}>desce</a>   
      </div>
      <style jsx>{`
        .Godzilla {
          position: absolute;
        }
        /*canvas {
          border : solid 1px;
        }*/
        .btCinza {
            padding: 10px;
            transition: all 0.8s;
            font-family: oiTextRegular, sans-serif;
            background-color: #26293c;
            border-radius: 15px;
            color: #ffffff;
            display: block;
            font-size: 1rem; /*16px*/
            text-align: center;

            text-decoration: none;
            border: solid 2px #4a516b;
            cursor: pointer;
            outline: 0;
            margin: 0;
            box-sizing: border-box;
            font-style: normal;
            width: 100%;
            max-width: 500px;
          }
          .btCinza:hover {
            transition: all 0.8s;
            -webkit-transition: all 0.8s;
            -moz-transition: all 0.8s;
            -o-transition: all 0.8s;
            /*color: #d82482;*/
            background-color: #4a516b;
          }
      `}</style>
    </Div>
  )
}

// <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">
//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>

export default orgEcossistema
