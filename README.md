## Projeto : site_do_valente
### Renderização server-side de HTML e AMP (isomorfica ReactJS e NextJS)
```
0 - Site pessoal
1 - Objetivo de compartilhar conhecimento técnico.
1 - Páginas em html (Next + React)
2 - Páginas AMP (Next + React + AMP)
4 - Gerador de captcha interno (Não funciona com balance).

```
* Instala dependencias
```
npm install
```
* inicia servidor local na porta 8081
```
npm run dev
```

* inicia servidor local na porta 9000
```
npm run dev -- -p 9000
```
* Gera estáticos. Deve ser rodado antes do start.
```
npm run build
```
* Inicia servidor na porta  8081. Só irá funcionar apos o build rodar sem erro.
```
npm start
npm run start
```
* Gera arquivos para servidor estatico no diretorio /out (Não foi totalmene testado).
```
npm run export
```
### Rotas
* Rotas configuradas no server.js
```

/
/eu/
/curriculo/
/codigo/
/codigo/html5/
/codigo/css/
/codigo/javascript/
/codigo/knockout/
/codigo/apache/
/codigo/php/
/codigo/ruby_on_rails/
/codigo/coldfusion/
/codigo/asp/
/codigo/dotnet/
/codigo/Java/
/codigo/cgi_perl/
/codigo/eu/
/codigo/eu/curriculo/

/amp/
/amp/eu/
/amp/curriculo/
/amp/codigo/
/amp/codigo/html5/
/amp/codigo/css/
/amp/codigo/javascript/
/amp/codigo/knockout/
/amp/codigo/apache/
/amp/codigo/php/
/amp/codigo/ruby_on_rails/
/amp/codigo/coldfusion/
/amp/codigo/asp/
/amp/codigo/dotnet/
/amp/codigo/Java/
/amp/codigo/cgi_perl/
/amp/codigo/eu/curriculo/
/amp/componentes/

/api1/captcha/

/componentes/


```
