<template>
    <Transition name="upcoming">
        <div class="main__upcoming-item" v-if="activeItem == i">
        <img v-lazy="imgUrl + movie.backdrop_path" alt="" class="main__upcoming-item-img">
        <div class="main__upcoming-item-content">
            <h1 class="main__upcoming-item-content-title">
              {{ movie.title }}
            </h1>
            <p class="main__upcoming-item-content-text">
              {{ movie.overview }}
            </p>
            <BtnMore type="movie" :id="movie.id"/>
        </div>
        <div class="main__upcoming-item-next" @click="$emit('nextSlide')">
            <img :src="imgUrl + nextMovie.backdrop_path" alt="" class="main__upcoming-item-next-img">
            <div class="main__upcoming-item-next-info">
                <span>Следующий</span>
                <h2>{{ nextMovie.title }}</h2>
            </div>
        </div>
    </div>
    </Transition>

</template>

<script setup>
import { imgUrl } from '@/url'
const props = defineProps({
    movie: Object,
    i: Number,
    nextMovie: Object,
    activeItem: Number
})

</script>

