<template>

  <q-page class="q-pa-md row items-start q-gutter-md justify-center">

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white">Bienvenue dans le jeu en ligne multijoueur gratuit DOFUS !</div>
    
    <news-component :listNews='listNews'></news-component>
    
  </q-page>

</template>

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
          content: 'Dofus book'
        },
        keywords: { name: "keywords", content: "dofus, dofus-book, article" },
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
