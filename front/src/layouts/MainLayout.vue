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

        <div>Dofus Book v{{ $q.version }}</div>

        <q-toolbar class="col-md-6 col-xs-10 bg-primary text-white glossy" style="background-color: #C64F10 !important;">
        <q-space />
        <q-btn stretch flat :label="current.title"/>
        <q-btn flat round dense v-if="!isPlaying" @click="play" icon="play_circle_filled" class="q-mr-sm" />
        <q-btn flat round dense v-else @click="pause" icon="pause_circle_filled" />
        <q-btn-dropdown stretch flat>
          <q-list style="background : #716b6b85 !important;">
            <q-item-label header style="color: #fff4f4 !important;font-weight: 600 !important;">Playlist</q-item-label>
            <q-item v-for="song in songs" :key="song.src"
              clickable v-close-popup tabindex="0" @click="play(song)" class=""
            >
              <q-item-section avatar>
                <q-avatar icon="library_music" color="brown" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label style="color: #fff4f4 !important;font-weight: 500 !important;">{{ song.title }}</q-item-label>
                <q-item-label caption style="color: #fff4f4 !important;font-weight: 500 !important;">{{ song.artist }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>

      <q-btn dense color="green-9" round icon="email" class="q-ml-md" to="/profil_mailbox">
      <q-badge color="deep-purple-9" floating>{{ listNotif }}</q-badge>
       <q-tooltip anchor="bottom middle" self="center middle">
                Boîte de réception
                </q-tooltip>
        </q-btn>

     <q-btn dense color="blue-9" round icon="circle_notifications" class="q-ml-md">
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

        

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

import { defineComponent, ref } from '@vue/composition-api';
import { mapState, mapActions } from 'vuex'

export default defineComponent({
  name: 'MainLayout',
  data () {
    return {
      miniState: true,
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: 'Dofus Retro',
          artist: 'Ankama',
          src: require('../../public/music/dofus-retro.mp3')
        }
      ],
      player: new Audio()
    }
  },
  methods: {
    checkNotif () {
      this.getMailNotif()
      setTimeout(this.checkNotif, 2500)
    },
    ...mapActions('auth', ['getMailNotif']),
    play (song) {
      if (typeof song.src !== 'undefined') {
        this.current = song
        this.player.src = this.current.src
      }
      this.player.play()
      this.player.addEventListener('ended', function () {
        this.index++
        if (this.index > this.songs.length - 1) this.index = 0
        this.current = this.songs[this.index]
        this.play(this.current)
      }.bind(this))
      this.isPlaying = true
    },
    pause () {
      this.player.pause()
      this.isPlaying = false
    },
    created () {
    this.current = this.songs[this.index]
    this.player.src = this.current.src
  },
    logout () {
      this.logoutUser()
    },
    ...mapActions('auth', ['logoutUser'])
  },
  components: { EssentialLink },  
  computed: {
    ...mapState('auth', ['loggedIn']),
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
