import { defineStore } from "pinia";
import instance from '@/api'

export const top = defineStore('top', {
    state: () => ({
        top: null
    }),
    actions: {
       async getTop() {
            try {
                let response = await instance.get(`movie/top_rated?language=ru-RU`)
                this.top = response.data.results
            } catch (error) {
                console.log('Ошибка при получении топовых фильмов ' + error.message);
            }
        }
    }
})


