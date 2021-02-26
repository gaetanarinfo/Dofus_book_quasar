<template>
  <q-page class="q-pa-md">

     <register v-if='loggedIn === false'></register>

  </q-page>
</template>

<script>
import register from '../components/auth/register'
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      tab: 'register'
    }
  },
  methods : {
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
    register
  },
  mounted () {
    this.checkAuth()
  }
}
</script>