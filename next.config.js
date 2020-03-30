module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Nota: nós fornecemos o webpack acima, para que você não precise dele
      // Realiza personalizações na configuração do webpack
      // Importante: retorna a configuração modificada
      // Example using webpack option
      //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
      // node: {
      //   fs: 'empty'
      // }
      return config
  },
  webpackDevMiddleware: config => {
      // Perform customizations to webpack dev middleware config
      // Important: return the modified config
      // node: {
      //   fs: 'empty'
      // }
      return config
  },
  exportPathMap: function () {
      // Esta lista de paginas só é gerada quando exportamos arquivos estáticos.
      return {
        '/': { page: '/'},
        '/amp/': { page: '/routes/amp' },
        '/eu/': { page: '/routes/eu'}, 
        '/amp/eu/': { page: '/routes/amp/eu'}, 
        '/eu/curriculo/': { page: '/routes/eu/curriculo'}, 
        '/amp/eu/curriculo/': { page: '/routes/amp/eu/curriculo'}, 
        '/curriculo/': { page: '/routes/eu/curriculo'}, 
        '/amp/curriculo/': { page: '/routes/eu/curriculo'}, 
        //======================================================================
        '/codigo/': { page: '/routes/codigo/index'},
        '/amp/codigo/': { page: '/routes/amp/codigo/index'},
        //--------------------------------
        '/codigo/apache/': { page: '/routes/codigo/apache'},
        '/amp/codigo/apache/': { page: '/routes/amp/codigo/apache'},
        '/codigo/apache/instalubuntu': { page: '/routes/codigo/apache/instalubuntu'},
        '/amp/codigo/apache/instalubuntu': { page: '/routes/amp/codigo/apache/instalubuntu'},
        '/codigo/apache/alias': { page: '/routes/codigo/apache/alias'},
        '/amp/codigo/apache/alias': { page: '/routes/amp/codigo/apache/alias'},
        '/codigo/apache/redirect': { page: '/routes/codigo/apache/redirect'},
        '/amp/codigo/apache/redirect': { page: '/routes/amp/codigo/apache/redirect'},
        //--------------------------------
        '/codigo/asp/': { page: '/routes/codigo/asp'},
        '/amp/codigo/asp/': { page: '/routes/amp/codigo/asp'},
        '/codigo/asp/redirect/': { page: '/routes/codigo/asp/redirect'},
        '/amp/codigo/asp/redirect/': { page: '/routes/amp/codigo/asp/redirect'},
        //--------------------------------
        '/codigo/cgi/': { page: '/routes/codigo/cgi'},
        '/amp/codigo/cgi/': { page: '/routes/amp/codigo/cgi'},
        '/codigo/cgi/redirect/': { page: '/routes/codigo/cgi'},
        '/amp/codigo/cgi/redirect/': { page: '/routes/amp/codigo/cgi'},
        //--------------------------------
        '/codigo/coldfusion/': { page: '/routes/codigo/coldfusion'},
        '/amp/codigo/coldfusion/': { page: '/routes/amp/codigo/coldfusion'},
        '/codigo/coldfusion/redirect/': { page: '/routes/codigo/coldfusion'},
        '/amp/codigo/coldfusion/redirect/': { page: '/routes/amp/codigo/coldfusion'},
        //--------------------------------
        '/codigo/css/': { page: '/routes/codigo/css'},
        '/amp/codigo/css/': { page: '/routes/amp/codigo/css'},
        '/codigo/css/css02/': { page: '/routes/codigo/css/css02'},
        '/amp/codigo/css/css02/': { page: '/routes/amp/codigo/css/css02'},
        '/codigo/css/css03/': { page: '/routes/codigo/css/css03'},
        '/amp/codigo/css/css03/': { page: '/routes/amp/codigo/css/css03'},
        '/codigo/css/css04/': { page: '/routes/codigo/css/css04'},
        '/amp/codigo/css/css04/': { page: '/routes/amp/codigo/css/css04'},
        '/codigo/css/css05/': { page: '/routes/codigo/css/css05'},
        '/amp/codigo/css/css05/': { page: '/routes/amp/codigo/css/css05'},
        '/codigo/css/css06/': { page: '/routes/codigo/css/css06'},
        '/amp/codigo/css/css06/': { page: '/routes/amp/codigo/css/css06'},
        '/codigo/css/css07/': { page: '/routes/codigo/css/css07'},
        '/amp/codigo/css/css07/': { page: '/routes/amp/codigo/css/css07'},
        '/codigo/css/css08/': { page: '/routes/codigo/css/css08'},
        '/amp/codigo/css/css08/': { page: '/routes/amp/codigo/css/css08'},
        '/codigo/css/css09/': { page: '/routes/codigo/css/css09'},
        '/amp/codigo/css/css09/': { page: '/routes/amp/codigo/css/css09'},
        '/codigo/css/css10/': { page: '/routes/codigo/css/css10'},
        '/amp/codigo/css/css10/': { page: '/routes/amp/codigo/css/css10'},
        '/codigo/css/css11/': { page: '/routes/codigo/css/css11'},
        '/amp/codigo/css/css11/': { page: '/routes/amp/codigo/css/css11'},
        '/codigo/css/css12/': { page: '/routes/codigo/css/css12'},
        '/amp/codigo/css/css12/': { page: '/routes/amp/codigo/css/css12'},
        '/codigo/css/css13/': { page: '/routes/codigo/css/css13'},
        '/amp/codigo/css/css13/': { page: '/routes/amp/codigo/css/css13'},  
        '/codigo/css/anima_but/': { page: '/routes/codigo/css/anima_but'},
        '/amp/codigo/css/anima_but/': { page: '/routes/amp/codigo/css/anima_but'},
        //--------------------------------
        '/codigo/html5/': { page: '/routes/codigo/html5'},
        '/amp/codigo/html5/': { page: '/routes/amp/html5'},
        //--------------------------------
        '/codigo/Java/': { page: '/routes/codigo/Java'},
        '/amp/codigo/Java/': { page: '/routes/amp/codigo/Java'},
        //--------------------------------
        '/codigo/javascript/': { page: '/routes/codigo/javascript'},
        '/amp/codigo/javascript/': { page: '/routes/amp/codigo/javascript'},
        '/codigo/javascript/jscodigo1': { page: '/routes/codigo/javascript'},
        '/amp/codigo/javascript/jscodigo1': { page: '/routes/codigo/javascript'},
        '/codigo/javascript/jscodigo2': { page: '/routes/codigo/javascript'},
        '/amp/codigo/javascript/jscodigo2': { page: '/routes/codigo/javascript'},
        //--------------------------------
        '/codigo/knockout/': { page: '/routes/codigo/knockout'},
        '/amp/codigo/knockout/': { page: '/routes/amp/codigo/knockout'},
        //--------------------------------
        '/codigo/dotnet/': { page: '/routes/codigo/dotnet'},
        '/amp/codigo/dotnet/': { page: '/routes/amp/codigo/dotnet'},
        //--------------------------------
        '/codigo/php/': { page: '/routes/codigo/php'},
        '/amp/codigo/php/': { page: '/routes/amp/codigo/php'},
        '/codigo/php/redirect/': { page: '/routes/codigo/php/redirect'},
        '/amp/codigo/php/redirect/': { page: '/routes/amp/codigo/php/redirect'},
        '/codigo/php/procuraarquivo/': { page: '/routes/codigo/php/procuraarquivo'},
        '/amp/codigo/php/procuraarquivo/': { page: '/routes/amp/codigo/php/procuraarquivo'},
        '/codigo/php/procuradiretorio/': { page: '/routes/codigo/php/procuradiretorio'},
        '/amp/codigo/php/procuradiretorio/': { page: '/routes/amp/codigo/php/procuradiretorio'},
        //--------------------------------
        '/codigo/rubyonrails/': { page: '/routes/codigo/rubyonrails'},
        '/amp/codigo/rubyonrails/': { page: '/routes/amp/codigo/rubyonrails'},
        //======================================================================
        '/game/': { page: '/routes/game'}, 
        '/game/controleogodzilla/': { page: '/routes/game/controleogodzilla'},
        //======================================================================
        '/hub/': { page: '/routes/hub'}, 
        '/hubbusca/': { page: '/routes/hub/busca'}, 
        //======================================================================
        '/componentes/': { page: '/routes/componentes/componentes'}, 
        '/amp/componentes/': { page: '/routes/amp/componentes/componentes'}, 
        //======================================================================
        '/sitemap.xml': { page: '/sitemap.js'}
    }
  }
}


  




// next.config.js não é transformado por Babel.
// Portanto, você só pode usar os recursos javascript suportados pela sua versão do Node.js.
 
/*
module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Nota: nós fornecemos o webpack acima, para que você não precise dele
        // Realiza personalizações na configuração do webpack
        // Importante: retorna a configuração modificada

        // Example using webpack option
        //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
        return config
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config
    },
  }
*/

// buildId - (String) ID da compilação usado como um identificador exclusivo entre compilações.
// dev - (Booleano) Mostra se a compilação é feita no modo de desenvolvimento
// isServer - (Booleano) mostra se a configuração resultante será usada para compilação no lado do servidor (true) ou no lado do cliente (false)
// defaultLoaders - (Objeto) Contém objetos do carregador O Next.js usa internamente, para que você possa usá-los na configuração personalizada
// babel - (Objeto) Configuração do babel-loader para Next.js

/*
99/5000
A solução alternativa é suficiente e o bug está realmente no webpack, relacionado ao fs no destino da web.
*/