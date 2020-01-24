import React from 'react'
import Link from 'next/link'


//console.log('Instanciando templates/index.js');

const ListadeRotas = function () {
  return (
    <div>
      <h4 className='CssTitleRotasProjeto'>Rotas do Site do Valente</h4>
      <div className='CssRotasProjeto'>
        <details>
          <summary>HTML5</summary>
          <ol type="1">
            <li>
              <Link href="/codigo/html5/">HTML5 Introdução</Link><br />
            </li>
            <li>
              <Link href="/amp/codigo/html5/">HTML5 Introdução (Pagina AMP)</Link><br />
            </li>
            <li>
              <Link href="/codigo/">Estrutura da Página HTML5</Link><br />
            </li>
            <li>
              <Link href="/amp/codigo/">Estrutura da Página HTML5 (Pagina AMP)</Link><br />
            </li>
            <li>
              <Link href="/codigo/">Titulo, Parágrafo e Quebra de Linha</Link><br />
            </li>
            <li>
              <Link href="/amp/codigo/">Titulo, Parágrafo e Quebra de Linha (Pagina AMP)</Link><br />
            </li>
            <li>
              <details>
                <summary>Listas</summary>
                <Link href="/codigo/">Não ordenada</Link><br />
                <Link href="/codigo/">Ordenada (type=1)</Link><br />
                <Link href="/codigo/">Ordenada (type=A)</Link><br />
                <Link href="/codigo/">Ordenada (type=i)</Link><br />
                <Link href="/codigo/">Ordenada (type=I)</Link><br />
                <Link href="/codigo/">Com descrição</Link><br />
              </details>
            </li>
            <li>
              <details>
                <summary>Imagem</summary>
                <Link href="/codigo/">Imagens</Link><br />
                <Link href="/codigo/">MAP</Link><br />
                <Link href="/codigo/">Figure e Figcaption</Link><br />
              </details>
            </li>
            <li>
              <Link href="/codigo/">Iframe</Link><br />
            </li>
            <li>
              <Link href="/codigo/">Links</Link><br />
            </li>
            <li>
              <details>
                <summary>Tabelas</summary>
                <Link href="/codigo/">Tabelas</Link><br />
                <Link href="/codigo/">Tabelas Style</Link><br />
              </details>
            </li>
            <li>
              <Link href="/codigo/">Div e Span</Link><br />
            </li>
            <li>
              <Link href="/codigo/">Comentários</Link><br />
            </li>
            <li>
              <details>
                <summary>Midia</summary>
                <Link href="/codigo/">Audio</Link><br />
                <Link href="/codigo/">Vídeo</Link><br />
                <Link href="/codigo/">Video (Criando legendas)</Link><br />
                <Link href="/codigo/">Object</Link><br />
              </details>
            </li>
            <li>
              <details>
                <summary>Formulário</summary>
                <Link href="/codigo/">Formulários</Link><br />
                <Link href="/codigo/">com legenda)</Link><br />
                <Link href="/codigo/">atributos</Link><br />
                <Link href="/codigo/">campos: radio e checkbox)</Link><br />
                <Link href="/codigo/">campos: Number, Range e Color)</Link><br />
                <Link href="/codigo/">Autocomplete e Placeholder</Link><br />
                <Link href="/codigo/">Types: File, Hidden, Search, URL, Tel</Link><br />
                <Link href="/codigo/">Types Date, Time, Month, Week, Datetime local</Link><br />
                <Link href="/codigo/">Textarea, Spellcheck</Link><br />
                <Link href="/codigo/">Button</Link><br />
                <Link href="/codigo/">Select, Optgroup</Link><br />
                <Link href="/codigo/">Formulários Datalist)</Link><br />
                <Link href="/codigo/">Formulários Form, Formaction, Formmethod, Formenctype, Formnovalidate</Link><br />
                <Link href="/codigo/">
                  Mark e Contenteditable</Link><br />
                <Link href="/codigo/">
                  Tabindex e Accesskey</Link><br />
                <Link href="/codigo/">
                  Formulário Campo (Keygen)</Link><br />
              </details>
            </li>
            <li>
              <Link href="/codigo/">Details</Link><br />
            </li>
            <li>
              <Link href="/codigo/">Hgroup</Link><br />
              <Link href="/codigo/">Meter e Progresse</Link><br />

              <Link href="/codigo/">Tag link</Link><br />
              <Link href="/codigo/">Time e Datetime</Link><br />
              <Link href="/codigo/">Menu e Menuitem</Link><br />
            </li>
            <li>
              <details>
                <summary>SVG</summary>
                <Link href="/codigo/">rect</Link><br />
                <Link href="/codigo/">ellipse, text</Link><br />
                <Link href="/codigo/">line, polygon, polyline</Link><br />
              </details>
            </li>
            <li>
              <details>
                <summary>Carrosel</summary>
                <Link href="/codigo/">Carrosel 01</Link><br />
                <Link href="/codigo/">Carrosel 02</Link><br />
              </details>
            </li>
            <li>
              <Link href="/codigo/">Semantica</Link><br />
            </li>
          </ol>
        </details>


        <details>
          <summary>CSS</summary>
          <ol type="1">
            <li><Link href="/codigo/css/">Introdução ao CSS</Link></li>
            <li><Link href="/codigo/css/">Estilizando textos</Link></li>
            <li><Link href="/codigo/css/">Imagens de fundo e atributo text</Link></li>
            <li><Link href="/codigo/css/">Links e Divs</Link></li>
            <li><Link href="/codigo/css/">Classe, ID e Span</Link></li>
            <li><Link href="/codigo/css/">Margin, padding e floatAula 07 - Posicionamento de elementos, bordas e z-index</Link></li>
            <li><Link href="/codigo/css/">- - - -</Link></li>
            <li><Link href="/codigo/css/">Efeitos com o atributo hover</Link></li>
            <li><Link href="/codigo/css/">Herança</Link></li>
            <li><Link href="/codigo/css/">Criando um menu com listas</Link></li>
            <li><Link href="/codigo/css/" >Menu drop-down</Link></li>
            <li><Link href="/codigo/css/" >Validação e Web Standards</Link></li>
            <li><Link href="/codigo/css/" >Tabelas Style</Link></li>
          </ol>
        </details>
        <details>
          <summary>JavaScript</summary>
          <ol type="1">
            <li><Link href="/codigo/javascript">Script</Link></li>
          </ol>
        </details>
        <details>
          <summary>Knockout JS</summary>
          <ol type="1">
            <li><Link href="/codigo/knockout/">knockout JS exemplo 01</Link></li>
            <li><Link href="/codigo/knockout/">knockout JS exemplo 02</Link></li>
            <li><Link href="/codigo/knockout/">knockout JS exemplo 03</Link></li>
            <li><Link href="/codigo/knockout/">knockout JS exemplo 04</Link></li>
            <li><Link href="/codigo/knockout/">knockout JS exemplo 05</Link></li>
            <li><Link href="/codigo/knockout/">knockout JS exemplo 06</Link></li>
          </ol>
        </details>

        <details>
          <summary>Apache</summary>
          <ol type="1">
          <li><Link href="/codigo/apache/">Apache</Link></li>
            <li><Link href="/codigo/apache/instalubuntu">Instalar Apache no Ubuntu</Link></li>
            <li><Link href="/codigo/apache/alias">Alias em Apache</Link></li>
            <li><Link href="/codigo/apache/redirect">redirect 301 em Apache</Link></li>
          </ol>
        </details>

        <details>
          <summary>PHP</summary>
          <ol type="1">
            <li><Link href="/codigo/php/" >redirect 301 no PHP</Link></li>
            <li><Link href="/codigo/php/">encontrar arquivio no PHP</Link></li>
            <li><Link href="/codigo/php/">encontrar diretorio no PHP</Link></li>
          </ol>
        </details>

        <details>
          <summary>Ruby on Rails</summary>
          <ol type="1">
            <li><Link href="/codigo/rubyonrails/">redirect 301 em Ruby on Rails</Link></li>
          </ol>
        </details>

        <details>
          <summary>ColdFusion</summary>
          <ol type="1">
            <li><Link href="/codigo/coldfusion/">redirect 301 em ColdFusion</Link></li>
          </ol>
        </details>

        <details>
          <summary>ASP</summary>
          <ol type="1">
            <li><Link href="/codigo/asp/">ASP</Link></li>
            <li><Link href="/codigo/asp/redirect">redirect 301 em ASP</Link></li>
          </ol>
        </details>

        <details>
          <summary>.NET</summary>
          <ol type="1">
            <li><Link href="/codigo/.net/">redirect 301 em ASP.NET</Link></li>
          </ol>
        </details>

        <details>
          <summary>Java</summary>
          <ol type="1">
            <li><Link href="/codigo/java/">redirect 301 em JSP</Link></li>
          </ol>
        </details>

        <details>
          <summary>CGI PERL</summary>
          <ol type="1">
            <li><Link href="/codigo/cgi/">redirect 301 em CGI</Link></li>
          </ol>
        </details>
        <details>
          <summary>Hub de Contato</summary>
          <ol type="1">
            <li><Link href="/hub/">Teste API Hub de Contato</Link></li>
          </ol>
        </details>
        <details>
          <summary>Componentes</summary>
          <ol type="1">
            <li><Link href="/componentes/">Componentes</Link></li>
          </ol>
        </details>
        <details>
          <summary>EU</summary>
          <ol type="1">
            <li><Link href="/eu/curriculo/">Curriculo</Link></li>
            <li><Link href="/amp/eu/curriculo/">Curriculo (Pagina AMP)</Link></li>
            <li><Link href="/eu/">Quem Sou Eu</Link></li>
            <li><Link href="/amp/eu/">Quem Sou Eu (Pagina AMP)</Link></li>
          </ol>
        </details>
      </div>
      <style jsx>{`
      .CssRotasProjeto {
        width: 100%;
        color: #333;
        font-size: 17px;
      }
      .CssTitleRotasProjeto {
        margin: 0;
        width: 100%;
        padding-top: 10px;
        font-size: 22px;
      }
    `}</style>
    </div>
  )
}

export default ListadeRotas
