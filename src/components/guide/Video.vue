<template>
    <div class="videoPage">
        <h3>{{ $t('video.titre') }}</h3>

        <div class="video--txt">
            <div class="video--wrapper">
                <p>{{ $t('video.contenu') }}</p>
                <h4>{{ $t('video.prix') }} : 9 €</h4>
            </div>

            <img src="../../../public/img/video.png" class="video--img">
        </div>
        <router-link :to="`/${$i18n.locale}/audio`" class="videoSlide prev">{{ $t('video.prev') }}</router-link>
        <router-link :to="`/${$i18n.locale}/appli`" class="videoSlide next">{{ $t('video.next') }}</router-link>
    </div>
</template>

<script>
    export default {
        name: "video"
    }
</script>

<style scoped>

</style>
