// https://nuxt.com/docs/api/configuration/nuxt-config
/*
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true }
})
*/

export default defineNuxtConfig({
    devtools: { enabled: true },
    typescript: {
        typeCheck: true,// 빌드 시 타입 검사를 활성화
        shim: false,
    },
    ssr: true,
    app: {
        head: {
            title: 'DAHEE NUXT TEST',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            script: [
                {src: 'https://accounts.google.com/gsi/client', async: true, defer: true} //google
            ]
        },
    },
    modules: [
        'nuxt-quasar-ui',
        'nuxt-vue3-google-signin'
    ],
    googleSignIn: {
        clientId: '클라이언트ID'
    },
    quasar: { /* */ },
    compatibilityDate: "2024-08-12"
});