<template>
  <div class="q-pa-md q-gutter-sm">

      <q-dialog v-model="modal5" persistent>
      <q-card style="background: rgb(31 31 31 / 78%) !important; color: white;">
       <q-img src="https://staticns.ankama.com/comm/news/dofus/www/08_2012/carrou-almanax1.jpg" />

         <q-card-section>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ listAlmanax.name }}
            </div>
     
              <q-img style="width: 80px;" :src="`https://vertylo.github.io/wakassets/merydes/${listAlmanax5}.png`" />
              
          </div>
          
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
             {{ listAlmanax.day }}  {{ listAlmanax.month }}  {{ listAlmanax.year }}
          </div>
          <div class="text-caption text-grey">
             {{ listAlmanax3 }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle2">
             Bonus : {{ listAlmanax4 }}
          </div>
        </q-card-section>

        <q-separator />

         <q-card-section class="q-pt-none">
          <div class="text-subtitle2">
             {{ listAlmanax2.content2 }} 
          </div>

            <q-img style="width: 80px;" :src="listAlmanax2.img2" />
          
        </q-card-section>

         <q-separator />

        <q-card-actions align="right">
          <q-btn glossy color="green-8" type="a" href="http://www.krosmoz.com/fr/almanax" target="_blank">
            <q-item-section>
                <q-item-label>Voir l'almanax</q-item-label>
              </q-item-section>
          </q-btn>

          <q-btn glossy clickable v-close-popup @click="$emit('closeModalAlmanax')" color="red-8">
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
      almanax : null,
    }
  },
  methods: {
    checkAlmanax () {
      this.getAlmanax()
      this.getAlmanax2()
      setTimeout(this.checkAlmanax, 2500)
    },
    ...mapActions('almanax', ['getAlmanax']),
    ...mapActions('almanax', ['getAlmanax2'])
  },
  computed : {
    ...mapState('almanax', ['listAlmanax']),
    ...mapState('almanax', ['listAlmanax2']),
    ...mapState('almanax', ['listAlmanax3']),
    ...mapState('almanax', ['listAlmanax4']),
    ...mapState('almanax', ['listAlmanax5'])
  },
  mounted () {
      this.checkAlmanax()
  },
  props: {
    modal5: {
      default: false
    },
  }
}
</script>