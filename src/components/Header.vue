<template>
    <header class="main-header">
        <div class="container">
            <img src="/public/logo.png" alt="">
            <h1>{{ title }}</h1>
        </div>

    </header>
</template>

<script>
export default {
    data() {
        return {
            title: 'YU-GI-OH'
        }
    }

}
</script>

<style lang="scss" scoped>
@use'../style/partials/variables' as *;

.container {
    display: flex;
    align-items: center;
}

.main-header {
    text-align: center;
    font-size: 2rem;
    background-color: $bg-color;
    padding: 1rem 0;
}

img {
    width: 150px;
    margin: 20px;
}
</style>