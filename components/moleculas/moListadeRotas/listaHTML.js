import React from 'react';
import Li from './itemMenu.js';

//console.log('Instanciando templates/index.js');
const ListadeRotasHTML = function (props) {
  const regiao = props.regiao;
  const modo = props.modo;
  const btestiloitem = props.btestiloitem;
  return (
              <div>
                <Li modo={modo} href="/tutorial/html/" regiao={regiao} estilo={btestiloitem}>HTML5 Introdução</Li>
                <Li modo={modo} href="/tutorial/html/estrutura/" regiao={regiao} estilo={btestiloitem}>Estrutura da Página</Li>
                <Li modo={modo} href="/tutorial/html/h1_p_br/" regiao={regiao} estilo={btestiloitem}>Titulo, Parágrafo</Li>
                <Li modo={modo} href="/tutorial/html/lista01/" regiao={regiao} estilo={btestiloitem}>Listas Não ordenada</Li>
                <Li modo={modo} href="/tutorial/html/lista02/" regiao={regiao} estilo={btestiloitem}>Listas Ordenada 1</Li>
                <Li modo={modo} href="/tutorial/html/lista03/" regiao={regiao} estilo={btestiloitem}>Listas Ordenada A</Li>
                <Li modo={modo} href="/tutorial/html/lista04/" regiao={regiao} estilo={btestiloitem}>Listas Ordenada i</Li>
                <Li modo={modo} href="/tutorial/html/lista05/" regiao={regiao} estilo={btestiloitem}>Listas Ordenada I</Li>
                <Li modo={modo} href="/tutorial/html/lista06/" regiao={regiao} estilo={btestiloitem}>Listas Com descrição</Li>
                <Li modo={modo} href="/tutorial/html/img/" regiao={regiao} estilo={btestiloitem}>Imagem</Li>        
                <Li modo={modo} href="/tutorial/html/img_figcaption/" regiao={regiao} estilo={btestiloitem}>Figure e Figcaption</Li>
                <Li modo={modo} href="/tutorial/html/iframe/" regiao={regiao} estilo={btestiloitem}>Iframe</Li>
                <Li modo={modo} href="/tutorial/html/links/" regiao={regiao} estilo={btestiloitem}>Links - tag A</Li>
                <Li modo={modo} href="/tutorial/html/tabela/" regiao={regiao} estilo={btestiloitem}>Tabelas</Li>
                <Li modo={modo} href="/tutorial/css/css13/" regiao={regiao} estilo={btestiloitem}>Tabelas Style</Li>
                <Li modo={modo} href="/tutorial/html/div_span/" regiao={regiao} estilo={btestiloitem}>Div e Span</Li>
                <Li modo={modo} href="/tutorial/html/comentario/" regiao={regiao} estilo={btestiloitem}>Comentários</Li>
                <Li modo={modo} href="/tutorial/html/meta/" regiao={regiao} estilo={btestiloitem}>Meta Tag</Li>
                {/* <Li modo={modo} href="/tutorial/html/" regiao={regiao} estilo={btestiloitem}>Midia Audio</Li>*/}
                {/* <Li modo={modo} href="/tutorial/html/" regiao={regiao} estilo={btestiloitem}>?Midia Vídeo</Li>*/}
                {/* <Li modo={modo} href="/tutorial/html/" regiao={regiao} estilo={btestiloitem}>?Midia Video (Criando legendas)</Li>*/}
                {/* <Li modo={modo} href="/tutorial/html/" regiao={regiao} estilo={btestiloitem}>?Midia Object</Li> */}
                <Li modo={modo} href="/tutorial/html/form01/" regiao={regiao} estilo={btestiloitem}>Formulários</Li>
                <Li modo={modo} href="/tutorial/html/form02/" regiao={regiao} estilo={btestiloitem}>Form: Legenda</Li>
                <Li modo={modo} href="/tutorial/html/form03/" regiao={regiao} estilo={btestiloitem}>Form: Atributos</Li>
                <Li modo={modo} href="/tutorial/html/form04/" regiao={regiao} estilo={btestiloitem}>Form: Radio Checkbox</Li>
                <Li modo={modo} href="/tutorial/html/form05/" regiao={regiao} estilo={btestiloitem}>Form: Range Color</Li>
                <Li modo={modo} href="/tutorial/html/form06/" regiao={regiao} estilo={btestiloitem}>Form: Date Time</Li>
                <Li modo={modo} href="/tutorial/html/form07/" regiao={regiao} estilo={btestiloitem}>Form: Button</Li>
                <Li modo={modo} href="/tutorial/html/form08/" regiao={regiao} estilo={btestiloitem}>Form: Select Optgroup</Li>
                <Li modo={modo} href="/tutorial/html/form09/" regiao={regiao} estilo={btestiloitem}>Form: Datalist</Li>
                <Li modo={modo} href="/tutorial/html/form10/" regiao={regiao} estilo={btestiloitem}>Form: Keygen</Li>
                <Li modo={modo} href="/tutorial/html/form11/" regiao={regiao} estilo={btestiloitem}>Form: Submit externo</Li>
                {/* <Li modo={modo} href="/tutorial/html/form01/" regiao={regiao} estilo={btestiloitem}>?Formulário Autocomplete e Placeholder</Li>*/}
                {/* <Li modo={modo} href="/tutorial/html/form01/" regiao={regiao} estilo={btestiloitem}>?Formulário Types: File, Hidden, Search, URL, Tel</Li>*/}
                {/* <Li modo={modo} href="/tutorial/html/form01/" regiao={regiao} estilo={btestiloitem}>?Formulário Textarea, Spellcheck</Li>*/}
                {/* <Li modo={modo} href="/tutorial/html/form01/" regiao={regiao} estilo={btestiloitem}>?Formulários Form, Formaction, Formmethod, Formenctype, Formnovalidate</Li> */}
                <Li modo={modo} href="/tutorial/html/mark/" regiao={regiao} estilo={btestiloitem}>Mark e Contenteditable</Li>
                <Li modo={modo} href="/tutorial/html/tabindexaccesskey/" regiao={regiao} estilo={btestiloitem}>Tabindex e Accesskey</Li>
                <Li modo={modo} href="/tutorial/html/details/" regiao={regiao} estilo={btestiloitem}>Details</Li>
                <Li modo={modo} href="/tutorial/html/hgroup/" regiao={regiao} estilo={btestiloitem}>Hgroup</Li>
                <Li modo={modo} href="/tutorial/html/meterprogress/" regiao={regiao} estilo={btestiloitem}>Meter e Progresse</Li>
                <Li modo={modo} href="/tutorial/html/links/" regiao={regiao} estilo={btestiloitem}>Tag a</Li>
                <Li modo={modo} href="/tutorial/html/map/" regiao={regiao} estilo={btestiloitem}>Imagem MAP</Li>          
                <Li modo={modo} href="/tutorial/html/timedatetime/" regiao={regiao} estilo={btestiloitem}>Time e Datetime</Li>
                <Li modo={modo} href="/tutorial/html/semantica/" regiao={regiao} estilo={btestiloitem}>Semantica</Li>
                <Li modo={modo} href="/tutorial/html/canvas/" regiao={regiao} estilo={btestiloitem}>Canvas</Li>
              </div>
  )
}

export default ListadeRotasHTML
