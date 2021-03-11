<template>
<div class="justify-center bloc">
<div class="bloc-d">
  <div class="bloc-i">
    <div class="bloc-h">
      <div class="bloc-g">
        <div class="dof-img" style="display: inline-block; background-position: 0px -10px; !important;"></div>
        <h4 class="text-white font-bebas h4-perso">Classes</h4>
      </div>
    </div>

      <div class="row bloc-f">
        <div class="col col-xs-5 col-sm-5 col-md-5 q-mr-md q-ml-md" style="width: 427px !important;" v-for="classes in listClasses" :key="classes.id">
          <a @click="showModalClasses(classes.order, classes.image, classes.title, classes.api)" class="dof-item">
            <div class="dof-block-img">
              <div class="">
                <img style="max-width: 413px;" :src="classes.image">
              </div>
            </div>
            <div class="dof-title">{{ classes.title }}</div>
          </a>
        </div>
      </div>
  </div>
  </div>

  <!-- Modal Classes Id -->
  <modalClasses
    v-if='modalClasses'
    :data="newsModalClasses"
    :data2="newsModalClasses2"
    :data3="newsModalClasses3"
    :data4="newsModalClasses4"
    :modalClasses.sync='modalClasses'
    @closeModalClasses='closeModalClasses()'
  />
  <!-- / Modal Classes Id -->

</div>  
</template>

<style lang="css">
.bloc {
  margin: 0 auto;
  max-width: 952px;
}

.bloc-d {
  display: block;
  position: relative;
  padding: 12px 12px 12px 12px;
  background: none repeat scroll 0 0 rgba(255, 255, 255, 0.3);
  min-height: 450px;
  max-width: 952px;
}

.bloc-g {
  display: inline-block;
  width: 100%;
  height: 70px;
}

.h4-perso {
  position: relative;
  display: inline-block;
  margin: 0 0 0 13px;
  top: -19px;
}

.bloc-h {
  background: rgb(33 35 30 / 47%) !important;
  width: auto !important;
  height: auto !important;
  padding: 12px 12px 12px 12px;
}

.bloc-i {
  margin: 5px 5px;
}

.dof-img {
  background-image: url("../../public/images/dofus/sprite.png");
  background-repeat: no-repeat;
  background-size: 126px auto;
  width: 65px;
  height: 65px;
  position: relative;
}

.bloc-e > img {
  box-shadow: 0 0 10px #0000008f;
  max-width: 100%;
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

.dof-item {
  padding: 6px;
  background: #00000073;
  margin-top: 12px;
  display: block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-decoration: none;
}

</style>

<script>
import { mapActions, mapState } from "vuex";
import modalClasses from '../components/modal/modalClasses.vue'
import { log } from "util";

export default {
  data() {
    return {
      modalClasses: false
    };
  },
  methods: {
     showModalClasses (data, data2, data3, data4) {
      this.newsModalClasses = data;
      this.newsModalClasses2 = data2;
      this.newsModalClasses3 = data3;
      this.newsModalClasses4 = data4;
      this.modalClasses = true
    },
    closeModalClasses () {
      this.modalClasses = false
    }
  },
  components: { modalClasses }, 
  props: {
    listClasses: Array
  }
};
</script>