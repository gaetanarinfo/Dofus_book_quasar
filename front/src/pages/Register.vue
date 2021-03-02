<template>
  <q-page class="q-pa-md">

     <register v-if='loggedIn === false'></register>

  </q-page>
</template>

<script>
import register from '../components/auth/register'
import { mapActions, mapState } from 'vuex'

export default {
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: 'Dofus Book - Inscription',
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
      tab: 'register'
    }
  },
  methods : {
    checkAuth () {
      this.logged()
      setTimeout(this.checkAuth, 2500)
    },
    ...mapActions('auth', ['logged'])
  },
  computed: {
    ...mapState('auth', ['loggedIn']),

  },
  components: {
    register
  },
  mounted () {
    this.checkAuth()
  }
}
</script>