<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="modalMetiers" persistent>
      <q-card
        style="background: rgb(31 31 31 / 78%) !important; color: white; width: 700px; max-width: 80vw;"
      >
        <div class="dof-metiers-content" style="height: 218px;">
          <div class="col-sm-3">
            <div class="dof-encyclo-detail-illu">
              <img class="img-responsive" :src="metiersId.imgUrl" width="100%" />
            </div>
          </div>

          <div
            class="col-sm-9"
            style="position: relative;top: -167px;left: 210px;display: inline-block;width: 451px;"
          >
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

        <q-separator />

        <div class="dof-recettes">Récoltes</div>

        <div style="width: 100%; padding: 10px 10px;">
          <q-table
            :data="metiersId.harvests"
            row-key="name"
            :no-data-label="`Désoler ! Aucune récolte n'a été trouver pour ` + metiersId.name"
            :pagination.sync="pagination"
            class="text-white"
            :columns="columns"
            style="font-weight: 600;"
            hide-pagination
          >
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
                    @click="show(props.row.location, props.row.ankamaId), props.expand = !props.expand"
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
              <q-tr v-show="props.expand" :props="props">
                <q-td colspan="100%">
                  <div
                    class="text-left"
                    style="white-space: normal; font-weight: normal;font-size: 15px;"
                  >
                    <span class="dof-detail-inner" style="font-weight: 600;"><a class="dof-detail-a" :href="props.row.url" target="_blank">Localisation :</a></span>
                    {{ dataLocation }}
                  </div>
                </q-td>
              </q-tr>
            </template>
          </q-table>

          <div class="row justify-center q-mt-md q-mb-md" v-if="metiersId.harvests">
            <q-pagination
              v-model="pagination.page"
              color="orange-10"
              :max="Math.ceil(metiersId.harvests.length / pagination.rowsPerPage)"
              size="md"
            />
          </div>
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

<script>
import "../../../public/css/classes.sass";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      dataLocation: null,
      pagination: {
        sortBy: "level",
        descending: false,
        page: 1,
        rowsPerPage: 12
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
          label: "Niveau",
          name: "level",
          required: true,
          field: row => row.level,
          format: val => `${val}`,
          sortable: true,
          sortBy: "level",
          descending: false,
          align: "left"
        }
      ],
      Recettes: [
        {
          name: "Item 1",
          niveau: 1
        }
      ]
    };
  },
  computed: {
    ...mapGetters("encyclopedie", ["metiersId"])
  },
  methods: {
    show(dataHarv) {
      this.dataLocation = dataHarv.join(", \n");
    }
  },
  mounted() {},
  props: {
    modalMetiers: {
      default: false
    }
  }
};
</script>