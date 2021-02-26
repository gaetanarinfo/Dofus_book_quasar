<template>
  <q-page class="q-pa-md">

     <profile v-if='loggedIn === true'></profile>

  </q-page>
</template>

<script>
import profile from '../components/auth/profile'
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      tab: 'profile'
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
    profile
  },
  mounted () {
    this.checkAuth()
  }
}
</script>