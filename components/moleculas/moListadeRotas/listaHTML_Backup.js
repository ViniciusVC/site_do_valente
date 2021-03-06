import React from 'react';
import Li from './itemMenu.js';

//console.log('Instanciando templates/index.js');
const ListadeRotasHTML = function (props) {
  const regiao = props.regiao;
  const modo = props.modo;

  return (
              <ol type="1">
                <Li modo={modo} href="/codigo/html/" regiao={regiao}>HTML5 Introdução</Li>
                <Li modo={modo} href="/codigo/html/semantica/" regiao={regiao}>Estrutura da Página</Li>
                <Li modo={modo} href="/codigo/html/h1_p_br/" regiao={regiao}>Titulo, Parágrafo</Li>
                <Li modo={modo} href="/codigo/html/lista01/" regiao={regiao}>Listas Não ordenada</Li>
                <Li modo={modo} href="/codigo/html/lista02/" regiao={regiao}>Listas Ordenada 1</Li>
                <Li modo={modo} href="/codigo/html/lista03/" regiao={regiao}>Listas Ordenada A</Li>
                <Li modo={modo} href="/codigo/html/lista04/" regiao={regiao}>Listas Ordenada i</Li>
                <Li modo={modo} href="/codigo/html/lista05/" regiao={regiao}>Listas Ordenada I</Li>
                <Li modo={modo} href="/codigo/html/lista06/" regiao={regiao}>Listas Com descrição</Li>
                <Li modo={modo} href="/codigo/html/img/" regiao={regiao}>Imagem</Li>        
                <Li modo={modo} href="/codigo/html/img_figcaption/" regiao={regiao}>Figure e Figcaption</Li>
                <Li modo={modo} href="/codigo/html/iframe/" regiao={regiao}>Iframe</Li>
                <Li modo={modo} href="/codigo/html/links/" regiao={regiao}>Links - tag A</Li>
                <Li modo={modo} href="/codigo/html/tabela/" regiao={regiao}>Tabelas</Li>
                <Li modo={modo} href="/codigo/css/css13/" regiao={regiao}>Tabelas Style</Li>
                <Li modo={modo} href="/codigo/html/div_span/" regiao={regiao}>Div e Span</Li>
                <Li modo={modo} href="/codigo/html/comentario/" regiao={regiao}>Comentários</Li>
                <Li modo={modo} href="/codigo/html/meta/" regiao={regiao}>Meta Tag</Li>
                {/* <Li modo={modo} href="/codigo/html/" regiao={regiao}>Midia Audio</Li>*/}
                {/* <Li modo={modo} href="/codigo/html/" regiao={regiao}>?Midia Vídeo</Li>*/}
                {/* <Li modo={modo} href="/codigo/html/" regiao={regiao}>?Midia Video (Criando legendas)</Li>*/}
                {/* <Li modo={modo} href="/codigo/html/" regiao={regiao}>?Midia Object</Li> */}
                <Li modo={modo} href="/codigo/html/form01/" regiao={regiao}>Formulários</Li>
                <Li modo={modo} href="/codigo/html/form02/" regiao={regiao}>Form: Legenda</Li>
                <Li modo={modo} href="/codigo/html/form03/" regiao={regiao}>Form: Atributos</Li>
                <Li modo={modo} href="/codigo/html/form04/" regiao={regiao}>Form: Radio Checkbox</Li>
                <Li modo={modo} href="/codigo/html/form05/" regiao={regiao}>Form: Range Color</Li>
                <Li modo={modo} href="/codigo/html/form06/" regiao={regiao}>Form: Date Time</Li>
                <Li modo={modo} href="/codigo/html/form07/" regiao={regiao}>Form: Button</Li>
                <Li modo={modo} href="/codigo/html/form08/" regiao={regiao}>Form: Select Optgroup</Li>
                <Li modo={modo} href="/codigo/html/form09/" regiao={regiao}>Form: Datalist</Li>
                <Li modo={modo} href="/codigo/html/form10/" regiao={regiao}>Form: Keygen</Li>
                <Li modo={modo} href="/codigo/html/form11/" regiao={regiao}>Form: Submit externo</Li>
                {/* <Li modo={modo} href="/codigo/html/form01/" regiao={regiao}>?Formulário Autocomplete e Placeholder</Li>*/}
                {/* <Li modo={modo} href="/codigo/html/form01/" regiao={regiao}>?Formulário Types: File, Hidden, Search, URL, Tel</Li>*/}
                {/* <Li modo={modo} href="/codigo/html/form01/" regiao={regiao}>?Formulário Textarea, Spellcheck</Li>*/}
                {/* <Li modo={modo} href="/codigo/html/form01/" regiao={regiao}>?Formulários Form, Formaction, Formmethod, Formenctype, Formnovalidate</Li> */}
                <Li modo={modo} href="/codigo/html/mark/" regiao={regiao}>Mark e Contenteditable</Li>
                <Li modo={modo} href="/codigo/html/tabindexaccesskey/" regiao={regiao}>Tabindex e Accesskey</Li>
                <Li modo={modo} href="/codigo/html/details/" regiao={regiao}>Details</Li>
                <Li modo={modo} href="/codigo/html/hgroup/" regiao={regiao}>Hgroup</Li>
                <Li modo={modo} href="/codigo/html/meterprogress/" regiao={regiao}>Meter e Progresse</Li>
                <Li modo={modo} href="/codigo/html/links/" regiao={regiao}>Tag a</Li>
                <Li modo={modo} href="/codigo/html/map/" regiao={regiao}>Imagem MAP</Li>          
                <Li modo={modo} href="/codigo/html/timedatetime/" regiao={regiao}>Time e Datetime</Li>
                <Li modo={modo} href="/codigo/html/semantica/" regiao={regiao}>Semantica</Li>
                <Li modo={modo} href="/codigo/html/canvas/" regiao={regiao}>Canvas</Li>
              </ol>
  )
}

export default ListadeRotasHTML
