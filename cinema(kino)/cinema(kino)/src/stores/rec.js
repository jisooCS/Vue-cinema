import { defineStore } from "pinia";
import instance from '@/api'

export const rec = defineStore('rec', {
    state: () => ({
        recMovies: null,
        recTvs: null
    }),
    actions: {
       async getRec({ type, id}) {
            try {
                let response = await instance.get(`${type}/${id}/recommendations?language=ru-RU`)
                if(type == 'movie') {
                    this.recMovies = response.data.results
                }else if(type == 'tv') {
                    this.recTvs = response.data.results
                }
            } catch (error) {
                console.log('Ошибка при получении рекомендованных данных' + error.message);
            }
        }
    }
})


