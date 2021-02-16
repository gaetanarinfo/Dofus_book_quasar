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

            <q-item v-if='loggedIn === false' clickable v-ripple to="/login">
              <q-item-section avatar>
                <q-icon name="login" color="green-8" />
              </q-item-section>

              <q-item-section>
                Se Connecter
              </q-item-section>
            </q-item>

            <q-item v-if='loggedIn === false' clickable v-ripple to="/register">
              <q-item-section avatar>
                <q-icon name="account_box" color="blue" />
              </q-item-section>

              <q-item-section>
                Crée un compte
              </q-item-section>
            </q-item>

            <q-item v-if='loggedIn === true' clickable v-ripple @click='logout()'>
              <q-item-section avatar>
                <q-icon name="logout" color="red"/>
              </q-item-section>

              <q-item-section>
                Déconnexion
              </q-item-section>
            </q-item>


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
    title: 'Contact',
    caption: 'Contactez-moi',
    icon: 'alternate_email',
    link: '#/'
  }
];

import { defineComponent, ref } from '@vue/composition-api';
import { mapState, mapActions } from 'vuex'

export default defineComponent({
  name: 'MainLayout',
  methods: {
    logout () {
      this.logoutUser()
    },
    ...mapActions('auth', ['logoutUser'])
  },
  components: { EssentialLink },  
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const essentialLinks = ref(linksData);

    return {leftDrawerOpen, essentialLinks}
  }
});
</script>
