require('dotenv').config()

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Чито-ра - Ресторан грузинской кухни в Москве',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Чито-ра - Ресторан грузинской кухни в Москве' },
            { hid: 'yandex-verification', name: 'yandex-verification', content: 'b9ed21185129ea7b' },
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700|Montserrat:500|PT+Serif:400,700&display=swap' },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css', integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU', crossorigin: 'anonymous' },
            { rel: 'apple-icon', sizes: '192x192', href: '/apple-icon.png' },
            { rel: 'apple-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
        ]
    },
    /*
    ** Customize the progress bar color
    */

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/dotenv',
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

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'auth/login',
                        method: 'POST',
                        propertyName: 'meta.access_token'
                    },
                    logout: {
                        url: 'auth/logout',
                        method: 'GET',
                    },
                    user: {
                        url: 'auth/user',
                        method: 'GET',
                        propertyName: 'data'
                    }
                },
                rewriteRedirects: true,
                resetOnError: true,
                redirect: {
                    login: '/login',
                    logout: '/login',
                    home: '/'
                },
            }
        }
    },

    axios: {
        baseURL: 'https://apidev.chito-ra.ru/api'
        //baseURL: process.env.BASE_URL
    },
    css: [
        '~assets/styles/app.scss'
    ],
    plugins: [
        { src: '@plugins/vue-yandex-maps', ssr: false },
        { src: '@plugins/VueModal'},
        { src: '@plugins/VueAgile', ssr: false },
        { src: '@plugins/index.js' }
    ],

    loading: { color: '#282b32' },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend (config, { isDev, isClient }) {
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

