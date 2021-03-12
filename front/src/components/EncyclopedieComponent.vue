<template>
  <div class="justify-center bloc">
    <div class="bloc-d">
      <div class="bloc-e">
        <p class="bloc-text text-h4 text-white">Encyclopédie</p>
        <img
          class="img-responsive"
          alt="banner_dofus"
          src="../../public/images/dofus/banner-home.jpg"
        />
      </div>

      <div class="row bloc-f">
        <div class="col col-xs-6 col-sm-3 col-md-2 q-mr-md q-ml-md" v-for="encycl in listEncyclopedie" :key="encycl.id">
          <a :href="`${encycl.url}`" class="dof-item">
            <div class="dof-block-img">
              <div class="dof-img dof-icon-big dof-breeds" :style="`background-position: ${encycl.imgPos} !important;`"></div>
            </div>
            <div class="dof-title">{{ encycl.title }}</div>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import '../../public/css/encyclopedie.css'

export default {
  data() {
    return {};
  },
  methods: {},
  props: {
    listEncyclopedie: Array
  }
};
</script>