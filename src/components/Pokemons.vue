<template>
  <div class="container">
    <h2>Pokedex</h2>
    <div class="row">
      <div class="col-sm-6">
        <ul class="list-group">
          <li class="list-group-item" v-for="(pokemon, index) in api.results">
            <a @click="getPokemon(index)">{{pokemon.name}}</a>
          </li>
        </ul>
        <button class="btn btn-primary" v-if="api.previous" click="previous" @click="previous">Vorige</button>
        <button class="btn btn-primary" v-if="api.next" click="next" @click="next">Volgende</button>
      </div>
      <div class="col-sm-6">
        <pokemon></pokemon>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import pokemon from './Pokemon'
const pokeUrl = "https://pokeapi.co/api/v2/pokemon";

export default {
  name: "PokemonList",
  components: {
    pokemon
  },
  data() {
    return {
      api: {},
    }
  },
  methods: {
    fetchPokemon: function (pokeUrl) {
      axios.get(pokeUrl)
        .then(({ data }) => this.api = data);
    },
    getPokemon: function (index) {
      console.log(index);
    },
    next: function () {
      this.fetchPokemon(this.api.next)
    },
    previous: function () {
      this.fetchPokemon(this.api.previous)
    }
  },
  created: function () {
    this.fetchPokemon(pokeUrl);
  }
}
</script>

<style scoped>

</style>
