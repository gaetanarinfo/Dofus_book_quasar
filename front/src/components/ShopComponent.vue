<template>
  <div class="row items-start q-gutter-md justify-center q-mb-md">
    <div class="dof-title-eshop">Boutique DOFUS</div>

    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="green-5"
      navigation
      padding
      arrows
      height="300px"
      style="width: 774px; background: transparent;"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <div class="col-6 full-height dof-border-shop">
            <a
              href="https://aas.ankama.com/click?q=9DC25D625C46F0B2D57686914C0ECBD5"
              target="_blank"
            >
              <q-img src="shop/1161898.jpg">
                <div class="absolute-bottom text-subtitle1 text-center">
                  Affiche Ilyzaelle (70 x 49,5 cm)
                  <br />Relief et effet doré
                </div>
              </q-img>
            </a>
          </div>

          <div class="col-6 full-height dof-border-shop">
            <a
              href="https://aas.ankama.com/click?q=C2A1C76E29ADD03644B27AD1FEE84154"
              target="_blank"
            >
              <q-img src="shop/1138912.jpg">
                <div class="absolute-bottom text-subtitle1 text-center">
                  3 nouveaux pin's de tout poil !
                  <br />Dauge, Tifoux et Tiwabbit
                </div>
              </q-img>
            </a>
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <div class="col-6 full-height dof-border-shop">
            <a
              href="https://www.ankama-shop.com/fr/label-619/2619-mutafukaz-le-film-edition-collector-blu-ray.html"
              target="_blank"
            >
              <q-img src="shop/mutafukaz-le-film-edition-collector-blu-ray.png">
                <div class="absolute-bottom text-subtitle1 text-center">
                  MUTAFUKAZ - LE FILM : ÉDITION COLLECTOR BLU-RAY
                </div>
              </q-img>
            </a>
          </div>

          <div class="col-6 full-height dof-border-shop">
            <a
              href="ankama-shop.com/fr/dofus/2537-pendentif-dofus-emeraude-en-cristal-swarovski.html"
              target="_blank"
            >
              <q-img src="shop/pendentif-dofus-emeraude-en-cristal-swarovski.png">
                <div class="absolute-bottom text-subtitle1 text-center">
                  PENDENTIF DOFUS EMERAUDE EN CRISTAL SWAROVSKI
                </div>
              </q-img>
            </a>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>  


<style lang="sass">
.dof-border-shop
    background: #ffffff14
    padding: 6px 4px 6px 4px
    height: 192px !important
    transition: all 200ms
    cursor: pointer
    &:hover
        opacity: 0.8

@media (min-width: 1550px)
.dof-title-eshop
    text-align: left
    margin: 0 0 0 140px

@media (min-width: 992px)
.dof-title-eshop
    padding-bottom: 0

.dof-title-eshop
    display: block
    position: relative
    font-size: 48px
    margin: 0
    font-family: "bebas",sans-serif
    text-transform: uppercase
    line-height: 14px
    text-align: center
    padding-bottom: 58px
    color: #f6eed6
    top: 77px
</style>

<script>
export default {
  name: "shop",
  data() {
    return {
      slide: 1
    };
  }
};
</script>