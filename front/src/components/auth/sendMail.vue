<template>
  <div class="row">
    <div class="col-12 col-md-12 col-xs-12">
 
        <div class="column absolute-right text-center bg-transparent">
          <q-avatar size="96px" class="q-ma-md shadow-10">
            <img :src="userData.avatar" />
          </q-avatar>
        </div>

        <div class="absolute-center bg-transparent" style="width: 700px">

        <q-form
        transition="flip-left"
      @submit="send"
      @reset="onReset"
    >

    <div class="col-sm-9 col-12 text-h4 font-bebas text-center text-white" style="padding: 20px 0 0 0;">Envoyer un message</div>

        <q-input
        style="padding: 0 0 10px 0;"
            filled
            v-model="formEdit.lastname"
            label="Nom *"
            hint="Nom"
        />

        <q-input
        style="padding: 16px 0 10px 0;"
            filled
            v-model="formEdit.firstname"
            label="Prénom *"
            hint="Prénom"
        />

        <q-input
        style="padding: 16px 0 10px 0;"
            filled
            v-model="formEdit.author"
            label="Pseudo *"
            hint="Pseudo"
        />

        <div class="q-gutter-md row items-start">
      <q-select
        filled
        v-model="formEdit.recipients"
        use-chips
        label="Destinataire"
        :options="options"
        @filter="filterFn"
        @filter-abort="abortFilterFn"
        style="width: 100%; padding: 16px 0 16px 0;"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              Pas de résultat
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>

        <q-input
        style="padding: 16px 0 16px 0;"
            filled
            v-model="formEdit.sujet"
            label="Sujet *"
            hint="Sujet"
        />

        <q-editor
        label="Message *"
          hint="Message"
        style="margin: 16px 0 16px 0;"
      v-model="formEdit.content"
      flat
      content-class="bg-white-5"
      toolbar-text-color="white"
      toolbar-toggle-color="blue-8"
      toolbar-bg="brown-8"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
        ],
        ['outdent', 'indent', 'undo', 'redo'],
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />

        <div style="padding: 16px 0 0 0;">
            <q-btn color="deep-orange" type="submit" glossy label="Valider"/>
            <q-btn label="Effacer" type="reset" color="red" glossy class="q-ml-sm" />
        </div>

    </q-form>
    </div>
    
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import { log } from 'util'

export default {
    name: 'send',
    data () {
    return {
      tab: 'send',
      options: null,
      editor: '<pre>Check out the two different types of dropdowns' +
        ' in each of the "Align" buttons.</pre> ',
      formEdit: {
        lastname: `${this.listUser.lastname}`,
        author: `${this.listUser.pseudo}`,
        firstname: `${this.listUser.firstname}`,
        recipients: null,
        sujet: "",
        content: "",
        avatar : `${this.listUser.avatar}`
      },
      userData: {
          avatar: `${this.listUser.avatar}`
      }
      
    }
  },
    methods: {
      filterFn (val, update, abort) {
      if (this.options !== null) {
        // already loaded
        update()
        return
      }

      setTimeout(() => {
        update(() => {

          let table = []

          this.listRecipient.forEach(res => {

            const parse = res.pseudo

            JSON.stringify(parse)      

            table.push(parse)

            this.options = table
            
          });
        
        })
      }, 2000)
    },

    abortFilterFn () {
      // console.log('delayed filter aborted')
    },
    send() {

      this.sendMail(this.formEdit)
       
    },
    onReset () {
      this.content = null
      this.lastname = null
      this.firstname = null
      this.author = null
      this.sujet = null
      this.recipients = null
    },
    ...mapActions('auth', ['sendMail']),
    checkAuth () {
      this.loggedDataUser()
      setTimeout(this.checkAuth, 2500)
    },
    ...mapActions('auth', ['loggedDataUser'])
  },
  mounted () {
    this.checkAuth()
  },
  props: {
    listUser : { 
      type: Object 
    },
    listRecipient : { 
      type: Array 
    }
  }
}
</script>