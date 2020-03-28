
//Importar Modulos e dependencias.
const express = require('express')
const next = require('next')
// //Verifica se esta no ambiente de desenvolvimento
const dev = process.env.NODE_ENV !== 'production' //dev=true
const app = next({ dev })
const handle = app.getRequestHandler()
const multer = require('multer');

//API do captcha Meus Documentos
var apicaptcha = require('./api1/captcha.js');
var hubResposta = require('./api1/hubResposta.js');
var sitemap = require('./sitemap.js');

console.log('\x1b[33m Carregou as dependencias \u001b[34m');

/*

/
/eu/
/codigo/
/codigo/html5/
/codigo/css/
/codigo/javascript/
/codigo/knockout/
/codigo/apache/
/codigo/php/
/codigo/ruby_on_rails/
/codigo/coldfusion/
/codigo/asp/
/codigo/dotnet/
/codigo/Java/
/codigo/cgi_perl/
/codigo/eu/
/codigo/captcha/
/componentes/
/hub/
/amp/
/amp/eu/
/amp/codigo/
/amp/codigo/html5/
/amp/codigo/css/
/amp/codigo/javascript/
/amp/codigo/knockout/
/amp/codigo/apache/
/amp/codigo/php/
/amp/codigo/ruby_on_rails/
/amp/codigo/coldfusion/
/amp/codigo/asp/
/amp/codigo/dotnet/
/amp/codigo/Java/
/amp/codigo/cgi_perl/
/amp/codigo/eu/
/amp/codigo/captcha/
/amp/componentes/

*/



