<template>
  <div class="row items-start q-gutter-md justify-center">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white">Connexion à l'espace membre</div>

    <div class="col-sm-9 text-center text-white"><img src="images/dofus_logo.png" style="width: 279px;"></div>

       <q-input v-model="email" type="email" filled  hint="Email valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter une adresse email valide']">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>

       <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Mot de passe valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter un mot de passe valide']">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-toggle v-model="accept" label="J'accepte la licence et les termes" />

      <div>
        <q-btn color="deep-orange" type="submit" glossy label="Valider" />
        <q-btn label="Effacer" type="reset" color="red" glossy class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      isPwd: true,

      accept: false
    }
  },

  methods: {
    onSubmit () {
    // -----> Pour le model de login avec une BDD

    //     if (this.email !== '') {
    //     this.$q.notify({
    //       color: 'red-5',
    //       textColor: 'white',
    //       icon: 'warning',
    //       message: 'Tu doit entrer une adresse email valide'
    //     })
    //   }

    //   if (this.password !== '') {
    //     this.$q.notify({
    //       color: 'red-5',
    //       textColor: 'white',
    //       icon: 'warning',
    //       message: 'Tu doit entrer un mot de passe valide valide'
    //     })
    //   }

      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Tu doit d\'abord accepter la licence et les conditions'
        })
      }
      else {
        this.$q.notify({
          color: 'green-5',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Connexion en cours, Merci de ta patience !'
        })
      }
    },

    onReset () {
      this.email = null
      this.password = null
      this.accept = false
    }
  }
}
</script>