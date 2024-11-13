import { createStore } from 'vuex';

export default createStore({
  state: {
    juegos: []
  },
  mutations: {
    setJuegos(state, juegos) {
      state.juegos = juegos;
    },
    incrementarStock(state, codigo) {
      const juego = state.juegos.find(j => j.codigo === codigo);
      if (juego) juego.stock++;
    },
    disminuirStock(state, codigo) {
      const juego = state.juegos.find(j => j.codigo === codigo);
      if (juego && juego.stock > 0) juego.stock--;
    }
  },
  actions: {
    async fetchJuegos({ commit }) {
      const response = await fetch('juegos.json');
      const juegos = await response.json();
      commit('setJuegos', juegos);
    },
    incrementarStock({ commit }, codigo) {
      commit('incrementarStock', codigo);
    },
    disminuirStock({ commit }, codigo) {
      commit('disminuirStock', codigo);
    }
  },
  getters: {
    juegos: (state) => state.juegos
  }
});
