<template>
    <main>
        <ul class="container">
            <li v-for="character in characters" :key="charachter.id">
                nome personaggio
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    data() {
        return {
            characters: []
        }
    }

}
</script>

<style lang="scss" scoped></style>