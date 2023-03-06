<template>
    <div>
        <div>
            <input class="search" type="text" v-model="store.search" placeholder="Filtra per nome">
        </div>

    </div>
</template>

<script>
import store from '../store'

export default {
    data() {
        return {
            // search: '',
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin: 24px 0;
}

.search {
    border: 1px solid black;
    line-height: 38px;
    padding: 0 20px;
    font-size: 24px;
    border-radius: 10px;
}
</style>