var Promise = require('promise');

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

            req.on('end', controllerResposta.hub(res, req));
            
    }
}