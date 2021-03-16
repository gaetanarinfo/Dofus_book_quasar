<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="modalMetiers" persistent>
      <q-card
        style="background: rgb(31 31 31 / 78%) !important; color: white; width: 700px; max-width: 80vw;"
      >

        <div class="dof-metiers-content" style="height: 218px;">
          <div class="col-sm-3">
            <div class="dof-encyclo-detail-illu">
              <img
                class="img-responsive"
                :src="metiersId.imgUrl"
                width="100%"
              />
            </div>
          </div>

          <div class="col-sm-9" style="position: relative;top: -167px;left: 210px;display: inline-block;width: 451px;">
            <div class="dof-container dof-panel">
              <div class="dof-panel-title">
                <span class="dof-panel-title-icon"></span>
                Description du métier
              </div>

              <div class="ak-panel-content">
                <p>{{ metiersId.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="dof-recettes">
          Recettes
        </div>

        <q-separator />

        <q-card-actions align="right">
          <q-btn glossy clickable v-close-popup @click="$emit('closeModalMetiers')" color="red-8">
            <q-item-section>
              <q-item-label>Fermer</q-item-label>
            </q-item-section>
          </q-btn>

          <q-btn glossy clickable type="a" :href="metiersId.url" target="_blank" color="green-8">
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
.dof-metiers-content {
  padding: 12px;
}

.dof-encyclo-detail-illu {
    border-top-color: #b1ac9c;
    border-right-color: #c9c6bb;
    border-bottom-color: #dfdbcd;
    border-left-color: #c9c6bb;
    background: url('/../../images/dofus/bg-item.jpg') center center no-repeat;
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
    font-family: "bebas",sans-serif;
    border-bottom: none;
    height: auto;
    line-height: 28px;
    min-height: 32px;
    text-shadow: none;
    color: #f1edea;
    background: none;
}

.dof-panel-title .dof-panel-title-icon {
    background-image: url('/../../images/dofus/sprite_common.png');
    background-position: -150px 0;
    background-repeat: no-repeat;
    margin-right: 7px;
    top: -4px;
    padding: 0 .2em;
    vertical-align: middle;
    width: auto;
    height: 28px;
    line-height: 28px;
}
.dof-panel-title-icon:not(.ak-icon-med) {
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
    font-family: "bebas",sans-serif;
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
    ...mapGetters("encyclopedie", ["metiersId"])
  },
  props: {
    modalMetiers: {
      default: false
    }
  }
};
</script>