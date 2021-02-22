<template>
  <div class="row">
    <div class="col-12 col-md-12 col-xs-12">
      <q-img
        transition="flip-right"
        src="https://image.noelshack.com/fichiers/2018/32/2/1533634229-wiki-background.jpg"
        style="width: 100%;height:90vh; border-radius: 10px; "
      >
        <div class="column absolute-right text-center bg-transparent">
          <q-avatar size="96px" class="q-ma-md shadow-10">
            <img :src="userData.avatar" />
          </q-avatar>
        </div>

        <div class="absolute-center bg-transparent" style="width: 700px">


  <div class="q-pa-md">
    <q-markup-table style="background: #08080857 important!;">
      <thead>
          <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <div class="text-h4 text-white">Boîte de reception</div>
            </div>
          </th>
        </tr>
        <tr class="text-white">
          <th class="text-center">Pseudo</th>
          <th class="text-center">Nom</th>
          <th class="text-center">Prénom</th>
          <th class="text-center">Sujet</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-white" v-for="mail in listMail" :key="mail.id">
          <td class="text-center">{{ mail.pseudo }}</td>
          <td class="text-center">159</td>
          <td class="text-center">6</td>
          <td class="text-center">24</td>
          <td class="text-center"><q-btn dense round flat color="green-5" icon="check">
              <q-tooltip anchor="top middle" self="center middle">
               Voir le message
                </q-tooltip>
          </q-btn>
              <q-btn dense round flat color="red-14" icon="delete">
                  <q-tooltip anchor="top middle" self="center middle">
               Supprimer le message
                </q-tooltip>
                </q-btn></td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>

    </div>

      </q-img>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import { log } from 'util'

export default {
    name: 'mailbox',
    data () {
    return {
        mail : null,
        userData: {
          avatar: localStorage.getItem('avatar')
        }
      }
  },
   mounted () {
    this.checkAuth()
  },
    methods: { 
    checkAuth () {
      this.getListMail()
      this.loggedDataUser()
      setTimeout(this.checkAuth, 2500)
    },
    ...mapActions('auth', ['getListMail']),
    ...mapActions('auth', ['loggedDataUser'])
  },
   computed: {
    ...mapState('auth', ['listMail'])
  },
}
</script>