<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="home"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Dofus Book
        </q-toolbar-title>

        <div>Gaëtan Seigneur v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu de navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Accueil',
    caption: 'Accueil du site internet',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Actualités',
    caption: 'Retrouve ici les nouvelle fraîche de dofus',
    icon: 'article',
    link: '#/news'
  },
  {
    title: 'Le jeu',
    caption: 'Ici tu peut télécharger la meilleur version du jeux',
    icon: 'games',
    link: '#/download'
  },
  {
    title: 'Connexion',
    caption: "Connexion à l'espace membre",
    icon: 'login',
    link: '#/login'
  },
  {
    title: 'Inscription',
    caption: "Inscrit toi et profite de diverse avanatage",
    icon: 'account_circle',
    link: '#/register'
  },
  {
    title: 'Contact',
    caption: 'Contactez-moi',
    icon: 'alternate_email',
    link: '#/'
  }
];

import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup() {
    const leftDrawerOpen = ref(false);
    const essentialLinks = ref(linksData);

    return {leftDrawerOpen, essentialLinks}
  }
});
</script>
