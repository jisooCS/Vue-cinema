import axios from 'axios'
const apiKey = import.meta.env.VITE_API_KEY

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
})

export default instance