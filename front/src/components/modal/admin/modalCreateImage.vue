<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="modalCreateImage" persistent>
      <q-card
        style="background: #535658bf !important; color: white; width: 700px; max-width: 80vw;"
      >
        <q-toolbar>
          <q-avatar>
            <img
              src="https://styles.redditmedia.com/t5_2sl1e/styles/communityIcon_w2pemjj4a7b21.png?width=256&s=2388bd09a659c346fce7c8d5eb82143a1ebf4a72"
            />
          </q-avatar>

          <q-toolbar-title>
            <span class="text-weight-bold">Crée un article</span>
          </q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup @click="$emit('closeModalCreateImage')">
            <q-tooltip anchor="top middle" self="center middle">Fermer</q-tooltip>
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
              filled
              req
              v-model="form.title"
              label="Titre de l'image *"
              hint="Titre de l'image"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Merci d\'enter un titre']"
            />

            <q-file
              style="margin: 16px 0 16px 0;"
              type="file"
              v-model="form.files"
              label="Image de l'article"
              hint="Image de l'article"
              filled
              counter
              :counter-label="counterLabelImage"
              max-files="1"
              multiple
              @change="uploadFile"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Merci de choisir une image']"
            >
              <template v-slot:prepend>
                <q-icon name="image" />
              </template>
            </q-file>

            <div style="padding: 16px 0 0 0;">
              <q-btn color="green-8" type="submit" glossy label="Valider" />
              <q-btn label="Effacer" type="reset" color="yellow-10" glossy class="q-ml-sm" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import { log } from "util";

export default {
  data() {
    return {
      form: {
        title: "",
        files: null,
      }
    };
  },
  components: {},
  methods: {
    counterLabelImage({ totalSize, filesNumber, maxFiles }) {
      return `${filesNumber} fichier sur ${maxFiles} | ${totalSize}`;
    },
    uploadFile(event) {
      this.files = event.target.files;
    },
    send() {
      this.postImage(this.form);
    },
    onReset() {
      this.files = null;
      (this.title = "")
    },
    ...mapActions("general", ["postImage"])
  },
  props: {
    modalCreateImage: {
      default: false
    }
  }
};
</script>