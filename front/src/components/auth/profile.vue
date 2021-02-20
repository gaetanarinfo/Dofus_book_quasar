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

      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg"
        style="padding : 0px"
      >
        <q-tab class="text-blue" name="Profil" label="Profil" />
        <q-tab class="text-orange" name="Avatar" label="Avatar" />
      </q-tabs>

      <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
          class="text-white text-center"
          style="background-color: transparent"
        >
   
    <q-tab-panel name="Profil">

        <q-form
        transition="flip-right"
      @submit="edit"
      @reset="onReset"
    >

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white" style="padding: 20px 0 0 0;">Modifier mon profil</div>

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
        v-model="formEdit.pseudo"
        label="Pseudo *"
        hint="Pseudo"
      />

      <q-input
      style="padding: 16px 0 16px 0;"
        filled
        v-model="formEdit.email"
        label="Email *"
        hint="Email"
      />

     <div>
        <q-btn color="deep-orange" type="submit" glossy label="Valider"/>
        <q-btn label="Effacer" type="reset" color="red" glossy class="q-ml-sm" />
      </div>

    </q-form>

    </q-tab-panel>

    <q-tab-panel name="Avatar">

    <q-form
      transition="flip-right"
      @submit="editAvatar"
      @reset="onReset"
    >

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white" style="padding: 20px 0 0 0;">Modifier mon avatar</div>

      <q-file
        v-model="files"
        label="Ton avatar"
        filled
        counter
        :counter-label="counterLabelFn"
        max-files="1"
        multiple
        :filter="checkFileType"
        @rejected="onRejected"
        style="padding: 16px 0 16px 0;"
      >
        <template v-slot:prepend>
          <q-icon name="image" color="dark" />
        </template>
      </q-file>

     <div style="padding: 26px 0 0 0;">
        <q-btn color="deep-orange" type="submit" glossy label="Valider"/>
        <q-btn label="Effacer" type="reset" color="red" glossy class="q-ml-sm" />
      </div>

    </q-form>

    </q-tab-panel>

    </q-tab-panels>

    </div>

      </q-img>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
    name: 'edit',
    data () {
    return {
      tab: 'Profil',
      files: null,
      formEdit: {
        pseudo: localStorage.getItem('pseudo'),
        lastname: localStorage.getItem('lastname'),
        firstname: localStorage.getItem('firstname'),
        email: localStorage.getItem('email'),
      },
      userData: {
          avatar: localStorage.getItem('avatar')
      }
      
    }
  },
    methods: {

    checkFileType (files) {
      return files.filter(files => files.type === 'image/png' || 'image/jpg' || 'image/gif' || 'image/jpeg')
    },

    onRejected (rejectedEntries) {
      this.$q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: `Le fichier ne respectant pas nos conditions ! Il doit être en JPG, PNG, GIF, JPEG !`
      })
    },
    counterLabelFn ({ totalSize, filesNumber, maxFiles }) {
      return `${filesNumber} fichier sur ${maxFiles} | ${totalSize}`
    },
    edit() {

      this.editUser(this.formEdit)
       
    },
    onReset () {
      this.email = null
      this.lastname = null
      this.firstname = null
      this.pseudo = null
      this.accept = false
      this.files = null
    },
    ...mapActions('auth', ['editUser']),
    checkAuth () {
      this.loggedDataUser()
      setTimeout(this.checkAuth, 2500)
    },
    ...mapActions('auth', ['loggedDataUser'])
  },
  mounted () {
    this.checkAuth()
  }
}
</script>