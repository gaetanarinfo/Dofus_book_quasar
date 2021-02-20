import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/login', name: 'Login', component: () => import('pages/Login.vue') },
      { path: '/register', name: 'Register', component: () => import('pages/Register.vue') },
      { path: '/password_reset', name: 'Password Reset', component: () => import('pages/Password_Reset.vue') },
      { path: '/reset_password/:token', name: 'Reset Password', component: () => import('pages/Reset_Password.vue') }
    ]
   },
  {
    path: '/news',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/News.vue') }
    ]
  },
  {
    path: '/download',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Download.vue') }
    ]
  },
  {
    path: '/profil',
    component: () => import('layouts/ProfilLayout.vue'),
    children: [
      { path: '', name: 'Profil', component: () => import('pages/Profile.vue'), props: true }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
