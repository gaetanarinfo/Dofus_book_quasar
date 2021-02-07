<template>

  <q-page class="q-pa-md row items-start q-gutter-md justify-center">

    <sub-component></sub-component>

    <news-component></news-component>
    
  </q-page>

</template>

<script lang="ts">
import SubComponent from 'components/SubComponent.vue';
import NewsComponent from 'components/NewsComponent.vue';
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
  components: { SubComponent, NewsComponent }
});
</script>
