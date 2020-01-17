
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
    server.get('/amp/',(req, res) => {app.render(req, res, '/routes/amp', req.query); })
    server.get('/eu/', (req, res) => {app.render(req, res, '/routes/eu', req.query); }) 
    server.get('/amp/eu/', (req, res) => {app.render(req, res, '/routes/amp/eu', req.query); }) 

    //======================================================================

    server.get('/codigo/', (req, res) => { app.render(req, res, '/routes/codigo/index', req.query);})
    server.get('/amp/codigo/', (req, res) => { app.render(req, res, '/routes/amp/codigo/index', req.query);})

    server.get('/codigo/html5/', (req, res) => { app.render(req, res, '/routes/codigo/html5', req.query);})
    server.get('/amp/codigo/html5/', (req, res) => { app.render(req, res, '/routes/amp/html5', req.query);})

    server.get('/codigo/css/', (req, res) => { app.render(req, res, '/routes/codigo/css', req.query);})
    server.get('/amp/codigo/css/', (req, res) => { app.render(req, res, '/routes/amp/codigo/css', req.query);})

    server.get('/codigo/javascript/', (req, res) => { app.render(req, res, '/routes/codigo/javascript', req.query);})
    server.get('/amp/codigo/javascript/', (req, res) => { app.render(req, res, '/routes/amp/codigo/javascript', req.query);})

    server.get('/codigo/knockout/', (req, res) => { app.render(req, res, '/routes/codigo/knockout', req.query);})
    server.get('/amp/codigo/knockout/', (req, res) => { app.render(req, res, '/routes/amp/codigo/knockout', req.query);})

    server.get('/codigo/apache/', (req, res) => { app.render(req, res, '/routes/codigo/html5', req.query);})
    server.get('/amp/codigo/apache/', (req, res) => { app.render(req, res, '/routes/amp/codigo/html5', req.query);})

    server.get('/codigo/php/', (req, res) => { app.render(req, res, '/routes/codigo/php', req.query);})
    server.get('/amp/codigo/php/', (req, res) => { app.render(req, res, '/routes/amp/codigo/php', req.query);})

    server.get('/codigo/rubyonrails/', (req, res) => { app.render(req, res, '/routes/codigo/rubyonrails', req.query);})
    server.get('/amp/codigo/rubyonrails/', (req, res) => { app.render(req, res, '/routes/amp/codigo/rubyonrails', req.query);})

    server.get('/codigo/coldfusion/', (req, res) => { app.render(req, res, '/routes/codigo/coldfusion', req.query);})
    server.get('/amp/codigo/coldfusion/', (req, res) => { app.render(req, res, '/routes/amp/codigo/coldfusion', req.query);})

    server.get('/codigo/asp/', (req, res) => { app.render(req, res, '/routes/codigo/asp', req.query);})
    server.get('/amp/codigo/asp/', (req, res) => { app.render(req, res, '/routes/amp/codigo/asp', req.query);})

    server.get('/codigo/dotnet/', (req, res) => { app.render(req, res, '/routes/codigo/dotnet', req.query);})
    server.get('/amp/codigo/dotnet/', (req, res) => { app.render(req, res, '/routes/amp/codigo/dotnet', req.query);})

    server.get('/codigo/Java/', (req, res) => { app.render(req, res, '/routes/codigo/Java', req.query);})
    server.get('/amp/codigo/Java/', (req, res) => { app.render(req, res, '/routes/amp/codigo/Java', req.query);})

    server.get('/codigo/cgi/', (req, res) => { app.render(req, res, '/routes/codigo/cgi', req.query);})
    server.get('/amp/codigo/cgi/', (req, res) => { app.render(req, res, '/routes/amp/codigo/cgi', req.query);})

    server.get('/codigo/eu/', (req, res) => { app.render(req, res, '/routes/eu/', req.query);})
    server.get('/amp/codigo/eu/', (req, res) => { app.render(req, res, '/routes/amp/eu/', req.query);})
    
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

    server.get('*', (req, res) => {
         //console.log('\u001b[34mRodando a rota *');
         console.log('procurando : ' + req.url);
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