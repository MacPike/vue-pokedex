<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            {{pokemon.name}}
        </div>
        <div class="panel-body">
            <img v-for='sprite in pokemon.sprites' :src='sprite' class="img-rounded">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
const pokeUrl = "https://pokeapi.co/api/v2/pokemon";
export default {
    name: 'pokemon',
    data() {
        return {
            pokemon: {
                sprites: {}
            },
            pokeId: 1
        }
    },
    methods: {
        fetchPokemonInfo: function () {
            axios.get(pokeUrl + "/" + this.pokeId)
                .then(({ data }) => this.pokemon = data);
        }
    },
    created() {
        this.fetchPokemonInfo();
    }
}
</script>
