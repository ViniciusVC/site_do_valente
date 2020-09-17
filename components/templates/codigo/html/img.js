import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import Img from '../../../atoms/atImg'
import * as Util from '../../../../controller/util.js';

const TemplateIMG = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║  Tutorial  - HTML - IMG     ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML Figure e Legenda" description="Tutorial HTML Figure e Legenda" canonical="/codigo/html/img_figcaption//"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML Figura</h1>
      <p>
        A tag img define uma imagem em uma página HTML.<br/>
        A tag img possui dois atributos obrigatórios: src e alt.<br/>
        As imagens não são tecnicamente inseridas em uma página HTML, mas sim vinculadas às páginas HTML.<br/>
        A tag img cria um espaço de espera para a imagem referenciada.<br/>
      </p>
        <p>Segue exmplo das tags IMG.</p>        
        <DivNaveg>
          <Img src="/static/assetsv5/img/log_laranja1.png" width="256px" height="256px" alt="Exemplo tag IMG html" title="Exemplo tag IMG html" class="ClassImgNext" modo={modo} />
        </DivNaveg>
        <DivCodigo titulo="Codigo HTML da Imagem">
          {'<img src="log_laranja1.png" alt="Exemplo tag IMG html" title="Exemplo tag IMG html" />'}
        </DivCodigo>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        .p{
          color : #000000;
        }
      `}</style>
    </div>
  )
}

export default TemplateIMG
