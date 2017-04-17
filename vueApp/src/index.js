import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import 'element-ui/lib/theme-default/index.css'
import routers from './route.js'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);

const router = new VueRouter({
    routes: routers
});

const state = {};

const store =new Vuex.Store({
	state
});

new Vue({
	//el: '#app',
	store,
    router,
    render:(h) => h(App)
}).$mount('#app');