module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  /*
  ** Global CSS
  */
  build: {
    vendor: ['vuetify', 'vue-i18n'],
    loader: [
      {
        test: /\/.styl$/,
        loader: ['style', 'css', 'stylus']
      }
    ]
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~plugins/vuetify.js', '~/plugins/i18n.js'],
  css: ['~assets/css/main.css', '~assets/css/app.styl'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' }
};
