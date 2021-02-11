<template>
  <q-page class="q-pa-md">

     <login></login>

  </q-page>
</template>

<script>
import login from '../components/auth/login'
export default {
  data () {
    return {
      tab: 'login'
    }
  },
  components: {
    login
  }
}
</script>