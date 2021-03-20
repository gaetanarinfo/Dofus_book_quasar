<template>
  <q-page class="q-pa-md row items-start q-gutter-md justify-center">
    <div class="title-dofus">TELECHARGER DOFUS</div>

    <div class="q-pa-md col-sm-12 col-12 col-md-12 text-center">
      <q-btn
        color="green-9"
        push
        glossy
        style="width: 254px;height: 72px;margin-left: 9px;"
        class="btn-download-mobile"
        @click="getInstall1"
      >
        <div class="row items-center no-wrap">
          <q-icon left name="download" />
          <div class="text-center">
            Télécharger
            <br />Version : Linux 64 bits*
          </div>
        </div>
      </q-btn>

      <q-btn
        color="green-9"
        push
        glossy
        style="width: 254px;height: 72px; margin-left: 10px;"
        class="btn-download-mobile"
        @click="getInstall2"
      >
        <div class="row items-center no-wrap">
          <q-icon left name="download" />
          <div class="text-center">
            Télécharger
            <br />Version : Windows
          </div>
        </div>
      </q-btn>

      <q-btn
        color="green-9"
        push
        glossy
        style="width: 254px;height: 72px; margin-left: 10px;"
        class="btn-download-mobile"
        @click="getInstall3"
      >
        <div class="row items-center no-wrap">
          <q-icon left name="download" />
          <div class="text-center">
            Télécharger
            <br />Version : Mac OS
          </div>
        </div>
      </q-btn>

      <q-btn
        color="green-9"
        push
        glossy
        style="width: 254px;height: 72px; margin-left: 10px;"
        @click="getInstall4"
      >
        <div class="row items-center no-wrap">
          <q-icon left name="download" />
          <div class="text-center">
            Télécharger
            <br />Version : Linux 32 bits*
          </div>
        </div>
      </q-btn>

      <div class="row col-md-12 col-12 col-sm-12 q-mt-lg q-mb-md" v-if="progressBar === true">
        <q-linear-progress
          :value="progress"
          :buffer="buffer"
          color="warning"
          style="max-width: 500px !important; margin: 0 auto;"
        />
      </div>

      <div
        class="block-dofus text-center q-pa-md col-sm-12 col-12 col-md-12"
      >* Ankama vous fournit une version compatible avec Linux mais n'assure pas le support client et ne s'engage pas actuellement à faire fonctionner les jeux sur l'ensemble des distributions Linux.</div>

      <div
        class="text-h4 text-center q-pa-md col-sm-12 col-12 col-md-12 text-white font-bebas"
      >Comment installer le jeu ?</div>

      <div class="col-6 image-install" style="display: inline-block; margin-right: 10px;">
        <q-img src="images/dofus/how-to-install1.jpg" native-context-menu class="dofus-mobile">
          <div class="absolute-bottom text-subtitle1 text-center">
            <q-btn @click="install1 = true">1. Téléchargez Ankama Launcher</q-btn>
          </div>
        </q-img>
      </div>

      <div class="col-6 image-install" style="display: inline-block; margin-right: 10px;">
        <q-img src="images/dofus/how-to-install2.jpg" native-context-menu class="dofus-mobile">
          <div class="absolute-bottom text-subtitle1 text-center">
            <q-btn @click="install2 = true">2. Installez DOFUS</q-btn>
          </div>
        </q-img>
      </div>

      <div class="col-6 image-install" style="display: inline-block;">
        <q-img src="images/dofus/how-to-install3.jpg" native-context-menu class="dofus-mobile">
          <div class="absolute-bottom text-subtitle1 text-center">
            <q-btn @click="install3 = true">3. Créez votre personnage</q-btn>
          </div>
        </q-img>
      </div>
    </div>

    <div class="dofus-content">
      <div
        class="dofus-title-block"
      >DOFUS est un RPG où votre stratégie fera la différence entre la victoire... et la défaite&nbsp;!</div>
      <div class="dofus-separator"></div>
      <p>
        Dans ce jeu de
        <span
          style="color:#fda90c;font-weight:bold;"
        >combats tactiques au tour par tour</span>, gérez vos déplacements et attaques via des points de mouvement (PM) et des points d'action (PA) dans le temps imparti, pour des affrontements aussi stratégiques que dynamiques.
        <br />Façonnez votre héros à partir des 18 classes de personnage, de leurs gameplays et de leurs statistiques. Partez en quête des Dofus, œufs de dragon qui confèrent des pouvoirs et bonus à votre personnage et atteignez le prestigieux niveau 200.
        <br />
        <br />Ce
        <span style="color:#fda90c;font-weight:bold;">jeu de stratégie gratuit</span> à télécharger est aussi jouable via navigateur. Dans ce
        <span
          style="color:#fda90c;font-weight:bold;"
        >MMORPG tactique</span>, vous pouvez exercer de multiples métiers pour vendre vos services et ressources contre des "kamas", la monnaie du jeu. La Bourse aux Kamas et les Hôtels de Vente permettent aux joueurs de contrôler l'économie du jeu.
        <br />Donjons, chasses aux trésors, monstres, boss, familiers, compagnons, mode joueur contre joueur (JcJ / PvP), guildes, nations et même un serveur héroïque (où l'XP et le drop sont doublés, mais la mort y est définitive) vous attendent dans
        <span
          style="color:#fda90c;font-weight:bold;"
        >ce jeu gratuit en ligne</span>.
      </p>
    </div>

    <div class="q-pa-md col-sm-12 col-12 col-md-12 text-center">
      <div class="col-6 image-install" style="display: inline-block;">
        <q-img
          src="images/dofus/how-to-play.jpg"
          style="height: 185px;"
          native-context-menu
          class="bloc-dofus-1"
        >
          <div
            class="absolute-bottom text-subtitle1 text-center font-bebas"
            style="padding: 10px 0px 5px 0;"
          >Premiers pas dans le monde des douze ?</div>
        </q-img>
      </div>

      <div class="dofus-content-btn bloc-dofus-1-1">
        <q-btn
          class="text-bold"
          color="green-9"
          glossy
          push
          type="a"
          href="https://www.dofus.com/fr/mmorpg/tutoriels"
          target="_blank"
        >VOIR LES TUTORIELS</q-btn>
      </div>
    </div>

    <div class="q-pa-md col-sm-12 col-12 col-md-12 text-center">
      <div class="col-6 image-install" style="display: inline-block;">
        <q-img
          src="images/dofus/community.jpg"
          style="height: 185px;"
          native-context-menu
          class="bloc-dofus-1"
        >
          <div
            class="absolute-bottom text-subtitle1 text-center font-bebas"
            style="padding: 10px 0px 5px 0;"
          >Vous n'êtes pas seul !</div>
        </q-img>
      </div>

      <div class="dofus-content-btn bloc-dofus-1-1">
        <q-btn
          class="text-bold"
          color="yellow-9"
          glossy
          push
          type="a"
          href="https://www.dofus.com/fr/forum"
          target="_blank"
        >Vous n'êtes pas seul !</q-btn>
      </div>
    </div>

    <q-dialog v-model="install1">
      <q-card style="background: rgb(31 31 31 / 78%) !important; color: white;">
        <q-toolbar>
          <q-avatar>
            <img
              src="https://styles.redditmedia.com/t5_2sl1e/styles/communityIcon_w2pemjj4a7b21.png?width=256&s=2388bd09a659c346fce7c8d5eb82143a1ebf4a72"
            />
          </q-avatar>

          <q-toolbar-title>
            <span class="text-weight-bold">Téléchargez Ankama Launcher</span>
          </q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>Pour accéder à tous les jeux d'Ankama, vous avez besoin d'Ankama Launcher. Téléchargez-le ci-dessous, installez-le, puis connectez-vous à votre compte ou créez-en un. Vous pouvez aussi vous connecter avec Facebook.</q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="install2">
      <q-card style="background: rgb(31 31 31 / 78%) !important; color: white;">
        <q-toolbar>
          <q-avatar>
            <img
              src="https://styles.redditmedia.com/t5_2sl1e/styles/communityIcon_w2pemjj4a7b21.png?width=256&s=2388bd09a659c346fce7c8d5eb82143a1ebf4a72"
            />
          </q-avatar>

          <q-toolbar-title>
            <span class="text-weight-bold">Installez DOFUS</span>
          </q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>Installez DOFUS en 64 bits et accédez à toutes ses versions : DOFUS 2, DOFUS bêta, 1.29, Rétro.</q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="install3">
      <q-card style="background: rgb(31 31 31 / 78%) !important; color: white;">
        <q-toolbar>
          <q-avatar>
            <img
              src="https://styles.redditmedia.com/t5_2sl1e/styles/communityIcon_w2pemjj4a7b21.png?width=256&s=2388bd09a659c346fce7c8d5eb82143a1ebf4a72"
            />
          </q-avatar>

          <q-toolbar-title>
            <span class="text-weight-bold">Créez votre personnage</span>
          </q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>Bienvenue dans le Monde des Douze ! À vous de jouer...</q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { mapActions, mapState } from "vuex";
import "../../public/css/download.sass";

export default defineComponent({
  name: "Download",
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: "Dofus Book - Téléchargement",
      description: {
        name: "description",
        content:
          "Plusieurs milliers de joueurs dans le monde. DOFUS est un jeu de rôle massivement multijoueur où le but est de retrouver les 6 précieux Dofus pour devenir maître d'Amakna."
      },
      keywords: {
        name: "keywords",
        content:
          "mmo, mmorpg, free mmorpg, free online mmorpg, video game, video game rental, video game system, free video game, online game, multiplayer game, free multiplayer game, dofus community, comics, pc game, pc game cheat, game, free game, online game, toy game, addicting game"
      },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    };
  },
  data() {
    return {
      progressBar: false,
      install1: false,
      install2: false,
      install3: false,
      progress: 0.01,
      buffer: 0.01
    };
  },
  methods: {
    getInstall1() {
      const interval = setInterval(() => {
        this.progressBar = true;
        if (this.progress >= 1) {
          this.progress = 0.01;
          this.buffer = 0.01;
          return;
        }

        if (this.progress === 0.9099999999999999) {
          this.progressBar = false;
          clearInterval(interval);
          clearInterval(bufferInterval);
          window.open("http://dofus-book.fr/games/Ankama Launcher-Setup-x86_64.AppImage", "_blank");
        }

        this.progress = Math.min(1, this.buffer, this.progress + 0.1);
      }, 300 + Math.random() * 1000);

      const bufferInterval = setInterval(() => {
        if (this.buffer < 1) {
          this.buffer = Math.min(1, this.buffer + Math.random() * 0.2);
        }
      }, 100);
    },
    getInstall2() {
      const interval = setInterval(() => {
        this.progressBar = true;
        if (this.progress >= 1) {
          this.progress = 0.01;
          this.buffer = 0.01;
          return;
        }

        if (this.progress === 0.9099999999999999) {
          this.progressBar = false;
          clearInterval(interval);
          clearInterval(bufferInterval);
          window.open("http://dofus-book.fr/games/Ankama%20Launcher-Setup.exe", "_blank");
        }

        this.progress = Math.min(1, this.buffer, this.progress + 0.1);
      }, 300 + Math.random() * 1000);

      const bufferInterval = setInterval(() => {
        if (this.buffer < 1) {
          this.buffer = Math.min(1, this.buffer + Math.random() * 0.2);
        }
      }, 100);
    },
    getInstall3() {
      const interval = setInterval(() => {
        this.progressBar = true;
        if (this.progress >= 1) {
          this.progress = 0.01;
          this.buffer = 0.01;
          return;
        }

        if (this.progress === 0.9099999999999999) {
          this.progressBar = false;
          clearInterval(interval);
          clearInterval(bufferInterval);
          window.open("http://dofus-book.fr/games/Ankama%20Launcher-Setup.dmg", "_blank");
        }

        this.progress = Math.min(1, this.buffer, this.progress + 0.1);
      }, 300 + Math.random() * 1000);

      const bufferInterval = setInterval(() => {
        if (this.buffer < 1) {
          this.buffer = Math.min(1, this.buffer + Math.random() * 0.2);
        }
      }, 100);
    },
    getInstall4() {
      const interval = setInterval(() => {
        this.progressBar = true;
        if (this.progress >= 1) {
          this.progress = 0.01;
          this.buffer = 0.01;
          return;
        }

        if (this.progress === 0.9099999999999999) {
          this.progressBar = false;
          clearInterval(interval);
          clearInterval(bufferInterval);
          window.open("http://dofus-book.fr/games/Ankama%20Launcher-Setup-i386.AppImage", "_blank");
        }

        this.progress = Math.min(1, this.buffer, this.progress + 0.1);
      }, 300 + Math.random() * 1000);

      const bufferInterval = setInterval(() => {
        if (this.buffer < 1) {
          this.buffer = Math.min(1, this.buffer + Math.random() * 0.2);
        }
      }, 100);
    }
  }
});
</script>
