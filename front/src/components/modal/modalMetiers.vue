<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="modalMetiers" persistent>
      <q-card
        style="background: rgb(31 31 31 / 78%) !important; color: white; width: 700px; max-width: 80vw;"
      >
        <q-img />

        <q-separator />

        <div class="col-md-5" style="padding: 9px 14px;">
          <div>
            <div class="col-xs-10">
              <div class="dof-breed-long-name-illu"></div>
              <div class="col text-h4 ellipsis text-center"></div>
            </div>
          </div>
          <div class="dof-description">{{ metiersId.description }}</div>
        </div>

        <q-card-actions align="right">
          <q-btn glossy clickable v-close-popup @click="$emit('closeModalMetiers')" color="red-8">
            <q-item-section>
              <q-item-label>Fermer</q-item-label>
            </q-item-section>
          </q-btn>

          <q-btn
            glossy
            clickable
            type="a"
            :href='metiersId.url'
            target="_blank"
            color="green-8"
          >
            <q-item-section>
              <q-item-label>Voir la fiche complète</q-item-label>
            </q-item-section>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import '../../../public/css/classes.css'


export default {
  data() {
    return {
  
    };
  },
  computed: {
     ...mapGetters("encyclopedie", ["metiersId"])
  },
  props: {
    modalMetiers: {
      default: false
    },
  }
}
</script>