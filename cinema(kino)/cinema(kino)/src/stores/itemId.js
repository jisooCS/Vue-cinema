import { defineStore } from "pinia";
import instance from '@/api'

export const itemId = defineStore('itemId', {
    state: () => ({
        movie: null,
        tv: null
    }),
    actions: {
       async getItemId({type, id}) {
            try {
                let response = await instance.get(`${type}/${id}?language=ru-RU`)
                if(type == 'movie') {
                  this.movie = response.data  
                }else if(type == 'tv') {
                    this.tv = response.data
                }
            } catch (error) {
                console.log('Ошибка при получении данных по id' + error.message);
            }
        }
    }
})


