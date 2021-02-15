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
    
  },
  mounted () {

  }
}
</script>

<!--
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
    ...mapActions('auth', ['handleAuthStateChange']),
    ...mapMutations('auth', ['setLoggedIn'])
  },
  mounted () {
    this.checkAuth()
  }
}
</script> -->