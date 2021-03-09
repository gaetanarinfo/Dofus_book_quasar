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
          <a href class="dof-item">
            <div class="dof-block-img">
              <div class="dof-img dof-icon-big dof-breeds" :style="`background-position: ${encycl.imgPos} !important;`"></div>
            </div>
            <div class="dof-title">{{ encycl.title }}</div>
          </a>
        </div>
      </div>
    </div>
    
    <classes-component></classes-component>

  </div>
</template>

<style lang="css">
.bloc {
  margin: 0 auto;
  max-width: 1146px;
}

.bloc-text {
  display: block;
  position: absolute;
  text-shadow: 0 0 3px #ffffff;
  font-family: "bebas";
  letter-spacing: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bloc-d {
  display: block;
  position: relative;
  padding: 12px 12px 12px 12px;
  background: none repeat scroll 0 0 rgba(255, 255, 255, 0.3);
  min-height: 450px;
  max-width: 1146px;
}

.bloc-e {
  display: block;
  position: relative;
}

.bloc-f {
    place-content: center;
}

.bloc-e > img {
  box-shadow: 0 0 10px #0000008f;
  max-width: 100%;
}

.dof-item {
  padding: 6px;
  background: #00000073;
  margin-top: 12px;
  display: block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-decoration: none;
}

.do-item .dof-block-img {
  text-align: center;
}

.dof-item .dof-block-img .dof-img {
  background-image: url("../../public/images/dofus/sprite.png");
  background-repeat: no-repeat;
  background-size: 126px auto;
  width: 65px;
  height: 65px;
  position: relative;
  margin: 0 auto;
}

.dof-item .dof-title {
  font-size: 20px;
  color: #e4e4e4fa;
  line-height: 18px;
  padding: 6px 0 6px 0;
  letter-spacing: 1px;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: middle;
  text-align: center;
  font-family: "bebas", sans-serif;
}

.dof-item:hover,
.dof-item:focus {
  background: #8886865e;
}

</style>

<script>
import { mapActions, mapState } from "vuex";
import { log } from "util";
import ClassesComponent from "components/ClassesComponent.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  props: {
    listEncyclopedie: Array
  },
  components: {
    ClassesComponent
  },
};
</script>