<template>
  <div class="row items-start q-gutter-md justify-center">
    <div
      class="col-sm-10 col-10 col-md-10 text-h4 font-bebas text-center text-white"
    >Actualités du jour</div>

    <q-table
      grid
      :card-container-class="cardContainerClass"
      :data="listNews2"
      row-key="name"
      :columns="columns"
      hide-header
      no-data-label="Aucun article trouvé"
      :pagination.sync="pagination"
      :filter="filter"
    >
      <template v-slot:top-left>
        <q-input
          borderless
          dense
          debounce="1000"
          v-model="filter"
          placeholder="Rechercher..."
          style="background: #ffffff7a;border-radius: 5px;padding: 0px 11px;"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div
          class="row justify-center q-table__grid-content"
          style="margin: 0 15px 15px 0 !important;"
        >
          <q-card class="my-card" flat bordered>
            <img :src="props.row.image" />

            <q-card-section>
              <div>
                <img :src="props.row.category" />
              </div>
              <div class="text-overline text-overline-dofus text-yellow-9">{{ props.row.cat }}</div>
              <div
                class="text-h5 q-mt-sm q-mb-xs text-white"
                style="text-overflow: ellipsis;max-width: 317px;overflow: hidden;white-space: nowrap;"
              >{{ props.row.title }}</div>

              <q-scroll-area
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
                style="height: 100px; max-width: 100%;"
              >
                <div
                  class="text-caption text-white"
                  style="max-height: 100px;overflow: hidden;"
                >{{ props.row.content }}</div>
              </q-scroll-area>
            </q-card-section>

            <q-card-actions>
              <q-btn flat color="white" label="Partager" />
              <q-btn flat color="warning" label="Lire la suite" type="button" />
              <q-btn
                v-if="adminIn === true"
                flat
                color="green"
                label="Editer"
                type="button"
                @click="showModalEditNews(props.row)"
              />
              <q-btn
                v-if="adminIn === true"
                flat
                color="yellow-9"
                icon="delete"
                type="button"
                @click="showModalDeleteGeneral(props.row.id)"
              >
                <q-tooltip anchor="top middle" self="center middle">Supprimer l'article</q-tooltip>
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </template>
    </q-table>

    <!-- Modal Edit news -->
    <modalEditNews
      v-if="modalEditNews"
      :modal3.sync="modalEditNews"
      :data="newsModal"
      @closeModalEditNews="closeModal3()"
    />
    <!-- / Modal Edit News -->

    <!-- Modal Delete news -->
    <modalDeleteGeneral
      v-if="modalDeleteGeneral"
      :modal4.sync="modalDeleteGeneral"
      :data="news"
      @closeModalDeleteGeneral="closeModal4()"
    />
    <!-- / Modal Delete News -->
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
</style>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px

.grid-masonry
  flex-direction: column
  height: 300vh

  &--2
    > div
      &:nth-child(2n + 1)
        order: 1
      &:nth-child(2n)
        order: 2

    &:before
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 1
  &--3
    > div
      &:nth-child(3n + 1)
        order: 1
      &:nth-child(3n + 2)
        order: 2
      &:nth-child(3n)
        order: 3

    &:before,
    &:after
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 2
</style>

<script>
import { mapActions, mapState, mapMutations, mapGetters } from "vuex";
import modalEditNews from "../components/modal/admin/modalEditNews";
import modalDeleteGeneral from "../components/modal/admin/modalDeleteGeneral";
import { type } from "os";
import { log } from "util";

export default {
  name: "news",
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: 'Dofus Book - Actualité',
      description: {
          name: "description",
          content: 'Plusieurs milliers de joueurs dans le monde. DOFUS est un jeu de rôle massivement multijoueur où le but est de retrouver les 6 précieux Dofus pour devenir maître d\'Amakna.'
        },
        keywords: { name: "keywords", content: "mmo, mmorpg, free mmorpg, free online mmorpg, video game, video game rental, video game system, free video game, online game, multiplayer game, free multiplayer game, dofus community, comics, pc game, pc game cheat, game, free game, online game, toy game, addicting game" },
        equiv: {
          "http-equiv": "Content-Type",
          content: "text/html; charset=UTF-8"
        }
      }

  },
  data() {
    return {
      pagination: {
        rowsPerPage: 12
        // rowsNumber: xx if getting data from a server
      },
      filter: "",
      columns: [
        {
          name: "title",
          required: false,
          field: row => row.title,
          format: val => `${val}`,
          sortable: true
        }
      ],
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#DF4F30",
        width: "5px",
        opacity: 0.75
      },
      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#A5331B",
        width: "9px",
        opacity: 0.2
      },
      modalEditNews: false,
      modalDeleteGeneral: false,
      news: null,
      newsModal: null
    };
  },
  methods: {
    showModalEditNews(data) {
      this.newsModal = data;
      this.modalEditNews = true;
    },
    closeModal3() {
      this.modalEditNews = false;
    },
    showModalDeleteGeneral(data) {
      this.news = data;
      this.modalDeleteGeneral = true;
    },
    closeModal4() {
      this.modalDeleteGeneral = false;
    },
    ...mapMutations("auth", ["setAdminIn"]),
    ...mapActions("news", ["getNews2"])
  },
  computed: {
    ...mapState("auth", ["adminIn"]),
    ...mapState("news", ["listNews2"]),
    cardContainerClass() {
      if (this.$q.screen.gt.xs) {
        return (
          "grid-masonry grid-masonry--" + (this.$q.screen.gt.sm ? "3" : "2")
        );
      }

      return void 0;
    }
  },
  components: {
    modalEditNews,
    modalDeleteGeneral
  },
  mounted() {
    this.getNews2();
  }
};
</script>