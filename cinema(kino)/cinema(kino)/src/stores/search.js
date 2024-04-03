import { defineStore } from "pinia";
import instance from '@/api'

export const search = defineStore('search', {
    state: () => ({
        result: null
    }),
    actions: {
       async getSearchData(value) {
            try {
                let response = await instance.get(`search/multi?query=${value}&language=ru-RU`)
                this.result = response.data.results
            } catch (error) {
                console.log('Ошибка при поиске данных ' + error.message);
            }
        }
    }
})


