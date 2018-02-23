//import global Vue includes here
import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import { store } from './store.js';
import VueI18n from 'vue-i18n';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
//import VueParticles from 'vue-particles';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(VueRouter);
//Vue.use(VueI18n);
Vue.use(Vuex);
//Vue.use(VueParticles);
// const i18n = new VueI18n({
//     locale: 'en'
// });

//import pages for routes here


const ROUTER_INSTANCE = new VueRouter({
    mode: 'history',
    routes: [
    ]
});

ROUTER_INSTANCE.beforeEach((to, from, next) => {
    next();
});

new Vue({
    //i18n,
    store,
    router: ROUTER_INSTANCE,
    el: '#app',
    render: h => h(App)
});