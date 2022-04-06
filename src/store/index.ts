import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import { IRootState, IRootType } from './types'
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
// 封装一个单独的useStore()并返回useVuexStore()
export function useStore(): Store<IRootType> {
  return useVuexStore()
}
export default store
