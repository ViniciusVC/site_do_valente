import React from 'react'



const orgEcossistema = function (props) {

  console.log(' component - orgControleogodzilla ');

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
    document.onmousemove=mouse;
    if(document.getElementById('mostro').alert=="godzilla2"){
      document.getElementById('mostro').src = '/static/assetsv5/img/game/godzilla1.gif'; 
      document.getElementById('mostro').alert="godzilla1"
      //document.getElementById('mostro').class="Godzilla"
		}else{
      document.getElementById('mostro').src = '/static/assetsv5/img/game/trex.png'; 
      document.getElementById('mostro').alert="godzilla2"
      //document.getElementById('mostro').class = "esquerda";
		}
  }



  return (
    <div>
          <div className="Godzilla" id="Godzilla" >
            <a onClick={() => {AlteraPersonagem()}}>
              <img 
                id="mostro"
                alert="godzilla1" 
                src="/static/assetsv5/img/game/godzilla1.gif" 
                width="500" 
                height="379"/>
	          </a>
          </div>
          <img 
              onload="mouse();"
              alt="Fundo" 
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" 
              width="100%" 
              title="Cenário de cidades"/>
      <style jsx>{`
        .Godzilla {
          position: absolute;

        }
        .esquerda {
          -moz-transform: scaleX(-1);
          -o-transform: scaleX(-1);
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
        }
      `}</style>
    </div>
  )
}

// <div className="Godzilla" id="position">
// <a href="#meuLink" onclick="myFunction();">

//<img onload="mouse();" alt="Fundo" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" width="100%" height="100%" title="Cenário de cidades"></img>

export default orgEcossistema




// <img 
// onload="mouse();"
// alt="Fundo" 
// src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVShEa.img?h=416&amp;w=799&amp;m=6&amp;q=60&amp;u=t&amp;o=f&amp;l=f&amp;x=871&amp;y=654" 
// width="100%" 
// title="Cenário de cidades"/>