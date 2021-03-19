<template>
<div class="row items-start q-gutter-md justify-center" style="padding-bottom: 116px;">

    <div class="dof-title-block">GALERIE D'IMAGE</div>

    <div style="display: contents;">
        <div class="q-mr-sm q-mb-sm" v-for="images in listImage" :key="images.id">
            <img
            :src="images.img"
            style="height: 170px; max-width: 300px"
            img-class="images"
            class="rounded-borders"
            />
        </div>
    </div>

</div>
</template>

<style lang="sass">
.images
  filter: blur(1px) sepia()

.dof-title-block
    display: block
    position: relative
    text-align: center
    font-size: 48px
    margin: 100px 0 46px 0
    font-family: "bebas",sans-serif
    text-transform: uppercase
    line-height: 14px
    color: #f6eed6
    width: 100%

</style>

<script>

import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
      return {
          
      }
  },
  props: {
      listImage : {
          type: Array
      }
  }
}

</script>