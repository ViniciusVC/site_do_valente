

export const validaProps = (X,Y) => {
  if(X!=undefined){
    return X;
  }else{
    return Y;
  };
}

export const apenasNumeros = (varBodySend) => {
    var numsStr = varBodySend.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}

export const fontesCSS = () => {
  return ' ' + fontesCSS1()+fontesCSS2()+fontesCSS3()+fontesCSS4()+fontesCSS5();
}

export const fontesCSS1 = () => {
  return ' @font-face { font-family:"SimplonBP-Regular"; src:url("/simplonbp-regular-webfont.woff"); } ';
}

export const fontesCSS2 = () => {
  return ' @font-face { font-family:"Simplon-Headline"; src:url("/simplonoi-headline-webfont.woff"); } ';
}

export const fontesCSS3 = () => {
  return ' @font-face { font-family:"Simplon-bold"; src:url("/simplonbp-bold-webfont.woff"); } ';
}

export const fontesCSS4 = () => {
  return ' @font-face { font-family: "Simplon-medium"; src: url("/simplonbp-medium-webfont.woff"); } ';
}

export const fontesCSS5 = () => {
  return ' @font-face { font-family: "Simplon-light"; src: url("/simplonbp-light-webfont.woff"); } ';
}



export const listaRegioes = () => {
   return [
      { sigla: "AC", 
        estado: "Acre",
        capital: "Rio Branco",
        timea: "Atlético-AC",
        timeb: "Rio Branco"
      },
      {
        sigla: "AL", 
        estado: "Alagoas",
        capital: "Maceió",
        timea: "CRB",
        timeb: "CSA"
      },
      {sigla: "AP",
         estado: "Amapá",
         capital:"Macapá",
         timea: "Santos-AP",
         timeb: "Trem-AP"
      },
      {sigla: "AM",
         estado: "Amazonas",
         capital:"Manaus",
         timea: "Nacional-AM",
         timeb: "Princesa do Solimões-AM"
      },
      {sigla: "BA",
         estado: "Bahia",
         capital:"Salvador",
         timea: "Bahia",
         timeb: "Vitória"
      },
      {sigla: "CE",
         estado: "Ceará",
         capital:"Fortaleza",
         timea: "Ceará",
         timeb: "Fortaleza"
      },
      {sigla: "DF",
         estado: "Distrito Federal",
         capital:"Brasília",
         timea: "Ceilândia",
         timeb: "Luziânia"
      },
      {sigla: "ES",
         estado: "Espírito Santo",
         capital:"Vitória",
         timea: "Espírito Santo",
         timeb: "Desportiva-ES"
      },
      {sigla: "GO",
         estado: "Goiás",
         capital:"Goiânia",
         timea: "Goiás",
         timeb: "Atlético-GO"
      },
      {sigla: "MA",
         estado: "Maranhão",
         capital:"São Luís",
         timea: "Sampaio Corrêa",
         timeb: "Moto Club"
      },
      {sigla: "MT",
         estado: "Mato Grosso",
         capital:"Campo Grande",
         timea: "Luverdense",
         timeb: "Cuiabá"
      },
      {sigla: "MS",
         estado: "Mato Grosso do Sul",
         capital:"Cuiabá",
         timea: "Comercial",
         timeb: "Sete de Setembro"
      },
      {sigla: "MG",
         estado: "Minas Gerais",
         capital:"Belo Horizonte",
         timea: "Cruzeiro",
         timeb: "Atlético-MG"
      },
      {sigla: "PA",
         estado: "Pará",
         capital:"Belém",
         timea: "Paysandu",
         timeb: "Remo"
      },
      {sigla: "PB",
         estado: "Paraíba ",
         capital:"João Pessoa",
         timea: "Botafogo-PB",
         timeb: "Campinense"
      },
      {sigla: "PR",
         estado: "Paraná",
         capital:"Curitiba",
         timea: "Atlético-PR",
         timeb: "Coritiba"
      },
      {sigla: "PE",
         estado: "Pernambuco",
         capital:"Recife",
         timea: "Sport",
         timeb: "Santa Cruz"
      },
      {sigla: "PI",
         estado: "Piauí",
         capital:"Teresina",
         timea: " River-PI",
         timeb: "Altos-PI"
      },
      {sigla: "RJ",
         estado: "Rio de Janeiro",
         capital:"Rio de Janeiro",
         timea: " Flamengo",
         timeb: "Botafogo"
      },
      {sigla: "RN",
         estado: "Rio Grande do Norte",
         capital:"Natal",
         timea: " ABC",
         timeb: "América-RN"
      },
      {sigla: "RS",
         estado: "Rio Grande do Sul ",
         capital:"Porto Alegre",
         timea: " Grêmio",
         timeb: "Internacional"
      },
      {sigla: "RO",
         estado: "Rondônia",
         capital:"Porto Velho",
         timea: " Gênus-RO",
         timeb: "Real Desportivo-RO"
      },
      {sigla: "RR",
         estado: "Roraima",
         capital:"Boa Vista",
         timea: " São Raimundo-RR",
         timeb: "Baré-RR"
      },
      {sigla: "SC",
         estado: "Santa Catarina ",
         capital:"Florianópolis",
         timea: " Chapecoense",
         timeb: "Avaí"
      },
      {sigla: "SP",
         estado: "São Paulo ",
         capital:"São Paulo",
         timea: " Palmeiras",
         timeb: "Santos"
      },
      {sigla: "SE",
         estado: "Sergipe",
         capital:"Aracaju",
         timea: " Confiança",
         timeb: "Itabaiana"
      },
      {sigla: "TO",
         estado: "Tocantins",
         capital:"Palmas",
         timea: " Interporto-TO",
         timeb: "Gurupi-TO"
      }]
}

export const regiao = (valorPesquisado) => {
  valorPesquisado = valorPesquisado.toUpperCase();
  const varRegiao = listaRegioes();
  var VarIndice = 18;
  //for (var j in varRegiao) {
  for (var j=0; j<varRegiao.length; ++j) {
      if (varRegiao[j].sigla == valorPesquisado || varRegiao[j].sigla == valorPesquisado) {
         VarIndice = j;
      }
  }
  return varRegiao[VarIndice]
}


