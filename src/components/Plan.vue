<template>
    <div class="plan--wrapper">
        <section class="parallax">
            <img src="../../public/img/cielHalo.png" id="ciel"/>
            <img src="../../public/img/notredame.png" id="notreDame"/>
            <img src="../../public/img/bat2V.png" id="bat"/>
            <img src="../../public/img/pyramideV.png" id="pyra"/>
            <img src="../../public/img/solV.png" id="sol"/>
            <h2 id="text">{{ $t('plan.esplanade') }}</h2>
        </section>

        <h3 class="h3pyra">{{ $t('plan.pyramide') }}</h3>
        <div class="plan--txt pyramide--plan">
            <img src="../../public/img/pyra1.jpg" class="pyra">
            <p>{{ $t('plan.txtPyramide') }}</p>

        </div>
        <h3 class="h3car">{{ $t('plan.carousel') }}l</h3>
        <div class="plan--txt carousel--plan">
            <p class="pcar">{{ $t('plan.txtCarousel') }}</p>
            <img src="../../public/img/carousel.jpg" class="carousel">
        </div>

        <h3 class="h3plan">{{ $t('plan.plan') }}</h3>
        <img src="../../public/img/plan.svg" class="plan">
    </div>
</template>

<script>
    export default {
        name: "Plan"
    }
</script>

<style scoped>

</style>
