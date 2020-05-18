<template>
    <div class="adPage">
        <h3>{{ $t('ad.titre') }}</h3>

        <div class="ad--txt">
            <img src="../../public/img/louvreAD2.jpg" class="ad--img">
            <p>{{ $t('ad.contenu') }}</p>
            <div class="arrow">
                <a href="https://www.louvre.fr/louvre-abu-dhabi" target="_blank"  class="site--link">
                    <h4>{{ $t('ad.link') }}</h4>
                    <img class="arrowRight" src="../../public/img/right-arrow.png">
                </a>

            </div>
        </div>

        <img src="../../public/img/louvreAD.png" alt="" class="adMap">

        <router-link :to="`/${$i18n.locale}/lens`" class="adSlide prev">{{ $t('ad.other') }}</router-link>
    </div>
</template>

<script>
    export default {
        name: "Ad"
    }
</script>

<style scoped>

</style>
