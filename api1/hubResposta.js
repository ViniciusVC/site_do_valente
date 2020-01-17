//const Controller = require('../controller/meusdocumentos.js');
const controllerResposta = require('../controller/resposta.js')

console.log('Instanciou /api1/meusdocumentosapi.js (POST)');

exports.api = function(req, res, next) {
    // res.status(200).send('Acessou API1/HubResposta/ OK.');
    console.log('╔════════════════════════════════════════╗');
    console.log('║    documentoscopia API (resposta)      ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('Metodo = '+req.method); // POST ou GET
    console.log('API não pode ser acessado por GET ou PUT');
    // Verifica metodo recebido pelo formulário (GET ou POST ou PUT)
    if(req.method=='POST'||req.method=='post'){
            //Metodo GET e PUT não faz nada
            console.log('Rodando hubResposta.API - POST');
            //Aguarda receber todos os dados ates de chamar o controller... 
            res.status(200).send('API não pode ser acessado por POS.');
            //req.on('end', Resposta.status(res, req));
            //res.status(200).send(Controller.meusdocumentos(res, req)));
            //res.redirect('/meusdocumentos/');            
    }else{
            console.log('API rodando metodo GET ou PUT');
            console.log(req.query); // { contato: '2345', tipobusca: 'cpf' }
            //req.on('end', controllerResposta.hub(res, req));
            
            var varcpf=req.query.contato; 
            //var varcpf="16973780644"; 
            var tipoDocumento=req.query.tipobusca;
            //var tipoDocumento='CPF';
    
            console.log("buscaAPImicroserviso(varcpf="+varcpf+", tipoDocumento="+tipoDocumento+")");
            var varURL = "http://stage.apisdigitais.interno:8765/api/customermanagement/v3/customer/hub"
            console.log("URL para solicitar contato -> " + varURL);
            var fetch = require("node-fetch");
            var options = {
                method: 'GET',
                url: varURL,
                headers: {
    
                }
            }
    
            var estiloH1 = '@font-face {font-family: "Simplon-Headline";src: url("https://www.oi.com.br/publicV2/fonts/simplonoi-headline-webfont.woff");} h1{font-family: Simplon-Headline;font-size: 26px;font-weight: normal;font-style: normal;font-stretch: normal;line-height: normal;letter-spacing: normal;text-align: center;color: #f8562c;}'
            var estiloP = '@font-face {font-family: "SimplonBP-Regular";src: url("https://www.oi.com.br/publicV2/fonts/simplonbp-regular-webfont.woff");} p{font-family: SimplonBP-Regular;font-size: 22px;font-weight: normal;font-style: normal;font-stretch: normal;line-height: 1.2;letter-spacing: normal;text-align: center;color: #000000;}'
            var estiloDiv = 'div{margin:10px;margin-top:50px;}'
            var imgIcone='<img src="/static/assetsv5/img/erro_ico.png" width="45px" height="45px" />';
            var vartitulo='<h1>Algo de errado ocorreu!</h1>';
            var vartexto='<p>Não foi possivel buscar o CPF '+varcpf+'.<br/>Não recebemos resposta da API do Hub de Contatos.</p><a href="/hubbusca/">Voltar e Começar de novo</a>'; 
    
            fetch(options.url, options).then(resapi => {
                   if(resapi.ok) {
                        resapi.json().then(json => {
                            console.log('Ok');
                            console.log('Retorno em json:');
                            console.log(json);
                            // enviadados(varcpf,tipoDocumento,arquivos);
                            // console.log('Cliente : '+json[0].customerName);
                            // console.log('CPF : '+json[0].customerId);
                            // console.log('Conta fatura : '+json[0].billingId);
                            // console.log('e-mail : '+json[0].contact);
                            imgIcone='<img src="/static/assetsv5/img/iconok.png" width="45px" height="45px" />';
                            vartitulo='<h1>Cliente : '+json[0].customerName+' - CPF : '+json[0].customerId+'</h1>';    
                            vartexto='<div>'
                            vartexto+='<br/>e-mail : '+json[0].contact+' - Scor : ***'
                            vartexto+=' - Conta fatura : '+json[0].billingId
                            vartexto+='<br/>e-mail : '+json[0].contact+' - Scor : ***'
                            vartexto+=' - Conta fatura : '+json[0].billingId
                            vartexto+='<br/>e-mail : '+json[0].contact+' - Scor : ***'
                            vartexto+=' - Conta fatura : '+json[0].billingId
                            vartexto+='</div>'
                            vartexto+='<br/><a href="/hubbusca/">Voltar para nova pesquisa</a>';
                            console.log(vartexto);
                            res.send('<style>'+estiloH1+estiloP+estiloDiv+'</style><center><div class="div">'+imgIcone+vartitulo+vartexto+'</div></center>');
                        })
                    } else if (resapi.status==401){
                        console.log('!!!Acesso a ARI negado!!!!')
                        imgIcone='<img src="/static/assetsv5/img/erro_ico.png" width="45px" height="45px" />';
                        vartitulo='<h1>Acesso a ARI Hub de Contato negado!</h1>';
                        res.send('<style>'+estiloH1+estiloP+estiloDiv+'</style><center><div class="div">'+imgIcone+vartitulo+vartexto+'</div></center>');
                    } else {
                        resapi.text().then(text => console.log('debug text: ' + text))
                        imgIcone='<img src="/static/assetsv5/img/erro_ico.png" width="45px" height="45px" />';
                        vartitulo='<h1>Algo de errado ocorreu!</h1>';
                        vartexto+='<br/>'+text;
                        res.send('<style>'+estiloH1+estiloP+estiloDiv+'</style><center><div class="div">'+imgIcone+vartitulo+vartexto+'</div></center>');
                    }
                    console.log(resapi);
                    
            }).catch(err => console.log);
    };
}