<template>
    <router-link :to="`${type}/${item.id}`" class="main__media-list-item">
        <img v-lazy="imgUrl + item.backdrop_path" alt="" class="main__media-list-item-img">
        <h2 class="main__media-list-item-title"> {{ item.title || item.name }}</h2>
    </router-link>
</template>

<script setup>
import { imgUrl} from '@/url'
const props = defineProps({
    item: Object,
    type: String
})

</script>

