import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'crud', component: () => import('pages/Crud.vue') }
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
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'PageUser', component: () => import('pages/User.vue'), props: true }
    ]
  },
  {
    path: '/userLog',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'PageUserLog', component: () => import('pages/UserLog.vue'), props: true }
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
