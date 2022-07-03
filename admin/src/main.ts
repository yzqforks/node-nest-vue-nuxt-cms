

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets


import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App.vue'
import store from './store'
import router from './router'

import i18n from './lang' // internationalization
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters'
import {createApp} from "vue";
import {createIcon} from "./icons"; // global filters
const app=createApp(App)

createIcon(app)


app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
