import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ficha from '@/components/Ficha'
import Login from '@/components/Login'
import Register from '@/components/Register'


Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/ficha/:id', name: 'fichaLink', component: Ficha, props: true },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/register', name: 'registerLink', component: Register },
    { path: "*", redirect: "/"}
  ]
})
