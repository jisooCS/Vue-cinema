import { defineStore } from "pinia";
import instance from '@/api'

export const popular = defineStore('popular', {
    state: () => ({
        popularMovies: null,
        popularTvs: null
    }),
    actions: {
       async getPopular({ type, page = 1}) {
            try {
                let response = await instance.get(`${type}/popular?language=ru-RU&page=${page}`)
                if(type == 'movie') {
                    this.popularMovies = response.data.results
                }else if(type == 'tv') {
                    this.popularTvs = response.data.results
                }
            } catch (error) {
                console.log('Ошибка при получении популярных фильмов и сериалов' + error.message);
            }
        }
    }
})


