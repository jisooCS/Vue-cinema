<template>
    <div class="main__search">
        <div class="container">
            <input 
                type="text" 
                class="main__search-input" 
                placeholder="Найти фильм, сериал..."
                v-model="value"
                ref="input"
            >
            <div class="main__search-list" v-if="searchArray">
                <SearchContent 
                    v-for="item in searchArray"
                    :key="item.id"
                    :item="item"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import './Search.scss'
import SearchContent from './SearchContent.vue';
import { ref, watch, computed, onMounted } from 'vue'
import { search } from '@/stores/search'

const value = ref('')
const input = ref(null)
const searchStore = search()

let timer = null

watch(value, (val) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        searchStore.getSearchData(val)
    }, 500);
})

let searchArray = computed(() => searchStore.result)



onMounted(() => {
    input.value.focus()
})



</script>

