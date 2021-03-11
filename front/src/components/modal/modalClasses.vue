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
              <div class="ak-breed-long-name-illu"></div>
              <div class="col text-h4 ellipsis text-center">
                {{ data3 }}
              </div>
            </div>
          </div>
          <div class="dof-description" v-html="listClassesId.description">
          </div>
          <div class="dof-video">
            <div class="doff-video">
              <iframe
                id="video"
                style="width: 553px;height: 299px;"
                src="https://www.youtube.com/embed/JAhil1C--8w?rel=0"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="dof-breed-roles">
            <span class="dof-breed-role text-center">Rôles</span>
            <div class="dof-breed-roles-illu">
              <span
                class="dof-breed-role-icon dof-breed-first-role dof-damage ak-tooltip"
                data-hasqtip="2"
              >Dégâts</span>

              <span
                class="dof-breed-role-icon dof-breed-second-role dof-improvement ak-tooltip"
                data-hasqtip="3"
              >Amélioration</span>
        
              <span
                class="dof-breed-role-icon dof-breed-third-role dof-heal ak-tooltip"
                data-hasqtip="4"
              >Soins</span>
            </div>
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
    font-size: 2.3rem;
    font-family: "bebas_neueregular",sans-serif;
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

.dof-breed-roles-illu .dof-breed-role-icon.dof-damage {
    background-position: center 1px;
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

.dof-breed-roles-illu .dof-breed-role-icon.dof-improvement {
    background-position: center -179px;
}
.dofak-breed-roles .dof-breed-roles-illu .dof-breed-second-role {
    margin-left: 7px;
    margin-right: 7px;
}
.dof-breed-roles-illu .dof-breed-role-icon {
    background: url('/images/dofus/sprites.png') no-repeat;
    background-size: 63px auto;
    color: #fff;
}

.dof-breed-roles-illu .dof-breed-role-icon.dof-heal {
    background-position: center -87px;
}
.dof-breed-roles .dof-breed-roles-illu .dof-breed-third-role {
    margin-left: 0px;
}
</style>

<script>
import { mapActions, mapState } from "vuex";
import { log } from "util";

export default {
  data() {
    return {
      classesId: null
    };
  },
  methods: {
    checkClasses() {
      this.getClassesId(this.data);
    },
    ...mapActions("encyclopedie", ["getClassesId"])
  },
  computed: {
    ...mapState("encyclopedie", ["listClassesId"])
  },
  mounted() {
    this.checkClasses();
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
    }
  }
};
</script>