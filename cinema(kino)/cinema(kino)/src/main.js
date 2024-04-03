import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueLazyload from 'vue-lazyload'
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

import App from './App.vue'
import router from './router'

import errorImg from '@/assets/images/NOPHOTO.png'

const app = createApp(App)

app.use(VueLazyload, {
    error: errorImg
})

app.use(VueAwesomePaginate)
app.use(createPinia())
app.use(router)


// Регистрация глобальных компонентов

import BtnMore from '@/components/UI/BtnMore.vue'
import Loader from '@/components/UI/Loader.vue'
import Actors from '@/components/UI/Actors.vue'

app.component('BtnMore', BtnMore)
app.component('Loader', Loader)
app.component('Actors', Actors)



app.mount('#app')
