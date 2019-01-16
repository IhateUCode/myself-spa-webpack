import Vue from 'vue'
import App from './App'
import router from './router/index'
import './css/reset.css'
import './css/app.scss'

// Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
  
