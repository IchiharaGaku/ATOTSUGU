
export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    'ress'
  ],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://http.nuxtjs.org
    '@nuxt/http',
    '@nuxtjs/apollo',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
  ],

  apollo: {
    clientConfigs: {
      default: {
        // Graphpack側のエンドポイントを指定します。
        httpEndpoint: 'http://localhost:4000/graphql',
        // Subscription用にWebSocketの設定も追加します。
        wsEndpoint: 'ws://localhost:4000/graphql',
        websocketsOnly: true, 
      }
    }
  },
  styleResources: {
    scss: [
      '@/assets/scss/foundation/_mixins.scss',
      '@/assets/scss/foundation/_variables.scss',
    ]
  },
  /*
  ** Server Middleware
  */
  serverMiddleware: {
    '/api': '~/api'
  },

  /*
  ** For deployment you might want to edit host and port
  */
  // server: {
  //  port: 8000, // default: 3000
  //  host: '0.0.0.0' // default: localhost
  // },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
