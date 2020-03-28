import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const animaBut = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║      codigo - css - anima_but          ║');
  console.log('╚════════════════════════════════════════╝');

  const regiao = Util.validaProps(props.regiao , "RJ");
  const modo = Util.validaProps(props.modo, "html");
  const JsonRegiao = Util.regiao(regiao);


  return (
    <div>
      <Head>
        <title>Exemplos de CSS animação de butão</title>
        <FaviIcon />
        <meta name="description" content="CSS_anima_but" />
        <link rel="canonical" href="/codigo/css/anima_but" />
        <link rel="amphtml" href="/amp/codigo/css/anima_but" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>Exemplos de CSS animação de butão</h1>
          <div id="wrapper">

            <div id="wrapper-inner">

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 1</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first">
                    <div className="sim-button button1">
                      <span>{JsonRegiao.timea}</span>
                    </div>
                  </div>
                  <div className="wrapperInnerTab-backgrounds-second">
                    <div className="sim-button button1">
                      <span>{JsonRegiao.timeb}</span>
                    </div>
                  </div>
                  <div className="wrapperInnerTab-backgrounds-third">
                    <div className="sim-button button1">
                      <span>{JsonRegiao.capital}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 2</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first">
                    <div className="sim-button button2" data-text={JsonRegiao.timea}><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second">
                    <div className="sim-button button2" data-text={JsonRegiao.timeb}><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third">
                    <div className="sim-button button2" data-text={JsonRegiao.capital}><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 3</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button3" data-text={JsonRegiao.timea}><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button3" data-text={JsonRegiao.timeb}><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button3" data-text={JsonRegiao.capital}><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 4</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button4" data-text={JsonRegiao.timea}><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button4" data-text={JsonRegiao.timeb}><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button4" data-text={JsonRegiao.capital}><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 5</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button5"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button5"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button5"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 6</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button6"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button6"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button6"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 7</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button7"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button7"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button7"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 8</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button8"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button8"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button8"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 9</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button9"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button9"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button9"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 10</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button10"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button10"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button10"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 11</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button11"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button11"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button11"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 12</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button12"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button12"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button12"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 13</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button13"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button13"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button13"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 14</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button14"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button14"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button14"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 15</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button15"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button15"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button15"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 16</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button16"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button16"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button16"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 17</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button17"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button17"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button17"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 18</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button18"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button18"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button18"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 19</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button19"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button19"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button19"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 20</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button20"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button20"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button20"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 21</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button21"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button21"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button21"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 22</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button22"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button22"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button22"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 23</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button23"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button23"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button23"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 24</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button24"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button24"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button24"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 25</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button25"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button25"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button25"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 26</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button26"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button26"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button26"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 27</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button27"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button27"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button27"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 28</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button28"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button28"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button28"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 29</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button29"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button29"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button29"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

              <div className="wrapperInnerTab">
                <div className="wrapperInnerTab-title">Exemplo 30</div>
                <div className="wrapperInnerTab-backgrounds">
                  <div className="wrapperInnerTab-backgrounds-first"><div className="sim-button button30"><span>{JsonRegiao.timea}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-second"><div className="sim-button button30"><span>{JsonRegiao.timeb}</span></div></div>
                  <div className="wrapperInnerTab-backgrounds-third"><div className="sim-button button30"><span>{JsonRegiao.capital}</span></div></div>
                </div>
              </div>

            </div>
          </div>
      </Layout>
      <style jsx>{`
        #header{
          background-color: #3f8dbf;
          float: left;
          width: 100%;
          height: 50px;
          color: rgba(255,255,255,1);
          line-height: 50px;
          position: fixed;
          left: 0px;
          top: 0px;
          z-index: 10;
        }
        #header a {
          color: rgba(255,255,255,1);
          text-decoration: none;
          display: block;
          font-size: 15px;
        }
        #header-left{
          float: left;
          height: 50px;
        }
        #header-left:hover #header-left-icon{
          background-color: #3F8DBF;
        }
        #header-left:hover #header-left-text{
          background-color: #599BC8;
        }
        #header-left-icon{
          float: left;
          height: 50px;
          width: 50px;
          text-align: center;
          background-color: #35759F;
          -webkit-transition: background 0.5s;
          -moz-transition: background 0.5s;
          -o-transition: background 0.5s;
          transition: background 0.5s;
        }
        #header-left-icon a {
          font-size: 25px;
        }
        #header-left-text{
          float: left;
          height: 50px;
          -webkit-transition: background 0.5s;
          -moz-transition: background 0.5s;
          -o-transition: background 0.5s;
          transition: background 0.5s;
        }
        #header-left-text a {
          padding-left: 20px;
          padding-right: 20px;
        }
        #header-right{
          float: right;
          height: 50px;
        }
        #header-right:hover #header-right-icon{
          background-color: #3F8DBF;
          }
        #header-right:hover #header-right-text{
          background-color: #599BC8;
          }
        #header-right-icon{
          float: right;
          height: 50px;
          width: 50px;
          text-align: center;
          background-color: #35759F;
          -webkit-transition: background 0.5s;
          -moz-transition: background 0.5s;
        
          -o-transition: background 0.5s;
          transition: background 0.5s;
        }
        #header-right-text{
          float: right;
          height: 50px;
          -webkit-transition: background 0.5s;
          -moz-transition: background 0.5s;
          -o-transition: background 0.5s;
          transition: background 0.5s;
        }
        #header-right-text a{
          padding-right: 20px;
          padding-left: 20px;
        }



        #awesome{
          margin-top: 200px !important;	
        }
        #wrapper {
          float: left;
          width: 100%;
        }
        #wrapper-inner{
          width: 950px;
          margin-right: auto;
          margin-left: auto;
        }

        .wrapperInnerTab{
          float: left;
          width: 100%;
          margin-top: 125px;
        }
        .wrapperInnerTab-title {
          width: 100%;
          margin-top: 30px;
          font-size: 25px;
          color: #666666;
          float: left;
          text-align: center;
          margin-bottom: 80px;
        }
        .wrapperInnerTab-backgrounds { 
          float: left;
          height: 300px;
          width: 950px;
        }
        .wrapperInnerTab-backgrounds-first{
          float: left;
          height: 300px;
          width: 33.33%;
          background-color: #ffab82;
        }
        .wrapperInnerTab-backgrounds-second{
          float: left;
          height: 300px;
          width: 33.33%;
          background-color: #bbaeb6;
        }
        .wrapperInnerTab-backgrounds-third{
          float: left;
          height: 300px;
          width: 33.33%;
          background-color: #56364a;
        }
        .sim-button{
          line-height: 50px;
          height: 50px;
          text-align: center;
          margin-right: auto;
          margin-left: auto;
          margin-top: 125px;
          width: 60%;
          cursor: pointer;
        }
        .button1 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
        }
        .button1 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button1:hover {
          background-color: rgba(255,255,255,0.2);
          -webkit-border-radius: 25px;
          -moz-border-radius: 25px;
          border-radius: 25px;	
        }
        .button2 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button2 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button2 span {
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
        }
        .button2:hover{
          background-color: rgba(255,255,255,0.2);
        }
        .button2:hover > span{
          opacity: 0;
          -webkit-transform: translate(0px,-40px);
          transform: translate(0px,-40px);
        }
        .button2::after{
          content: attr(data-text);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0;
          -webkit-transform: translate(0, 30%);
          transform: translate(0, 30%);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;	
        }
        .button2:hover::after{
          opacity: 1;
          -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
        }
        .button3 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button3 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button3 span {
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
        }
        .button3:hover{
          background-color: rgba(255,255,255,0.2);
        }
        .button3:hover > span{
          opacity: 0;
          -webkit-transform: translate(0px,40px);
          transform: translate(0px,40px);
        }
        .button3::after{
          content: attr(data-text);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0;
          -webkit-transform: translate(-30%, 0);
          transform: translate(-30%, 0);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;	
        }
        .button3:hover::after{
          opacity: 1;
          -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
        }
        .button4 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button4 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button4 > span {
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
        }
        .button4:hover{
          background-color: rgba(255,255,255,0.2);
        }
        .button4:hover > span{
          opacity: 0;
          -webkit-transform: translate(0px,40px);
          transform: translate(0px,40px);
        }
        .button4::after{
          content: attr(data-text);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0;
          -webkit-transform: translate(-30%, -50%) rotate(-30deg);
          transform: translate(-30%, -50%) rotate(-30deg);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;	
          
        }
        .button4:hover::after{
          opacity: 1;
          -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
        }
        @-webkit-keyframes jello {
          from, 11.1%, to {
            -webkit-transform: none;
            transform: none;
          }
        
          22.2% {
            -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
            transform: skewX(-12.5deg) skewY(-12.5deg);
          }
        
          33.3% {
            -webkit-transform: skewX(6.25deg) skewY(6.25deg);
            transform: skewX(6.25deg) skewY(6.25deg);
          }
        
          44.4% {
            -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
            transform: skewX(-3.125deg) skewY(-3.125deg);
          }
        
          55.5% {
            -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
            transform: skewX(1.5625deg) skewY(1.5625deg);
          }
        
          66.6% {
            -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
            transform: skewX(-0.78125deg) skewY(-0.78125deg);
          }
        
          77.7% {
            -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
            transform: skewX(0.390625deg) skewY(0.390625deg);
          }
        
          88.8% {
            -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
            transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
          }
        }
        
        @keyframes jello {
          from, 11.1%, to {
            -webkit-transform: none;
            transform: none;
          }
        
          22.2% {
            -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
            transform: skewX(-12.5deg) skewY(-12.5deg);
          }
        
          33.3% {
            -webkit-transform: skewX(6.25deg) skewY(6.25deg);
            transform: skewX(6.25deg) skewY(6.25deg);
          }
        
          44.4% {
            -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
            transform: skewX(-3.125deg) skewY(-3.125deg);
          }
        
          55.5% {
            -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
            transform: skewX(1.5625deg) skewY(1.5625deg);
          }
        
          66.6% {
            -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
            transform: skewX(-0.78125deg) skewY(-0.78125deg);
          }
        
          77.7% {
            -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
            transform: skewX(0.390625deg) skewY(0.390625deg);
          }
        
          88.8% {
            -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
            transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
          }
        }
        .button5{
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
        }
        .button5 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button5:hover{
          -webkit-animation-name: jello;
          animation-name: jello;
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          background-color: rgba(255,255,255,0.2);
          
        }
        .button6{
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          border: 1px solid rgba(255,255,255,0.5);
          position: relative;	
        }
        .button6 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button6 span{
          z-index: 2;	
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;	
        }
        .button6::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0;
          background-color: rgba(255,255,255,0.5);
          -webkit-transition: all 0.4s;
          -moz-transition: all 0.4s;
          -o-transition: all 0.4s;
          transition: all 0.4s;
          -webkit-transform: scale(0.5, 1);
          transform: scale(0.5, 1);
        }
        .button6:hover::before{
          opacity: 1;
          -webkit-transform: scale(1, 1);
          transform: scale(1, 1);
        }
        .button7{
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          border: 1px solid rgba(255,255,255,0.5);
          position: relative;	
        }
        .button7 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button7 span{
          z-index: 2;	
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;	
        }
        .button7::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0;
          background-color: rgba(255,255,255,0.5);
          -webkit-transition: all 0.4s;
          -moz-transition: all 0.4s;
          -o-transition: all 0.4s;
          transition: all 0.4s;
          -webkit-transform: scale(1, 0.5);
          transform: scale(1, 0.5);
        }
        .button7:hover::before{
          opacity: 1;
          -webkit-transform: scale(1, 1);
          transform: scale(1, 1);
        }
        .button8{
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          border: 1px solid rgba(255,255,255,0.5);
          position: relative;	
        }
        .button8 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button8 span{
          z-index: 2;	
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;	
        }
        .button8::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          z-index: 1;
          opacity: 0;
          background-color: rgba(255,255,255,0.5);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
        
        }
        .button8:hover::before{
          opacity: 1;
          width: 100%;
        }
        .button9{
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          border: 1px solid rgba(255,255,255,0.5);
          position: relative;	
          overflow: hidden;
        }
        .button9 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button9 span{
          z-index: 2;	
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;	
        }
        .button9::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0;
          background-color: rgba(255,255,255,0.5);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
        }
        .button9:hover::before{
          opacity: 1;
          -webkit-transform: skewX(-180deg)  scale(0.5,1);
          transform: skewX(-180deg)  scale(0.5,1);
        }
        .button10{
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;	
        }
        .button10 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button10 span{
          z-index: 2;	
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;	
        }
        .button10::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          border: 1px solid rgba(255,255,255,0.5);
          background-color: rgba(255,255,255,0.25);
        }
        .button10::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          border: 1px solid rgba(255,255,255,0.5);
          background-color: rgba(255,255,255,0.25);
        
        }
        .button10:hover::before{
            -webkit-transform: rotate(-45deg);
               -moz-transform: rotate(-45deg);
                -ms-transform: rotate(-45deg);
                 -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
              background-color: rgba(255,255,255,0);
        }
        .button10:hover::after{
            -webkit-transform: rotate(45deg);
               -moz-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                 -o-transform: rotate(45deg);
                    transform: rotate(45deg);
              background-color: rgba(255,255,255,0);
        }
        .button11{
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          
          position: relative;
          perspective: 2000px;	
        
        }
        .button11 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button11 span{
          z-index: 2;	
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;	
        }
        .button11::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          border: 1px solid rgba(255,255,255,0.5);
          background-color: rgba(255,255,255,0.25);
        }
        .button11::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          border: 1px solid rgba(255,255,255,0.5);
          background-color: rgba(255,255,255,0.25);
        }
        .button11:hover::before{
          -webkit-transform: rotateX(60deg) translate(0px,40px);
          transform: rotateX(60deg) translate(0px,40px) ;	
        }
        .button11:hover::after{
          -webkit-transform: rotateX(-60deg) translate(0px,-40px)  ;
          transform: rotateX(-60deg) translate(0px,-40px) ;	
        }
        
        .button12{
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button12 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button12 span{
          z-index: 2;	
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;	
        }
        .button12::before{
          content: '';
          position: absolute;
          top: 50px;
          left: -5px;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-bottom: 190px solid rgba(255,255,255,0.25);
          z-index: 1;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
        }
        .button12::after{
          content: '';
          position: absolute;
          top: 50px;
          left: -5px;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-bottom: 190px solid rgba(255,255,255,0.25);
          z-index: 1;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
        }
        .button12::after{
          -webkit-transition-delay: 0.2s; /* Safari */
            transition-delay: 0.2s;
        }
        .button12:hover::before{
          opacity: 1;
          -webkit-transform: translate(0px,-190px);
          transform: translate(0px,-190px);	
        }
        .button12:hover::after{
          opacity: 1;
          -webkit-transform: translate(0px,-150px);
          transform: translate(0px,-150px);	
        }
        .button13 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
        }
        .button13 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button13::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          border: 1px solid rgba(255,255,255,0.5);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
        }
        .button13:hover::before{
          opacity: 0;
          -webkit-transform: scale(1.2,1.2);
          transform: scale(1.2,1.2);
        }
        .button13::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0;
          background-color: rgba(255,255,255,0.25);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          -webkit-transform: scale(0.5,0.5);
          transform: scale(0.5,0.5);
        }
        .button13:hover::after{
          opacity: 1 ;
          -webkit-transform: scale(1,1);
          transform: scale(1,1);
        }
        .button14 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
        }
        .button14 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button14::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-color: rgba(255,255,255,0.25);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
        
        }
        .button14:hover::before{
          opacity: 0 ;
          -webkit-transform: scale(0.5,0.5);
          transform: scale(0.5,0.5);
        }
        .button14::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          border: 1px solid rgba(255,255,255,0.5);
          -webkit-transform: scale(1.2,1.2);
          transform: scale(1.2,1.2);
        }
        .button14:hover::after{
          opacity: 1;
          -webkit-transform: scale(1,1);
          transform: scale(1,1);
        }
        .button15 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button15 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button15::before, .button15::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-color: rgba(255,255,255,0.25);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          -webkit-transform: translate(0,-100%);
          transform: translate(0,-100%);
          -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
          transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        }
        .button15::after{
          -webkit-transition-delay: 0.2s; /* Safari */
            transition-delay: 0.2s;
        }
        .button15:hover::before, .button15:hover::after{
          -webkit-transform: translate(0,0);
          transform: translate(0,0);
        }
        .button16 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button16 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button16::before, .button16::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
            z-index: 1;
          background-color: rgba(255,255,255,0.25);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          -webkit-transform: translate(-100%,0);
          transform: translate(-100%,0);
          -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
          transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        }
        .button16::after{
          -webkit-transition-delay: 0.2s; /* Safari */
            transition-delay: 0.2s;
        }
        .button16:hover::before, .button16:hover::after{
          -webkit-transform: translate(0,0);
          transform: translate(0,0);	
        }
        .button17 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button17 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button17::before, .button17::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
            z-index: 1;
          background-color: rgba(255,255,255,0.25);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          -webkit-transform: translate(-13%,-190%) rotate(-30deg);
          transform: translate(-13%,-190%) rotate(-30deg);
          -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
          transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        }
        .button17::after{
          -webkit-transition-delay: 0.2s; /* Safari */
            transition-delay: 0.2s;
        }
        .button17:hover::before, .button17:hover::after{
          -webkit-transform: translate(0,0);
          transform: translate(0,0);	
        }
        .button18 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button18 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button18::before, .button18::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
            z-index: 1;
          background-color: rgba(255,255,255,0.25);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          -webkit-transform: translate(13%,190%) rotate(-30deg);
          transform: translate(13%,190%) rotate(-30deg);
          -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
          transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        }
        .button18::after{
          -webkit-transition-delay: 0.2s; /* Safari */
            transition-delay: 0.2s;
        }
        .button18:hover::before, .button18:hover::after{
          -webkit-transform: translate(0,0);
          transform: translate(0,0);	
        }
        .button19 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button19 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button19::before{
          content: '';
          position: absolute; 
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
            z-index: 1;
          background-color: rgba(255,255,255,0.25);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          -webkit-transform: translate(13%,190%) rotate(-30deg);
          transform: translate(13%,190%) rotate(-30deg);
          -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
          transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        }
        .button19::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
            z-index: 1;
          background-color: rgba(255,255,255,0.25);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          -webkit-transform: translate(-13%,-190%) rotate(-30deg);
          transform: translate(-13%,-190%) rotate(-30deg);
          -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
          transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        }
        .button19::before{
          -webkit-transition-delay: 0.2s; /* Safari */
            transition-delay: 0.2s;
        }
        .button19:hover::before, .button19:hover::after{
          -webkit-transform: translate(0,0);
          transform: translate(0,0);	
        }
        .button20 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button20 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button20::before{
          content: '';
          position: absolute; 
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
            z-index: 1;
          background-color: rgba(255,255,255,0.25);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          -webkit-transform: translate(13%,-190%) rotate(30deg);
          transform: translate(13%,-190%) rotate(30deg);
          -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
          transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        }
        .button20::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
            z-index: 1;
          background-color: rgba(255,255,255,0.25);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          -webkit-transform: translate(-13%,-190%) rotate(-30deg);
          transform: translate(-13%,-190%) rotate(-30deg);
          -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
          transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        }
        .button20::before{
          -webkit-transition-delay: 0.2s; /* Safari */
            transition-delay: 0.2s;
        }
        .button20:hover::before, .button20:hover::after{
          -webkit-transform: translate(0,0);
          transform: translate(0,0);	
        }
        .button21 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button21 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button21::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          opacity: 1;
          -webkit-transform: translate(0,-105%);
          transform: translate(0,-105%);
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: rgba(255,255,255,1);
          background-color: rgba(255,255,255,0.25);
        }
        .button21:hover::before{
          opacity: 0;
          -webkit-transform: translate(0,0);
          transform: translate(0,0);	
        }
        .button22 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button22 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button22::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          opacity: 1;
          -webkit-transform: translate(-105%,0);
          transform: translate(-105%,0);
          border-right-width: 1px;
          border-right-style: solid;
          border-right-color: rgba(255,255,255,1);
          background-color: rgba(255,255,255,0.25);
        }
        .button22:hover::before{
          opacity: 0;
          -webkit-transform: translate(0,0);
          transform: translate(0,0);	
        }
        .button23 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button23 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button23::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          opacity: 1;
          -webkit-transform: translate(-13%,-190%) rotate(-30deg);
          transform: translate(-13%,-190%) rotate(-30deg);
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: rgba(255,255,255,1);
          background-color: rgba(255,255,255,0.25);
        }
        .button23:hover::before{
          opacity: 0;
          -webkit-transform: translate(0,0);
          transform: translate(0,0);	
        }
        .button24 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button24 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button24::before, .button24::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          opacity: 1;
          -webkit-transform: translate(0,-105%);
          transform: translate(0,-105%);
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: rgba(255,255,255,1);
          background-color: rgba(255,255,255,0.25);
        }
        .button24::after{
          -webkit-transition-delay: 0.2s; /* Safari */
            transition-delay: 0.2s;
        }
        .button24:hover::before, .button24:hover::after{
          opacity: 0;
          -webkit-transform: translate(0,0);
          transform: translate(0,0);	
        }
        .button25 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button25 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button25::before, .button25::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          opacity: 1;
          -webkit-transform: translate(-105%,0);
          transform: translate(-105%,0);
          border-right-width: 1px;
          border-right-style: solid;
          border-right-color: rgba(255,255,255,1);
          background-color: rgba(255,255,255,0.25);
        }
        .button25::after{
          -webkit-transition-delay: 0.2s; /* Safari */
            transition-delay: 0.2s;
        }
        .button25:hover::before, .button25:hover::after{
          opacity: 0;
          -webkit-transform: translate(0,0);
          transform: translate(0,0);	
        }
        .button26 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button26 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button26::before, .button26::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          opacity: 1;
          -webkit-transform: translate(-13%,-190%) rotate(-30deg);
          transform: translate(-13%,-190%) rotate(-30deg);
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: rgba(255,255,255,1);
          background-color: rgba(255,255,255,0.25);
        }
        .button26::after{
          -webkit-transition-delay: 0.2s; /* Safari */
            transition-delay: 0.2s;
        }
        .button26:hover::before, .button26:hover::after{
          opacity: 0;
          -webkit-transform: translate(0,0);
          transform: translate(0,0);	
        }
        .button27 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .button27:hover{
          border: 1px solid rgba(255,255,255,0);
        }
        .button27 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button27::before{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          z-index: 1;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          -webkit-transform: translate(-100%, -600%) rotate(30deg);
          transform: translate(-100%, -600%)  rotate(30deg);
          background-color: rgba(255,255,255,0.5);
          -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
          transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        
        }
        .button27:hover::before{
          -webkit-transform: translate(0,0);
          transform: translate(0,0);	
        }
        .button28 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          position: relative;
        }
        .button28 span{
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
        }
        .button28 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button28::before{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          border-top-width: 1px;
          border-bottom-width: 1px;
          border-top-style: solid;
          border-bottom-style: solid;
          border-top-color: rgba(255,255,255,0.5);
          border-bottom-color: rgba(255,255,255,0.5);
          -webkit-transform: scale(0.1, 1);
          transform: scale(0.1, 1);
          
        }
        .button28:hover span{
          letter-spacing: 2px;
          }
        .button28:hover::before{
          opacity: 1;	
          -webkit-transform: scale(1, 1);
          transform: scale(1, 1);
          
        }
        .button28::after{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          background-color: rgba(255,255,255,0.25);
        }
        .button28:hover::after{
          opacity: 0;	
          -webkit-transform: scale(0.1, 1);
          transform: scale(0.1, 1);
        }
        .button29 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          position: relative;
          border-right-width: 1px;
          border-left-width: 1px;
          border-right-style: solid;
          border-left-style: solid;
          border-right-color: rgba(255,255,255,0.5);
          border-left-color: rgba(255,255,255,0.5);
        
        }
        .button29 span{
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          }
        .button29:hover span{
          letter-spacing: 2px;
          }
        .button29:hover{
          border-right-color: rgba(255,255,255,0);
          border-left-color: rgba(255,255,255,0);
        }
        
        .button29 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button29::before{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          z-index: 1;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          background-color: rgba(255,255,255,0.5);
          
        }
        .button29:hover::before{
          -webkit-transform: translate(0,-25px) rotate(-45deg);
          -moz-transform: translate(0,-25px) rotate(-45deg);
          transform: translate(0,-25px) rotate(-45deg);
        }
        .button29::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          z-index: 1;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          background-color: rgba(255,255,255,0.5);
        }
        .button29:hover::after{
          -webkit-transform: translate(0,25px) rotate(45deg);
          -moz-transform: translate(0,25px) rotate(45deg);
          transform: translate(0,25px) rotate(45deg);
        }
        .button30 {
          color: rgba(255,255,255,1);
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          position: relative;
          border-top-width: 1px;
          border-bottom-width: 1px;
          border-top-style: solid;
          border-bottom-style: solid;
          border-top-color: rgba(255,255,255,0.5);
          border-bottom-color: rgba(255,255,255,0.5);
        }
        .button30 span{
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          }
        .button30:hover span{
          letter-spacing: 2px;
          }
        .button30:hover{
          border-top-color: rgba(255,255,255,0);
          border-bottom-color: rgba(255,255,255,0);
        }
        .button30 a{
          color: rgba(51,51,51,1);
          text-decoration: none;
          display: block;
        }
        .button30::before{
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          background-color: rgba(255,255,255,0.5);
        }
        .button30:hover::before{
          -webkit-transform: translate(-94.9845px,0) rotate(270deg);
          -moz-transform: translate(-94.9845px,0) rotate(270deg);
          transform: translate(-94.9845px,0) rotate(270deg);
        }
        .button30::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          z-index: 1;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -o-transition: all 0.3s;
          transition: all 0.3s;
          background-color: rgba(255,255,255,0.5);
        }
        .button30:hover::after{
          -webkit-transform: translate(94.9845px,0) rotate(180deg);
          -moz-transform: translate(94.9845px,0) rotate(180deg);
          transform: translate(94.9845px,0) rotate(180deg);
        }
    `}</style>
      <style jsx global>{`
        body{
          margin: 0px;
          padding: 0px;
          background-color: #ffffff;
          font-family: sans-serif;        
        }
    `}</style>
    </div>
  )
}

export default animaBut
