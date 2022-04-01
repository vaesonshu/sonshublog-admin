import { createStore } from 'vuex'
import login from './login/login'
import { IRootState } from './types'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'vaesonshu',
      age: 25
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
