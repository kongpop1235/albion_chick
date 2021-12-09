import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Market from '../views/Market.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: Home,
  },
  {
    path: '*',
    redirect: Home,
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Market',
    name: 'Market',
    component: Market
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
