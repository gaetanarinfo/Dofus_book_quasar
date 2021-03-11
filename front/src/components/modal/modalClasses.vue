<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="modalClasses" persistent>
      <q-card
        style="background: rgb(31 31 31 / 78%) !important; color: white; width: 700px; max-width: 80vw;"
      >
        <q-img :src="data2" />

        <q-separator />

        <div class="col-md-5" style="padding: 9px 14px;">
          <div>
            <div class="col-xs-10">
              <div class="dof-breed-long-name-illu"></div>
              <div class="col text-h4 ellipsis text-center">{{ data3 }}</div>
            </div>
          </div>
          <!-- <div class="dof-description" v-html="classesId.description"></div> -->
          <div class="dof-video">
            <div class="doff-video">
              <iframe
                id="video"
                style="width: 553px;height: 299px;"
                :src="'https://www.youtube.com/embed/' + data4 + '?rel=0'"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <!-- <div class="dof-breed-roles">
            <span class="dof-breed-role text-center">Rôles</span>
            <div class="dof-breed-roles-illu">
              <span
                :class="'dof-breed-role-icon dof-breed-first-role dof-' + classesId.roles[0]"
              >{{ classesId.roles[0] }}</span>

              <span
                :class="'dof-breed-role-icon dof-breed-second-role dof-' + classesId.roles[1]"
              >{{ classesId.roles[1] }}</span>

              <span
                :class="'dof-breed-role-icon dof-breed-third-role dof-' + classesId.roles[2]"
              >{{ classesId.roles[2] }}</span>
            </div>
          </div> -->

          <div class="text-center">
            <img
              id="maleImg"
              style="z-index: 2;"
              class="dof-entitylook"
              width="250px"
              height="250px"
              src="https://static.ankama.com/renderer/look/7b317c36302c323039327c313d31363338303633342c323d31333732363031322c333d31363733353737382c343d323738363138362c353d31363736313930347c3135307d/full/1/250_250-10_100.png"
            />

             <img
              id="femaleImg"
              style="z-index: 2; display: none;"
              class="dof-entitylook"
              width="250px"
              height="250px"
              :src="classesId.femaleImg"
            />
            <div :class="'dof-body-breed-' + classesId._id + ' dof-breed-pedestral'"></div>
          </div>

          <div class="dof-breed-sex-choice">
            <a id="male" href="#/classes" @click="ShowMale()" class="dof-breed-sex-choice-male dof-breed-sex-selected"></a>
            <a id="female" href="#/classes" @click="ShowFemal()" class="dof-breed-sex-choice-female"></a>
          </div>
        </div>

        <q-card-actions align="right">
          <q-btn glossy clickable v-close-popup @click="$emit('closeModalClasses')" color="red-8">
            <q-item-section>
              <q-item-label>Fermer</q-item-label>
            </q-item-section>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="css">
.dof-breed-sex-choice {
  background: rgba(0, 0, 0, 0.35);
}
.dof-breed-sex-choice {
    border-radius: 5px;
    bottom: -20px;
    height: 42px;
    left: 50%;
    margin-left: -37px;
    position: relative;
    text-align: center;
    width: 74px;
    margin-bottom: 16px;
}

.dof-breed-sex-choice > a {
  display: inline-block;
  height: 30px;
  margin-top: 5px;
  width: 30px;
}
.dof-breed-sex-selected,
.dof-breed-sex-choice-male:hover {
  background-position: 0 0;
}
.dof-breed-sex-choice-male {
  background: url("/images/dofus/male.png") 0 bottom no-repeat;
}

.dof-breed-sex-choice-female {
  background: url("/images/dofus/female.png") 5px bottom no-repeat;
}

.dof-breed-sex-choice:after {
    background: rgba(255,255,255,.4);
}

.dof-breed-sex-selected, .dof-breed-sex-choice-male:hover {
    background-position: 0 0;
}

.dof-breed-sex-choice-female.dof-breed-sex-selected, .dof-breed-sex-choice-female:hover {
    background-position: 5px 0;
}

.dof-description {
  padding: 15px 30px;
  padding: 1.5rem 3rem;
  padding-top: 30px;
  padding-top: 2rem;
  color: #fff;
  line-height: 29px;
}

.dof-video {
  padding: 30px;
  padding: 3rem;
  padding-top: 15px;
  padding-top: 1.5rem;
  padding-bottom: 20px;
  padding-bottom: 2rem;
}

.doff-video {
  box-shadow: 0 0 2px #000;
  border: 4px solid #d8de93;
  border-radius: 2px;
  height: 0;
  padding-bottom: 53.25%;
  padding-top: 0px;
  position: relative;
}

.dof-breed-role {
  font-size: 23px;
  font-size: 1.3rem;
  font-family: "bebas_neueregular", sans-serif;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 3px 5px #000;
}

.dof-breed-roles {
  text-align: center;
  padding-bottom: 15px;
  padding-bottom: 1.5rem;
}

.dof-breed-roles .dof-breed-roles-illu {
  min-height: 79px;
}

.dof-breed-roles .dof-breed-roles-illu .dof-breed-first-role {
  margin-left: 0px;
}

.dof-breed-roles .dof-breed-roles-illu .dof-breed-role-icon {
  cursor: default;
  display: inline-block;
  position: relative;
  margin-top: 8px;
  padding-top: 66px;
  height: 63px;
  width: 120px;
}

