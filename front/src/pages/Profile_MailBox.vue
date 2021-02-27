<template>
  <q-page class="q-pa-md">

     <mailbox v-if='loggedIn === true' :listMail='listMail'></mailbox>

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
    ...mapActions('auth', ['logged']),
    ...mapActions('auth', ['getListMail'])
  },
  computed: {
    ...mapState('auth', ['loggedIn']),
    ...mapState('auth', ['listMail'])
  },
  components: {
    mailbox
  },
  mounted () {
    this.checkAuth()
    this.getListMail()
  }
}
</script>