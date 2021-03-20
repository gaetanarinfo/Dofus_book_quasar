<template>
  <q-page class="q-pa-md">

     <mailbox v-if='loggedIn === true' :listMail='listMail'></mailbox>

     <q-page-scroller position="bottom-right" :scroll-offset="250" :offset="[25, 25]">
        <q-btn style="background: transparent;">
          <img src="/images/dofus/little_logo.png" />
          <q-tooltip anchor="top middle" self="center middle">Remonter en haut</q-tooltip>
        </q-btn>
     </q-page-scroller>

  </q-page>
</template>

<style lang="css">

.dofus {
    background-image: 'https://www.wallpaperflare.com/static/540/819/705/wakfu-artwork-digital-art-video-games-wallpaper.jpg';
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-attachment: fixed !important;
    background-color: none !important;
}

</style>

<script>
import mailbox from '../components/auth/mailbox'
import { mapActions, mapState } from 'vuex'

export default {
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: 'Dofus Book - Boîte de réception',
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
      tab: 'mailbox',
      userPseudo: ''
    }
  },
  methods: {
    checkAuth () {
      this.loggedAuth()
      setTimeout(this.checkAuth, 2500)
    },
    ...mapActions("auth", ["getProfil"]),
    ...mapActions('auth', ['loggedAuth']),
    ...mapActions('auth', ['getListMail'])
  },
  computed: {
    ...mapState("auth", ["listUser"]),
    ...mapState('auth', ['loggedIn']),
    ...mapState('auth', ['listMail'])
  },
  components: {
    mailbox
  },
  mounted () {
    this.checkAuth()
    this.getListMail(this.listUser.pseudo)
  }
}
</script>