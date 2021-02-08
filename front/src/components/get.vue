<template>
  <q-card class="col-md-3 col-xs-3 text-center">
    <p class="text-h4">{{ title }}</p>
    <q-separator/>

    <q-list bordered>
      <q-item v-for="user in listUser" :key="user.id" class="q-my-sm" @click="showModalUser(user)" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.lastname }} {{ user.firstname }}</q-item-label>
          <q-item-label caption lines="1">{{ user.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="visibility" color="green"/>
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>

    <!-- Modal User -->
    <modalUser
      v-if='modalUser'
      :modal.sync='modalUser'
      :data='user'
      @closeModalUser='closeModal()'
    />
    <!-- / Modal User -->

  </q-card>
</template>

<script>
import modalUser from './modal/modalUser'

export default {
  name: 'get',
  data () {
    return {
      title: 'Get',
      modalUser: false,
      user: null
    }
  },
  components: {
    modalUser
  },
  methods: {
    showModalUser (data) {
      this.user = data
      this.modalUser = true
    },
    closeModal () {
      this.modalUser = false
    }
  },
  props: {
    listUser: Array
  }
}
</script>
