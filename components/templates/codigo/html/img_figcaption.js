import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import Img from '../../../atoms/atImg'
import * as Util from '../../../../controller/util.js';

const imgfigcaption = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║  codigo  - HTML - IMG e FIGCAPTION     ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML Figure e Legenda" description="HTML Figure e Legenda" canonical="/codigo/html/img_figcaption//"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
        <h1>HTML Figure e Legenda</h1>
        <p>
        Use um elemento figure para marcar uma foto em um documento e um elemento figcaption para definir uma legenda para a foto:
        </p>
        <p>Segue exmplo das tags FIGURE, IMG e FIGCAPTION.</p>        
        <DivNaveg>
          <figure>
            <Img src="/static/assetsv5/img/log_laranja1.png" width="256px" height="256px" alt="Exemplo tag IMG html" title="Exemplo tag IMG html" class="ClassImgNext" modo={modo} />
            <figcaption>Legenda da foto</figcaption>
          </figure>
        </DivNaveg>
        <DivCodigo titulo="Codigo HTML da Imagem">
          {'<figure>'}<br/>
          &ensp; {'<img src="log_laranja1.png" alt="Exemplo tag IMG html" title="Exemplo tag IMG html" />'}<br/>
          &ensp; {'<figcaption>Legenda da foto</figcaption>'}<br/>
          {'</figure>'}<br/>
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

export default imgfigcaption
