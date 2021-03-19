<template>
  <div class="row items-start q-gutter-md justify-center mobile">
    <div class="dof-block dof-block-launcher" style="min-height: 684px;">
      <div class="dof-block-content">
        <div class="dof-title-block">l'ankama launcher</div>
        <div class="row">
          <div class="col-md-7">
            <div class="text-center">
              <img
                class="img-responsive dof-img-launcher"
                style="max-width: 100%;"
                src="images/dofus/launcher.fr.jpg"
                alt
              />
            </div>
          </div>
          <div class="col-md-5">
            <div class="dof-text">
              <p>Ankama Launcher est un portail multi-jeux qui rassemble tous nos titres PC et vous permet d'accéder aux univers Ankama en un clic. Mais pas que :</p>
              <ul>
                <li>Profitez de téléchargements et d'installations de mises à jour simplifiés.</li>
                <li>Restez informé sur les dernières nouveautés.</li>
                <li>Discutez avec vos amis via un chat multi-jeux.</li>
              </ul>
              <p>Prêt à franchir le portail pour vivre des aventures Krosmiques uniques ?</p>
              <a
                class="btn btn-lg btn-primary dof-btn-launcher"
                href="#/download"
              >téléchargez&nbsp; ankama&nbsp; launcher</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "launcher"
};
</script>