//var Promise = require('promise');
//const controllerResposta = require('../controller/resposta.js')

console.log('Instanciou /sitemap.js (GET)');

/* <xml> segue as especificações requeridas para submissão no Google;
<urlset> indica o início e fim do conjunto de URLs a serem rastreadas;
<url> indica o início e fim de uma URL individual;
<loc> localização da URL completa da página informada;
<lastmod>, uma tag opcional com a data da última modificação;
<changefreq>, uma tag opcional sugerindo a freqüência que o robô deve executar o rastreamento;
<priority>, uma tag opcional informando a prioridade da URL especificada em relação às demais URLs contidas no arquivo.
Exemplo:
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
  <loc>http://www.seusite.com.br/index.html</loc>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
<url>
  <loc>http://www.seusite.com.br/quem-somos.html</loc>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
</url>
</urlset> */

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
        var XMLdeSaida = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        XMLdeSaida += '<url><loc>/</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>';
        XMLdeSaida += '<url><loc>/eu</loc><changefreq>weekly</changefreq><priority>0.5</priority></url>';
        XMLdeSaida += '</urlset>';
        res.send('<style>'+XMLdeSaida+'</style>');
    }
}