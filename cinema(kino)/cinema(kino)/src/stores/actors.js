import { defineStore } from "pinia";
import instance from '@/api'

export const actors = defineStore('actors', {
    state: () => ({
        actorsMovie: null,
        actorsTv: null
    }),
    actions: {
       async getActors({type, id}) {
            try {
                let response = await instance.get(`${type}/${id}/credits?language=ru-RU`)
                if(type == 'movie') {
                    this.actorsMovie = response.data.cast
                }else if(type == 'tv') {
                    this.actorsTv = response.data.cast
                }
            } catch (error) {
                console.log('Ошибка при получении данных актеров' + error.message);
            }
        }
    }
})


