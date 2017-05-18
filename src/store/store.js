import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    api: {},
    pokemon: {
      sprites: {},
      types: [],
      moves: []
    }
  },
  getters: {
    api(state) {
      return state.api;
    },
    pokemon(state) {
      return state.pokemon;
    }
  },
  mutations: {
    getList(state, payload) {
      axios.get(payload).then(({
        data
      }) => state.api = data);
    },
    getInfo(state, pokeId) {
      axios.get(pokeId)
        .then(({
          data
        }) => state.pokemon = data);
    }
  },
  actions: {
    getPokemons(context, payload) {
      context.commit('getList', payload);
    },
    getPokemon(context, pokeId) {
      context.commit('getInfo', pokeId);
    }
  }
})
