

//Importar Modulos e dependencias.
//var cache = require('memory-cache');

exports.hub = function(res,req ) {

    //Função CONTROLLER que informa status do envio.
    console.log('╔════════════════════════════════════════╗');
    console.log('║        resposta - CONTROLLER           ║');
    console.log('╚════════════════════════════════════════╝');  
    console.log('Rodando Hub controller. Resposta Status solicitação.');
    console.log(req.query) //Ex.: { cpf: '12345' }
    console.log('CPF:' + req.query.cpf)

    //function buscaAPImicroserviso(varcpf, tipoDocumento){
        //var varcpf=req.query.cpf; 
        var varcpf="16973780644"; 
        var tipoDocumento='CPF';

        console.log("buscaAPImicroserviso(varcpf="+varcpf+", tipoDocumento="+tipoDocumento+")");
        var varURL = "http://stage.apisdigitais.interno:8765/api/customermanagement/v3/customer/hub"
        console.log("URL para solicitar contato -> " + varURL);
        var fetch = require("node-fetch");
        var options = {
            method: 'GET',
            url: varURL,
            headers: {
                KEY: varcpf,
                KEYTYPE: tipoDocumento,
                Authorization: "Basic Y29udGFjdGh1YjpAcHdkY29udGFjdGh1YjIwMTk=",
                Accept: "*/*",
                "Cache-Control": "no-cache",
                "Postman-Token": "67db1ec4-944f-4a01-955c-dc17701f63fa,979f6457-23a2-4d6a-9b9c-2bdbb984f993",
                "Accept-Encoding": "gzip, deflate",
                Connection: "keep-alive"
            }
        }

        var estiloH1 = '@font-face {font-family: "Simplon-Headline";src: url("https://www.oi.com.br/publicV2/fonts/simplonoi-headline-webfont.woff");} h1{font-family: Simplon-Headline;font-size: 26px;font-weight: normal;font-style: normal;font-stretch: normal;line-height: normal;letter-spacing: normal;text-align: center;color: #f8562c;}'
        var estiloP = '@font-face {font-family: "SimplonBP-Regular";src: url("https://www.oi.com.br/publicV2/fonts/simplonbp-regular-webfont.woff");} p{font-family: SimplonBP-Regular;font-size: 22px;font-weight: normal;font-style: normal;font-stretch: normal;line-height: 1.2;letter-spacing: normal;text-align: center;color: #000000;}'
        var estiloDiv = 'div{margin:10px;margin-top:50px;}'
        var imgIcone='<img src="/static/assetsv5/img/erro_ico.png" width="45px" height="45px" />';
        var vartitulo='<h1>Algo de errado ocorreu!</h1>';
        var vartexto='<p>Não foi possivel buscar o CPF '+req.query.cpf+'.<br/>Não recebemos resposta da API do Hub de Contatos.</p><a href="/hubbusca/">Voltar e Começar de novo</a>'; 

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
                        imgIcone='<img src="/static/assetsv5/img/carregando.png" width="45px" height="45px" />';
                        vartitulo='<h1>Tudo OK!</h1>';    
                        vartexto='<br/>Cliente : '+json[0].customerName
                        vartexto+='<br/>CPF : '+json[0].customerId
                        vartexto+='<br/>Conta fatura : '+json[0].billingId
                        vartexto+='<br/>e-mail : '+json[0].contact
                        vartexto+='<a href="/hubbusca/">Voltar para nova pesquisa</a>';
                        console.log(vartexto);
                    })
                } else if (resapi.status==401){
                    console.log('!!!Acesso a ARI negado!!!!')
                    imgIcone='<img src="/static/assetsv5/img/erro_ico.png" width="45px" height="45px" />';
                    vartitulo='<h1>Acesso a ARI Hub de Contato negado!</h1>';
                } else {
                    resapi.text().then(text => console.log('debug text: ' + text))
                    imgIcone='<img src="/static/assetsv5/img/erro_ico.png" width="45px" height="45px" />';
                    vartitulo='<h1>Algo de errado ocorreu!</h1>';
                    vartexto+='<br/>'+text;
                }
                console.log(resapi);
                res.send('<style>'+estiloH1+estiloP+estiloDiv+'</style><center><div class="div">'+imgIcone+vartitulo+vartexto+'<div></center>');
        }).catch(err => console.log);

        // };
    // buscaAPImicroserviso(req.query.cpf, 'CPF');
        
    // try {
    //     if(cod==""){
    //         imgIcone='<img src="/static/assetsv5/img/erro_ico.png" width="45px" height="45px" />';
    //         vartitulo='<h1>Algo de errado ocorreu!</h1>';
    //         vartexto='<p>Não foi possivel buscar o CPF '+req.query.cpf+'.<br/>Não recebemos resposta da API do Hub de Contatos.</p><a href="/hubbusca/">Voltar e Começar de novo</a>'; 
    //         res.send('<style>'+estiloH1+estiloP+estiloDiv+'</style><center><div class="div">'+imgIcone+vartitulo+vartexto+'<div></center>');
    //     }else if (cod=="1"){
    //         imgIcone='<img src="/static/assetsv5/img/carregando.png" width="45px" height="45px" />';
    //         vartitulo='<h1>Enviando...</h1>';
    //         vartexto='<p>Enviando seus dados. Aguarde.</p>';
    //         res.send('<style>'+estiloH1+estiloP+estiloDiv+'</style><center><div class="div">'+imgIcone+vartitulo+vartexto+'<div></center>');
    //     }else{
    //         // 2 = Erro
    //         res.redirect('/hubbusca/');
    //     }
    // }
    // catch (e) {
    //     imgIcone='<img src="/static/assetsv5/img/erro_ico.png" width="45px" height="45px" />';
    //     vartitulo='<h1>Algo de errado ocorreu!</h1>';
    //     vartexto='<p>Não foi possivel buscar o CPF '+req.query.cpf+'.<br/>Não recebemos resposta da API do Hub de Contatos.</p><a href="/hubbusca/">Voltar e Começar de novo</a>'; 
    //     res.send('<style>'+estiloH1+estiloP+estiloDiv+'</style><center><div class="div">'+imgIcone+vartitulo+vartexto+'<div></center>');
    // }
    //console.log(imgIcone+vartitulo);
}