<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="modalArmes" persistent>
      <q-card
        style="background: rgb(31 31 31 / 78%) !important; color: white; width: 700px; max-width: 80vw;"
      >
        <div class="dof-metiers-content" style="height: 220px;">
          <div class="col-sm-3">
            <div class="dof-encyclo-detail-illu">
              <img class="img-responsive" :src="armesId.imgUrl" width="100%" />
            </div>
          </div>

          <div
            class="col-sm-9"
            style="position: relative;top: -195px;left: 210px;display: block;width: 451px;"
          >
            <div class="dof-encyclo-block-info">
              <div class="dof-container dof-panel">
                <span style="font-weight: bold; padding-right: 3px;">Type :</span>
                <span style="font-style: italic;">{{ armesId.type }}</span>
              </div>
            </div>

            <div class="dof-panel-title" style="padding: 0;">
                <span class="dof-panel-title-icon"></span>
                DESCRIPTION
            </div>

            <div>{{ armesId.description }}</div>
          </div>
        </div>

        <q-separator v-if="cards === true" />

        <div class="q-mt-md q-mb-md" style="display: block;text-align: center;position: relative;" v-if="cards === true">
              <div class="dof-panel-title">
                <span class="dof-panel-title-icon"></span>
                CARACTÉRISTIQUES
              </div>
              <div class="dof-panel-cara">
                <div style="font-style: italic;" v-if="armesId.characteristics[0].PA !== undefined">
                  <strong>PA : </strong>
                  {{ armesId.characteristics[0].PA }}
                  <span class="dof-img2 dof-star"></span>
                </div>
                <div style="font-style: italic;" v-if="armesId.characteristics[1].Portée !== undefined">
                  <strong>Portée : </strong>
                  {{ armesId.characteristics[1].Portée }}
                  <span class="dof-img2 dof-portee"></span>
                </div>
                <div class="q-mt-sm" style="font-style: italic;" v-if="armesId.characteristics[2].CC !== undefined">
                  <strong>CC : </strong>
                  {{ armesId.characteristics[2].CC }}
                </div>
              </div>
            </div>

        <q-separator v-if="cards === true" />    

        
        <q-separator />

        <q-card-actions align="right">
          <q-btn glossy clickable v-close-popup @click="$emit('closeModalArmes')" color="red-8">
            <q-item-section>
              <q-item-label>Fermer</q-item-label>
            </q-item-section>
          </q-btn>

          <q-btn glossy clickable @click="showCards()" color="green-8" v-if="cards === false">
            <q-item-section>
              <q-item-label>Voir la fiche complète</q-item-label>
            </q-item-section>
          </q-btn>

          <q-btn glossy clickable @click="hideCards()" color="green-8" v-if="cards === true">
            <q-item-section>
              <q-item-label>Fermer la fiche</q-item-label>
            </q-item-section>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import "../../../public/css/classes.sass";
import "../../../public/css/modal-armes.sass";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      dataRecette: null,
      cards: false,
      stats1: null
    };
  },
  computed: {
    ...mapGetters("encyclopedie", ["armesId"])
  },
  methods: {
    hideCards() {
      this.cards = false;
    },
    showCards() {
      this.cards = true;
      this.dataRecette = this.armesId.recipe;
      
      // this.dataRecette.forEach(data => {
      //     console.log(data);
      // });
    }
  },
  mounted() {},
  props: {
    modalArmes: {
      default: false
    }
  }
};
</script>