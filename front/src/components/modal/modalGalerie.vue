<template>
  <div class="q-pa-md q-gutter-sm">

      <q-dialog v-model="modalGalerie" persistent>
      <q-card style="background: rgb(31 31 31 / 78%) !important; color: white; width: 1000px; max-width: 80vw;">
        <q-toolbar>
          <q-avatar>
            <img src='https://styles.redditmedia.com/t5_2sl1e/styles/communityIcon_w2pemjj4a7b21.png?width=256&s=2388bd09a659c346fce7c8d5eb82143a1ebf4a72'>
          </q-avatar>

          <q-toolbar-title><span class="text-weight-bold"> {{ imagesId.title }}</span></q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup @click="$emit('closeModalGalerie')">
            <q-tooltip anchor="top middle" self="center middle">
               Fermer
                </q-tooltip>
          </q-btn>    
 
        </q-toolbar>

        <div>
            <q-img spinner-color="white" :src="imagesId.img" style="height: auto; max-width: 100%" />
        </div>

      </q-card>
    </q-dialog>

  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters("general", ["imagesId"])
  },
  props: {
    modalGalerie: {
      default: false
    }
  }
}
</script>