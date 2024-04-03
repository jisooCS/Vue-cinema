<template>
    <div class="main__dynamic" v-if="item">
        <Intro :item="item" :type="type"/>
        <Info :item="item"/>
        <Rec :recData="recData" :type="type"/>
    </div>
    <Loader v-else/>
</template>

<script setup>
import './Dynamic.scss'
import Intro from './Intro.vue';
import { itemId } from '@/stores/itemId'
import {  rec } from '@/stores/rec'
import { useRoute } from 'vue-router'
import { computed, onBeforeUnmount } from 'vue'
import Info from './Info.vue';
import Rec from './Rec.vue';

const route = useRoute()


const props = defineProps({
    type: String
})

const itemStore = itemId()
const recStore = rec()
itemStore.getItemId({type: props.type, id: route.params.id})
recStore.getRec({type: props.type, id: route.params.id})

const item = computed(() => 
    props.type == 'movie' ? itemStore.movie :
    props.type == 'tv' ? itemStore.tv : '')
    
const recData = computed(() => {
    let array = 
    props.type == 'movie' ? recStore.recMovies :
    props.type == 'tv' ?  recStore.recTvs : ''
    if(array) {
        return array.slice(0,4)
    }
})


    
onBeforeUnmount(() => {
    itemStore.movie = itemStore.tv = null
})

</script>
