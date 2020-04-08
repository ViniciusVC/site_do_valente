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
    className: "jsx-1847313732"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1847313732"
  }, "Teste Game Tanque PhaserJS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_atFavIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "Teste Game Tanque PhaserJS",
    className: "jsx-1847313732"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "canonical",
    href: "/game/tanque/",
    className: "jsx-1847313732"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "amphtml",
    href: "/amp/game/tanque/",
    className: "jsx-1847313732"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "/static/assetsv5/js/phaser.min.js",
    className: "jsx-1847313732"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_moleculas_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    regiao: regiao,
    modo: modo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1847313732"
  }, "Teste Game Tanque PhaserJS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1847313732"
  }, "Estudo de desenvolvimento de game com PhaserJS."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "divgametanque",
    className: "jsx-1847313732"
  }), "S=Andar para traz", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1847313732"
  }), "W=Andar para frente", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1847313732"
  }), "A=Virar para a esquerda", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1847313732"
  }), "D=Virar para a direita", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1847313732"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "btLinkIniciar",
    onClick: function onClick() {
      iniciarGame();
    },
    className: "jsx-1847313732" + " " + "btLinkBranco"
  }, "Iniciar Game")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1847313732"
  }, ".divgametanque.jsx-1847313732{position:absolute;width:90%;}.btLinkBranco.jsx-1847313732{font-family:oiTextRegular,sans-serif;background-color:#ffffff;border-radius:8px;color:#222222;display:block;font-size:1rem;height:3.42857143rem;text-align:center;width:300px;-webkit-text-decoration:none;text-decoration:none;border:solid 1px #dbdbdb;cursor:pointer;outline:0;margin:0;padding:1.2rem;box-sizing:border-box;font-style:normal;-webkit-transition:0.5s;transition:0.5s;-webkit-box-shadow:2px 2px 20px rgba(1,1,1,0.17);-moz-box-shadow:2px 2px 20px rgba(1,1,1,0.17);box-shadow:2px 2px 20px rgba(1,1,1,0.17);}.btLinkBranco.jsx-1847313732:hover{-webkit-box-shadow:1px 1px 10px rgba(1,1,1,0.47);-moz-box-shadow:1px 1px 10px rgba(1,1,1,0.47);box-shadow:1px 1px 10px rgba(1,1,1,0.47);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvdGVtcGxhdGVzL2dhbWUvdGFucXVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlJa0IsQUFHNkIsQUFJc0IsQUF1QmMsa0JBMUI1QyxVQUNaLFNBRzZCLFlBdUJ3QixhQXRCL0Isa0JBQ0osY0FDQSxDQXFCOEIsYUFwQjdCLGVBQ00sYUFvQnZCLFFBbkJvQixrQkFDTixZQUNTLGtEQUNJLHlCQUNWLGVBQ0wsVUFDRCxTQUNNLGVBQ08sc0JBQ0osa0JBQ0Ysd0NBQ29DLGlEQUNILDhDQUNMLHlDQUM5QyIsImZpbGUiOiIvaG9tZS9vaTQwMjgyNS9Eb2N1bWVudG9zL1Byb2pldG9zL3NpdGVfZG9fdmFsZW50ZS9jb21wb25lbnRzL3RlbXBsYXRlcy9nYW1lL3RhbnF1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEZhdmlJY29uIGZyb20gJy4uLy4uL2F0b21zL2F0RmF2SWNvbidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vbW9sZWN1bGFzL2xheW91dCdcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi4vLi4vLi4vY29udHJvbGxlci91dGlsLmpzJztcblxuY29uc3QgYXRlbmRpbWVudG9PaSA9IGZ1bmN0aW9uIChwcm9wcykge1xuXG4gIGNvbnNvbGUubG9nKCfilZTilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZcnKTtcbiAgY29uc29sZS5sb2coJ+KVkSAgICAgIEdBTUUgICAgY29udHJvbGVvZ29kemlsbGEgICAgICAgICDilZEnKTtcbiAgY29uc29sZS5sb2coJ+KVmuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVnScpO1xuXG4gIHZhciByZWdpYW8gPSBVdGlsLnZhbGlkYVByb3BzKHByb3BzLnJlZ2lhbyAsIFwiUkpcIik7XG4gIHZhciBtb2RvID0gVXRpbC52YWxpZGFQcm9wcyhwcm9wcy5tb2RvLCBcImh0bWxcIik7XG5cbiAgZnVuY3Rpb24gaW5pY2lhckdhbWUoKXtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJztcbiAgICAgXG4gICAgdmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoODAwLDYwMCxQaGFzZXIuQ0FOVkFTLCdkaXZnYW1ldGFucXVlJyx7cHJlbG9hZDpwcmVsb2FkLGNyZWF0ZTpjcmVhdGUsdXBkYXRlOnVwZGF0ZX0pO1xuICAgIFxuICAgIC8vVmFyacOhdmVpcyBHbG9iYWlzXG4gICAgdmFyIHRhbmssY29udHJvbHMgPSB7fSxjYW5ub24sYmFsYXMsZmlyZVJhdGUgPSAxMDAsbmV4dEZpcmUgPSAwO1xuICBcbiAgICBmdW5jdGlvbiBwcmVsb2FkKCl7XG4gICAgICBnYW1lLmxvYWQuaW1hZ2UoJ3RhbmsnLCcvc3RhdGljL2Fzc2V0c3Y1L2ltZy9nYW1lL3RhbnF1ZXRhbmswMi5wbmcnKTtcbiAgICAgIGdhbWUubG9hZC5pbWFnZSgnY2Fubm9uJywnL3N0YXRpYy9hc3NldHN2NS9pbWcvZ2FtZS90YW5xdWVjYW5ub24wMi5wbmcnKTtcbiAgICAgIGdhbWUubG9hZC5pbWFnZSgnYnVsbGV0JywnL3N0YXRpYy9hc3NldHN2NS9pbWcvZ2FtZS90YW5xdWVidWxsZXQucG5nJyk7XG4gICAgICBnYW1lLmxvYWQuaW1hZ2UoXCJiYWNrZ3JvdW5kXCIsIFwiL3N0YXRpYy9hc3NldHN2NS9pbWcvZ2FtZS90YW5xdWVjbGFyZWlyYS5qcGdcIik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZSgpe1xuICAgICAgZ2FtZS5hZGQudGlsZVNwcml0ZSgwLCAwLCA4MDAsIDYwMCwgJ2JhY2tncm91bmQnKTtcbiAgICAgIGdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgICAgLy9nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjQzc4ODM5JztcbiAgICAgIC8vZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kID0gXCJcIjtcbiAgXG4gICAgICB0YW5rID0gZ2FtZS5hZGQuc3ByaXRlKGdhbWUud29ybGQuY2VudGVyWCxnYW1lLndvcmxkLmNlbnRlclksJ3RhbmsnKTtcbiAgICAgIHRhbmsuYW5jaG9yLnNldCguNSk7XG4gICAgICBnYW1lLnBoeXNpY3MuZW5hYmxlKHRhbmspO1xuICAgICAgXG4gICAgICBiYWxhcyA9IGdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICBiYWxhcy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgIGJhbGFzLmNyZWF0ZU11bHRpcGxlKDUwLCdidWxsZXQnKTtcbiAgICAgIGJhbGFzLnNldEFsbCgnY2hlY2tXb3JsZEJvdW5kcycsdHJ1ZSk7XG4gICAgICBiYWxhcy5zZXRBbGwoJ291dE9mQm91bmRzS2lsbCcsdHJ1ZSk7XG4gICAgICBiYWxhcy5zZXRBbGwoJ2FuY2hvci54JywuNSk7XG4gICAgICBiYWxhcy5zZXRBbGwoJ2FuY2hvci55JywuNSk7XG4gICAgICBcbiAgICAgIGNhbm5vbiA9IGdhbWUuYWRkLnNwcml0ZSh0YW5rLngsdGFuay55LCdjYW5ub24nKTtcbiAgXG4gICAgICBjYW5ub24uYW5jaG9yLnNldCguMywuNSk7XG4gICAgICBnYW1lLnBoeXNpY3MuZW5hYmxlKGNhbm5vbik7XG4gICAgICBcbiAgICAgIFxuICAgICAgY29udHJvbHMudXAgPSBnYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Ym9hcmQuVyk7XG4gICAgICBjb250cm9scy5sZWZ0ID0gZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkEpO1xuICAgICAgY29udHJvbHMuZG93biA9IGdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5TKTtcbiAgICAgIGNvbnRyb2xzLnJpZ2h0ID0gZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkQpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGUoKXtcbiAgICAgIGNhbm5vbi54ID0gdGFuay54O1xuICAgICAgY2Fubm9uLnkgPSB0YW5rLnk7XG4gICAgICBjYW5ub24ucm90YXRpb24gPSBnYW1lLnBoeXNpY3MuYXJjYWRlLmFuZ2xlVG9Qb2ludGVyKGNhbm5vbik7XG4gICAgXG4gICAgICBpZihjb250cm9scy51cC5pc0Rvd24pe1xuICAgICAgICAvL0FwbGljYSB1bWEgdmVsb2NpZGFkZSBub3MgZWl4b3MgWCBlIFkgZG8gc3ByaXRlIGRhZG8gbyBkZSBpbmNsaW5hw6fDo28gZGVzdGVcbiAgICAgICAgLy9SZWNlYmUgY29tbyBwYXLDom1ldHJvczogYSBpbmNsaW5hw6fDo28gZW0gcmFkaWFub3MsIGEgdmVsb2NpZGFkZSBhIHNlciBhcGxpY2FkYSBlIG8gcGFyw6JtZXRybyBhIHNlciBhZmV0YWRvXG4gICAgICAgIGdhbWUucGh5c2ljcy5hcmNhZGUudmVsb2NpdHlGcm9tUm90YXRpb24odGFuay5yb3RhdGlvbiwxMDAsdGFuay5ib2R5LnZlbG9jaXR5KTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYoY29udHJvbHMuZG93bi5pc0Rvd24pe1xuICAgICAgICBnYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbVJvdGF0aW9uKHRhbmsucm90YXRpb24sLTUwLHRhbmsuYm9keS52ZWxvY2l0eSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YW5rLmJvZHkudmVsb2NpdHkuc2V0KDApO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjb250cm9scy5sZWZ0LmlzRG93bil7XG4gICAgICAgIGlmKGNvbnRyb2xzLmRvd24uaXNEb3duKXtcbiAgICAgICAgICB0YW5rLmJvZHkucm90YXRpb24rKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YW5rLmJvZHkucm90YXRpb24tLTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlXG4gICAgICBpZihjb250cm9scy5yaWdodC5pc0Rvd24pe1xuICAgICAgICBpZihjb250cm9scy5kb3duLmlzRG93bil7XG4gICAgICAgICAgdGFuay5ib2R5LnJvdGF0aW9uLS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFuay5ib2R5LnJvdGF0aW9uKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoZ2FtZS5pbnB1dC5hY3RpdmVQb2ludGVyLmlzRG93bil7XG4gICAgICAgIGZpcmUoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy9wZXJtaXRlIGEgcmVhbG9jYcOnw6NvIGRlIHVtIHNwcml0ZSBlbSByZWxhw6fDo28gYW8gbXVuZG8gZG8gam9nb1xuICAgICAgLy9yZWNlYmUgY29tbyBwYXLDom1ldHJvczogbyBzcHJpdGUgYSBzZXIgcmVhbG9jYWRvIGUgdW1hIG1hcmdlbSBlbSBwaXhlbHMgXG4gICAgICBnYW1lLndvcmxkLndyYXAodGFuayw3NSk7XG4gICAgICBnYW1lLndvcmxkLndyYXAoY2Fubm9uLDc1KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZmlyZSgpe1xuICAgICAgaWYoZ2FtZS50aW1lLm5vdyA+IG5leHRGaXJlICYmIGJhbGFzLmNvdW50RGVhZCgpID4gMCl7XG4gICAgICAgIHZhciBidWxsZXQgPSBiYWxhcy5nZXRGaXJzdERlYWQoKTtcbiAgICAgICAgICBidWxsZXQucmVzZXQoY2Fubm9uLnggKyBNYXRoLmNvcyhjYW5ub24ucm90YXRpb24pICogODAsY2Fubm9uLnkgKyBNYXRoLnNpbihjYW5ub24ucm90YXRpb24pICogODApO1xuICAgICAgICAgIFxuICAgICAgICAgIGdhbWUucGh5c2ljcy5hcmNhZGUubW92ZVRvUG9pbnRlcihidWxsZXQsMzAwKTtcbiAgICAgICAgICBcbiAgICAgICAgICBuZXh0RmlyZSA9IGdhbWUudGltZS5ub3cgKyBmaXJlUmF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRMaW5rSW5pY2lhcicpLnN0eWxlLmRpc3BsYXk9IFwibm9uZVwiOyBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGVzdGUgR2FtZSBUYW5xdWUgUGhhc2VySlM8L3RpdGxlPlxuICAgICAgICA8RmF2aUljb24gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRlc3RlIEdhbWUgVGFucXVlIFBoYXNlckpTXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cIi9nYW1lL3RhbnF1ZS9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhbXBodG1sXCIgaHJlZj1cIi9hbXAvZ2FtZS90YW5xdWUvXCIgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2Fzc2V0c3Y1L2pzL3BoYXNlci5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQgcmVnaWFvPXtyZWdpYW99IG1vZG89e21vZG99PlxuICAgICAgICAgIDxoMT5UZXN0ZSBHYW1lIFRhbnF1ZSBQaGFzZXJKUzwvaDE+XG4gICAgICAgICAgPHA+RXN0dWRvIGRlIGRlc2Vudm9sdmltZW50byBkZSBnYW1lIGNvbSBQaGFzZXJKUy48L3A+XG4gICAgICAgICAgPGRpdiBpZD1cImRpdmdhbWV0YW5xdWVcIj48L2Rpdj5cbiAgICAgICAgICBTPUFuZGFyIHBhcmEgdHJhejxici8+XG4gICAgICAgICAgVz1BbmRhciBwYXJhIGZyZW50ZTxici8+XG4gICAgICAgICAgQT1WaXJhciBwYXJhIGEgZXNxdWVyZGE8YnIvPlxuICAgICAgICAgIEQ9VmlyYXIgcGFyYSBhIGRpcmVpdGE8YnIvPlxuICAgICAgICAgIDxhIGlkPVwiYnRMaW5rSW5pY2lhclwiIGNsYXNzTmFtZT1cImJ0TGlua0JyYW5jb1wiIG9uQ2xpY2s9eygpID0+IHtpbmljaWFyR2FtZSgpfX0+SW5pY2lhciBHYW1lPC9hPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5kaXZnYW1ldGFucXVlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgICAgICAuYnRMaW5rQnJhbmNvIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvaVRleHRSZWd1bGFyLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07IC8qMTZweCovXG4gICAgICAgICAgICBoZWlnaHQ6IDMuNDI4NTcxNDNyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZGJkYmRiO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjE3KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAyMHB4IHJnYmEoMSwgMSwgMSwgMC4xNyk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgxLCAxLCAxLCAwLjE3KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0TGlua0JyYW5jbzpob3ZlciB7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDEsIDEsIDEsIDAuNDcpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgxLCAxLCAxLCAwLjQ3KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDEsIDEsIDEsIDAuNDcpO1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIDxkaXYgY2xhc3NOYW1lPVwiR29kemlsbGFcIiBpZD1cInBvc2l0aW9uXCI+XG4vLyA8YSBocmVmPVwiI21ldUxpbmtcIiBvbmNsaWNrPVwibXlGdW5jdGlvbigpO1wiPlxuXG4vLzxpbWcgb25sb2FkPVwibW91c2UoKTtcIiBhbHQ9XCJGdW5kb1wiIHNyYz1cImh0dHBzOi8vaW1nLXMtbXNuLWNvbS5ha2FtYWl6ZWQubmV0L3RlbmFudC9hbXAvZW50aXR5aWQvQkJWU2hFYS5pbWc/aD00MTYmYW1wO3c9Nzk5JmFtcDttPTYmYW1wO3E9NjAmYW1wO3U9dCZhbXA7bz1mJmFtcDtsPWYmYW1wO3g9ODcxJmFtcDt5PTY1NFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB0aXRsZT1cIkNlbsOhcmlvIGRlIGNpZGFkZXNcIj48L2ltZz5cblxuZXhwb3J0IGRlZmF1bHQgYXRlbmRpbWVudG9PaVxuXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/templates/game/tanque.js */"));
}; // <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">
//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>


/* harmony default export */ __webpack_exports__["default"] = (atendimentoOi);

/***/ })

})
//# sourceMappingURL=tanque.js.f8cc2346e5afac893b36.hot-update.js.map