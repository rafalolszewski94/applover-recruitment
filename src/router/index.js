import Vue from 'vue';
import Router from 'vue-router';
import HomeScreen from '@/screens/HomeScreen';
import NotFoundScreen from '@/screens/NotFoundScreen';
import LoginScreen from '@/screens/LoginScreen';
import ChooseDoor from '@/screens/HomeScreen/ChooseDoor';
import ChooseDivision from '@/screens/HomeScreen/ChooseDivision';
import ChooseColor from '@/screens/HomeScreen/ChooseColor';
import store from '../store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomeScreen',
      component: HomeScreen,
      redirect: { name: 'ChooseDoor' },
      children: [
        {
          path: 'door',
          name: 'ChooseDoor',
          component: ChooseDoor,
          meta: {
            id: 1,
            title: 'Choose door'
          }
        },
        {
          path: 'division',
          name: 'ChooseDivision',
          component: ChooseDivision,
          meta: {
            id: 2,
            title: 'Choose Division'
          }
        },
        {
          path: 'color',
          name: 'ChooseColor',
          component: ChooseColor,
          meta: {
            id: 3,
            title: 'Choose Color'
          }
        }
      ],
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
