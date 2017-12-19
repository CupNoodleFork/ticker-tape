import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: require('@browse/pages/Main').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('@browse/pages/Login').default,
    },
    {
      path: '/signup',
      name: 'signup',
      component: require('@browse/pages/SignUp').default,
    }
  ]
});
