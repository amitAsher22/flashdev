import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "@/views/About";
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from "@/views/register";





Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/item/:id',
    name: 'item',
    component: () => import(/* webpackChunkName: "about" */ '../views/item.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../components/Profile.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },





]

const router = new VueRouter({
  routes
})

export default router
