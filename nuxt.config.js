require('dotenv').config({path: `.env.${process.env.ENV ? process.env.ENV : 'production'}`})

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Чито-ра - Ресторан грузинской кухни в Москве',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Чито-ра - Ресторан грузинской кухни в Москве'},
      {hid: 'yandex-verification', name: 'yandex-verification', content: 'b9ed21185129ea7b'},
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700|Montserrat:500|PT+Serif:400,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
        integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
        crossorigin: 'anonymous'
      },
      {rel: 'apple-icon', sizes: '192x192', href: '/apple-icon.png'},
      {rel: 'apple-icon', sizes: '72x72', href: '/apple-icon-72x72.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}
    ]
  },
  /*
  ** Customize the progress bar color
  */

  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    // '@nuxtjs/auth',
    ['vue-scrollto/nuxt', {
      container: "body",
      duration: 700,
      easing: "ease",
      offset: -120,
      force: true,
      cancelable: true,
      onStart: false,
      onDone: false,
      onCancel: false,
      x: false,
      y: true
    }]
  ],

  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false
  },

  env: {
    baseUrl: process.env.BASE_URL,
    apiUrl: process.env.API_URL,
    oauthUrl: process.env.BASE_URL,

    socialClientIds: process.env.NODE_ENV === 'development' ? {
      vkontakte: '7480729',
      facebook: '550233905865974',
      yandex: 'd17eb921265c4d278b3f2bfbfd2580c6',
      google: '655761489797-akg72ju2uklkiu2iuqcckont1hngrorr.apps.googleusercontent.com',
      mailru: '779210'
    } : {
      vkontakte: '7480729',
      facebook: '550233905865974',
      yandex: 'd17eb921265c4d278b3f2bfbfd2580c6',
      google: '655761489797-akg72ju2uklkiu2iuqcckont1hngrorr.apps.googleusercontent.com',
      mailru: '779210',
    },
    fakeUserTokens: {
      access_token: '',
      refresh_token: ''
    }
  },

  axios: {
    baseURL: process.env.apiUrl,
    //baseURL: 'https://api.chito-ra.ru/api'
    //baseURL: process.env.BASE_URL
  },
  css: [
    '~assets/styles/app.scss'
  ],
  plugins: [
    {src: '@plugins/vue-authenticate', mode: 'client'},
    {src: '@plugins/vue-yandex-maps', ssr: false},
    {src: '@plugins/VueModal'},
    {src: '@plugins/VueAgile', ssr: false},
    {src: '@plugins/index.js'},
    '@plugins/axios.js',
  ],

  loading: {color: '#C05621'},

  buildModules: [
    ['@nuxtjs/dotenv', {filename: `.env.${process.env.ENV ? process.env.ENV : 'production'}`}]
  ],

  recaptcha: {
    hideBadge: true,
    siteKey: process.env.RECAPCHA_KEY,
    version: 3
  },

  mq: {
    defaultBreakpoint: 'default',
    breakpoints: {
      smMax: 768,
      mdMax: 1024,
      lgMax: 1280,
      xl: Infinity
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    }
  }
}

