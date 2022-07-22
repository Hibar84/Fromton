import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fromton',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css','~/assets/css/font.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // Firebase
    '@nuxtjs/firebase',
    // Pinia
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },


  // Firebase configuration
  firebase: {
    config:{
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "cheese-84me216.firebaseapp.com",
      databaseURL: "https://cheese-84me216-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "cheese-84me216",
      storageBucket: "cheese-84me216.appspot.com",
      messagingSenderId: "314295880760",
      appId: "1:314295880760:web:1d8fe2e6ae1720bc94aacd",
      measurementId: "G-3FCDQKVRXK"
    },
    services: {
      auth: true,
      firestore : true
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
})
