<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="modalMonstres" persistent>
      <q-card
        style="background: rgb(31 31 31 / 78%) !important; color: white; width: 700px; max-width: 80vw;"
      >
        <div class="dof-metiers-content" style="height: 265px;">
          <div class="col-sm-3">
            <div class="dof-encyclo-detail-illu">
              <img class="img-responsive" :src="monstresId.imgUrl" width="100%" />
            </div>
          </div>

          <div
            class="col-sm-9"
            style="position: relative;top: -195px;left: 210px;display: inline-block;width: 451px;"
          >
            <div class="dof-encyclo-block-info">
              <div class="dof-container dof-panel">
                <span style="font-weight: bold; padding-right: 3px;">Races :</span>
                <span style="font-style: italic;">{{ monstresId.type }}</span>
              </div>
            </div>

            <div style="display: inline-block; position: absolute;">
              <div class="dof-panel-title">
                <span class="dof-panel-title-icon"></span>
                CARACTÉRISTIQUES
              </div>
              <div class="dof-panel-cara">
                <div style="font-style: italic;">
                  <strong>PV :</strong>
                  <span style="padding-left: 3px;" v-if="monstresId.statistics[0].PV.max !== 0">de</span>
                  {{ monstresId.statistics[0].PV.min }}
                  <span
                    v-if="monstresId.statistics[0].PV.max !== 0"
                  >à {{ monstresId.statistics[0].PV.max }}</span>
                  <span class="dof-img2 dof-life"></span>
                </div>
                <div style="font-style: italic;">
                  <strong>PA :</strong>
                  <span style="padding-left: 3px;" v-if="monstresId.statistics[1].PA.max !== 0">de</span>
                  {{ monstresId.statistics[1].PA.min }}
                  <span
                    v-if="monstresId.statistics[1].PA.max !== 0"
                  >à {{ monstresId.statistics[1].PA.max }}</span>
                  <span class="dof-img2 dof-star"></span>
                </div>
                <div style="font-style: italic;">
                  <strong>PM :</strong>
                  <span style="padding-left: 3px;" v-if="monstresId.statistics[2].PM.max !== 0">de</span>
                  {{ monstresId.statistics[2].PM.min }}
                  <span
                    v-if="monstresId.statistics[2].PM.max !== 0"
                  >à {{ monstresId.statistics[2].PM.max }}</span>
                  <span class="dof-img2 dof-move"></span>
                </div>
              </div>
            </div>

            <div style="display: inline-block;position: absolute;top: 49px;left: 39%;">
              <div class="dof-panel-title">
                <span class="dof-panel-title-icon"></span>
                RÉSISTANCES
              </div>
              <div class="dof-panel-cara">
                <div style="font-style: italic;">
                  <strong>TERRE :</strong>
                  <span
                    style="padding-left: 3px;"
                    v-if="monstresId.resistances[0].Terre.max !== 0"
                  >de</span>
                  {{ monstresId.resistances[0].Terre.min }}
                  <span
                    v-if="monstresId.resistances[0].Terre.max !== 0"
                  >à {{ monstresId.resistances[0].Terre.max }}</span>
                  <span class="dof-img2 dof-terre"></span>
                </div>
                <div style="font-style: italic;">
                  <strong>AIR :</strong>
                  <span style="padding-left: 3px;" v-if="monstresId.resistances[1].Air.max !== 0">de</span>
                  {{ monstresId.resistances[1].Air.min }}
                  <span
                    v-if="monstresId.resistances[1].Air.max !== 0"
                  >à {{ monstresId.resistances[1].Air.max }}</span>
                  <span class="dof-img2 dof-air"></span>
                </div>
                <div style="font-style: italic;">
                  <strong>FEU :</strong>
                  <span style="padding-left: 3px;" v-if="monstresId.resistances[2].Feu.max !== 0">de</span>
                  {{ monstresId.resistances[2].Feu.min }}
                  <span
                    v-if="monstresId.resistances[2].Feu.max !== 0"
                  >à {{ monstresId.resistances[2].Feu.max }}</span>
                  <span class="dof-img2 dof-feu"></span>
                </div>
                <div style="font-style: italic;">
                  <strong>EAU :</strong>
                  <span style="padding-left: 3px;" v-if="monstresId.resistances[3].Eau.max !== 0">de</span>
                  {{ monstresId.resistances[3].Eau.min }}
                  <span
                    v-if="monstresId.resistances[3].Eau.max !== 0"
                  >à {{ monstresId.resistances[3].Eau.max }}</span>
                  <span class="dof-img2 dof-eau"></span>
                </div>
                <div style="font-style: italic;">
                  <strong>NEUTRE :</strong>
                  <span
                    style="padding-left: 3px;"
                    v-if="monstresId.resistances[4].Neutre.max !== 0"
                  >de</span>
                  {{ monstresId.resistances[4].Neutre.min }}
                  <span
                    v-if="monstresId.resistances[4].Neutre.max !== 0"
                  >à {{ monstresId.resistances[4].Neutre.max }}</span>
                  <span class="dof-img2 dof-neutre"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <q-separator v-if="cards === true" />

        <div
          class="dof-panel-title"
          style="margin: 13px auto 0 auto;text-align: center;"
          v-if="cards === true"
        >
          <span class="dof-panel-title-icon"></span>
          ZONES
        </div>

        <div class="dof-areas q-mb-md">{{ dataAreas }}</div>

        <q-separator v-if="cards === true" />

        <div
          class="dof-panel-title"
          style="margin: 13px auto 0 auto;text-align: center;"
          v-if="cards === true"
        >
          <span class="dof-panel-title-icon"></span>
          BUTINS CONDITIONNÉS
        </div>

        <div class="dof-panel-content" v-if="cards === true">
          <div class="dof-container dof-content-list dof-displaymode-image-col">
            <div class="row dof-container justify-center">
              <div>
                <div
                  class="dof-column dof-container col-md-4 col-sm-4 q-ml-md q-mr-md"
                  v-for="drops in monstresId.drops"
                  :key="drops.id"
                >
                  <div class="dof-list-element">
                    <div class="dof-main">
                      <div
                        class="dof-main-content"
                        style="width: 100% !important;height: 60px !important;"
                      >
                        <div class="dof-image">
                          <img :src="drops.imgUrl" />
                        </div>

                        <div class="dof-content">
                          <div class="dof-title">{{ drops.name }}</div>
                        </div>
                        <div class="dof-aside" style="font-size: 17px;">Drop {{ drops.dropPercent.min }} %</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <q-separator />

        <q-card-actions align="right">
          <q-btn glossy clickable v-close-popup @click="$emit('closeModalMonstres')" color="red-8">
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

