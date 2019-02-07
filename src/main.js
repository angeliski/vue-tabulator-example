import Vue from 'vue';
import VueTabulator from 'vue-tabulator';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueTabulator);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
