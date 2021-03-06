<template>
  <div class="row items-start q-gutter-md justify-center">

    <q-form class='q-pa-md' @submit='login' @reset="onReset">

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white">Confirmer le mot de passe oublié</div>

    <div class="col-sm-9 text-center text-white"><img src="images/dofus_logo.png" style="width: 279px;"></div>

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

      <q-input bg-color="grey-2" v-model="formLogin.password_confirm" filled :type="isPwd2 ? 'password' : 'text'" hint="Mot de passe valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter un mot de passe valide']">
        <template v-slot:append>
          <q-icon
            style="color: black !important;"
            :name="isPwd2 ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd2 = !isPwd2"
          />
        </template>
      </q-input>

      <q-toggle v-model="accept" label="J'accepte la licence et les termes" />

      <div>
        <q-btn color="deep-orange" type="submit" glossy label="Valider"/>
        <q-btn label="Effacer" type="reset" color="red" glossy class="q-ml-sm" />
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
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      accept : false,
      isPwd: true,
      isPwd2: true,
      formLogin : {
        password: '',
        password_confirm: ''
      }
    }
  },
  methods: {
    login() {

      var pwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

      if(this.formLogin.password.match(pwdRegex) || this.formLogin.password_confirm.match(pwdRegex)) 
      { 

        if (this.formLogin.password === this.formLogin.password_confirm) { 

        if (this.accept !== true) {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Tu doit d\'abord accepter la licence et les conditions'
          })
        }
        else {
          this.recoverPasswordUserConfirm(this.formLogin) 
        }  
        }else{
              this.$q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'Les mots de passe ne correspondent pas !'
            })
          }
        
      }else{
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Le mot de passe ne correspond pas aux conditions !'
        })
      return false;
      }
       
    },
    onReset () {
      this.formLogin.password = null
      this.formLogin.password_confirm = null
      this.accept = false
    },
    ...mapActions('auth', ['recoverPasswordUserConfirm']),
    checkAuth () {
      this.recoverPasswordUser()
      setTimeout(this.checkAuth, 2500)
    },
    ...mapActions('auth', ['recoverPasswordUser'])
  },
  mounted () {
    this.checkAuth()
  }
}
</script>