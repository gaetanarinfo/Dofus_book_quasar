<template>
  <div class="q-pa-md q-gutter-sm">

      <q-dialog v-model="modalClasses" persistent>
      <q-card style="background: rgb(31 31 31 / 78%) !important; color: white;">
       <q-img src="https://staticns.ankama.com/comm/news/dofus/www/08_2012/carrou-almanax1.jpg" />

         <q-separator />

         <div v-for="test in listClasseId" :key="test.id">{{ test.name }}</div>

        <q-card-actions align="right">
          <q-btn glossy clickable v-close-popup @click="$emit('closeModalClasses')" color="red-8">
             <q-item-section>
                <q-item-label>Fermer l'almanax</q-item-label>
              </q-item-section>
          </q-btn>  
        </q-card-actions>

      </q-card>
    </q-dialog>

  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import { log } from 'util'

export default {
  data () {
    return {
      classesId : null,
    }
  },
  methods: {
    checkClasses () {
      this.getClassesId(this.data)
      setTimeout(this.checkClasses, 2500)
    },
    ...mapActions('encyclopedie', ['getClassesId'])
  },
  computed : {
    ...mapState('encyclopedie', ['listClasseId'])
  },
  mounted () {
      this.checkClasses()
  },
  props: {
    modalClasses: {
      default: false
    },
    data: {
      type: String
    }
  }
}
</script>