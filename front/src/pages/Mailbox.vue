<template>
  <q-page class="q-pa-md">

     <send v-if='loggedIn === true' :listUser='listUser'></send>

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
      this.getListUser()
      setTimeout(this.checkAuth, 2500)
    },
    ...mapActions('auth', ['logged']),
    ...mapActions('auth', ['getListUser'])
  },
  computed: {
    ...mapState('auth', ['loggedIn']),
    ...mapState('auth', ['listUser'])
  },
  components: {
    send
  },
  mounted () {
    this.checkAuth()
    this.getListUser()
  }
}
</script>