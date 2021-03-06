<template>

  <q-page class="q-pa-md row items-start q-gutter-md justify-center">
    
      <div class="title-dofus">
            TELECHARGER DOFUS
      </div>

       <div class="q-pa-md col-sm-12 col-12 col-md-12 text-center">

       <q-btn color="indigo-9" push glossy style="width: 254px;height: 72px;" type="a" href="games/Ankama Launcher-Setup-x86_64.AppImage" target="_blank">
      <div class="row items-center no-wrap">
        <q-icon left name="download" />
        <div class="text-center">
          Télécharger
          <br>
          Version :  Linux 64 bits*
        </div>
      </div>
    </q-btn>

    <q-btn color="indigo-9" push glossy style="width: 254px;height: 72px; margin-left: 10px;" type="a" href="games/Ankama Launcher-Setup.exe" target="_blank">
      <div class="row items-center no-wrap">
        <q-icon left name="download" />
        <div class="text-center">
          Télécharger
          <br>
          Version :  Windows
        </div>
      </div>
    </q-btn>

    <q-btn color="indigo-9" push glossy style="width: 254px;height: 72px; margin-left: 10px;" type="a" href="games/Ankama Launcher-Setup.dmg" target="_blank">
      <div class="row items-center no-wrap">
        <q-icon left name="download" />
        <div class="text-center">
          Télécharger
          <br>
          Version :  Mac OS
        </div>
      </div>
    </q-btn>

    <q-btn color="indigo-9" push glossy style="width: 254px;height: 72px; margin-left: 10px;" type="a" href="games/Ankama Launcher-Setup-i386.AppImage" target="_blank">
      <div class="row items-center no-wrap">
        <q-icon left name="download" />
        <div class="text-center">
          Télécharger
          <br>
          Version :  Linux 32 bits*
        </div>
      </div>
    </q-btn>

    <div class="block-dofus text-center q-pa-md col-sm-12 col-12 col-md-12">* Ankama vous fournit une version compatible avec Linux mais n'assure pas le support client et ne s'engage pas actuellement à faire fonctionner les jeux sur l'ensemble des distributions Linux.</div>
    
    <div class="text-h4 text-center q-pa-md col-sm-12 col-12 col-md-12 text-black font-bebas">Comment installer le jeu ?</div>
    
     <div class="col-6 image-install" style="display: inline-block; margin-right: 10px;">
                <q-img
          src="images/dofus/how-to-install1.jpg"
          style="width: 314px"
          native-context-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            <q-btn @click="install1 = true">1. Téléchargez Ankama Launcher</q-btn>
          </div>
        </q-img>
     </div>

     <div class="col-6 image-install" style="display: inline-block; margin-right: 10px;">
                <q-img
          src="images/dofus/how-to-install2.jpg"
          style="width: 314px"
          native-context-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            <q-btn @click="install2 = true">2. Installez DOFUS</q-btn>
          </div>
        </q-img>

     </div>

     <div class="col-6 image-install" style="display: inline-block;">
                <q-img
          src="images/dofus/how-to-install3.jpg"
          style="width: 314px"
          native-context-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            <q-btn @click="install3 = true">3. Créez votre personnage</q-btn>
          </div>
        </q-img>

     </div>
    </div>

    <div class="dofus-content">
                <div class="dofus-title-block">DOFUS est un RPG où votre stratégie fera la différence entre la victoire... et la défaite&nbsp;!</div>
                <div class="dofus-separator"></div>
                <p>Dans ce jeu de <span style="color:#fda90c;font-weight:bold;">combats tactiques au tour par tour</span>, gérez vos déplacements et attaques via des points de mouvement (PM) et des points d'action (PA) dans le temps imparti, pour des affrontements aussi stratégiques que dynamiques.<br>
