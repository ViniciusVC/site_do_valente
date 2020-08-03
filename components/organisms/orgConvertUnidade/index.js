import React from 'react'

const orgTanque = function (props) {

  console.log(' component - orgConvertUnidade ');
  if(props.modo=="html"){
    function converter(){
      var numero = document.getElementById('impMedidaPre').value;
      var medidaInit = document.getElementById('selMedidaPre').value;
      var medidaFinal = document.getElementById('selMedidaPos').value;
      if(medidaInit!=medidaFinal){
        if (medidaInit=="Quilômetros"){
          //1 metro = 0,001 Quilômetros
          numero = numero*1000;
        }else if (medidaInit=="centimetros"){
          //1 metro = 100 centimetros
          numero = numero/100;
        }else if (medidaInit=="Milímetros"){
          //1 metro = 1000 Milímetros
          numero = numero/1000;
        }else if (medidaInit=="Micrômetros"){
          //1 metro = 1e+6 Micrômetros
          numero = numero/1e+6;
        }else if (medidaInit=="Nanômetros"){
          //1 metro = 1e+9 Nanômetros
          numero = numero/1e+9;
        }else if (medidaInit=="Milhas"){
          //1 metro = 0,000621371 Milhas
          numero = numero*1609;
        }else if (medidaInit=="Jardas"){
          //1 metro = 1,09361 Jardas
          numero = numero/1.094;
        }else if (medidaInit=="pés"){
          //1 metro = 3,28084 pés
          numero = numero/3.281;
        }else if (medidaInit=="polegada"){
          //1 metro = 39,37008 polegada
          numero = numero/39.37;
        }else if (medidaInit=="milha nautica"){
          //1 metro = 0,000539957 milha nautica
          numero = numero*1852;
        };
        if (medidaFinal=="Quilômetros"){
          //1 metro = 0,001 Quilômetros (divida o valor de comprimento por 1000)
          numero = numero/1000;
        }else if (medidaFinal=="centimetros"){
          //1 metro = 100 centimetros (multiplique o valor de comprimento por 100)
          numero = numero*100;
        }else if (medidaFinal=="Milímetros"){
          //1 metro = 1000 Milímetros (multiplique o valor de comprimento por 1000)
          numero = numero*1000;
        }else if (medidaFinal=="Micrômetros"){
          //1 metro = 1e+6 Micrômetros (multiplique o valor de comprimento por 1e+6)
          numero = numero*1e+6;
        }else if (medidaFinal=="Nanômetros"){
          //1 metro = 1e+9 Nanômetros (Multiplique o valor de comprimento por 1e+9)
          numero = numero*1e+9;
        }else if (medidaFinal=="Milhas"){
          //1 metro = 0,000621371 Milhas (divida o valor de comprimento por 1609)
          numero = numero/1609;
        }else if (medidaFinal=="Jardas"){
          //1 metro = 1,09361 Jardas (multiplique o valor de comprimento por 1,094)
          numero = numero*1.094;
        }else if (medidaFinal=="pés"){
          //1 metro = 3,28084 pés (multiplique o valor de comprimento por 3,281)
          numero = numero*3.281;
        }else if (medidaFinal=="polegada"){
          //1 metro = 39,37008 polegada (multiplique o valor de comprimento por 39,37)
          numero = numero*39.37;
        }else if (medidaFinal=="milha nautica"){
          //1 metro = 0,000539957 milha nautica (divida o valor de comprimento por 1852)
          numero = numero/1852;
        };
      }
      document.getElementById('impMedidaPos').value = numero;
    }
  
    return (
      <div>
        <select id="selMedidaPre" name="selMedidaPre" onChange={() => {converter()}}>
                <option value="metros">metros</option>
                <option value="Quilômetros">Quilômetros</option>
                <option value="centimetros">centimetros</option>
                <option value="Milímetros">Milímetros</option>
                <option value="Micrômetros">Micrômetros</option>
                <option value="Nanômetros">Nanômetros</option>
                <option value="Milhas">Milhas</option>
                <option value="Jardas">Jardas</option>
                <option value="pés">pés</option>
                <option value="polegada">polegada</option>
                <option value="milha nautica">milha nautica</option>
        </select>
        <input type="number" id="impMedidaPre" name="impMedidaPre" required autofocus maxlength="20"/><br/>
        <br/>
        <select id="selMedidaPos" name="selMedidaPos" onChange={() => {converter()}}>
                <option value="metros">metros</option>
                <option value="Quilômetros">Quilômetros</option>
                <option value="centimetros">centimetros</option>
                <option value="Milímetros">Milímetros</option>
                <option value="Micrômetros">Micrômetros</option>
                <option value="Nanômetros">Nanômetros</option>
                <option value="Milhas">Milhas</option>
                <option value="Jardas">Jardas</option>
                <option value="pés">pés</option>
                <option value="polegada">polegada</option>
                <option value="milha nautica">milha nautica</option>
        </select>
        <input type="number" id="impMedidaPos" name="impMedidaPos" maxlength="20"/><br/>
      </div>
    )
  }else{
    return (
      <div>
        Não é possivel executar o conversor de unidade no modo APM.<br/>
        <a href="/utilitarios/conversordeunidade/" >Sair do modo AMP.</a><br/>
      </div>
    )
  }
  
}

export default orgTanque

