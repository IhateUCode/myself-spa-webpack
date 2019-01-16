import Vue from 'vue'
import Router from 'vue-router'
import navIndex from '../views/index.vue'
import Second from '../views/Second.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'navIndex',
            component: navIndex
        },
        {
            path: '/second',
            name: 'Second',
            component: Second
        }
    ]
})