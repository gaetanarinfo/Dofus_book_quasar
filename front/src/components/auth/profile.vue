<template>
  <div class="row">
    <div class="col-12 col-md-12 col-xs-12">
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

    <div transition="flip-right" class="col-sm-9 col-12 text-h4 font-bebas text-center text-white" style="padding: 20px 0 10px 0px;">Modifier mon avatar</div>

      <q-uploader
      :url="userIdAvatar"
      :headers="[{name: 'X-Custom-Timestamp', value: 1550240306080}]"
      style="max-width: 42%;"
      multiple
      max-files="1"
      accept=".jpg, .png, .gif, .jpeg, image/*"
      @rejected="onRejected"
      color="amber"
      class="q-ml-auto q-mr-auto text-center"
      label="Avatar de ton profil"
    />

    </q-tab-panel>

    </q-tab-panels>

    </div>

    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import { log } from 'util'

export default {
    name: 'edit',
    data () {
    return {
      tab: 'Profil',
      userIdAvatar: `http://127.0.0.1:8000/profil_edit_avatar/${this.$route.params.id}`,
      formEdit: {
        userId: '',
        pseudo: '',
        lastname: '',
        firstname: '',
        email: '',
      },
      userData: {
          avatar: ''
      }
      
    }
  },
    methods: { 
      mountedData () {

      this.formEdit.pseudo = this.listUser.pseudo
      this.formEdit.lastname = this.listUser.lastname
      this.formEdit.firstname = this.listUser.firstname
      this.formEdit.email = this.listUser.email
      this.userData.avatar = this.listUser.avatar
      this.formEdit.userId = this.listUser._id

    },
    onRejected (rejectedEntries) {
      this.$q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: `Le fichier ne respectant pas nos conditions ! Il doit être en JPG, PNG, GIF, JPEG !`
      })
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
    },
    ...mapActions("auth", ["getProfil"]),
    ...mapActions('auth', ['editUser']),
    ...mapActions('auth', ['editAvatars']),
    checkAuth () {
      this.loggedDataUser()
      setTimeout(this.checkAuth, 2500)
    },
    ...mapActions('auth', ['loggedDataUser'])
  },
  computed: {
    ...mapState("auth", ["listUser"])
  },
  mounted () {
    this.checkAuth()
    this.mountedData() 
  }
}
</script>