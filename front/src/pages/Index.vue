<template>
  <q-page>
    <video-component></video-component>
      <div
        style="background-image: url('background/bg-news-dofus-2.jpg');background-position: center;background-size: cover;background-repeat: no-repeat; background-attachment: fixed; width: 100%;"
      >
        <div
          class="col-sm-9 col-12 text-h4 font-bebas text-center text-white"
          style="padding: 49px 20px 0 20px;margin: 0px 0px 20px;"
        >Bienvenue dans le jeu en ligne multijoueur gratuit DOFUS !</div>

        <news-component :listNews="listNews"></news-component>
      </div>

      <div
        style="background-image: url('images/dofus/bg-galerie.jpg');background-position: center;background-repeat: no-repeat; background-size: cover; margin: 0; width:100%;"
      >
      <galerie-component :listImage="listImage"></galerie-component>
    </div>

      <div
        style="background-image: url('background/bg-launcher.jpg');background-position: center;background-size: cover;background-repeat: no-repeat; background-attachment: fixed; margin: 0; width:100%;"
      >
        <launcher-component></launcher-component>
      </div>

      <div
        style="background-image: url('bloc-games/bg-block10.jpg');background-position: center;background-repeat: no-repeat; background-size: cover; margin: 0; width:100%;"
      >
        <system-component></system-component>
      </div>

      <div
        style="background-image: url('bloc-games/bg-block11.jpg');background-position: center;background-repeat: no-repeat; background-size: cover; margin: 0; width:100%;"
      >
        <system2-component id="system2" style="display: none;"></system2-component>
      </div>

      <div
        style="background-image: url('images/dofus/bg-social.jpg');background-position: center;background-repeat: no-repeat; background-size: cover; margin: 0; width:100%;"
      >
      <footer-component></footer-component>
    </div>
    <q-page-scroller position="bottom-right" :scroll-offset="250" :offset="[25, 25]">
        <q-btn style="background: transparent;">
          <img src="/images/dofus/little_logo.png" />
          <q-tooltip anchor="top middle" self="center middle">Remonter en haut</q-tooltip>
        </q-btn>
     </q-page-scroller>
  </q-page>
</template>

<script lang="ts">
import '../../public/css/launcher.sass'
import '../../public/css/system.sass'
import '../../public/css/system2.sass'
import NewsComponent from "components/NewsComponent.vue";
import VideoComponent from "components/VideoComponent.vue";
import GalerieComponent from "components/GalerieComponent.vue";
import LauncherComponent from "components/LauncherComponent.vue";
import SystemComponent from "components/SystemComponent.vue"
import System2Component from "components/System2Component.vue"
import FooterComponent from "components/FooterComponent.vue";
import { defineComponent, ref } from "@vue/composition-api";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {

    }
  },
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
    GalerieComponent,
    LauncherComponent,
    SystemComponent,
    System2Component,
    FooterComponent
  },
  methods: {
    ...mapActions("news", ["getNews"]),
    ...mapActions("general", ["getImage"])
  },
  computed: {
    ...mapState("news", ["listNews"]),
    ...mapState("general", ["listImage"]),
  },
  mounted() {
    this.getNews();
    this.getImage();
  }
});
</script>