<style lang="css">
.dof-content-list.dof-displaymode-image-col .dof-list-element {
  border: none;
  font-size: 15px;
  font-size: 1.5rem;
  margin-bottom: 12px;
  margin-bottom: 1.2rem;
  padding: 0;
}
.dof-content-list .dof-list-element:last-child {
  border-bottom: none;
}
.dof-content-list .dof-list-element {
  display: table;
  width: 100%;
  color: #28170e;
  position: relative;
  font-size: 13px;
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
  border-bottom: 1px solid #e4e4e4;
  padding: 5px 3px;
  padding: 0.5rem 0.3rem;
}

.dof-content-list .dof-list-element .dof-main {
  padding: 0;
}
.dof-content-list .dof-list-element .dof-front,
.dof-content-list .dof-list-element .dof-main {
  display: table-cell;
  position: relative;
}

.dof-content-list.dof-displaymode-image-col
  .dof-list-element
  .dof-main
  .dof-main-content {
  background: #fff;
  border: 1px solid #c9c6bb;
  font-size: 15px;
  font-size: 1.5rem;
}
.dof-content-list .dof-list-element .dof-main .dof-main-content {
  display: table;
  position: relative;
  width: 100%;
}

.dof-content-list.dof-displaymode-image-col
  .dof-list-element
  .dof-main
  .dof-main-content
  .dof-image {
  padding: 5px;
  padding: 0.5rem;
}
.dof-content-list .dof-list-element .dof-main .dof-main-content .dof-image {
  vertical-align: top;
  width: 40px;
  padding: 0 5px;
  padding: 0 0.5rem;
}
.dof-content-list .dof-list-element .dof-main .dof-main-content .dof-aside,
.dof-content-list .dof-list-element .dof-main .dof-main-content .dof-image,
.dof-content-list .dof-list-element .dof-main .dof-main-content .dof-content {
  display: table-cell;
  padding: 0;
  margin: 0;
}

