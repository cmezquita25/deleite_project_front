import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './assets/js/scripts.js'


import './assets/css/navbar.css'
import './assets/css/footer.css'
import './assets/css/login.css'

import './assets/css/cruds.css'

import './assets/css/base.css'
import './assets/css/Inicio.css'
import './assets/css/contacto.css'
/*import './assets/css/catalogo.css'*/


import './assets/css/animaciones.css'





/* Fonts */
import '@/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'
import '@/assets/fonts/Montserrat-VariableFont_wght.ttf'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
