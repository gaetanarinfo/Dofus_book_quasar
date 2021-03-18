<template>
  <q-page style="min-height: 482px;padding-top: 0 !important;margin-top: -36px;">
    <video-component></video-component>

    <div class="row items-start q-gutter-md justify-center">
      <div
        style="background-image: url('background/bg-news-dofus-2.jpg');background-position: center;background-size: cover;background-repeat: no-repeat; background-attachment: fixed; width: 100%;"
      >
        <div
          class="col-sm-9 col-12 text-h4 font-bebas text-center text-white"
          style="margin: 18px 0px 11px 0;"
        >Bienvenue dans le jeu en ligne multijoueur gratuit DOFUS !</div>

        <news-component :listNews="listNews"></news-component>
      </div>

      <div
        style="background-image: url('background/bg-launcher.jpg');background-position: center;background-size: cover;background-repeat: no-repeat; background-attachment: fixed; margin: 0; width:100%;"
      >
        <launcher-component></launcher-component>
      </div>

    </div>

    <footer-component></footer-component>
    
  </q-page>
</template>

<style lang="css">
@media only screen and (min-width: 800px) {
  .dofus {
    background-color: #5b2409 !important;
  }
}

.dofus {
  background-color: #5b2409 !important;
}
</style>

<script lang="ts">
import NewsComponent from "components/NewsComponent.vue";
import VideoComponent from "components/VideoComponent.vue";
import LauncherComponent from "components/LauncherComponent.vue";
import FooterComponent from "components/FooterComponent.vue";
import { defineComponent, ref } from "@vue/composition-api";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "PageIndex",
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: "Dofus Book",
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
  components: {
    NewsComponent,
    VideoComponent,
    LauncherComponent,
    FooterComponent
  },
  methods: {
    ...mapActions("news", ["getNews"])
  },
  computed: {
    ...mapState("news", ["listNews"])
  },
  mounted() {
    this.getNews();
  }
});
</script>
