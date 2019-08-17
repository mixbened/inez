import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import store from './store.js'


Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
