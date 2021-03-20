<template>
<div class="video" style="padding-top: 0px !important; margin-top: -98px !important;">
<video autoplay="" muted="" loop="loop">
    <source src="videos/keyart.mp4" type="video/mp4">
</video>
</div>            
</template>

<script>
export default {
    name: 'videos'
}
</script>

<style lang="css">
.video {
        height: auto;
        top: 0;
        position: relative;
        left: 0;
        display: block;
        overflow: hidden;
        max-height: 774px;
        margin: 10px 0 -19px auto;
        padding: 0 0;
        max-width: 100%;
        text-align: center;
        width: 100%;
}
</style>