import Vue from 'vue';
import Router from 'vue-router';
import HomeScreen from '@/screens/HomeScreen';
import NotFoundScreen from '@/screens/NotFoundScreen';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeScreen',
      component: HomeScreen
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundScreen
    }
  ]
});
