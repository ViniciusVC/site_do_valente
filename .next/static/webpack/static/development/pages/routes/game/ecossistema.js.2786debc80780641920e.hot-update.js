webpackHotUpdate("static/development/pages/routes/game/ecossistema.js",{

/***/ "./components/organisms/orgEcossistema/index.js":
/*!******************************************************!*\
  !*** ./components/organisms/orgEcossistema/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/atDiv/index.js */ "./components/atoms/atDiv/index.js");





var orgEcossistema = function orgEcossistema(props) {
  var relogio;
  var personagens = [];
  var ultimaTecla = "parar";

  function funcPropSer(varNovo, NumSer, tipo, varPositX, varPositY) {
    console.log("--->funcPropSer(" + varNovo + "," + NumSer + "," + tipo + "," + varPositX + "," + varPositY + ")");

    if (varNovo == "novo") {
      console.log("Criando NOVO personagens [" + NumSer + "]");
      personagens[NumSer] = {
        "tipo": tipo,
        "width": 20,
        "height": 20,
        "direcao": "parado",
        "objetivo": "nada"
      };
      console.log("---> personagens[" + NumSer + "] = " + personagens[NumSer]);
      console.log("---> personagens[" + NumSer + "].tipo = " + personagens[NumSer].tipo);
      personagens[NumSer].objImg = new Image();
    } //else if (=="altera"){ }


    if (varPositX != "manter") {
      personagens[NumSer].x = varPositX;
    }

    if (varPositY != "manter") {
      personagens[NumSer].y = varPositY;
    }

    if (tipo == "avatar") {
      personagens[NumSer].tipo = "avatar";
      personagens[NumSer].hierarquia = 4;
      personagens[NumSer].width = 20;
      personagens[NumSer].height = 20;
      personagens[NumSer].velocidade = 3;
      personagens[NumSer].img = "https://images.vexels.com/media/users/3/177827/isolated/preview/03cbb4fb0d0318befadf121314e35d40-cabelo-de-monstro-monstro-liso-by-vexels.png";
      personagens[NumSer].objImg.src = "https://images.vexels.com/media/users/3/177827/isolated/preview/03cbb4fb0d0318befadf121314e35d40-cabelo-de-monstro-monstro-liso-by-vexels.png";
      personagens[NumSer].direcao = "parado";
      personagens[NumSer].objetivo = "nada";
      personagens[NumSer].tempo = 100;
    } else if (tipo == "carnivoro") {
      personagens[NumSer].tipo = "carnivoro";
      personagens[NumSer].hierarquia = 4;
      personagens[NumSer].width = 20;
      personagens[NumSer].height = 20;
      personagens[NumSer].img = "https://image.flaticon.com/icons/svg/1236/1236125.svg";
      personagens[NumSer].velocidade = 4;
      personagens[NumSer].objImg.src = "https://image.flaticon.com/icons/svg/1236/1236125.svg";
      personagens[NumSer].direcao = "parado";
      personagens[NumSer].objetivo = "nada";
      personagens[NumSer].tempo = 2000;
    } else if (tipo == "herbivoro") {
      personagens[NumSer].tipo = "herbivoro";
      personagens[NumSer].hierarquia = 3;
      personagens[NumSer].width = 20;
      personagens[NumSer].height = 20;
      personagens[NumSer].velocidade = 2;
      personagens[NumSer].img = "https://images.vexels.com/media/users/3/177828/isolated/preview/2cad4138c11ac3e2798bed47b3e21084-monstro-olho-peludo-plano-by-vexels.png";
      personagens[NumSer].objImg.src = "https://images.vexels.com/media/users/3/177828/isolated/preview/2cad4138c11ac3e2798bed47b3e21084-monstro-olho-peludo-plano-by-vexels.png";
      personagens[NumSer].direcao = "parado";
      personagens[NumSer].objetivo = "nada";
      personagens[NumSer].tempo = 1000;
    } else if (tipo == "ovo") {
      personagens[NumSer].tipo = "ovo";
      personagens[NumSer].hierarquia = 2;
      personagens[NumSer].width = 20;
      personagens[NumSer].height = 20;
      personagens[NumSer].velocidade = 0;
      personagens[NumSer].img = "https://image.flaticon.com/icons/svg/1462/1462011.svg";
      personagens[NumSer].objImg.src = "https://image.flaticon.com/icons/svg/1462/1462011.svg";
      personagens[NumSer].direcao = "parado";
      personagens[NumSer].objetivo = "nada";
      personagens[NumSer].tempo = 100;
    } else if (tipo == "planta") {
      personagens[NumSer].tipo = "planta";
      personagens[NumSer].hierarquia = 1;
      personagens[NumSer].width = 20;
      personagens[NumSer].height = 20;
      personagens[NumSer].velocidade = 0;
      personagens[NumSer].img = "https://image.flaticon.com/icons/png/512/1431/premium/1431933.png";
      personagens[NumSer].objImg.src = "https://image.flaticon.com/icons/png/512/1431/premium/1431933.png";
      personagens[NumSer].direcao = "parado";
      personagens[NumSer].objetivo = "nada";
      personagens[NumSer].tempo = 100;
    } else if (tipo == "coco") {
      personagens[NumSer].tipo = "coco";
      personagens[NumSer].hierarquia = 0;
      personagens[NumSer].width = 20;
      personagens[NumSer].height = 20;
      personagens[NumSer].velocidade = 0;
      personagens[NumSer].img = "https://image.flaticon.com/icons/svg/1642/1642901.svg";
      personagens[NumSer].objImg.src = "https://image.flaticon.com/icons/svg/1642/1642901.svg";
      personagens[NumSer].direcao = "parado";
      personagens[NumSer].objetivo = "nada";
      personagens[NumSer].tempo = 100;
    } else if (tipo == "cenario") {
      personagens[NumSer].tipo = "cenario";
      personagens[NumSer].hierarquia = 0;
      personagens[NumSer].width = 600;
      personagens[NumSer].height = 600;
      personagens[NumSer].velocidade = 0;
      personagens[NumSer].img = "/static/assetsv5/img/game/tanqueclareira.jpg";
      personagens[NumSer].objImg.src = "/static/assetsv5/img/game/tanqueclareira.jpg";
      personagens[NumSer].direcao = "parado";
      personagens[NumSer].objetivo = "nada";
      personagens[NumSer].tempo = 100;
    }

    console.log("---> personagens[" + NumSer + "].tipo = " + personagens[NumSer].tipo);
  }

  function comportamento() {
    //O personagem 0 é o cenário.
    //O personagem 1 é o avatar.
    var serA = 2;

    for (serA = 2; serA < personagens.length; serA++) {
      //for (serA=2; serA < 5; serA++) {
      personagens[serA].tempo = personagens[serA].tempo - 1;

      if (personagens[serA].tipo == "carnivoro" || personagens[serA].tipo == "herbivoro") {
        if (personagens[serA].tempo < 1) {
          funcPropSer("altera", serA, "coco", "manter", "manter");
        } else {
          var serB = 1;
          var menorDistancia = 1200;
          var distanciaAtual = 1200;
          var melhorDecisao = "parado";
          var serMaisPerto = 1;

          for (serB = 2; serB < personagens.length; serB++) {
            //for (serB=1; serB < 5; serB++) {
            // console.log('comparando o personagem '+serA+ 'com' +serB+ '.');
            // console.log('Personagem A ('+serA+') é um '+personagens[serA].tipo+'.');
            // console.log('Personagem B ('+serB+') é um '+personagens[serB].tipo+'.');
            if (serA != serB) {
              if (personagens[serA].tipo == "carnivoro") {
                if (personagens[serB].tipo == "herbivoro") {
                  //Caçar
                  distanciaAtual = calDistancia(serA, serB);

                  if (menorDistancia > distanciaAtual) {
                    menorDistancia = distanciaAtual;
                    melhorDecisao = CalDecisao(serA, serB);
                    serMaisPerto = serB;
                    personagens[serA].objetivo = "caçando";
                  }
                }
              } else if (personagens[serA].tipo == "herbivoro") {
                if (personagens[serB].tipo == "planta") {
                  //Caçar
                  distanciaAtual = calDistancia(serA, serB);

                  if (menorDistancia > distanciaAtual) {
                    menorDistancia = distanciaAtual;
                    melhorDecisao = CalDecisao(serA, serB);
                    serMaisPerto = serB;
                    personagens[serA].objetivo = serA;
                  }
                } else if (personagens[serB].tipo == "carnivoro") {
                  //Fugir
                  distanciaAtual = calDistancia(serA, serB);

                  if (menorDistancia > distanciaAtual) {
                    menorDistancia = distanciaAtual;
                    melhorDecisao = CalDecisao(serB, serA);
                    serMaisPerto = serB;
                    personagens[serA].objetivo = "Fugindo de " + serB;
                  }
                }
              }
            }
          } // Fim do FOR B
          //console.log('Personagem '+serA+' está a disanca de ' + menorDistancia + ' do .' + serMaisPerto);
          //console.log('A melhor decisão é ir para '+ melhorDecisao +'.');


          if (personagens[serA].tipo == "carnivoro" && melhorDecisao == "devorou") {
            personagens[serA].tempo = 2000;
            funcPropSer("altera", serMaisPerto, "coco", "manter", "manter");
          } else if (personagens[serA].tipo == "herbivoro" && personagens[serMaisPerto].tipo == "planta" && melhorDecisao == "devorou") {
            personagens[serA].tempo = 2000;
            funcPropSer("altera", serMaisPerto, "ovo", "manter", "manter");
          }

          moverPersonagem(serA, melhorDecisao);
        }
      } else if (personagens[serA].tipo == "ovo" && personagens[serA].tempo < 1) {
        funcPropSer("altera", serA, "herbivoro", "manter", "manter");
      } else if (personagens[serA].tipo == "planta" && personagens[serA].tempo < 1) {
        personagens[serA].width = personagens[serA].width + 2, personagens[serA].height = personagens[serA].height + 2, personagens[serA].tempo = 100;
      } else if (personagens[serA].tipo == "coco" && personagens[serA].tempo < 1) {
        funcPropSer("altera", serA, "planta", "manter", "manter");
      } // Fim do if

    } // Fim do FOR A


    desenharCanvas();
  }

  function desenharCanvas() {
    // Desenha os objetos na tela.
    var CNV = document.getElementById('canvasGame');
    var CTX = CNV.getContext("2d");
    var i;
    var pespectiva = 0;
    console.log('| inicio do FOR | <══════════════════════════════════════');
    console.log(personagens);

    for (i = 0; i < personagens.length; i++) {
      //for (i=0; i < 5; i++) {
      console.log("i=" + i);
      console.log("tipo = " + personagens[i].tipo);
      pespectiva = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(personagens[i].y / 10); //(y = 0 a 600) Proporção 10 a 60

      CTX.drawImage(personagens[i].objImg, personagens[i].x, personagens[i].y, personagens[i].width + pespectiva, personagens[i].height + pespectiva);
      CTX.font = "30px Arial";
      CTX.fillStyle = "red"; //personagens[i].cor
      //CTX.fillText(i+'-'+personagens[i].tipo, personagens[i].x+25,personagens[i].y-10);

      CTX.fillText(personagens[i].objetivo, personagens[i].x + 25, personagens[i].y); //CTX.fillText(personagens[i].direcao, personagens[i].x+25,personagens[i].y+10);
      //CTX.fillText(personagens[i].tempo, personagens[i].x+25,personagens[i].y+20);
    }

    console.log('| fim do FOR | <══════════════════════════════════════'); // CNV.addEventListener('mousemove', function(evt) {
    //   var mousePos = getMousePos(canvas, evt);
    //   var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    //   alert(message);
    // }, false);
  }

  function calDistancia(serA, serB) {
    var varDistancia = 0;

    if (personagens[serA].x == personagens[serB].x && personagens[serA].y == personagens[serB].y) {
      varDistancia = 0;
    } else {
      if (personagens[serA].x > personagens[serB].x) {
        //"-1"
        varDistancia = personagens[serA].x - personagens[serB].x;
      } else if (personagens[serA].x < personagens[serB].x) {
        //"+1"
        varDistancia = personagens[serA].x + personagens[serB].x;
      }

      if (personagens[serA].y > personagens[serB].y) {
        //"-1"
        varDistancia = varDistancia + personagens[serA].y - personagens[serB].y;
      } else if (personagens[serA].y < personagens[serB].y) {
        //"+1" 
        varDistancia = varDistancia + personagens[serA].y + personagens[serB].y;
      }
    }

    return varDistancia;
  }

  function CalDecisao(serA, serB) {
    var RetonDecisao = "parado";
    var tamanho = personagens[serA].width / 2;

    if (personagens[serA].x + tamanho > personagens[serB].x && personagens[serA].x - tamanho < personagens[serB].x && personagens[serA].y + tamanho > personagens[serB].y && personagens[serA].y - tamanho < personagens[serB].y) {
      RetonDecisao = "devorou";
    } else {
      var sorteio = Math.floor(Math.random() * 2 + 1);
      console.log('sorteio=' + sorteio);

      if (sorteio == 1) {
        if (personagens[serA].y > personagens[serB].y) {
          //"-1"
          RetonDecisao = "subir";
        } else if (personagens[serA].y < personagens[serB].y) {
          //"+1" 
          RetonDecisao = "descer";
        }
      } else {
        if (personagens[serA].x > personagens[serB].x) {
          //"-1"
          RetonDecisao = "<-";
        } else if (personagens[serA].x < personagens[serB].x) {
          //"+1"
          RetonDecisao = "->";
        }
      }
    }

    return RetonDecisao; //personagens[i].width
    //personagens[i].height
  }

  function moverPersonagem(personaAtual, varDirecao) {
    if (varDirecao == "subir") {
      personagens[personaAtual].y = personagens[personaAtual].y - personagens[personaAtual].velocidade;

      if (personagens[personaAtual].y < 0) {
        personagens[personaAtual].y = 600;
      }
    } else if (varDirecao == "descer") {
      personagens[personaAtual].y = personagens[personaAtual].y + personagens[personaAtual].velocidade;

      if (personagens[personaAtual].y > 600) {
        personagens[personaAtual].y = 0;
      }
    } else if (varDirecao == "<-") {
      personagens[personaAtual].x = personagens[personaAtual].x - personagens[personaAtual].velocidade;

      if (personagens[personaAtual].x < 0) {
        personagens[personaAtual].x = 600;
      }
    } else if (varDirecao == "->") {
      personagens[personaAtual].x = personagens[personaAtual].x + personagens[personaAtual].velocidade;

      if (personagens[personaAtual].x > 600) {
        personagens[personaAtual].x = 0;
      }
    }

    personagens[personaAtual].direcao = varDirecao;
  }

  function iniciarPersonagens() {
    console.log("!!!!! iniciarPersonagens()");
    var i = 0;
    funcPropSer("novo", i++, "cenario", 0, 0);
    funcPropSer("novo", i++, "avatar", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "carnivoro", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "herbivoro", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "herbivoro", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "ovo", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "ovo", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "planta", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "planta", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "planta", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "coco", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "herbivoro", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "carnivoro", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "planta", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "planta", funcLocalInit(), funcLocalInit());
    funcPropSer("novo", i++, "planta", funcLocalInit(), funcLocalInit());
  }

  function iniciarGame() {
    iniciarPersonagens();
    window.addEventListener("keydown", function (event) {
      console.log('| Digitou algo | <══════════════════════════════════════');
      var varKeyCode = event.keyCode;
      var varKey = event.key;

      if (varKeyCode !== undefined) {
        console.log("varKeyCode !== undefined");
        console.log("varKeyCode=" + varKeyCode);
        console.log("varKey=" + varKey);
        var evento = "parar";

        if (varKeyCode == "38" || varKeyCode == 38 || varKey == "ArrowUp") {
          evento = "subir";
        } else if (varKeyCode == "40" || varKeyCode == 40 || varKey == "ArrowUp") {
          evento = "descer";
        } else if (varKeyCode == "37" || varKeyCode == 47 || varKey == "ArrowLeft") {
          evento = "<-";
        } else if (varKeyCode == "39" || varKeyCode == 39 || varKey == "ArrowRight") {
          evento = "->";
        }

        console.log('evento = ' + evento);
        ultimaTecla = evento;
        moverPersonagem(1, evento);
      } else {
        console.log("varKeyCode == undefined");
        alert("varKeyCode == undefined");
      }
    }, true);
    desenharCanvas();
    relogio = setInterval(comportamento, 100);
  }

  function funcLocalInit() {
    return Math.floor(Math.random() * 500 + 1);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_atoms_atDiv_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "responsivo"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1041547274"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    id: "btLinkIniciar",
    onClick: function onClick() {
      iniciarGame();
    },
    className: "jsx-1041547274" + " " + "btCinza"
  }, "Iniciar Game"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("canvas", {
    id: "canvasGame",
    width: "600",
    height: "600",
    className: "jsx-1041547274"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1041547274"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    id: "btLinkIniciar",
    onClick: function onClick() {
      moverPersonagem(1, "subir");
    },
    className: "jsx-1041547274" + " " + "btCinza"
  }, "sobe"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    id: "btLinkIniciar",
    onClick: function onClick() {
      moverPersonagem(1, "<-");
    },
    className: "jsx-1041547274" + " " + "btCinza"
  }, "esquerda"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    id: "btLinkIniciar",
    onClick: function onClick() {
      moverPersonagem(1, "->");
    },
    className: "jsx-1041547274" + " " + "btCinza"
  }, "direita"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    id: "btLinkIniciar",
    onClick: function onClick() {
      moverPersonagem(1, "descer");
    },
    className: "jsx-1041547274" + " " + "btCinza"
  }, "desce")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1041547274"
  }, ".Godzilla.jsx-1041547274{position:absolute;}.btCinza.jsx-1041547274{padding:10px;-webkit-transition:all 0.8s;transition:all 0.8s;font-family:oiTextRegular,sans-serif;background-color:#26293c;border-radius:15px;color:#ffffff;display:block;font-size:1rem;text-align:center;-webkit-text-decoration:none;text-decoration:none;border:solid 2px #4a516b;cursor:pointer;outline:0;margin:0;box-sizing:border-box;font-style:normal;width:100%;max-width:500px;}.btCinza.jsx-1041547274:hover{-webkit-transition:all 0.8s;transition:all 0.8s;-webkit-transition:all 0.8s;-moz-transition:all 0.8s;-o-transition:all 0.8s;background-color:#4a516b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvb3JnYW5pc21zL29yZ0Vjb3NzaXN0ZW1hL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJYa0IsQUFHNkIsQUFNSCxBQXFCTyxhQXBCQSxLQU54Qiw4QkEyQmdDLGFBcEJVLGVBcUJiLHNCQXBCQSxHQXFCRixzQkFwQkosQ0FzQk0sa0JBckJYLE9Bc0JoQixPQXJCZ0IsY0FDQyxlQUNHLGtCQUVHLGtEQUNJLHlCQUNWLGVBQ0wsVUFDRCxTQUNhLHNCQUNKLGtCQUNQLFdBQ0ssZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL29pNDAyODI1L0RvY3VtZW50b3MvUHJvamV0b3Mvc2l0ZV9kb192YWxlbnRlL2NvbXBvbmVudHMvb3JnYW5pc21zL29yZ0Vjb3NzaXN0ZW1hL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERpdiBmcm9tICcuLi8uLi9hdG9tcy9hdERpdi9pbmRleC5qcyc7XG5cblxuY29uc3Qgb3JnRWNvc3Npc3RlbWEgPSBmdW5jdGlvbiAocHJvcHMpIHtcblxuICB2YXIgcmVsb2dpbztcbiAgdmFyIHBlcnNvbmFnZW5zID0gW107XG4gIHZhciB1bHRpbWFUZWNsYSA9IFwicGFyYXJcIjtcblxuICBmdW5jdGlvbiBmdW5jUHJvcFNlcih2YXJOb3ZvLE51bVNlciwgdGlwbywgdmFyUG9zaXRYLCB2YXJQb3NpdFkpe1xuICAgIGNvbnNvbGUubG9nKFwiLS0tPmZ1bmNQcm9wU2VyKFwiK3Zhck5vdm8rXCIsXCIrTnVtU2VyK1wiLFwiKyB0aXBvK1wiLFwiKyB2YXJQb3NpdFgrXCIsXCIrIHZhclBvc2l0WSArXCIpXCIpXG4gICAgaWYodmFyTm92bz09XCJub3ZvXCIpe1xuICAgICAgY29uc29sZS5sb2coXCJDcmlhbmRvIE5PVk8gcGVyc29uYWdlbnMgW1wiKyBOdW1TZXIgK1wiXVwiKTtcbiAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0gPSB7XG4gICAgICAgIFwidGlwb1wiOnRpcG8sXG4gICAgICAgIFwid2lkdGhcIjogMjAsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDIwLFxuICAgICAgICBcImRpcmVjYW9cIjpcInBhcmFkb1wiLFxuICAgICAgICBcIm9iamV0aXZvXCI6XCJuYWRhXCJcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tPiBwZXJzb25hZ2Vuc1tcIisgTnVtU2VyICtcIl0gPSBcIiArIHBlcnNvbmFnZW5zW051bVNlcl0pO1xuICAgICAgY29uc29sZS5sb2coXCItLS0+IHBlcnNvbmFnZW5zW1wiKyBOdW1TZXIgK1wiXS50aXBvID0gXCIgKyBwZXJzb25hZ2Vuc1tOdW1TZXJdLnRpcG8pO1xuICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5vYmpJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB9XG4gICAgLy9lbHNlIGlmICg9PVwiYWx0ZXJhXCIpeyB9XG4gICAgaWYodmFyUG9zaXRYIT1cIm1hbnRlclwiKXtcbiAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0ueD12YXJQb3NpdFg7XG4gICAgfVxuICAgIGlmKHZhclBvc2l0WSE9XCJtYW50ZXJcIil7XG4gICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLnk9dmFyUG9zaXRZO1xuICAgIH1cbiAgICBpZih0aXBvPT1cImF2YXRhclwiKXtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS50aXBvPVwiYXZhdGFyXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0uaGllcmFycXVpYT00O1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLndpZHRoPTIwO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLmhlaWdodD0yMDtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS52ZWxvY2lkYWRlPTM7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0uaW1nPVwiaHR0cHM6Ly9pbWFnZXMudmV4ZWxzLmNvbS9tZWRpYS91c2Vycy8zLzE3NzgyNy9pc29sYXRlZC9wcmV2aWV3LzAzY2JiNGZiMGQwMzE4YmVmYWRmMTIxMzE0ZTM1ZDQwLWNhYmVsby1kZS1tb25zdHJvLW1vbnN0cm8tbGlzby1ieS12ZXhlbHMucG5nXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0ub2JqSW1nLnNyYyA9XCJodHRwczovL2ltYWdlcy52ZXhlbHMuY29tL21lZGlhL3VzZXJzLzMvMTc3ODI3L2lzb2xhdGVkL3ByZXZpZXcvMDNjYmI0ZmIwZDAzMThiZWZhZGYxMjEzMTRlMzVkNDAtY2FiZWxvLWRlLW1vbnN0cm8tbW9uc3Ryby1saXNvLWJ5LXZleGVscy5wbmdcIjtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5kaXJlY2FvPVwicGFyYWRvXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0ub2JqZXRpdm89XCJuYWRhXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0udGVtcG89MTAwO1xuICAgIH1lbHNlIGlmKHRpcG89PVwiY2Fybml2b3JvXCIpe1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLnRpcG89XCJjYXJuaXZvcm9cIjtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5oaWVyYXJxdWlhPTQ7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0ud2lkdGg9MjA7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0uaGVpZ2h0PTIwO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLmltZz1cImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMjM2LzEyMzYxMjUuc3ZnXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0udmVsb2NpZGFkZT00O1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLm9iakltZy5zcmMgPVwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzEyMzYvMTIzNjEyNS5zdmdcIjtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5kaXJlY2FvPVwicGFyYWRvXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0ub2JqZXRpdm89XCJuYWRhXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0udGVtcG89MjAwMDtcbiAgICB9ZWxzZSBpZih0aXBvPT1cImhlcmJpdm9yb1wiKXtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS50aXBvPVwiaGVyYml2b3JvXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0uaGllcmFycXVpYT0zO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLndpZHRoPTIwO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLmhlaWdodD0yMDtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS52ZWxvY2lkYWRlPTI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0uaW1nPVwiaHR0cHM6Ly9pbWFnZXMudmV4ZWxzLmNvbS9tZWRpYS91c2Vycy8zLzE3NzgyOC9pc29sYXRlZC9wcmV2aWV3LzJjYWQ0MTM4YzExYWMzZTI3OThiZWQ0N2IzZTIxMDg0LW1vbnN0cm8tb2xoby1wZWx1ZG8tcGxhbm8tYnktdmV4ZWxzLnBuZ1wiO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLm9iakltZy5zcmMgPVwiaHR0cHM6Ly9pbWFnZXMudmV4ZWxzLmNvbS9tZWRpYS91c2Vycy8zLzE3NzgyOC9pc29sYXRlZC9wcmV2aWV3LzJjYWQ0MTM4YzExYWMzZTI3OThiZWQ0N2IzZTIxMDg0LW1vbnN0cm8tb2xoby1wZWx1ZG8tcGxhbm8tYnktdmV4ZWxzLnBuZ1wiO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLmRpcmVjYW89XCJwYXJhZG9cIjtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5vYmpldGl2bz1cIm5hZGFcIjtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS50ZW1wbz0xMDAwO1xuICAgIH1lbHNlIGlmKHRpcG89PVwib3ZvXCIpe1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLnRpcG89XCJvdm9cIjtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5oaWVyYXJxdWlhPTI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0ud2lkdGg9MjA7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0uaGVpZ2h0PTIwO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLnZlbG9jaWRhZGU9MDtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5pbWc9XCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ2Mi8xNDYyMDExLnN2Z1wiO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLm9iakltZy5zcmMgPVwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0NjIvMTQ2MjAxMS5zdmdcIjtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5kaXJlY2FvPVwicGFyYWRvXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0ub2JqZXRpdm89XCJuYWRhXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0udGVtcG89MTAwO1xuICAgIH1lbHNlIGlmKHRpcG89PVwicGxhbnRhXCIpe1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLnRpcG89XCJwbGFudGFcIjtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5oaWVyYXJxdWlhPTE7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0ud2lkdGg9MjA7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0uaGVpZ2h0PTIwO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLnZlbG9jaWRhZGU9MDtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5pbWc9XCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9wbmcvNTEyLzE0MzEvcHJlbWl1bS8xNDMxOTMzLnBuZ1wiO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLm9iakltZy5zcmMgPVwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvcG5nLzUxMi8xNDMxL3ByZW1pdW0vMTQzMTkzMy5wbmdcIjtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5kaXJlY2FvPVwicGFyYWRvXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0ub2JqZXRpdm89XCJuYWRhXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0udGVtcG89MTAwO1xuICAgIH1lbHNlIGlmKHRpcG89PVwiY29jb1wiKXtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS50aXBvPVwiY29jb1wiO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLmhpZXJhcnF1aWE9MDtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS53aWR0aD0yMDtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5oZWlnaHQ9MjA7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0udmVsb2NpZGFkZT0wO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLmltZz1cImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNjQyLzE2NDI5MDEuc3ZnXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0ub2JqSW1nLnNyYz1cImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNjQyLzE2NDI5MDEuc3ZnXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0uZGlyZWNhbz1cInBhcmFkb1wiO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLm9iamV0aXZvPVwibmFkYVwiO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLnRlbXBvPTEwMDtcbiAgICB9ZWxzZSBpZih0aXBvPT1cImNlbmFyaW9cIil7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0udGlwbz1cImNlbmFyaW9cIjtcbiAgICAgICAgcGVyc29uYWdlbnNbTnVtU2VyXS5oaWVyYXJxdWlhPTA7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0ud2lkdGg9NjAwO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLmhlaWdodD02MDA7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0udmVsb2NpZGFkZT0wO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLmltZz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2dhbWUvdGFucXVlY2xhcmVpcmEuanBnXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0ub2JqSW1nLnNyYz1cIi9zdGF0aWMvYXNzZXRzdjUvaW1nL2dhbWUvdGFucXVlY2xhcmVpcmEuanBnXCI7XG4gICAgICAgIHBlcnNvbmFnZW5zW051bVNlcl0uZGlyZWNhbz1cInBhcmFkb1wiO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLm9iamV0aXZvPVwibmFkYVwiO1xuICAgICAgICBwZXJzb25hZ2Vuc1tOdW1TZXJdLnRlbXBvPTEwMDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCItLS0+IHBlcnNvbmFnZW5zW1wiKyBOdW1TZXIgK1wiXS50aXBvID0gXCIgKyBwZXJzb25hZ2Vuc1tOdW1TZXJdLnRpcG8pO1xuICB9XG5cblxuICBmdW5jdGlvbiBjb21wb3J0YW1lbnRvKCl7XG4gICAgLy9PIHBlcnNvbmFnZW0gMCDDqSBvIGNlbsOhcmlvLlxuICAgIC8vTyBwZXJzb25hZ2VtIDEgw6kgbyBhdmF0YXIuXG4gICAgdmFyIHNlckEgPSAyXG4gICAgZm9yIChzZXJBPTI7IHNlckEgPCBwZXJzb25hZ2Vucy5sZW5ndGg7IHNlckErKykge1xuICAgIC8vZm9yIChzZXJBPTI7IHNlckEgPCA1OyBzZXJBKyspIHtcbiAgICAgIHBlcnNvbmFnZW5zW3NlckFdLnRlbXBvPXBlcnNvbmFnZW5zW3NlckFdLnRlbXBvLTE7XG4gICAgICBpZihwZXJzb25hZ2Vuc1tzZXJBXS50aXBvPT1cImNhcm5pdm9yb1wifHxwZXJzb25hZ2Vuc1tzZXJBXS50aXBvPT1cImhlcmJpdm9yb1wiKXtcbiAgICAgICAgaWYocGVyc29uYWdlbnNbc2VyQV0udGVtcG88MSl7XG4gICAgICAgICAgZnVuY1Byb3BTZXIoXCJhbHRlcmFcIixzZXJBLCBcImNvY29cIiwgXCJtYW50ZXJcIiwgXCJtYW50ZXJcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHZhciBzZXJCID0gMVxuICAgICAgICAgIHZhciBtZW5vckRpc3RhbmNpYSA9IDEyMDA7XG4gICAgICAgICAgdmFyIGRpc3RhbmNpYUF0dWFsID0gMTIwMDtcbiAgICAgICAgICB2YXIgbWVsaG9yRGVjaXNhbz1cInBhcmFkb1wiO1xuICAgICAgICAgIHZhciBzZXJNYWlzUGVydG89MTtcbiAgICAgICAgICBmb3IgKHNlckI9Mjsgc2VyQiA8IHBlcnNvbmFnZW5zLmxlbmd0aDsgc2VyQisrKSB7XG4gICAgICAgICAgLy9mb3IgKHNlckI9MTsgc2VyQiA8IDU7IHNlckIrKykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbXBhcmFuZG8gbyBwZXJzb25hZ2VtICcrc2VyQSsgJ2NvbScgK3NlckIrICcuJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUGVyc29uYWdlbSBBICgnK3NlckErJykgw6kgdW0gJytwZXJzb25hZ2Vuc1tzZXJBXS50aXBvKycuJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUGVyc29uYWdlbSBCICgnK3NlckIrJykgw6kgdW0gJytwZXJzb25hZ2Vuc1tzZXJCXS50aXBvKycuJyk7XG4gICAgICAgICAgICBpZihzZXJBIT1zZXJCKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihwZXJzb25hZ2Vuc1tzZXJBXS50aXBvPT1cImNhcm5pdm9yb1wiKXtcbiAgICAgICAgICAgICAgICAgICAgaWYocGVyc29uYWdlbnNbc2VyQl0udGlwbz09XCJoZXJiaXZvcm9cIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0Nhw6dhclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2lhQXR1YWwgPSBjYWxEaXN0YW5jaWEoc2VyQSxzZXJCKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWVub3JEaXN0YW5jaWE+ZGlzdGFuY2lhQXR1YWwpeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW5vckRpc3RhbmNpYT1kaXN0YW5jaWFBdHVhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWxob3JEZWNpc2FvPUNhbERlY2lzYW8oc2VyQSxzZXJCKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJNYWlzUGVydG89c2VyQjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25hZ2Vuc1tzZXJBXS5vYmpldGl2bz1cImNhw6dhbmRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihwZXJzb25hZ2Vuc1tzZXJBXS50aXBvPT1cImhlcmJpdm9yb1wiKXtcbiAgICAgICAgICAgICAgICAgICAgaWYocGVyc29uYWdlbnNbc2VyQl0udGlwbz09XCJwbGFudGFcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0Nhw6dhclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2lhQXR1YWwgPSBjYWxEaXN0YW5jaWEoc2VyQSxzZXJCKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWVub3JEaXN0YW5jaWE+ZGlzdGFuY2lhQXR1YWwpeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW5vckRpc3RhbmNpYT1kaXN0YW5jaWFBdHVhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWxob3JEZWNpc2FvPUNhbERlY2lzYW8oc2VyQSxzZXJCKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJNYWlzUGVydG89c2VyQjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25hZ2Vuc1tzZXJBXS5vYmpldGl2bz1zZXJBXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHBlcnNvbmFnZW5zW3NlckJdLnRpcG89PVwiY2Fybml2b3JvXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9GdWdpclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2lhQXR1YWwgPSBjYWxEaXN0YW5jaWEoc2VyQSxzZXJCKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWVub3JEaXN0YW5jaWE+ZGlzdGFuY2lhQXR1YWwpeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW5vckRpc3RhbmNpYT1kaXN0YW5jaWFBdHVhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWxob3JEZWNpc2FvPUNhbERlY2lzYW8oc2VyQixzZXJBKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJNYWlzUGVydG89c2VyQjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25hZ2Vuc1tzZXJBXS5vYmpldGl2bz1cIkZ1Z2luZG8gZGUgXCIgKyBzZXJCXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBGaW0gZG8gRk9SIEJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdQZXJzb25hZ2VtICcrc2VyQSsnIGVzdMOhIGEgZGlzYW5jYSBkZSAnICsgbWVub3JEaXN0YW5jaWEgKyAnIGRvIC4nICsgc2VyTWFpc1BlcnRvKTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdBIG1lbGhvciBkZWNpc8OjbyDDqSBpciBwYXJhICcrIG1lbGhvckRlY2lzYW8gKycuJyk7XG4gICAgICAgICAgaWYocGVyc29uYWdlbnNbc2VyQV0udGlwbz09XCJjYXJuaXZvcm9cIiAmJiBtZWxob3JEZWNpc2FvPT1cImRldm9yb3VcIil7XG4gICAgICAgICAgICAgIHBlcnNvbmFnZW5zW3NlckFdLnRlbXBvID0gMjAwMDtcbiAgICAgICAgICAgICAgZnVuY1Byb3BTZXIoXCJhbHRlcmFcIixzZXJNYWlzUGVydG8sIFwiY29jb1wiLCBcIm1hbnRlclwiLCBcIm1hbnRlclwiKTtcbiAgICAgICAgICB9ZWxzZSBpZihwZXJzb25hZ2Vuc1tzZXJBXS50aXBvPT1cImhlcmJpdm9yb1wiICYmIHBlcnNvbmFnZW5zW3Nlck1haXNQZXJ0b10udGlwbz09XCJwbGFudGFcIiAmJiBtZWxob3JEZWNpc2FvPT1cImRldm9yb3VcIil7XG4gICAgICAgICAgICBwZXJzb25hZ2Vuc1tzZXJBXS50ZW1wbyA9IDIwMDA7XG4gICAgICAgICAgICBmdW5jUHJvcFNlcihcImFsdGVyYVwiLHNlck1haXNQZXJ0bywgXCJvdm9cIiwgXCJtYW50ZXJcIiwgXCJtYW50ZXJcIik7XG4gICAgICAgICAgfSBcbiAgICAgICAgICBtb3ZlclBlcnNvbmFnZW0oc2VyQSwgbWVsaG9yRGVjaXNhbyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZihwZXJzb25hZ2Vuc1tzZXJBXS50aXBvPT1cIm92b1wiJiZwZXJzb25hZ2Vuc1tzZXJBXS50ZW1wbzwxKXtcbiAgICAgICAgZnVuY1Byb3BTZXIoXCJhbHRlcmFcIixzZXJBLCBcImhlcmJpdm9yb1wiLCBcIm1hbnRlclwiLCBcIm1hbnRlclwiKTtcbiAgICAgIH1lbHNlIGlmKHBlcnNvbmFnZW5zW3NlckFdLnRpcG89PVwicGxhbnRhXCImJnBlcnNvbmFnZW5zW3NlckFdLnRlbXBvPDEpe1xuICAgICAgICBwZXJzb25hZ2Vuc1tzZXJBXS53aWR0aCA9IHBlcnNvbmFnZW5zW3NlckFdLndpZHRoKzIsXG4gICAgICAgIHBlcnNvbmFnZW5zW3NlckFdLmhlaWdodCA9IHBlcnNvbmFnZW5zW3NlckFdLmhlaWdodCsyLFxuICAgICAgICBwZXJzb25hZ2Vuc1tzZXJBXS50ZW1wbyA9IDEwMDtcbiAgICAgIH1lbHNlIGlmKHBlcnNvbmFnZW5zW3NlckFdLnRpcG89PVwiY29jb1wiJiZwZXJzb25hZ2Vuc1tzZXJBXS50ZW1wbzwxKXtcbiAgICAgICAgZnVuY1Byb3BTZXIoXCJhbHRlcmFcIixzZXJBLCBcInBsYW50YVwiLCBcIm1hbnRlclwiLCBcIm1hbnRlclwiKTtcbiAgICAgIH0vLyBGaW0gZG8gaWZcbiAgICB9IC8vIEZpbSBkbyBGT1IgQVxuICAgIGRlc2VuaGFyQ2FudmFzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXNlbmhhckNhbnZhcygpe1xuICAgIC8vIERlc2VuaGEgb3Mgb2JqZXRvcyBuYSB0ZWxhLlxuICAgIHZhciBDTlYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzR2FtZScpXG4gICAgdmFyIENUWCA9IENOVi5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdmFyIGk7XG4gICAgdmFyIHBlc3BlY3RpdmEgPSAwO1xuICAgIGNvbnNvbGUubG9nKCd8IGluaWNpbyBkbyBGT1IgfCA84pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQJyk7XG4gICAgY29uc29sZS5sb2cocGVyc29uYWdlbnMpO1xuICAgIGZvciAoaT0wOyBpIDwgcGVyc29uYWdlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAvL2ZvciAoaT0wOyBpIDwgNTsgaSsrKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImk9XCIraSk7XG4gICAgICBjb25zb2xlLmxvZyhcInRpcG8gPSBcIitwZXJzb25hZ2Vuc1tpXS50aXBvKTtcbiAgICAgIHBlc3BlY3RpdmEgPSAgcGFyc2VJbnQocGVyc29uYWdlbnNbaV0ueS8xMCk7IC8vKHkgPSAwIGEgNjAwKSBQcm9wb3LDp8OjbyAxMCBhIDYwXG4gICAgICBDVFguZHJhd0ltYWdlKHBlcnNvbmFnZW5zW2ldLm9iakltZywgcGVyc29uYWdlbnNbaV0ueCxwZXJzb25hZ2Vuc1tpXS55LChwZXJzb25hZ2Vuc1tpXS53aWR0aCtwZXNwZWN0aXZhKSwocGVyc29uYWdlbnNbaV0uaGVpZ2h0K3Blc3BlY3RpdmEpKTsgIFxuICAgICAgQ1RYLmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgIENUWC5maWxsU3R5bGUgPSBcInJlZFwiOyAvL3BlcnNvbmFnZW5zW2ldLmNvclxuICAgICAgLy9DVFguZmlsbFRleHQoaSsnLScrcGVyc29uYWdlbnNbaV0udGlwbywgcGVyc29uYWdlbnNbaV0ueCsyNSxwZXJzb25hZ2Vuc1tpXS55LTEwKTtcbiAgICAgIENUWC5maWxsVGV4dChwZXJzb25hZ2Vuc1tpXS5vYmpldGl2bywgcGVyc29uYWdlbnNbaV0ueCsyNSxwZXJzb25hZ2Vuc1tpXS55KTtcbiAgICAgIC8vQ1RYLmZpbGxUZXh0KHBlcnNvbmFnZW5zW2ldLmRpcmVjYW8sIHBlcnNvbmFnZW5zW2ldLngrMjUscGVyc29uYWdlbnNbaV0ueSsxMCk7XG4gICAgICAvL0NUWC5maWxsVGV4dChwZXJzb25hZ2Vuc1tpXS50ZW1wbywgcGVyc29uYWdlbnNbaV0ueCsyNSxwZXJzb25hZ2Vuc1tpXS55KzIwKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3wgZmltIGRvIEZPUiB8IDzilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZAnKTtcblxuICAgIC8vIENOVi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihldnQpIHtcbiAgICAvLyAgIHZhciBtb3VzZVBvcyA9IGdldE1vdXNlUG9zKGNhbnZhcywgZXZ0KTtcbiAgICAvLyAgIHZhciBtZXNzYWdlID0gJ01vdXNlIHBvc2l0aW9uOiAnICsgbW91c2VQb3MueCArICcsJyArIG1vdXNlUG9zLnk7XG4gICAgLy8gICBhbGVydChtZXNzYWdlKTtcbiAgICAvLyB9LCBmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxEaXN0YW5jaWEoc2VyQSxzZXJCKXtcbiAgICB2YXIgdmFyRGlzdGFuY2lhID0gMDtcbiAgICBpZihwZXJzb25hZ2Vuc1tzZXJBXS54PT1wZXJzb25hZ2Vuc1tzZXJCXS54JiZwZXJzb25hZ2Vuc1tzZXJBXS55PT1wZXJzb25hZ2Vuc1tzZXJCXS55KXtcbiAgICAgIHZhckRpc3RhbmNpYSA9IDA7XG4gICAgfWVsc2V7XG4gICAgICBcbiAgICAgIGlmKHBlcnNvbmFnZW5zW3NlckFdLng+cGVyc29uYWdlbnNbc2VyQl0ueCl7XG4gICAgICAgIC8vXCItMVwiXG4gICAgICAgIHZhckRpc3RhbmNpYSA9IHBlcnNvbmFnZW5zW3NlckFdLngtcGVyc29uYWdlbnNbc2VyQl0ueFxuICAgICAgfWVsc2UgaWYgKHBlcnNvbmFnZW5zW3NlckFdLng8cGVyc29uYWdlbnNbc2VyQl0ueCl7XG4gICAgICAgIC8vXCIrMVwiXG4gICAgICAgIHZhckRpc3RhbmNpYSA9IHBlcnNvbmFnZW5zW3NlckFdLngrcGVyc29uYWdlbnNbc2VyQl0ueFxuICAgICAgfVxuICAgICAgaWYocGVyc29uYWdlbnNbc2VyQV0ueT5wZXJzb25hZ2Vuc1tzZXJCXS55KXtcbiAgICAgICAgLy9cIi0xXCJcbiAgICAgICAgdmFyRGlzdGFuY2lhID0gdmFyRGlzdGFuY2lhICsgcGVyc29uYWdlbnNbc2VyQV0ueS1wZXJzb25hZ2Vuc1tzZXJCXS55XG4gICAgICB9ZWxzZSBpZiAocGVyc29uYWdlbnNbc2VyQV0ueTxwZXJzb25hZ2Vuc1tzZXJCXS55KXtcbiAgICAgICAgLy9cIisxXCIgXG4gICAgICAgIHZhckRpc3RhbmNpYSA9IHZhckRpc3RhbmNpYSArIHBlcnNvbmFnZW5zW3NlckFdLnkrcGVyc29uYWdlbnNbc2VyQl0ueVxuICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiB2YXJEaXN0YW5jaWFcbiAgfVxuXG4gIGZ1bmN0aW9uIENhbERlY2lzYW8oc2VyQSxzZXJCKXtcbiAgICB2YXIgUmV0b25EZWNpc2FvID0gXCJwYXJhZG9cIlxuICAgIHZhciB0YW1hbmhvID0gcGVyc29uYWdlbnNbc2VyQV0ud2lkdGggLyAyXG4gICAgaWYoKHBlcnNvbmFnZW5zW3NlckFdLngrdGFtYW5obz5wZXJzb25hZ2Vuc1tzZXJCXS54JiZwZXJzb25hZ2Vuc1tzZXJBXS54LXRhbWFuaG88cGVyc29uYWdlbnNbc2VyQl0ueCkmJihwZXJzb25hZ2Vuc1tzZXJBXS55K3RhbWFuaG8+cGVyc29uYWdlbnNbc2VyQl0ueSYmcGVyc29uYWdlbnNbc2VyQV0ueS10YW1hbmhvPHBlcnNvbmFnZW5zW3NlckJdLnkpKXtcbiAgICAgIFJldG9uRGVjaXNhbyA9IFwiZGV2b3JvdVwiOyAgXG4gICAgfWVsc2V7XG4gICAgICB2YXIgc29ydGVpbyA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyKSArIDEpO1xuICAgICAgY29uc29sZS5sb2coJ3NvcnRlaW89Jytzb3J0ZWlvKTtcbiAgICAgIGlmKHNvcnRlaW89PTEpe1xuICAgICAgICBpZihwZXJzb25hZ2Vuc1tzZXJBXS55PnBlcnNvbmFnZW5zW3NlckJdLnkpe1xuICAgICAgICAgIC8vXCItMVwiXG4gICAgICAgICAgUmV0b25EZWNpc2FvID0gXCJzdWJpclwiO1xuICAgICAgICB9ZWxzZSBpZiAocGVyc29uYWdlbnNbc2VyQV0ueTxwZXJzb25hZ2Vuc1tzZXJCXS55KXtcbiAgICAgICAgICAvL1wiKzFcIiBcbiAgICAgICAgICBSZXRvbkRlY2lzYW8gPSBcImRlc2NlclwiO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYocGVyc29uYWdlbnNbc2VyQV0ueD5wZXJzb25hZ2Vuc1tzZXJCXS54KXtcbiAgICAgICAgICAvL1wiLTFcIlxuICAgICAgICAgIFJldG9uRGVjaXNhbyA9IFwiPC1cIjtcbiAgICAgICAgfWVsc2UgaWYgKHBlcnNvbmFnZW5zW3NlckFdLng8cGVyc29uYWdlbnNbc2VyQl0ueCl7XG4gICAgICAgICAgLy9cIisxXCJcbiAgICAgICAgICBSZXRvbkRlY2lzYW8gPSBcIi0+XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFJldG9uRGVjaXNhb1xuICAgIC8vcGVyc29uYWdlbnNbaV0ud2lkdGhcbiAgICAvL3BlcnNvbmFnZW5zW2ldLmhlaWdodFxuICB9XG5cbiAgZnVuY3Rpb24gbW92ZXJQZXJzb25hZ2VtKHBlcnNvbmFBdHVhbCx2YXJEaXJlY2FvKXtcbiAgICBpZih2YXJEaXJlY2FvPT1cInN1YmlyXCIpe1xuICAgICAgcGVyc29uYWdlbnNbcGVyc29uYUF0dWFsXS55ID0gcGVyc29uYWdlbnNbcGVyc29uYUF0dWFsXS55IC0gcGVyc29uYWdlbnNbcGVyc29uYUF0dWFsXS52ZWxvY2lkYWRlXG4gICAgICBpZihwZXJzb25hZ2Vuc1twZXJzb25hQXR1YWxdLnkgPCAwKXtcbiAgICAgICAgcGVyc29uYWdlbnNbcGVyc29uYUF0dWFsXS55ID0gNjAwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZih2YXJEaXJlY2FvPT1cImRlc2NlclwiKXtcbiAgICAgIHBlcnNvbmFnZW5zW3BlcnNvbmFBdHVhbF0ueSA9IHBlcnNvbmFnZW5zW3BlcnNvbmFBdHVhbF0ueSArIHBlcnNvbmFnZW5zW3BlcnNvbmFBdHVhbF0udmVsb2NpZGFkZVxuICAgICAgaWYocGVyc29uYWdlbnNbcGVyc29uYUF0dWFsXS55ID4gNjAwKXtcbiAgICAgICAgcGVyc29uYWdlbnNbcGVyc29uYUF0dWFsXS55ID0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodmFyRGlyZWNhbz09XCI8LVwiKXtcbiAgICAgIHBlcnNvbmFnZW5zW3BlcnNvbmFBdHVhbF0ueCA9IHBlcnNvbmFnZW5zW3BlcnNvbmFBdHVhbF0ueCAtIHBlcnNvbmFnZW5zW3BlcnNvbmFBdHVhbF0udmVsb2NpZGFkZVxuICAgICAgaWYocGVyc29uYWdlbnNbcGVyc29uYUF0dWFsXS54IDwgMCl7XG4gICAgICAgIHBlcnNvbmFnZW5zW3BlcnNvbmFBdHVhbF0ueCA9IDYwMDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodmFyRGlyZWNhbz09XCItPlwiKXtcbiAgICAgIHBlcnNvbmFnZW5zW3BlcnNvbmFBdHVhbF0ueCA9IHBlcnNvbmFnZW5zW3BlcnNvbmFBdHVhbF0ueCArIHBlcnNvbmFnZW5zW3BlcnNvbmFBdHVhbF0udmVsb2NpZGFkZVxuICAgICAgaWYocGVyc29uYWdlbnNbcGVyc29uYUF0dWFsXS54ID4gNjAwKXtcbiAgICAgICAgcGVyc29uYWdlbnNbcGVyc29uYUF0dWFsXS54ID0gMDtcbiAgICAgIH1cbiAgICB9IFxuXG4gICAgcGVyc29uYWdlbnNbcGVyc29uYUF0dWFsXS5kaXJlY2FvID0gdmFyRGlyZWNhbztcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaWNpYXJQZXJzb25hZ2Vucygpe1xuICAgIGNvbnNvbGUubG9nKFwiISEhISEgaW5pY2lhclBlcnNvbmFnZW5zKClcIik7XG4gICAgdmFyIGkgPSAwO1xuICAgIGZ1bmNQcm9wU2VyKFwibm92b1wiLGkrKyxcImNlbmFyaW9cIiwwLDApXG4gICAgZnVuY1Byb3BTZXIoXCJub3ZvXCIsaSsrLFwiYXZhdGFyXCIsZnVuY0xvY2FsSW5pdCgpLGZ1bmNMb2NhbEluaXQoKSlcbiAgICBmdW5jUHJvcFNlcihcIm5vdm9cIixpKyssXCJjYXJuaXZvcm9cIixmdW5jTG9jYWxJbml0KCksZnVuY0xvY2FsSW5pdCgpKVxuICAgIGZ1bmNQcm9wU2VyKFwibm92b1wiLGkrKyxcImhlcmJpdm9yb1wiLGZ1bmNMb2NhbEluaXQoKSxmdW5jTG9jYWxJbml0KCkpXG4gICAgZnVuY1Byb3BTZXIoXCJub3ZvXCIsaSsrLFwiaGVyYml2b3JvXCIsZnVuY0xvY2FsSW5pdCgpLGZ1bmNMb2NhbEluaXQoKSlcbiAgICBmdW5jUHJvcFNlcihcIm5vdm9cIixpKyssXCJvdm9cIixmdW5jTG9jYWxJbml0KCksZnVuY0xvY2FsSW5pdCgpKVxuICAgIGZ1bmNQcm9wU2VyKFwibm92b1wiLGkrKyxcIm92b1wiLGZ1bmNMb2NhbEluaXQoKSxmdW5jTG9jYWxJbml0KCkpXG4gICAgZnVuY1Byb3BTZXIoXCJub3ZvXCIsaSsrLFwicGxhbnRhXCIsZnVuY0xvY2FsSW5pdCgpLGZ1bmNMb2NhbEluaXQoKSlcbiAgICBmdW5jUHJvcFNlcihcIm5vdm9cIixpKyssXCJwbGFudGFcIixmdW5jTG9jYWxJbml0KCksZnVuY0xvY2FsSW5pdCgpKVxuICAgIGZ1bmNQcm9wU2VyKFwibm92b1wiLGkrKyxcInBsYW50YVwiLGZ1bmNMb2NhbEluaXQoKSxmdW5jTG9jYWxJbml0KCkpXG4gICAgZnVuY1Byb3BTZXIoXCJub3ZvXCIsaSsrLFwiY29jb1wiLGZ1bmNMb2NhbEluaXQoKSxmdW5jTG9jYWxJbml0KCkpXG4gICAgZnVuY1Byb3BTZXIoXCJub3ZvXCIsaSsrLFwiaGVyYml2b3JvXCIsZnVuY0xvY2FsSW5pdCgpLGZ1bmNMb2NhbEluaXQoKSlcbiAgICBmdW5jUHJvcFNlcihcIm5vdm9cIixpKyssXCJjYXJuaXZvcm9cIixmdW5jTG9jYWxJbml0KCksZnVuY0xvY2FsSW5pdCgpKTtcbiAgICBmdW5jUHJvcFNlcihcIm5vdm9cIixpKyssXCJwbGFudGFcIixmdW5jTG9jYWxJbml0KCksZnVuY0xvY2FsSW5pdCgpKVxuICAgIGZ1bmNQcm9wU2VyKFwibm92b1wiLGkrKyxcInBsYW50YVwiLGZ1bmNMb2NhbEluaXQoKSxmdW5jTG9jYWxJbml0KCkpXG4gICAgZnVuY1Byb3BTZXIoXCJub3ZvXCIsaSsrLFwicGxhbnRhXCIsZnVuY0xvY2FsSW5pdCgpLGZ1bmNMb2NhbEluaXQoKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaWNpYXJHYW1lKCl7XG5cbiAgICBpbmljaWFyUGVyc29uYWdlbnMoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd8IERpZ2l0b3UgYWxnbyB8IDzilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZAnKTtcbiAgICAgIHZhciB2YXJLZXlDb2RlID0gZXZlbnQua2V5Q29kZVxuICAgICAgdmFyIHZhcktleSA9IGV2ZW50LmtleVxuICAgICAgaWYgKHZhcktleUNvZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInZhcktleUNvZGUgIT09IHVuZGVmaW5lZFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YXJLZXlDb2RlPVwiK3ZhcktleUNvZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInZhcktleT1cIit2YXJLZXkpO1xuICAgICAgICB2YXIgZXZlbnRvPVwicGFyYXJcIjtcbiAgICAgICAgaWYodmFyS2V5Q29kZT09XCIzOFwiIHx8IHZhcktleUNvZGU9PTM4IHx8IHZhcktleT09XCJBcnJvd1VwXCIpe1xuICAgICAgICAgIGV2ZW50bz1cInN1YmlyXCJcbiAgICAgICAgfSBlbHNlIGlmKHZhcktleUNvZGU9PVwiNDBcIiB8fCB2YXJLZXlDb2RlPT00MCB8fCB2YXJLZXk9PVwiQXJyb3dVcFwiKXtcbiAgICAgICAgICBldmVudG89XCJkZXNjZXJcIlxuICAgICAgICB9IGVsc2UgaWYodmFyS2V5Q29kZT09XCIzN1wiIHx8IHZhcktleUNvZGU9PTQ3IHx8IHZhcktleT09XCJBcnJvd0xlZnRcIil7XG4gICAgICAgICAgZXZlbnRvPVwiPC1cIlxuICAgICAgICB9IGVsc2UgaWYodmFyS2V5Q29kZT09XCIzOVwiIHx8IHZhcktleUNvZGU9PTM5IHx8IHZhcktleT09XCJBcnJvd1JpZ2h0XCIpe1xuICAgICAgICAgIGV2ZW50bz1cIi0+XCJcbiAgICAgICAgfSBcbiAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50byA9ICcgKyBldmVudG8pO1xuICAgICAgICB1bHRpbWFUZWNsYT1ldmVudG87XG4gICAgICAgIG1vdmVyUGVyc29uYWdlbSgxLCBldmVudG8pO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFyS2V5Q29kZSA9PSB1bmRlZmluZWRcIik7XG4gICAgICAgIGFsZXJ0KFwidmFyS2V5Q29kZSA9PSB1bmRlZmluZWRcIik7XG4gICAgICB9XG4gICAgfSwgdHJ1ZSk7XG4gICAgXG4gICAgZGVzZW5oYXJDYW52YXMoKTtcbiAgICByZWxvZ2lvID0gc2V0SW50ZXJ2YWwoY29tcG9ydGFtZW50bywgMTAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZ1bmNMb2NhbEluaXQoKXtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwICsgMSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERpdiBkaXNwbGF5PVwicmVzcG9uc2l2b1wiPlxuICAgICAgPGRpdj5cbiAgICAgIDxhIGlkPVwiYnRMaW5rSW5pY2lhclwiIGNsYXNzTmFtZT1cImJ0Q2luemFcIiBvbkNsaWNrPXsoKSA9PiB7aW5pY2lhckdhbWUoKX19PkluaWNpYXIgR2FtZTwvYT5cbiAgICAgIDxjYW52YXMgaWQ9XCJjYW52YXNHYW1lXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI2MDBcIj48L2NhbnZhcz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDxhIGlkPVwiYnRMaW5rSW5pY2lhclwiIGNsYXNzTmFtZT1cImJ0Q2luemFcIiBvbkNsaWNrPXsoKSA9PiB7bW92ZXJQZXJzb25hZ2VtKDEsXCJzdWJpclwiKX19PnNvYmU8L2E+XG4gICAgICA8YSBpZD1cImJ0TGlua0luaWNpYXJcIiBjbGFzc05hbWU9XCJidENpbnphXCIgb25DbGljaz17KCkgPT4ge21vdmVyUGVyc29uYWdlbSgxLFwiPC1cIil9fT5lc3F1ZXJkYTwvYT5cbiAgICAgIDxhIGlkPVwiYnRMaW5rSW5pY2lhclwiIGNsYXNzTmFtZT1cImJ0Q2luemFcIiBvbkNsaWNrPXsoKSA9PiB7bW92ZXJQZXJzb25hZ2VtKDEsXCItPlwiKX19PmRpcmVpdGE8L2E+XG4gICAgICA8YSBpZD1cImJ0TGlua0luaWNpYXJcIiBjbGFzc05hbWU9XCJidENpbnphXCIgb25DbGljaz17KCkgPT4ge21vdmVyUGVyc29uYWdlbSgxLFwiZGVzY2VyXCIpfX0+ZGVzY2U8L2E+ICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLkdvZHppbGxhIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICAgICAgLypjYW52YXMge1xuICAgICAgICAgIGJvcmRlciA6IHNvbGlkIDFweDtcbiAgICAgICAgfSovXG4gICAgICAgIC5idENpbnphIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC44cztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvaVRleHRSZWd1bGFyLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjkzYztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtOyAvKjE2cHgqL1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjNGE1MTZiO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idENpbnphOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjhzO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC44cztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuOHM7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC44cztcbiAgICAgICAgICAgIC8qY29sb3I6ICNkODI0ODI7Ki9cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTUxNmI7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRGl2PlxuICApXG59XG5cbi8vIDxkaXYgY2xhc3NOYW1lPVwiR29kemlsbGFcIiBpZD1cInBvc2l0aW9uXCI+XG4vLyA8YSBocmVmPVwiI21ldUxpbmtcIiBvbmNsaWNrPVwibXlGdW5jdGlvbigpO1wiPlxuLy88aW1nIG9ubG9hZD1cIm1vdXNlKCk7XCIgYWx0PVwiRnVuZG9cIiBzcmM9XCJodHRwczovL2ltZy1zLW1zbi1jb20uYWthbWFpemVkLm5ldC90ZW5hbnQvYW1wL2VudGl0eWlkL0JCVlNoRWEuaW1nP2g9NDE2JmFtcDt3PTc5OSZhbXA7bT02JmFtcDtxPTYwJmFtcDt1PXQmYW1wO289ZiZhbXA7bD1mJmFtcDt4PTg3MSZhbXA7eT02NTRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdGl0bGU9XCJDZW7DoXJpbyBkZSBjaWRhZGVzXCI+PC9pbWc+XG5cbmV4cG9ydCBkZWZhdWx0IG9yZ0Vjb3NzaXN0ZW1hXG4iXX0= */\n/*@ sourceURL=/home/oi402825/Documentos/Projetos/site_do_valente/components/organisms/orgEcossistema/index.js */"));
}; // <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">
//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>


/* harmony default export */ __webpack_exports__["default"] = (orgEcossistema);

/***/ })

})
//# sourceMappingURL=ecossistema.js.2786debc80780641920e.hot-update.js.map