// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Firebase from 'firebase'
import VueFire from 'vuefire'
import {auth} from './firebase'
import './firebase.js';

Vue.use(VueFire)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
let app;
 auth.onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    });
  }
});