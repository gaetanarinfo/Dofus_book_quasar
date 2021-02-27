<template>
  <q-page class="q-pa-md">

     <password v-if='loggedIn === false'></password>

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