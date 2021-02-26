<template>
  <div class="q-pa-md q-gutter-sm">

      <q-dialog v-model="modal" persistent>
      <q-card style="background: rgb(31 31 31 / 78%) !important; color: white;">
        <q-toolbar>
          <q-avatar>
            <img src='https://styles.redditmedia.com/t5_2sl1e/styles/communityIcon_w2pemjj4a7b21.png?width=256&s=2388bd09a659c346fce7c8d5eb82143a1ebf4a72'>
          </q-avatar>

          <q-toolbar-title><span class="text-weight-bold"> Suppresion du compte</span></q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup @click="$emit('closeModalDeleteAccount')">
            <q-tooltip anchor="top middle" self="center middle">
               Fermer
                </q-tooltip>
          </q-btn>    
 
        </q-toolbar>

        <q-card-section>
          Confirme que tu veux bien supprimer ton compte de Dofus Book !
        </q-card-section>

        <div class="q-card__actions q-card__actions--horiz row justify-end"><button clickable @click="submitDeleteAccount(data)" class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--rectangle text-red-5 q-btn--actionable q-focusable q-hoverable q-btn--wrap q-btn--active"><span class="q-focus-helper"></span><span class="q-btn__wrapper col row q-anchor--skip"><span class="q-btn__content text-center col items-center q-anchor--skip justify-center row"><span class="block">Confirme la suppression ?</span></span></span></button></div>
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
      submitDeleteAccount (id) {
      this.removeAccount(id)
      this.$emit('closeModalDeleteAccount')
    },
    ...mapActions('auth', ['removeAccount'])
  },
  props: {
    modal: {
      default: false
    },
    data: {
      type: String
    },
    delete: {
      type: Boolean
    }
  }
}
</script>