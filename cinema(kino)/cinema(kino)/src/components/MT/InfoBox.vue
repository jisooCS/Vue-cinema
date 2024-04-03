<template>
    <div class="infobox" :class="{active: open}">
        <img @click="$emit('close')" :src="closeIcon" alt="" class="infobox__close">
        <div class="infobox__block" v-if="current">
            <img v-lazy="imgUrl + current.backdrop_path" alt="" class="infobox__block-img">
            <div class="infobox__block-content">
                <div class="infobox__block-info">
                    <h1 class="infobox__block-info-title">{{ current.title || current.name }}</h1>
                    <p class="infobox__block-info-text">{{ current.overview || 'Нет описания' }}</p>
                    <p class="infobox__block-info-descr">
                        <span>{{ getYear }}{{ getGenres }}</span>
                        <span>{{ getTime }}</span>
                    </p>
                    <Actors :type="type" :id="current.id" :count="4"/>
                    <BtnMore :type="type" :id="current.id"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import './InfoBox.scss'
import closeIcon from '@/assets/images/close.svg'
import { imgUrl } from '@/url.js'
import { computed } from 'vue'

const props = defineProps({
    current: Object,
    open: Boolean,
    type: String
})

const getYear = computed(() => {
    let key = props.type == 'movie' ? 'release_date' : props.type == 'tv' ? 'first_air_date': ''
    return new Date(props.current[key]).getFullYear()
})

const getGenres = computed(() => props.current.genres.reduce((acc,item) => acc + ', ' + item.name, ''))


const getTime = computed(() => {
    let minutes = 
    props.type == 'movie' ? props.current.runtime :
    props.type == 'tv' ? props.current.episode_run_time[0] : ''
    let hours = Math.floor(minutes / 60)
    let leftMinutes = minutes % 60
    if(hours == 0) {
        return `${leftMinutes}m`
    }else {
        return `${hours}h ${leftMinutes}m`
    }
    
})



</script>
