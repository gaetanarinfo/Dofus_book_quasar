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

           <template v-slot:no-data="{ icon, message, filter }">
          <div class="full-width row flex-center text-accent q-gutter-sm">
            <q-icon size="2em" name="sentiment_dissatisfied" ></q-icon>
            <span>{{ message }}</span>
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
                    style="font-size: 7px;font-weight: normal !important;padding: 5px 5px;"
                  />
                </q-td>

                <q-td auto-width>
                    <q-avatar size='35px' class='shadow-10 row'>
                      <img :src='props.row.imgUrl' />
                    </q-avatar>
                  </q-td>

                <q-td v-for="col in props.cols" :key="col.name" :props="props">

                  {{ col.value }}   

                </q-td>  
                  
              </q-tr>
              <q-tr v-show="props.expand" :props="props">
                <q-td colspan="100%">
                  <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
                </q-td>
              </q-tr>
            </template>
          </q-table>

          <div class="row justify-center q-mt-md q-mb-md" v-if="metiersId.harvests">
            <q-pagination  v-model="pagination.page" color="orange-10" :max="Math.ceil(metiersId.harvests.length / pagination.rowsPerPage)" size="md" />
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

<style lang="css">
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
  background-image: url("/../../images/dofus/sprite_common.png");
  background-position: -150px 0;
  background-repeat: no-repeat;
  margin-right: 7px;
  top: -4px;
  padding: 0 0.2em;
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
    return {
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
          align: 'left'
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
          align: 'left'
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
  mounted() {
    console.log(this.metiersId.harvests)
  },
  props: {
    modalMetiers: {
      default: false
    }
  }
};
</script>