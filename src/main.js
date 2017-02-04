// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import Vuex from 'vuex';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(Vuex);

const routes = [
	{ path: '/goods', component: goods },
	{ path: '/ratings', component: ratings },
	{ path: '/seller', component: seller }
];
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++;
//     }
//   }
// });

const router = new VueRouter({
  mode: 'history',
	routes,
	linkActiveClass: 'active'
});

const app = new Vue({
	router: router,
  // store,
	render: h => h(App)  // 等价与el: '#app',template: '<App/>',components: { App }
});
app.$mount('#app');
router.push('/goods');

