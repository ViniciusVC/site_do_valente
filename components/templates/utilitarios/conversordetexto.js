import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout'
import * as Util from '../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║      GAME    controleogodzilla         ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

	// if (document.all){}
	// else document.captureEvents(Event.MOUSEMOVE);
	// document.onmousemove=mouse;
  
	function mouse(e){
    var xcurs = 0;
    var ycurs = 0;
		if (navigator.appName == 'Netscape'){
			xcurs = e.pageX;
			ycurs = e.pageY;
		} else {
			xcurs = event.clientX;
			ycurs = event.clientY;
    }
		xcurs=xcurs-190
		ycurs=ycurs-200
    if(xcurs>100){
      document.getElementById('Godzilla').style.left = xcurs+'px';
    }
		if(ycurs>200){
      document.getElementById('Godzilla').style.top = ycurs+'px';
      document.getElementById('mostro').width = (200+ycurs)
      document.getElementById('mostro').height= (100+ycurs)
    }
	}
  
  function AlteraPersonagem(){
    //document.getElementById("mostro").innerHTML = "";  
	  //document.getElementById('mostro').style.display= "none"; 
    //mouse(document.mouse);
    document.onmousemove=mouse;
    if(document.getElementById('mostro').alert=="godzilla2"){
      document.getElementById('mostro').src = '/static/assetsv5/img/game/godzilla1.gif'; 
      document.getElementById('mostro').alert="godzilla1"
		}else{
      document.getElementById('mostro').src = '/static/assetsv5/img/game/godzilla2.gif'; 
      document.getElementById('mostro').alert="godzilla2"
		}
  }


  return (
    <div>
      <Head>
        <title>Controle o Godzilla</title>
        <FaviIcon />
        <meta name="description" content="Controle o Godzilla" />
        <link rel="canonical" href="/game/conversordeunidade/" />
        <link rel="amphtml" href="/amp/game/conversordeunidade/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>Conversor de Unidade</h1>
          <div>
            campo1:[]<br/>
            campo2:[]<br/>
          </div>
          <p>Metros, polegadas.</p>
          <p>Quilos</p>
          <p>Bits</p>
          <p>Dolar</p>
      </Layout>
      <style jsx>{`
        .Godzilla {
          position: absolute;
        }
      `}</style>

    </div>
  )
}

// <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">

//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>

export default atendimentoOi