.dof-content-list.dof-displaymode-image-col
  .dof-list-element
  .dof-main
  .dof-main-content
  .dof-image
  img,
.dof-content-list.dof-displaymode-image-col
  .dof-list-element
  .dof-main
  .dof-main-content
  .dof-image
  a
  img {
  background: #97a800;
  border: 1px solid #6f780d;
  box-shadow: inset 0 0 3px #6f780d;
  width: 48px;
  height: 48px;
  max-width: 48px;
}
.dof-content-list .dof-list-element .dof-main .dof-main-content .dof-image img {
  max-width: 40px;
}

dof-content-list .dof-list-element .dof-main .dof-main-content .dof-content {
  vertical-align: middle;
}
.dof-content-list .dof-list-element .dof-main .dof-main-content .dof-aside,
.dof-content-list .dof-list-element .dof-main .dof-main-content .dof-image,
.dof-content-list .dof-list-element .dof-main .dof-main-content .dof-content {
  display: table-cell;
  padding: 0;
  margin: 0;
}

.dof-content-list.dof-displaymode-image-col
  .dof-list-element
  .dof-main
  .dof-main-content
  .dof-title {
  font-size: 15px !important;
  font-size: 1.5rem;
  line-height: 15px;
  line-height: 1.5rem;
  font-weight: 600;
}
.dof-content-list
  .dof-list-element
  .dof-main
  .dof-main-content
  .dof-content
  .dof-title {
  font-size: 13px;
  font-size: 1.3rem;
  padding: 3px 0;
  padding: 0.3rem 0;
}

.dof-content-list.dof-displaymode-image-col
  .dof-list-element
  .dof-main
  .dof-main-content
  .dof-text {
  font-size: 13px;
  font-size: 1.3rem;
  font-style: italic;
}
.dof-content-list
  .dof-list-element
  .dof-main
  .dof-main-content
  .dof-content
  .dof-text {
  font-size: 13px;
  font-size: 1.3rem;
  vertical-align: middle;
  padding-left: 5px;
  padding-left: 0.5rem;
}

.dof-drop-percent span {
  float: left;
  margin-left: 10px;
}

.dof-drop-percent {
  color: #28170e;
}

.dof-drop-percent {
  font-style: italic;
}

.dof-monster-drops .dof-drop-percent .dof-droppeur {
  display: block;
  height: 14px;
  width: 8px;
}

.dof-monster-drops .dof-drop-percent span {
  float: left !important;
  margin-left: 10px !important;
}

.dof-content-list.dof-displaymode-image-col
  .dof-list-element
  .dof-main
  .dof-main-content
  .dof-aside {
  font-weight: bold;
  font-size: 15px;
  font-size: 1.5rem;
  padding-right: 5px;
  padding-right: 0.5rem;
  color: #c56f07;
}
.dof-content-list .dof-list-element .dof-main .dof-main-content .dof-aside {
  padding-right: 5px;
  padding-right: 0.5rem;
  vertical-align: middle;
  font-size: 13px;
  font-size: 1.3rem;
  text-align: right;
  width: 95px;
  position: relative;
}
.dof-content-list .dof-list-element .dof-main .dof-main-content .dof-aside,
.dof-content-list .dof-list-element .dof-main .dof-main-content .dof-image,
.dof-content-list .dof-list-element .dof-main .dof-main-content .dof-content {
  display: table-cell;
  padding: 0;
  margin: 0;
}
.dof-content-list .dof-list-element .dof-aside,
.dof-content-list .dof-list-element .dof-text {
  color: #78664c;
}
</style>

<script>
import "../../../public/css/classes.sass";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      dataAreas: null,
      cards: false
    };
  },
  computed: {
    ...mapGetters("encyclopedie", ["monstresId"])
  },
  methods: {
    hideCards() {
      this.cards = false;
    },
    showCards() {
      this.cards = true;
      this.dataAreas = this.monstresId.areas.join(", \n");
    }
  },
  mounted() {},
  props: {
    modalMonstres: {
      default: false
    }
  }
};
</script>