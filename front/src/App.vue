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
    ...mapActions('user', ['handleAuthStateChange']),
    ...mapMutations('user', ['setLoggedIn'])
  },
  mounted () {
    this.checkAuth()
  }
}
</script>
