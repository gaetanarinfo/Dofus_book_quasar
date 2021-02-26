<template>
  <div class="row items-start q-gutter-md justify-center">

    <q-card class="my-card" flat bordered v-for="news in listNews" :key="news.id">
     <img :src="news.image" />

      <q-card-section>
        
        <div><img :src="news.category"></div>
        <div class="text-overline text-overline-dofus text-yellow-9">{{ news.cat }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs text-white" style="text-overflow: ellipsis;max-width: 317px;overflow: hidden;white-space: nowrap;">{{ news.title }}</div>
        <div class="text-caption text-white" style="max-height: 103px;overflow: auto;content: ' ... ';">
         {{ news.content }}
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="white" label="Partager" />
        <q-btn flat color="warning" label="Lire la suite" type="button" />
        <q-btn flat color="green" label="Editer" type="button" @click="showModalEditNews(news)" />
      </q-card-actions>
    </q-card>

    <!-- Modal Edit news -->
    <modalEditNews
      v-if='modalEditNews'
      :modal3.sync='modalEditNews'
      :data='newsModal'
      @closeModalEditNews='closeModal3()'
    />
    <!-- / Modal Edit News -->
    
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>

<script>

import { mapActions, mapState } from 'vuex'
import modalEditNews from '../components/modal/admin/modalEditNews'

export default {
    name: 'news',
    data () {
    return {
       modalEditNews: false,
       news : null,
       newsModal : null
      }
  },
  methods : {
    showModalEditNews (data) {
      this.newsModal = data
      this.modalEditNews = true
    },
    closeModal3 () {
      this.modalEditNews = false
    },
  },
  components: {
    modalEditNews
  },
  props: {
    listNews: Array
  }
}

</script>