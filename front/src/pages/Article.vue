<template>
  <div class="q-pa-md">
    <div class="row q-pa-md">
      <div class="col-md-12 col-12 col-sm-12">
        <div class="q-breadcrumbs text-brown">
          <div class="flex items-center justify-center q-gutter-sm">
            <div class="flex items-center text-primary">
              <span
                class="q-breadcrumbs__el q-link flex inline items-center relative-position text-white text-bold"
                style="letter-spacing: 0.5px;"
              >
                <i
                  aria-hidden="true"
                  role="presentation"
                  class="q-breadcrumbs__el-icon material-icons q-icon notranslate q-breadcrumbs__el-icon--with-label"
                >home</i>
                Accueil
              </span>
            </div>
            <div class="q-breadcrumbs__separator">
              <i
                aria-hidden="true"
                role="presentation"
                class="material-icons q-icon notranslate text-white"
                style="font-size: 1.5em;"
              >chevron_right</i>
            </div>
            <div class="flex items-center text-primary">
              <span
                class="q-breadcrumbs__el q-link flex inline items-center relative-position text-white text-bold"
                style="letter-spacing: 0.5px;"
              >
                <i
                  aria-hidden="true"
                  role="presentation"
                  class="q-breadcrumbs__el-icon material-icons q-icon notranslate q-breadcrumbs__el-icon--with-label"
                >pages</i>Article
              </span>
            </div>
            <div class="q-breadcrumbs__separator">
              <i
                aria-hidden="true"
                role="presentation"
                class="material-icons q-icon notranslate text-white"
                style="font-size: 1.5em;"
              >chevron_right</i>
            </div>
            <div class="flex items-center q-breadcrumbs--last">
              <span
                class="q-breadcrumbs__el q-link flex inline items-center relative-position text-bold"
                style="color: rgb(251, 140, 0) !important; letter-spacing: 0.5px;"
              >
                <i
                  aria-hidden="true"
                  role="presentation"
                  class="q-breadcrumbs__el-icon material-icons q-icon notranslate q-breadcrumbs__el-icon--with-label"
                >navigation</i>
                {{listNewsId.title}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="bloc-parent">
        <div class="btn-return">
          <q-btn outline style="color: goldenrod;" label="Retour en arrière" to="/news" />
        </div>

        <div class="bloc col-md-12 col-12 col-sm-12">
          <div class="bloc-d">
            <img
              :src="listNewsId.category"
              width="65px"
              style="display: inline-block; margin-left: 10px;"
            />
            <h4 class="text-white font-bebas h4-perso">{{listNewsId.title}}</h4>
            <span class="bloc-text" style="position: relative;">{{listNewsId.cat}} - {{dateGet}}</span>
          </div>

          <div>
            <p class="content-p" v-html="listNewsId.content2"></p>
          </div>

          <div class="bloc-e">
            <q-btn
              push
              class="glossy"
              round
              color="light-blue-13"
              style="margin: 10px 10px;"
              icon="fab fa-facebook-f"
            >
              <q-tooltip anchor="top middle" self="center middle">Partager sur facebook</q-tooltip>
            </q-btn>

            <q-btn push class="glossy" round color="deep-orange-13" icon="fab fa-twitter">
              <q-tooltip anchor="top middle" self="center middle">Partager sur twitter</q-tooltip>
            </q-btn>
          </div>
        </div>

        <div class="btn-return" style="margin: 8px auto 0 0;">
          <q-btn outline style="color: goldenrod;" label="Retour en arrière" to="/news" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.btn-return {
  position: relative;
  display: block;
  margin: 0 auto 8px 0;
  text-align: right;
}

.bloc-parent {
  position: relative;
  padding: 15px 15px 15px 15px;
  margin: 0 auto;
  background: rgb(255 255 255 / 21%);
  box-shadow: 0px -1px 8px 0px #8e8e8e9e;
}

.bloc-d {
  display: inline-block;
  width: 100%;
  border-bottom: 2px solid #585a587d;
  height: 88px;
}

.bloc-e {
  display: inline-block;
  width: 100%;
  border-top: 2px solid rgba(88, 90, 88, 0.49);
  height: 77px;
  padding: 6px;
}

.bloc {
  background: rgba(154, 159, 165, 0.8) !important;
  width: 856px !important;
  height: auto !important;
}

.bloc-text {
  position: relative;
  display: block;
  top: -21px;
  left: 88px;
  font-size: 15px;
  font-weight: 500;
  color: white;
  text-shadow: 0px 0px 3px #383535;
}

.h4-perso {
  position: relative;
  display: inline-block;
  margin: 0 0 0 13px;
  top: -19px;
}

.content-p {
  padding: 4px 22px 4px 22px;
}
</style>

<script>
import { mapActions, mapState, mapMutations, mapGuetters } from "vuex";
import { date } from "quasar";
import { log } from "util";
import moment from "moment";
import { title } from 'process';

export default {
  name: "articleId",
  data() {
    return {
      dateGet : '',
      title : '',
      description : ''
    };
  },
  computed: {
    ...mapState("auth", ["adminIn"]),
    ...mapState("news", ["listNewsId"])
  },
  methods: {
    ...mapMutations("auth", ["setAdminIn"]),
    ...mapActions("news", ["getNewsId"]),
    mountedData () {
      let dateCreate = this.listNewsId.dateCreate;

      let date = new Date(dateCreate);

      moment.locale("fr");

      this.dateGet =  moment(dateCreate).format("dddd Do MMMM YYYY, h:mm")
      
      this.title = 'Dofus Book - ' + this.listNewsId.title
      this.description = this.listNewsId.content
      console.log(this.getNewsId);
    }
  },
  mounted() {
    this.getNewsId(this.$route.params.id);
    this.mountedData();
  },
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: this.title,
      description: {
          name: "description",
          content: ''
        },
        keywords: { name: "keywords", content: "dofus, dofus-book, article" },
        equiv: {
          "http-equiv": "Content-Type",
          content: "text/html; charset=UTF-8"
        }
      }

  },
};
</script>