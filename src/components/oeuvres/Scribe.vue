<template>
    <div class="oeuvre">

        <div class="scribe">
            <h2>{{ $t('scribe.titre') }}</h2>
            <div class="scribe--wrapper">
                <p>{{ $t('scribe.contenu') }}</p>
                <img src="../../../public/img/scribe.jpg">
            </div>
        </div>

        <router-link :to="`/${$i18n.locale}/liberte`" class="oeuvreSlide prev">{{ $t('prev') }}</router-link>
        <router-link :to="`/${$i18n.locale}/dentelliere`" class="oeuvreSlide next">{{ $t('next') }}</router-link>

    </div>
</template>
<script>
    export default {
        name: "Scribe"
    }
</script>

<style scoped>

</style>
