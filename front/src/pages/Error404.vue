<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="scenery">
        <div class="stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        <div class="planet planet1"></div>
        <div class="planet planet2"></div>
        <div class="planet planet3"></div>
        <div class="title">
          <h1>
            <span>4</span>
            <div class="square">
              <div class="light light1"></div>
              <div class="light light2"></div>
              <div class="light light3"></div>
              <div class="light light4"></div>
              <div class="shadow shadow1"></div>
              <div class="shadow shadow2"></div>
              <ul class="stairs1">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul class="stairs2">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul class="stairs3">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul class="stairs4">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <span>4</span>
          </h1>
        </div>
        <div class="message">
          <h2>Tous les chemins mènent au monde des douze...</h2>
          <br />
          <h3>sauf celui-là !</h3>
        </div>
        <div class="action">
          <br />
          <a class="btn-redirect" href="/">Allez à l'accueil</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.dofus {
    background-color: #482472!important;
}
</style>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import '../../public/css/404.sass'

export default defineComponent({
  name: "Error404",
  meta() {
    return {
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      title: "Dofus Book - Erreur 404",
      description: {
        name: "description",
        content:
          "Plusieurs milliers de joueurs dans le monde. DOFUS est un jeu de rôle massivement multijoueur où le but est de retrouver les 6 précieux Dofus pour devenir maître d'Amakna."
      },
      keywords: {
        name: "keywords",
        content:
          "mmo, mmorpg, free mmorpg, free online mmorpg, video game, video game rental, video game system, free video game, online game, multiplayer game, free multiplayer game, dofus community, comics, pc game, pc game cheat, game, free game, online game, toy game, addicting game"
      },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    };
  }
});
</script>
