<template>
    <section class="rec">
        <div class="container">
            <h2 class="rec__title">
                {{ !!recData ? 'Рекомендации' : 'Рекомендаций нет' }}
            </h2>
            <div class="rec__list">
                <router-link :to="`${item.id}`" class="rec__list-item" v-for="item in recData" :key="item.id">
                    <img v-lazy="imgUrl + item.backdrop_path" alt="" class="rec__list-item-img">
                    <h2 class="rec__list-item-title"> {{ item.title || item.name }}</h2>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { imgUrl } from '@/url'
const props = defineProps({
    recData: Array,
    type: String
})

</script>
