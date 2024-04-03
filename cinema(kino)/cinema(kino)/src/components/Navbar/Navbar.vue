<template>
    <nav class="nav" :class="{active: scrolled > 30 }">
        <div class="container">
            <div class="nav__box">
                <router-link to="/" class="logo">
                    <img :src="logo" alt="">
                </router-link>
                <button class="nav__menu" @click="burger = true">
                    <img :src="menuIcon" alt="">
                </button>
                <ul class="nav__box-list" :class="{active: burger}">
                    <button class="nav__close" @click="burger = false">
                        <img :src="closeIcon" alt="">
                    </button>
                    <li v-for="page in pages" :key="page.name">
                        <router-link @click="burger = false" :to="page.url" class="nav__box-list-link">
                            <template v-if="page.name">
                                {{ page.name }}
                            </template>
                            <template v-else>
                               <img :src="page.img" alt="">
                            </template>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import './Navbar.scss'
import logo from '@/assets/images/Logo.svg'
import searchIcon from '@/assets/images/search.svg'
import menuIcon from '@/assets/images/menu.svg'
import closeIcon from '@/assets/images/close.svg'
import { ref, onMounted } from 'vue'

const pages = ref([
    { name: 'Главная', url: '/' },
    { name: 'Фильмы', url: '/movie' },
    { name: 'Сериалы', url: '/tv' },
    { img: searchIcon, url: '/search' },
])

let burger = ref(false)

let scrolled = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => scrolled.value = scrollY)  
})


</script>

