<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar class="glossy" style="background-color: #C64F10;">
        <q-btn
          flat
          dense
          round
          icon="home"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title
          style="font-family: 'bebas';font-size: 23px;color: #d8ffe9;font-weight: 600;letter-spacing: 4px;padding: 7px 0px 0px 7px;"
        >Dofus Book</q-toolbar-title>

        <q-toolbar
          class="q-toolbar row no-wrap items-center col-md-1 col-xs-1 col-lg-1 text-white glossy bar-mobile2"
          style="background-color: rgb(198, 79, 16) !important;align-items: center;place-content: center;width: 4.3333%;margin-right: 0;"
        >
          <q-btn
            flat
            round
            dense
            @click="$q.fullscreen.toggle()"
            :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          >
            <q-tooltip anchor="bottom middle" self="center middle">Plein écran</q-tooltip>
          </q-btn>
        </q-toolbar>

        <q-toolbar
          class="q-toolbar row no-wrap items-center col-md-1 col-xs-1 col-lg-1 text-white glossy"
          style="background-color: rgb(198, 79, 16) !important;align-items: center;place-content: center;width: 4.3333%;margin-right: -14px;"
        >
          <q-btn flat round dense icon="favorite" @click="rating('top')">
            <q-tooltip anchor="bottom middle" self="center middle">Voté pour Dofus book</q-tooltip>
          </q-btn>
        </q-toolbar>

        <q-btn dense color="green-9" round icon="email" class="q-ml-md" to="/profil_mailbox">
          <q-badge color="deep-purple-9" floating>{{ listNotif }}</q-badge>
          <q-tooltip anchor="bottom middle" self="center middle">Boîte de réception</q-tooltip>
        </q-btn>

        <q-btn
          dense
          color="blue-9"
          round
          icon="circle_notifications"
          class="q-ml-md"
          @click="showNotif()"
        >
          <q-badge color="brown-10" floating>{{ listNotif2 }}</q-badge>
          <q-tooltip anchor="bottom middle" self="center middle">Notification(s)</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="400"
      content-class="text-white"
      content-style="background: rgb(62 59 58 / 39%) !important;"
      elevated
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px;">
        <q-list padding>
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="home" color="blue" />
            </q-item-section>

            <q-item-section avatar>Accueil</q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/profil_mailbox">
            <q-item-section avatar>
              <q-icon name="inbox" color="brown" />
            </q-item-section>

            <q-item-section>Boite de réception</q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/send_mail">
            <q-item-section avatar>
              <q-icon name="send" color="green" />
            </q-item-section>

            <q-item-section>Envoyer un message</q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/profil">
            <q-item-section avatar>
              <q-icon name="edit" color="blue" />
            </q-item-section>

            <q-item-section>Modifier mon profil</q-item-section>
          </q-item>

          <q-separator />

          <q-item v-if="adminIn === true" clickable v-ripple @click="showModalCreateNews()">
            <q-item-section avatar>
              <q-icon name="add" color="green-8" />
            </q-item-section>

            <q-item-section>Crée un article</q-item-section>
          </q-item>

          <q-separator v-if="loggedIn === true" />

          <q-item v-if="adminIn === true" clickable v-ripple @click="showModalCreateImage()">
            <q-item-section avatar>
              <q-icon name="add" color="green-8" />
            </q-item-section>

            <q-item-section>Ajouter une image</q-item-section>
          </q-item>

          <q-separator v-if="loggedIn === true" />

          <q-item clickable v-ripple @click="showModalDelete(`${userData.userId}`)">
            <q-item-section avatar>
              <q-icon name="close" color="red" />
            </q-item-section>

            <q-item-section>Supprimer mon compte</q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple @click="logout()">
            <q-item-section avatar>
              <q-icon name="logout" color="red" />
            </q-item-section>

            <q-item-section>Déconnexion</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://image.noelshack.com/fichiers/2018/32/2/1533634229-wiki-background.jpg"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img :src="userData.avatar" />
          </q-avatar>
          <div class="text-weight-bold">{{ userData.lastname }} {{ userData.firstname }}</div>
          <div>{{ userData.email }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Modal Create Image -->
    <modalCreateImage
      v-if="adminIn === true || modalCreateImage"
      :modalCreateImage.sync="modalCreateImage"
      @closeModalCreateImage="closeModalCreateImage()"
    />
    <!-- / Modal Create Image -->

    <!-- Modal Create News -->
    <modalCreateNews
      v-if="adminIn === true || modalCreateNews"
      :modal2.sync="modalCreateNews"
      @closeModalCreateNews="closeModal2()"
    />
    <!-- / Modal Create News -->

    <!-- Modal User Delete -->
    <modalDeleteAccount
      v-if="modalDeleteAccount"
      :modal.sync="modalDeleteAccount"
      :data="user"
      @closeModalDeleteAccount="closeModal()"
    />
    <!-- / Modal User Delete -->

    <!-- Rating -->
    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="ratingDialog" :position="position">
        <q-card style="width: 450px; background: #31303096;">
          <q-linear-progress :value="1.0" color="green" />

          <div
            class="text-h5 text-white"
            style="padding: 10px 10px 0 10px;text-align: center;"
          >Tu aime ? Alors vote pour Dofus-Book.</div>

          <q-card-section class="row items-center no-wrap" style="text-align: center;">
            <div style="width: 100%;background: transparent;">
              <q-rating
                v-model="ratingModel"
                name="ratingValue"
                max="5"
                size="3em"
                color="red"
                color-selected="red-9"
                icon="favorite_border"
                icon-selected="favorite"
                icon-half="favorite"
                no-dimming
                @input="ratings()"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    <!-- Rating / -->
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import modalDeleteAccount from "../components/modal/modalConfirm.vue";
import modalCreateNews from "../components/modal/admin/modalCreateNews.vue";
import modalCreateImage from "../components/modal/admin/modalCreateImage.vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { Notify } from 'quasar'
import { forEach } from "app/src-cordova/platforms/android/platform_www/cordova_plugins";

export default defineComponent({
  name: "ProfilLayout",
  data() {
    return {
      ratingDialog: false,
      ratingModel: 0,
      modalDeleteAccount: false,
      modalCreateNews: false,
      modalCreateImage: false,
      position: "top",
      user: null,
      userData: {
        userId: "",
        pseudo: "",
        lastname: "",
        firstname: "",
        email: "",
        avatar: ""
      }
    };
  },
  methods: {
    ratings() {
      this.$q.loading.show({
        spinnerColor: "green",
        spinnerSize: 100
      });

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        fetch("https://api64.ipify.org?format=json")
          .then(x => x.json())
          .then(({ ip }) => {
            const dataRating = [
              {
                ratingNumber: this.ratingModel.valueOf(),
                ip: ip
              }
            ];
            this.postRating(dataRating);
          });
        this.timer = void 0;
      }, 1500);
    },
    beforeDestroy() {
      if (this.timer !== void 0) {
        clearTimeout(this.timer);
        this.$q.loading.hide();
      }
    },
    ...mapActions("general", ["postRating"]),
    mountedData() {
      this.userData.pseudo = this.setListUser.pseudo;
      this.userData.lastname = this.setListUser.lastname;
      this.userData.firstname = this.setListUser.firstname;
      this.userData.email = this.setListUser.email;
      this.userData.avatar = this.setListUser.avatar;
      this.userData.userId = this.setListUser._id;
    },
    checkNotif() {
      this.userPseudo = this.setListUser.pseudo;
      this.getMailNotif(this.setListUser._id);
      this.getNotif(this.setListUser._id);
      this.getListNotif(this.setListUser._id);
      setTimeout(this.checkNotif, 500);
    },
    showModalDelete(data: any) {
      this.user = data;
      this.modalDeleteAccount = true;
    },
    closeModal() {
      this.modalDeleteAccount = false;
    },
    showModalCreateNews() {
      this.modalCreateNews = true;
    },
    closeModal2() {
      this.modalCreateNews = false;
    },
    logout() {
      this.logoutUser(this.userPseudo);
    },
    rating(position: any) {
      this.position = position;
      this.ratingDialog = true;
    },
    checkRating() {
      this.getRating();

      if (this.listRatings === null) {
      } else {
        this.ratingModel = this.listRatings;
      }

      setTimeout(this.checkRating, 500);
    },
    ...mapActions("general", ["getRating"]),
    ...mapActions("auth", ["getProfil"]),
    ...mapActions("auth", ["loggedDataUser"]),
    ...mapActions("auth", ["logoutUser"]),
    ...mapActions("auth", ["getMailNotif"]),
    ...mapActions("auth", ["getNotif"]),
    ...mapActions("auth", ["getListNotif"]),
    checkAuth() {
      this.handleAuthStateChange();
      this.mountedData();
      setTimeout(this.checkAuth, 1500);
    },
    ...mapActions("auth", ["handleAuthStateChange"]),
    ...mapMutations("auth", ["setLoggedIn"]),
    ...mapMutations("auth", ["setAdminIn"]),
    showModalCreateImage() {
      this.modalCreateImage = true;
    },
    closeModalCreateImage() {
      this.modalCreateImage = false;
    },
    showNotif() {

    const array = this.listNotifs2;

    for(let i = 0; array.length > 0; i++) {

      this.$q.notify({
          color: `${array[i].color}`,
          textColor: 'white',
          progress: true,
          icon: array[i].icon,
          classes: 'glossy',
          message: array[i].sujet,
          caption: array[i].content,
          avatar: '../images/dofus/little_logo.png',
          actions: [
          { label: 'Marquer comme lu', color: 'white', handler: () => { 
            this.removeNotif(array[i]._id)
           } }
          ]
    })

    }

  },
  removeNotif(id: any) {

    this.removeNotifList(id);
    
  },
  ...mapActions("auth", ["removeNotifList"])
  },
  computed: {
    ...mapState("auth", ["loggedIn"]),
    ...mapState("auth", ["listNotif"]),
    ...mapState("auth", ["listNotif2"]),
    ...mapState("auth", ["listNotifs2"]),
    ...mapState("general", ["listRatings"]),
    ...mapState("auth", ["adminIn"]),
    ...mapGetters("auth", ["setListUser"])
  },
  setup() {
    const leftDrawerOpen = ref(true);

    return { leftDrawerOpen };
  },
  mounted() {
    this.checkNotif();
    this.checkRating();
    this.checkAuth();
    this.mountedData();
  },
  components: {
    modalDeleteAccount,
    modalCreateNews,
    modalCreateImage
  }
});
</script>
