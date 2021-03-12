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
          <div class="dof-description" v-html="classesId.description"></div>
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

          <div class="dof-breed-roles">
            <span class="dof-breed-role text-center">Rôles</span>
            <div class="dof-breed-roles-illu">
              <span
                :class="'dof-breed-role-icon dof-breed-first-role dof-' + classesIdRoles"
              >{{ classesIdRoles }}</span>

              <span
                :class="'dof-breed-role-icon dof-breed-second-role dof-' + classesIdRoles2"
              >{{ classesIdRoles2 }}</span>

              <span
                :class="'dof-breed-role-icon dof-breed-third-role dof-' + classesIdRoles3"
              >{{ classesIdRoles3 }}</span>
            </div>
          </div>

          <div class="text-center" style="margin-bottom: -75px;">
            <q-img
              id="maleImg"
              style="z-index: 2;"
              class="dof-entitylook"
              width="250px"
              height="250px"
              :src="classesId.maleImg"
            />

            <q-img
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
            <a
              id="male"
              href="#/classes"
              @click="ShowMale()"
              class="dof-breed-sex-choice-male dof-breed-sex-selected"
            ></a>
            <a
              id="female"
              href="#/classes"
              @click="ShowFemal()"
              class="dof-breed-sex-choice-female"
            ></a>
          </div>
        </div>

        <q-card-actions align="right">
          <q-btn glossy clickable v-close-popup @click="$emit('closeModalClasses')" color="red-8">
            <q-item-section>
              <q-item-label>Fermer</q-item-label>
            </q-item-section>
          </q-btn>

          <q-btn
            glossy
            clickable
            type="a"
            :href="classesId.url"
            target="_blank"
            color="green-8"
          >
            <q-item-section>
              <q-item-label>Voir la fiche complète</q-item-label>
            </q-item-section>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import '../../../public/css/classes.css'


export default {
  data() {
    return {
      male: true,
      femal: false,
    };
  },
  methods: {
    ShowFemal() {
      document
        .getElementById("male")
        .classList.remove("dof-breed-sex-selected");
      document.getElementById("female").classList.add("dof-breed-sex-selected");
      document.getElementById("maleImg").style.display = "none";
      document.getElementById("femaleImg").style.display = "";
      this.male = false;
      this.femal = true;
    },
    ShowMale() {
      document.getElementById("male").classList.add("dof-breed-sex-selected");
      document
        .getElementById("female")
        .classList.remove("dof-breed-sex-selected");
      document.getElementById("femaleImg").style.display = "none";
      document.getElementById("maleImg").style.display = "";
      this.male = true;
      this.femal = false;
    }
  },
  computed: {
    ...mapGetters("encyclopedie", ["classesId"]),
    ...mapGetters("encyclopedie", ["classesIdRoles"]),
    ...mapGetters("encyclopedie", ["classesIdRoles2"]),
    ...mapGetters("encyclopedie", ["classesIdRoles3"])
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
    },
    img: {
      type: String,
      default: localStorage.getItem("imgMale")
    },
    img2: {
      type: String,
      default: localStorage.getItem("imgFemale")
    }
  }
};
</script>