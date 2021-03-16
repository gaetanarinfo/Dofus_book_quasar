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
              style="display: inline-block; background-position: 0px -435px; !important;"
            ></div>
            <h4 class="text-white font-bebas h4-perso">Bestiaire</h4>
          </div>
        </div>

        <div class="row bloc-f justify-center">
          <div style="display: block;margin: 0 14px;">
            <q-table
              v-if="mode === true"
              grid
              :loading="loading"
              :data="listMonstres"
              row-key="name"
              hide-header
              no-data-label="Désoler il n'y a pas de résultat !"
              :pagination.sync="pagination"
              class="text-white q-mt-sm justify-center"
              style="font-weight: 600;width: 100%;border-radius:0px;"
              hide-pagination
              :filter="filter"
            >
              <template v-slot:loading>
                <q-inner-loading showing color="primary" />
              </template>

              <template v-slot:top-right>
                <q-input
                  borderless
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Rechercher un monstre..."
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>

                <q-btn flat round dense icon="list" @click="showList()" v-if="mode === true">
                  <q-tooltip anchor="bottom middle" self="center middle">Liste</q-tooltip>
                </q-btn>
              </template>

              <template v-slot:top-left>
                <q-select
                  square
                  outlined
                  v-model="order"
                  :options="options"
                  style="width: 122px;"
                  :dense="dense"
                  :options-dense="denseOpts"
                  label="Items +"
                  @input="orderByAff()"
                />
                <div class="q-mt-md text-grey-1" style="letter-spacing: 1px;">
                  <span class="text-orange-10">{{ listMonstres.length }}</span> éléments correspondent à tes critères
                </div>
              </template>

              <template v-slot:item="props">
                <div
                  class="col-3 col-xs-3 col-sm-3 col-md-3 q-mb-sm q-mr-sm q-mt-sm q-ml-sm dof-mosaic-item-illu dof-metiers-item"
                  style="width: 206px !important; height: 206px !important;"
                >
                  <a
                    @click="showModalMonstres(props.row._id)"
                    style="cursor: pointer; width: 154px;"
                  >
                    <div>
                      <img style="width: 127px;" :src="props.row.imgUrl" />
                    </div>
                    <div class="dof-title dof-title-metier">{{ props.row.name }}</div>
                     <div class="dof-title dof-title-metier">{{ props.row.type }}</div>
                  </a>
                </div>
              </template>
            </q-table>
          </div>

          <div class="row justify-center q-mt-md q-mb-md" v-if="listMonstres && mode === true">
            <q-pagination
              v-model="pagination.page"
              color="grey-10"
              :max="Math.ceil(listMonstres.length / pagination.rowsPerPage)"
              size="md"
              :boundary-links="true"
              :direction-links="true"
              :max-pages="6"
            />
          </div>

          <q-table
            :loading="loading"
            grid-header
            :filter="filter"
            v-else-if="mode === false"
            :data="listMonstres"
            row-key="name"
            :no-data-label="`Désoler ! Aucune récolte n'a été trouver pour `"
            :pagination.sync="pagination"
            class="text-white q-mt-md"
            :columns="columns"
            style="font-weight: 600;width: 100%;border-radius:0px;"
            hide-pagination
          >
            <template v-slot:loading>
              <q-inner-loading showing color="primary" />
            </template>

            <template v-slot:top-right>
              <q-input
                borderless
                dense
                debounce="300"
                v-model="filter"
                placeholder="Rechercher un monstre..."
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>

              <q-btn flat round dense icon="grid_on" @click="showGrid()" v-if="mode === false">
                <q-tooltip anchor="bottom middle" self="center middle">Mosaic</q-tooltip>
              </q-btn>
            </template>

            <template v-slot:top-left>
              <q-select
                square
                outlined
                v-model="order"
                :options="options"
                style="width: 122px;"
                :dense="dense"
                :options-dense="denseOpts"
                label="Items +"
                @input="orderByAff()"
              />
              <div class="q-mt-md text-grey-1" style="letter-spacing: 1px; margin-bottom: 0px">
                <span class="text-orange-10">{{ listMonstres.length }}</span> éléments correspondent à tes critères
              </div>
            </template>

            <template v-slot:no-data="{ icon, message }">
              <div class="full-width row flex-center text-accent q-gutter-sm">
                <q-icon size="3em" class="text-orange-9" name="sentiment_dissatisfied"></q-icon>
                <span class="text-orange-9">{{ message }}</span>
              </div>
            </template>

            <template v-slot:header="props">
              <q-tr :props="props">
                <q-th auto-width />
                <q-th auto-width />
                <q-th
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                  style="color: #f87f29 !important;"
                >{{ col.label }}</q-th>
              </q-tr>
            </template>

            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td auto-width>
                  <q-btn
                    size="sm"
                    color="green"
                    glossy
                    dense
                    @click="props.expand = !props.expand"
                    :icon="props.expand ? 'fas fa-minus' : 'fas fa-plus'"
                    style="font-weight: normal !important;padding: 2px 2px;"
                  />
                </q-td>

                <q-td auto-width>
                  <q-avatar size="35px" class="shadow-10 row">
                    <img width="40px" height="40px" :src="props.row.imgUrl" :alt="props.row.name" />
                  </q-avatar>
                </q-td>

                <q-td v-for="col in props.cols" :key="col.name" :props="props">{{ col.value }}</q-td>
              </q-tr>
            </template>
          </q-table>

          <div class="row justify-center q-mt-md q-mb-md" v-if="listMonstres && mode === false">
            <q-pagination
              v-model="pagination.page"
              color="grey-10"
              :max="Math.ceil(listMonstres.length / pagination.rowsPerPage)"
              size="md"
              :boundary-links="true"
              :direction-links="true"
              :max-pages="6"
            />
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
  background: url("../../public/images/dofus/bg-item.jpg") center center
    no-repeat;
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
  background: url("../../public/images/dofus/bg-item-hover.jpg") center center
    no-repeat;
  background-size: cover;
}
</style>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { QSpinnerHearts, QSpinnerHourglass } from "quasar";
import "../../public/css/classes-component.css";
import selectClasses from "../components/select/classes.vue";

export default {
  data() {
    return {
      mode: true,
      inFullscreen: false,
      loading: false,
      filter: "",
      menu: null,
      order: null,
      options: [
        {
          label: "12 items",
          value: "12"
        },
        {
          label: "24 items",
          value: "24"
        },
        {
          label: "48 items",
          value: "48"
        },
        {
          label: "96 items",
          value: "96"
        }
      ],
      options2: selectClasses.options2,
      denseOpts: true,
      dense: true,
      pagination: {
        sortBy: "nom",
        descending: false,
        page: 1,
        rowsPerPage: 24
      },
      columns: [
        {
          label: "Nom",
          name: "name",
          required: true,
          field: row => row.name,
          format: val => `${val}`,
          sortable: true,
          sortBy: "name",
          align: "left"
        },
        {
          label: "Type",
          name: "type",
          required: true,
          field: row => row.type,
          format: val => `${val}`,
          sortable: true,
          sortBy: "name",
          align: "left"
        }
      ]
    };
  },
  methods: {
    showList() {
      this.mode = false;
    },
    showGrid() {
      this.mode = true;
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
        document.location.href = "#/" + menuValue;
        this.timer = void 0;
      }, 2500);
    },
    orderByAff() {
      this.pagination.rowsPerPage = this.order.value;
    },
    resultLength() {
      this.dataResult = this.listMonstres.length;
      setTimeout(this.checkNotif, 500);
    }
  },
  props: {
    listMonstres: Array
  }
};
</script>