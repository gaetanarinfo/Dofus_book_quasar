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
