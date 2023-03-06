<template>
    <main class="main">
        <div class="container">
            <Filters />
        </div>
        <div class="container">
            {{ store.search }}
        </div>
        <ul class="container">
            <!-- <li v-for="character in characters" :key="character.id" class="card">
                <img :src="character.card_images[0].image_url" alt="">
                <h3>{{ character.name }}</h3>
                <h5>{{ character.archetype }}</h5>
            </li> -->
            <Character v-for="element in characters" :key="element.id" :character="element" />

        </ul>
    </main>
</template>

<script>
import axios from 'axios'

import store from '../store'

import Character from './Character.vue'
import Filters from './Filters.vue'



export default {
    components: {
        Character,
        Filters
    },

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
                .then((res) => {
                    console.log(res.data.data)
                    this.characters = res.data.data

                })
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
    background-color: chocolate;
}

img {
    width: 300px;
    padding: 25px;
}

.container {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    text-align: center;
}

.card {
    border: 4px solid black;
    background-color: darkolivegreen;
}


h5 {
    margin-bottom: 20px;
}
</style>