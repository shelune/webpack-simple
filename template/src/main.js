import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

Vue.use(VueRouter)
Vue.use(VueI18n)

const messages = {}

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

const router = new VueRouter({
  routes: [
    
  ]
})

new Vue({
  i18n,
  router,
  el: '#{{ name }}',
  render: h => h(App)
})
