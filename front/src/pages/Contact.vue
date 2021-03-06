<template>
  <div class="row items-start q-gutter-md justify-center">

    <q-form class='q-pa-md' @submit='formContact' @reset="onReset"  method="post">

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white">Envoie une demande d'assistance</div>

    <div class="col-sm-9 text-center text-white"><img src="images/dofus_logo.png" style="width: 279px;"></div>

      <q-input bg-color="grey-2" v-model="form.name" filled type="text"  hint="Nom & Prénom valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'entrer ton nom et ton prénom']">

      </q-input>

       <q-input bg-color="grey-2" v-model="form.email" filled type="email"  hint="Email valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'entrer une adresse email valide']">
        <template v-slot:prepend>
          <q-icon name="mail" style="color: black !important;" />
        </template>
      </q-input>

      <q-input bg-color="grey-2" v-model="form.sujet" filled type="text"  hint="Sujet valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'entrer un sujet valide']">
        
      </q-input>

      <q-input bg-color="grey-2" v-model="form.content" filled type="textarea"  hint="Message valide" lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'entrer un message valide']">
        
      </q-input>

      <q-toggle v-model="form.accept" label="J'accepte la licence et les termes" />

      <div>
        <q-btn color="deep-orange" type="submit" glossy label="Valider" />
        <q-btn label="Effacer" type="reset" color="red" glossy class="q-ml-sm" />
      </div>
    </q-form>

    <div class="col-sm-9 col-12 text-h6">
        <p class="text-white font-bebas">Dofus Book traite les données recueillies pour permettre la création, le traitement et le suivi de ta demande d’assistance. Pour en savoir plus sur la gestion de tes données et de tes droits, consulte ma Politique de confidentialité.</p>
    </div>
  </div>
</template>

<style lang="css">
.bg-grey-2 {
    background: #f5f5f55e !important
}
</style>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'contact',
  data () {
    return {
      form: {
        name: '',
        email: '',
        sujet: '',
        content: '',
        accept: false
      }
    }
  },
  methods: {
    formContact () {
    
      if (this.form.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Tu doit d\'abord accepter la licence et les conditions'
        })

      }else {

        this.contact(this.form)

      }

    },
    onReset () {
      this.form.name = null
      this.form.email = null
      this.form.sujet = null
      this.form.content = null
      this.form.accept = false
    },
    ...mapActions('auth', ['contact'])
  }
}
</script>