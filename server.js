
//Importar Modulos e dependencias.
const express = require('express')
const next = require('next')
// //Verifica se esta no ambiente de desenvolvimento
const dev = process.env.NODE_ENV !== 'production' //dev=true
const app = next({ dev })
const handle = app.getRequestHandler()
const multer = require('multer');

//API do captcha Meus Documentos
//var apiNoticias = require('./api1/noticias.js');
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
    const porta = 3000; //8000
    const upload = multer();
    // Rotas do projeto

    // Rota de arquivos estáticos
    server.use(express.static('/static'));
    
    //index
    //server.get('/', (req, res) => {app.render(req, res, '/', req.query);})
    server.get('/amp/',(req, res) => {app.render(req, res, '/routes/amp', req.query); })
    
    server.get('/eu/',           (req, res) => {app.render(req, res, '/routes/eu',           req.query); }) 
    server.get('/amp/eu/',       (req, res) => {app.render(req, res, '/routes/amp/eu',       req.query); }) 
    server.get('/eu/curriculo/', (req, res) => {app.render(req, res, '/routes/eu/curriculo', req.query); }) 
    server.get('/curriculo/',    (req, res) => {app.render(req, res, '/routes/eu/curriculo', req.query); }) 
    server.get('/amp/curriculo/',(req, res) => {app.render(req, res, '/routes/amp/eu/curriculo', req.query); }) 
    server.get('/amp/eu/curriculo/', (req, res) => {app.render(req, res, '/routes/amp/eu/curriculo', req.query); }) 
    //======================================================================


    server.get('/tutorial/', (req, res) => { app.render(req, res, '/routes/tutorial', req.query);})
    server.get('/amp/tutorial/', (req, res) => { app.render(req, res, '/routes/amp/tutorial', req.query);})

    server.get('/tutorial/html5/', (req, res) => { app.render(req, res, '/routes/tutorial/html', req.query);})
    server.get('/amp/tutorial/html5/', (req, res) => { app.render(req, res, '/routes/amp/html', req.query);})
    server.get('/tutorial/html/', (req, res) => { app.render(req, res, '/routes/tutorial/html', req.query);})
    server.get('/amp/tutorial/html/', (req, res) => { app.render(req, res, '/routes/amp/html', req.query);})
    server.get('/tutorial/html/', (req, res) => { app.render(req, res, '/routes/tutorial/html', req.query);})
    server.get('/tutorial/html/semantica/', (req, res) => { app.render(req, res, '/routes/tutorial/html/semantica', req.query);})
    server.get('/tutorial/html/h1_p_br/', (req, res) => { app.render(req, res, '/routes/tutorial/html/h1_p_br', req.query);})
    server.get('/tutorial/html/lista/', (req, res) => { app.render(req, res, '/routes/tutorial/html/lista01', req.query);})
    server.get('/tutorial/html/lista01/', (req, res) => { app.render(req, res, '/routes/tutorial/html/lista01', req.query);})
    server.get('/tutorial/html/lista02/', (req, res) => { app.render(req, res, '/routes/tutorial/html/lista02', req.query);})
    server.get('/tutorial/html/lista03/', (req, res) => { app.render(req, res, '/routes/tutorial/html/lista03', req.query);})
    server.get('/tutorial/html/lista04/', (req, res) => { app.render(req, res, '/routes/tutorial/html/lista04', req.query);})
    server.get('/tutorial/html/lista05/', (req, res) => { app.render(req, res, '/routes/tutorial/html/lista05', req.query);})
    server.get('/tutorial/html/lista06/', (req, res) => { app.render(req, res, '/routes/tutorial/html/lista06', req.query);})
    server.get('/tutorial/html/img/', (req, res) => { app.render(req, res, '/routes/tutorial/html/img', req.query);})
    server.get('/tutorial/html/img_figcaption', (req, res) => { app.render(req, res, '/routes/tutorial/html/img_figcaption', req.query);})
    server.get('/tutorial/html/iframe/', (req, res) => { app.render(req, res, '/routes/tutorial/html/iframe', req.query);})
    server.get('/tutorial/html/links/', (req, res) => { app.render(req, res, '/routes/tutorial/html/links', req.query);})
    server.get('/tutorial/html/tabela/', (req, res) => { app.render(req, res, '/routes/tutorial/html/tabela', req.query);})
    server.get('/tutorial/html/div_span/', (req, res) => { app.render(req, res, '/routes/tutorial/html/div_span', req.query);})
    server.get('/tutorial/html/comentario/', (req, res) => { app.render(req, res, '/routes/tutorial/html/comentario', req.query);})
    server.get('/tutorial/html/meta/', (req, res) => { app.render(req, res, '/routes/tutorial/html/meta', req.query);})
    server.get('/tutorial/html/form01/', (req, res) => { app.render(req, res, '/routes/tutorial/html/form01', req.query);})
    server.get('/tutorial/html/form02/', (req, res) => { app.render(req, res, '/routes/tutorial/html/form02', req.query);})
    server.get('/tutorial/html/form03/', (req, res) => { app.render(req, res, '/routes/tutorial/html/form03', req.query);})
    server.get('/tutorial/html/form04/', (req, res) => { app.render(req, res, '/routes/tutorial/html/form04', req.query);})
    server.get('/tutorial/html/form05/', (req, res) => { app.render(req, res, '/routes/tutorial/html/form05', req.query);})
    server.get('/tutorial/html/form06/', (req, res) => { app.render(req, res, '/routes/tutorial/html/form06', req.query);})
    server.get('/tutorial/html/form07/', (req, res) => { app.render(req, res, '/routes/tutorial/html/form07', req.query);})
    server.get('/tutorial/html/form08/', (req, res) => { app.render(req, res, '/routes/tutorial/html/form08', req.query);})
    server.get('/tutorial/html/form09/', (req, res) => { app.render(req, res, '/routes/tutorial/html/form09', req.query);})
    server.get('/tutorial/html/form10/', (req, res) => { app.render(req, res, '/routes/tutorial/html/form10', req.query);})
    server.get('/tutorial/html/form11/', (req, res) => { app.render(req, res, '/routes/tutorial/html/form11', req.query);})
    server.get('/tutorial/html/mark/', (req, res) => { app.render(req, res, '/routes/tutorial/html/mark', req.query);})
    server.get('/tutorial/html/tabindexaccesskey/', (req, res) => { app.render(req, res, '/routes/tutorial/html/tabindexaccesskey', req.query);})
    server.get('/tutorial/html/details/', (req, res) => { app.render(req, res, '/routes/tutorial/html/details', req.query);})
    server.get('/tutorial/html/hgroup/', (req, res) => { app.render(req, res, '/routes/tutorial/html/hgroup', req.query);})
    server.get('/tutorial/html/meterprogress/', (req, res) => { app.render(req, res, '/routes/tutorial/html/meterprogress', req.query);})
    server.get('/tutorial/html/tag_link/', (req, res) => { app.render(req, res, '/routes/tutorial/html/tag_link', req.query);})
    server.get('/tutorial/html/map/', (req, res) => { app.render(req, res, '/routes/tutorial/html/map', req.query);})
    server.get('/tutorial/html/timedatetime/', (req, res) => { app.render(req, res, '/routes/tutorial/html/timedatetime', req.query);})
    server.get('/tutorial/html/svg01/', (req, res) => { app.render(req, res, '/routes/tutorial/html/svg01', req.query);})
    server.get('/tutorial/html/svg02/', (req, res) => { app.render(req, res, '/routes/tutorial/html/svg02', req.query);})
    server.get('/tutorial/html/svg03/', (req, res) => { app.render(req, res, '/routes/tutorial/html/svg03', req.query);})
    server.get('/tutorial/html/semantica/', (req, res) => { app.render(req, res, '/routes/tutorial/html/semantica', req.query);})
    server.get('/tutorial/html/canvas/', (req, res) => { app.render(req, res, '/routes/tutorial/html/canvas', req.query);})
    

    server.get('/tutorial/css/', (req, res) => { app.render(req, res, '/routes/tutorial/css', req.query);})
    server.get('/amp/tutorial/css/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css', req.query);})
    server.get('/tutorial/css/css01/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css01', req.query);})
    server.get('/amp/tutorial/css/css01/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css01', req.query);})
    server.get('/tutorial/css/css02/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css02', req.query);})
    server.get('/amp/tutorial/css/css02/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css02', req.query);})
    server.get('/tutorial/css/css03/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css03', req.query);})
    server.get('/amp/tutorial/css/css03/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css03', req.query);})
    server.get('/tutorial/css/css04/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css04', req.query);})
    server.get('/amp/tutorial/css/css04/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css04', req.query);})
    server.get('/tutorial/css/css05/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css05', req.query);})
    server.get('/amp/tutorial/css/css05/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css05', req.query);})
    server.get('/tutorial/css/css06/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css06', req.query);})
    server.get('/amp/tutorial/css/css06/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css06', req.query);})
    server.get('/tutorial/css/css07/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css07', req.query);})
    server.get('/amp/tutorial/css/css07/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css07', req.query);})
    server.get('/tutorial/css/css08/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css08', req.query);})
    server.get('/amp/tutorial/css/css08/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css08', req.query);})
    server.get('/tutorial/css/css09/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css09', req.query);})
    server.get('/amp/tutorial/css/css09/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css09', req.query);})
    server.get('/tutorial/css/css10/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css10', req.query);})
    server.get('/amp/tutorial/css/css10/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css10', req.query);})
    server.get('/tutorial/css/css11/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css11', req.query);})
    server.get('/amp/tutorial/css/css11/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css11', req.query);})
    server.get('/tutorial/css/css12/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css12', req.query);})
    server.get('/amp/tutorial/css/css12/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css12', req.query);})
    server.get('/tutorial/css/css13/', (req, res) => { app.render(req, res, '/routes/tutorial/css/css13', req.query);})
    server.get('/amp/tutorial/css/css13/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/css13', req.query);})  
    server.get('/tutorial/css/anima_but/', (req, res) => { app.render(req, res, '/routes/tutorial/css/anima_but', req.query);})
    server.get('/amp/tutorial/css/anima_but/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/css/anima_but', req.query);})

    
    server.get('/tutorial/apache/', (req, res) => { app.render(req, res, '/routes/tutorial/apache', req.query);})
    server.get('/amp/tutorial/apache/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/apache', req.query);})
    server.get('/tutorial/apache/instalubuntu', (req, res) => { app.render(req, res, '/routes/tutorial/apache/instalubuntu', req.query);})
    server.get('/amp/tutorial/apache/instalubuntu', (req, res) => { app.render(req, res, '/routes/amp/tutorial/apache/instalubuntu', req.query);})
    server.get('/tutorial/apache/alias', (req, res) => { app.render(req, res, '/routes/tutorial/apache/alias', req.query);})
    server.get('/amp/tutorial/apache/alias', (req, res) => { app.render(req, res, '/routes/amp/tutorial/apache/alias', req.query);})
    server.get('/tutorial/apache/redirect', (req, res) => { app.render(req, res, '/routes/tutorial/apache/redirect', req.query);})
    server.get('/amp/tutorial/apache/redirect', (req, res) => { app.render(req, res, '/routes/amp/tutorial/apache/redirect', req.query);})

    server.get('/tutorial/asp/', (req, res) => { app.render(req, res, '/routes/tutorial/asp', req.query);})
    server.get('/amp/tutorial/asp/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/asp', req.query);})
    server.get('/tutorial/asp/redirect/', (req, res) => { app.render(req, res, '/routes/tutorial/asp/redirect', req.query);})
    server.get('/amp/tutorial/asp/redirect/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/asp/redirect', req.query);})

    server.get('/tutorial/cgi/', (req, res) => { app.render(req, res, '/routes/tutorial/cgi', req.query);})
    server.get('/amp/tutorial/cgi/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/cgi', req.query);})
    server.get('/tutorial/cgi/redirect/', (req, res) => { app.render(req, res, '/routes/tutorial/cgi/redirect', req.query);})
    server.get('/amp/tutorial/cgi/redirect/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/cgi/redirect', req.query);})

    server.get('/tutorial/coldfusion/', (req, res) => { app.render(req, res, '/routes/tutorial/coldfusion', req.query);})
    server.get('/amp/tutorial/coldfusion/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/coldfusion', req.query);})
    server.get('/tutorial/coldfusion/redirect/', (req, res) => { app.render(req, res, '/routes/tutorial/coldfusion', req.query);})
    server.get('/amp/tutorial/coldfusion/redirect/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/coldfusion', req.query);})

    server.get('/tutorial/javascript/', (req, res) => { app.render(req, res, '/routes/tutorial/javascript', req.query);})
    server.get('/tutorial/javascript/nodejs', (req, res) => { app.render(req, res, '/routes/tutorial/javascript/nodejs', req.query);})  
    server.get('/tutorial/javascript/reactjs', (req, res) => { app.render(req, res, '/routes/tutorial/javascript/reactjs', req.query);})
    server.get('/tutorial/javascript/nextjs', (req, res) => { app.render(req, res, '/routes/tutorial/javascript/nextjs', req.query);})

    server.get('/tutorial/java/', (req, res) => { app.render(req, res, '/routes/tutorial/java', req.query);})
    server.get('/amp/tutorial/java/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/java', req.query);})
  
    server.get('/tutorial/python/', (req, res) => { app.render(req, res, '/routes/tutorial/python', req.query);})
    server.get('/amp/tutorial/python/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/python', req.query);})
    
    server.get('/tutorial/python/numpy', (req, res) => { app.render(req, res, '/routes/tutorial/python/numpy', req.query);})
    server.get('/amp/tutorial/python/numpy', (req, res) => { app.render(req, res, '/routes/amp/tutorial/python/numpy', req.query);})
    server.get('/tutorial/python/pandas', (req, res) => { app.render(req, res, '/routes/tutorial/python/pandas', req.query);})
    server.get('/amp/tutorial/python/pandas', (req, res) => { app.render(req, res, '/routes/amp/tutorial/python/pandas', req.query);})
    
    server.get('/tutorial/python/matplotlib', (req, res) => { app.render(req, res, '/routes/tutorial/python/matplotlib', req.query);})
    server.get('/amp/tutorial/python/matplotlib', (req, res) => { app.render(req, res, '/routes/amp/tutorial/python/matplotlib', req.query);})
    server.get('/tutorial/python/seaborn', (req, res) => { app.render(req, res, '/routes/tutorial/python/seaborn', req.query);})
    server.get('/amp/tutorial/python/seaborn', (req, res) => { app.render(req, res, '/routes/amp/tutorial/python/seaborn', req.query);})


    server.get('/tutorial/dotnet/', (req, res) => { app.render(req, res, '/routes/tutorial/dotnet', req.query);})
    server.get('/amp/tutorial/dotnet/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/dotnet', req.query);})

    server.get('/tutorial/dotnet/', (req, res) => { app.render(req, res, '/routes/tutorial/dotnet', req.query);})
    server.get('/amp/tutorial/dotnet/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/dotnet', req.query);})

    server.get('/tutorial/php/', (req, res) => { app.render(req, res, '/routes/tutorial/php', req.query);})
    server.get('/amp/tutorial/php/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/php', req.query);})
    server.get('/tutorial/php/redirect/', (req, res) => { app.render(req, res, '/routes/tutorial/php/redirect', req.query);})
    server.get('/amp/tutorial/php/redirect/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/php/redirect', req.query);})
    server.get('/tutorial/php/procuraarquivo/', (req, res) => { app.render(req, res, '/routes/tutorial/php/procuraarquivo', req.query);})
    server.get('/amp/tutorial/php/procuraarquivo/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/php/procuraarquivo', req.query);})
    server.get('/tutorial/php/procuradiretorio/', (req, res) => { app.render(req, res, '/routes/tutorial/php/procuradiretorio', req.query);})
    server.get('/amp/tutorial/php/procuradiretorio/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/php/procuradiretorio', req.query);})

    server.get('/tutorial/rubyonrails/', (req, res) => { app.render(req, res, '/routes/tutorial/rubyonrails', req.query);})
    server.get('/amp/tutorial/rubyonrails/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/rubyonrails', req.query);})
    server.get('/tutorial/rubyonrails/redirect/', (req, res) => { app.render(req, res, '/routes/tutorial/rubyonrails/redirect', req.query);})
    server.get('/amp/tutorial/rubyonrails/redirect/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/rubyonrails/redirect', req.query);})

    server.get('/tutorial/bancodedados/', (req, res) => { app.render(req, res, '/routes/tutorial/bancodedados', req.query);})
    server.get('/amp/tutorial/bancodedados/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/rubyonrails', req.query);})
    server.get('/tutorial/bancodedados/sql/', (req, res) => { app.render(req, res, '/routes/tutorial/bancodedados/sql', req.query);})
    server.get('/amp/tutorial/bancodedados/sql/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/rubyonrails/redirect', req.query);})
    server.get('/tutorial/bancodedados/mysql/', (req, res) => { app.render(req, res, '/routes/tutorial/bancodedados/mysql', req.query);})
    server.get('/amp/tutorial/bancodedados/mysql/', (req, res) => { app.render(req, res, '/routes/amp/tutorial/rubyonrails/redirect', req.query);})
    
    
    //======================================================================

    server.get('/utilitarios/', (req, res) => {app.render(req, res, '/routes/utilitarios', req.query);}) 
    server.get('/amp/utilitarios/', (req, res) => {app.render(req, res, '/routes/amp/utilitarios', req.query);}) 

    server.get('/utilitarios/conversordetexto/', (req, res) => {app.render(req, res, '/routes/utilitarios/conversordetexto', req.query);})
    server.get('/amp/utilitarios/conversordetexto/', (req, res) => {app.render(req, res, '/routes/amp/utilitarios/conversordetexto', req.query);})

    server.get('/utilitarios/conversordeunidade/', (req, res) => {app.render(req, res, '/routes/utilitarios/conversordeunidade', req.query);})
    server.get('/amp/utilitarios/conversordeunidade/', (req, res) => {app.render(req, res, '/routes/amp/utilitarios/conversordeunidade', req.query);})

    server.get('/utilitarios/conversorunicode/', (req, res) => {app.render(req, res, '/routes/utilitarios/conversordeunidade', req.query);})
    server.get('/amp/utilitarios/conversorunicode/', (req, res) => {app.render(req, res, '/routes/amp/utilitarios/conversordeunidade', req.query);})

    server.get('/utilitarios/servicosgratuitos/', (req, res) => {app.render(req, res, '/routes/utilitarios/servicosgratuitos', req.query);})
    server.get('/amp/utilitarios/servicosgratuitos/', (req, res) => {app.render(req, res, '/routes/amp/utilitarios/servicosgratuitos', req.query);})

    //======================================================================

    server.get('/game/', (req, res) => {app.render(req, res, '/routes/game', req.query);}) 
    server.get('/amp/game/', (req, res) => {app.render(req, res, '/routes/amp/game', req.query);}) 

    server.get('/game/cristalbot/', (req, res) => {app.render(req, res, '/routes/game/cristalbot', req.query);})
    server.get('/amp/game/cristalbot/', (req, res) => {app.render(req, res, '/routes/amp/game/cristalbot', req.query);})
    
    server.get('/game/cristalbotb1/', (req, res) => {app.render(req, res, '/routes/game/cristalbotb1', req.query);})
    server.get('/amp/game/cristalbotb1/', (req, res) => {app.render(req, res, '/routes/amp/game/cristalbotb1', req.query);})
    server.get('/game/cristalbotimgb1/', (req, res) => {app.render(req, res, '/routes/game/cristalbotimgb1', req.query);})
    server.get('/amp/game/cristalbotimgb1/', (req, res) => {app.render(req, res, '/routes/amp/game/cristalbotimgb1', req.query);})
    server.get('/game/cristalbotimgb2/', (req, res) => {app.render(req, res, '/routes/game/cristalbotimgb2', req.query);})
    server.get('/amp/game/cristalbotimgb2/', (req, res) => {app.render(req, res, '/routes/amp/game/cristalbotimgb2', req.query);})
    server.get('/game/cristalbotvideob1/', (req, res) => {app.render(req, res, '/routes/game/cristalbotvideob1', req.query);})
    server.get('/amp/game/cristalbotvideob1/', (req, res) => {app.render(req, res, '/routes/amp/game/cristalbotvideob1', req.query);})
    server.get('/game/cristalbotvideob2/', (req, res) => {app.render(req, res, '/routes/game/cristalbotvideob2', req.query);})
    server.get('/amp/game/cristalbotvideob2/', (req, res) => {app.render(req, res, '/routes/amp/game/cristalbotvideob2', req.query);})
    
    server.get('/cristalbot/', (req, res) => {app.render(req, res, '/routes/game/cristalbot', req.query);})
    server.get('/amp/cristalbot/', (req, res) => {app.render(req, res, '/routes/amp/game/cristalbot', req.query);})

    server.get('/game/controleogodzilla/', (req, res) => {app.render(req, res, '/routes/game/controleogodzilla', req.query);})
    server.get('/amp/game/controleogodzilla/', (req, res) => {app.render(req, res, '/routes/amp/game/controleogodzilla', req.query);})
    server.get('/game/tanque/', (req, res) => {app.render(req, res, '/routes/game/tanque', req.query);})
    server.get('/amp/game/tanque/', (req, res) => {app.render(req, res, '/routes/amp/game/tanque', req.query);})
    server.get('/game/ecossistema/', (req, res) => {app.render(req, res, '/routes/game/ecossistema', req.query);})
    server.get('/amp/game/ecossistema/', (req, res) => {app.render(req, res, '/routes/amp/game/ecossistema', req.query);})
    server.get('/game/cobrinha/', (req, res) => {app.render(req, res, '/routes/game/cobrinha', req.query);})
    server.get('/amp/game/cobrinha/', (req, res) => {app.render(req, res, '/routes/amp/game/cobrinha', req.query);})

    
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

    // server.get('/api1/noticias/', apiNoticias.api);
    // server.get('/noticias/api1/', apiNoticias.api);
    // server.get('/api/noticias/', apiNoticias.api);

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