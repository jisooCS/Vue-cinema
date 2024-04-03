<template>
   <section class="info">
    <div class="container">
        <div class="info__box">
            <div class="info__box-item" v-for="item in info" :key="item.name">
                <span class="info__box-item-name">{{ item.name }}</span>
                <span class="info__box-item-value">{{ item.value }}</span>
            </div>
        </div>
    </div>
   </section>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    item: Object
})

console.log(props.item);

const info = computed(() => {
    return [
        {
            name: 'Бюджет',
            value: props.item.budget ? '$' + props.item.budget : 'Неизвестно'
        },
        {
            name: 'Сборы',
            value: props.item.revenue ? '$' + props.item.revenue : 'Неизвестно'
        },
        {
            name: 'Статус',
            value: props.item.status
        },
        {
            name: 'Исходное название',
            value: props.item.title || props.item.name
        },
        
    ]
})

</script>
