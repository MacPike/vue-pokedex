<template>
  <div class="container">
    <h2>Pokedex</h2>
    <div class="row">
      <div class="col-sm-6">
        <ul class="list-group">
          <li class="list-group-item" v-for="(pokemon, index) in api.results">
            <a @click="fetchPokemonInfo(index)" class="capi">{{pokemon.name}}</a>
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
import pokemon from './Pokemon'
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
    fetchPokemons: function (listUrl) {
      this.$store.dispatch('getPokemons', listUrl);
    },
    fetchPokemonInfo: function (pokeId) {
      this.$store.dispatch('getPokemon', this.pokeUrl + "/" + (pokeId + 1));
    },
    next: function () {
      this.fetchPokemons(this.api.next)
    },
    previous: function () {
      this.fetchPokemons(this.api.previous)
    }
  },
  created: function () {
    this.fetchPokemons(this.pokeUrl);
  }
}
</script>

<style lang="scss">
.list-group-item {
  a {
    color: black;

    cursor: pointer;
    &:hover {
      text-shadow: 1px 1px 2px #CCC;
      text-decoration: none;
    }
  }
}
</style>

