<template>
  <div class="justify-center bloc row">
    <div class="bloc-d col-md-12" style="width: 100%;">
      <div class="bloc-i">
        <div style="width: 100%;">
          <div style="display: inline-block;">
            <q-select
              v-model="search"
              :options="options"
              :dense="dense"
              :options-dense="denseOpts"
              style="width: 298px;"
              class="q-mb-md"
              label="Trier par Role :"
              clearable
              @input="searchForm()"
            >
              <template v-slot:append>
                <q-avatar>
                  <img src="images/dofus/search.png" />
                </q-avatar>
              </template>
            </q-select>
          </div>
          <div style="display: inline-block; float: right;">
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
        </div>

        <div class="bloc-h">
          <div class="bloc-g">
            <div
              class="dof-img"
              style="display: inline-block; background-position: 0px -10px; !important;"
            ></div>
            <h4 class="text-white font-bebas h4-perso">Classes</h4>
          </div>
        </div>

        <div class="row bloc-f" id="classesRoles" v-if="show === true">
          <div
            class="col col-xs-5 col-sm-5 col-md-5 q-mr-md q-ml-md"
            style="width: 427px !important;"
            v-for="classesRole in data"
            :key="classesRole.id"
          >
            <a
              style="cursor: pointer;"
              @click="showModalClasses(classesRole.order, classesRole.image, classesRole.title, classesRole.api)"
              class="dof-item"
            >
              <div class="dof-block-img">
                <div>
                  <img style="max-width: 413px;" :src="classesRole.image" />
                </div>
              </div>
              <div class="dof-title">{{ classesRole.title }}</div>
            </a>
          </div>
        </div>

        <div class="row bloc-f" id="classesAll">
          <div
            class="col col-xs-5 col-sm-5 col-md-5 q-mr-md q-ml-md"
            style="width: 427px !important;"
            v-for="classes in listClasses"
            :key="classes.id"
          >
            <a
              style="cursor: pointer;"
              @click="showModalClasses(classes.order, classes.image, classes.title, classes.api)"
              class="dof-item"
            >
              <div class="dof-block-img">
                <div>
                  <img style="max-width: 413px;" :src="classes.image" />
                </div>
              </div>
              <div class="dof-title">{{ classes.title }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Classes Id -->
    <modalClasses
      v-if="modalClasses"
      :data="newsModalClasses"
      :data2="newsModalClasses2"
      :data3="newsModalClasses3"
      :data4="newsModalClasses4"
      :modalClasses.sync="modalClasses"
      @closeModalClasses="closeModalClasses()"
    >
      <template v-slot:loading>
        <q-spinner-gears color="white" />
      </template>
    </modalClasses>
    <!-- / Modal Classes Id -->
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import modalClasses from "../components/modal/modalClasses.vue";
import { QSpinnerHearts, QSpinnerHourglass } from "quasar";
import "../../public/css/classes-component.css"
import selectClasses from "../components/select/classes.vue";

export default {
  data() {
    return {
      modalClasses: false,
      search: null,
      menu: null,
      options: selectClasses.options,
      options2: selectClasses.options2,
      show: false,
      data: {},
      classesAll: document.getElementById("classesAll"),
      denseOpts: true,
      dense: true
    };
  },
  methods: {
    showLoading() {
      this.$q.loading.show({
        spinner: QSpinnerHearts,
        spinnerColor: "green",
        spinnerSize: 100
      });

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        this.show = true;
        this.timer = void 0;
      }, 2500);
    },
    searchForm() {
      const searchValue = this.search.value;

      this.getClassesRoles(searchValue);

      this.showLoading();

      setTimeout(() => {
        this.data = this.listClassesRoles;
        classesAll.style.display = "none";
      }, 2500);
    },
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
    showModalClasses(data, data2, data3, data4) {
      this.getClassesId(data);
      this.newsModalClasses = data;
      this.newsModalClasses2 = data2;
      this.newsModalClasses3 = data3;
      this.newsModalClasses4 = data4;
      this.modalClasses = true;
    },
    ...mapActions("encyclopedie", ["getClassesId"]),
    ...mapActions("encyclopedie", ["getClassesRoles"]),
    closeModalClasses() {
      this.modalClasses = false;
    },
    beforeDestroy() {
      if (this.timer !== void 0) {
        clearTimeout(this.timer);
        this.$q.loading.hide();
      }
    }
  },
  computed: {
    ...mapState("encyclopedie", ["listClassesRoles"])
  },
  components: { modalClasses },
  props: {
    listClasses: Array
  }
};
</script>