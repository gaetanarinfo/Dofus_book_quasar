<template>
  <div class="row items-start q-gutter-md justify-center q-mt-md">
    <div
      class="col-sm-10 col-10 col-md-10 text-h4 font-bebas text-center text-white"
    >Actualités du jour</div>

    <div style="max-width: 1102px;">
      <q-table
        v-if="actu === true"
        :loading="loading"
        grid
        :card-container-class="cardContainerClass"
        :data="listNews2"
        row-key="title"
        :columns="columns"
        hide-header
        no-data-label="Désolé, aucun article trouvé"
        :pagination.sync="pagination"
        :filter="filter"
        hide-pagination
      >
        <template v-slot:top-left>
          <q-select
            square
            outlined
            v-model="order"
            :options="options"
            style="width: 122px; margin: 0 11px 0 -11px; display: inline-block;"
            :dense="dense"
            :options-dense="denseOpts"
            label="Actus +"
            @input="orderByAff()"
          />

          <q-select
            square
            outlined
            v-model="orderCat"
            :options="options2"
            style="width: 175px; margin: 0 0; display: inline-block;"
            :dense="dense"
            :options-dense="denseOpts"
            label="Trier par catégorie"
            @input="orderByCat()"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                <q-item-section avatar>
                  <div>
                    <img width="31px" :src="scope.opt.img" :alt="scope.opt.label" />
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-item-label
                    style="font-weight: 500;font-size: 14px;letter-spacing: 0.5px;margin: 0 -10px;"
                    class="text-black"
                    v-html="scope.opt.label"
                  />
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </template>

        <template v-slot:loading>
          <q-inner-loading showing color="primary" />
        </template>

        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Rechercher une actus..."
            clearable
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:no-data="{ icon, message }">
          <div class="full-width row flex-center text-accent q-gutter-sm">
            <q-icon size="3em" class="text-orange-9" name="sentiment_dissatisfied"></q-icon>
            <span class="text-orange-9">{{ message }}</span>
          </div>
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
                <q-btn
                  flat
                  color="warning"
                  label="Lire la suite"
                  type="a"
                  :href="props.row.url"
                  target="_blank"
                />
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
                  @click="showModalDeleteGeneral(props.row._id)"
                >
                  <q-tooltip anchor="top middle" self="center middle">Supprimer l'article</q-tooltip>
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </template>
      </q-table>

      <q-table
        v-if="actu === false"
        :loading="loading"
        grid
        :card-container-class="cardContainerClass"
        :data="listNews3"
        row-key="title"
        :columns="columns"
        hide-header
        no-data-label="Désolé, aucun article trouvé"
        :pagination.sync="pagination2"
        :filter="filter"
        hide-pagination
      >
        <template v-slot:top-left>
          <q-select
            square
            outlined
            v-model="order"
            :options="options"
            style="width: 122px; margin: 0 11px 0 -11px; display: inline-block;"
            :dense="dense"
            :options-dense="denseOpts"
            label="Actus +"
            @input="orderByAff()"
          />

          <q-select
            square
            outlined
            v-model="orderCat"
            :options="options2"
            style="width: 175px; margin: 0 0; display: inline-block;"
            :dense="dense"
            :options-dense="denseOpts"
            label="Trier par catégorie"
            @input="orderByCat()"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                <q-item-section avatar>
                  <div>
                    <img width="31px" :src="scope.opt.img" :alt="scope.opt.label" />
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-item-label
                    style="font-weight: 500;font-size: 14px;letter-spacing: 0.5px;margin: 0 -10px;"
                    class="text-black"
                    v-html="scope.opt.label"
                  />
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </template>

        <template v-slot:loading>
          <q-inner-loading showing color="primary" />
        </template>

        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Rechercher une actus..."
            clearable
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:no-data="{ icon, message }">
          <div class="full-width row flex-center text-accent q-gutter-sm">
            <q-icon size="3em" class="text-orange-9" name="sentiment_dissatisfied"></q-icon>
            <span class="text-orange-9">{{ message }}</span>
          </div>
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
                <q-btn
                  flat
                  color="warning"
                  label="Lire la suite"
                  type="a"
                  :href="props.row.url"
                  target="_blank"
                />
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
                  @click="showModalDeleteGeneral(props.row._id)"
                >
                  <q-tooltip anchor="top middle" self="center middle">Supprimer l'article</q-tooltip>
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>

    <div class="row q-mt-md q-mb-md justify-center" style="width: 100%" v-if="actu === true">
      <q-pagination
        v-model="pagination.page"
        color="grey-10"
        :max="Math.ceil(listNews2.length / pagination.rowsPerPage)"
        size="md"
        :boundary-links="true"
        :direction-links="true"
        :max-pages="6"
      />
    </div>

    <div class="row q-mt-md q-mb-md justify-center" style="width: 100%" v-if="actu === false">
      <q-pagination
        v-model="pagination2.page"
        color="grey-10"
        :max="Math.ceil(listNews3.length / pagination2.rowsPerPage)"
        size="md"
        :boundary-links="true"
        :direction-links="true"
        :max-pages="6"
      />
    </div>

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

    <q-page-scroller position="bottom-right" :scroll-offset="250" :offset="[25, 25]">
        <q-btn style="background: transparent;">
          <img src="/images/dofus/little_logo.png" />
          <q-tooltip anchor="top middle" self="center middle">Remonter en haut</q-tooltip>
        </q-btn>
     </q-page-scroller>
  </div>
