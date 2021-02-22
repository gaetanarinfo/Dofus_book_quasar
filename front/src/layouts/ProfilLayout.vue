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

         <q-btn dense color="green-9" round icon="email" class="q-ml-md">
      <q-badge color="deep-purple-9" floating>0</q-badge>
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
        :width="250"
        :breakpoint="400"
        content-class="text-white"
        content-style="background: rgb(62 59 58 / 39%) !important;"
        elevated
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px;">
          <q-list padding>

              <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="home" color="blue"/>
              </q-item-section>

              <q-item-section avatar>
                Accueil
              </q-item-section>
            </q-item> 

            <q-item clickable v-ripple to="/profil_mailbox">
              <q-item-section avatar>
                <q-icon name="inbox" color="brown"/>
              </q-item-section>

              <q-item-section>
                Boite de réception
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" color="green" />
              </q-item-section>

              <q-item-section>
                Envoyer un message
              </q-item-section>
            </q-item>

               <q-item clickable v-ripple to="/profil">
              <q-item-section avatar>
                <q-icon name="edit" color="blue"/>
              </q-item-section>

              <q-item-section>
                Modifier mon profil
              </q-item-section>
            </q-item>

           <q-item clickable v-ripple @click='logout()'>
              <q-item-section avatar>
                <q-icon name="logout" color="red"/>
              </q-item-section>

              <q-item-section>
                Déconnexion
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://image.noelshack.com/fichiers/2018/32/2/1533634229-wiki-background.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img :src='userData.avatar' >
            </q-avatar>
            <div class="text-weight-bold">{{ userData.lastname }} {{ userData.firstname }}</div>
            <div> {{ userData.email }} </div>
          </div>
        </q-img>
      </q-drawer>

        

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, ref } from '@vue/composition-api';
import { mapState, mapActions } from 'vuex'

export default defineComponent({
  name: 'ProfilLayout',
  data (){
      return {
          userData: {
            pseudo: localStorage.getItem('pseudo'),              
            lastname: localStorage.getItem('lastname'),
            firstname: localStorage.getItem('firstname'),
            email: localStorage.getItem('email'),
            avatar: localStorage.getItem('avatar')
        }
      }
  },
  methods: {
    logout () {
      this.logoutUser()
    },
    ...mapActions('auth', ['logoutUser'])
  },
  components: {  },  
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  setup() {
    const leftDrawerOpen = ref(true)

    return {leftDrawerOpen}
  }
});
</script>
