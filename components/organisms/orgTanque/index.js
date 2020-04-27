import React from 'react'
import Head from 'next/head'

const orgTanque = function (props) {

  console.log(' component - orgTanque ');

  function iniciarGame(){
    document.getElementById('divcarregando').style.display= "block";
    document.getElementById('btLinkIniciar').style.display= "none";
    
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
      document.getElementById('divcarregando').style.display= "none";
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
    

  }

  return (
    <div>
      <Head>
        <script src="/static/assetsv5/js/phaser.min.js"></script>
      </Head>
      <div id="divgametanque"></div>
      <div id="divcarregando" className="divcarregando">Carregando...</div>
      <a id="btLinkIniciar" className="btCinza" onClick={() => {iniciarGame()}}>Iniciar Game</a>
        S=Andar para traz<br/>
        W=Andar para frente<br/>
        A=Virar para a esquerda<br/>
        D=Virar para a direita<br/>
      <style jsx>{`
              .divcarregando{
          display: none;
        }
        .divgametanque {
          position: absolute;
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

    </div>
  )
}

export default orgTanque

