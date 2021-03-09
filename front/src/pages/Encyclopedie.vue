<template>
  <q-page>

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
