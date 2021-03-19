<template>
  <q-page class="q-pa-md">

     <profile v-if='loggedIn === true'></profile>

  </q-page>
</template>

<style lang="css">

.dofus {
    background-image: 'https://www.wallpaperflare.com/static/540/819/705/wakfu-artwork-digital-art-video-games-wallpaper.jpg';
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-color: none !important;
    background-attachment: fixed !important;
}

</style>

<script>
import profile from '../components/auth/profile'
import { mapActions, mapState } from 'vuex'

export default {
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: 'Dofus Book - Mon profil',
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
      tab: 'profile'
    }
  },
  methods: {
    checkAuth () {
      this.logged()
      this.loggedAuth()
      setTimeout(this.checkAuth, 2500)
    },
    ...mapActions('auth', ['logged']),
    ...mapActions('auth', ['loggedAuth'])
  },
  computed: {
    ...mapState('auth', ['loggedIn']),
  },
  components: {
    profile
  },
  mounted () {
    this.checkAuth()
  }
}
</script>