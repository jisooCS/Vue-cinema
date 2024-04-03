<template>
   <router-link :to="`${type}/${id}`" class="btn__more">
        <img :src="iconMore" alt="">
        <span class="btn__more-text">Подробнее</span>
   </router-link>
</template>

<script setup>
import iconMore from '@/assets/images/more.svg'
const props = defineProps({
    type: String,
    id: Number
})
</script>

<style lang="scss">
.btn__more {
    width: max-content;
    border-radius: 10px;
    background: #149A03;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    &-text {
        color: #FFF;
        font-size: 20px;
    }
}

</style>

