<template>
  <div class="q-pa-md q-gutter-sm">

      <q-dialog v-model="modal" persistent>
      <q-card style="background: #535658bf !important; color: white;">
        <q-toolbar>
          <q-avatar>
            <img :src='data.avatar'>
          </q-avatar>

          <q-toolbar-title><span class="text-weight-bold">Message de {{ data.lastname }}</span> <span class="text-weight-bold"> {{ data.firstname }}</span></q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup @click="$emit('closeModalMail')">
            <q-tooltip anchor="top middle" self="center middle">
               Fermer le message
                </q-tooltip>
          </q-btn>    

          <q-btn flat round dense rounded icon="check" clickable @click="submitDeleteMail(data._id, data.recipient)">
                <q-tooltip anchor="top middle" self="center middle">
               Supprimer le message
                </q-tooltip>
          </q-btn>
 
        </q-toolbar>

        <q-card-section>
          {{ data.content }}
        </q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  components: {

  },
  methods: {
      submitDeleteMail (id, recipient) {

      const data = {id, recipient}

      this.removeMailBox(data)
      this.$emit('closeModalMail')
    },
    ...mapActions('auth', ['removeMailBox'])
  },
  props: {
    modal: {
      default: false
    },
    data: {
      type: Object
    },
    delete: {
      type: Boolean
    }
  }
}
</script>