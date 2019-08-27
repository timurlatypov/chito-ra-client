module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'chito-ra',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700|Montserrat:500|PT+Serif:400,700&display=swap' },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css', integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU', crossorigin: 'anonymous' },
        ]
    },
    /*
    ** Customize the progress bar color
    */

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth'
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
        baseURL: 'http://api.test/api'
    },
    css: [
        '~assets/styles/app.scss'
    ],
    plugins: [
        '@plugins/VueModal',
        '@plugins/index.js'
    ],

    loading: { color: '#3B8070' },
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
                    exclude: /(node_modules)/
                })
            }
        }
    }
}

