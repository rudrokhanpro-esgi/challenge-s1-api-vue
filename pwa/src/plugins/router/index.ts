import useAuthStore from '@/stores/auth';
import { createRouter, createWebHistory } from 'vue-router';

const isLogged = (to, from, next) => {
  const authStore = useAuthStore();

  if (authStore.isAuthenticated) next();

  return next('/auth/login');
};

const history = createWebHistory();

const router = createRouter({
  history,
  routes: [
    // Index
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Index.vue'),
      beforeEnter: isLogged,
    },
    // Auth
    {
      path: '/auth',
      name: 'auth',
      redirect: '/auth/login',
      children: [
        {
          name: 'auth-login',
          path: 'login',
          component: () => import('@/views/auth/Login.vue'),
        },
        {
          name: 'auth-register',
          path: 'register',
          component: () => import('@/views/auth/Register.vue'),
        },
      ],
    },
  ],
});

export default router;
