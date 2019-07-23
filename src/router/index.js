import Vue from 'vue';
import Router from 'vue-router';
import HomeScreen from '@/screens/HomeScreen';
import NotFoundScreen from '@/screens/NotFoundScreen';
import LoginScreen from '@/screens/LoginScreen';
import store from '../store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomeScreen',
      component: HomeScreen,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'LoginScreen',
      component: LoginScreen
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundScreen
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (store.getters['auth/isLoggedIn']) {
      next();
      return;
    }
    next({
      path: '/login',
      params: { nextUrl: to.fullPath }
    });
  } else {
    next();
  }
});

export default router;
