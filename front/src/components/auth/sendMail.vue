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

        <q-form
        transition="flip-right"
      @submit="send"
      @reset="onReset"
    >

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white" style="padding: 20px 0 0 0;">Envoyer un message</div>

        <q-input
        style="padding: 0 0 10px 0;"
            filled
            v-model="formEdit.lastname"
            label="Nom *"
            hint="Nom"
        />

        <q-input
        style="padding: 16px 0 10px 0;"
            filled
            v-model="formEdit.firstname"
            label="Prénom *"
            hint="Prénom"
        />

        <q-input
        style="padding: 16px 0 10px 0;"
            filled
            v-model="formEdit.author"
            label="Pseudo *"
            hint="Pseudo"
        />

        <q-input
        style="padding: 16px 0 10px 0;"
            filled
            v-model="formEdit.recipient"
            label="Destinataire *"
            hint="Destinataire"
        />

        <q-input
        style="padding: 16px 0 16px 0;"
            filled
            v-model="formEdit.sujet"
            label="Sujet *"
            hint="Sujet"
        />

        <q-input
          style="padding: 16px 0 16px 0;"
          filled
          v-model="formEdit.content"
          label="Message *"
          hint="Message"
          type="textarea"
        />

        <div style="padding: 16px 0 0 0;">
            <q-btn color="deep-orange" type="submit" glossy label="Valider"/>
            <q-btn label="Effacer" type="reset" color="red" glossy class="q-ml-sm" />
        </div>

    </q-form>
    </div>
      </q-img>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import { log } from 'util'

export default {
    name: 'send',
    data () {
    return {
      tab: 'send',
      formEdit: {
        lastname: `${this.listUser.lastname}`,
        author: `${this.listUser.pseudo}`,
        firstname: `${this.listUser.firstname}`,
        recipient: "",
        sujet: "",
        content: "",
        avatar : localStorage.getItem('avatar')
      },
      userData: {
          avatar: localStorage.getItem('avatar')
      }
      
    }
  },
    methods: {
    send() {

      this.sendMail(this.formEdit)
       
    },
    onReset () {
      this.content = null
      this.lastname = null
      this.firstname = null
      this.author = null
      this.sujet = null
      this.recipient = null
    },
    ...mapActions('auth', ['sendMail']),
    checkAuth () {
      this.loggedDataUser()
      setTimeout(this.checkAuth, 2500)
    },
    ...mapActions('auth', ['loggedDataUser'])
  },
  mounted () {
    this.checkAuth()
  },
  props: {
    listUser : { 
      type: Array 
    }
  }
}
</script>