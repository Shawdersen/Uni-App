import Vue from 'vue'
import App from './App'
import swal from 'sweetalert'
import cuCustom from './colorui/components/cu-custom.vue'

Vue.component('cu-custom',cuCustom)

import Amine from './pages/Amine/home.vue'
Vue.component('Amine',Amine)

import Steven from './pages/Steven/home.vue'
Vue.component('Steven',Steven)

import Home from './pages/home/home.vue'
Vue.component('Home',Home)


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({

    ...App
})


app.$mount()
