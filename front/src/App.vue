<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'App',
  methods: {
    checkAuth () {
      this.handleAuthStateChange()
      setTimeout(this.checkAuth, 2500)
    },
     checkAdmin () {
      this.setAdminIn()
      setTimeout(this.loggedDataUser, 2500)
    },
    ...mapActions('auth', ['handleAuthStateChange']),
    ...mapMutations('auth', ['setLoggedIn']),
    ...mapMutations('auth', ['setAdminIn']),
    ...mapActions('auth', ['loggedDataUser'])
  },
  mounted () {
    this.checkAuth()
    this.checkAdmin()
  }
}
</script>