import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);
const pokemonsUrl = "https://pokeapi.co/api/v2/pokemon";
const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

export default {

}
export const store = new Vuex.Store({
  state: {
    api: {},
    pokemons: [],
    pokemon: {
      sprites: {}
    },
  },
  methods: {
    fetchPokemon: function (pokemonsUrl) {
      axios.get(pokeUrl)
        .then(({
          data
        }) => this.api = data);
    },
    created: function () {
      this.fetchPokemon(pokemonsUrl);
    }
  }
})
