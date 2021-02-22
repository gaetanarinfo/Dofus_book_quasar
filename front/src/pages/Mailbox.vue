<template>
  <q-page class="q-pa-md">

     <send v-if='loggedIn === true'></send>

  </q-page>
</template>

<script>
import send from '../components/auth/sendMail'
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      tab: 'send'
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
    ...mapState('auth', ['loggedIn'])
  },
  components: {
    send
  },
  mounted () {
    this.checkAuth()
  }
}
</script>