</template>

<script>
import '../../public/css/news.sass'
import { mapActions, mapState, mapMutations, mapGetters } from "vuex";
import modalEditNews from "../components/modal/admin/modalEditNews";
import { QSpinnerHearts, QSpinnerHourglass } from "quasar";
import modalDeleteGeneral from "../components/modal/admin/modalDeleteGeneral";
import { type } from "os";

export default {
  name: "news",
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: "Dofus Book - Actualité",
      description: {
        name: "description",
        content:
          "Plusieurs milliers de joueurs dans le monde. DOFUS est un jeu de rôle massivement multijoueur où le but est de retrouver les 6 précieux Dofus pour devenir maître d'Amakna."
      },
      keywords: {
        name: "keywords",
        content:
          "mmo, mmorpg, free mmorpg, free online mmorpg, video game, video game rental, video game system, free video game, online game, multiplayer game, free multiplayer game, dofus community, comics, pc game, pc game cheat, game, free game, online game, toy game, addicting game"
      },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    };
  },
  data() {
    return {
      loading: null,
      denseOpts: true,
      order: null,
      orderCat: null,
      dense: true,
      actu: true,
      pagination: {
        sortBy: "name",
        descending: false,
        page: 1,
        rowsPerPage: 6
      },
      pagination2: {
        sortBy: "name",
        descending: false,
        page: 1,
        rowsPerPage: 6
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
      options: [
        {
          label: "6 actus",
          value: "6"
        },
        {
          label: "12 actus",
          value: "12"
        },
        {
          label: "24 actus",
          value: "24"
        },
        {
          label: "48 actus",
          value: "48"
        },
        {
          label: "96 actus",
          value: "96"
        }
      ],
      options2: [
         {
          label: "Tout afficher",
          value: "All",
          img: "../news/categorie/1103319.png"
        },
        {
          label: "Shop",
          value: "Shop",
          img: "../news/categorie/419540.png"
        },
        {
          label: "Event",
          value: "Event",
          img: "../news/categorie/1103319.png"
        },
        {
          label: "Info",
          value: "Info",
          img: "../news/categorie/425153.png"
        },
        {
          label: "Communauté",
          value: "Communauté",
          img: "../news/categorie/420041.png"
        }
      ],
      modalEditNews: false,
      modalDeleteGeneral: false,
      news: null,
      newsModal: null
    };
  },
  methods: {
    orderByCat() {

      const menuValue = this.orderCat.value;

      this.$q.loading.show({
        spinner: QSpinnerHourglass,
        spinnerColor: "red",
        spinnerSize: 200
      });

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();

        if(menuValue === "All") {
          this.actu = true;
        }else{
          this.getNews3(menuValue);
          this.actu = false;
        }
        
        this.timer = void 0;
      }, 2500);

    },
    orderByAff() {
      this.pagination.rowsPerPage = this.order.value;
    },
    showArticle(data) {
      location.href = "/#/article/" + data;
    },
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
    ...mapActions("news", ["getNews2"]),
    ...mapActions("news", ["getNews3"])
  },
  computed: {
    ...mapState("auth", ["adminIn"]),
    ...mapState("news", ["listNews2"]),
    ...mapState("news", ["listNews3"]),
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