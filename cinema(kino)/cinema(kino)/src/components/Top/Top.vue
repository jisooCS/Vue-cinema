<template>
    <section class="main__top">
        <h2 class="main__top-title">
            ТОП
            <span>10</span>
        </h2>
        <swiper 
            :navigation="true"
            :spaceBetween="23"
            :breakpoints="breakpoints"
            :modules="modules" 
            class="main__top-swiper"
        >
            <swiper-slide 
                v-for="(item, i) in top10"
                :key="item.id"
                class="main__top-swiper-item"
            >
               <div class="main__top-swiper-item-number">
                    <span> {{  i + 1 }}</span>
               </div>
               <img v-lazy="imgUrl + item.backdrop_path" alt="" class="main__top-swiper-item-img">
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup>
import { imgUrl } from '@/url'
import './Top.scss'
import { top } from '@/stores/top'
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const topStore = top()
topStore.getTop()

const top10 = computed(() => {
    if(topStore.top) {
        return topStore.top.slice(0,10)
    }
})

// swiper settings
const modules = ref([Navigation])

let breakpoints = ref({
    320: {
        slidesPerView: 1
    },
    576: {
        slidesPerView: 1
    },
    900: {
        slidesPerView: 2
    },
    1200: {
        slidesPerView: 2
    },
    1400: {
        slidesPerView: 3
    }
})




</script>

