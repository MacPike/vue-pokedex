import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    api: {},
    pokemon: {
      sprites: {}
    }
  },
  getters: {
    api(state) {
      return state.api;
    }
  },
  mutations: {
    getList(state, payload) {
      axios.get(payload).then(({
        data
      }) => state.api = data);
    }
  },
  actions: {
    getPokemon(context, payload) {
      context.commit('getList', payload);
    }
  }
})
