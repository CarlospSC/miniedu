import { createStore } from 'vuex'

export default createStore({
  state: {
    usuarios: {
      

    }
  },
  mutations: {
    crearUsuario(state, payload){
      state.usuarios = payload
    }
  },
  actions: {
    accioncrearUsuario({commit}, usuario){
      commit('crearUsuario', usuario)
    }
  },
  modules: {
  }
})
