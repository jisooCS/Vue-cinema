import { defineStore } from "pinia";
import instance from '@/api'

export const upcoming = defineStore('upcoming', {
    state: () => ({
        upcoming: null
    }),
    actions: {
       async getUpcoming() {
            try {
                let response = await instance.get(`movie/upcoming?language=ru-RU`)
                this.upcoming = response.data.results
            } catch (error) {
                console.log('Ошибка при получении предстоящих фильмов ' + error.message);
            }
        }
    }
})


