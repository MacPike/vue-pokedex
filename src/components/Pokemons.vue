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
        <button class="btn btn-primary" v-if="api.previous" @click="previous">Vorige</button>
        <button class="btn btn-primary" v-if="api.next" @click="next">Volgende</button>
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
//const pokeUrl = "https://pokeapi.co/api/v2/pokemon";

export default {
  name: "PokemonList",
  components: {
    pokemon
  },
  computed: {
    api() {
      return this.$store.state.api;
    }
  },
  methods: {
    fetchPokemon: function (listUrl) {
      this.$store.dispatch('getPokemon', listUrl);
    },
    next: function () {
      this.fetchPokemon(this.api.next)
    },
    previous: function () {
      this.fetchPokemon(this.api.previous)
    }
  },
  created: function () {
    this.fetchPokemon(this.pokeUrl);
  }
}
</script>

<style scoped>

</style>
