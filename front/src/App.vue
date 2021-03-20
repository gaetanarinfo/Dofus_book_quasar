<template>
  <div id="q-app">
    <router-view v-if="show === true" />

    <q-dialog persistent v-model="cookie">
      <q-card style="background: #535658bf !important; color: white;">
        <q-card-section>
          <div class="text-h6">Dofus Book - Gestion de tes cookies</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-center">
            <img
              width="200px"
              src="https://i.pinimg.com/originals/d8/4e/71/d84e71dfa4d1feae395eafa99aadad28.png"
            />
          </div>
          <br />
          <q-separator />
          <br />
          <p>
            Afin de t'offrir une expérience optimale sur notre site web ou application, moi et mes partenaires sélectionnés accédons et écrivons des informations sur votre terminal (cookies et identifiants) et traitons des données personnelles en lien avec ta navigation sur mes contenus (y compris votre adresse IP et les pages que vous avez consultées) pour les finalités suivantes :
            <br />
            <br />- Fonctionnalités essentielles
            <br />- Stocker et/ou accéder à des informations stockées sur un terminal
            <br />- Mesure d’audience
            <br />- Fonctionnalités liées à l'amélioration de votre expérience
            <br />- Fonctionnalités liées aux réseaux sociaux
            <br />- Publicités et contenu personnalisés, mesure de performance des publicités et du contenu, données d’audience et développement de produit
            <br />- Données de géolocalisation précises et identification par analyse du terminal
          </p>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            label="Je refuse"
            color="red-5"
            push
            glossy
            class="q-ml-sm"
            v-close-popup
          />
          <q-btn
            label="J'accept"
            color="green-5"
            push
            glossy
            class="q-ml-sm"
            v-close-popup
            @click="cookieAccept()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { QSpinnerHourglass } from "quasar";

export default {
  name: "App",
  data() {
    return {
      show: false,
      cookie: false
    };
  },
  methods: {
    checkCookie() {
      if (localStorage.getItem("cookieConsent") === null) {
        this.cookie = true;
      }
      setTimeout(this.checkCookie, 2500);
    },
    cookieAccept() {
      localStorage.setItem("cookieConsent", "oui");
      this.cookie = false;
    },
    checkAuth() {
      this.handleAuthStateChange();
      setTimeout(this.checkAuth, 2500);
    },
    checkAdmin() {
      this.setAdminIn();
      setTimeout(this.loggedDataUser, 2500);
    },
    ...mapActions("auth", ["handleAuthStateChange"]),
    ...mapMutations("auth", ["setLoggedIn"]),
    ...mapMutations("auth", ["setAdminIn"]),
    ...mapActions("auth", ["loggedDataUser"]),
    showLoading() {
      this.$q.loading.show({
        spinner: QSpinnerHourglass,
        spinnerColor: "red",
        spinnerSize: 200
      });

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        this.show = true;
        this.timer = void 0;
      }, 2500);
    }
  },
  beforeDestroy() {
    if (this.timer !== void 0) {
      clearTimeout(this.timer);
      this.$q.loading.hide();
    }
  },

  mounted() {
    this.checkCookie();
    this.showLoading();
    this.checkAuth();
    this.checkAdmin();
  },

};
</script>