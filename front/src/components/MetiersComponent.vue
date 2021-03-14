<template>
  <div class="justify-center bloc row">
    <div class="bloc-d col-md-12" style="width: 100%;">
      <div class="bloc-i">
        <div style="width: 100%;">
            <q-select
              style="width: 298px;"
              :dense="dense"
              :options-dense="denseOpts"
              class="q-mb-md"
              v-model="menu"
              :options="options2"
              label="Menu"
              clearable
              @input="menuForm()"
            >
            
              <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                  <q-item-section avatar>
                    <div
                      :style="'background-image: url(img/sprite.png); background-repeat: no-repeat !important; background-size: 76px auto !important; background-position: ' + scope.opt.position + ' !important; height: 35px; width: 35px;'"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label
                      style="font-weight: 500;font-size: 16px;letter-spacing: 0.5px;padding: 10px 0px;"
                      class="text-black"
                      v-html="scope.opt.label"
                    />
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
        </div>

        <div class="bloc-h">
          <div class="bloc-g">
            <div
              class="dof-img"
              style="display: inline-block; background-position: 0px -344px; !important;"
            ></div>
            <h4 class="text-white font-bebas h4-perso">Métiers</h4>
          </div>
        </div>

        <div class="row bloc-f justify-center">
          <div
            class="col-3 col-xs-3 col-sm-3 col-md-3 q-mr-sm q-mt-md q-ml-sm dof-mosaic-item-illu dof-metiers-item"
            style="width: 206px !important; height: 206px !important;"
            v-for="metiers in listMetiers"
            :key="metiers.id"
          >
            <a
              style="cursor: pointer; width: 154px;"
            >
                <div>
                  <img style="width: 154px;" :src="metiers.imgUrl" />
                </div>
              <div class="dof-title dof-title-metier">{{ metiers.name }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.dof-mosaic-item-illu {
    padding: 15px;
    padding: 1.5rem;
    border: 4px inset;
    position: relative;
    text-align: center;
    border-radius: 0;
    overflow: hidden;
}

.dof-metiers-item {
    border-color: #c9c6bb;
    background: url('../../public/images/dofus/bg-item.jpg') center center no-repeat;
    background-size: cover;
    color: #c9c6bb;
    width: 206px !important;
    height: 208px !important;
    padding: 10px 0;
}

.dof-title-metier {
  font-weight: 500;
  letter-spacing: 1px;
}

.dof-metiers-item:hover {
    cursor: pointer;
    background: url("../../public/images/dofus/bg-item-hover.jpg") center center no-repeat;
    background-size:cover
}
</style>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { QSpinnerHearts, QSpinnerHourglass } from "quasar";
import "../../public/css/classes-component.css"
import selectClasses from "../components/select/classes.vue";

export default {
  data() {
    return {
      menu: null,
      options2: selectClasses.options2,
      denseOpts: true,
      dense: true
    };
  },
  props: {
    listMetiers: Array
  }
};
</script>