<template>
  <div class="q-pa-md q-gutter-sm">

      <q-dialog v-model="modal3" persistent>
      <q-card style="background: #535658bf !important; color: white;width: 700px; max-width: 80vw;">
        <q-toolbar>
          <q-avatar>
            <img :src='data.category'>
          </q-avatar>

          <q-toolbar-title><span class="text-weight-bold">{{ data.title }}</span></q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup @click="$emit('closeModalEditNews')">
            <q-tooltip anchor="top middle" self="center middle">
               Fermer l'actualité
                </q-tooltip>
          </q-btn>    
 
        </q-toolbar>

         <q-card-section>
           <q-form
           style="margin-top : 0px !important; background-color: #acb5aec7;"
      @submit="send"
      @reset="onReset"
    >
        <q-input
        style="padding: 16px 0 16px 0;"
        v-model="form.title"
        :value="data.title"
            filled
            req 
            label="Titre de l'article *"
            hint="Titre de l'article"
            lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter un titre']"
        />

    <q-file
    style="margin: 16px 0 16px 0;"
        type="file"
        disabled
        v-model="form.files"
        label="Image de l'article"
        hint="Image de l'article"
        filled
        counter
        :counter-label="counterLabelImage"
        max-files="1"
        multiple
        @change="uploadFile"
      >
        <template v-slot:prepend>
          <q-icon name="image" />
        </template>
      </q-file>

      <q-img style="width 100%;" :src='data.image' />

    <q-input
     style="margin: 16px 0 0 0;"
      :value="data.content"
      filled
      label="Description de l'article *"
     hint="Description de l'article"
      type="textarea"
      lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter une description']"
    />

    <q-input
    style="margin: 16px 0 16px 0;"
    :value="data.url"
      filled
      label="Url de l'article *"
     hint="Url de l'article"
     lazy-rules :rules="[ val => val && val.length > 0 || 'Merci d\'enter un url']"
    />

     <q-select
     filled
     disable
        v-model="form.cat"
        label="Catégorie"
         hint="Catégorie"
        color="orange"
     >
    
      </q-select>

      <q-select
      disable
      style="margin: 16px 0 0 0;"
        filled
        v-model="form.category"
        label="Image Catégorie"
         hint="Image Catégorie"
        color="orange"
      >
      </q-select>

        <div style="padding: 16px 0 0 0;">
            <q-btn color="green-8" type="submit" glossy label="Valider"/>
            <q-btn label="Effacer" type="reset" color="yellow-10" glossy class="q-ml-sm" />
        </div>

    </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    data () {
    return {
       form : {
                newsId : this.$props.data._id, 
                title : this.$props.data.title,
                content : this.$props.data.content,
                url : this.$props.data.url,
                cat : this.$props.data.cat,
                files: null,
                optionsCat: [
                {
                  label: 'Event',
                  value: 'Event',
                  icon: 'api'
                },
                {
                  label: 'Shop',
                  value: 'Shop',
                  icon: 'api'
                },
                {
                  label: 'Info',
                  value: 'Info',
                  icon: 'api'
                },
                {
                  label: 'Communauté',
                  value: 'Communauté',
                  icon: 'api'
                }
              ],
                category : this.$props.data.category,
                optionsCategorie: [
                {
                  label: 'Event',
                  value: 'https://gaetan.store/images/dofus/news/cat/419540.png',
                  description: 'Event',
                  icon: 'api'
                },
                {
                  label: 'Shop',
                  value: 'https://gaetan.store/images/dofus/news/cat/419540.png',
                  description: 'Shop',
                  icon: 'api'
                },
                {
                  label: 'Info',
                  value: 'https://gaetan.store/images/dofus/news/cat/419540.png',
                  description: 'Info',
                  icon: 'api'
                },
                {
                  label: 'Communauté',
                  value: 'https://gaetan.store/images/dofus/news/cat/420041.png',
                  description: 'Communauté',
                  icon: 'api'
                }
              ]
            }
      }
  },
  components: {

  },
  methods: {
    onReset () {
      this.cat = null
      this.files = null
      this.category = null
    },
     counterLabelImage ({ totalSize, filesNumber, maxFiles }) {
            return `${filesNumber} fichier sur ${maxFiles} | ${totalSize}`
        },
      uploadFile (event) {
        this.files = event.target.files
        },
      send() { 

        this.editNews(this.form)
       
    },
    ...mapActions('news', ['editNews'])
  },
  props: {
    modal3: {
      default: false
    },
    data: {
      type: Object
    },
  }
}
</script>