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
      { path: '/reset_password/:token', name: 'Reset Password', component: () => import('pages/Reset_Password.vue') },
      { path: '/download', name: 'Download', component: () => import('pages/Download.vue') },
      { path: '/news', name: 'News', component: () => import('pages/News.vue') },
      { path: '/article/:id', name: 'articleId', component: () => import('pages/Article.vue') },
      { path: '/contact/', name: 'contact', component: () => import('pages/Contact.vue') },
      { path: '/encyclopedie', name: 'encyclopedie', component: () => import('pages/Encyclopedie.vue')},
      { path: '/classes', name: 'classes', component: () => import('pages/Classes.vue')},
      { path: '/metiers', name: 'metiers', component: () => import('pages/Metiers.vue')}
    ]
   },
  {
    path: '/profil',
    component: () => import('layouts/ProfilLayout.vue'),
    children: [
      { path: '', name: 'Profil', component: () => import('pages/Profile.vue') }
    ]
  },
  {
    path: '/profil_mailbox',
    component: () => import('layouts/ProfilLayout.vue'),
    children: [
      { path: '', name: 'Mailbox', component: () => import('pages/Profile_MailBox.vue') }
    ]
  },
  {
    path: '/send_mail',
    component: () => import('layouts/ProfilLayout.vue'),
    children: [
      { path: '', name: 'SendMail', component: () => import('pages/Mailbox.vue') }
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
