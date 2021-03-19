<template>
  <div class="row items-start q-gutter-md justify-center" style="margin-bottom: 13px;padding: 0 0 35px 0;">
    <q-card class="my-card" flat bordered v-for="news in listNews" :key="news.id">
      <img :src="news.image" />

      <q-card-section>
        <div>
          <img :src="news.category" />
        </div>
        <div class="text-overline text-overline-dofus text-yellow-9">{{ news.cat }}</div>
        <div
          class="text-h5 q-mt-sm q-mb-xs text-white"
          style="text-overflow: ellipsis;max-width: 317px;overflow: hidden;white-space: nowrap;"
        >{{ news.title }}</div>

        <q-scroll-area
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          style="height: 100px; max-width: 100%;"
        >
          <div
            class="text-caption text-white"
            style="max-height: 100px;overflow: hidden;"
          >{{ news.content }}</div>
        </q-scroll-area>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="white" label="Partager" />
        <q-btn
          flat
          color="warning"
          label="Lire la suite"
          type="a"
          :href="news.url"
          target="_blank"
        />
        <q-btn
          v-if="adminIn === true"
          flat
          color="green"
          label="Editer"
          type="button"
          @click="showModalEditNews(news)"
        />
        <q-btn
          v-if="adminIn === true"
          flat
          color="yellow-9"
          icon="delete"
          type="button"
          @click="showModalDeleteGeneral(news._id)"
        >
          <q-tooltip anchor="top middle" self="center middle">Supprimer l'article</q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card>

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

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import modalEditNews from "../components/modal/admin/modalEditNews";
import modalDeleteGeneral from "../components/modal/admin/modalDeleteGeneral";

export default {
  name: "news",
  data() {
    return {
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
    showArticle(data) {
      localStorage.setItem("articleId", data);

      location.href = "/#/article/" + data;
    },
    ...mapMutations("auth", ["setAdminIn"])
  },
  computed: {
    ...mapState("auth", ["adminIn"])
  },
  components: {
    modalEditNews,
    modalDeleteGeneral
  },
  props: {
    listNews: Array
  }
};
</script>