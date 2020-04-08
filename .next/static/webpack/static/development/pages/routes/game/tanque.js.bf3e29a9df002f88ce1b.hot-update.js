webpackHotUpdate("static/development/pages/routes/game/tanque.js",{

/***/ "./components/templates/game/tanque.js":
/*!*********************************************!*\
  !*** ./components/templates/game/tanque.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/atFavIcon */ "./components/atoms/atFavIcon/index.js");
/* harmony import */ var _moleculas_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../moleculas/layout */ "./components/moleculas/layout/index.js");
/* harmony import */ var _controller_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../controller/util.js */ "./controller/util.js");

 //import Link from 'next/link'






var atendimentoOi = function atendimentoOi(props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      GAME    controleogodzilla         ║');
  console.log('╚════════════════════════════════════════╝');
  var regiao = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["validaProps"](props.regiao, "RJ");
  var modo = _controller_util_js__WEBPACK_IMPORTED_MODULE_5__["validaProps"](props.modo, "html");

  function iniciarGame() {
    document.querySelector('body').style.cursor = 'crosshair';
    var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'divgametanque', {
      preload: preload,
      create: create,
      update: update
    }); //Variáveis Globais

    var tank,
        controls = {},
        cannon,
        balas,
        fireRate = 100,
        nextFire = 0;

    function preload() {
      game.load.image('tank', '/static/assetsv5/img/game/tanquetank02.png');
      game.load.image('cannon', '/static/assetsv5/img/game/tanquecannon02.png');
      game.load.image('bullet', '/static/assetsv5/img/game/tanquebullet.png');
      game.load.image("background", "/static/assetsv5/img/game/tanqueclareira.jpg");
    }

    function create() {
      game.add.tileSprite(0, 0, 800, 600, 'background');
      game.physics.startSystem(Phaser.Physics.ARCADE); //game.stage.backgroundColor = '#C78839';
      //game.stage.background = "";

      tank = game.add.sprite(game.world.centerX, game.world.centerY, 'tank');
      tank.anchor.set(.5);
      game.physics.enable(tank);
      balas = game.add.group();
      balas.enableBody = true;
      balas.createMultiple(50, 'bullet');
      balas.setAll('checkWorldBounds', true);
      balas.setAll('outOfBoundsKill', true);
      balas.setAll('anchor.x', .5);
      balas.setAll('anchor.y', .5);
      cannon = game.add.sprite(tank.x, tank.y, 'cannon');
      cannon.anchor.set(.3, .5);
      game.physics.enable(cannon);
      controls.up = game.input.keyboard.addKey(Phaser.Keyboard.W);
      controls.left = game.input.keyboard.addKey(Phaser.Keyboard.A);
      controls.down = game.input.keyboard.addKey(Phaser.Keyboard.S);
      controls.right = game.input.keyboard.addKey(Phaser.Keyboard.D);
    }

    function update() {
      cannon.x = tank.x;
      cannon.y = tank.y;
      cannon.rotation = game.physics.arcade.angleToPointer(cannon);

      if (controls.up.isDown) {
        //Aplica uma velocidade nos eixos X e Y do sprite dado o de inclinação deste
        //Recebe como parâmetros: a inclinação em radianos, a velocidade a ser aplicada e o parâmetro a ser afetado
        game.physics.arcade.velocityFromRotation(tank.rotation, 100, tank.body.velocity);
      } else if (controls.down.isDown) {
        game.physics.arcade.velocityFromRotation(tank.rotation, -50, tank.body.velocity);
      } else {
        tank.body.velocity.set(0);
      }

      if (controls.left.isDown) {
        if (controls.down.isDown) {
          tank.body.rotation++;
        } else {
          tank.body.rotation--;
        }
      } else if (controls.right.isDown) {
        if (controls.down.isDown) {
          tank.body.rotation--;
        } else {
          tank.body.rotation++;
        }
      }

      if (game.input.activePointer.isDown) {
        fire();
      } //permite a realocação de um sprite em relação ao mundo do jogo
      //recebe como parâmetros: o sprite a ser realocado e uma margem em pixels 


      game.world.wrap(tank, 75);
      game.world.wrap(cannon, 75);
    }

    function fire() {
      if (game.time.now > nextFire && balas.countDead() > 0) {
        var bullet = balas.getFirstDead();
        bullet.reset(cannon.x + Math.cos(cannon.rotation) * 80, cannon.y + Math.sin(cannon.rotation) * 80);
        game.physics.arcade.moveToPointer(bullet, 300);
        nextFire = game.time.now + fireRate;
      }
    }

    document.getElementById('btLinkIniciar').style.display = "none";
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3603607264"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-3603607264"
  }, "Teste Game Tanque PhaserJS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "Teste Game Tanque PhaserJS",
    className: "jsx-3603607264"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: "/game/tanque/",
    className: "jsx-3603607264"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "amphtml",
    href: "/amp/game/tanque/",
    className: "jsx-3603607264"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "/static/assetsv5/js/phaser.min.js",
    className: "jsx-3603607264"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    regiao: regiao,
    modo: modo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3603607264"
  }, "Teste Game Tanque PhaserJS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3603607264"
  }, "Estudo de desenvolvimento de game com PhaserJS."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "divgametanque",
    className: "jsx-3603607264"
  }), "S=Andar para traz", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3603607264"
  }), "W=Andar para frente", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3603607264"
  }), "A=Virar para a esquerda", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3603607264"
  }), "D=Virar para a direita", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3603607264"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "btLinkIniciar",
    onClick: function onClick() {
      iniciarGame();
    },
    className: "jsx-3603607264" + " " + "btLinkBranco"
  }, "Iniciar Game")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3603607264"
  }, ".divgametanque.jsx-3603607264{position:absolute;}.btLinkBranco.jsx-3603607264{font-family:oiTextRegular,sans-serif;background-color:#ffffff;border-radius:8px;color:#222222;display:block;font-size:1rem;height:3.42857143rem;text-align:center;width:300px;-webkit-text-decoration:none;text-decoration:none;border:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition:0.5s;transition:0.5s;-webkit-box-shadow:2px 2px 20px rgba(1,1,1,0.17);-moz-box-shadow:2px 2px 20px rgba(1,1,1,0.17);box-shadow:2px 2px 20px rgba(1,1,1,0.17);}.btLinkBranco.jsx-3603607264:hover{-webkit-box-shadow:1px 1px 10px rgba(1,1,1,0.47);-moz-box-shadow:1px 1px 10px rgba(1,1,1,0.47);box-shadow:1px 1px 10px rgba(1,1,1,0.47);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2dhbWUvdGFucXVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlJa0IsQUFHNkIsQUFHc0IsQUF1QmMsa0JBekJ4RCxtQkFHNkIsWUF1QndCLGFBdEIvQixrQkFDSixjQUNBLENBcUI4QixhQXBCN0IsZUFDTSxhQW9CdkIsUUFuQm9CLGtCQUNOLFlBQ1Msa0RBQ0kseUJBQ1YsZUFDTCxVQUNELFNBQ00sZUFDTyxzQkFDSixrQkFDRix3Q0FDb0MsaURBQ0gsOENBQ0wseUNBQzlDIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2dhbWUvdGFucXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy9pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgRmF2aUljb24gZnJvbSAnLi4vLi4vYXRvbXMvYXRGYXZJY29uJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9tb2xlY3VsYXMvbGF5b3V0J1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL3V0aWwuanMnO1xuXG5jb25zdCBhdGVuZGltZW50b09pID0gZnVuY3Rpb24gKHByb3BzKSB7XG5cbiAgY29uc29sZS5sb2coJ+KVlOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVlycpO1xuICBjb25zb2xlLmxvZygn4pWRICAgICAgR0FNRSAgICBjb250cm9sZW9nb2R6aWxsYSAgICAgICAgIOKVkScpO1xuICBjb25zb2xlLmxvZygn4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWdJyk7XG5cbiAgdmFyIHJlZ2lhbyA9IFV0aWwudmFsaWRhUHJvcHMocHJvcHMucmVnaWFvICwgXCJSSlwiKTtcbiAgdmFyIG1vZG8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLm1vZG8sIFwiaHRtbFwiKTtcblxuICBmdW5jdGlvbiBpbmljaWFyR2FtZSgpe1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInO1xuICAgICBcbiAgICB2YXIgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSg4MDAsNjAwLFBoYXNlci5DQU5WQVMsJ2RpdmdhbWV0YW5xdWUnLHtwcmVsb2FkOnByZWxvYWQsY3JlYXRlOmNyZWF0ZSx1cGRhdGU6dXBkYXRlfSk7XG4gICAgXG4gICAgLy9WYXJpw6F2ZWlzIEdsb2JhaXNcbiAgICB2YXIgdGFuayxjb250cm9scyA9IHt9LGNhbm5vbixiYWxhcyxmaXJlUmF0ZSA9IDEwMCxuZXh0RmlyZSA9IDA7XG4gIFxuICAgIGZ1bmN0aW9uIHByZWxvYWQoKXtcbiAgICAgIGdhbWUubG9hZC5pbWFnZSgndGFuaycsJy9zdGF0aWMvYXNzZXRzdjUvaW1nL2dhbWUvdGFucXVldGFuazAyLnBuZycpO1xuICAgICAgZ2FtZS5sb2FkLmltYWdlKCdjYW5ub24nLCcvc3RhdGljL2Fzc2V0c3Y1L2ltZy9nYW1lL3RhbnF1ZWNhbm5vbjAyLnBuZycpO1xuICAgICAgZ2FtZS5sb2FkLmltYWdlKCdidWxsZXQnLCcvc3RhdGljL2Fzc2V0c3Y1L2ltZy9nYW1lL3RhbnF1ZWJ1bGxldC5wbmcnKTtcbiAgICAgIGdhbWUubG9hZC5pbWFnZShcImJhY2tncm91bmRcIiwgXCIvc3RhdGljL2Fzc2V0c3Y1L2ltZy9nYW1lL3RhbnF1ZWNsYXJlaXJhLmpwZ1wiKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlKCl7XG4gICAgICBnYW1lLmFkZC50aWxlU3ByaXRlKDAsIDAsIDgwMCwgNjAwLCAnYmFja2dyb3VuZCcpO1xuICAgICAgZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAvL2dhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyNDNzg4MzknO1xuICAgICAgLy9nYW1lLnN0YWdlLmJhY2tncm91bmQgPSBcIlwiO1xuICBcbiAgICAgIHRhbmsgPSBnYW1lLmFkZC5zcHJpdGUoZ2FtZS53b3JsZC5jZW50ZXJYLGdhbWUud29ybGQuY2VudGVyWSwndGFuaycpO1xuICAgICAgdGFuay5hbmNob3Iuc2V0KC41KTtcbiAgICAgIGdhbWUucGh5c2ljcy5lbmFibGUodGFuayk7XG4gICAgICBcbiAgICAgIGJhbGFzID0gZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgIGJhbGFzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgYmFsYXMuY3JlYXRlTXVsdGlwbGUoNTAsJ2J1bGxldCcpO1xuICAgICAgYmFsYXMuc2V0QWxsKCdjaGVja1dvcmxkQm91bmRzJyx0cnVlKTtcbiAgICAgIGJhbGFzLnNldEFsbCgnb3V0T2ZCb3VuZHNLaWxsJyx0cnVlKTtcbiAgICAgIGJhbGFzLnNldEFsbCgnYW5jaG9yLngnLC41KTtcbiAgICAgIGJhbGFzLnNldEFsbCgnYW5jaG9yLnknLC41KTtcbiAgICAgIFxuICAgICAgY2Fubm9uID0gZ2FtZS5hZGQuc3ByaXRlKHRhbmsueCx0YW5rLnksJ2Nhbm5vbicpO1xuICBcbiAgICAgIGNhbm5vbi5hbmNob3Iuc2V0KC4zLC41KTtcbiAgICAgIGdhbWUucGh5c2ljcy5lbmFibGUoY2Fubm9uKTtcbiAgICAgIFxuICAgICAgXG4gICAgICBjb250cm9scy51cCA9IGdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5XKTtcbiAgICAgIGNvbnRyb2xzLmxlZnQgPSBnYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Ym9hcmQuQSk7XG4gICAgICBjb250cm9scy5kb3duID0gZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLlMpO1xuICAgICAgY29udHJvbHMucmlnaHQgPSBnYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Ym9hcmQuRCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpe1xuICAgICAgY2Fubm9uLnggPSB0YW5rLng7XG4gICAgICBjYW5ub24ueSA9IHRhbmsueTtcbiAgICAgIGNhbm5vbi5yb3RhdGlvbiA9IGdhbWUucGh5c2ljcy5hcmNhZGUuYW5nbGVUb1BvaW50ZXIoY2Fubm9uKTtcbiAgICBcbiAgICAgIGlmKGNvbnRyb2xzLnVwLmlzRG93bil7XG4gICAgICAgIC8vQXBsaWNhIHVtYSB2ZWxvY2lkYWRlIG5vcyBlaXhvcyBYIGUgWSBkbyBzcHJpdGUgZGFkbyBvIGRlIGluY2xpbmHDp8OjbyBkZXN0ZVxuICAgICAgICAvL1JlY2ViZSBjb21vIHBhcsOibWV0cm9zOiBhIGluY2xpbmHDp8OjbyBlbSByYWRpYW5vcywgYSB2ZWxvY2lkYWRlIGEgc2VyIGFwbGljYWRhIGUgbyBwYXLDom1ldHJvIGEgc2VyIGFmZXRhZG9cbiAgICAgICAgZ2FtZS5waHlzaWNzLmFyY2FkZS52ZWxvY2l0eUZyb21Sb3RhdGlvbih0YW5rLnJvdGF0aW9uLDEwMCx0YW5rLmJvZHkudmVsb2NpdHkpO1xuICAgICAgfSBlbHNlXG4gICAgICBpZihjb250cm9scy5kb3duLmlzRG93bil7XG4gICAgICAgIGdhbWUucGh5c2ljcy5hcmNhZGUudmVsb2NpdHlGcm9tUm90YXRpb24odGFuay5yb3RhdGlvbiwtNTAsdGFuay5ib2R5LnZlbG9jaXR5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhbmsuYm9keS52ZWxvY2l0eS5zZXQoMCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGNvbnRyb2xzLmxlZnQuaXNEb3duKXtcbiAgICAgICAgaWYoY29udHJvbHMuZG93bi5pc0Rvd24pe1xuICAgICAgICAgIHRhbmsuYm9keS5yb3RhdGlvbisrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhbmsuYm9keS5yb3RhdGlvbi0tO1xuICAgICAgICB9XG4gICAgICB9IGVsc2VcbiAgICAgIGlmKGNvbnRyb2xzLnJpZ2h0LmlzRG93bil7XG4gICAgICAgIGlmKGNvbnRyb2xzLmRvd24uaXNEb3duKXtcbiAgICAgICAgICB0YW5rLmJvZHkucm90YXRpb24tLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YW5rLmJvZHkucm90YXRpb24rKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZihnYW1lLmlucHV0LmFjdGl2ZVBvaW50ZXIuaXNEb3duKXtcbiAgICAgICAgZmlyZSgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvL3Blcm1pdGUgYSByZWFsb2Nhw6fDo28gZGUgdW0gc3ByaXRlIGVtIHJlbGHDp8OjbyBhbyBtdW5kbyBkbyBqb2dvXG4gICAgICAvL3JlY2ViZSBjb21vIHBhcsOibWV0cm9zOiBvIHNwcml0ZSBhIHNlciByZWFsb2NhZG8gZSB1bWEgbWFyZ2VtIGVtIHBpeGVscyBcbiAgICAgIGdhbWUud29ybGQud3JhcCh0YW5rLDc1KTtcbiAgICAgIGdhbWUud29ybGQud3JhcChjYW5ub24sNzUpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBmaXJlKCl7XG4gICAgICBpZihnYW1lLnRpbWUubm93ID4gbmV4dEZpcmUgJiYgYmFsYXMuY291bnREZWFkKCkgPiAwKXtcbiAgICAgICAgdmFyIGJ1bGxldCA9IGJhbGFzLmdldEZpcnN0RGVhZCgpO1xuICAgICAgICAgIGJ1bGxldC5yZXNldChjYW5ub24ueCArIE1hdGguY29zKGNhbm5vbi5yb3RhdGlvbikgKiA4MCxjYW5ub24ueSArIE1hdGguc2luKGNhbm5vbi5yb3RhdGlvbikgKiA4MCk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2FtZS5waHlzaWNzLmFyY2FkZS5tb3ZlVG9Qb2ludGVyKGJ1bGxldCwzMDApO1xuICAgICAgICAgIFxuICAgICAgICAgIG5leHRGaXJlID0gZ2FtZS50aW1lLm5vdyArIGZpcmVSYXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidExpbmtJbmljaWFyJykuc3R5bGUuZGlzcGxheT0gXCJub25lXCI7IFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UZXN0ZSBHYW1lIFRhbnF1ZSBQaGFzZXJKUzwvdGl0bGU+XG4gICAgICAgIDxGYXZpSWNvbiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGVzdGUgR2FtZSBUYW5xdWUgUGhhc2VySlNcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiL2dhbWUvdGFucXVlL1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFtcGh0bWxcIiBocmVmPVwiL2FtcC9nYW1lL3RhbnF1ZS9cIiAvPlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvanMvcGhhc2VyLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dCByZWdpYW89e3JlZ2lhb30gbW9kbz17bW9kb30+XG4gICAgICAgICAgPGgxPlRlc3RlIEdhbWUgVGFucXVlIFBoYXNlckpTPC9oMT5cbiAgICAgICAgICA8cD5Fc3R1ZG8gZGUgZGVzZW52b2x2aW1lbnRvIGRlIGdhbWUgY29tIFBoYXNlckpTLjwvcD5cbiAgICAgICAgICA8ZGl2IGlkPVwiZGl2Z2FtZXRhbnF1ZVwiPjwvZGl2PlxuICAgICAgICAgIFM9QW5kYXIgcGFyYSB0cmF6PGJyLz5cbiAgICAgICAgICBXPUFuZGFyIHBhcmEgZnJlbnRlPGJyLz5cbiAgICAgICAgICBBPVZpcmFyIHBhcmEgYSBlc3F1ZXJkYTxici8+XG4gICAgICAgICAgRD1WaXJhciBwYXJhIGEgZGlyZWl0YTxici8+XG4gICAgICAgICAgPGEgaWQ9XCJidExpbmtJbmljaWFyXCIgY2xhc3NOYW1lPVwiYnRMaW5rQnJhbmNvXCIgb25DbGljaz17KCkgPT4ge2luaWNpYXJHYW1lKCl9fT5JbmljaWFyIEdhbWU8L2E+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmRpdmdhbWV0YW5xdWUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICAuYnRMaW5rQnJhbmNvIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvaVRleHRSZWd1bGFyLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07IC8qMTZweCovXG4gICAgICAgICAgICBoZWlnaHQ6IDMuNDI4NTcxNDNyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZGJkYmRiO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjE3KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMSwgMSwgMSwgMC4xNyk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjE3KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0TGlua0JyYW5jbzpob3ZlciB7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDEsIDEsIDEsIDAuNDcpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgxLCAxLCAxLCAwLjQ3KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDEsIDEsIDEsIDAuNDcpO1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIDxkaXYgY2xhc3NOYW1lPVwiR29kemlsbGFcIiBpZD1cInBvc2l0aW9uXCI+XG4vLyA8YSBocmVmPVwiI21ldUxpbmtcIiBvbmNsaWNrPVwibXlGdW5jdGlvbigpO1wiPlxuXG4vLzxpbWcgb25sb2FkPVwibW91c2UoKTtcIiBhbHQ9XCJGdW5kb1wiIHNyYz1cImh0dHBzOi8vaW1nLXMtbXNuLWNvbS5ha2FtYWl6ZWQubmV0L3RlbmFudC9hbXAvZW50aXR5aWQvQkJWU2hFYS5pbWc/aD00MTYmYW1wO3c9Nzk5JmFtcDttPTYmYW1wO3E9NjAmYW1wO3U9dCZhbXA7bz1mJmFtcDtsPWYmYW1wO3g9ODcxJmFtcDt5PTY1NFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB0aXRsZT1cIkNlbsOhcmlvIGRlIGNpZGFkZXNcIj48L2ltZz5cblxuZXhwb3J0IGRlZmF1bHQgYXRlbmRpbWVudG9PaVxuXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/game/tanque.js */"));
}; // <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">
//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>


/* harmony default export */ __webpack_exports__["default"] = (atendimentoOi);

/***/ })

})
//# sourceMappingURL=tanque.js.bf3e29a9df002f88ce1b.hot-update.js.map