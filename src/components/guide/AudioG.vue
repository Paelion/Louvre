<template>
    <div class="audioPage">
        <h3>{{ $t('audio.titre') }}</h3>

        <div class="audio--txt">
            <div class="audio--wrapper">
                <p>{{ $t('audio.contenu') }}</p>
                <h4>{{ $t('audio.prix') }} : 6 €</h4>
            </div>

            <img src="../../../public/img/audio.png" class="audio--img">
        </div>
        <router-link :to="`/${$i18n.locale}/video`" class="audioSlide next">{{ $t('audio.next') }}</router-link>
    </div>
</template>

<script>
    export default {
        name: "audio"
    }
</script>

<style scoped>

</style>