.dofdof-breed-roles .dof-breed-roles-illu .dof-breed-second-role {
  margin-left: 7px;
  margin-right: 7px;
}
.dof-breed-roles-illu .dof-breed-role-icon {
  background: url("/images/dofus/sprites.png") no-repeat;
  background-size: 63px auto;
  color: #fff;
}

.dof-breed-roles .dof-breed-roles-illu .dof-breed-third-role {
  margin-left: 0px;
}

.dof-breed-roles-illu .dof-breed-role-icon.dof-Amélioration {
  background-position: center -179px;
}

.dof-breed-roles-illu .dof-breed-role-icon.dof-Dégâts {
  background-position: center 1px;
}

.dof-breed-roles-illu .dof-breed-role-icon.dof-Soins {
  background-position: center -87px;
}

.dof-breed-roles-illu .dof-breed-role-icon.dof-Entrave {
  background-position: center -357px;
}

.dof-breed-roles-illu .dof-breed-role-icon.dof-Placement {
  background-position: center -448px;
}

.dof-breed-roles-illu .dof-breed-role-icon.dof-Protection {
  background-position: center -537px;
}

.dof-breed-roles-illu .dof-breed-role-icon.dof-Tank {
  background-position: center -625px;
}

.dof-breed-roles-illu .dof-breed-role-icon.dof-Invocation {
  background-position: center -268px;
}

@media (min-width: 992px) {
  .dof-breed-pedestral,
  .dof-breed-render {
    width: 200px;
  }
}

@media (min-width: 992px) {
  .dof-breed-pedestral {
    bottom: 70px;
    position: absolute;
  }
}

@media (min-width: 992px) {
  .dof-breed-pedestral {
    left: 56%;
    margin-top: 25px;
  }
}

.dof-breed-pedestral {
  background: center bottom no-repeat;
  background-size: 85%;
}
.dof-breed-pedestral {
  height: 200px;
  left: 50%;
  top: 120%;
  z-index: 1;
  margin-left: -100px;
  position: absolute;
  width: 200px;
}

.dof-entitylook {
  display: inline-block;
  vertical-align: middle;
}

.dof-body-breed-1 {
  background-image: url("/images/dofus/pedestal-11-x2.jpg");
}

.dof-body-breed-2 {
  background-image: url("/images/dofus/pedestal-5-x2.png");
}breed

.dof-body-breed-3 {
  background-image: url("/images/dofus/pedestal-4-x2.png");
}

.dof-body-breed-4 {
  background-image: url("/images/dofus/pedestal-13-x2.png");
}

.dof-body-breed-5 {
  background-image: url("/images/dofus/pedestal-14-x2.png");
}

.dof-body-breed-6 {
  background-image: url("/images/dofus/pedestal-3-x2.png");
}

.dof-body-breed-7 {
  background-image: url("/images/dofus/pedestal-4-x2.png");
}

.dof-body-breed-8 {
  background-image: url("/images/dofus/pedestal-11-x2.png");
}

.dof-body-breed-9 {
  background-image: url("/images/dofus/pedestal-13-x2.png");
}

.dof-body-breed-10 {
  background-image: url("/images/dofus/pedestal-4-x2.png");
}

.dof-body-breed-11 {
  background-image: url("/images/dofus/pedestal-5-x2.png");
}

.dof-body-breed-12 {
  background-image: url("/images/dofus/pedestal-14-x2.png");
}

.dof-body-breed-13 {
  background-image: url("/images/dofus/pedestal-15-x2.png");
}

.dof-body-breed-14 {
  background-image: url("/images/dofus/pedestal-18-x2.png");
}

.dof-body-breed-15 {
  background-image: url("/images/dofus/pedestal-11-x2.png");
}

.dof-body-breed-16 {
  background-image: url("/images/dofus/pedestal-3-x2.png");
}

.dof-body-breed-17 {
  background-image: url("/images/dofus/pedestal-18-x2.png");
}

.dof-body-breed-18 {
  background-image: url("/images/dofus/pedestal-5-x2.png");
}
</style>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { log } from "util";

export default {
  data() {
    return {
      male: true,
      femal: false
    };
  },
  methods: {
    ShowFemal() {
      document.getElementById('male').classList.remove('dof-breed-sex-selected')
      document.getElementById('female').classList.add('dof-breed-sex-selected')
      document.getElementById('maleImg').style.display = 'none'
      document.getElementById('femaleImg').style.display = ''
      this.male = false
      this.femal = true
    }, 
    ShowMale() {
      document.getElementById('male').classList.add('dof-breed-sex-selected')
      document.getElementById('female').classList.remove('dof-breed-sex-selected')
      document.getElementById('femaleImg').style.display = 'none'
      document.getElementById('maleImg').style.display = ''
      this.male = true
      this.femal = false
    }, 
    checkClasses() {
      this.getClassesId(this.data);
    },
    ...mapActions("encyclopedie", ["getClassesId"])
  },
  computed: {
    ...mapGetters('encyclopedie', ['classesId'])
  },
  mounted() {
    this.checkClasses();
    console.log('eIERJGIJDFI', this.classesId)
  },
  props: {
    modalClasses: {
      default: false
    },
    data: {
      type: String
    },
    data2: {
      type: String
    },
    data3: {
      type: String
    },
    data4: {
      type: String
    }
  }
};
</script>