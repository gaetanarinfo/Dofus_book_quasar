<template>
  <q-card class="col-md-3 col-xs-3 text-center">
    <p class="text-h4">Post</p>
    <q-separator/>

    <!-- Formulaire -->
    <q-form class='q-pa-md' @submit='formCreateUser'  method="post">

      <!-- Input -->
      <q-input class='q-my-sm' rounded outlined v-model="form.name" label="first name" />
      <q-input class='q-my-sm' rounded outlined v-model="form.password" label="password" />
      <q-input class='q-my-sm' rounded outlined v-model="form.email" label="email" />

      <!-- Boutton submit -->
      <q-btn class='q-my-sm' dense rounded icon-right="send" label="Submit" type="submit" color="primary"/>

    </q-form>

  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'post',
  data () {
    return {
      form: {
        name: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    formCreateUser () {
      this.createUser(this.form)
    },
    ...mapActions('user', ['createUser'])
  }
}
</script>
