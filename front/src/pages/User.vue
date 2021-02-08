<template>
  <q-page class='q-pa-md'>

    <headerUser :data='this.form'/>

    <q-form @submit='formEditUser' class='col-md-12 col-12 col-xs-12 q-pa-md q-gutter-md row'>
      <div class='row justify-around'>

        <q-input class='col-md-4 col-12 col-xs-12 q-pa-xs'
          rounded v-model="form.email" label="Email" />
        <q-input class='col-md-4 col-12 col-xs-12 q-pa-xs'
          rounded v-model="form.name" label="Name" />
        <q-input class='col-md-4 col-12 col-xs-12 q-pa-xs'
          rounded v-model="form.password" label="password" />

        <q-btn label='Submit'
          type='submit' class="col-md-4 q-mt-md bg-grey-10 text-primary" rounded />

      </div>
    </q-form>

  </q-page>
</template>

<script>
import headerUser from '../components/headerUserId'
import { mapActions } from 'vuex'

export default {
  name: 'PageUser',
  data () {
    return {
      form: {
        id: this.user.id,
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      }
    }
  },
  components: {
    headerUser
  },
  methods: {
    formEditUser () {
      this.editOneUser(this.form)
    },
    ...mapActions('user', ['editOneUser'])
  },
  props: ['user'],
  mounted () {
    if (this.user) {
      console.log('params: ', this.user)
    }
  }
}
</script>
