import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      list: []
    },
    mutations: {
      addToList (state, product) {
        state.list.push(product)
      },
      removeProduct (state, productIndex) {
        let list = state.list
        state.cart = list.splice(productIndex, 1)
      }
    }
  })