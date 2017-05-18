<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <span class="capi">{{pokemon.name}}</span> -
            <span>Weight: {{pokemon.weight}}</span> -
            <span>Height: {{pokemon.height}}</span>
        </div>
        <div class="panel-body">
            <img v-for='sprite in pokemon.sprites' :src='sprite' class="img-rounded" />
        </div>
        <table class="table table-border">
            <tr v-bind:colspan="pokemon.types.length">
                <th v-bind:colspan="pokemon.types.length" class="text-center">Types</th>
            </tr>
            <tr>
                <td v-for='typ in pokemon.types'>{{typ.type.name}}</td>
            </tr>
        </table>
        <h3>Moves</h3>
        <ul class="list-group">
            <li v-for="move in pokemon.moves" class="list-group-item">{{move.move.name}}</li>
        </ul>
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

<style lang="scss">
.table {
    td,
    th {
        padding: 3px;
    }
}

.capi {
    text-transform: capitalize;
}
</style>

