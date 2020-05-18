<template>
    <div class="lensPage">
        <h3>{{ $t('lens.titre') }}</h3>

        <div class="lens--txt">
            <img src="../../public/img/louvreLens2.jpg" class="lens--img">
            <p>{{ $t('lens.contenu') }}</p>
            <div class="arrow">
                <a href="https://www.louvrelens.fr/" target="_blank" class="site--link">
                    <h4>{{ $t('lens.link') }}</h4>
                    <img class="arrowRight" src="../../public/img/right-arrow.png">
                </a>

            </div>
        </div>

        <img src="../../public/img/louvreLens.png" alt="" class="lensMap">

        <router-link :to="`/${$i18n.locale}/ad`" class="lensSlide next">{{ $t('lens.other') }}</router-link>
    </div>
</template>

<script>
    export default {
        name: "Lens"
    }
</script>

<style scoped>

</style>
