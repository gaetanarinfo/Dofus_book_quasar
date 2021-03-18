<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="modalArmes" persistent>
      <q-card
        style="background: rgb(31 31 31 / 78%) !important; color: white; width: 700px; max-width: 80vw;"
      >
        <div class="dof-metiers-content" style="height: 265px;">
          <div class="col-sm-3">
            <div class="dof-encyclo-detail-illu">
              <img class="img-responsive" :src="armesId.imgUrl" width="100%" />
            </div>
          </div>

          <div
            class="col-sm-9"
            style="position: relative;top: -195px;left: 210px;display: inline-block;width: 451px;"
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

            <div style="display: inline-block;position: absolute;margin-top: 10px;">
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
                  {{ armesId.characteristics[1].Portée.min }}
                  <span class="dof-img2 dof-portee"></span>
                </div>
                <div class="q-mt-sm" style="font-style: italic;" v-if="armesId.characteristics[2].CC !== undefined">
                  <strong>CC : </strong>
                  {{ armesId.characteristics[2].CC }}
                </div>
              </div>
            </div>

            <div style="display: inline-block;position: absolute;top: 49px;left: 39%;">
              <div class="dof-panel-title">
                <span class="dof-panel-title-icon"></span>
                EFFETS
              </div>

              <div class="dof-panel-cara">
                <div style="font-style: italic;">
                 {{ armesId.statistics[0].Terre.min }} à {{ armesId.statistics[0].Terre.max }} (dommages Terre)
                  <span class="dof-img2 dof-terre"></span>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <q-separator v-if="cards === true" />

        <!-- <div
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
                  v-for="drops in armesId.drops"
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
        </div> -->

        <q-separator />

        <q-card-actions align="right">
          <q-btn glossy clickable v-close-popup @click="$emit('closeModalArmes')" color="red-8">
            <q-item-section>
              <q-item-label>Fermer</q-item-label>
            </q-item-section>
          </q-btn>

          <!-- <q-btn glossy clickable @click="showCards()" color="green-8" v-if="cards === false">
            <q-item-section>
              <q-item-label>Voir la fiche complète</q-item-label>
            </q-item-section>
          </q-btn>

          <q-btn glossy clickable @click="hideCards()" color="green-8" v-if="cards === true">
            <q-item-section>
              <q-item-label>Fermer la fiche</q-item-label>
            </q-item-section>
          </q-btn> -->
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="css">

.dof-portee {
    display: inline-block;
    position: relative;
    top: 6px;
    left: 6px;
    background-position: -95px -125px;
}

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
    ...mapGetters("encyclopedie", ["armesId"])
  },
  methods: {
    // hideCards() {
    //   this.cards = false;
    // },
    // showCards() {
    //   this.cards = true;
    //   this.dataAreas = this.armesId.areas.join(", \n");
    // }
  },
  mounted() {},
  props: {
    modalArmes: {
      default: false
    }
  }
};
</script>