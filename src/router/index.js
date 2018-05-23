import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ficha from '@/components/Ficha'
import Login from '@/components/Login'
import Register from '@/components/Register'
import MisSeries from '@/components/MisSeries'

import Firebase from 'firebase'


Vue.use(Router)

let router = new Router({
	mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home, meta: { requiresGuest: true } },
    { path: '/ficha/:id', name: 'fichaLink', component: Ficha, props: true, meta: { requiresGuest: true } },
    { path: '/login', name: 'loginLink', component: Login, meta: { requiresGuest: true } },
    { path: '/register', name: 'registerLink', component: Register, meta: { requiresGuest: true } },
    { path: '/mis-series', name: 'misSeriesLink', component: MisSeries, meta: { requiresAuth: true } },

    { path: "*", redirect: "/"}
  ]
})

// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!Firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (Firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;
