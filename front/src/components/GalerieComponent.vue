<template>
  <div class="row items-start q-gutter-md justify-center" style="padding-bottom: 116px;">
    <div class="dof-title-block">GALERIE D'IMAGE</div>

    <div style="display: contents;">
      <div class="q-mr-sm q-mb-sm" v-for="images in listImage" :key="images.id">
        <img
          :src="images.img"
          style="height: 170px; max-width: 300px; cursor: pointer;"
          class="rounded-borders images"
          @click="showModalGalerie(images._id)"
        />
      </div>
    </div>

    <div style="width : 100%">
      <!-- Modal Galerie -->
      <modalGalerie
        v-if="modalGalerie"
        :modalGalerie.sync="modalGalerie"
        @closeModalGalerie="closeModalGalerie()"
      />
      <!-- / Modal Galerie -->
    </div>
  </div>
</template>

<style lang="sass">
.images
    transition: all 100ms
    &:hover
        filter: blur(1px) sepia()
        padding: 5px 5px
        opacity: 0.7

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
import modalGalerie from "../components/modal/modalGalerie";

export default {
  data() {
    return {
      modalGalerie: false
    };
  },
  methods: {
    showModalGalerie(data) {
      this.getImageId(data);
      this.modalGalerie = true;
    },
    closeModalGalerie() {
      this.modalGalerie = false;
    },
    ...mapActions("general", ["getImageId"])
  },
  props: {
    listImage: {
      type: Array
    }
  },
  components: {
    modalGalerie
  }
};
</script>