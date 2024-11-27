// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxt/icon',
        '@vueuse/nuxt',
        '@nuxt/ui',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        [
            '@nuxtjs/google-fonts',
            {
                families: ['Poppins', 'sans-serif'],
            },
        ],
    ],
    css: ['~/assets/css/global.css'],
})