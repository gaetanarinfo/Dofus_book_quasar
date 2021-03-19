<template>
    <div class="row items-start q-gutter-md justify-center" style="margin-bottom: 0;">
      <div class="dof-block-config-global" style="padding-bottom: 37px;">
        <div class="dof-title dof-opacity initialized dof-opacity-on" rank="1">Configuration système</div>
        <div class="dof-separator dof-opacity initialized dof-opacity-on" rank="2"></div>
        <div class="dof-text dof-opacity initialized dof-opacity-on" rank="3">
          <p>Jeu disponible sur Windows, Mac et Linux.</p>
          <div class="dof-block-btn-config">
            <a
              id="btn-show"
              class="dof-btn-config"
              @click="show()"
            >Afficher la configuration minimale et recommandée</a>

            <a
              id="btn-hide"
              style="display: none;"
              class="dof-btn-config"
              @click="hide()"
            >Marsquer la configuration minimale et recommandée</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'system',
  data() {
    return {};
  },
  methods: {
    show() {
      document.getElementById("btn-show").style.display = "none";
      document.getElementById("btn-hide").style.display = "block";
      document.getElementById("system2").style.display = "";
    },
    hide() {
      document.getElementById("btn-show").style.display = "block";
      document.getElementById("btn-hide").style.display = "none";
      document.getElementById("system2").style.display = "none";
    }
  }
};
</script>