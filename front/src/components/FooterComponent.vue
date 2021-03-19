<template>
  <q-footer elevated class="bg-grey-8 text-white dof-footer" style="padding: 10px 15px 14px 15px;position: fixed;">
    <q-toolbar>
      <q-toolbar-title>
        <p class="text-center font-bebas" style="font-size: 30px;">Dofus Book sur les réseaux sociaux</p>
      </q-toolbar-title>
    </q-toolbar>
    <q-toolbar class="justify-center">
      <div>
        <q-btn class="glossy q-mr-md" color="blue-6" icon="fab fa-facebook-f" />
        <q-btn class="glossy q-mr-md" color="red-6" icon="fab fa-twitter" />
        <q-btn class="glossy" color="green-6" icon="fas fa-share-alt" />
      </div>
    </q-toolbar>
  </q-footer>
</template>

<style lang="css">
.dof-footer {
  background-image: url(/images/dofus/bg-social.jpg) !important;
  background-position-x: 66% !important;
  background-position-y: 3px !important;
  background-size: auto !important;
  background-repeat: repeat !important;
  background-attachment: initial !important;
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>