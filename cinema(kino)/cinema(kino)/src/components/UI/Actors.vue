<template>
    <div class="actors" v-if="actorsArray">
        <div class="actors__item" v-for="actor in actorsArray" :key="actor.id">
            <img v-lazy="imgUrl + actor.profile_path" alt="">
            <p>{{ actor.name }}</p>
        </div>
    </div>
</template>

<script setup>
import { imgUrl } from '@/url'
import { actors } from '@/stores/actors'
import { computed } from 'vue'

const actorsStore = actors()

actorsStore.getActors({type: props.type, id:props.id})

const actorsArray = computed(() => {
    let result = 
    props.type == 'movie' ? actorsStore.actorsMovie :
    props.type == 'tv' ? actorsStore.actorsTv : ''
    if(result) {
        return result.slice(0,props.count)
    }
})



const props = defineProps({
    type: String,
    id: Number,
    count: Number
})

</script>

<style lang="scss">


.actors {
    max-width: 470px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    &__item {
        border-radius: 25px;
        border: 1px solid #FFF;
        background: rgba(20, 20, 20, 0.50);
        display: flex;
        align-items: center;
        gap: 10px;
        padding-right: 15px;
        & img {
            border-radius: 50%;
            width: 45px;
            height: 50px;
            object-fit: cover;
        }
        & p {
            color: #FFF;
            font-family: Raleway;
            font-size: 16px;
        }
    }
}

</style>