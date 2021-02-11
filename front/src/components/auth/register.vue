<template>
  <div class="row items-start q-gutter-md justify-center">

    <q-form class='q-pa-md' @submit='formCreateUser' @reset="onReset"  method="post">

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white">Inscirption à l'espace membre</div>

    <div class="col-sm-9 text-center text-white"><img src="images/dofus_logo.png" style="width: 279px;"></div>

      <q-input v-model="form.lastname" filled type="text"  hint="Nom valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter ton nom']">

      </q-input>

      <q-input v-model="form.firstname" filled type="text"  hint="Prénom valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter ton prénom']">

      </q-input>

       <q-input v-model="form.email" filled type="email"  hint="Email valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter une adresse email valide']">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>

       <q-input v-model="form.password" filled :type="form.isPwd ? 'password' : 'text'" hint="Mot de passe valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter un mot de passe valide']">
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
        isPwd: true,

        accept: false
      }
    }
  },
  methods: {
    formCreateUser () {
      if (this.form.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Tu doit d\'abord accepter la licence et les conditions'
        })
      }
      else {
        this.createUser(this.form)
        this.$q.notify({
          color: 'green-5',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Ton inscription est pris en compte !'
        })
      }
    },
    onReset () {
      this.form.lastname = null
      this.form.firstname = null
      this.form.email = null
      this.form.password = null
      this.form.accept = false
    },
    ...mapActions('auth', ['createUser'])
  }
}
</script>