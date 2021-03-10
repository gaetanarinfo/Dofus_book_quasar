<template>
  <q-page>

    <div class="row q-pa-md">
      <div class="col-md-12 col-12 col-sm-12">
        <div class="q-breadcrumbs text-brown">
          <div class="flex items-center justify-center q-gutter-sm">
            <div class="flex items-center text-primary">
              <span
                class="q-breadcrumbs__el q-link flex inline items-center relative-position text-white text-bold"
                style="letter-spacing: 0.5px;"
              >
                <i
                  aria-hidden="true"
                  role="presentation"
                  class="q-breadcrumbs__el-icon material-icons q-icon notranslate q-breadcrumbs__el-icon--with-label"
                >home</i>
                Accueil
              </span>
            </div>
            <div class="q-breadcrumbs__separator">
              <i
                aria-hidden="true"
                role="presentation"
                class="material-icons q-icon notranslate text-white"
                style="font-size: 1.5em;"
              >chevron_right</i>
            </div>
            <div class="flex items-center q-breadcrumbs--last">
              <span
                class="q-breadcrumbs__el q-link flex inline items-center relative-position text-bold"
                style="color: rgb(251, 140, 0) !important; letter-spacing: 0.5px;"
              >
                <i
                  aria-hidden="true"
                  role="presentation"
                  class="q-breadcrumbs__el-icon material-icons q-icon notranslate q-breadcrumbs__el-icon--with-label"
                >book</i>
               Encyclopédie
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <encyclopedie-component :listEncyclopedie='listEncyclopedie'></encyclopedie-component>

  </q-page>
</template>

<script lang="ts">
import EncyclopedieComponent from "components/EncyclopedieComponent.vue";
import { defineComponent, ref } from "@vue/composition-api";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "encyclopedie",
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: "Dofus Book - Encyclopedie",
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
  methods: {
      ...mapActions('encyclopedie', ['getEncyclopedie'])
  },
  computed: {
    ...mapState('encyclopedie', ['listEncyclopedie'])
  },
  components: {
    EncyclopedieComponent
  },
  mounted () {
    this.getEncyclopedie()

  }
});
</script>
