import colors from "tailwindcss/colors";

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['nuxt-quasar-ui', '@nuxtjs/tailwindcss'],
    tailwindcss: {
        config: {
            prefix: "tw-",
            theme: {
                colors: {
                    primary: colors.sky,
                    background: colors.white
                }
            }
        }
    },
    quasar: {
        plugins: ['Notify'],
        config: {
            brand: {
                primary: colors.sky[500],
                background: colors.white
            },
        },
    },
    vite:{
        server: {
            origin: 'http://localhost:8080',
            proxy: {
                '/Api': {
                    target: 'http://localhost:8080',
                    changeOrigin: true,
                }
            },
        },
    }
})