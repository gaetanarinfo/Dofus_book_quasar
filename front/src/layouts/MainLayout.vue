<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar class="glossy" style="background-color: #C64F10;">
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

        <div class="q-gutter-md row">
        <q-btn glossy color="light-green-8" label="Le jeu">
        <q-menu
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Having fun</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn glossy color="light-green-8" label="Transmédia">
        <q-menu
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Having fun</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn glossy color="light-green-8" label="Actualités">
        <q-menu
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Having fun</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn glossy color="light-green-8" label="Acheter des kamas"></q-btn>

      <q-btn glossy color="light-green-8" label="Forums"></q-btn>

      <q-btn glossy color="light-green-8" label="Boutique"></q-btn>
      </div>

        <q-toolbar class="col-md-3 col-xs-10 bg-primary text-white glossy" style="background-color: #C64F10 !important;">
        <q-space />
        <q-btn flat round dense icon="play_circle_filled" @click="open('bottom')">
          <q-tooltip anchor="bottom middle" self="center middle">
               Lire la musique
                </q-tooltip>
        </q-btn>
      </q-toolbar>

      <q-btn v-if='loggedIn === true' dense color="green-9" round icon="email" class="q-ml-md" to="/profil_mailbox">
      <q-badge color="deep-purple-9" floating>{{ listNotif }}</q-badge>
       <q-tooltip anchor="bottom middle" self="center middle">
                Boîte de réception
                </q-tooltip>
        </q-btn>

     <q-btn v-if='loggedIn === true' dense color="blue-9" round icon="circle_notifications" class="q-ml-md">
      <q-badge color="brown-10" floating>0</q-badge>
       <q-tooltip anchor="bottom middle" self="center middle">
               Notification(s)
                </q-tooltip>
    </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="text-white"
      content-style="background: rgb(62 59 58 / 39%) !important;"
      elevated
    >

  <div class="q-pt-sm q-pb-sm q-ml-auto q-mr-auto text-center">
           <q-img
          src="https://i.pinimg.com/originals/d8/4e/71/d84e71dfa4d1feae395eafa99aadad28.png"
          style="width: 76%;"
        ></q-img>

  </div>

      <q-list>
 

<q-separator />

          <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="home" color="blue"/>
              </q-item-section>

              <q-item-section content-class="text-white" avatar>
                Accueil
              </q-item-section>
            </q-item> 

            <q-separator />

            <q-item clickable v-ripple to="/news">
              <q-item-section avatar>
                <q-icon name="article" color="orange"/>
              </q-item-section>

              <q-item-section avatar>
                Actus & Dev
              </q-item-section>
            </q-item>  

            <q-separator />

             <q-item clickable v-ripple to="/download">
              <q-item-section avatar>
                <q-icon name="games" color="yellow"/>
              </q-item-section>

              <q-item-section avatar>
                Télécharger Dofus
              </q-item-section>
            </q-item> 

            <q-item v-if='loggedIn === false' clickable v-ripple to="/login">
              <q-item-section avatar>
                <q-icon name="login" color="green-8" />
              </q-item-section>

              <q-item-section>
                Se Connecter
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item v-if='loggedIn === false' clickable v-ripple to="/register">
              <q-item-section avatar>
                <q-icon name="account_box" color="blue" />
              </q-item-section>

              <q-item-section>
                Crée un compte
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item v-if='loggedIn === true' clickable v-ripple to="/profil">
              <q-item-section avatar>
                <q-icon name="account_box" color="green"/>
              </q-item-section>

              <q-item-section>
                Mon profil
              </q-item-section>
            </q-item> 

            <q-separator /> 

            <q-item v-if='adminIn === true' clickable v-ripple @click="showModalCreateNews()">
              <q-item-section avatar>
                <q-icon name="add" color="green-8" />
              </q-item-section>

              <q-item-section>
                Crée un article
              </q-item-section>
            </q-item>

             <q-separator /> 

            <q-item v-if='loggedIn === true' clickable v-ripple @click='logout()'>
              <q-item-section avatar>
                <q-icon name="logout" color="red"/>
              </q-item-section>

              <q-item-section>
                Déconnexion
              </q-item-section>
            </q-item>

            <q-separator />

      </q-list>
    </q-drawer>

    <!-- Audio -->
  <div class="q-pa-md q-gutter-sm">

    <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 450px; background: #31303096;">
        <q-linear-progress :value="1.0" color="blue" />

        <q-card-section class="row items-center no-wrap">
          <div style="width: 100%;background: transparent;">
           <q-media-player
              type="audio"
              :autoplay="true"
              style="background: transparent;"
                background-color="transparent"
                :tracks="tracks"
              no-video
              :sources="sources"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
  <!-- Audio / -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Modal Create News -->
    <modalCreateNews
      v-if='adminIn === true || modalCreateNews'
      :modal2.sync='modalCreateNews'
      @closeModalCreateNews='closeModal2()'
    />
    <!-- / Modal Create News -->

  </q-layout>
  
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

import { defineComponent, ref } from '@vue/composition-api';
import modalCreateNews from '../components/modal/admin/modalCreateNews'
import { mapState, mapActions } from 'vuex'

export default defineComponent({
  name: 'MainLayout',
  data () {
    return {
      dialog: false,
      modalCreateNews: false,
      position: 'bottom',
      tracks: [
        {
          kind: 'subtitles',
          srclang: 'fr',
          label: 'Français'
        }
      ],
      sources: [
        {
          src: require('../../public/music/dofus-retro.mp3'),
          type: 'music/mp3'
        }
      ],
    }
  },
  methods: {
    open (position) {
      this.position = position
      this.dialog = true
    },
    checkNotif () {
      this.getMailNotif()
      setTimeout(this.checkNotif, 1000)
    },
    ...mapActions('auth', ['getMailNotif']),
    logout () {
      this.logoutUser()
    },
    ...mapActions('auth', ['logoutUser']),
    showModalCreateNews () {
      this.modalCreateNews = true
    },
    closeModal2 () {
      this.modalCreateNews = false
    }
  },
  components: { EssentialLink, modalCreateNews },  
  computed: {
    ...mapState('auth', ['loggedIn']),
    ...mapState('auth', ['adminIn']),
    ...mapState('auth', ['listNotif'])    
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {leftDrawerOpen}
  },
  mounted () {
    this.checkNotif()
  }
});
</script>
