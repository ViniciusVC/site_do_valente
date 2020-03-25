//var Promise = require('promise');
//const controllerResposta = require('../controller/resposta.js')

console.log('Instanciou /sitemap.js (GET)');

exports.xml = function(req, res, next) {
    // res.status(200).send('Acessou API1/HubResposta/ OK.');
    console.log('╔═════════════════╗');
    console.log('║    sitemap      ║');
    console.log('╚═════════════════╝');
    console.log('Metodo = '+req.method); // POST ou GET
    console.log('API não pode ser acessado por GET ou PUT');
    // Verifica metodo recebido pelo formulário (GET ou POST ou PUT)
    if(req.method=='POST'||req.method=='post'){
        //Metodo GET e PUT não faz nada
        console.log('sitemap não pode ser acessado por POS.');
        //Aguarda receber todos os dados ates de chamar o controller... 
        //res.status(200).send('sitemap não pode ser acessado por POS.');
        res.redirect('/sitemap.xml');
        //req.on('end', Resposta.status(res, req));
        //res.status(200).send(Controller.meusdocumentos(res, req)));
    }else{
        var XMLdeSaida = '';
        res.send('<style>'+XMLdeSaida+'</style>');
    }
}