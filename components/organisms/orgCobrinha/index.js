import React from 'react'
import Div from '../../atoms/atDiv/index.js';


const orgCobrinha = function (props) {

  function iniciarGame(){
    document.getElementById("btLinkIniciar").style.display = "none";
    stage = document.getElementById('stage');
    ctx = stage.getContext("2d"); 
    setInterval(game, 80);
    tail = 5;
    document.addEventListener("keydown", keyPush);
  }

  var tail; 
  var stage;
  var ctx;
  const vel = 1;
  var vx = 0;
  var vy = 0;
  var px = 10;
  var py = 15;
  var tp = 30;
  var qp = 20;
  var ax=15;
  var ay=15;
  var trail = [];
  

  function game(){
    px += vx;
    py += vy;
    if (px <0) {
        px = qp-1;
    }
    if (px > qp-1) {
        px = 0;
    }
    if (py < 0) {
        py = qp-1;
    }
    if (py > qp-1) {
        py = 0;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0,0, stage.width, stage.height);

    ctx.fillStyle = "red";
    ctx.fillRect(ax*tp, ay*tp, tp,tp);

    //var objImgMaca = document.getElementById("imgmaca");
    //ctx.drawImage(objImgMaca, ax*tp, ay*tp, tp,tp);

    ctx.fillStyle = "gray";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);
        if (trail[i].x == px && trail[i].y == py)
        {
            vx = vy=0;
            tail =5;
        }
    }

    trail.push({x:px,y:py })
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax==px && ay==py){
        tail++;
        ax = Math.floor(Math.random()*qp);
        ay = Math.floor(Math.random()*qp);
    }

}

function keyPush(event){

    switch (event.keyCode) {
        case 37: // Left
            vx = -vel;
            vy = 0;
            break;
        case 38: // up
            vx = 0;
            vy = -vel;
            break;
        case 39: // right
            vx = vel;
            vy = 0;
            break;
        case 40: // down
            vx = 0;
            vy = vel;
            break;         
        default:
            break;
    }


}

  return (
    <Div display="responsivo">
      <div>
        <a id="btLinkIniciar" className="btCinza" onClick={() => {iniciarGame()}}>Iniciar Game Cobrinha</a>
        <canvas id="stage" width="600" height="600"></canvas>
        <img id="imgmaca" className="imgmaca" src="https://superprix.vteximg.com.br/arquivos/ids/175207-292-292/Maca-Argentina--1-unidade-aprox.-200g-.png?v=636294203590200000"></img>
      </div>
      <div id="Controles" className="Controles">
      </div>
      <style jsx>{`
        .imgmaca{
          display: none;
        }
        canvas {
          border : solid 1px;
        }
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
            margin-bottom : 10px;
            box-sizing: border-box;
            font-style: normal;
            width: 100%;
            max-width: 600px;
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

export default orgCobrinha
