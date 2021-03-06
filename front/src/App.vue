<template>
  <div id="q-app">
    <router-view v-if="show === true" />
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import { realpathSync } from 'fs'
import { QSpinnerHourglass } from 'quasar'

export default {
  name: 'App',
  data() {
    return {
      show: false
    }
  },
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
    ...mapActions('auth', ['loggedDataUser']),
    showLoading () {
      this.$q.loading.show({
        spinner: QSpinnerHourglass,
        spinnerColor: 'red',
        spinnerSize: 200,
      })

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.show = true
        this.timer = void 0
      }, 2500)
    }
  },

  beforeDestroy () {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  },
  mounted () {
    this.showLoading()
    this.checkAuth()
    this.checkAdmin()
  }
}
</script>