<template>
  <q-page class="q-pa-md">

     <register></register>

  </q-page>
</template>

<script>
import register from '../components/auth/register'
export default {
  data () {
    return {
      tab: 'register'
    }
  },
  components: {
    register
  }
}
</script>