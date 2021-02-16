<template>
  <div class="row items-start q-gutter-md justify-center">

    <q-form class='q-pa-md' @submit='formCreateUser' @reset="onReset"  method="post">

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white">Inscirption à l'espace membre</div>

    <div class="col-sm-9 text-center text-white"><img src="images/dofus_logo.png" style="width: 279px;"></div>

      <q-input v-model="form.lastname" filled type="text"  hint="Nom valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter ton nom']">

      </q-input>

      <q-input v-model="form.firstname" filled type="text"  hint="Prénom valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter ton prénom']">

      </q-input>

       <q-input v-model="form.pseudo" filled type="text"  hint="Pseudo valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter ton pseudo']">

      </q-input>


       <q-input v-model="form.email" filled type="email"  hint="Email valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter une adresse email valide']">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>

       <q-input v-model="form.password" filled :type="form.isPwd ? 'password' : 'text'" hint="Mot de passe valide" lazy-rules :rules="[ val => val && val.length > 9 || 'Merci d\'enter un mot de passe valide avec 8 caractères et 2 caractères spéciaux']">
        <template v-slot:append>
          <q-icon
            :name="form.isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="form.isPwd = !form.isPwd"
          />
        </template>
      </q-input>

      <q-toggle v-model="form.accept" label="J'accepte la licence et les termes" />

      <div>
        <q-btn color="deep-orange" type="submit" glossy label="Valider" />
        <q-btn label="Effacer" type="reset" color="red" glossy class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'register',
  data () {
    return {
      form: {
        lastname: '',
        firstname: '',
        password: '',
        email: '',
        pseudo: '',
        isPwd: true,

        accept: false
      }
    }
  },
  methods: {
    formCreateUser () {

      var pwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*].*[!@#\$%\^&\*])(?=.{8,})");

    if(this.form.password.match(pwdRegex)) 
    { 
      if (this.form.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Tu doit d\'abord accepter la licence et les conditions'
        })
      }
      else {
        this.registerUser(this.form)
      }
      return true;
    }
    else
    { 
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
      this.form.lastname = null
      this.form.firstname = null
      this.form.email = null
      this.form.pseudo = null
      this.form.password = null
      this.form.accept = false
    },
    ...mapActions('auth', ['registerUser'])
  }
}
</script>