<template>
  <q-card class="col-md-3 col-xs-3 text-center">
    <p class="text-h4">{{ title }}</p>
    <q-separator/>

    <q-list bordered>
      <q-item v-for="user in listUser" :key="user.id" @click="showModalUser(user)" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
          <q-item-label caption lines="1">{{ user.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="close" color="red" />
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>

    <!-- Modal User -->
    <modalUser
      v-if='modalUser'
      :modal.sync='modalUser'
      :data='user'
      :delete='formDelete'
      @closeModalUser='closeModal()'
    />
    <!-- / Modal User -->

  </q-card>
</template>

<script>
import modalUser from './modal/modalUser'

export default {
  name: 'delete',
  data () {
    return {
      title: 'Delete',
      modalUser: null,
      formDelete: null
    }
  },
  components: {
    modalUser
  },
  methods: {
    showModalUser (data) {
      this.user = data
      this.modalUser = true
      this.formDelete = true
    },
    closeModal () {
      this.modalUser = false
      this.formDelete = null
    }
  },
  props: {
    listUser: Array
  }
}
</script>
