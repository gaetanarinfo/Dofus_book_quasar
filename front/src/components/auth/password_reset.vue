<template>
  <div class="row items-start q-gutter-md justify-center">

    <q-form class='q-pa-md' @submit='login' @reset="onReset">

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white">Mot de passe oublié</div>

    <div class="col-sm-9 text-center text-white"><img src="images/dofus_logo.png" style="width: 279px;"></div>

       <q-input bg-color="grey-2" v-model="formLogin.email" type="email" filled  hint="Email valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter une adresse email valide']">
        <template v-slot:prepend>
          <q-icon name="mail" style="color: black !important;" />
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
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      accept : false,
      formLogin : {
        email: ''
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
        this.resetPasswordUser(this.formLogin)
      }  
       
    },
    onReset () {
      this.formLogin.email = null
      this.accept = false
    },
    ...mapActions('auth', ['resetPasswordUser'])
  }
}
</script>