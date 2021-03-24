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
                    :style="'background-image: url(.../../images/dofus/sprite.png); background-repeat: no-repeat !important; background-size: 76px auto !important; background-position: ' + scope.opt.position + ' !important; height: 35px; width: 35px;'"
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
            <a @click="showModalMetiers(metiers._id)" style="cursor: pointer; width: 154px;">
              <div>
                <img style="width: 154px;" :src="metiers.imgUrl" />
              </div>
              <div class="dof-title dof-title-metier">{{ metiers.name }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Metier Id -->
    <modalMetiers
      v-if="modalMetiers"
      :modalMetiers.sync="modalMetiers"
      @closeModalMetiers="closeModalMetiers()"
    >
      <template v-slot:loading>
        <q-spinner-gears color="white" />
      </template>
    </modalMetiers>
    <!-- / Modal Metier Id -->
  </div>
</template>

<script>
import "../../public/css/component.sass";
import "../../public/css/component-metiers.sass"
import { mapActions, mapState, mapGetters } from "vuex";
import { QSpinnerHearts, QSpinnerHourglass } from "quasar";
import selectClasses from "../components/select/classes.vue";
import modalMetiers from "../components/modal/modalMetiers.vue";

export default {
  data() {
    return {
      modalMetiers: false,
      menu: null,
      options2: selectClasses.options2,
      denseOpts: true,
      dense: true,
      data: {}
    };
  },
  methods: {
    menuForm() {

      const menuValue = this.menu.value;

      this.$q.loading.show({
        spinner: QSpinnerHourglass,
        spinnerColor: "red",
        spinnerSize: 200
      });

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        document.location.href = '#/' + menuValue
        this.timer = void 0;
      }, 2500);

    },
    showModalMetiers(data) {
      this.getMetiersId(data);
      this.modalMetiers = true;
    },
    closeModalMetiers() {
      this.modalMetiers = false;
    },
    ...mapActions("encyclopedie", ["getMetiersId"])   
  },
  components: {
    modalMetiers
  },
  props: {
    listMetiers: Array
  }
};
</script>