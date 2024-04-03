<template>
     <router-link :to="`${item.media_type}/${item.id}`" class="main__search-list-item">
        <img v-lazy="imgUrl + item.backdrop_path" alt="" class="main__search-list-item-img">
        <h2 class="main__search-list-item-title"> {{ item.title || item.name }}</h2>
     </router-link>
</template>

<script setup>
import { imgUrl } from '@/url'
const props = defineProps({
    item: Object
})

console.log(props.item);

</script>

