<template>
  <q-card class="col-md-3 col-xs-3 text-center">
    <p class="text-h4">{{ title }}</p>
    <q-separator/>

    <q-list bordered>
      <q-item v-for="user in listUser"
        :key="user.id" class="q-my-sm"
        clickable  v-ripple
        :to='{ name: "PageUser", params: { user } }'
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
          <q-item-label caption lines="1">{{ user.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="edit" color="warning"/>
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>

  </q-card>
</template>

<script>
export default {
  name: 'put',
  data () {
    return {
      title: 'Put'
    }
  },
  props: {
    listUser: Array
  }
}
</script>
