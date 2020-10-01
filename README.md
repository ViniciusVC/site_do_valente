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
* inicia servidor local na porta 3000
```
npm run dev -- -p 3000
```
* Gera estáticos. Deve ser rodado antes do start.
```
npm run build
```
* Inicia servidor na porta 3000. Só irá funcionar apos o build rodar sem erro.
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
/util/
/games/
/tutorial/
/eu/

/amp/
/amp/util/
/amp/games/
/amp/tutorial/
/amp/eu/

/api1/
/static/


```

git add .
git commit -m "publish website"


A porta usada na Umbler é a 3000.


```
