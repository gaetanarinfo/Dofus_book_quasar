<template>
<div class="row items-start q-gutter-md justify-center" style="margin-bottom: 0;">
  <div class="dof-block-config-global" style="padding-bottom: 37px;">
    <div class="dof-title dof-opacity initialized dof-opacity-on" rank="1">Configuration système</div>
    <div class="dof-separator dof-opacity initialized dof-opacity-on" rank="2"></div>
    <div class="dof-text dof-opacity initialized dof-opacity-on" rank="3">
      <p>Jeu disponible sur Windows, Mac et Linux.</p>
      <div class="dof-block-btn-config">
        <a
          class="dof-btn-config"
          href="javascript:void(0)"
        >Afficher la configuration minimale et recommandée</a>
      </div>
    </div>
  </div>
</div>  
</template>

<style lang="css">

.dof-title {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 36px;
    color: #ffffff;
    margin-top: 12px;
    text-align: center;
    text-shadow: 0 2px 4px #000;
}

.dof-opacity.dof-opacity-on[rank="1"] {
  -webkit-transition: opacity 1s linear 220ms;
  transition: opacity 1s linear 220ms;
}

.dof-separator {
  content: "";
  display: block;
  background: url('/../images/dofus/separator.png') center center no-repeat
    transparent;
  height: 21px;
  margin: 12px 0;
}

.dof-text p {
  color: #ffffff;
  font-family: "Roboto";
  margin-bottom: 0;
  text-align: center;
  font-size: 14px;
}

.dof-text .dof-block-btn-config {
  text-align: center;
  margin: 12px 0 24px;
}

@media (min-width: 768px) {
.dof-text .dof-block-btn-config a {
    font-size: 15px;
  }
}

.dof-text .dof-block-btn-config a {
  color: #799f8d;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.4);
  padding: 6px 12px;
  font-weight: normal;
}
</style>