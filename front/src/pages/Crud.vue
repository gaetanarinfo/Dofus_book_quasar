<template>
  <q-page class='q-pa-md row'>

    <!-- Components get -->
    <get :listUser='listUser'/>

    <!-- Components post -->
    <post/>

    <!-- Components put -->
    <put :listUser='listUser'/>

    <!-- Components delete -->
    <dele :listUser='listUser'/>

  </q-page>
</template>

<script>
import get from '../components/get'
import post from '../components/post'
import put from '../components/put'
import dele from '../components/delete'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  components: {
    get, post, put, dele
  },
  methods: {
    ...mapActions('user', ['getListUser'])
  },
  computed: {
    ...mapState('user', ['listUser'])
  },
  mounted () {
    this.getListUser()
  }
}
</script>
