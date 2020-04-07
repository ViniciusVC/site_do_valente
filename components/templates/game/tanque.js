import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout'
import * as Util from '../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║      GAME    controleogodzilla         ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  function iniciarGame(){

    document.querySelector('body').style.cursor = 'crosshair';
     
    var game = new Phaser.Game(800,600,Phaser.CANVAS,'divgametanque',{preload:preload,create:create,update:update});
    
    //Variáveis Globais
    var tank,controls = {},cannon,balas,fireRate = 100,nextFire = 0;
  
    function preload(){
      game.load.image('tank','/static/assetsv5/img/game/tanquetank02.png');
      game.load.image('cannon','/static/assetsv5/img/game/tanquecannon02.png');
      game.load.image('bullet','/static/assetsv5/img/game/tanquebullet.png');
      game.load.image("background", "/static/assetsv5/img/game/tanqueclareira.jpg");
    }
    
    function create(){
      game.add.tileSprite(0, 0, 800, 600, 'background');
      game.physics.startSystem(Phaser.Physics.ARCADE);
      //game.stage.backgroundColor = '#C78839';
      //game.stage.background = "";
  
      tank = game.add.sprite(game.world.centerX,game.world.centerY,'tank');
      tank.anchor.set(.5);
      game.physics.enable(tank);
      
      balas = game.add.group();
      balas.enableBody = true;
      balas.createMultiple(50,'bullet');
      balas.setAll('checkWorldBounds',true);
      balas.setAll('outOfBoundsKill',true);
      balas.setAll('anchor.x',.5);
      balas.setAll('anchor.y',.5);
      
      cannon = game.add.sprite(tank.x,tank.y,'cannon');
  
      cannon.anchor.set(.3,.5);
      game.physics.enable(cannon);
      
      
      controls.up = game.input.keyboard.addKey(Phaser.Keyboard.W);
      controls.left = game.input.keyboard.addKey(Phaser.Keyboard.A);
      controls.down = game.input.keyboard.addKey(Phaser.Keyboard.S);
      controls.right = game.input.keyboard.addKey(Phaser.Keyboard.D);
    }
    
    function update(){
      cannon.x = tank.x;
      cannon.y = tank.y;
      cannon.rotation = game.physics.arcade.angleToPointer(cannon);
    
      if(controls.up.isDown){
        //Aplica uma velocidade nos eixos X e Y do sprite dado o de inclinação deste
        //Recebe como parâmetros: a inclinação em radianos, a velocidade a ser aplicada e o parâmetro a ser afetado
        game.physics.arcade.velocityFromRotation(tank.rotation,100,tank.body.velocity);
      } else
      if(controls.down.isDown){
        game.physics.arcade.velocityFromRotation(tank.rotation,-50,tank.body.velocity);
      } else {
        tank.body.velocity.set(0);
      }
      
      if(controls.left.isDown){
        if(controls.down.isDown){
          tank.body.rotation++;
        } else {
          tank.body.rotation--;
        }
      } else
      if(controls.right.isDown){
        if(controls.down.isDown){
          tank.body.rotation--;
        } else {
          tank.body.rotation++;
        }
      }
      
      if(game.input.activePointer.isDown){
        fire();
      }
      
      //permite a realocação de um sprite em relação ao mundo do jogo
      //recebe como parâmetros: o sprite a ser realocado e uma margem em pixels 
      game.world.wrap(tank,75);
      game.world.wrap(cannon,75);
    }
    
    function fire(){
      if(game.time.now > nextFire && balas.countDead() > 0){
        var bullet = balas.getFirstDead();
          bullet.reset(cannon.x + Math.cos(cannon.rotation) * 80,cannon.y + Math.sin(cannon.rotation) * 80);
          
          game.physics.arcade.moveToPointer(bullet,300);
          
          nextFire = game.time.now + fireRate;
      }
    }

    document.getElementById('btLinkIniciar').style.display= "none"; 
  }

  return (
    <div>
      <Head>
        <title>Teste Game Tanque PhaserJS</title>
        <FaviIcon />
        <meta name="description" content="Teste Game Tanque PhaserJS" />
        <link rel="canonical" href="/game/tanque/" />
        <link rel="amphtml" href="/amp/game/tanque/" />
        <script src="/static/assetsv5/js/phaser.min.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>Teste Game Tanque PhaserJS</h1>
          <p>Estudo de desenvolvimento de game com PhaserJS.</p>
          <div id="divgametanque"></div>
          S=Andar para traz<br/>
          W=Andar para frente<br/>
          A=Virar para a esquerda<br/>
          D=Virar para a direita<br/>
          <a id="btLinkIniciar" className="btLinkBranco" onClick={() => {iniciarGame()}}>Iniciar Game</a>
      </Layout>
      <style jsx>{`
        .divgametanque {
          position: absolute;
        }
        .btLinkBranco {
            font-family: oiTextRegular, sans-serif;
            background-color: #ffffff;
            border-radius: 8px;
            color: #222222;
            display: block;
            font-size: 1rem; /*16px*/
            height: 3.42857143rem;
            text-align: center;
            width: 300px;
            text-decoration: none;
            border: solid 1px #dbdbdb;
            cursor: pointer;
            outline: 0;
            margin: 0;
            padding: 1.2rem;
            box-sizing: border-box;
            font-style: normal;
            transition: 0.5s;
            -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
            -moz-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
            box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
          }
          .btLinkBranco:hover {
            -webkit-box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.47);
            -moz-box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.47);
            box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.47);
          }
      `}</style>

    </div>
  )
}

// <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">

//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>

export default atendimentoOi

