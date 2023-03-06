import { reactive } from "vue";

const store = reactive({
    characters: [],
    count: 0,
    pages: 0,
    currentPage: 1,
    search: '',
})

export default store