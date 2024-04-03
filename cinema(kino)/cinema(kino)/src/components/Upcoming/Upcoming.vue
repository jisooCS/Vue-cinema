<template>
    <section class="main__upcoming" v-if="upcomingMovies">
        <UpcomingItem
            v-for="(movie,i) in upcomingMovies"
            :key="movie.id"
            :movie="movie"
            :i="i"
            :activeItem="activeItem"
            :nextMovie="upcomingMovies[upcomingMovies.length - 1 == i ? 0 : i + 1]"
            @nextSlide="nextSlide"
        />
    </section>
    <Loader v-else/>
</template>

<script setup>
import './Upcoming.scss'
import UpcomingItem from './UpcomingItem.vue';
import { upcoming } from '@/stores/upcoming'
import { computed, ref, onMounted } from 'vue' 

const upcomingStore = upcoming()
upcomingStore.getUpcoming()

const upcomingMovies = computed(() => upcomingStore.upcoming)

let activeItem = ref(0)
let timeout = null

const next = () => {
    if(upcomingMovies.value.length - 1 == activeItem.value) {
        activeItem.value = 0
        console.log(0);
    }else {
        activeItem.value++
        console.log(1);
    }
    timeout = setTimeout(() => next(),5000);
}

const nextSlide = () => {
    next()
    clearTimeout(timeout)
}


onMounted(() => {
    timeout = setTimeout(() => next(),5000);
})


</script>

