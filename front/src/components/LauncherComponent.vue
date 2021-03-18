<template>
  <div class="row items-start q-gutter-md justify-center" style="margin-bottom: -50px;">
    <div class="dof-block dof-block-launcher" style="min-height: 684px;">
      <div class="dof-block-content">
        <div class="dof-title-block">l'ankama launcher</div>
        <div class="row">
          <div class="col-md-7">
            <div class="text-center">
              <img
                class="img-responsive dof-img-launcher"
                style="max-width: 100%;"
                src="/../images/dofus/launcher.fr.jpg"
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

<style lang="css">

.img-responsive {
    display: block;
    max-width: 100%;
    height: auto;
}

.dof-block-launcher .dof-block-content .dof-text .dof-btn-launcher:hover {
  background: #f5c625;
}

.dof-block-launcher .dof-block-content .dof-text ul li:before {
  content: " ";
  display: block;
  position: absolute;
  background: #f5c625;
  -webkit-mask-image: url("/../images/dofus/launcher.svg");
  mask-image: url("/../images/dofus/launcher.svg");
  -webkit-mask-size: 20px 20px;
  mask-size: 20px 20px;
  -webkit-mask-position: center;
  mask-position: center;
  height: 20px;
  width: 20px;
  top: 3px;
  left: 0;
}

@media (min-width: 992px) {
  .dof-block-launcher .dof-block-content .dof-text .dof-btn-launcher {
    font-size: 40px;
    margin: 0;
    max-width: none;
    white-space: nowrap;
  }
}

.dof-block-launcher .dof-block-content .dof-text .dof-btn-launcher {
  text-shadow: none;
  text-decoration: none;
  font-size: 36px;
  padding: 8px 0 0 0;
  font-family: "bebas", sans-serif;
  line-height: 52px;
  min-height: 57px;
  text-align: center;
  margin: 0 auto;
  display: block;
  white-space: normal;
  background: #d5ac23;
  box-shadow: 0 0 0 4px #f5c625 inset;
  border: 1px solid #000;
  color: #282222; 
  transition: all .3s ease;
}

.dof-block-launcher .dof-block-content .dof-text ul li {
  padding-left: 25px;
  position: relative;
  list-style: none;
}

.dof-block-launcher .dof-block-content .dof-text ul {
  margin-bottom: 48px;
  padding: 0;
}

.dof-block-launcher .dof-block-content .dof-text p {
  margin-bottom: 48px;
}

@media (min-width: 992px) {
  .dof-block-launcher .dof-block-content .dof-title-block {
    line-height: 25px;
  }
}

.dof-block-content .dof-title-block {
  text-align: center;
  font-size: 48px;
  margin: 90px 0 35px 0;
  font-family: "bebas", sans-serif;
  text-transform: uppercase;
  line-height: 40px;
  color: #f6eed6;
}

@media (min-width: 992px) {
  .dof-block-launcher .dof-block-content .dof-text {
    margin-top: 6px;
    max-width: 490px;
    padding: 0;
  }
}

.dof-block-launcher .dof-block-content .dof-text {
  font-size: 16px;
  margin: 0 auto;
  padding: 0 2%;
  color: #f6eed6;
}

.dof-block-launcher .dof-block-content .dof-img-launcher {
  max-width: 761px;
  display: inline-block;
  border: 1px solid #6d549f;
  box-shadow: 0 0 30px 5px #6d549f;
}

.dof-block .dof-block-content {
  position: relative;
  max-width: 1560px;
  margin: 0 auto;
}

@media (min-width: 1200px) {
  .dof-block-launcher .dof-block-content {
    padding: 0 12px;
  }
}

.dof-block-launcher .dof-block-content {
  overflow: hidden;
  min-height: 680px;
  padding: 0 8%;
}
</style>
