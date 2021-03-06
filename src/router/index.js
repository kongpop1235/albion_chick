import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Market from '../views/Market.vue'
import Gold from '../views/gold.vue'
import Detail from '../components/core/Detail.vue'
import item from "../components/core/item.vue"
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
  {
    path: '/Gold',
    name: 'Gold',
    component: Gold
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/item',
    name: 'item',
    component: item
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
