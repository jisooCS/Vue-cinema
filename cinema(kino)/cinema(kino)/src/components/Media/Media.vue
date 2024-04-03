<template>
    <div class="container" v-if="media">
        <div class="main__media">
            <h2 class="main__media-title">
                {{ type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}
            </h2>
            <div class="main__media-list">
                <MediaItem 
                    v-for="item in media"
                    :key="item.id"
                    :item="item"
                    :type="type"
                />
            </div>
        </div>
        <vue-awesome-paginate
            :total-items="10000"
            :items-per-page="20"
            :max-pages-shown="3"
            v-model="currentPage"
            :on-click="onClickHandler"
        />
    </div>
    <Loader v-else/>
</template>

<script setup>
import './Media.scss'
import MediaItem from './MediaItem.vue';
import { popular } from '@/stores/popular'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const currentPage = ref(1);

const props = defineProps({
    type: String
})

const popularStore = popular()
popularStore.getPopular({type: props.type, page: 1})

const media = computed(() => 
props.type == 'movie' ? popularStore.popularMovies : 
props.type == 'tv' ? popularStore.popularTvs : '')



const onClickHandler = async(page) => {
    await popularStore.getPopular({type: props.type, page: page})
    router.push({ name: props.type, query: { currentPage: page}})
};



</script>

<style>
.pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>