app.prepare()
.then(() => {
    const server = express()
    const porta = 8000;
    const upload = multer();
    // Rotas do projeto

    // Rota de arquivos estáticos
    server.use(express.static('/static'));
    
    //index
    //server.get('/', (req, res) => {app.render(req, res, '/', req.query);})
    server.get('/amp/',(req, res) => {app.render(req, res, '/routes/amp', req.query); })
    
    server.get('/eu/', (req, res) => {app.render(req, res, '/routes/eu', req.query); }) 
    server.get('/amp/eu/', (req, res) => {app.render(req, res, '/routes/amp/eu', req.query); }) 
     
    server.get('/eu/curriculo/', (req, res) => {app.render(req, res, '/routes/eu/curriculo', req.query); }) 
    server.get('/curriculo/', (req, res) => {app.render(req, res, '/routes/eu/curriculo', req.query); }) 
    server.get('/amp/curriculo/', (req, res) => {app.render(req, res, '/routes/amp/eu/curriculo', req.query); }) 

    //======================================================================

    server.get('/codigo/', (req, res) => { app.render(req, res, '/routes/codigo/index', req.query);})
    server.get('/amp/codigo/', (req, res) => { app.render(req, res, '/routes/amp/codigo/index', req.query);})

    server.get('/codigo/apache/', (req, res) => { app.render(req, res, '/routes/codigo/apache', req.query);})
    server.get('/amp/codigo/apache/', (req, res) => { app.render(req, res, '/routes/amp/codigo/apache', req.query);})
    server.get('/codigo/apache/instalubuntu', (req, res) => { app.render(req, res, '/routes/codigo/apache/instalubuntu', req.query);})
    server.get('/amp/codigo/apache/instalubuntu', (req, res) => { app.render(req, res, '/routes/amp/codigo/apache/instalubuntu', req.query);})
    server.get('/codigo/apache/alias', (req, res) => { app.render(req, res, '/routes/codigo/apache/alias', req.query);})
    server.get('/amp/codigo/apache/alias', (req, res) => { app.render(req, res, '/routes/amp/codigo/apache/alias', req.query);})
    server.get('/codigo/apache/redirect', (req, res) => { app.render(req, res, '/routes/codigo/apache/redirect', req.query);})
    server.get('/amp/codigo/apache/redirect', (req, res) => { app.render(req, res, '/routes/amp/codigo/apache/redirect', req.query);})

    server.get('/codigo/asp/', (req, res) => { app.render(req, res, '/routes/codigo/asp', req.query);})
    server.get('/amp/codigo/asp/', (req, res) => { app.render(req, res, '/routes/amp/codigo/asp', req.query);})
    server.get('/codigo/asp/redirect/', (req, res) => { app.render(req, res, '/routes/codigo/asp/redirect', req.query);})
    server.get('/amp/codigo/asp/redirect/', (req, res) => { app.render(req, res, '/routes/amp/codigo/asp/redirect', req.query);})

    server.get('/codigo/cgi/', (req, res) => { app.render(req, res, '/routes/codigo/cgi', req.query);})
    server.get('/amp/codigo/cgi/', (req, res) => { app.render(req, res, '/routes/amp/codigo/cgi', req.query);})
    server.get('/codigo/cgi/redirect/', (req, res) => { app.render(req, res, '/routes/codigo/cgi', req.query);})
    server.get('/amp/codigo/cgi/redirect/', (req, res) => { app.render(req, res, '/routes/amp/codigo/cgi', req.query);})

    server.get('/codigo/coldfusion/', (req, res) => { app.render(req, res, '/routes/codigo/coldfusion', req.query);})
    server.get('/amp/codigo/coldfusion/', (req, res) => { app.render(req, res, '/routes/amp/codigo/coldfusion', req.query);})
    server.get('/codigo/coldfusion/redirect/', (req, res) => { app.render(req, res, '/routes/codigo/coldfusion', req.query);})
    server.get('/amp/codigo/coldfusion/redirect/', (req, res) => { app.render(req, res, '/routes/amp/codigo/coldfusion', req.query);})

    server.get('/codigo/css/', (req, res) => { app.render(req, res, '/routes/codigo/css', req.query);})
    server.get('/amp/codigo/css/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css', req.query);})
    server.get('/codigo/css/css02/', (req, res) => { app.render(req, res, '/routes/codigo/css/css02', req.query);})
    server.get('/amp/codigo/css/css02/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/css02', req.query);})
    server.get('/codigo/css/css03/', (req, res) => { app.render(req, res, '/routes/codigo/css/css03', req.query);})
    server.get('/amp/codigo/css/css03/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/css03', req.query);})
    server.get('/codigo/css/css04/', (req, res) => { app.render(req, res, '/routes/codigo/css/css04', req.query);})
    server.get('/amp/codigo/css/css04/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/css04', req.query);})
    server.get('/codigo/css/css05/', (req, res) => { app.render(req, res, '/routes/codigo/css/css05', req.query);})
    server.get('/amp/codigo/css/css05/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/css05', req.query);})
    server.get('/codigo/css/css06/', (req, res) => { app.render(req, res, '/routes/codigo/css/css06', req.query);})
    server.get('/amp/codigo/css/css06/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/css06', req.query);})
    server.get('/codigo/css/css07/', (req, res) => { app.render(req, res, '/routes/codigo/css/css07', req.query);})
    server.get('/amp/codigo/css/css07/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/css07', req.query);})
    server.get('/codigo/css/css08/', (req, res) => { app.render(req, res, '/routes/codigo/css/css08', req.query);})
    server.get('/amp/codigo/css/css08/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/css08', req.query);})
    server.get('/codigo/css/css09/', (req, res) => { app.render(req, res, '/routes/codigo/css/css09', req.query);})
    server.get('/amp/codigo/css/css09/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/css09', req.query);})
    server.get('/codigo/css/css10/', (req, res) => { app.render(req, res, '/routes/codigo/css/css10', req.query);})
    server.get('/amp/codigo/css/css10/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/css10', req.query);})
    server.get('/codigo/css/css11/', (req, res) => { app.render(req, res, '/routes/codigo/css/css11', req.query);})
    server.get('/amp/codigo/css/css11/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/css11', req.query);})
    server.get('/codigo/css/css12/', (req, res) => { app.render(req, res, '/routes/codigo/css/css12', req.query);})
    server.get('/amp/codigo/css/css12/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/css12', req.query);})
    server.get('/codigo/css/css13/', (req, res) => { app.render(req, res, '/routes/codigo/css/css13', req.query);})
    server.get('/amp/codigo/css/css13/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/css13', req.query);})  
    server.get('/codigo/css/anima_but/', (req, res) => { app.render(req, res, '/routes/codigo/css/anima_but', req.query);})
    server.get('/amp/codigo/css/anima_but/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css/anima_but', req.query);})


    server.get('/codigo/html5/', (req, res) => { app.render(req, res, '/routes/codigo/html5', req.query);})
    server.get('/amp/codigo/html5/', (req, res) => { app.render(req, res, '/routes/amp/html5', req.query);})

    server.get('/codigo/Java/', (req, res) => { app.render(req, res, '/routes/codigo/Java', req.query);})
    server.get('/amp/codigo/Java/', (req, res) => { app.render(req, res, '/routes/amp/codigo/Java', req.query);})

    server.get('/codigo/javascript/', (req, res) => { app.render(req, res, '/routes/codigo/javascript', req.query);})
    server.get('/codigo/javascript/jscodigo1', (req, res) => { app.render(req, res, '/routes/codigo/javascript', req.query);})
    server.get('/codigo/javascript/jscodigo2', (req, res) => { app.render(req, res, '/routes/codigo/javascript', req.query);})
    server.get('/amp/codigo/javascript/', (req, res) => { app.render(req, res, '/routes/amp/codigo/javascript', req.query);})
    
    server.get('/codigo/knockout/', (req, res) => { app.render(req, res, '/routes/codigo/knockout', req.query);})
    server.get('/amp/codigo/knockout/', (req, res) => { app.render(req, res, '/routes/amp/codigo/knockout', req.query);})

    server.get('/codigo/dotnet/', (req, res) => { app.render(req, res, '/routes/codigo/dotnet', req.query);})
    server.get('/amp/codigo/dotnet/', (req, res) => { app.render(req, res, '/routes/amp/codigo/dotnet', req.query);})

    server.get('/codigo/php/', (req, res) => { app.render(req, res, '/routes/codigo/php', req.query);})
    server.get('/amp/codigo/php/', (req, res) => { app.render(req, res, '/routes/amp/codigo/php', req.query);})
    server.get('/codigo/php/redirect/', (req, res) => { app.render(req, res, '/routes/codigo/php/redirect', req.query);})
    server.get('/amp/codigo/php/redirect/', (req, res) => { app.render(req, res, '/routes/amp/codigo/php/redirect', req.query);})
    server.get('/codigo/php/procuraarquivo/', (req, res) => { app.render(req, res, '/routes/codigo/php/procuraarquivo', req.query);})
    server.get('/amp/codigo/php/procuraarquivo/', (req, res) => { app.render(req, res, '/routes/amp/codigo/php/procuraarquivo', req.query);})
    server.get('/codigo/php/procuradiretorio/', (req, res) => { app.render(req, res, '/routes/codigo/php/procuradiretorio', req.query);})
    server.get('/amp/codigo/php/procuradiretorio/', (req, res) => { app.render(req, res, '/routes/amp/codigo/php/procuradiretorio', req.query);})

    server.get('/codigo/rubyonrails/', (req, res) => { app.render(req, res, '/routes/codigo/rubyonrails', req.query);})
    server.get('/amp/codigo/rubyonrails/', (req, res) => { app.render(req, res, '/routes/amp/codigo/rubyonrails', req.query);})

    //======================================================================

    server.get('/game/', (req, res) => {app.render(req, res, '/routes/game', req.query);}) 
    server.get('/game/controleogodzilla/', (req, res) => {app.render(req, res, '/routes/game/controleogodzilla', req.query);})
    
    //======================================================================

    server.get('/hub/', (req, res) => {app.render(req, res, '/routes/hub', req.query);}) 
    server.get('/hubbusca/', (req, res) => {app.render(req, res, '/routes/hub/busca', req.query);}) 
  
    //======================================================================

    server.get('/componentes/', (req, res) => {app.render(req, res, '/routes/componentes/componentes', req.query);}) 
    server.get('/amp/componentes/', (req, res) => {app.render(req, res, '/routes/amp/componentes/componentes', req.query);}) 

    //======================================================================

    //Rotas das APIs
    //server.post('/meusdocumentos/api1/', upload.any(), meusdocumentos.api);
    server.post('/api1/hubResposta/', hubResposta.api);
    server.get('/api1/hubResposta/', hubResposta.api);

    server.get('/api1/captcha/', apicaptcha.api);
    server.get('/captcha/api1/', apicaptcha.api);

     // server.get('/p/:id', (req, res) => {
    //     app.render(req, res, '/home', { id: req.params.id });
    // }) 

    //======================================================================


    
    server.get('/sitemap.xml', sitemap.xml);

    //======================================================================

    
    server.get('*', (req, res) => {
         //console.log('\u001b[34mRodando a rota *');
         //console.log('procurando : ' + req.url);
         //console.log('pagina atual : ' + req.headers.referer +'\u001b[0m');
         return handle(req, res)
    })

    server.listen(porta, (err) => {
        if (err) throw err
        console.log('\u001b[34m╔═══════════════════════════════════════════════╗');
        console.log('\u001b[34m║ \x1b[33mIniciou a aplicação na porta : ' + porta + '           \u001b[34m║');
        console.log('\u001b[34m╚═══════════════════════════════════════════════╝\u001b[0m');
    })

})
.catch((ex) => {
  console.log('\u001b[31m Ocorreu um erro ao processar uma rota. \u001b[0m')
  console.error(ex.stack)
  process.exit(1)
})