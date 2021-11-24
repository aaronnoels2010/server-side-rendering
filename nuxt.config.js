// @ts-ignore
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-first-nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
    'nuxt-buefy'
  ],
  router: {
    middleware: ['auth', 'logger']
  },
  auth: {
    redirect: {
      login: '/login', // redirect user when not connected
      logout: '/logout',
      callback: '/callback',
      home: '/'
    },
    strategies: {
      auth0: {
        audience: process.env.AUTH0_AUDIENCE,
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_BASE_URL
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: require('sass')
      }
    },
    postcss: {
      plugins: {
        autoprefixer: {},
        cssnano: { preset: 'default' },
        'postcss-import': {},
        'postcss-url': {}
      },
      preset: {
        stage: 2
      }
    }
  },
  serverMiddleware: [{
    path: '/api',
    handler: '~/api/index.ts'
  }]
}
