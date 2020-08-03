
//var Promise = require('promise');
//const controllerResposta = require('../controller/resposta.js')

//var fetch = require("node-fetch");
var http = require("https");


console.log('Instanciou /api1/Noticias.js (GET)');

exports.api = function(req, res, next) {
    // res.status(200).send('Acessou API1/noticiasResposta/ OK.');
    console.log('╔═════════════════════════════════╗');
    console.log('║    Noticias API (resposta)      ║');
    console.log('╚═════════════════════════════════╝');
    console.log(' Metodo = '+req.method); // POST ou GET
    console.log('API não pode ser acessado por POST');
    // Verifica metodo recebido pelo formulário (GET ou POST ou PUT)
    if(req.method=='POST'||req.method=='post'){
        //Metodo GET e PUT não faz nada
        console.log('Rodando Noticias.API - POST');
        //Aguarda receber todos os dados ates de chamar o controller... 
        res.status(200).send('API não pode ser acessado por POS.');
        //req.on('end', Resposta.status(res, req));
        //res.status(200).send(Controller.meusdocumentos(res, req)));
        //res.redirect('/meusdocumentos/');            
    }else{
        console.log('API rodando metodo GET ou PUT');
        //Função CONTROLLER que informa status do envio.
        console.log('╔════════════════════════════════════════╗');
        console.log('║   resposta Noticia - CONTROLLER        ║');
        console.log('╚════════════════════════════════════════╝');  
        console.log('query=') 
        console.log(req.query) //Ex.: { contato: '16973780644, 04714220616, 09131874703', tipobusca: 'cpf' }
 
        // Lendo de um arquivo XML local
        fs = require('fs');
        var parser = require('xml2json');
        
        var arquivo;
        //arquivo = '/static/assetsv5/dados/exemplonoticias.xml'
        //arquivo = 'http://localhost:8000/static/assetsv5/dados/exemplonoticias.xml'
        arquivo = '/home/oi402825/Documentos/Projetos/site_do_valente/static/assetsv5/dados/exemplonoticias.xml'
        //arquivo = 'https://g1.globo.com/rss/g1/tecnologia/'
        
        fs.readFile( arquivo, function(err, data) {
            if(err){
                console.log("Houve um ERRO!!!");
                console.log(err);
                console.log(JSON.stringify(data));
                res.send('<h1>Houve um ERRO!!!</h1><p>'+err+'<p/><p>Tentando ler o arquivo : <a href="'+arquivo+'">'+arquivo+'</a></p>');
           }else{
                console.log("Leu arquivo...");
                var json = parser.toJson(data);
                //console.log("to json ->", json);
                //console.log(JSON.stringify(data));
                //console.log(json.rss.channel.item[0]);
                //res.send(json.rss.channel.item[0]);
                //console.log(json.rss.channel.item[0].title);
                //res.send(json.rss.channel.item[0].title); 
                console.log(json);
                res.send(json);    
            }
            
        });
    }
}