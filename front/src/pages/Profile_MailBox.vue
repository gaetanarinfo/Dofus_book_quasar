<template>
  <q-page class="q-pa-md">

     <mailbox v-if='loggedIn === true'></mailbox>

  </q-page>
</template>

<script>
import mailbox from '../components/auth/mailbox'
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      tab: 'mailbox'
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
    mailbox
  },
  mounted () {
    this.checkAuth()
  }
}
</script>