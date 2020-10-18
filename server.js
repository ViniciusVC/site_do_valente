
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
Hotas principais.
/
/eu/
/tutorial/
/games/
/hub/
/amp/
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
    server.get('/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp' : '/', req.query);})
    
    //======================================================================
    server.get('/eu/',           (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/eu' : '/routes/eu', req.query); }) 
    server.get('/eu/curriculo/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/eu/curriculo' : '/routes/eu/curriculo', req.query); }) 
    server.get('/curriculo/',    (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/eu/curriculo' : '/routes/eu/curriculo', req.query); }) 
    //======================================================================

    server.get('/tutorial/',       (req, res) => { app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial' :'/routes/tutorial', req.query);})
    server.get('/tutorial/html5/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html' :'/routes/tutorial/html', req.query);})
    server.get('/tutorial/html/',  (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html' :'/routes/tutorial/html', req.query);})
    server.get('/tutorial/html/estrutura/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/estrutura' :'/routes/tutorial/html/estrutura', req.query);})  
    server.get('/tutorial/html/semantica/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/semantica' :'/routes/tutorial/html/semantica', req.query);})
    server.get('/tutorial/html/h1_p_br/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/h1_p_br' :'/routes/tutorial/html/h1_p_br', req.query);})
    server.get('/tutorial/html/lista/',   (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/lista01' :'/routes/tutorial/html/lista01', req.query);})
    server.get('/tutorial/html/lista01/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/lista01' :'/routes/tutorial/html/lista01', req.query);})
    server.get('/tutorial/html/lista02/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/lista02' :'/routes/tutorial/html/lista02', req.query);})
    server.get('/tutorial/html/lista03/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/lista03' :'/routes/tutorial/html/lista03', req.query);})
    server.get('/tutorial/html/lista04/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/lista04' :'/routes/tutorial/html/lista04', req.query);})
    server.get('/tutorial/html/lista05/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/lista05' :'/routes/tutorial/html/lista05', req.query);})
    server.get('/tutorial/html/lista06/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/lista06' :'/routes/tutorial/html/lista06', req.query);})
    server.get('/tutorial/html/img/',     (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/img' :'/routes/tutorial/html/img', req.query);})
    server.get('/tutorial/html/img_figcaption', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/img_figcaption' :'/routes/tutorial/html/img_figcaption', req.query);})
    server.get('/tutorial/html/iframe/',     (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/iframe' :'/routes/tutorial/html/iframe', req.query);})
    server.get('/tutorial/html/links/',      (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/links' :'/routes/tutorial/html/links', req.query);})
    server.get('/tutorial/html/tabela/',     (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/tabela' :'/routes/tutorial/html/tabela', req.query);})
    server.get('/tutorial/html/div_span/',   (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/div_span' :'/routes/tutorial/html/div_span', req.query);})
    server.get('/tutorial/html/comentario/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/comentario' :'/routes/tutorial/html/comentario', req.query);})
    server.get('/tutorial/html/meta/',   (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/meta' :'/routes/tutorial/html/meta', req.query);})
    server.get('/tutorial/html/form01/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/form01' :'/routes/tutorial/html/form01', req.query);})
    server.get('/tutorial/html/form02/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/form02' :'/routes/tutorial/html/form02', req.query);})
    server.get('/tutorial/html/form03/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/form03' :'/routes/tutorial/html/form03', req.query);})
    server.get('/tutorial/html/form04/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/form04' :'/routes/tutorial/html/form04', req.query);})
    server.get('/tutorial/html/form05/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/form05' :'/routes/tutorial/html/form05', req.query);})
    server.get('/tutorial/html/form06/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/form06' :'/routes/tutorial/html/form06', req.query);})
    server.get('/tutorial/html/form07/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/form07' :'/routes/tutorial/html/form07', req.query);})
    server.get('/tutorial/html/form08/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/form08' :'/routes/tutorial/html/form08', req.query);})
    server.get('/tutorial/html/form09/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/form09' :'/routes/tutorial/html/form09', req.query);})
    server.get('/tutorial/html/form10/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/form10' :'/routes/tutorial/html/form10', req.query);})
    server.get('/tutorial/html/form11/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/form11' :'/routes/tutorial/html/form11', req.query);})
    server.get('/tutorial/html/mark/',   (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/mark' :'/routes/tutorial/html/mark', req.query);})
    server.get('/tutorial/html/tabindexaccesskey/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/tabindexaccesskey' :'/routes/tutorial/html/tabindexaccesskey', req.query);})
    server.get('/tutorial/html/details/',   (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/details' :'/routes/tutorial/html/details', req.query);})
    server.get('/tutorial/html/hgroup/',    (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/hgroup' :'/routes/tutorial/html/hgroup', req.query);})
    server.get('/tutorial/html/meterprogress/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/meterprogress' :'/routes/tutorial/html/meterprogress', req.query);})
    server.get('/tutorial/html/tag_link/',  (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/tag_link' :'/routes/tutorial/html/tag_link', req.query);})
    server.get('/tutorial/html/map/',       (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/map' :'/routes/tutorial/html/map', req.query);})
    server.get('/tutorial/html/timedatetime/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/timedatetime' :'/routes/tutorial/html/timedatetime', req.query);})
    server.get('/tutorial/html/svg01/',     (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/svg01' :'/routes/tutorial/html/svg01', req.query);})
    server.get('/tutorial/html/svg02/',     (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/svg02' :'/routes/tutorial/html/svg02', req.query);})
    server.get('/tutorial/html/svg03/',     (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/svg03' :'/routes/tutorial/html/svg03', req.query);})
    server.get('/tutorial/html/semantica/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/semantica' :'/routes/tutorial/html/semantica', req.query);})
    server.get('/tutorial/html/canvas/',    (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/html/canvas' :'/routes/tutorial/html/canvas', req.query);})

    server.get('/tutorial/css/',       (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css' :'/routes/tutorial/css', req.query);})
    server.get('/tutorial/css/css01/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css01' :'/routes/tutorial/css/css01', req.query);})
    server.get('/tutorial/css/css02/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css02' :'/routes/tutorial/css/css02', req.query);})
    server.get('/tutorial/css/css03/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css03' :'/routes/tutorial/css/css03', req.query);})
    server.get('/tutorial/css/css04/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css04' :'/routes/tutorial/css/css04', req.query);})
    server.get('/tutorial/css/css05/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css05' :'/routes/tutorial/css/css05', req.query);})
    server.get('/tutorial/css/css06/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css06' :'/routes/tutorial/css/css06', req.query);})
    server.get('/tutorial/css/css07/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css07' :'/routes/tutorial/css/css07', req.query);})
    server.get('/tutorial/css/css08/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css08' :'/routes/tutorial/css/css08', req.query);})
    server.get('/tutorial/css/css09/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css09' :'/routes/tutorial/css/css09', req.query);})
    server.get('/tutorial/css/css10/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css10' :'/routes/tutorial/css/css10', req.query);})
    server.get('/tutorial/css/css11/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css11' :'/routes/tutorial/css/css11', req.query);})
    server.get('/tutorial/css/css12/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css12' :'/routes/tutorial/css/css12', req.query);})
    server.get('/tutorial/css/css13/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/css13' :'/routes/tutorial/css/css13', req.query);})
    server.get('/tutorial/css/anima_but/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/css/anima_but' :'/routes/tutorial/css/anima_but', req.query);})
    
    server.get('/tutorial/apache/',            (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/apache' :'/routes/tutorial/apache', req.query);})
    server.get('/tutorial/apache/instalubuntu',(req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/apache/instalubuntu' :'/routes/tutorial/apache/instalubuntu', req.query);})
    server.get('/tutorial/apache/alias',       (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/apache/alias' :'/routes/tutorial/apache/alias', req.query);})
    server.get('/tutorial/apache/redirect',    (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/apache/redirect' :'/routes/tutorial/apache/redirect', req.query);})

    server.get('/tutorial/asp/',          (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/asp' :'/routes/tutorial/asp', req.query);})
    server.get('/tutorial/asp/redirect/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/asp/redirect' :'/routes/tutorial/asp/redirect', req.query);})

    server.get('/tutorial/cgi/',          (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/cgi' :'/routes/tutorial/cgi', req.query);})
    server.get('/tutorial/cgi/redirect/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/cgi/redirect' :'/routes/tutorial/cgi/redirect', req.query);})

    server.get('/tutorial/coldfusion/',   (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/coldfusion' :'/routes/tutorial/coldfusion', req.query);})
    
    server.get('/tutorial/javascript/',         (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/javascript' :'/routes/tutorial/javascript', req.query);})
    server.get('/tutorial/javascript/nodejs/',  (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/javascript/nodejs' :'/routes/tutorial/javascript/nodejs', req.query);})  
    server.get('/tutorial/javascript/reactjs/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/javascript/reactjs' :'/routes/tutorial/javascript/reactjs', req.query);})
    server.get('/tutorial/javascript/nextjs/',  (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/javascript/nextjs' :'/routes/tutorial/javascript/nextjs', req.query);})
    server.get('/tutorial/javascript/knockout/',(req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/javascript/knockout' :'/routes/tutorial/javascript/knockout', req.query);})

    server.get('/tutorial/java/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/java' :'/routes/tutorial/java', req.query);})
  
    server.get('/tutorial/python/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/python' :'/routes/tutorial/python', req.query);})
    
    server.get('/tutorial/python/numpy/',  (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/python/numpy' :'/routes/tutorial/python/numpy', req.query);})
    server.get('/tutorial/python/pandas/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/python/pandas' :'/routes/tutorial/python/pandas', req.query);})
    
    server.get('/tutorial/python/matplotlib/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/python/matplotlib' :'/routes/tutorial/python/matplotlib', req.query);})
    server.get('/tutorial/python/seaborn/',    (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/python/seaborn' :'/routes/tutorial/python/seaborn', req.query);})
    server.get('/tutorial/python/sklearn/',    (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/python/sklearn' :'/routes/tutorial/python/sklearn', req.query);})
    
    server.get('/tutorial/python/jupyter/',  (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/python/jupyter' :'/routes/tutorial/python/jupyter', req.query);})
    server.get('/tutorial/python/anaconda/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/python/anaconda' :'/routes/tutorial/python/anaconda', req.query);})
    
    server.get('/tutorial/dotnet/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/dotnet' :'/routes/tutorial/dotnet', req.query);})

    server.get('/tutorial/php/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/php' :'/routes/tutorial/php', req.query);})
    server.get('/tutorial/php/redirect/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/php/redirect' :'/routes/tutorial/php/redirect', req.query);})
    server.get('/tutorial/php/procuraarquivo/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/php/procuraarquivo' :'/routes/tutorial/php/procuraarquivo', req.query);})
    server.get('/tutorial/php/procuradiretorio/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/php/procuradiretorio' :'/routes/tutorial/php/procuradiretorio', req.query);})

    server.get('/tutorial/rubyonrails/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/rubyonrails' :'/routes/tutorial/rubyonrails', req.query);})
    server.get('/tutorial/rubyonrails/redirect/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/rubyonrails/redirect' :'/routes/tutorial/rubyonrails/redirect', req.query);})

    server.get('/tutorial/bancodedados/',            (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/bancodedados' :'/routes/tutorial/bancodedados', req.query);})
    server.get('/tutorial/bancodedados/sql/',        (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/bancodedados/sql' :'/routes/tutorial/bancodedados/sql', req.query);})
    server.get('/tutorial/bancodedados/mysql/',      (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/bancodedados/mysql' :'/routes/tutorial/bancodedados/mysql', req.query);})
    server.get('/tutorial/bancodedados/hadoop/',     (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/bancodedados/hadoop' :'/routes/tutorial/bancodedados/hadoop', req.query);})
    server.get('/tutorial/bancodedados/datascience/',(req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/bancodedados/datascience' :'/routes/tutorial/bancodedados/datascience', req.query);})
    
    server.get('/tutorial/seo/',     (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/seo' :'/routes/tutorial/seo', req.query);})
    server.get('/tutorial/seo/amp/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/tutorial/seo/amp' :'/routes/tutorial/seo/amp', req.query);})

    //======================================================================

    server.get('/utilitarios/',                   (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/utilitarios' : '/routes/utilitarios', req.query);}) 
    server.get('/utilitarios/conversordetexto/',  (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/utilitarios/conversordetexto' : '/routes/utilitarios/conversordetexto', req.query);})
    server.get('/utilitarios/conversordeunidade/',(req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/utilitarios/conversordeunidade' : '/routes/utilitarios/conversordeunidade', req.query);})
    server.get('/utilitarios/conversorunicode/',  (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/utilitarios/conversordeunidade' : '/routes/utilitarios/conversordeunidade', req.query);})
    server.get('/utilitarios/servicosgratuitos/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/utilitarios/servicosgratuitos' : '/routes/utilitarios/servicosgratuitos', req.query);})

    //======================================================================

    server.get('/game/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/game' : '/routes/game', req.query);}) 

    server.get('/game/cristalbot/',        (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/game/cristalbot' : '/routes/game/cristalbot', req.query);})    
    server.get('/game/cristalbotb1/',      (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/game/cristalbotb1' : '/routes/game/cristalbotb1', req.query);})
    server.get('/game/cristalbotimgb1/',   (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/game/cristalbotimgb1' : '/routes/game/cristalbotimgb1', req.query);})
    server.get('/game/cristalbotimgb2/',   (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/game/cristalbotimgb2' : '/routes/game/cristalbotimgb2', req.query);})
    server.get('/game/cristalbotvideob1/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/game/cristalbotvideob1' : '/routes/game/cristalbotvideob1', req.query);})
    server.get('/game/cristalbotvideob2/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/game/cristalbotvideob2' : '/routes/game/cristalbotvideob2', req.query);})
    server.get('/cristalbot/',             (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/game/cristalbot' : '/routes/game/cristalbot', req.query);})

    server.get('/game/controleogodzilla/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/game/controleogodzilla' : '/routes/game/controleogodzilla', req.query);})
    server.get('/game/tanque/',            (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/game/tanque' : '/routes/game/tanque', req.query);})
    server.get('/game/ecossistema/',       (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/game/ecossistema' : '/routes/game/ecossistema', req.query);})
    server.get('/game/cobrinha/',          (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/game/cobrinha' : '/routes/game/cobrinha', req.query);})
    
    // //======================================================================
    // server.get('/hub/', (req, res) => {app.render(req, res, '/routes/hub', req.query);}) 
    // server.get('/hubbusca/', (req, res) => {app.render(req, res, '/routes/hub/busca', req.query);}) 
    // //======================================================================

    server.get('/componentes/', (req, res) => {app.render(req, res, req.query.amp==1 ? '/routes/amp/componentes/componentes' :'/routes/componentes/componentes', req.query);}) 

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