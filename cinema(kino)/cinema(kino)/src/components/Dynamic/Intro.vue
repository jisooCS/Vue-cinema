<template>
    <section class="intro">
        <img v-lazy="imgUrl + item.backdrop_path" alt="" class="intro__img">
        <div class="intro__block">
            <div class="intro__block-left">
                <h1 class="intro__block-left-title">{{ item.title || item.name }}</h1>
                <p class="intro__block-left-text"> {{ item.overview }}</p>
                <p class="intro__block-left-descr">
                    <span>{{getYear}}{{ getGenres }}</span>
                    <span>{{ getTime }}</span>
                </p>
            </div>
            <div class="intro__block-right">
                <img v-lazy="imgUrl + item.poster_path" alt="" class="intro__block-right-img">
            </div>
            <div class="intro__block-actors">
                <h2 class="intro__block-actors-title">В главных ролях</h2>
                <Actors :type="type" :id="item.id" :count="6"/>
            </div>
        </div>
    </section>
</template>

<script setup>
import { imgUrl } from '@/url'
import { computed } from 'vue'

const props = defineProps({
    item: Object,
    type: String
})



const getYear = computed(() => {
    let key = props.type == 'movie' ? 'release_date' : props.type == 'tv' ? 'first_air_date': ''
    return new Date(props.item[key]).getFullYear()
})

const getGenres = computed(() => props.item.genres.reduce((acc,item) => acc + ', ' + item.name, ''))


const getTime = computed(() => {
    let minutes = 
    props.type == 'movie' ? props.item.runtime :
    props.type == 'tv' ? props.item.episode_run_time[0] : ''
    let hours = Math.floor(minutes / 60)
    let leftMinutes = minutes % 60
    if(hours == 0) {
        return `${leftMinutes}m`
    }else {
        return `${hours}h ${leftMinutes}m`
    }
    
})



</script>

