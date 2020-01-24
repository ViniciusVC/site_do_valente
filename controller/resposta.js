

//Importar Modulos e dependencias.
//var cache = require('memory-cache');
var fetch = require("node-fetch"); 

exports.hub = function(res,req) {
    //Função CONTROLLER que informa status do envio.
    console.log('╔════════════════════════════════════════╗');
    console.log('║        resposta - CONTROLLER           ║');
    console.log('╚════════════════════════════════════════╝');  
    console.log('Rodando Hub controller. Resposta Status solicitação.');
    console.log(req.query) //Ex.: { cpf: '12345' }
    console.log('CPF:' + req.query.contato)

    //var varcpf=req.query.contato; 
    //var varcpf="16973780644"; 
    //var tipoDocumento=req.query.tipobusca;
    //var tipoDocumento='CPF';
            
    var arraydecpfs = req.query.contato.split(",");
    var estiloH1 = '@font-face {font-family: "Simplon-Headline";src: url("https://www.oi.com.br/publicV2/fonts/simplonoi-headline-webfont.woff");} h1{font-family: Simplon-Headline;font-size: 26px;font-weight: normal;font-style: normal;font-stretch: normal;line-height: normal;letter-spacing: normal;text-align: center;color: #f8562c;}'
    var estiloP = '@font-face {font-family: "SimplonBP-Regular";src: url("https://www.oi.com.br/publicV2/fonts/simplonbp-regular-webfont.woff");} p{font-family: SimplonBP-Regular;font-size: 22px;font-weight: normal;font-style: normal;font-stretch: normal;line-height: 1.2;letter-spacing: normal;text-align: center;color: #000000;}'
    var estiloDiv = 'div{margin:10px;margin-top:50px;}'
    var vartextofinal = "";
    //var totalDebuscasCompletas = 0
    const tipoDocumento = req.query.tipobusca;
    
    var varURL = "http://stage.apisdigitais.interno:8765/api/customermanagement/v3/customer/hub";

    var a=0;    
    function buscaUnitariaAPIhub(){
        if(a < arraydecpfs.length){
                
                varcpf = arraydecpfs[a];
                vartextofinal += "Buscando ["+a+"] -> "+tipoDocumento+" : "+varcpf+", Total de buscas : " + arraydecpfs.length+".<br/>";
                console.log("Buscando ["+a+"] -> "+tipoDocumento+" : "+varcpf+", Total de buscas : " + arraydecpfs.length);
                var options = {
                        method: 'GET',
                        url: varURL,
                        headers: {
                        KEY: arraydecpfs[0],
                        KEYTYPE: tipoDocumento,
                        Authorization: "Basic Y29udGFjdGh1YjpAcHdkY29udGFjdGh1YjIwMTk=",
                        Accept: "*/*",
                        "Cache-Control": "no-cache",
                        "Postman-Token": "67db1ec4-944f-4a01-955c-dc17701f63fa,979f6457-23a2-4d6a-9b9c-2bdbb984f993",
                        "Accept-Encoding": "gzip, deflate",
                        Connection: "keep-alive"
                        }
                }
                var imgIcone='';
                var vartitulo='';
                var vartexto=''; 
                fetch(options.url, options).then(
                        resapi => {
                        if(resapi.ok) {
                                resapi.json().then(
                                        json => {
                                                console.log('Ok');
                                                //console.log(json);
                                                imgIcone='<img src="/static/assetsv5/img/iconok.png" width="45px" height="45px" />';
                                                vartitulo='<h1>Cliente : '+json[0].customerName+' - CPF : '+json[0].customerId+'</h1>';
                                                vartexto='<div><table>'
                                                var i;
                                                for (i = 0; i < json.length; i++) {
                                                        vartexto+='<tr><td>'+i+'</td><td>Contato</td><td>'+json[i].contact+' </td><td>Scor </td><td>'+json[i].score+'</td>'
                                                        vartexto+='<td> Conta fatura : </td><td>'+json[i].billingId +'</td></tr>';
                                                }
                                                vartexto+='</table></div>'
                                                console.log(vartexto);
                                                vartextofinal += '<div class="div">'+imgIcone+vartitulo+vartexto+'</div>'
                                                a++
                                                buscaUnitariaAPIhub();
                                        }
                                )
                        } else {
                                console.log('debug text: ' + text)
                                imgIcone='<img src="/static/assetsv5/img/erro_ico.png" width="45px" height="45px" />';
                                vartitulo='<h1>Algo de errado ocorreu.</h1>';
                                vartexto+='Algo de errado ocorreu.<br/>';
                                vartextofinal = '<div class="div">'+imgIcone+vartitulo+vartexto+'</div>'
                                a++
                                buscaUnitariaAPIhub();
                              
                                // resapi.text().then(text => {
                                //         //mostrarResultado()
                                // })
                        }
                        //console.log(resapi);
                //}).catch(err => console.log);
                }).catch(console.log("ERRO!!!"));
                //     //});
        }else{
                a++
                //buscaUnitariaAPIhub();
                //mostrarResultado();
        }
    }

    function mostrarResultado(){
        console.log("mostrarResultado a="+a);
        if(a >= arraydecpfs.length){ 
                vartextofinal += "Total de pesquisas : " + arraydecpfs.length +'<br/><a href="/hubbusca/">Voltar para nova pesquisa</a>';
                console.log('vartextofinal________________');
                console.log(vartextofinal);
                res.send('<style>'+estiloH1+estiloP+estiloDiv+'</style><center>' + vartextofinal + '</center>');
                clearInterval()
        }
    }
    
    buscaUnitariaAPIhub();
    mostrarResultado

    //setInterval(mostrarResultado(), 1000);

    //setInterval(mostrarResultado(), 500000000); //O setInterval Repete a função

    //O setTimeout -> chamada apois o termino do tempo
    //setTimeout(myFunc, 1500, 'funky');
//     var b;
//     for (b = 0; a < arraydecpfs.length; b++) {
//         console.log('######## '+b+ ' -> '+arraydecpfs[a]+' ########');
//     }
    //var a;
    //for (a = 0; a < arraydecpfs.length; a++) {
    //    console.log('######## '+a+'-CPF:'+arraydecpfs[a]+' ########');
    //    buscaUnitariaAPIhub(arraydecpfs[a], req.query.tipobusca);
    //    //vartextofinal += buscaUnitariaAPIhub(arraydecpfs[a], req.query.tipobusca)
    //    varcpf = arraydecpfs[a];
    //    tipoDocumento = req.query.tipobusca;
    //    //console.log(promiseAguardaRetorno.resolve);
    //    //vartextofinal += promiseAguardaRetorno
    //}

    //vartextofinal += 
    //resolve('vartextofinal '+ vartextofinal) 
}