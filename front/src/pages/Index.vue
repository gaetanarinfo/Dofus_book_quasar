<template>

  <q-page class="q-pa-md row items-start q-gutter-md justify-center">

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white">Bienvenue dans le jeu en ligne multijoueur gratuit DOFUS !</div>
    
    <news-component :listNews='listNews'></news-component>
    
  </q-page>

</template>

<style lang="css">
.dofus {
    background: url('../../public/background/1023606.jpg') !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}
</style>

<script lang="ts">
import NewsComponent from 'components/NewsComponent.vue';
import { defineComponent, ref } from '@vue/composition-api';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  name: 'PageIndex',
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: 'Dofus Book',
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
  components: { 
    NewsComponent 
  },
  methods : {
    ...mapActions('news', ['getNews'])
  },
  computed: {
    ...mapState('news', ['listNews'])
  },
  mounted () {
    this.getNews()
  }
});
</script>
