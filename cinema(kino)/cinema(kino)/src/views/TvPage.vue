<template>
    <main class="main">
        <Dynamic type="tv"/>
    </main>
</template>

<script setup>
import Dynamic from '../components/Dynamic/Dynamic.vue';
import { inject, onUpdated } from 'vue'

const reload = inject('reload')

onUpdated(() => {
  reload()  
})
</script>

