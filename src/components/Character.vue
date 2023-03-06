<template>
    <li class="card">
        <img :src="character.card_images[0].image_url" alt="">
        <h3>{{ character.name }}</h3>
        <h5>{{ character.archetype }}</h5>
    </li>
</template>

<script>
export default {
    props: {
        // Passo l'oggetto intero come prop
        character: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
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