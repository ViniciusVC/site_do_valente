import React from 'react'
import Link from 'next/link'


//console.log('Instanciando templates/index.js');
const ListadeRotas = function (props) {
  const regiao = props.regiao;
  const modo = props.modo;
  var StringModo = "";
  if(modo=="AMP" || modo=="amp"){
    StringModo = "/amp";
  }
  return (
    <div>
      <nav className='CssRotasProjeto'>
        
        <details>
          <summary><Link href={StringModo+"/?regiao="+regiao}>Home</Link></summary>
          <ol type="1">
          <li><Link href={"/?regiao="+regiao}>Home (Pagina em HTML)</Link></li>
          <li><Link href={"/amp/?regiao="+regiao}>Home (Pagina em AMP)</Link></li>
          </ol>
        </details>

        <details>
          <summary>CODIGO</summary>
          
            <details>
              <summary><Link href={StringModo+"/codigo/apache/?regiao="+regiao}>Apache</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/apache/instalubuntu?regiao="+regiao}>Instalar Apache no Ubuntu</Link></li>
                <li><Link href={StringModo+"/codigo/apache/alias?regiao="+regiao}>Alias em Apache</Link></li>
                <li><Link href={StringModo+"/codigo/apache/redirect?regiao="+regiao}>redirect 301 em Apache</Link></li>
              </ol>
            </details>

            <details>
              <summary><Link href={StringModo+"/codigo/asp/?regiao="+regiao}>ASP</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/asp/?regiao="+regiao}>ASP</Link></li>
                <li><Link href={StringModo+"/codigo/asp/redirect?regiao="+regiao}>redirect 301 em ASP</Link></li>
              </ol>
            </details>

            <details>
              <summary><Link href={StringModo+"/codigo/cgi/?regiao="+regiao}>CGI PERL</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/cgi/redirect?regiao="+regiao}>redirect 301 em CGI</Link></li>
              </ol>
            </details>
            <details>
              <summary><Link href={StringModo+"/codigo/coldfusion/?regiao="+regiao}>ColdFusion</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/coldfusion/?regiao="+regiao}>redirect 301 em ColdFusion</Link></li>
              </ol>
            </details>
            
            <details>
              <summary><Link href={StringModo+"/codigo/css/?regiao="+regiao}>CSS</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/css/?regiao="+regiao}>Introdução ao CSS</Link></li>
                <li><Link href={StringModo+"/codigo/css/css02/?regiao="+regiao}>Estilizando textos</Link></li>
                <li><Link href={StringModo+"/codigo/css/css03/?regiao="+regiao}>Imagens de fundo e atributo text</Link></li>
                <li><Link href={StringModo+"/codigo/css/css04/?regiao="+regiao}>Links e Divs</Link></li>
                <li><Link href={StringModo+"/codigo/css/css05/?regiao="+regiao}>Classe, ID e Span</Link></li>
                <li><Link href={StringModo+"/codigo/css/css06/?regiao="+regiao}>Margin, padding e floatAula</Link></li>
                <li><Link href={StringModo+"/codigo/css/css07/?regiao="+regiao}>Posicionamento de elementos, bordas e z-index</Link></li>
                <li><Link href={StringModo+"/codigo/css/css08/?regiao="+regiao}>Efeitos com o atributo hover</Link></li>
                <li><Link href={StringModo+"/codigo/css/css09/?regiao="+regiao}>Herança</Link></li>
                <li><Link href={StringModo+"/codigo/css/css10/?regiao="+regiao}>Criando um menu com listas</Link></li>
                <li><Link href={StringModo+"/codigo/css/css11/?regiao="+regiao}>Menu drop-down</Link></li>
                <li><Link href={StringModo+"/codigo/css/css12/?regiao="+regiao}>Validação e Web Standards</Link></li>
                <li><Link href={StringModo+"/codigo/css/css13/?regiao="+regiao}>Tabelas Style</Link></li>
                <li><Link href={StringModo+"/codigo/css/anima_but/?regiao="+regiao}>Exemplos Anima But</Link></li>
              </ol>
            </details>

            <details>
              <summary><Link href={StringModo+"/codigo/html5/?regiao="+regiao}>HTML</Link></summary>
              <ol type="1">
                <li>
                  <Link href={StringModo+"/codigo/html5/?regiao="+regiao}>HTML5 Introdução</Link><br />
                </li>
                <li>
                  <Link href={StringModo+"/amp/codigo/html5/?regiao="+regiao}>HTML5 Introdução (Pagina AMP)</Link><br />
                </li>
                <li>
                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Estrutura da Página HTML5</Link><br />
                </li>
                <li>
                  <Link href={StringModo+"/amp/codigo/?regiao="+regiao}>Estrutura da Página HTML5 (Pagina AMP)</Link><br />
                </li>
                <li>
                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Titulo, Parágrafo e Quebra de Linha</Link><br />
                </li>
                <li>
                  <Link href={StringModo+"/amp/codigo/?regiao="+regiao}>Titulo, Parágrafo e Quebra de Linha (Pagina AMP)</Link><br />
                </li>
                <li>
                  <details>
                    <summary>Listas</summary>
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Não ordenada</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Ordenada (type=1)</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Ordenada (type=A)</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Ordenada (type=i)</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Ordenada (type=I)</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Com descrição</Link><br />
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Imagem</summary>
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Imagens</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>MAP</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Figure e Figcaption</Link><br />
                  </details>
                </li>
                <li>
                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Iframe</Link><br />
                </li>
                <li>
                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Links</Link><br />
                </li>
                <li>
                  <details>
                    <summary>Tabelas</summary>
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Tabelas</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Tabelas Style</Link><br />
                  </details>
                </li>
                <li>
                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Div e Span</Link><br />
                </li>
                <li>
                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Comentários</Link><br />
                </li>
                <li>
                  <details>
                    <summary>Midia</summary>
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Audio</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Vídeo</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Video (Criando legendas)</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Object</Link><br />
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Formulário</summary>
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Formulários</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>com legenda)</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>atributos</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>campos: radio e checkbox)</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>campos: Number, Range e Color)</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Autocomplete e Placeholder</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Types: File, Hidden, Search, URL, Tel</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Types Date, Time, Month, Week, Datetime local</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Textarea, Spellcheck</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Button</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Select, Optgroup</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Formulários Datalist)</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Formulários Form, Formaction, Formmethod, Formenctype, Formnovalidate</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Mark e Contenteditable</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Tabindex e Accesskey</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Formulário Campo (Keygen)</Link><br />
                  </details>
                </li>
                <li>
                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Details</Link><br />
                </li>
                <li>
                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Hgroup</Link><br />
                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Meter e Progresse</Link><br />

                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Tag link</Link><br />
                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Time e Datetime</Link><br />
                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Menu e Menuitem</Link><br />
                </li>
                <li>
                  <details>
                    <summary>SVG</summary>
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>rect</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>ellipse, text</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>line, polygon, polyline</Link><br />
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Carrosel</summary>
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Carrosel 01</Link><br />
                    <Link href={StringModo+"/codigo/?regiao="+regiao}>Carrosel 02</Link><br />
                  </details>
                </li>
                <li>
                  <Link href={StringModo+"/codigo/?regiao="+regiao}>Semantica</Link><br />
                </li>
              </ol>
            </details>

            <details>
              <summary><Link href={StringModo+"/codigo/java/?regiao="+regiao}>Java</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/java/?regiao="+regiao}>Java</Link></li>
                <li><Link href={StringModo+"/codigo/java/?regiao="+regiao}>redirect 301 em JSP</Link></li>
              </ol>
            </details>

            <details>
              <summary><Link href={StringModo+"/codigo/javascript?regiao="+regiao}>JS JavaScript</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/javascript?regiao="+regiao}>JS JavaScript</Link></li>
                <li><Link href={StringModo+"/codigo/javascript?regiao="+regiao}>JS JavaScript</Link></li>
                <li><Link href={StringModo+"/codigo/javascript?regiao="+regiao}>JS JavaScript</Link></li>
              </ol>
            </details>

            <details>
              <summary><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 01</Link></li>
                <li><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 02</Link></li>
                <li><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 03</Link></li>
                <li><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 04</Link></li>
                <li><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 05</Link></li>
                <li><Link href={StringModo+"/codigo/knockout/?regiao="+regiao}>knockout JS exemplo 06</Link></li>
              </ol>
            </details>

            <details>
              <summary><Link href={StringModo+"/codigo/dotnet/?regiao="+regiao}>.NET</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/dotnet/?regiao="+regiao}>.NET</Link></li>
                <li><Link href={StringModo+"/codigo/dotnet/?regiao="+regiao}>redirect 301 em ASP.NET</Link></li>
              </ol>
            </details>

            <details>
              <summary><Link href={StringModo+"/codigo/php/?regiao="+regiao}>PHP</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/php/?regiao="+regiao}>PHP</Link></li>
                <li><Link href={StringModo+"/codigo/php/redirect/?regiao="+regiao}>redirect 301 no PHP</Link></li>
                <li><Link href={StringModo+"/codigo/php/procuraarquivo/?regiao="+regiao}>encontrar arquivio no PHP</Link></li>
                <li><Link href={StringModo+"/codigo/php/procuradiretorio/?regiao="+regiao}>encontrar diretorio no PHP</Link></li>
              </ol>
            </details>

            <details>
              <summary><Link href={StringModo+"/codigo/rubyonrails/?regiao="+regiao}>Ruby on Rails</Link></summary>
              <ol type="1">
                <li><Link href={StringModo+"/codigo/rubyonrails/?regiao="+regiao}>redirect 301 em Ruby on Rails</Link></li>
              </ol>
            </details>
        </details>

        <details>
          <summary><Link href={StringModo+"/utilitarios/?regiao="+regiao}>Utilitarios</Link></summary>
          <ol type="1">
            <li><Link href={StringModo+"/utilitarios/conversordetexto?regiao="+regiao}>conversordetexto</Link></li>
            <li><Link href={StringModo+"/utilitarios/conversordeunidade?regiao="+regiao}>conversordeunidade</Link></li>
          </ol>
        </details>

        <details>
          <summary><Link href={StringModo+"/game/?regiao="+regiao}>Games</Link></summary>
          <ol type="1">
            <li><Link href={StringModo+"/game/controleogodzilla?regiao="+regiao}>GAME - Controle O Godzilla</Link></li>
            <li><Link href={StringModo+"/game/tanque?regiao="+regiao}>GAME - Tanque</Link></li>
          </ol>
        </details>

        {/* <details>
          <summary><Link href={StringModo+"/hub/?regiao="+regiao}>Hub de Contato</Link></summary>
        </details> */}

        <details>
          <summary ><Link href={"/componentes/"}>Componentes</Link></summary>
          <ol type="1">
            <li><Link href={StringModo+"/componentes/?regiao="+regiao}>Componentes</Link></li>
          </ol>
        </details>
        <details>
          <summary><Link href={StringModo+"/eu/?regiao="+regiao}>Quem Sou Eu</Link></summary>
          <ol type="1">
            <li><Link href={StringModo+"/eu/curriculo/?regiao="+regiao}>Curriculo</Link></li>
          </ol>
        </details>
      </nav>

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
