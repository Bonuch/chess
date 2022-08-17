export default {
    server: {
        port: 8082,
        host: "0.0.0.0"
    },
    watchers: {
        webpack: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    env: {
        appHost: process.env.APP_HOST,
        paymentHeader: process.env.API_SECRET_KEY,
        NODE_ENV: process.env.NODE_ENV,
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico'},
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: true
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&?family=Jost:wght@500&?family=Montserrat:wght@400;500;600;800&display=swap",
            },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'normalize.css/normalize.css',
        'vue-stripe-menu/dist/vue-stripe-menu.css',
        '~/assets/scss/main.scss',
        "swiper/swiper-bundle.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {src: '~/plugins/directive.js', ssr: false},
        {src: '~/plugins/helpers.js', ssr: true},
        { src: '~plugins/aos.js', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    styleResources: {
        scss: [
            './assets/scss/vars.scss'
        ],
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "@nuxtjs/i18n",
        "@nuxtjs/axios",
        "@nuxtjs/dotenv",
        "@nuxtjs/dayjs",
        "cookie-universal-nuxt",
        "@nuxtjs/style-resources"
    ],

    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'dolyame-complete___ru',
                path: '/dolyame-complete',
                component: resolve(__dirname, 'pages/checkout-complete/index.vue')
            });
            routes.push({
                name: 'dolyame-complete___en',
                path: '/en/dolyame-complete',
                component: resolve(__dirname, 'pages/checkout-complete/index.vue')
            });
        },
    },

    dayjs: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
        plugins: [
            'utc', // import 'dayjs/plugin/utc'
            'timezone' // import 'dayjs/plugin/timezone'
        ] // Your Day.js plugin
    },

    i18n: {
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en.js',
                // domain: process.env.DOMAIN_ENG
            },
            {
                code: 'ru',
                name: 'Русский',
                file: 'ru.js',
                // domain: process.env.DOMAIN_RUS
            }
        ],
        // differentDomains: true,
        defaultLocale: 'ru',
        langDir: 'lang/',
        lazy: true,
        vueI18nLoader: true
    },

    axios: {
        baseURL: process.env.API_BASE_URL,
        browserBaseURL: process.env.API_BROWSER_BASE_URL,
        withCredentials: true,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                preserveLineBreaks: false,
                collapseWhitespace: true
            }
        },
        extractCSS: {
            ignoreOrder: true,
        },
        // loader: {
        //   test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        //   use: [{
        //     loader: 'url-loader',
        //     options: {
        //       esModule: false,
        //       limit: 1000, // 1kB
        //       name: 'img/[name].[contenthash:7].[ext]'
        //     }
        //   }]
        // },
        // optimization: {
        //   splitChunks: {
        //     cacheGroups: {
        //       styles: {
        //         name: 'styles',
        //         test: /\.(scss|css|vue)$/,
        //         chunks: 'all',
        //         enforce: true
        //       }
        //     }
        //   },
        // },
        postcss: {
            order: "presetEnvAndCssnanoLast",
            plugins: {
                autoprefixer: {},
                cssnano: (process.env.NODE_ENV === 'production') ? {
                    preset: [
                        "default",
                        {
                            discardComments: {
                                removeAll: true,
                            },
                        },
                    ],
                } : false, // disable cssnano when not in production
            },
        },
    },

    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type)
            }
        }
    },
}
