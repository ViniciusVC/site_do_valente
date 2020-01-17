//Importar Modulos e dependencias.
var Util = require('./util.js');
//import * as Util from './util.js';


export const dados = (page, cidade) => {
  var page = Util.validaProps(props.url.query.cidade, "lpAssinePos")
  var cidade = Util.validaProps(props.url.query.cidade, "Rio de Janeiro - RJ")
  //return [page](cidade);
  if (page == "headerMenu") {
    return headerMenu(cidade);
  } else {
    return lpAssinePos(cidade);
  }
}

function headerMenu(varcidade) {
  return {
    "Menu": [
      {
        "link": "https://www.oi.com.br/codigo/",
        "item": "INÍCIO",
      },
      {
        "link": "https://www.oi.com.br/codigo/codigo-de-barras/",
        "item": "CONTAS E PAGAMENTOS"
      },
      {
        "link": "https://m.oi.com.br/Portal/splash",
        "item": "MEUS PRODUTOS"
      },
      {
        "link": "https://www.oi.com.br/oi/oi-pra-voce/planos-servicos/oi-movel/recarga",
        "item": "RECARGA"
      },
      {
        "link": "#",
        "item": "AJUDA E SUPORTE",
        "mais": "true",
        "submenu": [
          {
            "subitem": "AJUDA",
            "link": "#"
          },
          {
            "subitem": "Dúvidas frequentes",
            "link": "http://faq.oi.com.br/"
          }, {
            "subitem": "ATENDIMENTO",
            "link": "#"
          },
          {
            "subitem": "Consulta de protocolo",
            "link": "https://m.oi.com.br/Portal/splash"
          },
          {
            "subitem": "Encontre sua loja",
            "link": "https://www.oi.com.br/oi/oi-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi"
          },
          {
            "subitem": "Telefones e postos",
            "link": "https://www.oi.com.br/codigo/fale-com-a-oi/"
          },
          {
            "subitem": "Consultar documentos",
            "link": "https://m.oi.com.br/Portal/splash"
          },
          {
            "subitem": "SUPORTE TÉCNICO",
            "link": "#"
          },
          {
            "subitem": "Técnico Virtual",
            "link": "https://www.oi.com.br/app/tecnico-virtual/",
          },
          {
            "subitem": "Acompanhamento de instalação Fixo",
            "link": "https://www.oi.com.br/oi/oi-pra-voce/planos-servicos/oi-fixo/servicos/acompanhamento-do-oi-fixo/"
          },
          {
            "subitem": "Estou sem serviço",
            "link": "https://www.oi.com.br/codigo/religar-servico/"
          },
        ]
      },
      {
        "link": "#",
        "item": "+ VANTAGENS",
        "mais": "true",
        "submenu": [
          {
            "link": "https://www.oi.com.br/oi/oi-pra-voce/planos-servicos/oi-pontos/",
            "subitem": "Oi Pontos"
          },
          {
            "link": "https://oiwifi.com.br/",
            "subitem": "Oi Wifi"
          },
          {
            "link": "https://www.oiplay.tv/",
            "subitem": "Oi Play"
          },
          {
            "link": "https://servicos.oi.com.br/?utm_source=Minha+Oi&utm_medium=Link&utm_content=Home&utm_campaign=Menu+Lateral",
            "subitem": "Conteúdo pra você"
          },
        ]
      },
      {
        "link": "#",
        "item": "PARA ASSINAR",
        "mais": "true",
        "submenu": [
          {
            "subitem": "Combo",
            "link": "http://oi.com.br/combo"
          },
          {
            "subitem": "TV HD",
            "link": "http://oi.com.br/tv-hd"
          },
          {
            "subitem": "Celular",
            "link": "http://oi.com.br/celular"
          },
          {
            "subitem": "Internet",
            "link": "http://oi.com.br/internet"
          },
          {
            "subitem": "Fixo",
            "link": "http://oi.com.br/fixo"
          }
        ]
      }
    ]
  }
}
