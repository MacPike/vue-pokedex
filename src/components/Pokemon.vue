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

export default {
    name: 'pokemon',
    computed: {
        pokemon() {
            return this.$store.state.pokemon;
        }
    },
    methods: {
        fetchPokemonInfo: function (pokeId) {
            this.$store.dispatch('getPokemon', this.pokeUrl + "/" + pokeId);
        }
    },
    created() {
        this.fetchPokemonInfo(1);
    }
}
</script>
