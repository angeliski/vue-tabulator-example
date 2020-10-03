import Vue from 'vue';
import Router from 'vue-router';
import SimpleExample from './views/SimpleExample.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SimpleExample',
      component: SimpleExample,
    },
    {
      path: '/editable',
      name: 'EditableExample',
      component: () => import(/* webpackChunkName: "about" */ './views/EditableExample.vue'),
    },
    {
      path: '/dateformat',
      name: 'DateFormatExample',
      component: () => import(/* webpackChunkName: "about" */ './views/DateFormatExample.vue'),
    },
  ],
});
