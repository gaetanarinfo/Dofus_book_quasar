<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="modalMonstres" persistent>
      <q-card
        style="background: rgb(31 31 31 / 78%) !important; color: white; width: 700px; max-width: 80vw;"
      >
        <div class="dof-metiers-content" style="height: 305px;">
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

            <div style="display: inline-block;">
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
          </div>

          <div style="display: inline-block;position: relative;top: -133px;left: -9%;">
            <div class="dof-panel-title">
              <span class="dof-panel-title-icon"></span>
              RÉSISTANCES
            </div>
            <div class="dof-panel-cara">
              <div style="font-style: italic;">
                <strong>TERRE : </strong>
                <span style="padding-left: 3px;" v-if="monstresId.statistics[0].PV.max !== 0">de</span>
                {{ monstresId.statistics[0].PV.min }}
                <span
                  v-if="monstresId.statistics[0].PV.max !== 0"
                >à {{ monstresId.statistics[0].PV.max }}</span>
                <span class="dof-img2 dof-life"></span>
              </div>
              <div style="font-style: italic;">
                <strong>AIR : </strong>
                <span style="padding-left: 3px;" v-if="monstresId.statistics[1].PA.max !== 0">de</span>
                {{ monstresId.statistics[1].PA.min }}
                <span
                  v-if="monstresId.statistics[1].PA.max !== 0"
                >à {{ monstresId.statistics[1].PA.max }}</span>
                <span class="dof-img2 dof-star"></span>
              </div>
              <div style="font-style: italic;">
                <strong>FEU : </strong>
                <span style="padding-left: 3px;" v-if="monstresId.statistics[2].PM.max !== 0">de</span>
                {{ monstresId.statistics[2].PM.min }}
                <span
                  v-if="monstresId.statistics[2].PM.max !== 0"
                >à {{ monstresId.statistics[2].PM.max }}</span>
                <span class="dof-img2 dof-move"></span>
              </div>
              <div style="font-style: italic;">
                <strong>EAU : </strong>
                <span style="padding-left: 3px;" v-if="monstresId.statistics[2].PM.max !== 0">de</span>
                {{ monstresId.statistics[2].PM.min }}
                <span
                  v-if="monstresId.statistics[2].PM.max !== 0"
                >à {{ monstresId.statistics[2].PM.max }}</span>
                <span class="dof-img2 dof-move"></span>
              </div>
              <div style="font-style: italic;">
                <strong>NEUTRE : </strong>
                <span style="padding-left: 3px;" v-if="monstresId.statistics[2].PM.max !== 0">de</span>
                {{ monstresId.statistics[2].PM.min }}
                <span
                  v-if="monstresId.statistics[2].PM.max !== 0"
                >à {{ monstresId.statistics[2].PM.max }}</span>
                <span class="dof-img2 dof-move"></span>
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

          <q-btn glossy clickable type="a" :href="monstresId.url" target="_blank" color="green-8">
            <q-item-section>
              <q-item-label>Voir la fiche complète</q-item-label>
            </q-item-section>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="css">
.dof-img2 {
  background-image: url("/../../images/dofus/sprite.png");
  background-repeat: no-repeat;
  background-size: auto auto;
  width: 25px;
  height: 25px;
}

.dof-life {
  display: inline-block;
  position: relative;
  top: 6px;
  left: 6px;
  background-position: -95px -316px;
}

.dof-star {
  display: inline-block;
  position: relative;
  top: 6px;
  left: 6px;
  background-position: -95px -241px;
}

.dof-move {
  display: inline-block;
  position: relative;
  top: 6px;
  left: 6px;
  background-position: -95px -49px;
}

.dof-panel-cara {
  margin: -13px 0 0 0;
  padding-left: 1rem;
}

.dof-encyclo-block-info {
  background: #edeae096;
  border: 1px solid #b8d2a1 !important;
  margin-bottom: 12px;
  padding: 0.5em;
  color: #28170e;
}

.dof-detail-a {
  color: #9c9999;
  text-decoration: none;
}

.dof-detail-a:hover {
  color: #9c9999;
}

.dof-detail-inner:before {
  background: url("/../../images/dofus/sprite_common.png");
  background-position: -150px 0;
  display: inline-block;
  width: 10px;
  height: 20px;
  margin-right: 3px;
  margin-right: 0.3rem;
  content: " ";
}

.q-table__bottom {
  color: #ff832b !important;
  font-weight: 500 !important;
  letter-spacing: 0.5px !important;
}

.q-field--auto-height.q-field--dense .q-field__control,
.q-field--auto-height.q-field--dense .q-field__native {
  color: #ff832b !important;
  font-weight: 500 !important;
}

.q-position-engine {
  background: #ffffffad !important;
}

.dof-metiers-content {
  padding: 12px;
}

.dof-encyclo-detail-illu {
  border-top-color: #b1ac9c;
  border-right-color: #c9c6bb;
  border-bottom-color: #dfdbcd;
  border-left-color: #c9c6bb;
  background: url("/../../images/dofus/bg-item.jpg") center center no-repeat;
  background-size: cover;
  text-align: center;
  border: 4px inset;
  margin-bottom: 0;
  width: 194px;
  height: 194px;
}

.dof-panel-title {
  padding: 0;
  padding-bottom: 5px;
  padding-bottom: 0.5rem;
}

.dof-panel-title {
  font-size: 23px;
  padding-left: 10px;
  padding-left: 1rem;
  text-transform: uppercase;
  font-weight: normal;
  font-family: "bebas", sans-serif;
  border-bottom: none;
  height: auto;
  line-height: 28px;
  min-height: 32px;
  text-shadow: none;
  color: #f1edea;
  background: none;
}

.dof-panel-title .dof-panel-title-icon {
  background-image: url(/../../images/dofus/sprite_common.png);
  background-position: -150px 0;
  background-repeat: no-repeat;
  margin-right: 7px;
  top: -3px;
  padding: 0 5px;
  vertical-align: middle;
  width: auto;
  height: 28px;
  line-height: 28px;
}
.dof-panel-title-icon:not(.dof-icon-med) {
  width: 1.95em;
  height: 1.75em;
}

.dof-panel-title span {
  position: relative;
}

.dof-panel-content {
  padding: 0;
  color: #28170e;
  padding: 12px;
}

.dof-recettes {
  position: relative;
  display: block;
  margin: 12px auto 12px auto;
  padding: 10px 10px 5px 10px;
  box-shadow: 0 0 9px 1px #928e8e2e !important;
  background-color: #6f6f6f7a;
  width: 302px;
  text-transform: uppercase;
  font-family: "bebas", sans-serif;
  font-size: 29px;
  letter-spacing: 2px;
  text-align: center;
  border-radius: 0;
}
</style>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import "../../../public/css/classes.css";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("encyclopedie", ["monstresId"])
  },
  methods: {},
  mounted() {},
  props: {
    modalMonstres: {
      default: false
    }
  }
};
</script>