Façonnez votre héros à partir des 18 classes de personnage, de leurs gameplays et de leurs statistiques. Partez en quête des Dofus, œufs de dragon qui confèrent des pouvoirs et bonus à votre personnage et atteignez le prestigieux niveau 200.<br>
<br>
Ce <span style="color:#fda90c;font-weight:bold;">jeu de stratégie gratuit</span> à télécharger est aussi jouable via navigateur. Dans ce <span style="color:#fda90c;font-weight:bold;">MMORPG tactique</span>, vous pouvez exercer de multiples métiers pour vendre vos services et ressources contre des "kamas", la monnaie du jeu. La Bourse aux Kamas et les Hôtels de Vente permettent aux joueurs de contrôler l'économie du jeu.<br>
Donjons, chasses aux trésors, monstres, boss, familiers, compagnons, mode joueur contre joueur (JcJ / PvP), guildes, nations et même un serveur héroïque (où l'XP et le drop sont doublés, mais la mort y est définitive) vous attendent dans <span style="color:#fda90c;font-weight:bold;">ce jeu gratuit en ligne</span>.</p>
            </div>

    <div class="q-pa-md col-sm-12 col-12 col-md-12 text-center">
    <div class="col-6 image-install" style="display: inline-block;">
                <q-img
          src="images/dofus/how-to-play.jpg"
          style="width: 370px"
          native-context-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center font-bebas" style="padding: 10px 0px 5px 0;">
            Premiers pas dans le monde des douze ?
          </div>
        </q-img>

     </div>

     <div class="dofus-content-btn">
                        <q-btn class="text-bold" color="green-9" glossy push type="a" href="https://www.dofus.com/fr/mmorpg/tutoriels" target="_blank">    
                            VOIR LES TUTORIELS
                            </q-btn>
                    </div>
</div>

 <div class="q-pa-md col-sm-12 col-12 col-md-12 text-center">
    <div class="col-6 image-install" style="display: inline-block;">
                <q-img
          src="images/dofus/community.jpg"
          style="width: 666px"
          native-context-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center font-bebas" style="padding: 10px 0px 5px 0;">
            Premiers pas dans le monde des douze ?
          </div>
        </q-img>

     </div>

     <div class="dofus-content-btn" style="width: 686px">
                        <q-btn class="text-bold" color="yellow-9" glossy push type="a" href="https://www.dofus.com/fr/forum" target="_blank">
                            Vous n'êtes pas seul !
                            </q-btn>
                    </div>
</div>

      <q-dialog v-model="install1">
      <q-card style="background: rgb(31 31 31 / 78%) !important; color: white;">
        <q-toolbar>
           <q-avatar>
            <img src='https://styles.redditmedia.com/t5_2sl1e/styles/communityIcon_w2pemjj4a7b21.png?width=256&s=2388bd09a659c346fce7c8d5eb82143a1ebf4a72'>
          </q-avatar>

          <q-toolbar-title><span class="text-weight-bold">Téléchargez Ankama Launcher</span></q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>
         Pour accéder à tous les jeux d'Ankama, vous avez besoin d'Ankama Launcher. Téléchargez-le ci-dessous, installez-le, puis connectez-vous à votre compte ou créez-en un. Vous pouvez aussi vous connecter avec Facebook.
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="install2">
      <q-card style="background: rgb(31 31 31 / 78%) !important; color: white;">
        <q-toolbar>
           <q-avatar>
            <img src='https://styles.redditmedia.com/t5_2sl1e/styles/communityIcon_w2pemjj4a7b21.png?width=256&s=2388bd09a659c346fce7c8d5eb82143a1ebf4a72'>
          </q-avatar>

          <q-toolbar-title><span class="text-weight-bold">Installez DOFUS</span></q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>
         Installez DOFUS en 64 bits et accédez à toutes ses versions : DOFUS 2, DOFUS bêta, 1.29, Rétro.
        </q-card-section>
      </q-card>
    </q-dialog>

       <q-dialog v-model="install3">
      <q-card style="background: rgb(31 31 31 / 78%) !important; color: white;">
        <q-toolbar>
           <q-avatar>
            <img src='https://styles.redditmedia.com/t5_2sl1e/styles/communityIcon_w2pemjj4a7b21.png?width=256&s=2388bd09a659c346fce7c8d5eb82143a1ebf4a72'>
          </q-avatar>

          <q-toolbar-title><span class="text-weight-bold">Créez votre personnage</span></q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>
         Bienvenue dans le Monde des Douze ! À vous de jouer...
        </q-card-section>
      </q-card>
    </q-dialog>        
    
  </q-page>

</template>

<style lang="css">
.dofus {
    background: url('../../public/background/jouer_type3.jpg') !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-color: none !important;
}
 .dofus-content-btn {
    display: block;
    width: 390px;
    margin: 0 auto;
    color: #d4d3c6;
    background: #000000a6;
    padding: 0px 12px 12px 12px;
    font-family: "bebas_neueregular",sans-serif;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
 }   
.dofus-content {
    background: rgba(0,0,0,0.6);
    position: relative;
    right: 0;
    min-height: 459px;
    max-width: 667px;
    padding: 16px 12px;
}
.dofus-content > p {
    color: #fff;
    text-align: justify;
}
.dofus-title-block {
    color: #fff;
    font-size: 30px;
    line-height: 32px;
    font-family: "bebas_neueregular",sans-serif;
    text-align: center;
}
.dofus-separator {
    margin: 24px auto;
    height: 5px;
    width: 213px;
    background: url('../../public/images/dofus/separator.png') center center no-repeat transparent;
}
.title-dofus {
    max-width: 435px;
    padding: 7px 13px 0px 9px;
    margin: 0 auto;
    color: #fff;
    font-size: 50px;
    background: rgba(0,0,0,0.6);
    font-family: "bebas",sans-serif;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
} 

.title-dofus::before {
    background: url('../../public/images/dofus/12039.w40h40.png') center top no-repeat transparent;
    content: " ";
    display: inline-block;
    position: relative;
    vertical-align: middle;
    width: 46px;
    height: 41px;
}
.block-dofus {
    padding: 7px 13px 7px 9px;
    margin-top: 28px !important;
    width: 350px;
    margin: 0 auto;
    color: #fff;
    font-weight: 500;
    font-size: 13px;
    background: rgba(0,0,0,0.6);
    text-align: center;
    letter-spacing: 1px;
}
.image-install {
    border: 10px solid rgba(0,0,0,0.6);
}
</style>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  name: 'Download',
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: 'Dofus Book - Téléchargement',
      description: {
          name: "description",
          content: 'Plusieurs milliers de joueurs dans le monde. DOFUS est un jeu de rôle massivement multijoueur où le but est de retrouver les 6 précieux Dofus pour devenir maître d\'Amakna.'
        },
        keywords: { name: "keywords", content: "mmo, mmorpg, free mmorpg, free online mmorpg, video game, video game rental, video game system, free video game, online game, multiplayer game, free multiplayer game, dofus community, comics, pc game, pc game cheat, game, free game, online game, toy game, addicting game" },
        equiv: {
          "http-equiv": "Content-Type",
          content: "text/html; charset=UTF-8"
        }
      }

  },
  data () {
    return {
        install1: false,
        install2: false,
        install3: false
    }
  },
  components: { 
    
  },
  methods : {

  },
  computed: {
 
  },
});
</script>
