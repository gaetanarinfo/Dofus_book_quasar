<template>
  <q-page class="q-pa-md">

     <send v-if='loggedIn === true' :listUser='listUser' :listRecipient='listRecipient'></send>

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
      this.loggedDataUser()
      setTimeout(this.checkAuth, 1000)
    },
    ...mapActions('auth', ['logged']),
    ...mapActions('auth', ['getListRecipient']),
    ...mapActions('auth', ['loggedDataUser'])
  },
  computed: {
    ...mapState('auth', ['loggedIn']),
    ...mapState('auth', ['listUser']),
    ...mapState('auth', ['listRecipient'])
  },
  components: {
    send
  },
  mounted () {
    this.checkAuth()
    this.getListRecipient()
    this.loggedDataUser()
  }
}
</script>