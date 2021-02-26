<template>
  <q-page class="q-pa-md">

     <login v-if='loggedIn === false'></login>

  </q-page>
</template>

<script>
import login from '../components/auth/login'
import { mapActions, mapState } from 'vuex'


export default {
  data () {
    return {
      tab: 'login'
    }
  },
  methods: {
    checkAuth () {
      this.logged()
      setTimeout(this.checkAuth, 1000)
    },
    ...mapActions('auth', ['logged'])
  },
  computed: {
    ...mapState('auth', ['loggedIn']),

  },
  components: {
    login
  },
  mounted () {
    this.checkAuth()
  }
}
</script>