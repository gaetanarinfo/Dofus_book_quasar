<template>
  <q-page class="q-pa-md">

     <password v-if='loggedIn === false'></password>

     <q-page-scroller position="bottom-right" :scroll-offset="250" :offset="[25, 25]">
        <q-btn style="background: transparent;">
          <img src="/images/dofus/little_logo.png" />
          <q-tooltip anchor="top middle" self="center middle">Remonter en haut</q-tooltip>
        </q-btn>
     </q-page-scroller>

  </q-page>
</template>

<script>
import password from '../components/auth/password_recover'
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      tab: 'password'
    }
  },
  methods: {
    checkAuth () {
      this.logged()
      setTimeout(this.checkAuth, 2500)
    },
    ...mapActions('auth', ['logged'])
  },
  computed: {
    ...mapState('auth', ['loggedIn']),

  },
  components: {
    password
  },
  mounted () {
    this.checkAuth()
  }
}
</script>