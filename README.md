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

### Rotas
* Rotas configuradas no server.js
```
/
/Apresentacao/
/captcha/

/amp/
/amp/Apresentacao/
/api/captcha/


```
