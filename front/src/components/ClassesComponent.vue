<template>
  <div class="justify-center bloc row">
    <div class="bloc-d col-md-12" style="width: 100%;">
      <div class="bloc-i">
        <q-select
          v-model="search"
          :options="options"
          :dense="dense"
          :options-dense="denseOpts"
          style="width: 298px;"
          class="q-mb-md"
          @input="searchForm()"
        >
          <template v-slot:append>
            <q-avatar>
              <img src="images/dofus/search.png" />
            </q-avatar>
          </template>
        </q-select>

        <div class="bloc-h">
          <div class="bloc-g">
            <div
              class="dof-img"
              style="display: inline-block; background-position: 0px -10px; !important;"
            ></div>
            <h4 class="text-white font-bebas h4-perso">Classes</h4>
          </div>
        </div>

        <div class="row bloc-f" id="classesRoles" style="display:none;">
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

<style lang="css">
.bloc {
  margin: 0 auto;
  max-width: 952px;
}

.bloc-d {
  display: block;
  position: relative;
  padding: 12px 12px 12px 12px;
  background: none repeat scroll 0 0 rgba(255, 255, 255, 0.3);
  min-height: 450px;
  max-width: 952px;
}

.bloc-g {
  display: inline-block;
  width: 100%;
  height: 70px;
}

.h4-perso {
  position: relative;
  display: inline-block;
  margin: 0 0 0 13px;
  top: -19px;
}

.bloc-h {
  background: rgb(33 35 30 / 47%) !important;
  width: auto !important;
  height: auto !important;
  padding: 12px 12px 12px 12px;
}

.bloc-i {
  margin: 5px 5px;
}

.dof-img {
  background-image: url("../../public/images/dofus/sprite.png");
  background-repeat: no-repeat;
  background-size: 126px auto;
  width: 65px;
  height: 65px;
  position: relative;
}

.bloc-e > img {
  box-shadow: 0 0 10px #0000008f;
  max-width: 100%;
}

.dof-item .dof-title {
  font-size: 20px;
  color: #e4e4e4fa;
  line-height: 18px;
  padding: 6px 0 6px 0;
  letter-spacing: 1px;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: middle;
  text-align: center;
  font-family: "bebas", sans-serif;
}

.dof-item:hover,
.dof-item:focus {
  background: #8886865e;
}

.dof-item {
  padding: 6px;
  background: #00000073;
  margin-top: 12px;
  display: block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-decoration: none;
}
</style>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import modalClasses from "../components/modal/modalClasses.vue";

export default {
  data() {
    return {
      modalClasses: false,
      search: null,
      data: {},
      classesAll: document.getElementById("classesAll"),
      classesRoles: document.getElementById("classesRoles"),
      options: [
        {
          label: "Tout voir",
          value: "All"
        },
        {
          label: "Amélioration",
          value: "Amélioration"
        },
        {
          label: "Dégâts",
          value: "Dégâts"
        },
        {
          label: "Entrave",
          value: "Entrave"
        },
        {
          label: "Invocation",
          value: "Invocation"
        },
        {
          label: "Placement",
          value: "Placement"
        },
        {
          label: "Protection",
          value: "Protection"
        },
        {
          label: "Soin",
          value: "Soin"
        },
        {
          label: "Tank",
          value: "Tank"
        }
      ],
      denseOpts: true,
      dense: true
    };
  },
  methods: {
    searchForm() {
      const searchValue = this.search.value;

      this.getClassesRoles(searchValue);

      setTimeout(() => {
        this.data = this.listClassesRoles;
        classesAll.style.display = "none";
        classesRoles.style.display = "";
      }, 2500);

      if (searchValue === "All") {
        classesAll.style.display = "";
      }
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
      localStorage.removeItem("imgMale");
      localStorage.removeItem("imgFemale");
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