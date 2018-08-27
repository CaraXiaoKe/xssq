module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'novel-community',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'novel-community' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  // css: ['assets/main.css', 'bootstrap/dist/bootstrap-grid.css'],
  css: [
    { src: '~assets/css/main.scss', lang: 'scss' }
  ],
  router: {
    middleware: 'auth'
  },
  /*
  ** Build configuration
  */
  plugins: [],
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader') 
        vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader';
      }
    }
  }
}

