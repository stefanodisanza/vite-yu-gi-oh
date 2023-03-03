<template>
    <main class="main">
        <ul class="container">
            <li v-for="character in characters" :key="charachter.id">
                nome personaggio
            </li>
        </ul>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            characters: []
        }
    },
    methods: {
        fetchCharacters() {
            console.log('fetching data')
            //fare la chiamata in get all'end point:
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        }
    },
    created() {
        this.fetchCharacters()

    }
}
</script>

<style lang="scss" scoped>
.main {
    padding: 100px 0;
}
</style>