<template>
    <section class="main__content" v-if="content">
        <h2 class="main__content-title">
           {{ title }}
            <img :src="arrowIcon" alt="">
        </h2>
        <swiper 
            :navigation="true"
            :spaceBetween="25"
            :breakpoints="breakpoints"
            :modules="modules" 
            class="main__content-swiper"
        >
            <swiper-slide 
                v-for="item in content"
                :key="item.id"
                class="main__content-swiper-item"
                @click="getItem(item)"
            >
                <img v-lazy="imgUrl + item.backdrop_path" alt="" class="main__content-swiper-item-img">
                <h2 class="main__content-swiper-item-title">{{ item.title || item.name }}</h2>
            </swiper-slide>
            <swiper-slide class="main__content-swiper-item">
                <router-link 
                    :to="type"
                    class="main__content-swiper-item-page"
                >
                    <img :src="arrowIcon" alt="">
                    Все {{ title }}
                </router-link>
            </swiper-slide>
        </swiper>
        <InfoBox
            :current="currentItem"
            :open="open"
            :type="type"
            @close="close"
        />
    </section>
    <Loader v-else/>
</template>

<script setup>
import './Content.scss'
import arrowIcon from '@/assets/images/arrow.png'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ref, computed, onMounted } from 'vue'
import { popular } from '@/stores/popular.js'
import { imgUrl } from '@/url.js'
import InfoBox from './InfoBox.vue';
import { itemId } from '@/stores/itemId.js'

const props = defineProps({
    type: String
})

const popularStore = popular()
popularStore.getPopular({type: props.type})

const content = computed(() => props.type == 'movie' ? popularStore.popularMovies : props.type == 'tv' ? popularStore.popularTvs : '')

const title = computed(() => props.type == 'movie' ? 'Фильмы' : props.type == 'tv' ? 'Сериалы' : '')


// функционал при клике

let itemIdStore = itemId()
let currentItem = ref(null)
let open = ref(false)


const getItem = async (item) => {
   if(disableClick.value) {
        return 
   }
   currentItem.value = null
   await itemIdStore.getItemId({type:props.type, id: item.id})
   currentItem.value = props.type == 'movie' ? itemIdStore.movie : props.type == 'tv' ? itemIdStore.tv: ''
   open.value = true
}

const close = () => {
    open.value = false
    setTimeout(() => {
        currentItem.value = null
    }, 500);
}

const disableClick = ref(false)
const checkSize = () => {
    const size = 800
    disableClick.value = window.innerWidth < size
}

onMounted(() => {
  window.addEventListener('resize', checkSize)  
})



// swiper settings
const modules = ref([Navigation])

let breakpoints = ref({
    320: {
        slidesPerView: 1
    },
    576: {
        slidesPerView: 2
    },
    900: {
        slidesPerView: 3
    },
    1200: {
        slidesPerView: 4
    },
    1400: {
        slidesPerView: 5
    }
})


</script>

