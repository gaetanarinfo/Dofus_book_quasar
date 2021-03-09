<template>
  <div class="row items-start q-gutter-md justify-center">

    <q-form class='q-pa-md' @submit='login' @reset="onReset">

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white">Connexion à l'espace membre</div>

    <div class="col-sm-9 text-center text-white"><img src="images/dofus_logo.png" style="width: 279px;"></div>

       <q-input bg-color="grey-2" v-model="formLogin.email" type="email" filled  hint="Email valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter une adresse email valide']">
        <template v-slot:prepend>
          <q-icon name="mail" style="color: black !important;" />
        </template>
      </q-input>

       <q-input bg-color="grey-2" v-model="formLogin.password" filled :type="isPwd ? 'password' : 'text'" hint="Mot de passe valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter un mot de passe valide']">
        <template v-slot:append>
          <q-icon
            style="color: black !important;"
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-toggle v-model="accept" label="J'accepte la licence et les termes" />

      <div class="text-center q-mt-md col-12 col-md-12 col-sm-12">
        <q-btn color="deep-orange" type="submit" glossy label="Valider"/>
        <q-btn label="Effacer" type="reset" color="red" glossy class="q-ml-sm" />
      </div>

      <div class="col-12 col-md-12 col-sm-12 text-center q-mt-md">
         <q-btn type="a" href="#/password_reset" glossy label="Mot de passe oublié" push color="orange-6" class="q-ml-sm" />
      </div>
      
    </q-form>

  </div>
</template>

<style lang="css">
.bg-grey-2 {
    background: #f5f5f55e !important
}
</style>

<script>
import { mapActions, mapMutations } from 'vuex'
import { SessionStorage } from 'quasar'

export default {
  name: 'login',
  data () {
    return {
      accept : false,
      isPwd: true,
      formLogin : {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    login() {

      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Tu doit d\'abord accepter la licence et les conditions'
        })
      }
      else {
        this.loginUser(this.formLogin)
      }  
       
    },
    onReset () {
      this.formLogin.email = null
      this.formLogin.password = null
      this.accept = false
    },
    ...mapActions('auth', ['loginUser'])
  }
}
</script>